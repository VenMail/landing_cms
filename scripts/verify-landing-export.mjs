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
for (const plan of ['startup', 'business', 'enterprise', 'custom']) {
  assert.ok(pricing.includes(`type=business&amp;plan=${plan}&amp;billing=monthly`), `${plan}: signup intent rendered`);
}
assert.ok(pricing.includes('type=personal'), 'personal mailbox remains separate');
assert.ok(!pricing.includes('AI Rewrite'), 'retired rewrite offer absent');
assert.ok(pricing.includes('Future region preference'), 'region selector describes a future preference');
for (const route of ['pricing', 'security-whitepaper', 'resources/privacy-policy', 'resources/dpa']) {
  const html = fs.readFileSync(`out/${route}.html`, 'utf8');
  assert.ok(html.includes('same shared storage infrastructure'), `${route}: shared hosting is disclosed`);
  assert.match(html, /future region preference/i, `${route}: regional preference is not a residency claim`);
}
assert.ok(fs.readFileSync('out/resources/privacy-policy.html', 'utf8').includes('Groq'), 'AI processor disclosed');
const legal = fs.readFileSync('out/solutions/legal.html', 'utf8');
assert.ok(legal.includes('Managed plans use shared storage'), 'industry storage copy distinguishes managed plans');
assert.ok(!legal.includes('never on shared infrastructure'), 'industry pages do not promise dedicated infrastructure for every plan');
console.log('Exported homepage, pricing, and trust pages have valid metadata and signup offers.');
