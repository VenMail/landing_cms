import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { getAgentDemoFrame, DEMO_SCENES, SCENE_FRAMES } from '../../src/components/agents/agentDemoTimeline.mjs';

test('each conversation chapter takes at most seven seconds at 30 fps', () => {
  assert.ok(SCENE_FRAMES <= 210);
});

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

test('mail scenario follows a familiar customer conversation without sending implicitly', () => {
  const scenes = DEMO_SCENES.mail;
  assert.match(scenes[0].user, /Maya.*quote/i);
  assert.match(scenes[1].user, /reply/i);
  assert.match(scenes[2].user, /draft/i);
  assert.match(scenes[3].user, /warmer/i);
  assert.ok(scenes.every(scene => !/\bDNS\b|\bAPI\b|\bMCP\b/.test(`${scene.user} ${scene.result}`)));
  assert.equal(getAgentDemoFrame('mail', -1), DEMO_SCENES.mail[0]);
  assert.equal(getAgentDemoFrame('mail', 99999), DEMO_SCENES.mail.at(-1));
});
