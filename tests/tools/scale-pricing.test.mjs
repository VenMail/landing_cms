import test from 'node:test';
import assert from 'node:assert/strict';
import { getRecommendedOffer, BUSINESS_INCLUDED_ACCOUNTS } from '../../src/config/pricing.mjs';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

test('Business and Scale price mailbox counts without a 40 to 41 jump', () => {
  assert.equal(BUSINESS_INCLUDED_ACCOUNTS, 40);
  assert.deepEqual(getRecommendedOffer(40), { plan: 'business', accounts: 40, amount: 20 });
  assert.deepEqual(getRecommendedOffer(41), { plan: 'scale', accounts: 41, amount: 20.75 });
  assert.deepEqual(getRecommendedOffer(100), { plan: 'scale', accounts: 100, amount: 65 });
  assert.deepEqual(getRecommendedOffer(101), { plan: 'enterprise', accounts: 101, amount: null, isQuote: true });
});

test('new customer pricing no longer promises 100 Business accounts for $20', async () => {
  async function files(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    return (await Promise.all(entries.map(entry => entry.isDirectory() ? files(join(dir, entry.name)) : /\.(jsx|js|mjs)$/.test(entry.name) ? [join(dir, entry.name)] : []))).flat();
  }
  const violations = [];
  for (const path of await files(fileURLToPath(new URL('../../src', import.meta.url)))) {
    const text = await readFile(path, 'utf8');
    if (/\bup to 100 (?:email |staff |firm-wide |student and staff |employee |staff and volunteer )?accounts\b/i.test(text)) violations.push(path);
  }
  assert.deepEqual(violations, []);
});

