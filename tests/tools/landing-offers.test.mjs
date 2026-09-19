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

test('localized Naira prices use the approved fixed exchange rate', async () => {
  const currencyContext = await readFile(new URL('../../src/contexts/CurrencyContext.jsx', import.meta.url), 'utf8');

  assert.match(currencyContext, /NGN:\s*USD_TO_NGN/);
  assert.doesNotMatch(currencyContext, /NGN:\s*1400/);
});

test('the home page presents the real product workspace instead of the animated placeholder', async () => {
  const homepage = await readFile(new URL('../../src/pages/index.jsx', import.meta.url), 'utf8');
  const hero = await readFile(new URL('../../src/components/PageSections/WorkspaceHero.jsx', import.meta.url), 'utf8');

  assert.match(homepage, /WorkspaceHero/);
  assert.doesNotMatch(homepage, /HeroFlythrough/);
  assert.match(homepage, /<Pricing\s*\/>/);
  assert.match(hero, /venmail-workspace-v2\.png/);
  assert.match(hero, /screenshot-full\.webp/);
  assert.match(hero, /data-hero-framing="close-up"/);
  assert.doesNotMatch(hero, /rounded-t-2xl|border-\[9px\]/);
});

test('commercial pricing surfaces use the approved three-plan catalog', async () => {
  const files = await Promise.all([
    readFile(new URL('../../src/components/PageSections/BusinessCase.jsx', import.meta.url), 'utf8'),
    readFile(new URL('../../src/components/PageSections/CostComparisonSlider.jsx', import.meta.url), 'utf8'),
    readFile(new URL('../../src/components/PageSections/FAQs.jsx', import.meta.url), 'utf8'),
    readFile(new URL('../../scripts/verify-landing-export.mjs', import.meta.url), 'utf8'),
  ]);
  const surfaces = files.join('\n');

  assert.doesNotMatch(surfaces, /Startup base|60GB|250GB|1\.5TB|venmailCost\s*=\s*7/);
  assert.match(surfaces, /Business base/);
  assert.match(surfaces, /200 GB pooled storage/);
  assert.match(surfaces, /plan=\$\{plan\}/);
});

test('enterprise requests are submitted to the approved quote endpoint', async () => {
  const quotePage = await readFile(new URL('../../src/pages/request-quote.jsx', import.meta.url), 'utf8');

  assert.match(quotePage, /QUOTE_ENDPOINT/);
  assert.match(quotePage, /method:\s*'POST'/);
  assert.match(quotePage, /Enterprise \/ White-label/);
});
