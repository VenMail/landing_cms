import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
// worker.js is an ESM Cloudflare entry point inside a non-ESM Next project.
const source = await readFile(new URL('../../worker.js', import.meta.url), 'utf8');
const { default: worker } = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
const pages = { 'index.html': 'home', 'blog/guide.html': 'guide', '404.html': 'missing', 'sitemap.xml': '<xml/>', 'robots.txt': 'robots', '_next/static/chunks/hash.js': 'js' };
const env = { BUCKET: { get: async key => key in pages ? { body: pages[key] } : null } };
const request = (path, method = 'GET', targetEnv = env) => worker.fetch(new Request(`https://venmail.io${path}`, { method }), targetEnv);
test('canonical pages keep their body and return 200', async () => {
  const res = await request('/blog/guide'); assert.equal(res.status, 200); assert.equal(await res.text(), 'guide');
});
test('known page aliases redirect once to canonical URLs and retain query strings', async () => {
  for (const path of ['/blog/guide/', '/blog/guide.html', '/blog//guide/']) {
    const res = await request(`${path}?ref=test`); assert.equal(res.status, 301); assert.equal(res.headers.get('location'), 'https://venmail.io/blog/guide?ref=test');
  }
  assert.equal((await request('/index.html')).headers.get('location'), 'https://venmail.io/');
});
test('missing pages and assets return a genuine 404, even if no custom 404 exists', async () => {
  for (const path of ['/missing', '/missing/', '/missing.js', '/404', '/404.html']) assert.equal((await request(path)).status, 404);
  assert.equal((await request('/missing', 'GET', { BUCKET: { get: async () => null } })).status, 404);
});
test('discovery files revalidate; only fingerprinted Next static assets are immutable', async () => {
  for (const path of ['/sitemap.xml', '/robots.txt']) assert.equal((await request(path)).headers.get('cache-control'), 'no-cache');
  assert.match((await request('/_next/static/chunks/hash.js')).headers.get('cache-control'), /immutable/);
  assert.equal((await request('/blog/guide')).headers.get('cache-control'), 'no-cache');
});
test('HEAD has the same status and headers but no response body; writes are not served', async () => {
  const head = await request('/blog/guide', 'HEAD'); assert.equal(head.status, 200); assert.equal(await head.text(), '');
  assert.equal((await request('/blog/guide', 'POST')).status, 405);
});
