import Image from 'next/image';
import { Inter } from 'next/font/google';
import MailFirstFooter from '@/components/home/MailFirstFooter';
import MailFirstHeader from '@/components/home/MailFirstHeader';
import { trackCTAClick } from '@/utils/trackConversion';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const capabilities = [
  ['One inbox per agent', 'Give each AI agent a dedicated Venmail address for its own email conversations.'],
  ['Natural-language control', 'Send instructions and continue agent conversations over Telegram. WhatsApp support is coming soon.'],
  ['Repeatable work', 'Each agent supports up to 20 saved routines for recurring email tasks.'],
];

export default function AiInboxAgents() {
  return (
    <div className={`${inter.className} bg-white text-[#202124]`}>
      <MailFirstHeader />
      <main id="main-content">
        <section className="px-4 pb-16 pt-16 sm:px-6 sm:pt-20 md:pb-24 md:pt-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-sm font-semibold text-orange-800">AI inbox agents</p>
              <h1 className="mt-3 text-[40px] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[50px] md:text-[60px]">
                Dedicated inboxes for AI agents
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-[1.65] text-[#5f6368]">
                Give every agent its own Venmail inbox. Send natural-language instructions and continue conversations over Telegram, with WhatsApp coming soon.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://m.venmail.io/admin/agents"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCTAClick('ai_agents_page_admin', 'ai_inbox_agents', 'ai_inbox_agents_page')}
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-orange-700 px-6 text-base font-semibold text-white transition-colors hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2"
                >
                  Manage AI agents
                </a>
                <a
                  href="https://m.venmail.io/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCTAClick('ai_agents_page_register', 'ai_inbox_agents', 'ai_inbox_agents_page')}
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#202124] px-6 text-base font-semibold text-[#202124] transition-colors hover:bg-[#202124] hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2"
                >
                  Create your account
                </a>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#5f6368]">Administrator access is required to manage agents.</p>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#dadce0] bg-[#f8f9fa]">
              <Image
                src="/images/ai-inbox-agents-teaser.webp"
                width={1586}
                height={992}
                priority
                sizes="(max-width: 1023px) calc(100vw - 32px), 650px"
                alt=""
                className="block h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="agent-capabilities-title" className="border-t border-[#dadce0] bg-[#f8f9fa] px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-orange-800">Agent email</p>
              <h2 id="agent-capabilities-title" className="mt-3 text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">Email work shaped around each agent</h2>
            </div>
            <div className="mt-10 grid border-y border-[#dadce0] md:grid-cols-3">
              {capabilities.map(([title, text], index) => (
                <article key={title} className={`py-7 ${index ? 'border-t border-[#dadce0] md:border-l md:border-t-0 md:pl-8' : ''} ${index < capabilities.length - 1 ? 'md:pr-8' : ''}`}>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-base leading-7 text-[#5f6368]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="channel-status-title" className="border-t border-[#dadce0] px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <p className="text-sm font-semibold text-orange-800">Conversation channels</p>
              <h2 id="channel-status-title" className="mt-3 text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">Channel availability</h2>
            </div>
            <dl className="border-y border-[#dadce0]">
              <div className="flex items-center justify-between gap-6 py-5">
                <dt className="text-base font-semibold">Telegram</dt>
                <dd className="text-sm font-semibold text-emerald-700">Active</dd>
              </div>
              <div className="flex items-center justify-between gap-6 border-t border-[#dadce0] py-5">
                <dt className="text-base font-semibold">WhatsApp</dt>
                <dd className="text-sm font-semibold text-[#5f6368]">Coming soon</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
      <MailFirstFooter />
    </div>
  );
}
