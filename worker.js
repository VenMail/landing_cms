// Cloudflare Worker to serve static Next.js export from R2 with friendly routing
// - Trailing slash => /index.html
// - No extension => .html
// - Assets served as-is
// - 404 fallback to /404.html then /index.html

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

function toKey(pathname) {
  try {
    // Normalize: remove leading slash for R2 keys and collapse multiple slashes
    let p = pathname.startsWith('/') ? pathname.slice(1) : pathname;
    p = p.replace(/\/+/, '/');
    // Root
    if (p === '') return 'index.html';
    // Directory -> index.html
    if (p.endsWith('/')) return p + 'index.html';
    // No file extension -> .html
    const last = p.split('/').pop() || '';
    if (!last.includes('.')) return p + '.html';
    // Asset or file with extension
    return p;
  } catch (_) {
    return pathname || '/index.html';
  }
}

function contentType(key) {
  const ext = key.split('.').pop()?.toLowerCase() || '';
  return MIME.get(ext) || 'application/octet-stream';
}

const worker = {
  async fetch(req, env) {
    const url = new URL(req.url);
    let requestedKey = toKey(url.pathname);
    let servedKey = requestedKey;

    let obj = await env.BUCKET.get(requestedKey);
    if (!obj) {
      // Try 404 then index as SPA shell
      servedKey = '404.html';
      obj = await env.BUCKET.get(servedKey);
      if (!obj) {
        servedKey = 'index.html';
        obj = await env.BUCKET.get(servedKey);
      }
    }

    if (!obj) return new Response('Not found', { status: 404 });

    const ct = contentType(servedKey);
    const headers = new Headers(obj.httpMetadata || {});
    headers.set('content-type', ct);
    headers.set('x-served-key', servedKey);
    headers.set('x-requested-key', requestedKey);
    // Cache: HTML no-cache, assets long-lived
    if (/\.html$/i.test(servedKey)) headers.set('cache-control', 'no-cache');
    else headers.set('cache-control', 'public, max-age=31536000, immutable');

    return new Response(obj.body, { status: 200, headers });
  },
};

export default worker;
