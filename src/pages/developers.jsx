import Head from 'next/head';
import Link from 'next/link';
import { ArrowUpRight, Bot, Building2, KeyRound } from 'lucide-react';
import DefaultLayout from '@/components/layout/DefaultLayout';

const sendMessageExample = `curl -X POST https://m.venmail.io/api/v1/agent/messages \\
  -H "Authorization: Bearer <token>" \\
  -H "Accept: application/json" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "maya@acme.example",
    "subject": "Pricing for 200 units",
    "body": "Pricing and delivery timing will follow shortly."
  }'`;

const apiPaths = [
  {
    icon: Building2,
    label: 'Platform Email API',
    title: 'Provision customer email workspaces',
    description: 'Partner integrations for workspaces, domains, mailboxes, and credentials.',
    href: 'https://m.venmail.io/platform/api/docs',
    action: 'Open Platform reference',
  },
  {
    icon: Bot,
    label: 'Agent API',
    title: 'Run account-scoped inbox agents',
    description: 'Token-scoped operations for email agents and account workflows.',
    href: 'https://m.venmail.io/docs/agents',
    action: 'Read Agent API docs',
  },
];

export default function DevelopersPage() {
  return (
    <DefaultLayout>
      <Head>
        <title>Developers — Venmail</title>
        <meta name="description" key="description" content="Venmail APIs for email workspace provisioning and account-scoped agent operations." />
      </Head>

      <section className="bg-slate-950 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Developers</p>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight sm:text-6xl">Email infrastructure with clear boundaries.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Choose the API that matches the work: partner provisioning for customer workspaces or token-scoped operations for inbox agents.</p>
              <a href="https://m.venmail.io/platform/api/docs" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
                Explore Platform API
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
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
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">Choose an API</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Two integration paths.</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {apiPaths.map(({ icon: Icon, label, title, description, href, action }) => (
              <article key={label} className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <Icon className="h-7 w-7 text-primary-700" aria-hidden="true" />
                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{description}</p>
                <a href={href} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary-700 hover:text-primary-800">
                  {action}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">Platform credentials</h2>
            <p className="mt-2 text-slate-600">Platform API credentials are issued from the partner dashboard.</p>
          </div>
          <Link href="/resources/partner" className="inline-flex items-center gap-2 font-semibold text-primary-700 hover:text-primary-800">
            Partner program
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
