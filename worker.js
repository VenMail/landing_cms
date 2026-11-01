// Serve the static export with canonical page URLs and genuine HTTP errors.

const MIME = new Map(Object.entries({
  html: 'text/html; charset=utf-8',
  js: 'application/javascript; charset=utf-8',
  css: 'text/css; charset=utf-8',
  json: 'application/json; charset=utf-8',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  svg: 'image/svg+xml',
  webp: 'image/webp',
  gif: 'image/gif',
  ico: 'image/x-icon',
  mp4: 'video/mp4',
  xml: 'application/xml',
  txt: 'text/plain; charset=utf-8',
  woff: 'font/woff',
  woff2: 'font/woff2',
  ttf: 'font/ttf',
  otf: 'font/otf',
  eot: 'application/vnd.ms-fontobject',
}));

const PERMANENT_REDIRECTS = new Map([
  ['/careers', '/career'],
]);

// This endpoint uses the existing anonymous onboarding lookup, not an
// authenticated account. The per-isolate limit is an additional guard, not
// a substitute for provider-side distributed rate limiting.
const lookupLimits = new Map();
function lookupDomain(value) {
  const domain = String(value || '').trim().toLowerCase();
  if (domain.length > 253 || !domain.includes('.') || /^\d+(?:\.\d+){3}$/.test(domain)) return null;
  const labels = domain.split('.');
  if (!labels.every(part => part.length > 0 && part.length <= 63 && /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(part))) return null;
  if (!/^[a-z][a-z0-9-]{1,62}$/.test(labels.at(-1))) return null;
  return domain;
}

async function publicWhois(req, url) {
  const domain = lookupDomain(url.searchParams.get('domain'));
  if (!domain) return Response.json({ message: 'Enter a valid domain name, such as example.com.' }, { status: 400 });
  const ip = req.headers.get('CF-Connecting-IP') || 'unknown';
  const now = Date.now();
  if (lookupLimits.size > 10000) lookupLimits.clear();
  const previous = lookupLimits.get(ip);
  const record = !previous || previous.until <= now ? { until: now + 60000, count: 0 } : previous;
  if (++record.count > 12) return Response.json({ message: 'Too many requests. Try again shortly.' }, { status: 429, headers: { 'retry-after': '60' } });
  lookupLimits.set(ip, record);
  try {
    const init = await fetch('https://m.venmail.io/login', { signal: AbortSignal.timeout(10000) });
    if (!init.ok) throw new Error('session unavailable');
    const rawCookies = typeof init.headers.getSetCookie === 'function' ? init.headers.getSetCookie().join(', ') : init.headers.get('set-cookie') || '';
    const xsrf = rawCookies.match(/(?:^|[,;]\s*)XSRF-TOKEN=([^;]+)/i)?.[1];
    const session = rawCookies.match(/(?:^|[,;]\s*)venmail_session=([^;]+)/i)?.[1];
    if (!xsrf || !session) throw new Error('session unavailable');
    const upstream = await fetch('https://m.venmail.io/domains/whois', {
      method: 'POST', signal: AbortSignal.timeout(30000),
      headers: { 'accept': 'application/json', 'content-type': 'application/json', 'x-xsrf-token': decodeURIComponent(xsrf), 'cookie': `XSRF-TOKEN=${xsrf}; venmail_session=${session}` },
      body: JSON.stringify({ domain }),
    });
    if (!upstream.ok) throw new Error('lookup unavailable');
    const data = await upstream.json();
    if (!data.success || !data.results?.has_records) return Response.json({ domain, message: 'No registration or nameserver details were confirmed. This does not mean the domain is available.' }, { headers: { 'cache-control': 'no-store' } });
    const r = data.results;
    const nameservers = Array.isArray(r.nameservers) ? r.nameservers.filter(x => typeof x === 'string').slice(0, 20) : [];
    return Response.json({ domain, registrar: typeof r.registrar === 'string' ? r.registrar : null, nameservers, hasRecords: true }, { headers: { 'cache-control': 'public, max-age=300' } });
  } catch {
    return Response.json({ message: 'Domain lookup is temporarily unavailable. Try again later.' }, { status: 503, headers: { 'cache-control': 'no-store' } });
  }
}

function canonicalPath(pathname) {
  let path = pathname.replace(/\/{2,}/g, '/').replace(/\/+$/, '') || '/';
  if (path === '/index.html') return '/';
  if (path.endsWith('.html')) path = path.slice(0, -5);
  return path;
}

function toKey(path) {
  if (path === '/') return 'index.html';
  const key = path.slice(1);
  return key.split('/').pop().includes('.') ? key : `${key}.html`;
}

function contentType(key) {
  const ext = key.split('.').pop()?.toLowerCase() || '';
  return MIME.get(ext) || 'application/octet-stream';
}

function market(req) {
  const country = String(req.cf?.country || req.headers.get('cf-ipcountry') || '').toUpperCase();
  return { country, nigeria: country === 'NG' };
}

export function rewriteRegistrationHref(href) {
  const decodedHref = href.replace(/&(?:amp|#0*38|#x0*26);/gi, '&');
  try {
    const target = new URL(decodedHref);
    if (target.origin !== 'https://m.venmail.io' || target.pathname !== '/register') return href;
    target.searchParams.set('signup_source', 'cloudflare_landing');
    return target.href;
  } catch {
    return href;
  }
}

function addLandingAttribution(response, method) {
  if (method === 'HEAD' || !response.headers.get('content-type')?.toLowerCase().startsWith('text/html') || typeof HTMLRewriter !== 'function') return response;

  return new HTMLRewriter().on('a[href]', {
    element(anchor) {
      const href = anchor.getAttribute('href');
      if (!href) return;
      const rewritten = rewriteRegistrationHref(href);
      if (rewritten !== href) anchor.setAttribute('href', rewritten);
    },
  }).transform(response);
}

const worker = {
  async fetch(req, env) {
    if (!['GET', 'HEAD'].includes(req.method)) return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
    const url = new URL(req.url);
    const canonical = canonicalPath(url.pathname);
    if (canonical === '/api/tools/whois') return publicWhois(req, url);
    const movedTo = PERMANENT_REDIRECTS.get(canonical);
    if (movedTo) {
      if (url.hostname === 'www.venmail.io') url.hostname = 'venmail.io';
      url.pathname = movedTo;
      url.protocol = 'https:';
      return new Response(null, { status: 301, headers: { Location: url.href, 'cache-control': 'no-cache' } });
    }
    if (canonical === '/__market') {
      return Response.json(market(req), { headers: { 'cache-control': 'no-store', 'vary': 'CF-IPCountry' } });
    }
    const requestedKey = toKey(canonical);
    let servedKey = requestedKey;
    let obj = await env.BUCKET.get(requestedKey);
    const status = !obj || requestedKey === '404.html' ? 404 : 200;
    if (url.hostname === 'www.venmail.io' || (status === 200 && canonical !== url.pathname)) {
      if (url.hostname === 'www.venmail.io') url.hostname = 'venmail.io';
      if (status === 200) url.pathname = canonical;
      url.protocol = 'https:';
      return new Response(null, { status: 301, headers: { Location: url.href, 'cache-control': 'no-cache' } });
    }
    if (status === 404) {
      servedKey = '404.html';
      obj = await env.BUCKET.get(servedKey);
    }
    if (!obj) return new Response(req.method === 'HEAD' ? null : 'Not found', { status: 404, headers: { 'cache-control': 'no-cache' } });

    const ct = contentType(servedKey);
    const headers = new Headers();
    if (obj.writeHttpMetadata) obj.writeHttpMetadata(headers);
    headers.set('content-type', ct);
    headers.set('x-served-key', servedKey);
    headers.set('x-requested-key', requestedKey);
    headers.set('cache-control', servedKey.startsWith('_next/static/') ? 'public, max-age=31536000, immutable' : 'no-cache');
    headers.set('x-content-type-options', 'nosniff');
    if (status === 404) headers.set('x-robots-tag', 'noindex');
    return addLandingAttribution(new Response(req.method === 'HEAD' ? null : obj.body, { status, headers }), req.method);
  },
};

export default worker;
