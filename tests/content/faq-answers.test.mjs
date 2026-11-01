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
