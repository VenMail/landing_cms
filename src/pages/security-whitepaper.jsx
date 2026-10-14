import Head from 'next/head';
import Link from 'next/link';
import {
  ArrowUpRight,
  Check,
  Cloud,
  Database,
  FileText,
  KeyRound,
  LockKeyhole,
  Mail,
  Printer,
  Server,
  ShieldCheck,
} from 'lucide-react';

const sections = [
  ['summary', 'Executive summary'],
  ['boundaries', 'Service boundaries'],
  ['storage', 'Storage placement'],
  ['review', 'Security review'],
  ['developers', 'Developer integrations'],
];

function Section({ icon: Icon, eyebrow, title, children }) {
  return (
    <section id={eyebrow} className="scroll-mt-28 border-t border-slate-800 py-12 first:border-t-0 sm:py-16">
      <div className="flex items-start gap-4">
        <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-400/10 text-orange-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">{eyebrow}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
        </div>
      </div>
      <div className="mt-8 space-y-5 text-base leading-8 text-slate-300 sm:text-lg">{children}</div>
    </section>
  );
}

function Fact({ children }) {
  return (
    <li className="flex gap-3">
      <Check className="mt-1 h-5 w-5 shrink-0 text-orange-300" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

export default function SecurityWhitepaper() {
  return (
    <>
      <Head>
        <title>Security Whitepaper — Venmail</title>
        <meta
          name="description"
          content="Venmail service boundaries for connection security, server-side processing, storage placement, and deployment review."
        />
      </Head>

      <style jsx global>{`
        @media print {
          .print-hidden { display: none !important; }
          html { scroll-behavior: auto; }
          body { background: #fff !important; color: #0f172a !important; }
          .print-surface, .print-surface * { background: #fff !important; color: #0f172a !important; border-color: #cbd5e1 !important; box-shadow: none !important; }
          section { break-inside: avoid; }
        }
      `}</style>

      <div className="print-surface min-h-screen bg-[#070b16] text-white">
        <header className="print-hidden sticky top-0 z-20 border-b border-white/10 bg-[#070b16]/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              <Mail className="h-6 w-6 text-primary-400" aria-hidden="true" />
              Venmail
            </Link>
            <div className="flex items-center gap-2 sm:gap-4">
              <Link href="/" className="hidden text-sm font-medium text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 sm:inline">
                Venmail
              </Link>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:px-4"
              >
                <Printer className="h-4 w-4" aria-hidden="true" />
                Print PDF
              </button>
            </div>
          </div>
        </header>

        <main>
          <section className="border-b border-white/10 bg-[radial-gradient(circle_at_76%_0%,rgba(249,115,22,0.20),transparent_32rem)]">
            <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-200">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  Security whitepaper
                </div>
                <h1 className="mt-8 text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">Clear service boundaries for sensitive email work.</h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  This paper describes the current connection, content-processing, storage, and review boundaries for Venmail deployments.
                </p>
              </div>

              <ul className="mt-12 grid max-w-5xl gap-3 text-sm text-slate-200 sm:grid-cols-3">
                <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">HTTPS protects the web application connection.</li>
                <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">Server-side content processing is disclosed.</li>
                <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">Deployment controls are confirmed per contract.</li>
              </ul>
            </div>
          </section>

          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:py-20">
            <aside className="print-hidden min-w-0 lg:sticky lg:top-24 lg:h-fit">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Contents</p>
              <nav aria-label="Whitepaper sections" className="mt-4 flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-1 lg:overflow-visible">
                {sections.map(([id, label]) => (
                  <a key={id} href={`#${id}`} className="whitespace-nowrap rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 lg:block">
                    {label}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="min-w-0 max-w-3xl">
              <Section icon={FileText} eyebrow="summary" title="Executive summary">
                <p>Venmail provides email and related AI features through a web application. HTTPS protects the connection to the web application. The service processes email content on its servers to provide mailbox and AI features.</p>
                <p>Venmail is not a blanket end-to-end encrypted or zero-access service. Teams with regulated, contractual, or sensitive-workload requirements should confirm the controls and supporting evidence for their deployment before processing that data.</p>
              </Section>

              <Section icon={Server} eyebrow="boundaries" title="Service boundaries">
                <div className="grid gap-4 sm:grid-cols-2">
                  <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                    <h3 className="font-semibold text-white">Application processing</h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">Email content can be processed on Venmail servers for mailbox and AI features.</p>
                  </article>
                  <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                    <h3 className="font-semibold text-white">AI processing</h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">Email analysis can send message content and extracted attachment text to Groq, a third-party AI provider.</p>
                  </article>
                </div>
                <p>Connection security, mailbox storage, application processing, and AI processing are separate concerns. A storage setting alone does not confine application or third-party AI processing to that location.</p>
              </Section>

              <Section icon={Database} eyebrow="storage" title="Storage placement">
                <ul className="space-y-4">
                  <Fact>Managed plans currently use shared storage infrastructure.</Fact>
                  <Fact>Nigeria, South Africa, and Europe selections record a future region preference; they do not provide current data residency.</Fact>
                  <Fact>Customer-provided storage settings govern mailbox storage placement. Application and third-party AI processing remain separate boundaries to review.</Fact>
                </ul>
              </Section>

              <Section icon={LockKeyhole} eyebrow="review" title="Security review">
                <p>Venmail does not claim blanket end-to-end encryption, zero-access processing, certifications, or automatic regulatory compliance for every deployment. Applicable requirements depend on the service configuration and contract.</p>
                <div className="rounded-2xl border border-orange-300/20 bg-orange-300/10 p-6">
                  <h3 className="font-semibold text-orange-100">Before handling regulated or sensitive workloads</h3>
                  <ul className="mt-4 space-y-3 text-base leading-7 text-slate-200">
                    <Fact>Confirm current deployment controls and processing locations.</Fact>
                    <Fact>Confirm subprocessors and applicable contractual terms.</Fact>
                    <Fact>Document access, retention, and incident requirements for the intended deployment.</Fact>
                  </ul>
                </div>
              </Section>

              <Section icon={KeyRound} eyebrow="developers" title="Developer integrations">
                <p>Platform Email API credentials are issued through the partner dashboard. The public reference documents partner-managed workspace, mailbox, domain, and credential operations.</p>
                <a href="https://m.venmail.io/platform/api/docs" target="_blank" rel="noreferrer" className="print-hidden inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300">
                  Platform API reference
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Section>

              <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-7 sm:p-8">
                <Cloud className="h-6 w-6 text-orange-300" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">Deployment questions</h2>
                <p className="mt-3 max-w-2xl leading-7 text-slate-300">Request current deployment controls, subprocessors, and contractual requirements before relying on Venmail for a regulated or sensitive workload.</p>
                <a href="mailto:hello@venmail.io?subject=Venmail%20security%20review" className="print-hidden mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                  Request a security review
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
