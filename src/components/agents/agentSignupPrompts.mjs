export const SIGNUP_CONNECTOR_URL = 'https://m.venmail.io/api/mcp/assistant-mail';
export const CHATGPT_ACTIONS_URL = 'https://m.venmail.io/agent-signup-actions.json';

export const SIGNUP_PROMPTS = {
  business: {
    label: 'Business email',
    prompt: `Help me start a Venmail business email trial. If the Venmail Signup connector is available, use it to begin. Ask for my email, name, business name and domain, then send a verification code and wait for me to provide it. Let me review the terms before accepting them. After signup, show me the DNS records and help me set them up with my registrar. Only report actions as complete when confirmed.\n\nIf the connector is unavailable, help me connect ${SIGNUP_CONNECTOR_URL} if my assistant supports custom MCP connectors. Otherwise, guide me through https://m.venmail.io/get-started.`,
  },
  personal: {
    label: 'Personal email',
    prompt: `Help me get a personal venia.cloud email address with Venmail. If the Venmail Signup connector is available, start Assistant Mail signup with my email, send a verification code and wait for me to provide it. Give me the secure link to choose my address and password and review the terms. Only report actions as complete when confirmed.\n\nIf the connector is unavailable, help me connect ${SIGNUP_CONNECTOR_URL} if my assistant supports custom MCP connectors. Otherwise, guide me through https://m.venmail.io/register?type=personal.`,
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
