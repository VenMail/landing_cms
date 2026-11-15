import { useEffect, useRef, useState } from 'react';
import { Check, Pause, Play, RotateCcw } from 'lucide-react';

const steps = [
  {
    request: 'Draft an introduction for my Toronto retailers contact group. Invite them to a short call.',
    response: 'I found 100 contacts in Toronto retailers. Here’s a draft for your review:',
    subject: 'A new partnership for your shop',
    message: 'Hi there, I’d love to learn more about your shop and explore how we could work together. Would you be open to a short call next week?',
    status: 'Ready for review · 100 contacts',
  },
  {
    request: 'Yes, send it. Draft a follow-up for anyone with two opens.',
    response: 'The campaign is queued. Should I send this follow-up after 2 recorded opens, for the next 30 days?',
    subject: 'A quick conversation?',
    message: 'Hi there, would a 15-minute call next week be useful? I’d be glad to share a few ideas for your shop.',
    status: 'Queued · Follow-up ready for review',
  },
  {
    request: 'Yes, use that follow-up for 30 days.',
    response: 'The follow-up rule is active for eligible contacts with at least 2 recorded opens.',
    subject: 'A quick conversation?',
    message: 'Hi there, would a 15-minute call next week be useful? I’d be glad to share a few ideas for your shop.',
    status: 'Follow-up rule active · 30 days',
  },
  {
    request: 'How is the campaign doing?',
    response: 'Here’s the latest activity for your campaign:',
    subject: 'Toronto retailers',
    message: '100 sent · 24 with recorded opens · 6 reached the follow-up threshold',
    status: 'Follow-up rule active',
  },
];

export default function CampaignAgentStory() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!motion.matches) setPlaying(true);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    if (container.current) observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !visible) return undefined;
    const timer = window.setTimeout(() => {
      if (step === steps.length - 1) setPlaying(false);
      else setStep(step + 1);
    }, 7000);
    return () => window.clearTimeout(timer);
  }, [playing, step, visible]);

  const current = steps[step];
  return (
    <div ref={container} className="bg-[#fbfbfc] px-4 py-5 sm:px-6 sm:py-6">
      <div className="mb-4 flex items-center justify-between gap-3 text-xs font-medium text-[#596273]">
        <div className="flex items-center gap-1" aria-label="Campaign stages">{steps.map((_, index) => <button key={index} type="button" onClick={() => { setStep(index); setPlaying(false); }} aria-label={`Campaign stage ${index + 1}`} aria-pressed={step === index} className={`h-7 min-w-7 rounded-md px-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-700 ${step === index ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>{index + 1}</button>)}</div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => { setStep(0); setPlaying(true); }} className="rounded-md p-1.5 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-700" aria-label="Replay campaign"><RotateCcw className="h-4 w-4" /></button>
          <button type="button" onClick={() => setPlaying(!playing)} className="flex items-center gap-1 rounded-md px-2 py-1.5 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-700">{playing ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}{playing ? 'Pause' : 'Play'}</button>
        </div>
      </div>
      <div className="ml-auto max-w-[92%] rounded-2xl rounded-br-sm bg-[#eeeef0] px-4 py-3 text-sm leading-6 text-[#272a32]">{current.request}</div>
      <div className="mt-5 flex gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#db7c5b] text-white">✳</span>
        <div className="min-w-0 flex-1 text-sm leading-6 text-[#292d36]">
          <p>{current.response}</p>
          <div className="mt-3 rounded-xl border border-[#e4e6e9] bg-white p-4 shadow-sm">
            <div className="text-xs font-medium uppercase tracking-wide text-[#687181]">{step === 3 ? 'Campaign activity' : 'Subject'}</div>
            <div className="mt-1 font-semibold text-[#252932]">{current.subject}</div>
            <p className="mt-3 text-[#525b6a]">{current.message}</p>
          </div>
          <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-[#396c4b]"><Check className="h-3.5 w-3.5" />{current.status}</p>
          {step > 0 && <p className="mt-2 text-xs leading-5 text-[#687181]">Recorded opens may include automated activity and do not prove a message was read.</p>}
        </div>
      </div>
    </div>
  );
}
