import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('primary sample uses a dedicated video while shared inbox retains its existing preview', async () => {
  const [primary, shared] = await Promise.all([
    readFile(new URL('../../src/components/home/PrimaryInboxPreview.jsx', import.meta.url), 'utf8'),
    readFile(new URL('../../src/components/home/InboxPreviewLightbox.jsx', import.meta.url), 'utf8'),
  ]);
  assert.match(primary, /PrimaryInboxVideo/);
  assert.match(primary, /Sample demonstration/);
  assert.match(shared, /shared-inbox-motion-desktop\.gif/);
  assert.match(shared, /shared-inbox-motion-mobile\.gif/);
});
