import { useRef, useState } from 'react';
import { Check, Copy, Sparkles } from 'lucide-react';
import { CHATGPT_ACTIONS_URL, SIGNUP_CONNECTOR_URL, SIGNUP_PROMPTS, copySignupPrompt } from './agentSignupPrompts.mjs';

export default function AgentSignupLinks() {
  const [kind, setKind] = useState('business');
  const [status, setStatus] = useState('');
  const promptRef = useRef(null);
  const selection = SIGNUP_PROMPTS[kind];

  async function copy(text, label) {
    const copied = await copySignupPrompt(navigator.clipboard, text);
    setStatus(copied ? `${label} copied` : label === 'Prompt' ? 'Select and copy the text.' : 'Select and copy the URL below.');
    if (!copied && label === 'Prompt') {
      promptRef.current?.focus();
      promptRef.current?.select();
    }
  }

  return <section aria-label="AI signup prompts" className="mt-7 overflow-hidden rounded-2xl border border-[#e8d6c9] bg-white text-[#202124] shadow-[0_12px_32px_rgba(78,41,25,0.06)]">
    <div className="border-b border-[#f0e5dd] bg-[#fff8f3] px-4 py-4 sm:px-5">
      <div className="flex items-center gap-2 text-orange-800"><Sparkles aria-hidden="true" className="h-4 w-4" /><h3 className="text-sm font-semibold">Start with your AI</h3></div>
      <p className="mt-1 text-xs text-[#5f6368]">ChatGPT · Claude · DeepSeek · other assistants</p>
    </div>
    <div className="p-4 sm:p-5">
      <div className="flex flex-wrap gap-2" aria-label="Account type">
        {Object.entries(SIGNUP_PROMPTS).map(([id, prompt]) => <button key={id} type="button" aria-pressed={kind === id} onClick={() => { setKind(id); setStatus(''); }} className={`min-h-9 rounded-full border px-3.5 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 ${kind === id ? 'border-orange-700 bg-orange-700 text-white' : 'border-[#ded7d1] bg-white text-[#51453e] hover:bg-[#fff8f3]'}`}>{prompt.label}</button>)}
      </div>
      <label htmlFor={`signup-prompt-${kind}`} className="sr-only">{selection.label} signup prompt</label>
      <textarea key={kind} ref={promptRef} id={`signup-prompt-${kind}`} readOnly value={selection.prompt} rows={4} className="mt-3 block w-full resize-y rounded-xl border border-[#e8e1dc] bg-[#faf9f8] p-3 text-sm leading-6 text-[#3c4043] focus:border-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-200" />
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => copy(selection.prompt, 'Prompt')} className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#a93416] px-4 text-sm font-semibold text-white hover:bg-[#86290f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">{status === 'Prompt copied' ? <Check aria-hidden="true" className="h-4 w-4" /> : <Copy aria-hidden="true" className="h-4 w-4" />}{status === 'Prompt copied' ? 'Copied' : 'Copy prompt'}</button>
        <span role="status" className="text-xs text-[#5f6368]">{status}</span>
      </div>
      <details className="mt-3 text-xs text-[#5f6368]">
        <summary className="cursor-pointer font-semibold text-orange-800">Connector setup</summary>
        <p className="mt-2 leading-5">Claude: add the Venmail Signup URL as a custom connector. ChatGPT: add the URL as a custom app where supported, or import the actions schema into a custom GPT.</p>
        <p className="mt-2 break-all leading-5"><span className="font-semibold">Connector: </span>{SIGNUP_CONNECTOR_URL}</p>
        <p className="mt-1 break-all leading-5"><span className="font-semibold">Actions schema: </span>{CHATGPT_ACTIONS_URL}</p>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
          <button type="button" onClick={() => copy(SIGNUP_CONNECTOR_URL, 'Connector URL')} className="font-semibold text-orange-800 underline underline-offset-4">Copy connector URL</button>
          <button type="button" onClick={() => copy(CHATGPT_ACTIONS_URL, 'Actions schema')} className="font-semibold text-orange-800 underline underline-offset-4">Copy actions schema</button>
        </div>
      </details>
    </div>
  </section>;
}
