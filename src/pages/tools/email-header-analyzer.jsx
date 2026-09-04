import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { analyzeHeaders, safeReport, SAMPLE_HEADERS } from '@/utils/emailHeaders.mjs';
import { trackConversion } from '@/utils/trackConversion';

const toolUrl = 'https://venmail.io/tools/email-header-analyzer';
const guidance = {
  spf: 'SPF checks whether the sending server is authorized for the envelope sender. Forwarding can affect this result.',
  dkim: 'DKIM checks a domain signature on the message. A message may have several signatures with different results.',
  dmarc: 'DMARC checks alignment with the visible From domain using SPF or DKIM. An SPF pass alone does not establish DMARC alignment.',
};
function nextStep(statuses) {
  if (!statuses.length) return 'Not reported here. Check the original message at your receiving mailbox.';
  if (statuses.some(s => ['fail', 'softfail', 'permerror', 'policy'].includes(s))) return 'Investigate with the sending service: confirm its domain settings and send a fresh test after any correction.';
  if (statuses.includes('temperror')) return 'The receiver reported a temporary error. Try a fresh test later before changing DNS.';
  if (statuses.every(s => s === 'pass')) return 'This entry reports a pass. Confirm that this entry belongs to your trusted receiving provider.';
  return 'This is not a confirmed pass. Consult the receiving provider’s original-message view for details.';
}

export default function EmailHeaderAnalyzer() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [countActions, setCountActions] = useState(false);
  const [isSample, setIsSample] = useState(false);
  const event = action => {
    if (countActions) trackConversion(`email_header_${action}`, { tool_id: 'email_header_analyzer', input_kind: isSample ? 'sample' : 'pasted' });
  };
  function analyze() {
    try { setResult(analyzeHeaders(input)); setError(''); event('analyzed'); }
    catch (err) { setResult(null); setError(err.message); }
  }
  function reset() { setInput(''); setResult(null); setError(''); setIsSample(false); }
  function download() {
    const url = URL.createObjectURL(new Blob([safeReport(result)], { type: 'text/plain;charset=utf-8' }));
    const a = document.createElement('a'); a.href = url; a.download = 'email-header-summary.txt'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000); event('report_downloaded');
  }
  const schema = {
    '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Venmail Email Header Analyzer', url: toolUrl,
    applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any modern browser', browserRequirements: 'Requires JavaScript',
    description: 'Read reported SPF, DKIM and DMARC results locally in your browser, without uploading email headers.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@type': 'Organization', name: 'Venmail', url: 'https://venmail.io' },
  };
  return <>
    <Head>
      <title>Free Email Header Analyzer: SPF, DKIM &amp; DMARC | Venmail</title>
      <meta name="description" content="Understand SPF, DKIM and DMARC results in your email headers. Free, no account, no uploads. Get clear next steps and a private support summary." />
      <link rel="canonical" href={toolUrl} />
      <meta property="og:title" content="Free Email Header Analyzer | Venmail" />
      <meta property="og:description" content="Turn confusing email headers into a clear next step. Free and processed in your browser." />
      <meta property="og:url" content={toolUrl} />
      <meta property="og:type" content="website" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Head>
    <Header logoVariant="dark" />
    <main className="bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary-700">Free tools by Venmail</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">Make sense of your email headers.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">See the SPF, DKIM and DMARC results recorded in a received email, understand what they mean, and decide what to check next.</p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm font-semibold"><li className="rounded-full bg-emerald-50 px-4 py-2 text-emerald-800">Free · no account</li><li className="rounded-full bg-slate-100 px-4 py-2">Headers stay in your browser</li><li className="rounded-full bg-slate-100 px-4 py-2">Works with any mail provider</li></ul>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-2" aria-label="Email header analyzer">
        <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
          <h2 className="text-2xl font-bold">1. Add your headers</h2>
          <p id="header-help" className="mt-3 text-sm leading-6 text-slate-600">Open a received email and find <strong>Show original</strong>, <strong>View source</strong> or <strong>Message details</strong>. Copy the header lines above the blank line where the message body begins.</p>
          <label htmlFor="email-headers" className="mt-5 block font-semibold">Original email headers</label>
          <textarea id="email-headers" value={input} onChange={e => { setInput(e.target.value); setResult(null); setError(''); setIsSample(false); }} rows={12} spellCheck={false} autoComplete="off" aria-describedby="header-help header-privacy" aria-invalid={Boolean(error)} className="mt-2 w-full resize-y rounded-xl border border-slate-300 bg-slate-50 p-4 font-mono text-sm leading-6 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-200" placeholder={'Authentication-Results: your.receiver;\n spf=pass; dkim=pass; dmarc=pass'} />
          <p id="header-privacy" className="mt-2 text-xs leading-5 text-slate-500">No upload, no storage, no DNS requests. Avoid pasting the message body. Maximum input: 256 Ki characters.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button onClick={analyze} className="rounded-xl bg-primary-600 px-5 py-3 font-bold text-white hover:bg-primary-700">Analyze headers</button>
            <button onClick={() => { setInput(SAMPLE_HEADERS); setResult(null); setError(''); setIsSample(true); }} className="rounded-xl border border-slate-300 px-4 py-3 font-semibold hover:bg-slate-50">Try a sample</button>
            <button onClick={reset} className="rounded-xl px-3 py-3 font-semibold text-slate-600 underline underline-offset-4">Clear</button>
          </div>
          {error && <p role="alert" className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-800">{error}</p>}
          {isSample && <p className="mt-4 text-sm text-slate-600">Synthetic example. These are demonstration values, not a real email delivery.</p>}
          <details className="mt-6 border-t border-slate-200 pt-4 text-sm text-slate-600"><summary className="cursor-pointer font-semibold">Privacy and optional usage measurement</summary><p className="mt-3 leading-6">The analyzer runs in this tab. Your pasted text is never included in analytics or sent to Venmail. The site uses its normal page analytics. Optional tool events contain only the action name and whether you used the sample.</p><label className="mt-3 flex items-start gap-3 leading-6"><input type="checkbox" className="mt-1" checked={countActions} onChange={e => setCountActions(e.target.checked)} />Count my tool actions in site analytics (optional).</label></details>
        </div>
        <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
          <h2 className="text-2xl font-bold">2. Understand the results</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">These are reported results, not independent checks. Headers can be forged. Trust only entries added by your receiving mail provider; ask that provider if you are unsure which entry is theirs.</p>
          <div role="status" aria-live="polite" className="mt-5 text-sm font-semibold">{result ? `Authentication entries: ${result.receivers.length}. Received fields: ${result.receivedCount}.` : 'Your results will appear here after analysis.'}</div>
          {!result && <div className="mt-6 space-y-5">{Object.entries(guidance).map(([method, text]) => <div key={method} className="rounded-xl bg-slate-50 p-4"><h3 className="font-bold">{method.toUpperCase()}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>)}</div>}
          {result && <>
            {(result.malformed > 0 || result.receivers.some(r => r.malformed)) && <p className="mt-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">Some input was incomplete or malformed. Results may be partial; copy the original headers again.</p>}
            {result.receivers.length === 0 && <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">No Authentication-Results header found. This does not mean the email failed. Check the receiver’s original-message view; this tool does not derive results from DKIM-Signature, ARC or Received-SPF fields.</p>}
            {result.receivers.map((receiver, index) => <section key={index} className="mt-6 border-t border-slate-200 pt-5">
              <h3 className="font-bold">Receiver entry {index + 1}</h3><p className="mt-1 break-all font-mono text-xs text-slate-500">{receiver.receiver}</p>
              {Object.entries(receiver.results).map(([method, statuses]) => <div key={method} className="mt-4 rounded-xl bg-slate-50 p-4"><div className="flex flex-wrap items-center justify-between gap-2"><h4 className="font-bold">{method.toUpperCase()}</h4><span className="rounded-md bg-white px-2 py-1 text-sm font-semibold">{statuses.join(', ') || 'Not reported'}</span></div><p className="mt-2 text-sm leading-6 text-slate-600">{nextStep(statuses)}</p></div>)}
            </section>)}
            <p className="mt-5 text-sm leading-6 text-slate-600">A reported pass does not prove the sender is safe, the message reached the inbox, or your current DNS is correct.</p>
            <button onClick={download} className="mt-5 rounded-xl border border-slate-300 px-4 py-3 font-semibold hover:bg-slate-50">Download private summary</button><p className="mt-2 text-xs leading-5 text-slate-500">The download includes status labels and counts only. Addresses, receiver names, domains and original headers are excluded.</p>
          </>}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="rounded-2xl bg-slate-900 p-7 text-white sm:p-10"><h2 className="text-2xl font-bold">Turn a result into a fix</h2><p className="mt-3 max-w-3xl leading-7 text-slate-300">Start with the guide that matches your situation. If you need a workspace for business email, explore Venmail’s Free plan and check the current sending limits.</p><div className="mt-6 flex flex-wrap gap-4"><Link href="/pricing" onClick={() => event('venmail_clicked')} className="rounded-xl bg-white px-5 py-3 font-bold text-slate-900">Explore Venmail’s free plan</Link><Link href="/blog/free-email-deliverability-audit" className="rounded-xl border border-slate-500 px-5 py-3 font-bold">Follow the free audit</Link></div></div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">{[
          ['free-email-deliverability-audit', 'Email going to spam?', 'Use a repeatable audit to separate authentication, list quality and placement problems.'],
          ['spf-dkim-dmarc-after-migration', 'Changed email providers?', 'Check a fresh message after migration before removing old DNS records.'],
          ['email-authentication-bounce-codes', 'Working from a bounce?', 'Use the actual SMTP response to distinguish authentication failures from other rejections.'],
        ].map(([slug, title, description]) => <div key={slug}><h2 className="text-lg font-bold"><Link href={`/blog/${slug}`} className="underline underline-offset-4">{title}</Link></h2><p className="mt-3 text-sm leading-6 text-slate-600">{description}</p></div>)}</div>
        <section className="mt-10 border-t border-slate-200 pt-8"><h2 className="text-xl font-bold">How this tool works</h2><p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">It reads Authentication-Results fields, unfolds wrapped lines, and keeps each receiver entry separate. It does not send test mail, look up DNS or validate signatures. Received fields are counted as routing context, not proof of delivery. The parser recognizes common SPF, DKIM and DMARC status words; unusual formats may need manual inspection.</p><p className="mt-3 text-sm leading-7"><a href="https://www.rfc-editor.org/rfc/rfc8601.html" className="underline underline-offset-4">Authentication-Results format and trust limitations (RFC 8601)</a><span aria-hidden="true"> · </span><a href="https://support.google.com/mail/answer/29436" className="underline underline-offset-4">Find full headers in Gmail</a></p></section>
      </section>
    </main>
    <Footer hideFooterJumbo />
  </>;
}
