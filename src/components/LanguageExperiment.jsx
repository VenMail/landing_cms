import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const paths = { 'pt-BR': '/pt-br/email-profissional', de: '/de/geschaeftliche-email' };

export default function LanguageExperiment({ lang, title, description, heading, intro, facts, steps, questions, cta, languageNotice }) {
  const canonical = `https://venmail.io${paths[lang]}`;
  const signup = 'https://m.venmail.io/register?type=business&plan=standard&signup_source=cloudflare_landing';
  function trackSignup() {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'language_experiment_signup_click', { experiment_language: lang, experiment_page: paths[lang] });
    }
  }
  return <>
    <Head>
      <title>{title}</title><meta name="description" key="description" content={description} />
      <link rel="canonical" key="canonical" href={canonical} />
      <link rel="alternate" hrefLang="pt-BR" href={`https://venmail.io${paths['pt-BR']}`} />
      <link rel="alternate" hrefLang="de" href={`https://venmail.io${paths.de}`} />
      <meta property="og:title" key="og:title" content={title} />
      <meta property="og:description" key="og:description" content={description} />
      <meta property="og:url" key="og:url" content={canonical} />
    </Head>
    <Header logoVariant="dark" />
    <main lang={lang} className="bg-slate-50 text-slate-900">
      <section className="bg-slate-950 px-5 py-20 text-white"><div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-widest text-orange-300">Venmail</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">{heading}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{intro}</p>
        <a href={signup} onClick={trackSignup} className="mt-8 inline-block rounded-xl bg-orange-600 px-7 py-4 font-bold text-white hover:bg-orange-700">{cta}</a>
        <p className="mt-4 text-sm text-slate-300">{languageNotice}</p>
      </div></section>
      <section className="mx-auto max-w-5xl px-5 py-14"><div className="grid gap-5 md:grid-cols-3">{facts.map(f => <article key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-lg font-bold">{f.title}</h2><p className="mt-3 leading-7 text-slate-600">{f.body}</p></article>)}</div>
        <div className="mt-12 grid gap-10 md:grid-cols-2"><div><h2 className="text-2xl font-bold">{steps.title}</h2><ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-slate-700">{steps.items.map(item => <li key={item}>{item}</li>)}</ol></div><div><h2 className="text-2xl font-bold">{questions.title}</h2>{questions.items.map(item => <div key={item.q} className="mt-5"><h3 className="font-bold">{item.q}</h3><p className="mt-2 leading-7 text-slate-600">{item.a}</p></div>)}</div></div>
        <div className="mt-10"><Link href="/pricing" className="font-semibold text-orange-700 underline underline-offset-4">{lang === 'de' ? 'Alle Preise ansehen' : 'Ver todos os preços'}</Link></div>
      </section>
    </main><Footer hideFooterJumbo />
  </>;
}
