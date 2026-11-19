import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { PLANS } from '../../src/config/pricing.mjs';

test('plan details state pooled Standard allocation and Business upgrade price', async () => {
  const standard = PLANS.find(plan => plan.id === 'standard').features.join(' ');
  const business = PLANS.find(plan => plan.id === 'business').features.join(' ');
  const homepage = await readFile(new URL('../../src/pages/index.jsx', import.meta.url), 'utf8');
  assert.match(standard, /20 GB shared storage included/i);
  assert.match(standard, /8 GB per mailbox after the first five/i);
  assert.match(standard, /pooled|shared/i);
  assert.match(business, /\$10\/month.*100 GB/i);
  assert.match(homepage, /20 GB shared storage included/i);
  assert.match(homepage, /8 GB per mailbox after the first five/i);
  assert.match(homepage, /\$10\/month.*100 GB/i);
});
