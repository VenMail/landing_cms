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

test('homepage footer links directly to both language pages', () => {
 const footer=readFileSync('src/components/home/MailFirstFooter.jsx','utf8');
 assert.match(footer, /\/pt-br\/email-profissional/);
 assert.match(footer, /\/de\/geschaeftliche-email/);
});

test('language survives internal browsing and is carried on registration links', async () => {
 const { landingLanguage, registrationHref } = await import('../../src/config/landing-language.mjs');
 assert.equal(landingLanguage('/pt-br/email-profissional'), 'pt-BR');
 assert.equal(landingLanguage('/de/geschaeftliche-email'), 'de');
 assert.equal(landingLanguage('/pricing'), null);
 assert.equal(new URL(registrationHref('https://m.venmail.io/register?type=business', 'de')).searchParams.get('landing_language'), 'de');
 assert.equal(registrationHref('https://example.com/register', 'de'), 'https://example.com/register');
});
