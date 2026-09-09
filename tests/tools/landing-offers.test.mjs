import test from 'node:test';
import assert from 'node:assert/strict';
import { businessSignupUrl, getOffer, availableRegions } from '../../src/config/pricing.mjs';

test('paid signup carries selected billing and hosting region without permitting free business provisioning', () => {
  const url = new URL(businessSignupUrl('business', 'yearly', 'ng'));
  assert.equal(url.origin, 'https://m.venmail.io');
  assert.equal(url.searchParams.get('type'), 'business');
  assert.equal(url.searchParams.get('plan'), 'business');
  assert.equal(url.searchParams.get('billing'), 'yearly');
  assert.equal(url.searchParams.get('region'), 'ng');
  assert.throws(() => businessSignupUrl('free', 'monthly', 'eu'));
  assert.throws(() => businessSignupUrl('startup', 'monthly', 'https://attacker.test'));
});
test('published base amounts match backend config, including actual annual totals', () => {
  assert.equal(getOffer('startup', 'yearly').amount, 67.2);
  assert.equal(getOffer('business', 'monthly').amount, 23.5);
  assert.equal(getOffer('business', 'yearly').amount, 225.6);
  assert.equal(getOffer('enterprise', 'monthly').amount, 99);
  assert.equal(getOffer('enterprise', 'yearly').amount, 950.4);
  assert.equal(getOffer('custom', 'yearly').amount, 200);
  assert.equal(getOffer('startup', 'monthly').isQuote, false);
});
test('runtime regional amount overrides base price only for a complete valid selected quote', () => {
  const data = { success: true, regions: [{ code: 'ng', available: true }, { code: 'eu', available: false }], plans: { startup: { ng: { yearly: { amount_usd: 80.64, plan_code: 'startup', billing_period: 'yearly', data_region: 'ng' } } } } };
  assert.deepEqual(availableRegions(data).map(r => r.code), ['ng']);
  assert.deepEqual(getOffer('startup', 'yearly', 'ng', data), { amount: 80.64, isQuote: true });
  assert.equal(getOffer('startup', 'monthly', 'ng', data).isQuote, false);
  data.plans.startup.ng.yearly.amount_usd = -1;
  assert.equal(getOffer('startup', 'yearly', 'ng', data).isQuote, false);
});
