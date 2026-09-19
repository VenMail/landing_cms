import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = path => readFileSync(new URL(`../../src/${path}`, import.meta.url), 'utf8');

test('managed storage disclosures describe the approved catalog and regional limitations', () => {
  for (const path of ['pages/security-whitepaper.jsx', 'pages/resources/privacy-policy.jsx', 'pages/resources/dpa.jsx']) {
    const text = source(path);
    assert.match(text, /shared storage/i, `${path}: current storage is disclosed`);
    assert.match(text, /future.*preference|preference.*future/i, `${path}: regional choice is a future preference`);
  }
  const pricing = source('components/PageSections/PricingPlans.jsx');
  assert.match(pricing, /200 GB included; upgrades or customer-provided storage/);
  assert.match(pricing, /Shared storage included/);
  assert.doesNotMatch(pricing, /Future region preference/);
});

test('Cloudflare-hosted pages do not load Vercel-only speed insight scripts', () => {
  assert.doesNotMatch(source('pages/_app.js'), /SpeedInsights|@vercel\/speed-insights/);
});

test('industry pages distinguish optional customer storage from managed shared hosting', () => {
  const text = source('data/solutions.js');
  assert.doesNotMatch(text, /never on shared infrastructure|not a vendor's servers|Venmail runs on your storage, under your jurisdiction/);
  assert.match(text, /Custom Storage plan/);
});
