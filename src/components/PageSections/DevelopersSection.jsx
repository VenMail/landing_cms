import Link from 'next/link';
import { ArrowUpRight, Braces, KeyRound } from 'lucide-react';

const sendMessageExample = `curl -X POST https://m.venmail.io/api/v1/agent/messages \\
  -H "Authorization: Bearer <token>" \\
  -H "Accept: application/json" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "maya@acme.example",
    "subject": "Pricing for 200 units",
    "body": "Pricing and delivery timing will follow shortly."
  }'`;

export default function DevelopersSection() {
  return (
    <section id="for-developers" className="bg-slate-950 py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <div>
          <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            <Braces className="h-4 w-4" aria-hidden="true" />
            Developers
          </p>
          <h2 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">Email operations for your product.</h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">Send account-scoped messages or provision customer workspaces with explicit credentials and documented boundaries.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/developers" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
              Developer guide
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href="https://m.venmail.io/platform/api/docs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">
              Platform API reference
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/30">
          <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <KeyRound className="h-4 w-4 text-orange-300" aria-hidden="true" />
              Agent API
            </div>
            <span className="rounded-full bg-orange-300/10 px-3 py-1 text-xs font-medium text-orange-200">POST</span>
          </div>
          <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200 sm:p-7"><code>{sendMessageExample}</code></pre>
        </div>
      </div>
    </section>
  );
}
