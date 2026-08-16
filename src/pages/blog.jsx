import { useMemo, useState } from "react";
import Head from "next/head";
import DefaultLayout from "@/components/layout/DefaultLayout";
import ArticleCard from "@/components/blog/ArticleCard";
import { getPublishedArticles } from "@/data/content/catalog.mjs";

export default function Blog({ articles }) {
  const [cluster, setCluster] = useState("All guides");
  const clusters = useMemo(() => ["All guides", ...new Set(articles.map((article) => article.cluster))], [articles]);
  const visible = cluster === "All guides" ? articles : articles.filter((article) => article.cluster === cluster);

  return (
    <DefaultLayout>
      <Head>
        <title>Venmail Guides — Email Migration, Infrastructure and Deliverability</title>
        <meta name="description" content="Practical, source-backed guides for migrating business email, choosing delivery infrastructure and diagnosing mail failures." />
        <link rel="canonical" href="https://venmail.io/blog" />
        <link rel="alternate" type="application/rss+xml" title="Venmail Guides" href="https://venmail.io/rss.xml" />
        <meta property="og:title" content="Venmail practical email guides" />
        <meta property="og:description" content="Decision tables, migration runbooks and honest provider comparisons for business email." />
        <meta property="og:url" content="https://venmail.io/blog" />
      </Head>

      <section className="border-y border-slate-200 bg-[radial-gradient(circle_at_top_left,_#fff1e6,_white_55%)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-700">Venmail field guides</p>
          <div className="mt-4 grid items-end gap-8 lg:grid-cols-[1fr_24rem]">
            <div><h1 className="max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-6xl">Make the right email move—and know how to execute it.</h1><p className="mt-5 max-w-3xl text-xl leading-8 text-slate-600">Source-backed comparisons, DNS maps and migration runbooks. Written to help you decide and act, including when Venmail is not the right fit.</p></div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="font-bold text-slate-950">Planning a migration?</p><p className="mt-2 text-sm leading-6 text-slate-600">Send a secure setup link to your technical or email administrator. They can authorize the exact DNS changes without sharing a reusable password.</p><a href="https://m.venmail.io/email-migrations/start" className="mt-4 inline-flex font-bold text-primary-700">Start migration →</a></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h2 className="text-3xl font-bold text-slate-950">Published guides</h2><p className="mt-2 text-slate-600">Fifty practical guides for choosing, moving and fixing business email.</p></div><label className="text-sm font-semibold text-slate-700">Topic<span className="sr-only"> filter</span><select value={cluster} onChange={(event) => setCluster(event.target.value)} className="ml-3 rounded-lg border border-slate-300 bg-white px-3 py-2 font-normal">{clusters.map((item) => <option key={item}>{item}</option>)}</select></label></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{visible.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
      </section>
    </DefaultLayout>
  );
}

export function getStaticProps() {
  return { props: { articles: getPublishedArticles() } };
}
