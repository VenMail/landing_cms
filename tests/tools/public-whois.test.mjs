import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../../worker.js', import.meta.url), 'utf8');
const { default: worker } = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
const env = { BUCKET: { get: async () => null } };
const request = value => worker.fetch(new Request(`https://venmail.io/api/tools/whois?domain=${encodeURIComponent(value)}`), env);

test('public lookup validates names before any upstream request', async () => {
  const original = globalThis.fetch;
  globalThis.fetch = async () => { throw new Error('unexpected upstream request'); };
  try {
    for (const value of ['', 'localhost', 'https://example.com', 'a..com', '127.0.0.1', 'example.com:443']) {
      assert.equal((await request(value)).status, 400, value);
    }
  } finally { globalThis.fetch = original; }
});

test('public lookup returns allowlisted fields from the existing backend', async () => {
  const original = globalThis.fetch;
  const calls = [];
  globalThis.fetch = async (url, options = {}) => {
    calls.push({ url: String(url), options });
    if (calls.length === 1) return new Response('', { headers: { 'set-cookie': 'XSRF-TOKEN=token123; Path=/, venmail_session=session123; Path=/' } });
    return Response.json({ success: true, results: { registrar: 'Example Registrar', registrar_url: 'https://registrar.example/', nameservers: ['ns1.example.com'], owner: 'private person', has_records: true } });
  };
  try {
    const response = await request('EXAMPLE.COM');
    assert.equal(response.status, 200);
    const data = await response.json();
    assert.equal(data.domain, 'example.com');
    assert.equal(data.registrar, 'Example Registrar');
    assert.deepEqual(data.nameservers, ['ns1.example.com']);
    assert.equal('owner' in data, false);
    assert.equal(calls[1].url, 'https://m.venmail.io/domains/whois');
    assert.equal(JSON.parse(calls[1].options.body).domain, 'example.com');
  } finally { globalThis.fetch = original; }
});

test('upstream failures are unavailable, never evidence that a domain is free', async () => {
  const original = globalThis.fetch;
  globalThis.fetch = async () => { throw new Error('timeout'); };
  try {
    const response = await request('example.net');
    assert.equal(response.status, 503);
    assert.match((await response.json()).message, /unavailable/i);
  } finally { globalThis.fetch = original; }
});

test('one client cannot repeatedly trigger unlimited lookups within an isolate', async () => {
  const original = globalThis.fetch;
  globalThis.fetch = async () => { throw new Error('offline'); };
  try {
    const makeRequest = () => worker.fetch(new Request('https://venmail.io/api/tools/whois?domain=example.org', { headers: { 'CF-Connecting-IP': '192.0.2.9' } }), env);
    for (let i = 0; i < 12; i++) assert.equal((await makeRequest()).status, 503);
    assert.equal((await makeRequest()).status, 429);
  } finally { globalThis.fetch = original; }
});
