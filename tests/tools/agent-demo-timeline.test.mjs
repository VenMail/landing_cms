import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { getAgentDemoFrame, DEMO_SCENES, SCENE_FRAMES } from '../../src/components/agents/agentDemoTimeline.mjs';

test('campaign progresses from draft to confirmation and follow-up without claiming delivery on queue', () => {
  const a = getAgentDemoFrame('campaign', 0);
  const b = getAgentDemoFrame('campaign', SCENE_FRAMES);
  const c = getAgentDemoFrame('campaign', SCENE_FRAMES * 2);
  assert.match(a.user, /Toronto retailers/);
  assert.match(b.user, /send/i);
  assert.match(b.result, /queued/i);
  assert.match(c.result, /2 recorded opens/i);
  assert.equal(DEMO_SCENES.campaign.length, 4);
});

test('mail scenario advances independently and clamps out-of-range frames', () => {
  assert.match(getAgentDemoFrame('mail', 0).user, /six days/i);
  assert.equal(getAgentDemoFrame('mail', -1), DEMO_SCENES.mail[0]);
  assert.equal(getAgentDemoFrame('mail', 99999), DEMO_SCENES.mail.at(-1));
});
