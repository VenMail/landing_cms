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
  assert.match(homepage, /From \$0\.20 per inbox\/month\. Standard costs \$1\/month total for 5 inboxes\. Each additional inbox costs \$1\/month\./);
  assert.match(homepage, /No payment required to create an account\. Mailbox activation requires a verified domain and a paid plan\./);
});

test('homepage uses the real Venmail inbox asset without recreating product chrome', async () => {
  const [homepage, lightbox] = await Promise.all([
    readSource('../../src/pages/index.jsx'),
    readSource('../../src/components/home/InboxPreviewLightbox.jsx'),
  ]);

  assert.match(homepage, /import InboxPreviewLightbox from/);
  assert.match(homepage, /<InboxPreviewLightbox \/>/);
  assert.doesNotMatch(homepage, /href="\/email-dashboard-preview\.png"/);
  assert.match(lightbox, /const \[isOpen, setIsOpen\] = useState\(false\)/);
  assert.match(lightbox, /aria-haspopup="dialog"/);
  assert.match(lightbox, /role="dialog"/);
  assert.match(lightbox, /aria-modal="true"/);
  assert.match(lightbox, /onKeyDown/);
  assert.match(lightbox, /event\.key === 'Escape'/);
  assert.match(lightbox, /event\.target === event\.currentTarget/);
  assert.match(lightbox, /triggerRef\.current\?\.focus\(\)/);
  assert.match(lightbox, /src="\/email-dashboard-preview\.png"/);
  assert.match(lightbox, /Open full-size Venmail inbox image\./);
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
  assert.match(homepage, /Up to 100 email accounts included/);
  assert.match(homepage, /200 GB pooled storage/);
  assert.match(homepage, /Free \.com domain/);
  assert.match(homepage, /Annual Business includes one \.com domain free for the first year\./);
  assert.match(homepage, /Annual Business plan and included \.com domain/);
  assert.match(homepage, /Ask about annual Business/);
  assert.match(homepage, /homepage_professional_email/);
  assert.ok(homepage.indexOf('Professional email for your business') < homepage.indexOf('id="delivery"'));
});

test('homepage uses local system typography and avoids rejected visual treatments', async () => {
  const files = await Promise.all([
    readSource('../../src/pages/index.jsx'),
    readSource('../../src/components/home/MailFirstHeader.jsx'),
    readSource('../../src/components/home/MailFirstFooter.jsx'),
    readSource('../../src/components/layout/DefaultLayout.jsx'),
    readSource('../../src/components/layout/CustomLayout.jsx'),
  ]);
  const source = files.join('\n');

  assert.doesNotMatch(source, /next\/font\/google/);
  assert.doesNotMatch(source, /Inter\(\{|inter\.className/);
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

test('homepage presents dedicated support mailboxes without claiming built-in CRM routing', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  assert.match(homepage, /A dedicated support address for your CRM/);
  assert.match(homepage, /Receive customer requests at mail@support\.<wbr \/>yourdomain\.com while your main business email stays unchanged\./);
  assert.match(homepage, /CRM routing requires a custom integration\./);
  assert.match(homepage, /Subdomain DNS setup required\./);
  assert.match(homepage, /href="\/request-quote"[^>]*>\s*Discuss CRM integration/);
  assert.doesNotMatch(homepage, /automatically route|assigned follow-up|Platform Email API/i);
});

test('homepage renders the maintained developer API section once', async () => {
  const [homepage, agentApi] = await Promise.all([
    readSource('../../src/pages/index.jsx'),
    readSource('../../src/components/PageSections/AgentApiSection.jsx'),
  ]);

  assert.match(homepage, /import AgentApiSection from/);
  assert.equal((homepage.match(/<AgentApiSection \/>/g) || []).length, 1);
  assert.doesNotMatch(homepage, /const apiRequest|API request and 200 response excerpt/);
  assert.match(agentApi, /https:\/\/m\.venmail\.io\/api\/v1\/agent\/messages/);
  assert.match(agentApi, /\/api\/v1\/agent\/messages/);
  assert.match(agentApi, /id="developers"[\s\S]*scroll-mt-24/);
  assert.match(agentApi, /href="\/developers"/);
  assert.match(agentApi, /href="https:\/\/m\.venmail\.io\/platform\/api\/docs"/);
  assert.doesNotMatch(agentApi, /@venmail\/vsm|\/v1\/agent\/threads|Drop-in MCP server/);
});

test('developer code column can shrink without widening the mobile page', async () => {
  const agentApi = await readSource('../../src/components/PageSections/AgentApiSection.jsx');

  assert.match(agentApi, /className="min-w-0 overflow-hidden rounded-2xl/);
  assert.match(agentApi, /<pre className="overflow-x-auto/);
});

test('AI inbox agents follow the API section with authentic destinations and channel status', async () => {
  const [homepage, agents] = await Promise.all([
    readSource('../../src/pages/index.jsx'),
    readSource('../../src/components/PageSections/AiInboxAgentsSection.jsx'),
  ]);

  assert.match(homepage, /import AiInboxAgentsSection from/);
  assert.ok(homepage.indexOf('<AgentApiSection />') < homepage.indexOf('<AiInboxAgentsSection />'));
  assert.match(
    agents,
    /<p className="mt-5 text-lg leading-\[1\.65\] text-\[#5f6368\]">\s*Connect a dedicated Venmail inbox to an AI agent\. Talk to your AI mail agent over Telegram or WhatsApp\.\s*<\/p>/,
  );
  assert.doesNotMatch(agents, /Telegram is active; WhatsApp support is coming soon\./);
  assert.match(agents, /src="\/images\/ai-inbox-agents-teaser\.webp"/);
  assert.match(agents, /width=\{1586\}/);
  assert.match(agents, /height=\{992\}/);
  assert.match(agents, /alt="AI assistant managing email and Telegram conversations"/);
  assert.match(agents, /href="\/ai-inbox-agents"/);
  assert.match(agents, /Explore AI Agents/);
  assert.doesNotMatch(agents, /Explore AI inbox agents/);
  assert.match(agents, /href="https:\/\/m\.venmail\.io\/register"/);
  assert.match(agents, />Telegram</);
  assert.match(agents, />Active</);
  assert.match(agents, />WhatsApp</);
  assert.match(agents, />Coming soon</);
  assert.doesNotMatch(agents, /what you(?:'|’)ve created|keep what you create|return to|in one place|this screen|this page|\bhere\b|use this to|you can find/i);
});

test('homepage presents Office collaboration and Gmail IMAP access details', async () => {
  const [homepage, collaboration, mailFirstHeader, agents] = await Promise.all([
    readSource('../../src/pages/index.jsx'),
    readSource('../../src/components/PageSections/VeniaCollaborationSection.jsx'),
    readSource('../../src/components/home/MailFirstHeader.jsx'),
    readSource('../../src/components/PageSections/AiInboxAgentsSection.jsx'),
  ]);

  assert.match(homepage, /import VeniaCollaborationSection from/);
  assert.equal((homepage.match(/<VeniaCollaborationSection \/>/g) || []).length, 1);
  assert.ok(homepage.indexOf('<AiInboxAgentsSection />') < homepage.indexOf('<VeniaCollaborationSection />'));
  assert.ok(homepage.indexOf('<VeniaCollaborationSection />') < homepage.indexOf('Work beyond email'));
  assert.match(homepage, /Can I use Venmail with Gmail\?/);
  assert.match(homepage, /Configure Gmail with your Venmail IMAP and SMTP credentials to send and receive through Gmail\./);
  assert.match(collaboration, /Work together with your team/);
  assert.match(collaboration, /Share or sign files, documents, spreadsheets, forms, and slides with your team and clients\./);
  assert.match(collaboration, /src="\/images\/venmail-office-shot-light\.png"/);
  assert.match(collaboration, /href="https:\/\/venia\.cloud"/);
  assert.match(collaboration, /target="_blank"/);
  assert.match(collaboration, /rel="noopener noreferrer"/);
  assert.match(collaboration, /data-visual="office-laptop"/);
  assert.match(collaboration, /data-visual="office-desk"/);
  assert.match(collaboration, /data-visual="office-tabletop"/);
  assert.match(collaboration, /data-visual="office-notebook"/);
  assert.match(collaboration, /data-visual="office-pen"/);
  assert.match(collaboration, /data-visual="office-mug"/);
  assert.match(collaboration, /data-visual="office-plant"/);
  assert.match(collaboration, /min-w-0/);
  assert.match(collaboration, /overflow-hidden/);
  assert.match(agents, />AI Agents<\/p>/);
  assert.match(mailFirstHeader, /\{ label: 'Office', href: 'https:\/\/venia\.cloud', external: true \}/);
  assert.match(mailFirstHeader, /target=\{external \? '_blank' : undefined\}/);
  assert.match(mailFirstHeader, /rel=\{external \? 'noopener noreferrer' : undefined\}/);
  assert.doesNotMatch(mailFirstHeader, /AI inbox agents/);
});

test('AI inbox agents have a dedicated product page and distinct navigation links', async () => {
  const [page, agents, header, mailFirstHeader, footer] = await Promise.all([
    readSource('../../src/pages/ai-inbox-agents.jsx'),
    readSource('../../src/components/PageSections/AiInboxAgentsSection.jsx'),
    readSource('../../src/components/layout/Header.jsx'),
    readSource('../../src/components/home/MailFirstHeader.jsx'),
    readSource('../../src/components/home/MailFirstFooter.jsx'),
  ]);

  assert.match(agents, /href="\/ai-inbox-agents"[^>]*>[\s\S]*?Explore AI Agents/);
  assert.match(agents, /href="https:\/\/m\.venmail\.io\/register"/);

  assert.match(header, /name: "AI inbox agents",[\s\S]*?href: "\/ai-inbox-agents"/);
  assert.match(mailFirstHeader, /\{ label: 'AI Agents', href: '\/#ai-inbox-agents' \}/);
  assert.match(footer, /\['AI inbox agents', '\/ai-inbox-agents'\]/);
  assert.match(header, /name: "Venmail Agent",[\s\S]*?href: "\/ai-inbox-agents"/);
  assert.match(footer, /\['Venmail Agent', '\/ai-inbox-agents'\]/);

  assert.match(page, /Dedicated inboxes for AI agents/);
  assert.match(page, /Connect a dedicated Venmail inbox to an AI agent\. Talk to your AI mail agent over Telegram or WhatsApp\./);
  assert.doesNotMatch(page, /WhatsApp support is coming soon|with WhatsApp coming soon/);
  assert.match(page, /Telegram/);
  assert.match(page, /WhatsApp/);
  assert.match(page, /20 saved routines/);
  assert.match(page, /href="https:\/\/m\.venmail\.io\/register"/);
  const manageLink = page.match(/<a\b(?=[^>]*href="https:\/\/m\.venmail\.io\/admin\/agents")[^>]*>/)?.[0] || '';
  assert.match(manageLink, /target="_blank"/);
  assert.match(manageLink, /rel="noopener noreferrer"/);
  assert.doesNotMatch(page, /what you(?:'|’)ve created|keep what you create|return to|in one place|this screen|this page|\bhere\b|use this to|you can find/i);
});

test('export verification requires the approved AI inbox agents copy', async () => {
  const verifier = await readSource('../../scripts/verify-landing-export.mjs');

  assert.match(verifier, /Connect a dedicated Venmail inbox to an AI agent\. Talk to your AI mail agent over Telegram or WhatsApp\./);
  assert.match(verifier, /'\/ai-inbox-agents'/);
  assert.match(verifier, /'Explore AI Agents'/);
  assert.doesNotMatch(verifier, /Telegram is active; WhatsApp support is coming soon\./);
  assert.doesNotMatch(verifier, /https:\/\/m\.venmail\.io\/admin\/agents|Manage AI agents/);
});

test('mobile apps follow AI inbox agents with verified store destinations', async () => {
  const [homepage, mobileApps] = await Promise.all([
    readSource('../../src/pages/index.jsx'),
    readSource('../../src/components/PageSections/MobileAppsSection.jsx'),
  ]);

  assert.match(homepage, /import MobileAppsSection from/);
  assert.ok(homepage.indexOf('<AiInboxAgentsSection />') < homepage.indexOf('<MobileAppsSection />'));
  assert.ok(homepage.indexOf('Work beyond email') < homepage.indexOf('<MobileAppsSection />'));
  assert.match(mobileApps, /src="\/images\/venmail-mobile-on-the-go-illustration\.webp"/);
  assert.match(mobileApps, /aria-hidden="true"[\s\S]*?pointer-events-none[\s\S]*?alt=""/);
  assert.match(mobileApps, /object-left-bottom opacity-95/);
  assert.match(mobileApps, /left-\[35%\][\s\S]*?w-\[38%\]/);
  assert.match(mobileApps, /right-\[-2%\][\s\S]*?w-\[52%\]/);
  assert.match(mobileApps, /src="\/images\/venmail-mobile-inbox-store-capture\.webp"/);
  assert.equal(
    (mobileApps.match(/src="\/images\/venmail-mobile-inbox-store-capture\.webp"/g) || []).length,
    1,
  );
  assert.match(mobileApps, /src="\/images\/venmail-mobile-inbox-store-capture-tablet\.webp"/);
  assert.match(mobileApps, /alt="Venmail mobile inbox"/);
  assert.match(
    mobileApps,
    /aria-hidden="true"[\s\S]*?className="relative aspect-\[9\/16\] overflow-hidden rounded-\[1\.35rem\]"[\s\S]*?<Image[\s\S]*?fill[\s\S]*?alt=""[\s\S]*?className="object-cover object-\[center_28%\]"/,
  );
  assert.match(
    mobileApps,
    /width=\{598\}[\s\S]*?height=\{1130\}[\s\S]*?alt="Venmail mobile inbox"[\s\S]*?className="block h-auto w-full rounded-\[1\.35rem\]"/,
  );
  const appStoreLink = mobileApps.match(/<a\b(?=[^>]*href="https:\/\/apps\.apple\.com\/us\/app\/venmail\/id6755040289")[^>]*>/)?.[0] || '';
  const googlePlayLink = mobileApps.match(/<a\b(?=[^>]*href="https:\/\/play\.google\.com\/store\/apps\/details\?id=io\.venmail\.app")[^>]*>/)?.[0] || '';
  assert.match(appStoreLink, /aria-label="Download Venmail on the App Store"/);
  assert.match(googlePlayLink, /aria-label="Get Venmail on Google Play"/);
  for (const link of [appStoreLink, googlePlayLink]) {
    assert.match(link, /target="_blank"/);
    assert.match(link, /rel="noopener noreferrer"/);
  }
  assert.doesNotMatch(mobileApps, /what you(?:'|’)ve created|keep what you create|return to|in one place|this screen|this page|\bhere\b|use this to|you can find/i);
});

test('homepage links the verified operations suite', async () => {
  const homepage = await readSource('../../src/pages/index.jsx');

  assert.match(homepage, /Work beyond email/);
  for (const href of ['/solutions/marketing', '/product/calendar', '/product/meeting', '/product/booking', '/product/email-automation']) {
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
  assert.match(homepage, /5 inboxes included — \$0\.20 per inbox/);
  assert.match(homepage, /\+\$1\/month per additional inbox/);
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

  for (const [label, href] of [['Delivery', '/#delivery'], ['Spam control', '/#spam-control'], ['Developers', '/#developers'], ['Pricing', '/#pricing']]) {
    const escapedHref = href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    assert.match(source, new RegExp(`label: ['\"]${label}['\"], href: ['\"]${escapedHref}['\"]`));
  }
  for (const href of ['/resources/help', 'https://status.venmail.app', '/request-quote', '/contact-us', '/about-us', '/career', '/resources/partner', '/resources/ai-principles', '/security-whitepaper', 'https://github.com/VenMail', '/resources/terms-of-service', '/resources/privacy-policy', '/resources/dpa']) {
    assert.match(source, new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
  for (const href of ['/blog', '/solutions', '/integrations', '/why-venmail', '/ai-inbox-agents', '/tools/email-header-analyzer', '/product/mail', '/product/email-to-action', '/compare/gmail', '/compare/outlook']) {
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

test('mail-first navigation keeps homepage sections reachable from product routes', async () => {
  const [header, agents] = await Promise.all([
    readSource('../../src/components/home/MailFirstHeader.jsx'),
    readSource('../../src/components/PageSections/AiInboxAgentsSection.jsx'),
  ]);

  for (const [label, href] of [['Delivery', '/#delivery'], ['Spam control', '/#spam-control'], ['Developers', '/#developers'], ['Pricing', '/#pricing']]) {
    const escapedHref = href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    assert.match(header, new RegExp(`label: ['"]${label}['"], href: ['"]${escapedHref}['"]`));
  }
  assert.match(header, /\{ label: 'AI Agents', href: '\/#ai-inbox-agents' \}/);
  assert.match(agents, /id="ai-inbox-agents"[\s\S]*scroll-mt-24/);
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
  assert.match(homepage, /Do I pay before my mailbox activates\?/);
  assert.match(homepage, /No payment is required to create an account\. Mailbox activation requires a verified domain and a paid plan\./);
  assert.match(homepage, /What happens if I cancel\?/);
  assert.match(homepage, /Cancel before the billing period ends to stop automatic renewal\. Payments are non-refundable except as required by law\./);
  assert.match(homepage, /How does Venmail help delivery\?/);
  assert.match(homepage, /Domain authentication, outgoing checks, and header analysis support responsible sending and diagnosis\. Recipient systems and sender reputation still determine inbox placement\./);
});

test('homepage copy avoids interface narration and unsupported delivery promises', async () => {
  const files = await Promise.all([
    readSource('../../src/pages/index.jsx'),
    readSource('../../src/components/home/MailFirstHeader.jsx'),
    readSource('../../src/components/home/MailFirstFooter.jsx'),
    readSource('../../src/components/PageSections/AgentApiSection.jsx'),
    readSource('../../src/components/PageSections/AiInboxAgentsSection.jsx'),
  ]);
  const copy = files.join('\n');

  assert.doesNotMatch(copy, /what you(?:'|’)ve created|keep what you create|return to|in one place|this screen|this page|\bhere\b|use this to|you can find/i);
  assert.doesNotMatch(copy, /guaranteed inbox|we guarantee inbox|inbox placement guaranteed|99\.\d+% uptime|certified/i);
  assert.doesNotMatch(copy, /Bring your own storage|BYOS/i);
});
