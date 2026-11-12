import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { test } from 'node:test';

test('Telegram simulation is explicitly identified and uses verified lookup response format', () => {
 const sample = readFileSync('src/components/agents/TelegramSimulation.jsx','utf8');
 const css = readFileSync('src/components/agents/TelegramSimulation.module.css','utf8');
 for (const text of ['Sample conversation · Simulation','How many unread emails do I have?','You have 2 unread messages, including mail from','Reply to my latest email saying Thanks for the update.','To: maya@example.test','Subject: Re: Project update']) assert.ok(sample.includes(text));
 assert.match(css, /prefers-reduced-motion:\s*reduce/);
 assert.match(readFileSync('src/components/PageSections/AiInboxAgentsSection.jsx','utf8'), /<TelegramSimulation \/>/);
 assert.match(readFileSync('src/pages/ai-inbox-agents.jsx','utf8'), /<TelegramSimulation \/>/);
});
