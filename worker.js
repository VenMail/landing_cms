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

const worker = {
  async fetch(req, env) {
    if (!['GET', 'HEAD'].includes(req.method)) return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
    const url = new URL(req.url);
    const canonical = canonicalPath(url.pathname);
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
    return new Response(req.method === 'HEAD' ? null : obj.body, { status, headers });
  },
};

export default worker;
