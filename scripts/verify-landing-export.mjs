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
assert.ok(fs.readFileSync('out/resources/privacy-policy.html', 'utf8').includes('Groq'), 'AI processor disclosed');
console.log('Exported homepage, pricing, and trust pages have valid metadata and signup offers.');
