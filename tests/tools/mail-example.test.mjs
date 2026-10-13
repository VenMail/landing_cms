import assert from 'node:assert/strict';
import test from 'node:test';
import { INITIAL_MAIL_EXAMPLE, mailExampleReducer } from '../../src/components/home/mailExampleState.mjs';

test('mail example follows open, assign, edit, and simulated acceptance states', () => {
  const opened = mailExampleReducer(INITIAL_MAIL_EXAMPLE, { type: 'open' });
  assert.equal(opened.open, true);
  assert.equal(opened.owner, 'Unassigned');

  const assigned = mailExampleReducer(opened, { type: 'assign' });
  assert.equal(assigned.owner, 'Daniel · Sales');

  const edited = mailExampleReducer(assigned, { type: 'edit', value: 'A revised customer reply.' });
  assert.equal(edited.reply, 'A revised customer reply.');

  const accepted = mailExampleReducer(edited, { type: 'send' });
  assert.equal(accepted.status, 'Server accepted — simulated only');
  assert.equal(accepted.reply, 'A revised customer reply.');
});

test('mail example reset restores the approved sample without persistence', () => {
  const changed = { ...INITIAL_MAIL_EXAMPLE, open: true, owner: 'Daniel · Sales', reply: 'Changed', status: 'Server accepted — simulated only' };
  const reset = mailExampleReducer(changed, { type: 'reset' });

  assert.deepEqual(reset, INITIAL_MAIL_EXAMPLE);
  assert.notEqual(reset, INITIAL_MAIL_EXAMPLE);
  assert.equal(reset.reply, 'Hi Maya, thanks for reaching out. I’ll confirm pricing and delivery timing and follow up shortly.');
});
