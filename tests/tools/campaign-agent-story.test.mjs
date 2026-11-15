import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import test from 'node:test';

test('campaign story shows review, approval, queue and open-based follow-up in sequence', async () => {
  const source = await readFile(new URL('../../src/components/agents/CampaignAgentStory.jsx', import.meta.url), 'utf8');
  const timeline = await readFile(new URL('../../src/components/agents/agentDemoTimeline.mjs', import.meta.url), 'utf8');
  for (const phrase of ['Toronto retailers', 'Ready for review', 'Yes, send it', 'Queued', '2 recorded opens', 'do not prove']) assert.ok((source + timeline).includes(phrase), phrase);
  assert.match(source, /prefers-reduced-motion/);
  assert.match(source, /@remotion\/player/);
  assert.match(source, /Pause|Play/);
});

test('campaign story is offered only for the supported assistant', async () => {
  const source = await readFile(new URL('../../src/components/agents/AgentConnectionStory.jsx', import.meta.url), 'utf8');
  assert.match(source, /CampaignAgentStory/);
  assert.match(source, /claudeOnly:\s*true/);
});
