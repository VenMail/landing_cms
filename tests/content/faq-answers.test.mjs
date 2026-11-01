import test from 'node:test';
import assert from 'node:assert/strict';
import { faqGroups } from '../../src/data/faq.mjs';
import { getArticleBySlug } from '../../src/data/content/catalog.mjs';

test('FAQ answers are unique, substantive and link to relevant internal resources', () => {
  const items = faqGroups.flatMap(group => group.questions);
  assert.ok(items.length >= 6);
  assert.equal(new Set(items.map(item => item.question.toLowerCase())).size, items.length);
  for (const item of items) {
    assert.ok(item.answer.trim().length >= 50, item.question);
    assert.ok(item.href.startsWith('/'), item.question);
    assert.ok(item.linkText.trim(), item.question);
    if (item.href.startsWith('/blog/')) {
      assert.equal(getArticleBySlug(item.href.slice('/blog/'.length))?.status, 'published', item.href);
    }
  }
});

test('workspace comparison answers email-only and document-suite selection questions', () => {
  const blocks = getArticleBySlug('google-workspace-alternatives-email-only').body;
  for (const heading of ['Can a small team use domain email without Google Workspace?', 'What if the team also needs shared documents?']) {
    const index = blocks.findIndex(block => block.type === 'heading' && block.text === heading);
    assert.ok(index >= 0, heading);
    assert.equal(blocks[index + 1]?.type, 'paragraph');
    assert.ok(blocks[index + 1].text.length > 80);
  }
});

test('FAQ covers researched business-email and delivery questions with practical guidance', () => {
  const answers = new Map(faqGroups.flatMap(group => group.questions).map(item => [item.question, item.answer]));
  const expectations = [
    ['How do I create a business email address?', /domain.*(?:MX|mail records)/i],
    ['Can I create a business email address for free?', /domain.*(?:cost|paid|price)/i],
    ['What is an SMTP server?', /send/i],
    ['What is email forwarding?', /(?:forward|redirect).*(?:inbox|address)/i],
    ['How do I set up DMARC?', /report/i],
    ['Why are my emails going to spam?', /(?:SPF|DKIM|DMARC)/i],
  ];
  for (const [question, guidance] of expectations) {
    assert.match(answers.get(question) ?? '', guidance, question);
  }
});
