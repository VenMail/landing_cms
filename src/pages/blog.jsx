import { useMemo, useState } from "react";
import Head from "next/head";
import DefaultLayout from "@/components/layout/DefaultLayout";
import ArticleCard from "@/components/blog/ArticleCard";
import { getPublishedArticles } from "@/data/content/catalog.mjs";

export default function Blog({ articles }) {
  const [cluster, setCluster] = useState("All guides");
  const clusters = useMemo(() => ["All guides", ...new Set(articles.flatMap((article) => article.topicLabels))], [articles]);
  const visible = cluster === "All guides" ? articles : articles.filter((article) => article.topicLabels.includes(cluster));

  return (
    <DefaultLayout>
      <Head>
        <title>Venmail Guides — Free Tools, Email Marketing and Developer How-Tos</title>
        <meta name="description" key="description" content="Practical email guides with free tools, templates and checklists for small businesses, developers, stores and agencies." />
        <link rel="canonical" key="canonical" href="https://venmail.io/blog" />
        <link rel="alternate" type="application/rss+xml" title="Venmail Guides" href="https://venmail.io/rss.xml" />
        <meta property="og:title" key="og:title" content="Venmail practical email guides" />
        <meta property="og:description" key="og:description" content="Free tools, practical templates and step-by-step email guides for businesses and developers." />
        <meta property="og:url" key="og:url" content="https://venmail.io/blog" />
      </Head>

      <section className="border-y border-slate-200 bg-[radial-gradient(circle_at_top_left,_#fff1e6,_white_55%)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-700">Venmail field guides</p>
          <div className="mt-4 grid items-end gap-8 lg:grid-cols-[1fr_24rem]">
            <div><h1 className="max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-6xl">Make email useful. Start with a practical guide.</h1><p className="mt-5 max-w-3xl text-xl leading-8 text-slate-600">Free tools, clear examples and checklists for newsletters, customer email, developer workflows and migration. Learn what you can do today and where Venmail fits.</p></div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="font-bold text-slate-950">Planning a migration?</p><p className="mt-2 text-sm leading-6 text-slate-600">Send a secure setup link to your technical or email administrator. They can authorize the exact DNS changes without sharing a reusable password.</p><a href="https://m.venmail.io/email-migrations/start" className="mt-4 inline-flex font-bold text-primary-700">Start migration →</a></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h2 className="text-3xl font-bold text-slate-950">Published guides</h2><p className="mt-2 text-slate-600">{articles.length} practical guides with examples you can use.</p></div><label className="text-sm font-semibold text-slate-700">Topic<span className="sr-only"> filter</span><select value={cluster} onChange={(event) => setCluster(event.target.value)} className="mt-2 block max-w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-normal sm:ml-3 sm:mt-0 sm:inline-block">{clusters.map((item) => <option key={item}>{item}</option>)}</select></label></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{visible.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
      </section>
    </DefaultLayout>
  );
}

export function getStaticProps() {
  return { props: { articles: getPublishedArticles().sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)) } };
}
