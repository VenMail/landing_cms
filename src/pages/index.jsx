import MailExample from '@/components/home/MailExample';
import MailFirstFooter from '@/components/home/MailFirstFooter';
import MailFirstHeader from '@/components/home/MailFirstHeader';
import { businessSignupUrl } from '@/config/pricing.mjs';
import { trackCTAClick } from '@/utils/trackConversion';

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

const workflows = [
  {
    number: '01',
    title: 'Business mail',
    text: 'Send and receive from your domain with shared ownership for customer conversations.',
  },
  {
    number: '02',
    title: 'Programmatic mail',
    text: 'Send authenticated messages through SMTP or API requests.',
  },
  {
    number: '03',
    title: 'Helpdesk and CRM follow-up',
    text: 'Route customer conversations to the team responsible for the next response.',
  },
];

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4"><path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Home() {
  return (
    <div className="bg-[#fffdf9] text-slate-950">
      <MailFirstHeader />
      <main>
        <section id="mail" className="relative overflow-hidden border-b border-slate-200">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(234,88,12,0.13),transparent_28%),radial-gradient(circle_at_88%_22%,rgba(13,72,82,0.12),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-orange-700">Business email for growing teams</p>
              <h1 className="mt-5 max-w-xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-[#102d35] sm:text-6xl lg:text-7xl">Send and receive from your business domain</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">Authentication guidance, delivery diagnostics, and shared ownership for customer conversations.</p>
              <p className="mt-7 text-sm font-bold text-slate-800">Standard $1/month · 5 accounts included</p>
              <p className="mt-2 text-sm text-slate-500">Existing domain required for mailbox activation.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={businessSignupUrl("standard")} onClick={() => trackCTAClick('homepage_hero', 'mail_first', 'homepage_mail_first')} className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-900/10 transition hover:-translate-y-0.5 hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2">Create your account <ArrowIcon /></a>
                <a href="#pricing" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:border-slate-500 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Compare plans</a>
              </div>
            </div>
            <div id="customer-conversations" className="scroll-mt-28">
              <MailExample />
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-200 lg:grid-cols-3">
              {workflows.map(workflow => (
                <article key={workflow.title} className="bg-white p-7 sm:p-9">
                  <span className="text-xs font-extrabold tracking-[0.2em] text-orange-700">{workflow.number}</span>
                  <h2 className="mt-8 text-2xl font-bold tracking-tight text-[#102d35]">{workflow.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{workflow.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#edf4f3] py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#2e6971]">Delivery diagnostics</p>
              <h2 className="mt-4 max-w-xl text-4xl font-bold tracking-[-0.035em] text-[#102d35] sm:text-5xl">Improve delivery with clear diagnostics</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Check SPF, DKIM, and DMARC configuration, then investigate message headers when delivery needs attention.</p>
              <a href="/tools/email-header-analyzer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#102d35] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#17414b] focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2">Analyze email headers <ArrowIcon /></a>
              <p className="mt-5 max-w-lg text-xs leading-5 text-slate-500">Authentication checks identify configuration issues; they do not guarantee inbox placement.</p>
            </div>
            <div className="rounded-[1.75rem] border border-[#c7dcd9] bg-white p-6 shadow-[0_20px_60px_-36px_rgba(13,72,82,0.5)] sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Domain authentication</p>
                  <p className="mt-2 font-bold text-slate-950">acme.example</p>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">Review needed</span>
              </div>
              <dl className="divide-y divide-slate-200">
                {[
                  ['SPF', 'Pass', 'text-emerald-700 bg-emerald-50'],
                  ['DKIM', 'Pass', 'text-emerald-700 bg-emerald-50'],
                  ['DMARC', 'Policy missing', 'text-amber-800 bg-amber-50'],
                ].map(([name, status, tone]) => (
                  <div key={name} className="flex items-center justify-between gap-4 py-5">
                    <dt className="font-bold text-slate-800">{name}</dt>
                    <dd className={`rounded-full px-3 py-1 text-xs font-bold ${tone}`}>{status}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="developers" className="scroll-mt-24 bg-[#0d252c] py-16 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-orange-300">Developers</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">Programmatic mail</h2>
              <p className="mt-6 text-lg leading-8 text-white/65">Send authenticated messages through SMTP or API requests.</p>
              <p className="mt-6 text-sm leading-6 text-white/55">A successful response means Venmail accepted the message for sending. It does not confirm inbox placement.</p>
              <a href="https://m.venmail.io/docs/agents" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-orange-300 underline decoration-orange-300/40 underline-offset-4 hover:text-orange-200">API documentation · sign-in required <ArrowIcon /></a>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#071a20] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-xs font-bold text-white/50"><span>Request</span><span>mail:send</span></div>
              <pre className="overflow-x-auto p-5 text-xs leading-6 text-[#d6e7e5] sm:p-7 sm:text-sm"><code>{apiRequest}</code></pre>
              <div className="border-t border-white/10 bg-black/15">
                <p className="px-5 pt-4 text-xs font-bold text-white/50 sm:px-7">200 response excerpt</p>
                <pre className="overflow-x-auto p-5 pt-3 text-xs leading-6 text-emerald-300 sm:px-7 sm:pb-7 sm:text-sm"><code>{apiResponse}</code></pre>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-24 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-orange-700">Pricing</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-[#102d35] sm:text-5xl">Choose the capacity your team needs</h2>
              <p className="mt-5 text-base leading-7 text-slate-600">Bring an existing domain; mailbox activation follows domain ownership and payment confirmation.</p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              <article className="flex flex-col rounded-[1.5rem] border border-slate-200 bg-[#fffdf9] p-7">
                <h3 className="text-xl font-bold text-[#102d35]">Standard</h3>
                <p className="mt-6 text-4xl font-bold tracking-tight">$1<span className="text-base font-semibold text-slate-500">/month</span></p>
                <ul className="mt-7 space-y-3 text-sm leading-6 text-slate-600"><li>5 email accounts included</li><li>$1 each additional</li><li>Shared storage included</li></ul>
                <a href={businessSignupUrl("standard")} onClick={() => trackCTAClick('homepage_pricing_standard', 'mail_first', 'homepage_mail_first')} className="mt-8 rounded-full border border-slate-950 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-slate-950 hover:text-white">Choose Standard</a>
              </article>
              <article className="flex flex-col rounded-[1.5rem] border border-orange-700 bg-[#fff7ed] p-7 shadow-[0_22px_65px_-42px_rgba(234,88,12,0.8)]">
                <h3 className="text-xl font-bold text-[#102d35]">Business</h3>
                <p className="mt-6 text-4xl font-bold tracking-tight">$20<span className="text-base font-semibold text-slate-500">/month</span></p>
                <ul className="mt-7 space-y-3 text-sm leading-6 text-slate-700"><li>Unlimited email accounts</li><li>200 GB pooled storage</li><li>Storage upgrades available</li></ul>
                <a href={businessSignupUrl("business")} onClick={() => trackCTAClick('homepage_pricing_business', 'mail_first', 'homepage_mail_first')} className="mt-8 rounded-full bg-orange-700 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-orange-800">Choose Business</a>
              </article>
              <article className="flex flex-col rounded-[1.5rem] border border-slate-200 bg-slate-50 p-7">
                <h3 className="text-xl font-bold text-[#102d35]">Enterprise</h3>
                <p className="mt-6 text-4xl font-bold tracking-tight">Quote</p>
                <ul className="mt-7 space-y-3 text-sm leading-6 text-slate-600"><li>White-label requirements</li><li>Migration and onboarding</li><li>Storage and security design</li></ul>
                <a href="/request-quote" className="mt-8 rounded-full border border-slate-950 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-slate-950 hover:text-white">Request a quote</a>
              </article>
            </div>
            <div className="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5 text-sm leading-6 text-sky-950">
              <p>USDC/USDT payments are available through Venmail Billing. Contact us for the amount, supported network, and payment confirmation steps before sending funds.</p>
              <a href="/contact-us" className="mt-2 inline-block font-bold underline underline-offset-4">Arrange USDC or USDT payment</a>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-[#fffdf9] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-[#102d35]">Tools for daily operations</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a href="/product/contacts" className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 text-lg font-bold text-slate-900 transition hover:border-orange-300 hover:shadow-lg">Contacts <span className="text-orange-600 transition group-hover:translate-x-1"><ArrowIcon /></span></a>
              <a href="/product/calendar" className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 text-lg font-bold text-slate-900 transition hover:border-orange-300 hover:shadow-lg">Calendar <span className="text-orange-600 transition group-hover:translate-x-1"><ArrowIcon /></span></a>
            </div>
          </div>
        </section>
      </main>
      <MailFirstFooter />
    </div>
  );
}
