import { ArrowUpRight, MessagesSquare, Send, UserRoundCheck } from 'lucide-react';
import { getContactMailtoHref } from '@/config/contact';

const sharedInboxInquiry = getContactMailtoHref({ subject: 'Shared inbox access' });
const moments = [
  { label: 'Assign a teammate', Icon: UserRoundCheck },
  { label: 'Discuss with your team', Icon: MessagesSquare },
  { label: 'Reply to customers', Icon: Send },
];

export default function SharedInboxStory() {
  return (
    <section id="shared-inbox" aria-labelledby="shared-inbox-title" className="scroll-mt-24 border-t border-[#e6d8ce] bg-[#fff8f2] px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <p className="text-sm font-semibold text-orange-800">Shared inbox</p>
          <h2 id="shared-inbox-title" className="mt-4 max-w-lg text-4xl font-semibold leading-[1.13] tracking-[-0.025em] sm:text-5xl">Customer conversations, shared with your team.</h2>
          <ul className="mt-7 space-y-3 text-sm font-medium text-[#534b46]">
            {moments.map(({ label, Icon }) => <li key={label} className="flex items-center gap-3"><Icon aria-hidden="true" size={18} className="text-orange-800" />{label}</li>)}
          </ul>
          <a href={sharedInboxInquiry} className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg border border-[#c94716] bg-white px-5 text-sm font-semibold text-orange-800 transition-colors hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2 focus:ring-offset-[#fff8f2]">
            Ask about shared inbox access <ArrowUpRight aria-hidden="true" size={17} />
          </a>
          <p className="mt-3 text-sm leading-6 text-[#5f6368]">Shared inbox access may be limited.</p>
        </div>
        <div className="overflow-hidden rounded-[1.75rem] bg-[#252623] p-4 shadow-[0_22px_60px_-30px_rgba(42,30,22,0.7)] sm:p-7">
          <div className="flex items-center justify-between gap-3 px-1 pb-5 text-xs font-medium text-[#d8c9bd]">
            <span className="uppercase tracking-[0.15em]">Team conversations</span>
            <span>Example</span>
          </div>
          <div className="rounded-2xl bg-[#fffdfb] p-5 text-[#272421] shadow-lg sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#ede6df] pb-5">
              <div><p className="text-xs font-medium uppercase tracking-[0.12em] text-[#8b6b58]">Customer question</p><p className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">Delivery question</p></div>
              <span className="rounded-full bg-[#e9f2e9] px-3 py-1.5 text-xs font-semibold text-[#365940]">Open</span>
            </div>
            <p className="mt-5 text-sm leading-6 text-[#534b46]">Could you confirm delivery for Friday?</p>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-[#655d56]"><span>Assigned to</span><span className="inline-flex items-center gap-2 rounded-full bg-[#f5e5d6] px-3 py-1.5 font-semibold text-[#693a22]"><span aria-hidden="true" className="grid h-5 w-5 place-items-center rounded-full bg-[#d57748] text-[10px] text-white">M</span>Maya</span></div>
            <div className="mt-6 rounded-xl border border-[#f1dccb] bg-[#fff6ed] p-4"><p className="text-xs font-semibold text-[#985125]">Team discussion</p><p className="mt-2 text-sm leading-6 text-[#534b46]">I’ll check with the warehouse.</p></div>
            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#a34319]"><Send aria-hidden="true" size={16} /> Reply to customer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
