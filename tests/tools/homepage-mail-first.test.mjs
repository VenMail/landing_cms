import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readSource = path => readFile(new URL(path, import.meta.url), 'utf8');

test('homepage leads with practical mail outcomes and account conditions', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  assert.match(homepage, /Business email\./);
  assert.match(homepage, /Built for the inbox\./);
  assert.match(homepage, /Reach customer inboxes, see how many times an email was opened, and get a practical follow-up suggestion when the conversation needs one\./);
  assert.match(homepage, /Create your account/);
  assert.match(homepage, /Compare plans/);
  assert.match(homepage, /\$1\/month total — includes 5 email accounts\./);
  assert.match(homepage, /No payment required to create an account\. Mailbox activation requires a verified domain and a paid plan\./);
});

test('homepage uses the real Venmail inbox asset without recreating product chrome', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  assert.match(homepage, /src="\/email-dashboard-preview\.png"/);
  assert.match(homepage, /width=\{1802\}/);
  assert.match(homepage, /height=\{905\}/);
  assert.match(homepage, /alt="Venmail inbox"/);
  assert.match(homepage, /href="\/email-dashboard-preview\.png"/);
  assert.match(homepage, /Open full-size Venmail inbox image\./);
  assert.doesNotMatch(homepage, /MailExample|Customer inquiry|Server accepted|simulated|Policy missing|fake|browser-dot/i);
  assert.doesNotMatch(homepage, /mail\.png|screenshot-full\.webp/);
});

test('homepage presents professional custom-domain email before delivery details', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  assert.match(homepage, /Professional email at yourname@<wbr \/>yourbusinessdomain\.com\./);
  assert.match(homepage, /Professional email for your business/);
  assert.match(homepage, />yourname</);
  assert.match(homepage, />@yourbusinessdomain\.com</);
  assert.doesNotMatch(homepage, /aria-label="yourname@yourbusinessdomain\.com"|aria-hidden="true" className="block(?: text-orange-700)?">(?:yourname|@yourbusinessdomain\.com)/);
  assert.match(homepage, /src="\/professional-address-art\.png"/);
  assert.match(homepage, /alt=""/);
  assert.match(homepage, /Business plan/);
  assert.match(homepage, /Unlimited email accounts/);
  assert.match(homepage, /Free \.com domain/);
  assert.match(homepage, /Annual Business includes one \.com domain free for the first year\./);
  assert.match(homepage, /Annual Business plan and included \.com domain/);
  assert.match(homepage, /Ask about annual Business/);
  assert.match(homepage, /homepage_professional_email/);
  assert.ok(homepage.indexOf('Professional email for your business') < homepage.indexOf('id="delivery"'));
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

test('homepage presents delivery outcomes and practical use cases before incoming filtering', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  for (const text of ['Inbox placement comes first', 'Inbox placement strategy', 'See email opens', 'Get follow-up suggestions', 'Quotes, invoices, and customer questions', 'Quotes', 'Invoices', 'Customer questions', 'Filter unwanted incoming mail']) {
    assert.match(homepage, new RegExp(text));
  }
  assert.ok(homepage.indexOf('Inbox placement strategy') < homepage.indexOf('Filter unwanted incoming mail'));
  assert.match(homepage, /Privacy settings can hide or add opens, so counts are estimates\./);
  assert.match(homepage, /Review it before sending\./);
  assert.doesNotMatch(homepage, /Analyze email headers/);
  assert.doesNotMatch(homepage, /automatically (?:hold|block)|>Pass<|Review needed|Policy missing/i);
});

test('homepage keeps customer conversation ownership visible', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  assert.match(homepage, /Manage customer conversations/);
  assert.match(homepage, /Helpdesk and CRM follow-up/);
  assert.match(homepage, /Keep customer questions moving with clear ownership and timely replies\./);
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
  assert.ok(homepage.indexOf('A successful response means Venmail accepted the message for sending.') < homepage.indexOf('</details>', homepage.indexOf('API request and 200 response excerpt')));
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
  assert.match(homepage, /Choose monthly Business/);
  assert.match(homepage, /Additional accounts: \$1\/account\/month\./);
  assert.match(homepage, /\$20/);
  assert.match(homepage, /200 GB pooled/);
  assert.match(homepage, /Standard uses a domain you already own\. Annual Business includes one \.com domain free for the first year\./);
  assert.match(homepage, /href="\/request-quote"/);
  assert.match(homepage, /USDC\/USDT payments are available through Venmail Billing/);
  assert.match(homepage, /<summary[^>]*>Other payment methods/);
  assert.ok(homepage.indexOf('Plans that fit your team') < homepage.indexOf('Filter unwanted incoming mail'));
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
  for (const href of ['/resources/help', 'https://status.venmail.app', '/request-quote', '/contact-us', '/about-us', '/career', '/resources/partner', '/resources/ai-principles', '/security-whitepaper', 'https://github.com/VenMail', '/resources/terms-of-service', '/resources/privacy-policy', '/resources/dpa']) {
    assert.match(source, new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
  for (const href of ['/blog', '/solutions', '/integrations', '/why-venmail', '/venmail-agent', '/tools/email-header-analyzer', '/product/mail', '/product/email-to-action', '/compare/gmail', '/compare/outlook']) {
    assert.match(source, new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
  assert.match(source, />Sign up<\/a>/);
  assert.match(source, /homepage_mobile_header/);
  assert.match(source, /className="relative lg:hidden"/);
  assert.match(source, /className="hidden items-center gap-4 sm:flex"/);
  assert.doesNotMatch(source, /homepage_mobile_nav/);
  assert.match(source, /8,000\+/);
  assert.match(source, /Email accounts/);
  assert.match(source, /100%/);
  assert.match(source, /Reported web uptime/);
  assert.match(source, /Web availability for venmail\.io, m\.venmail\.io, and venia\.cloud/);
  assert.doesNotMatch(source, /active users|paid customers|live status|uptime guarantee|SMTP uptime/i);
});

test('homepage FAQ uses native disclosure controls and approved answers', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  assert.match(homepage, /<details/);
  assert.match(homepage, /<summary/);
  assert.match(homepage, /What do I need to create an account\?/);
  assert.match(homepage, /Enter your name, existing email address, and password\./);
  assert.match(homepage, /Is a \.com domain included\?/);
  assert.match(homepage, /Annual Business includes one \.com domain free for the first year\./);
  assert.match(homepage, /When does service activate\?/);
  assert.match(homepage, /Activation follows domain verification and payment\./);
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
