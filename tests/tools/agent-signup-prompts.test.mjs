import test from 'node:test';
import assert from 'node:assert/strict';
import { CHATGPT_ACTIONS_URL, SIGNUP_CONNECTOR_URL, SIGNUP_PROMPTS, copySignupPrompt } from '../../src/components/agents/agentSignupPrompts.mjs';

test('business prompt supports connector and direct signup with verified next steps', () => {
  const prompt = SIGNUP_PROMPTS.business.prompt;
  for (const text of ['Venmail', 'https://m.venmail.io/get-started', 'verification code', 'terms']) assert.ok(prompt.includes(text), text);
  for (const text of ['name', 'email', 'domain', 'Cloudflare', 'migration', 'passwords']) assert.ok(prompt.includes(text), text);
  for (const text of ['browser', 'Otherwise', 'https://m.venmail.io/email-migrations/start', 'same owner email and domain', SIGNUP_CONNECTOR_URL, CHATGPT_ACTIONS_URL]) assert.ok(prompt.includes(text), text);
  assert.ok(prompt.length < 850);
  assert.doesNotMatch(prompt, /plugin|connector|connected/i);
  assert.equal(SIGNUP_CONNECTOR_URL, 'https://m.venmail.io/api/mcp/assistant-mail');
});

test('personal prompt includes email verification and owner completion', () => {
  const prompt = SIGNUP_PROMPTS.personal.prompt;
  for (const text of ['venia.cloud', 'verification code', 'terms', 'https://m.venmail.io/register?type=personal']) assert.ok(prompt.includes(text), text);
  for (const text of ['browser', 'Otherwise', SIGNUP_CONNECTOR_URL, CHATGPT_ACTIONS_URL]) assert.ok(prompt.includes(text), text);
  assert.ok(prompt.length < 700);
  assert.doesNotMatch(prompt, /plugin|connector|connected/i);
});

test('copy writes the exact prompt and reports clipboard failures', async () => {
  let copied = '';
  assert.equal(await copySignupPrompt({ writeText: async value => { copied = value; } }, SIGNUP_PROMPTS.business.prompt), true);
  assert.equal(copied, SIGNUP_PROMPTS.business.prompt);
  assert.equal(await copySignupPrompt(null, 'prompt'), false);
  assert.equal(await copySignupPrompt({ writeText: async () => { throw new Error('denied'); } }, 'prompt'), false);
});
