import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { buildSitemap } from '../../scripts/generate-content-feeds.mjs';

test('localized business email pages are discoverable and measurable', () => {
  const sitemap = buildSitemap([]);
  for (const route of ['/pt-br/email-profissional', '/de/geschaeftliche-email']) {
    assert.ok(sitemap.includes(`https://venmail.io${route}`), route);
    const source = readFileSync(`src/pages${route}.jsx`, 'utf8');
    assert.match(source, /LanguageExperiment/);
  }
  const shared = readFileSync('src/components/LanguageExperiment.jsx', 'utf8');
  assert.match(shared, /language_experiment_signup_click/);
  assert.match(shared, /hrefLang="pt-BR"/);
  assert.match(shared, /hrefLang="de"/);
});

test('Zoho comparison acknowledges its free plan and links to authoritative pricing', () => {
  const source = readFileSync('src/pages/compare/zoho.jsx', 'utf8');
  assert.match(source, /Free plan/);
  assert.match(source, /zoho\.com\/mail\/zohomail-pricing/);
  assert.match(source, /IMAP/);
});
