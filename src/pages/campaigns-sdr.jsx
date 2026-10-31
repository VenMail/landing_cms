import Head from 'next/head';
import Image from 'next/image';
import {
  ArrowRightIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import MailFirstHeader from '@/components/home/MailFirstHeader';
import MailFirstFooter from '@/components/home/MailFirstFooter';
import { businessSignupUrl } from '@/config/pricing.mjs';
import { getContactMailtoHref } from '@/config/contact';
import { trackCTAClick } from '@/utils/trackConversion';

const capabilities = [
  [MagnifyingGlassIcon, 'Prospect research', 'Review company evidence and contact relevance before outreach.'],
  [PaperAirplaneIcon, 'Campaign preparation', 'Prepare sender identity, message purpose, and follow-up timing.'],
  [ChatBubbleLeftRightIcon, 'Response handling', 'Assign reply ownership and record stop requests.'],
  [ChartBarIcon, 'Campaign review', 'Review campaign and reply signals before the next decision.'],
];

const workflow = [
  ['01', 'Define the audience', 'Set source criteria, business fit, and message purpose.'],
  ['02', 'Review prospect evidence', 'Select contacts only after reviewing the available evidence.'],
  ['03', 'Prepare outreach', 'Send a relevant message with an accountable sender and follow-up timing.'],
  ['04', 'Review the response', 'Handle replies, opt-outs, and campaign results before further contact.'],
];

const illustrations = [
  ['/images/campaigns-sdr-prospect-research.webp', 'Abstract prospect research materials on a desk', 'Research before contact', 'Source evidence supports more relevant outreach decisions.'],
  ['/images/campaigns-sdr-campaign-sequence.webp', 'Abstract tailored campaign sequence', 'Plan the message sequence', 'A clear purpose and timing keep follow-up accountable.'],
  ['/images/campaigns-sdr-response-review.webp', 'Abstract reply and opt-out review materials', 'Own the response', 'Replies and opt-outs shape the next action.'],
];

export default function CampaignsSdrPage() {
  const signupHref = businessSignupUrl('business');
  const contactHref = getContactMailtoHref({ subject: 'Campaigns and SDR inquiry' });

  return (
    <div className="bg-[#fffdf9] text-[#202124]">
      <Head>
        <title>Campaigns and SDR | Venmail</title>
        <meta name="description" content="Prospect research, campaign preparation, accountable follow-up, and response review for business outreach." />
        <link rel="canonical" href="https://venmail.io/campaigns-sdr" />
      </Head>
      <MailFirstHeader />
      <main id="main-content">
        <section className="overflow-hidden border-b border-[#eadfd2] bg-[radial-gradient(circle_at_top_left,_#ffe1c4,_transparent_38%),linear-gradient(135deg,_#fffdf9,_#f2f8f6)] px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-orange-800">Campaigns and SDR</p>
              <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl">Prospect research and accountable outreach</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6368]">Review sources, prepare relevant campaign messages, schedule follow-up, and handle the resulting conversations with a clear owner.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={signupHref} onClick={() => trackCTAClick('campaigns_sdr_signup', 'campaigns_sdr', 'campaigns_sdr_page')} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-orange-700 px-6 text-base font-semibold text-white transition-colors hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">
                  Start with Business <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a href={contactHref} className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#202124] px-6 text-base font-semibold text-[#202124] transition-colors hover:bg-[#202124] hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">
                  Discuss your outreach
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#e2d6c9] bg-white p-3 shadow-[0_24px_70px_rgba(73,49,29,0.12)]">
              <Image src="/images/campaigns-sdr-prospect-research.webp" alt="Abstract prospect research materials on a desk" width={1536} height={1024} priority sizes="(max-width: 1023px) calc(100vw - 56px), 520px" className="h-auto w-full rounded-xl" />
            </div>
          </div>
        </section>

        <section aria-labelledby="campaigns-sdr-capabilities" className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-orange-800">Business outreach</p>
              <h2 id="campaigns-sdr-capabilities" className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.025em]">Work from evidence to response</h2>
            </div>
            <div className="mt-10 grid border-y border-[#dadce0] sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map(([Icon, title, text], index) => (
                <article key={title} className={`py-7 ${index ? 'border-t border-[#dadce0] sm:pl-8 sm:odd:border-l sm:odd:border-t-0 lg:border-l lg:border-t-0' : ''} ${index % 2 === 0 ? 'sm:pr-8' : ''} ${index < 2 ? 'lg:pr-8' : ''}`}>
                  <Icon className="h-7 w-7 text-orange-700" />
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-base leading-7 text-[#5f6368]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="campaigns-sdr-workflow" className="border-y border-[#eadfd2] bg-[#f6faf8] px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-orange-800">Outreach workflow</p>
              <h2 id="campaigns-sdr-workflow" className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.025em]">A disciplined campaign sequence</h2>
            </div>
            <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[#d6e3de] bg-[#d6e3de] md:grid-cols-4">
              {workflow.map(([number, title, text]) => (
                <li key={number} className="bg-white p-6">
                  <p className="text-sm font-semibold text-orange-800">{number}</p>
                  <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#5f6368]">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-label="Campaigns and SDR illustrations" className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {illustrations.map(([src, alt, title, text]) => (
              <article key={src} className="overflow-hidden rounded-2xl border border-[#e2d6c9] bg-white">
                <Image src={src} alt={alt} width={1536} height={1024} sizes="(max-width: 767px) calc(100vw - 48px), 32vw" className="h-auto w-full" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <p className="mt-2 text-base leading-7 text-[#5f6368]">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#eadfd2] bg-[#202124] px-4 py-16 text-white sm:px-6 md:py-20">
          <div className="mx-auto max-w-4xl">
            <CheckCircleIcon className="h-8 w-8 text-orange-300" />
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.025em]">Outreach conditions</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/75">Recipient consent, applicable law, and opt-out requests govern outreach. Review sources and message relevance before sending.</p>
            <a href={contactHref} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 text-base font-semibold text-[#202124] transition-colors hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#202124]">Discuss your outreach</a>
          </div>
        </section>
      </main>
      <MailFirstFooter />
    </div>
  );
}
