import Image from 'next/image';
import { Inter } from 'next/font/google';
import MailFirstFooter from '@/components/home/MailFirstFooter';
import MailFirstHeader from '@/components/home/MailFirstHeader';
import AgentApiSection from '@/components/PageSections/AgentApiSection';
import AiInboxAgentsSection from '@/components/PageSections/AiInboxAgentsSection';
import MobileAppsSection from '@/components/PageSections/MobileAppsSection';
import VeniaCollaborationSection from '@/components/PageSections/VeniaCollaborationSection';
import { getContactMailtoHref } from '@/config/contact';
import { businessSignupUrl } from '@/config/pricing.mjs';
import { trackCTAClick } from '@/utils/trackConversion';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const annualBusinessInquiryUrl = getContactMailtoHref({
  subject: 'Annual Business plan and included .com domain',
});

const deliveryOutcomes = [
  ['Inbox placement strategy', 'Improve your chances of reaching customer inboxes with checks that detect common sending risks.', 'inbox'],
  ['See email opens', 'See how many times an email was opened, including repeat opens, when tracking is enabled.', 'opens', 'Privacy settings can hide or add opens, so counts are estimates.'],
  ['Get follow-up suggestions', 'Get a draft based on the original email, conversation, and open status. Review it before sending.', 'follow-up'],
];

const useCases = [
  ['Quotes', 'Send a quote, see whether it was opened, and decide when to follow up.'],
  ['Invoices', 'Send an invoice with a clear next step and prepare a reminder for the right moment.'],
  ['Customer questions', 'Reply to a customer question and get a suggested next message.'],
];

const suiteItems = [
  ['Calendar', '/product/calendar'],
  ['Meetings', '/product/meeting'],
  ['Campaigns', '/solutions/marketing'],
  ['Appointments', '/product/booking'],
  ['Email Automation', '/product/email-automation'],
];

const faqs = [
  {
    question: 'How does Venmail help delivery?',
    answer: 'Domain authentication, outgoing checks, and header analysis support responsible sending and diagnosis. Recipient systems and sender reputation still determine inbox placement.',
  },
  {
    question: 'What do I need to create an account?',
    answer: 'Enter your name, existing email address, and password.',
  },
  {
    question: 'Is a .com domain included?',
    answer: 'Annual Business includes one .com domain free for the first year.',
  },
  {
    question: 'When does service activate?',
    answer: 'Activation follows domain verification and payment.',
  },
  {
    question: 'Can I use Venmail with Gmail?',
    answer: 'Yes. Configure Gmail with your Venmail IMAP and SMTP credentials to send and receive through Gmail.',
  },
];

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4"><path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function SignalIcon({ type }) {
  if (type === 'inbox') {
    return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6"><path d="M4 6.5h16v11H4v-11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  if (type === 'opens') {
    return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6"><path d="M3.5 12s3.2-5 8.5-5 8.5 5 8.5 5-3.2 5-8.5 5-8.5-5-8.5-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6" /></svg>;
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6"><path d="M5 5.5h14v10H9l-4 3v-13Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M8.5 9h7M8.5 12h4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>;
}

export default function Home() {
  return (
    <div className={`${inter.className} bg-white text-[#202124]`}>
      <MailFirstHeader />
      <main id="main-content">
        <section className="px-4 pb-16 pt-16 sm:px-6 sm:pt-20 md:pb-24 md:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-[40px] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[50px] md:text-[60px]">
              <span className="block">Business email.</span>
              <span className="block text-orange-700">Built for the inbox.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-[1.65] text-[#5f6368]">Professional email at yourname@<wbr />yourbusinessdomain.com. Reach customer inboxes, see how many times an email was opened, and get a practical follow-up suggestion when the conversation needs one.</p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a href={businessSignupUrl("standard")} onClick={() => trackCTAClick('homepage_hero', 'mail_first', 'homepage_mail_first')} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-orange-700 px-6 text-base font-semibold text-white transition-colors hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">Create your account <ArrowIcon /></a>
              <a href="#pricing" className="inline-flex h-12 items-center justify-center rounded-lg border border-[#dadce0] bg-white px-6 text-base font-medium text-[#202124] transition-colors hover:bg-[#f8f9fa] focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">Compare plans</a>
            </div>
            <p className="mt-6 text-sm leading-6 text-[#5f6368]">From $0.20 per inbox/month. Standard costs $1/month total for 5 inboxes. Each additional inbox costs $1/month.</p>
            <p className="mx-auto max-w-2xl text-sm leading-6 text-[#5f6368]">No payment required to create an account. Mailbox activation requires a verified domain and a paid plan.</p>
          </div>

          <div className="mx-auto mt-14 max-w-[1040px] overflow-hidden rounded-xl border border-[#dadce0] md:mt-16">
            <a href="/email-dashboard-preview.png" className="group block focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-700">
              <Image src="/email-dashboard-preview.png" width={1802} height={905} priority sizes="(max-width: 1088px) calc(100vw - 32px), 1040px" alt="Venmail inbox" className="block h-auto w-full" />
              <span className="block border-t border-[#dadce0] px-4 py-3 text-sm font-semibold text-orange-800 underline decoration-orange-300 underline-offset-4 group-hover:text-orange-900">Open full-size Venmail inbox image.</span>
            </a>
          </div>
        </section>

        <section aria-labelledby="professional-email-title" className="border-t border-[#eadfd7] bg-[#fff8f2] px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="order-2 lg:order-1">
              <Image
                src="/professional-address-art.png"
                width={1536}
                height={1024}
                loading="lazy"
                sizes="(max-width: 1023px) calc(100vw - 32px), 600px"
                alt=""
                className="block h-auto w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold text-orange-800">Business plan</p>
              <h2 id="professional-email-title" className="mt-3 max-w-xl text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">Professional email for your business</h2>
              <p className="mt-7 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#202124] sm:text-3xl">
                <span className="block">yourname</span>
                <span className="block text-orange-700">@yourbusinessdomain.com</span>
              </p>
              <div className="mt-8 border-y border-[#e2cfc1] text-base font-medium text-[#202124]">
                <p className="py-4">Up to 100 email accounts included</p>
                <p className="border-t border-[#e2cfc1] py-4">200 GB pooled storage</p>
                <div className="border-t border-[#e2cfc1] py-4">
                  <p>Free .com domain</p>
                  <p className="mt-1 text-sm font-normal leading-6 text-[#5f6368]">Annual Business includes one .com domain free for the first year.</p>
                </div>
              </div>
              <a href={annualBusinessInquiryUrl} onClick={() => trackCTAClick('homepage_professional_email', 'annual_business', 'homepage_mail_first')} className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-orange-700 px-6 text-base font-semibold text-white transition-colors hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2 focus:ring-offset-[#fff8f2]">Ask about annual Business <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section id="delivery" className="scroll-mt-24 border-t border-[#dadce0] px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold text-orange-800">Outgoing email</p>
              <h2 className="mt-3 max-w-md text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">Inbox placement comes first</h2>
            </div>
            <div className="border-b border-[#dadce0]">
              {deliveryOutcomes.map(([title, text, icon, condition]) => (
                <article key={title} className="flex gap-5 border-t border-[#dadce0] py-7 sm:gap-6 sm:py-8">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-800"><SignalIcon type={icon} /></span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.01em]">{title}</h3>
                    <p className="mt-2 max-w-2xl text-base leading-7 text-[#5f6368]">{text}</p>
                    {condition && <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5f6368]">{condition}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#dadce0] px-4 py-14 sm:px-6 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.2] tracking-[-0.02em]">Quotes, invoices, and customer questions</h2>
            <div className="mt-9 grid border-y border-[#dadce0] md:grid-cols-3">
              {useCases.map(([title, text], index) => (
                <article key={title} className={`py-7 ${index ? 'border-t border-[#dadce0] md:border-l md:border-t-0 md:pl-8' : ''} ${index < useCases.length - 1 ? 'md:pr-8' : ''}`}>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-base leading-7 text-[#5f6368]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-24 border-t border-[#dadce0] px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">Plans that fit your team</h2>
            <p className="mt-5 max-w-2xl text-lg leading-[1.65] text-[#5f6368]">Standard uses a domain you already own. Annual Business includes one .com domain free for the first year.</p>

            <div className="mt-12 grid border-y border-[#dadce0] lg:grid-cols-3">
              <article className="flex flex-col py-8 lg:pr-8">
                <h3 className="text-xl font-semibold">Standard</h3>
                <p className="mt-6 text-4xl font-semibold tracking-[-0.025em]">$1<span className="ml-1 text-base font-normal text-[#5f6368]">/month total</span></p>
                <ul className="mt-7 space-y-3 text-base leading-7 text-[#5f6368]"><li>5 inboxes included — $0.20 per inbox</li><li>+$1/month per additional inbox</li><li>Shared storage included</li></ul>
                <a href={businessSignupUrl("standard")} onClick={() => trackCTAClick('homepage_pricing_standard', 'mail_first', 'homepage_mail_first')} className="mt-8 inline-flex h-12 items-center justify-center rounded-lg border border-[#202124] px-5 text-base font-semibold text-[#202124] transition-colors hover:bg-[#202124] hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">Choose Standard</a>
              </article>
              <article className="flex flex-col border-t border-[#dadce0] py-8 lg:border-l lg:border-t-0 lg:px-8">
                <h3 className="text-xl font-semibold">Business</h3>
                <p className="mt-6 text-4xl font-semibold tracking-[-0.025em]">$20<span className="ml-1 text-base font-normal text-[#5f6368]">/month</span></p>
                <ul className="mt-7 space-y-3 text-base leading-7 text-[#5f6368]"><li>Up to 100 email accounts included</li><li>200 GB pooled storage</li><li>Annual Business includes one .com domain free for the first year.</li><li>Storage upgrades available</li></ul>
                <a href={businessSignupUrl("business")} onClick={() => trackCTAClick('homepage_pricing_business', 'mail_first', 'homepage_mail_first')} className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-orange-700 px-5 text-base font-semibold text-white transition-colors hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">Choose monthly Business</a>
                <a href={annualBusinessInquiryUrl} onClick={() => trackCTAClick('homepage_pricing_annual_business', 'annual_business', 'homepage_mail_first')} className="mt-4 inline-flex min-h-11 items-center justify-center text-center text-sm font-semibold text-orange-800 underline decoration-orange-300 underline-offset-4 hover:text-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">Ask about annual Business</a>
              </article>
              <article className="flex flex-col border-t border-[#dadce0] py-8 lg:border-l lg:border-t-0 lg:pl-8">
                <h3 className="text-xl font-semibold">Enterprise</h3>
                <p className="mt-6 text-4xl font-semibold tracking-[-0.025em]">Quote</p>
                <ul className="mt-7 space-y-3 text-base leading-7 text-[#5f6368]"><li>White-label requirements</li><li>Migration and onboarding</li><li>Storage and security design</li></ul>
                <a href="/request-quote" className="mt-8 inline-flex h-12 items-center justify-center rounded-lg border border-[#202124] px-5 text-base font-semibold text-[#202124] transition-colors hover:bg-[#202124] hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">Request a quote</a>
              </article>
            </div>

            <details className="border-b border-[#dadce0] text-sm leading-6 text-[#5f6368]">
              <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-5 py-4 font-semibold text-[#202124] marker:content-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-700">Other payment methods <span aria-hidden="true" className="text-2xl font-normal text-[#5f6368]">+</span></summary>
              <div className="pb-6">
                <p>USDC/USDT payments are available through Venmail Billing. Contact us for the amount, supported network, and payment confirmation steps before sending funds.</p>
                <a href="/contact-us" className="mt-2 inline-block font-semibold text-[#202124] underline underline-offset-4">Arrange USDC or USDT payment</a>
              </div>
            </details>
          </div>
        </section>

        <section id="spam-control" className="scroll-mt-24 border-t border-[#dadce0] bg-[#f8f9fa] px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
            <article>
              <p className="text-sm font-semibold text-orange-800">Incoming email</p>
              <h2 className="mt-3 text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">Filter unwanted incoming mail</h2>
              <p className="mt-5 text-lg leading-[1.65] text-[#5f6368]">Incoming filtering keeps unwanted mail in check.</p>
            </article>
            <article className="border-t border-[#dadce0] pt-7 md:border-l md:border-t-0 md:pl-16 md:pt-0">
              <p className="text-sm font-semibold text-orange-800">Shared inbox and CRM integration</p>
              <h2 className="mt-3 text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">A dedicated support address for your CRM</h2>
              <p className="mt-5 text-lg leading-[1.65] text-[#5f6368]">Receive customer requests at mail@support.<wbr />yourdomain.com while your main business email stays unchanged.</p>
              <p className="mt-4 text-base leading-7 text-[#5f6368]">CRM routing requires a custom integration. Subdomain DNS setup required.</p>
              <a href="/request-quote" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-orange-800 underline decoration-orange-300 underline-offset-4 hover:text-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">Discuss CRM integration <ArrowIcon /></a>
            </article>
          </div>
        </section>

        <AgentApiSection />
        <AiInboxAgentsSection />
        <VeniaCollaborationSection />

        <section className="border-t border-[#dadce0] px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">Work beyond email</h2>
              <p className="mt-5 text-lg leading-[1.65] text-[#5f6368]">Calendar, Meetings, Campaigns, Appointments, Email Automation, and more.</p>
            </div>
            <div className="mt-10 grid border-y border-[#dadce0] sm:grid-cols-2 lg:grid-cols-5">
              {suiteItems.map(([label, href], index) => (
                <a key={href} href={href} className={`group flex min-h-20 items-center justify-between gap-3 py-5 text-base font-medium text-[#202124] ${index ? 'border-t border-[#dadce0] lg:border-l lg:border-t-0' : ''} ${index % 2 ? 'sm:border-l' : ''} ${index === 1 ? 'sm:border-t-0' : ''} sm:px-5 first:sm:pl-0 first:lg:pl-0`}>
                  <span>{label}</span><span className="shrink-0 text-orange-800 transition-transform group-hover:translate-x-1"><ArrowIcon /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <MobileAppsSection />

        <section className="border-t border-[#dadce0] px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">Account and delivery</h2>
            <div className="mt-10 border-y border-[#dadce0]">
              {faqs.map((item, index) => (
                <details key={item.question} className={index ? 'border-t border-[#dadce0]' : ''}>
                  <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 py-4 text-lg font-medium marker:content-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-700">{item.question}<span aria-hidden="true" className="text-2xl font-normal text-[#5f6368]">+</span></summary>
                  <p className="max-w-2xl pb-6 pr-10 text-base leading-7 text-[#5f6368]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#202124] px-4 py-16 text-center text-white sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">Business email. <span className="text-orange-400">Built for the inbox.</span></h2>
            <a href={businessSignupUrl("standard")} onClick={() => trackCTAClick('homepage_final', 'mail_first', 'homepage_mail_first')} className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-orange-700 px-6 text-base font-semibold text-white transition-colors hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#202124]">Create your account <ArrowIcon /></a>
          </div>
        </section>
      </main>
      <MailFirstFooter />
    </div>
  );
}
