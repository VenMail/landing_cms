import test from 'node:test';
import assert from 'node:assert/strict';
import { growthState } from '../../src/remotion/growthState.mjs';

test('growth illustration holds its initial team size until animation starts', () => {
  for (const frame of [0, 1, 15, 29, 30]) {
    assert.deepEqual(growthState(frame), { userCount: 10, progress: 0, competitorCost: 60, venmailCost: 7 });
  }
});
test('growth illustration remains within chart bounds throughout and after playback', () => {
  let previous = 10;
  for (let frame = 0; frame <= 260; frame++) {
    const state = growthState(frame);
    assert.ok(state.userCount >= previous && state.userCount <= 200);
    assert.ok(state.progress >= 0 && state.progress <= 1);
    assert.ok(state.competitorCost > 0 && state.venmailCost > 0);
    previous = state.userCount;
  }
  assert.equal(growthState(180).userCount, 200);
  assert.equal(growthState(239).progress, 1);
});
