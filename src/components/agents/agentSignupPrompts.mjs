export const SIGNUP_CONNECTOR_URL = 'https://m.venmail.io/api/mcp/assistant-mail';
export const CHATGPT_ACTIONS_URL = 'https://m.venmail.io/agent-signup-actions.json';

export const SIGNUP_PROMPTS = {
  business: {
    label: 'Business email',
    prompt: `Help me set up business email with Venmail and start a trial. Ask for my details and verification code, and let me review the terms. Help me get my email working. If you can't complete signup, guide me through https://m.venmail.io/get-started.`,
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
