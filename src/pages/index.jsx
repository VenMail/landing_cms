import Image from 'next/image';
import { Inter } from 'next/font/google';
import MailFirstFooter from '@/components/home/MailFirstFooter';
import MailFirstHeader from '@/components/home/MailFirstHeader';
import { businessSignupUrl } from '@/config/pricing.mjs';
import { trackCTAClick } from '@/utils/trackConversion';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const apiRequest = `POST https://m.venmail.io/api/v1/agent/messages
Authorization: Bearer <token with mail:send scope>
Accept: application/json
Content-Type: application/json

{
  "to": "maya@acme.example",
  "subject": "Pricing for 200 units",
  "body": "Pricing and delivery timing will follow shortly."
}`;

const apiResponse = `{
  "success": true,
  "status": "sent",
  "held_for_review": false
}`;

const faqs = [
  {
    question: 'What do I need to create an account?',
    answer: 'Enter your name, existing email address, and password. A domain is required before activation.',
  },
  {
    question: 'When does service activate?',
    answer: 'Activation follows domain ownership verification and payment.',
  },
  {
    question: 'Do you guarantee inbox placement?',
    answer: 'No. Inbox placement depends on recipient systems, sender practices, authentication, content, and reputation. Venmail provides diagnostics for SPF, DKIM, DMARC, and email headers.',
  },
];

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4"><path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Home() {
  return (
    <div className={`${inter.className} bg-white text-[#202124]`}>
      <MailFirstHeader />
      <main id="main-content">
        <section className="px-4 pb-16 pt-16 sm:px-6 md:pb-24 md:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-[42px] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[50px] md:text-[60px]">Business email on your domain</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.65] text-[#5f6368]">Professional business email for clearer customer conversations and smoother daily operations.</p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a href={businessSignupUrl("standard")} onClick={() => trackCTAClick('homepage_hero', 'mail_first', 'homepage_mail_first')} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-orange-700 px-6 text-base font-semibold text-white transition-colors hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">Create your account <ArrowIcon /></a>
              <a href="#pricing" className="inline-flex h-12 items-center justify-center rounded-lg border border-[#dadce0] bg-white px-6 text-base font-medium text-[#202124] transition-colors hover:bg-[#f8f9fa] focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">Compare plans</a>
            </div>
            <p className="mt-6 text-sm leading-6 text-[#5f6368]">Standard $1/month · 5 accounts included</p>
            <p className="text-sm leading-6 text-[#5f6368]">Existing domain required for mailbox activation.</p>
          </div>

          <div className="mx-auto mt-14 max-w-[1040px] overflow-hidden rounded-xl border border-[#dadce0] md:mt-16">
            <Image src="/email-dashboard-preview.png" width={1802} height={905} priority sizes="(max-width: 1088px) calc(100vw - 32px), 1040px" alt="Venmail inbox" className="block h-auto w-full" />
          </div>
        </section>

        <section id="business-mail" className="scroll-mt-24 border-t border-[#dadce0] px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">Business mail</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
              <article className="border-t border-[#dadce0] pt-7">
                <h3 className="text-2xl font-semibold tracking-[-0.015em]">Send from your domain</h3>
                <p className="mt-4 max-w-lg text-lg leading-[1.65] text-[#5f6368]">Branded addresses give customer conversations and daily operations a credible sender.</p>
              </article>
              <article className="border-t border-[#dadce0] pt-7">
                <h3 className="text-2xl font-semibold tracking-[-0.015em]">Connect mail to your workflow</h3>
                <p className="mt-4 max-w-lg text-lg leading-[1.65] text-[#5f6368]">Applications, helpdesks, and CRM follow-up stay aligned with customer conversations.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="deliverability" className="scroll-mt-24 border-t border-[#dadce0] px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div>
              <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">Understand delivery issues</h2>
              <p className="mt-5 max-w-xl text-lg leading-[1.65] text-[#5f6368]">Authentication and email-header analysis clarify what happened when a message does not arrive as expected.</p>
            </div>
            <div className="border-t border-[#dadce0] pt-7 md:mt-1">
              <h3 className="text-xl font-semibold">Delivery signals</h3>
              <p className="mt-4 text-lg leading-[1.65] text-[#5f6368]">Review authentication results and message headers when delivery needs investigation.</p>
              <a href="/tools/email-header-analyzer" className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-orange-700 px-6 text-base font-semibold text-white transition-colors hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">Analyze email headers <ArrowIcon /></a>
              <p className="mt-4 text-sm leading-6 text-[#5f6368]">Authentication checks identify configuration issues; they do not guarantee inbox placement.</p>
            </div>
          </div>
        </section>

        <section id="developers" className="scroll-mt-24 border-t border-[#dadce0] px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
            <div>
              <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">Programmatic mail</h2>
              <p className="mt-5 text-lg leading-[1.65] text-[#5f6368]">Send authenticated messages through SMTP or API requests.</p>
              <p className="mt-5 text-sm leading-6 text-[#5f6368]">A successful response means Venmail accepted the message for sending. It does not confirm inbox placement.</p>
              <a href="https://m.venmail.io/docs/agents" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-orange-800 underline decoration-orange-300 underline-offset-4 hover:text-orange-900">API documentation · sign-in required <ArrowIcon /></a>
            </div>
            <div className="overflow-hidden rounded-xl border border-[#dadce0] bg-[#f8f9fa]">
              <div className="flex items-center justify-between border-b border-[#dadce0] px-5 py-3 text-sm font-medium text-[#5f6368]"><span>Request</span><span>mail:send</span></div>
              <pre className="overflow-x-auto p-5 text-[13px] leading-6 text-[#202124] sm:p-6 sm:text-sm"><code>{apiRequest}</code></pre>
              <div className="border-t border-[#dadce0] bg-white">
                <p className="px-5 pt-4 text-sm font-medium text-[#5f6368] sm:px-6">200 response excerpt</p>
                <pre className="overflow-x-auto p-5 pt-3 text-[13px] leading-6 text-[#202124] sm:px-6 sm:pb-6 sm:text-sm"><code>{apiResponse}</code></pre>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-24 border-t border-[#dadce0] px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">Plans that fit your team</h2>
            <p className="mt-5 max-w-2xl text-lg leading-[1.65] text-[#5f6368]">Bring an existing domain; mailbox activation follows domain ownership and payment confirmation.</p>

            <div className="mt-12 grid border-y border-[#dadce0] lg:grid-cols-3">
              <article className="flex flex-col py-8 lg:pr-8">
                <h3 className="text-xl font-semibold">Standard</h3>
                <p className="mt-6 text-4xl font-semibold tracking-[-0.025em]">$1<span className="ml-1 text-base font-normal text-[#5f6368]">/month</span></p>
                <ul className="mt-7 space-y-3 text-base leading-7 text-[#5f6368]"><li>5 email accounts included</li><li>$1 each additional</li><li>Shared storage included</li></ul>
                <a href={businessSignupUrl("standard")} onClick={() => trackCTAClick('homepage_pricing_standard', 'mail_first', 'homepage_mail_first')} className="mt-8 inline-flex h-12 items-center justify-center rounded-lg border border-[#202124] px-5 text-base font-semibold text-[#202124] transition-colors hover:bg-[#202124] hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">Choose Standard</a>
              </article>
              <article className="flex flex-col border-t border-[#dadce0] py-8 lg:border-l lg:border-t-0 lg:px-8">
                <h3 className="text-xl font-semibold">Business</h3>
                <p className="mt-6 text-4xl font-semibold tracking-[-0.025em]">$20<span className="ml-1 text-base font-normal text-[#5f6368]">/month</span></p>
                <ul className="mt-7 space-y-3 text-base leading-7 text-[#5f6368]"><li>Unlimited email accounts</li><li>200 GB pooled storage</li><li>Storage upgrades available</li></ul>
                <a href={businessSignupUrl("business")} onClick={() => trackCTAClick('homepage_pricing_business', 'mail_first', 'homepage_mail_first')} className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-orange-700 px-5 text-base font-semibold text-white transition-colors hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">Choose Business</a>
              </article>
              <article className="flex flex-col border-t border-[#dadce0] py-8 lg:border-l lg:border-t-0 lg:pl-8">
                <h3 className="text-xl font-semibold">Enterprise</h3>
                <p className="mt-6 text-4xl font-semibold tracking-[-0.025em]">Quote</p>
                <ul className="mt-7 space-y-3 text-base leading-7 text-[#5f6368]"><li>White-label requirements</li><li>Migration and onboarding</li><li>Storage and security design</li></ul>
                <a href="/request-quote" className="mt-8 inline-flex h-12 items-center justify-center rounded-lg border border-[#202124] px-5 text-base font-semibold text-[#202124] transition-colors hover:bg-[#202124] hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">Request a quote</a>
              </article>
            </div>

            <div className="border-b border-[#dadce0] py-6 text-sm leading-6 text-[#5f6368]">
              <p>USDC/USDT payments are available through Venmail Billing. Contact us for the amount, supported network, and payment confirmation steps before sending funds.</p>
              <a href="/contact-us" className="mt-2 inline-block font-semibold text-[#202124] underline underline-offset-4">Arrange USDC or USDT payment</a>
            </div>
          </div>
        </section>

        <section className="border-t border-[#dadce0] px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">Tools for daily operations</h2>
            <div className="mt-10 grid border-y border-[#dadce0] sm:grid-cols-2">
              <a href="/product/contacts" className="group flex min-h-20 items-center justify-between py-5 text-lg font-medium text-[#202124] sm:pr-8">Contacts <span className="text-orange-800 transition-transform group-hover:translate-x-1"><ArrowIcon /></span></a>
              <a href="/product/calendar" className="group flex min-h-20 items-center justify-between border-t border-[#dadce0] py-5 text-lg font-medium text-[#202124] sm:border-l sm:border-t-0 sm:pl-8">Calendar <span className="text-orange-800 transition-transform group-hover:translate-x-1"><ArrowIcon /></span></a>
            </div>
          </div>
        </section>

        <section className="border-t border-[#dadce0] px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">Account and activation</h2>
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

        <section className="border-t border-[#dadce0] px-4 py-16 text-center sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">Put business mail on your domain</h2>
            <a href={businessSignupUrl("standard")} onClick={() => trackCTAClick('homepage_final', 'mail_first', 'homepage_mail_first')} className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-orange-700 px-6 text-base font-semibold text-white transition-colors hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">Create your account <ArrowIcon /></a>
          </div>
        </section>
      </main>
      <MailFirstFooter />
    </div>
  );
}
