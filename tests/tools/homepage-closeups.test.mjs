import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('product previews use sample data and respect reduced motion', async () => {
  const [mail, venia, css] = await Promise.all([
    readFile(new URL('../../src/components/home/InboxPreviewLightbox.jsx', import.meta.url), 'utf8'),
    readFile(new URL('../../src/components/PageSections/VeniaCollaborationSection.jsx', import.meta.url), 'utf8'),
    readFile(new URL('../../src/components/home/ProductPreview.module.css', import.meta.url), 'utf8'),
  ]);
  assert.match(mail, /Sample data/);
  assert.match(venia, /Sample data/);
  assert.match(venia, /venia-signing-desktop\.png/);
  assert.match(venia, /venia-signing-mobile\.png/);
  assert.doesNotMatch(venia, /Concept preview/);
  assert.match(css, /prefers-reduced-motion/);
  assert.doesNotMatch(mail + venia, /follow_up\.png|docs-editor\.png/);
});
