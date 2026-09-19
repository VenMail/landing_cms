import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { businessSignupUrl, getOffer, formatNgn } from '../../src/config/pricing.mjs';

test('published offers use the approved monthly USD and NGN amounts', () => {
  assert.equal(getOffer('standard', 'monthly').amount, 1);
  assert.equal(getOffer('business', 'monthly').amount, 20);
  assert.equal(formatNgn(20 * 1500), '₦30,000');
  assert.throws(() => businessSignupUrl('enterprise'));
});

test('self-service signup carries the approved plan and blocks quote-only Enterprise', () => {
  const url = new URL(businessSignupUrl('business'));
  assert.equal(url.origin, 'https://m.venmail.io');
  assert.equal(url.searchParams.get('type'), 'business');
  assert.equal(url.searchParams.get('plan'), 'business');
  assert.equal(url.searchParams.get('billing'), null);
  assert.throws(() => businessSignupUrl('enterprise'));
  assert.throws(() => businessSignupUrl('startup'));
});
test('published amounts match the approved monthly catalog', () => {
  assert.equal(getOffer('standard', 'monthly').amount, 1);
  assert.equal(getOffer('business', 'monthly').amount, 20);
  assert.equal(getOffer('standard', 'monthly').isQuote, false);
  assert.throws(() => getOffer('enterprise', 'monthly'));
  assert.throws(() => getOffer('standard', 'yearly'));
});

test('the home page presents the real product workspace instead of the animated placeholder', async () => {
  const homepage = await readFile(new URL('../../src/pages/index.jsx', import.meta.url), 'utf8');

  assert.match(homepage, /WorkspaceHero/);
  assert.doesNotMatch(homepage, /HeroFlythrough/);
  assert.match(homepage, /<Pricing\s*\/>/);
});

test('enterprise requests are submitted to the approved quote endpoint', async () => {
  const quotePage = await readFile(new URL('../../src/pages/request-quote.jsx', import.meta.url), 'utf8');

  assert.match(quotePage, /QUOTE_ENDPOINT/);
  assert.match(quotePage, /method:\s*'POST'/);
  assert.match(quotePage, /Enterprise \/ White-label/);
});
