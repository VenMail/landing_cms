import { useState } from 'react';
import { ArrowUpRight, Check, Mail, Sparkles, Users } from 'lucide-react';

const stories = [
  {
    tab: 'Follow-ups',
    prompt: 'Which partnership conversations need a follow-up?',
    intro: 'Two conversations are waiting for a reply.',
    rows: [['Maya Chen', 'Partnership proposal · 6 days ago'], ['Daniel Ortiz', 'Pricing discussion · 4 days ago']],
    outcome: 'Mail and conversation history',
    icon: Mail,
  },
  {
    tab: 'Prospects',
    prompt: 'Find independent retailers in Toronto and save the best contacts.',
    intro: 'Your prospect search is complete.',
    rows: [['Northline Market', 'Toronto · Independent retail'], ['Harbour Goods', 'Toronto · Home and lifestyle']],
    outcome: 'Contacts saved to Venmail',
    icon: Users,
  },
  {
    tab: 'Campaign draft',
    prompt: 'Draft an introduction campaign for independent retailers.',
    intro: 'Your campaign draft is ready for review.',
    rows: [['A thoughtful introduction', 'Subject: A new partnership for your shop'], ['Campaign', 'Draft · Recipients not set']],
    outcome: 'Campaign draft in Venmail',
    icon: Sparkles,
  },
];

export default function AgentConnectionStory() {
  const [selected, setSelected] = useState(0);
  const [provider, setProvider] = useState('Claude');
  const story = stories[selected];
  const Icon = story.icon;
  return (
    <div className="overflow-hidden rounded-2xl border border-[#d9dce2] bg-white shadow-xl shadow-slate-900/10">
      <div className="flex items-center justify-between border-b border-[#eceef1] px-5 py-4">
        <div className="flex items-center gap-2.5"><span className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold text-white ${provider === 'Claude' ? 'bg-[#db7c5b]' : 'bg-[#202124]'}`}>✳</span><span className="font-semibold text-[#202124]">{provider}</span></div>
        <span className="flex items-center gap-1.5 rounded-full bg-[#eaf7ef] px-2.5 py-1 text-xs font-semibold text-[#21663b]"><span className="h-1.5 w-1.5 rounded-full bg-[#318950]" />Venmail</span>
      </div>
      <div className="flex gap-2 px-4 pt-3" aria-label="AI assistant">
        {['Claude', 'ChatGPT'].map(name => <button key={name} type="button" onClick={() => { setProvider(name); setSelected(0); }} aria-pressed={provider === name} className={`rounded-md px-3 py-1.5 text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 ${provider === name ? 'bg-orange-50 text-orange-800' : 'text-[#687181] hover:bg-[#f2f3f5]'}`}>{name}</button>)}
      </div>
      <div className="flex flex-wrap gap-2 border-b border-[#eceef1] px-4 py-3" aria-label="Agent workflows">
        {stories.filter((_, index) => provider === 'Claude' || index < 2).map((item, index) => <button key={item.tab} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 ${selected === index ? 'bg-[#252733] text-white' : 'bg-[#f2f3f5] text-[#4b5563] hover:bg-[#e8e9ec]'}`}>{item.tab}</button>)}
      </div>
      <div className="space-y-5 bg-[#fbfbfc] p-5 sm:p-6">
        <div className="ml-auto max-w-[90%] rounded-2xl rounded-br-sm bg-[#eeeef0] px-4 py-3 text-sm leading-6 text-[#272a32]">{provider === 'ChatGPT' && selected === 1 ? 'Find independent retailers in Toronto.' : story.prompt}</div>
        <div className="flex gap-3"><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white ${provider === 'Claude' ? 'bg-[#db7c5b]' : 'bg-[#202124]'}`}>✳</span><div className="min-w-0 flex-1"><p className="text-sm leading-6 text-[#292d36]">{story.intro}</p><div className="mt-3 overflow-hidden rounded-xl border border-[#e4e6e9] bg-white">{story.rows.map(([title, detail]) => <div key={title} className="flex items-center gap-3 border-b border-[#eef0f2] px-3 py-3 last:border-0"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-700"><Icon className="h-4 w-4" /></span><span className="min-w-0 flex-1"><span className="block truncate text-sm font-semibold text-[#252932]">{title}</span><span className="block truncate text-xs text-[#687181]">{detail}</span></span><ArrowUpRight className="h-4 w-4 shrink-0 text-[#9aa0aa]" /></div>)}</div><p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-[#396c4b]"><Check className="h-3.5 w-3.5" />{provider === 'ChatGPT' && selected === 1 ? 'Prospect search in Venmail' : story.outcome}</p></div></div>
      </div>
    </div>
  );
}
