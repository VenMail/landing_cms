import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { BUSINESS_INCLUDED_ACCOUNTS, businessSignupUrl, getOffer, getRecommendedOffer, formatNgn, PLANS } from '../../src/config/pricing.mjs';

test('published offers use the approved monthly USD and NGN amounts', () => {
  assert.equal(getOffer('standard', 'monthly').amount, 1);
  assert.equal(getOffer('business', 'monthly').amount, 20);
  assert.equal(formatNgn(20 * 1500), '₦30,000');
  assert.throws(() => businessSignupUrl('enterprise'));
});

test('Business states the qualified first-year annual domain offer', () => {
  const business = PLANS.find(plan => plan.id === 'business');

  assert.ok(business);
  assert.ok(business.features.includes('Annual Business includes one .com domain free for the first year.'));
});

test('shared pricing separates monthly checkout from the annual Business inquiry', async () => {
  const pricing = await readFile(new URL('../../src/components/PageSections/PricingPlans.jsx', import.meta.url), 'utf8');

  assert.match(pricing, /Choose monthly Business/);
  assert.equal((pricing.match(/Choose monthly Business/g) || []).length, 2);
  assert.match(pricing, /Annual Business plan and included \.com domain/);
  assert.match(pricing, /Ask about annual Business/);
});

test('self-service signup carries the approved plan and blocks quote-only Enterprise', () => {
  const url = new URL(businessSignupUrl('business'));
  assert.equal(url.origin, 'https://m.venmail.io');
  assert.equal(url.searchParams.get('type'), 'business');
  assert.equal(url.searchParams.get('plan'), 'business');
  assert.equal(url.searchParams.get('signup_source'), 'cloudflare_landing');
  assert.equal(url.searchParams.get('billing'), null);
  assert.throws(() => businessSignupUrl('enterprise'));
  assert.throws(() => businessSignupUrl('startup'));
});

test('public pricing keeps Nigerian payment information out of the static default markup', async () => {
  const pricing = await readFile(new URL('../../src/components/PageSections/PricingPlans.jsx', import.meta.url), 'utf8');
  const market = await readFile(new URL('../../src/hooks/useNigeriaMarket.js', import.meta.url), 'utf8');

  assert.match(pricing, /useNigeriaMarket/);
  assert.match(pricing, /Gigalayer/);
  assert.match(pricing, /USDC\/USDT/);
  assert.match(market, /__market/);
  assert.match(market, /useState\(false\)/);
});
test('published amounts match the approved monthly catalog', () => {
  assert.equal(getOffer('standard', 'monthly').amount, 1);
  assert.equal(getOffer('business', 'monthly').amount, 20);
  assert.equal(getOffer('standard', 'monthly').isQuote, false);
  assert.throws(() => getOffer('enterprise', 'monthly'));
  assert.throws(() => getOffer('standard', 'yearly'));
});

test('recommended monthly pricing uses Standard, bounded Business, then an Enterprise quote', () => {
  assert.equal(BUSINESS_INCLUDED_ACCOUNTS, 100);
  assert.deepEqual(getRecommendedOffer(1), { plan: 'standard', accounts: 1, amount: 1 });
  assert.deepEqual(getRecommendedOffer(5), { plan: 'standard', accounts: 5, amount: 1 });
  assert.deepEqual(getRecommendedOffer(6), { plan: 'standard', accounts: 6, amount: 2 });
  assert.deepEqual(getRecommendedOffer(23), { plan: 'standard', accounts: 23, amount: 19 });
  assert.deepEqual(getRecommendedOffer(24), { plan: 'business', accounts: 24, amount: 20 });
  assert.deepEqual(getRecommendedOffer(100), { plan: 'business', accounts: 100, amount: 20 });
  assert.deepEqual(getRecommendedOffer(101), { plan: 'enterprise', accounts: 101, amount: null, isQuote: true });
  assert.deepEqual(getRecommendedOffer(200), { plan: 'enterprise', accounts: 200, amount: null, isQuote: true });
});

test('localized Naira prices use the approved fixed exchange rate', async () => {
  const currencyContext = await readFile(new URL('../../src/contexts/CurrencyContext.jsx', import.meta.url), 'utf8');

  assert.match(currencyContext, /NGN:\s*USD_TO_NGN/);
  assert.doesNotMatch(currencyContext, /NGN:\s*1400/);
});

test('the home page presents the real Venmail inbox instead of a simulated interface', async () => {
  const [homepage, inboxPreview] = await Promise.all([
    readFile(new URL('../../src/pages/index.jsx', import.meta.url), 'utf8'),
    readFile(new URL('../../src/components/home/InboxPreviewLightbox.jsx', import.meta.url), 'utf8'),
  ]);

  assert.match(homepage, /InboxPreviewLightbox/);
  assert.match(inboxPreview, /email-dashboard-preview\.png/);
  assert.doesNotMatch(homepage, /MailExample|WorkspaceHero|HeroFlythrough|<Pricing\s*\/>/);
});

test('commercial pricing surfaces use the approved three-plan catalog', async () => {
  const files = await Promise.all([
    readFile(new URL('../../src/components/PageSections/BusinessCase.jsx', import.meta.url), 'utf8'),
    readFile(new URL('../../src/components/PageSections/CostComparisonSlider.jsx', import.meta.url), 'utf8'),
    readFile(new URL('../../src/components/PageSections/FAQs.jsx', import.meta.url), 'utf8'),
    readFile(new URL('../../scripts/verify-landing-export.mjs', import.meta.url), 'utf8'),
  ]);
  const surfaces = files.join('\n');

  assert.doesNotMatch(surfaces, /Startup base|60GB|250GB|1\.5TB|venmailCost\s*=\s*7|\$0\s*<\/span>/);
  assert.match(surfaces, /Business(?: is|:| ·)[^\n]*\$20\/month|Business[^\n]*200 GB pooled storage/);
  assert.match(surfaces, /200 GB pooled storage/);
  assert.match(surfaces, /plan=\$\{plan\}/);
});

test('customer-visible pricing copy does not claim zero per-seat cost or unlimited accounts on Standard', async () => {
  const paths = [
    '../../src/components/PageSections/BusinessCase.jsx',
    '../../src/components/PageSections/CostComparisonSlider.jsx',
    '../../src/components/PageSections/CountUpStats.jsx',
    '../../src/components/PageSections/WhyVenmailSection.jsx',
    '../../src/components/PageSections/BusinessesSection.jsx',
    '../../src/components/PageSections/ProductShowcase.jsx',
    '../../src/components/ExitIntentPopup.jsx',
    '../../src/pages/index.jsx',
    '../../src/pages/cinematic.jsx',
    '../../src/pages/index-cinematic.jsx',
    '../../src/pages/about-us.jsx',
    '../../src/pages/why-venmail.jsx',
    '../../src/pages/healthcare-legal.jsx',
    '../../src/pages/solutions/index.jsx',
    '../../src/pages/product/meeting-vs-zoom.jsx',
    '../../src/remotion/compositions/EmailReckoning.jsx',
    '../../src/data/solutions.js',
  ];
  const copy = (await Promise.all(paths.map(path => readFile(new URL(path, import.meta.url), 'utf8')))).join('\n');

  assert.doesNotMatch(copy, /\$0\s*\/?(?:seat|user)|no per-seat fees|no per-seat pricing|without per-seat fees|unlimited team (?:members|accounts)|pricing scales with storage, not headcount/i);
  assert.match(copy, /Standard (?:costs|is) \$1\/month total for 5 inboxes/i);
  assert.match(copy, /Business[^\n]{0,100}\$20\/month/i);
});

test('Standard states its shared 20 GB allowance and 10 GB growth rule', async () => {
  const files = await Promise.all([
    readFile(new URL('../../src/config/pricing.mjs', import.meta.url), 'utf8'),
    readFile(new URL('../../src/components/PageSections/PricingPlans.jsx', import.meta.url), 'utf8'),
    readFile(new URL('../../src/pages/pricing.jsx', import.meta.url), 'utf8'),
  ]);
  const copy = files.join('\n');

  assert.match(copy, /20 GB shared storage for up to 5 accounts \(4 GB per included account\)/);
  assert.match(copy, /10 GB shared storage per additional account/);
  assert.match(copy, /20 GB shared for up to 5 accounts; \+10 GB per additional account/);
});

test('customer-visible pricing states the bounded Business account allowance', async () => {
  const paths = [
    '../../src/config/pricing.mjs',
    '../../src/components/PageSections/BusinessCase.jsx',
    '../../src/components/PageSections/CostComparisonSlider.jsx',
    '../../src/components/PageSections/FAQs.jsx',
    '../../src/components/PageSections/PricingPlans.jsx',
    '../../src/components/PageSections/WhyVenmailSection.jsx',
    '../../src/components/PageSections/BusinessesSection.jsx',
    '../../src/components/PageSections/CountUpStats.jsx',
    '../../src/components/PageSections/ProductShowcase.jsx',
    '../../src/components/ExitIntentPopup.jsx',
    '../../src/pages/index.jsx',
    '../../src/pages/index-cinematic.jsx',
    '../../src/pages/pricing.jsx',
    '../../src/pages/about-us.jsx',
    '../../src/pages/why-venmail.jsx',
    '../../src/pages/healthcare-legal.jsx',
    '../../src/pages/solutions/index.jsx',
    '../../src/pages/product/meeting-vs-google-meet.jsx',
    '../../src/pages/product/meeting-vs-zoom.jsx',
    '../../src/data/solutions.js',
  ];
  const copy = (await Promise.all(paths.map(path => readFile(new URL(path, import.meta.url), 'utf8')))).join('\n');

  assert.doesNotMatch(copy, /unlimited (?:email |student and staff |staff and volunteer |employee |firm-wide )?accounts|unlimited team|unlimited (?:cloud|recording) storage/i);
  assert.doesNotMatch(copy, /storage[- ]based pricing|pay for what you use, not how many people|pay about the same for (?:the )?same storage|per-seat pricing limits email access/i);
  assert.match(copy, /Up to 100 email accounts included/);
  assert.match(copy, /From \$0\.20 per inbox\/month/);
});

test('cost calculators render quote-only recommendations without formatting a missing amount', async () => {
  const paths = [
    '../../src/components/PageSections/BusinessCase.jsx',
    '../../src/components/PageSections/CostComparisonSlider.jsx',
  ];
  const calculators = (await Promise.all(paths.map(path => readFile(new URL(path, import.meta.url), 'utf8')))).join('\n');

  assert.match(calculators, /recommendation\.isQuote/);
  assert.match(calculators, /Request a custom quote/);
  assert.match(calculators, /\/request-quote/);
});

test('retired offers and arithmetic do not remain in customer-visible promotional pricing', async () => {
  const paths = [
    '../../src/components/ExitIntentPopup.jsx',
    '../../src/pages/healthcare-legal.jsx',
    '../../src/data/solutions.js',
    '../../src/pages/security-whitepaper.jsx',
  ];
  const copy = (await Promise.all(paths.map(path => readFile(new URL(path, import.meta.url), 'utf8')))).join('\n');

  assert.doesNotMatch(copy, /\$23\/month|\$27\/month|\$6,876|250\s?GB|Custom Storage plan|separate Custom Storage/i);
  assert.match(copy, /\$20\/month/);
  assert.match(copy, /200 GB pooled storage/);
});

test('enterprise requests are submitted to the approved quote endpoint', async () => {
  const quotePage = await readFile(new URL('../../src/pages/request-quote.jsx', import.meta.url), 'utf8');

  assert.match(quotePage, /QUOTE_ENDPOINT/);
  assert.match(quotePage, /method:\s*'POST'/);
  assert.match(quotePage, /Enterprise \/ White-label/);
});
