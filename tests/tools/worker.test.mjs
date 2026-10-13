import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
// worker.js is an ESM Cloudflare entry point inside a non-ESM Next project.
const source = await readFile(new URL('../../worker.js', import.meta.url), 'utf8');
const { default: worker, rewriteRegistrationHref } = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
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
test('www redirects to apex in one hop while retaining path and attribution query', async () => {
  const res = await worker.fetch(new Request('https://www.venmail.io/blog/guide.html?utm_source=video&plan=startup'), env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get('location'), 'https://venmail.io/blog/guide?utm_source=video&plan=startup');
});
test('www redirects missing URLs without turning the apex missing page into a soft 404', async () => {
  const res = await worker.fetch(new Request('https://www.venmail.io/missing?ref=a%2Bb'), env);
  assert.equal(res.status, 301);
  assert.equal(res.headers.get('location'), 'https://venmail.io/missing?ref=a%2Bb');
  assert.equal((await request('/missing?ref=a%2Bb')).status, 404);
});

test('market endpoint reports Nigeria only from the Cloudflare country signal and is never cached', async () => {
  const nigeria = await worker.fetch(new Request('https://venmail.io/__market', { headers: { 'cf-ipcountry': 'NG' } }), env);
  assert.deepEqual(await nigeria.json(), { country: 'NG', nigeria: true });
  assert.equal(nigeria.headers.get('cache-control'), 'no-store');

  const other = await worker.fetch(new Request('https://venmail.io/__market', { headers: { 'cf-ipcountry': 'US' } }), env);
  assert.deepEqual(await other.json(), { country: 'US', nigeria: false });
});

test('registration attribution preserves plan intent from literal and HTML-escaped query separators', () => {
  for (const href of [
    'https://m.venmail.io/register?type=business&plan=standard',
    'https://m.venmail.io/register?type=business&amp;plan=standard',
    'https://m.venmail.io/register?type=business&#38;plan=standard',
    'https://m.venmail.io/register?type=business&#x26;plan=standard',
  ]) {
    const rewritten = new URL(rewriteRegistrationHref(href));
    assert.equal(rewritten.searchParams.get('type'), 'business');
    assert.equal(rewritten.searchParams.get('plan'), 'standard');
    assert.equal(rewritten.searchParams.get('signup_source'), 'cloudflare_landing');
    assert.equal(rewritten.searchParams.getAll('signup_source').length, 1);
  }
});

test('registration attribution overrides prior attribution without changing other parameters', () => {
  const rewritten = new URL(rewriteRegistrationHref('https://m.venmail.io/register?type=business&plan=business&signup_source=campaign&utm_medium=email'));
  assert.equal(rewritten.searchParams.get('type'), 'business');
  assert.equal(rewritten.searchParams.get('plan'), 'business');
  assert.equal(rewritten.searchParams.get('signup_source'), 'cloudflare_landing');
  assert.equal(rewritten.searchParams.getAll('signup_source').length, 1);
  assert.equal(rewritten.searchParams.get('utm_medium'), 'email');
});

test('registration attribution leaves unrelated and relative links unchanged', () => {
  for (const href of [
    'https://m.venmail.io/login?plan=standard',
    'https://venmail.io/register?plan=standard',
    '/register?plan=standard',
    'mailto:hello@venmail.io',
  ]) assert.equal(rewriteRegistrationHref(href), href);
});

test('non-HTML and HEAD responses bypass HTML rewriting', async () => {
  const calls = [];
  const original = globalThis.HTMLRewriter;
  globalThis.HTMLRewriter = class {
    on() { calls.push('on'); return this; }
    transform(response) { calls.push('transform'); return response; }
  };
  try {
    await request('/sitemap.xml');
    await request('/blog/guide', 'HEAD');
    assert.deepEqual(calls, []);
    await request('/blog/guide');
    assert.deepEqual(calls, ['on', 'transform']);
  } finally {
    globalThis.HTMLRewriter = original;
  }
});
