import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const canonical = 'https://venmail.io/tools/whois';

export default function WhoisLookup() {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function lookup(event) {
    event.preventDefault();
    setLoading(true); setError(''); setResult(null);
    try {
      const response = await fetch(`/api/tools/whois?domain=${encodeURIComponent(domain.trim())}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Lookup unavailable. Try again later.');
      setResult(data);
    } catch (e) { setError(e.message || 'Lookup unavailable. Try again later.'); }
    finally { setLoading(false); }
  }

  const schema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Venmail WHOIS Lookup', url: canonical, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any modern browser', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } };
  return <>
    <Head>
      <title>Free WHOIS Domain Lookup | Venmail</title>
      <meta name="description" key="description" content="Look up a domain's registrar and nameservers with Venmail's free WHOIS lookup. No account required." />
      <link rel="canonical" key="canonical" href={canonical} />
      <meta property="og:title" key="og:title" content="Free WHOIS Domain Lookup | Venmail" />
      <meta property="og:description" key="og:description" content="Find a domain's registrar and nameservers." />
      <meta property="og:url" key="og:url" content={canonical} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Head>
    <Header logoVariant="dark" />
    <main className="bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white sm:px-6 md:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-300">Free domain tools</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">WHOIS domain lookup</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Find a domain’s registrar and nameservers.</p>
          <form onSubmit={lookup} className="mt-9 max-w-3xl rounded-2xl bg-white p-3 text-slate-900 shadow-2xl sm:flex sm:items-end sm:gap-3">
            <div className="flex-1 px-2 pb-2 pt-1 sm:pb-1"><label htmlFor="domain" className="block text-sm font-semibold text-slate-700">Domain name</label><input id="domain" value={domain} onChange={e => setDomain(e.target.value)} placeholder="example.com" autoCapitalize="none" autoComplete="off" spellCheck={false} required className="mt-1 w-full border-0 bg-transparent px-0 py-2 text-lg outline-none" /></div>
            <button type="submit" disabled={loading} className="w-full rounded-xl bg-orange-600 px-7 py-4 font-bold text-white hover:bg-orange-700 disabled:opacity-60 sm:w-auto">{loading ? 'Looking up…' : 'Look up domain'}</button>
          </form>
          <p className="mt-4 text-sm text-slate-400">Free · No account required</p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6" aria-live="polite">
        {error && <p role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">{error}</p>}
        {result && <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-700">Lookup result</p><h2 className="mt-2 break-all text-2xl font-bold">{result.domain}</h2>
          {result.message ? <p className="mt-5 leading-7 text-slate-600">{result.message}</p> : <dl className="mt-6 grid gap-4 sm:grid-cols-2"><div className="rounded-xl bg-slate-50 p-5"><dt className="text-sm font-semibold text-slate-500">Registrar</dt><dd className="mt-2 break-words font-semibold">{result.registrar || 'Not reported'}</dd></div><div className="rounded-xl bg-slate-50 p-5"><dt className="text-sm font-semibold text-slate-500">Nameservers</dt><dd className="mt-2 break-words font-semibold">{result.nameservers?.length ? <ul>{result.nameservers.map(ns => <li key={ns}>{ns}</li>)}</ul> : 'Not reported'}</dd></div></dl>}
        </div>}
        <div className="mt-10 grid gap-6 md:grid-cols-2"><article className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-lg font-bold">What does WHOIS show?</h2><p className="mt-3 text-sm leading-7 text-slate-600">Registration services may report a registrar and nameservers. The details vary by registry; privacy rules and service outages can limit results.</p></article><article className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-lg font-bold">Does a missing result mean a domain is available?</h2><p className="mt-3 text-sm leading-7 text-slate-600">No. A registry or network lookup can fail, and some records are not public. Confirm availability with a registrar before making a purchase.</p></article></div>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold"><Link className="text-orange-700 underline underline-offset-4" href="/tools/email-header-analyzer">Analyze email headers</Link><Link className="text-orange-700 underline underline-offset-4" href="/pricing">Explore business email</Link></div>
      </section>
    </main>
    <Footer hideFooterJumbo />
  </>;
}
