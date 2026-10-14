import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = path => readFileSync(new URL(`../../src/${path}`, import.meta.url), 'utf8');

test('security whitepaper remains printable and developer links use supported destinations', () => {
  const whitepaper = source('pages/security-whitepaper.jsx');
  const preview = source('components/PageSections/DevelopersSection.jsx');
  const developers = source('pages/developers.jsx');
  const footer = source('components/layout/Footer.jsx');

  assert.match(whitepaper, /window\.print\(\)/);
  assert.match(whitepaper, /Security Whitepaper/);
  assert.match(preview, /href="\/developers"/);
  assert.match(developers, /https:\/\/m\.venmail\.io\/platform\/api\/docs/);
  assert.match(developers, /https:\/\/m\.venmail\.io\/docs\/agents/);
  assert.match(footer, /\{ label: "Developers", href: "\/developers" \}/);
  assert.doesNotMatch(`${preview}\n${developers}`, /api\/v1\/send\/message|@venmail\/vsm|Real-time Webhooks/);
});

test('security whitepaper states current processing boundaries without unsupported assurances', () => {
  const whitepaper = source('pages/security-whitepaper.jsx');

  assert.match(whitepaper, /not a blanket end-to-end encrypted or zero-access service/i);
  assert.match(whitepaper, /Email analysis can send message content and extracted attachment text to Groq/i);
  assert.match(whitepaper, /shared storage infrastructure/i);
  assert.doesNotMatch(whitepaper, /15\+ Years Cybersecurity Experience|Enterprise-Grade Encryption|Zero-Trust Architecture/);
  assert.match(whitepaper, /print-hidden min-w-0 lg:sticky/);
  assert.match(whitepaper, /<div className="min-w-0 max-w-3xl">/);
});
