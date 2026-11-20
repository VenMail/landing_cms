export const SIGNUP_CONNECTOR_URL = 'https://m.venmail.io/api/mcp/assistant-mail';
export const CHATGPT_ACTIONS_URL = 'https://m.venmail.io/agent-signup-actions.json';

export const SIGNUP_PROMPTS = {
  business: {
    label: 'Business email',
    prompt: `Help me start a Venmail business email trial. Ask for my name, email, domain and verification code; show me the terms. Help with Cloudflare or DNS and optional mail migration. Keep passwords out of chat. If signup isn't available, guide me through https://m.venmail.io/get-started.`,
  },
  personal: {
    label: 'Personal email',
    prompt: `Help me get a free venia.cloud email address with Venmail. Ask for my verification code and let me review the terms. If you can't complete signup, guide me through https://m.venmail.io/register?type=personal.`,
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
