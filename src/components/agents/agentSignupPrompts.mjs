export const SIGNUP_CONNECTOR_URL = 'https://m.venmail.io/api/mcp/assistant-mail';
export const CHATGPT_ACTIONS_URL = 'https://m.venmail.io/agent-signup-actions.json';

export const SIGNUP_PROMPTS = {
  business: {
    label: 'Business email',
    prompt: `Help me start a Venmail business email trial. Use the signup MCP at ${SIGNUP_CONNECTOR_URL} or the API schema at ${CHATGPT_ACTIONS_URL} if your tools support them. Otherwise use a browser for https://m.venmail.io/get-started; if that isn't possible, provide the link and guide me. Ask for my name, email and domain, help with the verification code and show me the terms. Help with Cloudflare or DNS and optional mail migration at https://m.venmail.io/email-migrations/start using the same owner email and domain. Keep passwords out of chat. Only confirm actions that succeeded.`,
  },
  personal: {
    label: 'Personal email',
    prompt: `Help me get a free venia.cloud email address with Venmail. Use the signup MCP at ${SIGNUP_CONNECTOR_URL} or the API schema at ${CHATGPT_ACTIONS_URL} if your tools support them. Otherwise use a browser for https://m.venmail.io/register?type=personal; if that isn't possible, provide the link and guide me. Help with the verification code and show me the terms. Keep passwords out of chat. Only confirm actions that succeeded.`,
  },
};

export async function copySignupPrompt(clipboard, text) {
  if (!clipboard?.writeText) return false;
  try {
    await clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
