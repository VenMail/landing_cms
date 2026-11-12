import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = path => readFile(new URL(path, import.meta.url), 'utf8');

test('homepage distinguishes personal mail from the team shared inbox', async () => {
  const [home, shared, primary] = await Promise.all([
    read('../../src/pages/index.jsx'),
    read('../../src/components/home/SharedInboxStory.jsx'),
    read('../../src/components/home/PrimaryInboxPreview.jsx'),
  ]);
  assert.ok(home.indexOf('<PrimaryInboxPreview />') > 0);
  assert.ok(home.indexOf('<PrimaryInboxPreview />') < home.indexOf('<SharedInboxStory />'));
  assert.doesNotMatch(home, /<InboxPreviewLightbox\s*\/>/);
  assert.match(shared, /<InboxPreviewLightbox\s*\/>/);
  assert.match(shared, /Shared inbox access may be limited/);
  assert.match(primary, /Primary inbox/);
  assert.match(primary, /Sample data/);
});
