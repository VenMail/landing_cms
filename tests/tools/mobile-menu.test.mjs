import assert from 'node:assert/strict';
import test from 'node:test';
import { closeDetailsMenu } from '../../src/components/home/mobileMenuState.mjs';

test('selecting a mobile navigation destination closes its native details menu', () => {
  const details = { open: true };

  closeDetailsMenu(details);

  assert.equal(details.open, false);
  assert.doesNotThrow(() => closeDetailsMenu(null));
});
