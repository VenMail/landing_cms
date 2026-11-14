import { useState } from 'react';

export default function AgentSignupLinks() {
  const [status, setStatus] = useState('');
  async function copy(url, label) {
    try {
      await navigator.clipboard.writeText(url);
      setStatus(`${label} copied`);
    } catch {
      setStatus('Copy failed');
    }
  }
  return <details className="mt-5 text-sm">
    <summary className="cursor-pointer font-semibold text-orange-800">Sign up with AI</summary>
    <p className="mt-3 leading-6 text-[#5f6368]">ChatGPT: custom GPT → Actions → Import URL → No authentication.</p>
    <p className="leading-6 text-[#5f6368]">Claude: Customize → Connectors → Add custom connector.</p>
    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
    <button type="button" onClick={() => copy('https://m.venmail.io/agent-signup-actions.json', 'ChatGPT schema')} className="font-semibold text-orange-800 underline underline-offset-4 hover:text-orange-900">Copy ChatGPT sign-up schema</button>
    <button type="button" onClick={() => copy('https://m.venmail.io/api/mcp/assistant-mail', 'Claude URL')} className="font-semibold text-orange-800 underline underline-offset-4 hover:text-orange-900">Copy Claude sign-up URL</button>
    <span aria-live="polite" className="text-xs text-[#5f6368]">{status}</span>
    </div>
  </details>;
}
