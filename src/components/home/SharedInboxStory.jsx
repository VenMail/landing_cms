import { ArrowUpRight, MessagesSquare, Send, UserRoundCheck } from 'lucide-react';
import { getContactMailtoHref } from '@/config/contact';

const sharedInboxInquiry = getContactMailtoHref({ subject: 'Shared inbox access' });

const moments = [
  { number: '01', label: 'Assign a teammate', Icon: UserRoundCheck },
  { number: '02', label: 'Discuss with your team', Icon: MessagesSquare },
  { number: '03', label: 'Reply to customers', Icon: Send },
];

export default function SharedInboxStory() {
  return (
    <section id="shared-inbox" aria-labelledby="shared-inbox-title" className="scroll-mt-24 border-t border-[#e6d8ce] bg-[#fff8f2] px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <p className="text-sm font-semibold text-orange-800">Shared inbox</p>
          <h2 id="shared-inbox-title" className="mt-4 max-w-lg text-4xl font-semibold leading-[1.13] tracking-[-0.025em] sm:text-5xl">Customer conversations, shared with your team.</h2>
          <a href={sharedInboxInquiry} className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg border border-[#c94716] bg-white px-5 text-sm font-semibold text-orange-800 transition-colors hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2 focus:ring-offset-[#fff8f2]">
            Ask about shared inbox access <ArrowUpRight aria-hidden="true" size={17} />
          </a>
          <p className="mt-3 text-sm leading-6 text-[#5f6368]">Shared inbox access may be limited.</p>
        </div>
        <div className="rounded-2xl bg-[#292522] px-5 py-7 text-[#fffaf6] sm:px-8 sm:py-9">
          <p className="text-sm font-semibold text-[#f5b894]">Team conversations</p>
          <p className="mt-3 max-w-md text-2xl font-medium leading-snug tracking-[-0.02em] sm:text-3xl">From question to reply, together.</p>
          <ol className="mt-8 border-t border-white/20">
            {moments.map(({ number, label, Icon }) => (
              <li key={number} className="flex min-h-20 items-center gap-4 border-b border-white/20 py-4 sm:gap-5">
                <span className="w-6 shrink-0 text-xs font-medium text-[#f5b894]">{number}</span>
                <Icon aria-hidden="true" size={20} className="shrink-0 text-[#f5b894]" />
                <span className="text-base font-medium sm:text-lg">{label}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
