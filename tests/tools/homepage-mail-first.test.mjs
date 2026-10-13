import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readSource = path => readFile(new URL(path, import.meta.url), 'utf8');

test('homepage leads with approved mail-first positioning and the real diagnostic tool', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  assert.match(homepage, /Business email for growing teams/);
  assert.match(homepage, /Send and receive from your business domain/);
  assert.match(homepage, /Authentication guidance, delivery diagnostics, and shared ownership for customer conversations\./);
  assert.match(homepage, /Standard \$1\/month · 5 accounts included/);
  assert.match(homepage, /Existing domain required for mailbox activation\./);
  assert.match(homepage, /href="\/tools\/email-header-analyzer"/);
  assert.match(homepage, /Authentication checks identify configuration issues; they do not guarantee inbox placement\./);
  assert.doesNotMatch(homepage, /WorkspaceHero|EmailReckoningVideo|ProductDemo|ABVariant/);
});

test('homepage keeps mail primary and links only to real secondary product destinations', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  for (const label of ['Business mail', 'Programmatic mail', 'Helpdesk and CRM follow-up', 'Tools for daily operations']) {
    assert.match(homepage, new RegExp(label));
  }
  assert.match(homepage, /href="\/product\/contacts"/);
  assert.match(homepage, /href="\/product\/calendar"/);
  assert.doesNotMatch(homepage, /\/product\/files|Bring your own storage|BYOS/i);
});

test('homepage API excerpt matches the verified agent message contract', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  assert.match(homepage, /POST https:\/\/m\.venmail\.io\/api\/v1\/agent\/messages/);
  assert.match(homepage, /Authorization: Bearer/);
  assert.match(homepage, /mail:send/);
  assert.match(homepage, /"success": true/);
  assert.match(homepage, /"status": "sent"/);
  assert.match(homepage, /"held_for_review": false/);
  assert.match(homepage, /200 response excerpt/);
  assert.match(homepage, /"body": "Pricing and delivery timing will follow shortly\."/);
  assert.doesNotMatch(homepage, /Pricing and delivery timing attached/);
  assert.match(homepage, /https:\/\/m\.venmail\.io\/docs\/agents/);
  assert.doesNotMatch(homepage, /webhook/i);
});

test('homepage pricing uses approved offers, signup helpers, and quote and crypto paths', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  assert.match(homepage, /businessSignupUrl\("standard"\)/);
  assert.match(homepage, /businessSignupUrl\("business"\)/);
  assert.match(homepage, /\$1 each additional/);
  assert.match(homepage, /\$20/);
  assert.match(homepage, /200 GB pooled/);
  assert.match(homepage, /href="\/request-quote"/);
  assert.match(homepage, /USDC\/USDT payments are available through Venmail Billing/);
});

test('homepage has focused navigation and preserves operational and legal destinations', async () => {
  const files = await Promise.all([
    readSource('../../src/pages/index.jsx'),
    readSource('../../src/components/home/MailFirstHeader.jsx'),
    readSource('../../src/components/home/MailFirstFooter.jsx'),
  ]);
  const source = files.join('\n');

  for (const [label, href] of [['Mail', '#mail'], ['Customer conversations', '#customer-conversations'], ['Developers', '#developers'], ['Pricing', '#pricing']]) {
    assert.match(source, new RegExp(`['\"]${label}['\"], ['\"]${href}['\"]`));
  }
  for (const href of ['/resources/help', 'https://status.venmail.app', '/request-quote', '/resources/terms-of-service', '/resources/privacy-policy']) {
    assert.match(source, new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
});

test('homepage copy avoids interface narration and unsupported delivery promises', async () => {
  const files = await Promise.all([
    readSource('../../src/pages/index.jsx'),
    readSource('../../src/components/home/MailExample.jsx'),
    readSource('../../src/components/home/MailFirstHeader.jsx'),
    readSource('../../src/components/home/MailFirstFooter.jsx'),
  ]);
  const copy = files.join('\n');

  assert.doesNotMatch(copy, /what you(?:'|’)ve created|keep what you create|return to|in one place|this screen|this page|\bhere\b|use this to|you can find/i);
  assert.doesNotMatch(copy, /guaranteed inbox|(?<!not )guarantee inbox|inbox placement guaranteed|99\.\d+% uptime|certified/i);
});
