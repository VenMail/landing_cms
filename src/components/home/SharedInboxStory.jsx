import { ArrowUpRight, MessagesSquare, Send, UserRoundCheck } from 'lucide-react';
import { getContactMailtoHref } from '@/config/contact';
import InboxPreviewLightbox from './InboxPreviewLightbox';

const sharedInboxInquiry = getContactMailtoHref({ subject: 'Shared inbox access' });
const moments = [
  { label: 'Assign a teammate', Icon: UserRoundCheck },
  { label: 'Discuss with your team', Icon: MessagesSquare },
  { label: 'Reply to customers', Icon: Send },
];

export default function SharedInboxStory() {
  return (
    <section id="shared-inbox" aria-labelledby="shared-inbox-title" className="scroll-mt-24 border-t border-[#e6d8ce] bg-[#fff8f2] px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
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
        <InboxPreviewLightbox />
      </div>
    </section>
  );
}
