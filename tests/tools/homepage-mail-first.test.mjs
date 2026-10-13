import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readSource = path => readFile(new URL(path, import.meta.url), 'utf8');

test('homepage leads with outgoing spam control and account conditions', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  assert.match(homepage, /Business email\./);
  assert.match(homepage, /Built for the inbox\./);
  assert.match(homepage, /Outgoing spam checks and domain authentication help your emails reach customers\./);
  assert.match(homepage, /Incoming filtering keeps unwanted mail in check\./);
  assert.match(homepage, /Create your account/);
  assert.match(homepage, /Compare plans/);
  assert.match(homepage, /Standard \$1\/month · 5 accounts included/);
  assert.match(homepage, /Existing domain required for mailbox activation\./);
});

test('homepage uses the real Venmail inbox asset without recreating product chrome', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  assert.match(homepage, /src="\/email-dashboard-preview\.png"/);
  assert.match(homepage, /width=\{1802\}/);
  assert.match(homepage, /height=\{905\}/);
  assert.match(homepage, /alt="Venmail inbox"/);
  assert.doesNotMatch(homepage, /MailExample|Customer inquiry|Server accepted|simulated|Policy missing|fake|browser-dot/i);
  assert.doesNotMatch(homepage, /mail\.png|screenshot-full\.webp/);
});

test('homepage loads restrained Inter typography and avoids rejected visual treatments', async () => {
  const files = await Promise.all([
    readSource('../../src/pages/index.jsx'),
    readSource('../../src/components/home/MailFirstHeader.jsx'),
    readSource('../../src/components/home/MailFirstFooter.jsx'),
  ]);
  const source = files.join('\n');

  assert.match(source, /from ['"]next\/font\/google['"]/);
  assert.match(source, /Inter\(\{/);
  assert.match(source, /weight:\s*\[['"]400['"],\s*['"]500['"],\s*['"]600['"]\]/);
  assert.match(source, /inter\.className/);
  assert.doesNotMatch(source, /bg-gradient|radial-gradient|rounded-full|shadow-(?:lg|xl|2xl)|uppercase|tracking-\[0\.[12]/);
  assert.doesNotMatch(source, /#0d252c|#102d35|#fffdf9|#edf4f3/);
});

test('homepage presents outgoing safeguards before incoming filtering', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  for (const text of ['Authenticate your domain', 'Check outgoing spam risks', 'Investigate delivery problems', 'Filter unwanted incoming mail']) {
    assert.match(homepage, new RegExp(text));
  }
  assert.ok(homepage.indexOf('Check outgoing spam risks') < homepage.indexOf('Filter unwanted incoming mail'));
  assert.match(homepage, /href="\/tools\/email-header-analyzer"/);
  assert.doesNotMatch(homepage, /automatically (?:hold|block)|>Pass<|Review needed|Policy missing/i);
});

test('homepage keeps customer conversation ownership visible', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  assert.match(homepage, /Manage customer conversations/);
  assert.match(homepage, /Helpdesk and CRM follow-up/);
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
  assert.match(homepage, /https:\/\/m\.venmail\.io\/docs\/agents/);
  assert.doesNotMatch(homepage, /webhook/i);
});

test('homepage links the verified operations suite', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  assert.match(homepage, /Work beyond email/);
  for (const href of ['/product/contacts', '/product/calendar', '/product/meeting', '/product/booking', '/product/email-automation']) {
    assert.match(homepage, new RegExp(`['\"]${href}['\"]`));
  }
  assert.doesNotMatch(homepage, /href="\/product\/files"/);
});

test('homepage pricing uses approved offers, signup helpers, quote, and crypto paths', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  assert.match(homepage, /Plans that fit your team/);
  assert.match(homepage, /businessSignupUrl\("standard"\)/);
  assert.match(homepage, /businessSignupUrl\("business"\)/);
  assert.match(homepage, /\$1 each additional/);
  assert.match(homepage, /\$20/);
  assert.match(homepage, /200 GB pooled/);
  assert.match(homepage, /href="\/request-quote"/);
  assert.match(homepage, /USDC\/USDT payments are available through Venmail Billing/);
});

test('homepage navigation reaches delivery and incoming spam sections', async () => {
  const files = await Promise.all([
    readSource('../../src/components/home/MailFirstHeader.jsx'),
    readSource('../../src/components/home/MailFirstFooter.jsx'),
  ]);
  const source = files.join('\n');

  for (const [label, href] of [['Delivery', '#delivery'], ['Spam control', '#spam-control'], ['Developers', '#developers'], ['Pricing', '#pricing']]) {
    assert.match(source, new RegExp(`['\"]${label}['\"], ['\"]${href}['\"]`));
  }
  for (const href of ['/resources/help', 'https://status.venmail.app', '/request-quote', '/resources/terms-of-service', '/resources/privacy-policy']) {
    assert.match(source, new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
});

test('homepage FAQ uses native disclosure controls and approved answers', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  assert.match(homepage, /<details/);
  assert.match(homepage, /<summary/);
  assert.match(homepage, /What do I need to create an account\?/);
  assert.match(homepage, /Enter your name, existing email address, and password\. A domain is required before activation\./);
  assert.match(homepage, /When does service activate\?/);
  assert.match(homepage, /Activation follows domain ownership verification and payment\./);
  assert.match(homepage, /How does Venmail help delivery\?/);
  assert.match(homepage, /Domain authentication, outgoing checks, and header analysis support responsible sending and diagnosis\. Recipient systems and sender reputation still determine inbox placement\./);
});

test('homepage copy avoids interface narration and unsupported delivery promises', async () => {
  const files = await Promise.all([
    readSource('../../src/pages/index.jsx'),
    readSource('../../src/components/home/MailFirstHeader.jsx'),
    readSource('../../src/components/home/MailFirstFooter.jsx'),
  ]);
  const copy = files.join('\n');

  assert.doesNotMatch(copy, /what you(?:'|’)ve created|keep what you create|return to|in one place|this screen|this page|\bhere\b|use this to|you can find/i);
  assert.doesNotMatch(copy, /guaranteed inbox|we guarantee inbox|inbox placement guaranteed|99\.\d+% uptime|certified/i);
  assert.doesNotMatch(copy, /Bring your own storage|BYOS/i);
});
