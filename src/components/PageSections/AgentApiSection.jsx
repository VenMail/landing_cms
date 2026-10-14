import Link from "next/link";
import { ArrowUpRight, Braces, KeyRound, ShieldCheck } from "lucide-react";

const messageExample = `curl -X POST https://m.venmail.io/api/v1/agent/messages \\
  -H "Authorization: Bearer <token>" \\
  -H "Accept: application/json" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "maya@acme.example",
    "subject": "Pricing for 200 units",
    "body": "Pricing and delivery timing will follow shortly."
  }'`;

const AgentApiSection = () => (
  <section
    id="developers"
    className="relative isolate overflow-hidden scroll-mt-24 bg-slate-950 py-20 text-white sm:py-28"
  >
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(249,115,22,0.22),transparent_27rem),radial-gradient(circle_at_10%_100%,rgba(59,130,246,0.16),transparent_32rem)]" />

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="min-w-0">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-200">
            <Braces className="h-3.5 w-3.5" aria-hidden="true" />
            Developers
          </p>
          <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Email operations for your product.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
            Send account-scoped messages or provision customer workspaces with
            explicit credentials and documented boundaries.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/developers"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Developer guide
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="https://m.venmail.io/platform/api/docs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/[0.09] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Platform API reference
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.045] p-4">
              <KeyRound className="h-5 w-5 text-orange-300" aria-hidden="true" />
              <h3 className="mt-4 text-sm font-semibold text-white">Agent API</h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-300">
                Token-scoped message operations for an authorized inbox.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.045] p-4">
              <ShieldCheck className="h-5 w-5 text-orange-300" aria-hidden="true" />
              <h3 className="mt-4 text-sm font-semibold text-white">Platform API</h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-300">
                Workspace and email integrations for customer-facing products.
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/85 shadow-2xl shadow-black/30 ring-1 ring-inset ring-white/[0.03]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 font-mono text-xs text-slate-400">agent-message.sh</span>
            </div>
            <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-emerald-200">
              POST
            </span>
          </div>
          <pre className="overflow-x-auto p-5 text-left text-[12px] leading-6 text-slate-200 sm:p-7 sm:text-[13px]"><code>{messageExample}</code></pre>
          <div className="border-t border-white/10 bg-black/15 px-5 py-4 text-sm leading-6 text-slate-400 sm:px-7">
            Agent endpoint: <code className="text-slate-200">/api/v1/agent/messages</code>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AgentApiSection;
