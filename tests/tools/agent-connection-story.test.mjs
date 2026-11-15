import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import test from 'node:test';

test('agent story covers mailbox, prospects and campaign drafts without claiming ChatGPT support', async () => {
  const story = await readFile(new URL('../../src/components/agents/AgentConnectionStory.jsx', import.meta.url), 'utf8');
  const section = await readFile(new URL('../../src/components/PageSections/AiInboxAgentsSection.jsx', import.meta.url), 'utf8');
  for (const text of ['Claude', 'ChatGPT', 'Follow-ups', 'Prospects', 'Campaign draft']) assert.ok(story.includes(text));
  assert.match(section, /AgentConnectionStory/);
  assert.match(section, /AgentSignupLinks/);
});

test('agent story includes email-first signup and owner-authorized setup', async () => {
  const story = await readFile(new URL('../../src/components/agents/AgentConnectionStory.jsx', import.meta.url), 'utf8');
  assert.match(story, /Sign up/);
  assert.match(story, /Set up email/);
  assert.match(story, /Add a teammate/);
  assert.match(story, /Waiting for your code/);
});

test('starts with a simple customer follow-up and keeps other examples available', async () => {
  const story = await readFile(new URL('../../src/components/agents/AgentConnectionStory.jsx', import.meta.url), 'utf8');
  assert.match(story, /useState\(0\)/);
  assert.match(story, /More examples/);
});
