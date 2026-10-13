import fs from 'node:fs';
import assert from 'node:assert/strict';

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
  'Outgoing spam checks and domain authentication help your emails reach customers.',
  '/email-dashboard-preview.png',
  'Check outgoing spam risks',
  'Filter unwanted incoming mail',
  'Manage customer conversations',
  'POST https://m.venmail.io/api/v1/agent/messages',
  'Work beyond email',
  'Plans that fit your team',
  'What do I need to create an account?',
]) assert.ok(homepage.includes(text), `homepage: ${text}`);
for (const plan of ['standard', 'business']) assert.ok(homepage.includes(`type=business&amp;plan=${plan}`), `homepage: ${plan} signup intent rendered`);
assert.ok(homepage.includes('/tools/email-header-analyzer'), 'homepage: header analyzer linked');
assert.ok(homepage.includes('/request-quote'), 'homepage: migration and enterprise quote linked');
for (const route of ['contacts', 'calendar', 'meeting', 'booking', 'email-automation']) {
  assert.ok(homepage.includes(`/product/${route}`), `homepage: ${route} linked`);
}
assert.ok(!/webhook|Bring your own storage|BYOS/i.test(homepage), 'homepage: unsupported API and storage claims absent');
assert.ok(!/Customer inquiry|Server accepted|simulated only|Review needed|Policy missing/i.test(homepage), 'homepage: simulated product and delivery states absent');
for (const plan of ['standard', 'business']) {
  assert.ok(pricing.includes(`type=business&amp;plan=${plan}`), `${plan}: signup intent rendered`);
}
assert.ok(pricing.includes('/request-quote'), 'enterprise quote request rendered');
assert.ok(!pricing.includes('plan=enterprise'), 'enterprise remains quote-only');
assert.ok(pricing.includes('type=personal'), 'personal mailbox remains separate');
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
console.log('Exported homepage, pricing, and trust pages have valid metadata and signup offers.');
