import Image from 'next/image';
import { trackCTAClick } from '@/utils/trackConversion';

const AiInboxAgentsSection = () => (
  <section
    aria-labelledby="ai-inbox-agents-title"
    className="border-t border-[#dadce0] bg-[#f8f9fa] px-4 py-16 sm:px-6 md:py-24"
  >
    <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
      <div>
        <p className="text-sm font-semibold text-orange-800">AI inbox agents</p>
        <h2
          id="ai-inbox-agents-title"
          className="mt-3 text-4xl font-semibold leading-[1.15] tracking-[-0.025em]"
        >
          Customer conversations beyond email
        </h2>
        <p className="mt-5 text-lg leading-[1.65] text-[#5f6368]">
          Talk to your AI mail agent over Telegram or WhatsApp. Send instructions
          in natural language. Telegram is active; WhatsApp support is coming soon.
        </p>

        <dl className="mt-8 border-y border-[#dadce0] text-sm">
          <div className="flex items-center justify-between gap-6 py-4">
            <dt className="font-semibold text-[#202124]">Telegram</dt>
            <dd className="font-semibold text-emerald-700">Active</dd>
          </div>
          <div className="flex items-center justify-between gap-6 border-t border-[#dadce0] py-4">
            <dt className="font-semibold text-[#202124]">WhatsApp</dt>
            <dd className="font-semibold text-[#5f6368]">Coming soon</dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/ai-inbox-agents"
            onClick={() => trackCTAClick('homepage_ai_agents_details', 'ai_inbox_agents', 'homepage_mail_first')}
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-orange-700 px-6 text-base font-semibold text-white transition-colors hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2 focus:ring-offset-[#f8f9fa]"
          >
            Explore AI inbox agents
          </a>
          <a
            href="https://m.venmail.io/register"
            onClick={() => trackCTAClick('homepage_ai_agents_register', 'ai_inbox_agents', 'homepage_mail_first')}
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#202124] px-6 text-base font-semibold text-[#202124] transition-colors hover:bg-[#202124] hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2 focus:ring-offset-[#f8f9fa]"
          >
            Create your account
          </a>
        </div>
        <p className="mt-4 text-sm leading-6 text-[#5f6368]">
          Administrator access is required to manage agents.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#dadce0] bg-white">
        <Image
          src="/images/ai-inbox-agents-teaser.webp"
          width={1586}
          height={992}
          loading="lazy"
          sizes="(max-width: 1023px) calc(100vw - 32px), 650px"
          alt="AI assistant managing email and Telegram conversations"
          className="block h-auto w-full"
        />
      </div>
    </div>
  </section>
);

export default AiInboxAgentsSection;
