import fs from 'node:fs';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { getPublishedArticles } from '../src/data/content/catalog.mjs';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const exportRoot = path.join(repositoryRoot, 'out');
const legacyPageRoutes = fs.readFileSync(path.join(repositoryRoot, 'tests', 'fixtures', 'legacy-page-routes-2ce872d.txt'), 'utf8')
  .trim()
  .split(/\r?\n/);
const legacyArticleRoutes = fs.readFileSync(path.join(repositoryRoot, 'tests', 'fixtures', 'legacy-article-routes-2ce872d.txt'), 'utf8')
  .trim()
  .split(/\r?\n/);
const articleRoutes = getPublishedArticles().map((article) => new URL(article.canonicalUrl).pathname);
const preservedRoutes = [...new Set([...legacyPageRoutes, ...legacyArticleRoutes, ...articleRoutes])];
const alternateHomepageRoutes = new Set(['/cinematic', '/index-cinematic']);

const workerSource = fs.readFileSync(path.join(repositoryRoot, 'worker.js'), 'utf8');
const { default: worker } = await import(`data:text/javascript;base64,${Buffer.from(workerSource).toString('base64')}`);
const exportEnv = {
  BUCKET: {
    async get(key) {
      const target = path.resolve(exportRoot, key);
      assert.ok(target.startsWith(`${exportRoot}${path.sep}`), `export key stays inside out/: ${key}`);
      try {
        return { body: fs.readFileSync(target) };
      } catch (error) {
        if (error.code === 'ENOENT') return null;
        throw error;
      }
    },
  },
};
const exportedRequest = (url, method = 'GET') => worker.fetch(new Request(url, { method }), exportEnv);

for (const route of ['', 'pricing', 'resources/privacy-policy', 'resources/ai-principles', 'security-whitepaper']) {
  const html = fs.readFileSync(`out/${route || 'index'}.html`, 'utf8');
  const head = html.split('</head>')[0];
  assert.equal((head.match(/<title\b[^>]*>/g) || []).length, 1, `${route}: one title`);
  assert.match(head, /<title\b[^>]*>[^<]+<\/title>/, `${route}: nonempty title`);
  const canonical = head.match(/<link\b[^>]*rel="canonical"[^>]*>/g) || [];
  assert.equal(canonical.length, 1, `${route}: one canonical`);
  assert.ok(canonical[0].includes(`href="https://venmail.io${route ? '/' + route : ''}"`), `${route}: apex canonical`);
  assert.equal((head.match(/<meta\b[^>]*name="description"[^>]*>/g) || []).length, 1, `${route}: one description`);
}
const pricing = fs.readFileSync('out/pricing.html', 'utf8');
const homepage = fs.readFileSync('out/index.html', 'utf8');
for (const text of [
  'Business email.',
  'Built for the inbox.',
  'Reach customer inboxes, see how many times an email was opened, and get a practical follow-up suggestion when the conversation needs one.',
  'From $0.20 per inbox/month. Standard costs $1/month total for 5 inboxes. Each additional inbox costs $1/month.',
  'No payment required to create an account. Mailbox activation requires a verified domain and a paid plan.',
  '/email-dashboard-preview.png',
  'Open full-size Venmail inbox image.',
  '/professional-address-art.png',
  'Professional email for your business',
  '>yourname</span>',
  '>@yourbusinessdomain.com</span>',
  'Annual Business includes one .com domain free for the first year.',
  'Ask about annual Business',
  'Inbox placement comes first',
  'Inbox placement strategy',
  'See email opens',
  'Privacy settings can hide or add opens, so counts are estimates.',
  'Get follow-up suggestions',
  'Quotes, invoices, and customer questions',
  'Other payment methods',
  'Filter unwanted incoming mail',
  'A dedicated support address for your CRM',
  'mail@support.',
  'CRM routing requires a custom integration.',
  'Subdomain DNS setup required.',
  'Email operations for your product.',
  'https://m.venmail.io/api/v1/agent/messages',
  'https://m.venmail.io/platform/api/docs',
  'Customer conversations beyond email',
  'Connect a dedicated Venmail inbox to an AI agent. Talk to your AI mail agent over Telegram or WhatsApp.',
  '/ai-inbox-agents',
  'Explore AI Agents',
  'Work together with your team',
  'https://venia.cloud',
  'Can I use Venmail with Gmail?',
  'Configure Gmail with your Venmail IMAP and SMTP credentials to send and receive through Gmail.',
  'Work beyond email',
  'Plans that fit your team',
  'Up to 100 email accounts included',
  '+$1/month per additional inbox',
  'What do I need to create an account?',
  'Is a .com domain included?',
  '8,000+',
  'Email accounts',
  'As of 13 October 2026',
  'Reported web uptime',
  '90-day reporting window',
  'Web availability for venmail.io, m.venmail.io, and venia.cloud',
]) assert.ok(homepage.includes(text), `homepage: ${text}`);
assert.ok(homepage.indexOf('Plans that fit your team') < homepage.indexOf('Filter unwanted incoming mail'), 'homepage: pricing follows primary use cases');
for (const plan of ['standard', 'business']) assert.ok(homepage.includes(`type=business&amp;plan=${plan}`), `homepage: ${plan} signup intent rendered`);
assert.ok(homepage.includes('/request-quote'), 'homepage: migration and enterprise quote linked');
assert.ok(homepage.includes('/solutions/marketing'), 'homepage: campaigns linked');
assert.ok(homepage.includes('>Campaigns</span>'), 'homepage: Campaigns label rendered');
assert.ok(homepage.includes('>Appointments</span>'), 'homepage: Appointments label rendered');
for (const route of ['calendar', 'meeting', 'booking', 'email-automation']) {
  assert.ok(homepage.includes(`/product/${route}`), `homepage: ${route} linked`);
}
assert.ok(!/webhook|Bring your own storage|BYOS/i.test(homepage), 'homepage: unsupported API and storage claims absent');
assert.ok(!/Customer inquiry|Server accepted|simulated only|Review needed|Policy missing/i.test(homepage), 'homepage: simulated product and delivery states absent');
assert.ok(!/active users|paid customers|live status|uptime guarantee|SMTP uptime/i.test(homepage), 'homepage: trust snapshots avoid broader claims');
for (const plan of ['standard', 'business']) {
  assert.ok(pricing.includes(`type=business&amp;plan=${plan}`), `${plan}: signup intent rendered`);
}
assert.ok(pricing.includes('/request-quote'), 'enterprise quote request rendered');
assert.ok(!pricing.includes('plan=enterprise'), 'enterprise remains quote-only');
assert.ok(pricing.includes('type=personal'), 'personal mailbox remains separate');
assert.ok(pricing.includes('Up to 100 email accounts included'), 'Business account allowance rendered');
assert.ok(!/unlimited email accounts/i.test(pricing), 'pricing does not claim unlimited email accounts');
assert.ok(!pricing.includes('AI Rewrite'), 'retired rewrite offer absent');
for (const route of ['security-whitepaper', 'resources/privacy-policy', 'resources/dpa']) {
  const html = fs.readFileSync(`out/${route}.html`, 'utf8');
  assert.ok(html.includes('same shared storage infrastructure'), `${route}: shared hosting is disclosed`);
  assert.match(html, /future region preference/i, `${route}: regional preference is not a residency claim`);
}
assert.ok(fs.readFileSync('out/resources/privacy-policy.html', 'utf8').includes('Groq'), 'AI processor disclosed');
const legal = fs.readFileSync('out/solutions/legal.html', 'utf8');
assert.ok(legal.includes('Managed plans use shared storage'), 'industry storage copy distinguishes managed plans');
assert.ok(!legal.includes('never on shared infrastructure'), 'industry pages do not promise dedicated infrastructure for every plan');

const exportedHtml = new Map();
for (const route of preservedRoutes) {
  const url = `https://venmail.io${route}`;
  const response = await exportedRequest(url);
  assert.equal(response.status, 200, `${route}: preserved route returns 200`);
  const body = await response.text();
  assert.ok(body.length > 0, `${route}: preserved route has a body`);
  exportedHtml.set(route, body);

  if (route === '/') {
    const alias = await exportedRequest('https://venmail.io/index.html?legacy=1');
    assert.equal(alias.status, 301, '/index.html: permanent canonical redirect');
    assert.equal(alias.headers.get('location'), 'https://venmail.io/?legacy=1', '/index.html: query retained');
  } else {
    for (const aliasPath of [`${route}/`, `${route}.html`]) {
      const alias = await exportedRequest(`https://venmail.io${aliasPath}?legacy=1`);
      assert.equal(alias.status, 301, `${aliasPath}: permanent canonical redirect`);
      assert.equal(alias.headers.get('location'), `${url}?legacy=1`, `${aliasPath}: query retained`);
    }
  }
}

for (const aliasPath of ['/careers', '/careers/', '/careers.html']) {
  const response = await exportedRequest(`https://www.venmail.io${aliasPath}?legacy=1`);
  assert.equal(response.status, 301, `${aliasPath}: verified moved route redirects permanently`);
  assert.equal(response.headers.get('location'), 'https://venmail.io/career?legacy=1', `${aliasPath}: redirects directly to canonical route`);
}

const sitemap = fs.readFileSync(path.join(exportRoot, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>(https:\/\/venmail\.io[^<]*)<\/loc>/g)].map((match) => match[1]);
const sitemapPaths = new Set(sitemapUrls.map((url) => new URL(url).pathname));
for (const route of preservedRoutes) {
  if (!alternateHomepageRoutes.has(route)) assert.ok(sitemapPaths.has(route), `${route}: preserved route remains in sitemap`);
}
for (const url of sitemapUrls) {
  const response = await exportedRequest(url, 'HEAD');
  assert.equal(response.status, 200, `${url}: sitemap URL resolves in the export`);
}

for (const [sourceRoute, html] of exportedHtml) {
  for (const match of html.matchAll(/<img\b[^>]*\ssrc=(["'])(.*?)\1/g)) {
    const src = match[2].replaceAll('&amp;', '&');
    let target;
    try {
      target = new URL(src, `https://venmail.io${sourceRoute}`);
    } catch {
      continue;
    }
    if (target.hostname !== 'venmail.io' || !['http:', 'https:'].includes(target.protocol)) continue;
    const response = await exportedRequest(target.href, 'HEAD');
    assert.equal(response.status, 200, `${sourceRoute}: image ${target.pathname} exists in the export`);
  }

  for (const match of html.matchAll(/\shref=(["'])(.*?)\1/g)) {
    const href = match[2].replaceAll('&amp;', '&');
    if (!href || href.startsWith('#')) continue;
    let target;
    try {
      target = new URL(href, `https://venmail.io${sourceRoute}`);
    } catch {
      continue;
    }
    if (target.hostname !== 'venmail.io' || !['http:', 'https:'].includes(target.protocol)) continue;
    const response = await exportedRequest(target.href, 'HEAD');
    assert.ok(response.status < 400, `${sourceRoute}: internal link ${href} resolves`);
    if (response.status >= 300) {
      const redirected = await exportedRequest(response.headers.get('location'), 'HEAD');
      assert.equal(redirected.status, 200, `${sourceRoute}: internal link ${href} resolves after one redirect`);
    }
  }
}

console.log(`Exported metadata, offers, and ${preservedRoutes.length} preserved routes verified.`);
