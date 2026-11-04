import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('homepage shows close-up product features', async () => {
  const [mail, venia] = await Promise.all([
    readFile(new URL('../../src/components/home/InboxPreviewLightbox.jsx', import.meta.url), 'utf8'),
    readFile(new URL('../../src/components/PageSections/VeniaCollaborationSection.jsx', import.meta.url), 'utf8'),
  ]);
  assert.match(mail, /src="\/follow_up\.png"/);
  assert.match(venia, /src="\/docs-editor\.png"/);
  assert.doesNotMatch(venia, /venia-office-desk\.png/);
});
