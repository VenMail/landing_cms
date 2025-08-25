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
    // Normalize: collapse multiple slashes
    pathname = pathname.replace(/\/+/g, '/');
    if (pathname.endsWith('/')) return pathname + 'index.html';
    const last = pathname.split('/').pop() || '';
    if (!last.includes('.')) return pathname + '.html';
    return pathname;
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
    let key = toKey(url.pathname);

    let obj = await env.BUCKET.get(key);
    if (!obj) {
      // Try 404 then index as SPA shell
      obj = await env.BUCKET.get('404.html');
      if (!obj) obj = await env.BUCKET.get('index.html');
    }

    if (!obj) return new Response('Not found', { status: 404 });

    const ct = contentType(key);
    const headers = new Headers(obj.httpMetadata || {});
    headers.set('content-type', ct);
    // Cache: HTML no-cache, assets long-lived
    if (/\.html$/i.test(key)) headers.set('cache-control', 'no-cache');
    else headers.set('cache-control', 'public, max-age=31536000, immutable');

    return new Response(obj.body, { status: 200, headers });
  },
};

export default worker;
