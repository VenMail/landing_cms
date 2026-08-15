import Head from "next/head";
import Link from "next/link";
import DefaultLayout from "@/components/layout/DefaultLayout";
import ArticleCard from "./ArticleCard";
import ContentBlocks from "./ContentBlocks";

function formatDate(value) {
  return new Intl.DateTimeFormat("en", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

export default function ArticlePage({ article, related }) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: article.canonicalUrl,
    author: { "@type": "Organization", name: article.author, url: "https://venmail.io/about-us" },
    publisher: { "@type": "Organization", name: "Venmail", url: "https://venmail.io" },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://venmail.io" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://venmail.io/blog" },
      { "@type": "ListItem", position: 3, name: article.title, item: article.canonicalUrl },
    ],
  };

  return (
    <DefaultLayout>
      <Head>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <link rel="canonical" href={article.canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:url" content={article.canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      </Head>

      <article>
        <header className="border-y border-slate-200 bg-[radial-gradient(circle_at_top_left,_#fff2e8,_white_52%)] py-14 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500"><Link href="/blog" className="hover:text-primary-700">Guides</Link><span aria-hidden="true"> / </span><span>{article.category}</span></nav>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-700">{article.cluster}</p>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-[-0.035em] text-slate-950 md:text-6xl">{article.title}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">{article.excerpt}</p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <span>By {article.author}</span><span>Reviewed by {article.reviewer}</span><time dateTime={article.updatedAt}>Updated {formatDate(article.updatedAt)}</time>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_17rem] lg:py-20">
          <div><ContentBlocks blocks={article.body} sources={article.sources} /></div>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="font-bold text-slate-950">Who this is for</h2><p className="mt-2 text-sm leading-6 text-slate-600">{article.reader}</p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h2 className="font-bold text-slate-950">When to choose another route</h2><p className="mt-2 text-sm leading-6 text-slate-700">{article.nonFit}</p>
            </div>
          </aside>
        </div>

        <section className="bg-slate-950 py-14 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6"><h2 className="text-3xl font-bold">Ready for the next practical step?</h2><p className="mx-auto mt-3 max-w-2xl text-slate-300">Use Venmail when its mailbox, migration and administration model fits—and keep your domain under your control.</p><a href={article.cta.href} className="mt-7 inline-flex rounded-xl bg-primary-600 px-6 py-3 font-bold text-white hover:bg-primary-700">{article.cta.label}</a></div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="mb-7 text-3xl font-bold text-slate-950">Related practical guides</h2>
          <div className="grid gap-6 md:grid-cols-2">{related.map((item) => <ArticleCard key={item.slug} article={item} />)}</div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-950">Sources and review method</h2>
          <p className="mt-3 leading-7 text-slate-600">Venmail publishes this guide and may be one of the products discussed. We compare providers on consistent dimensions, link to primary documentation and state non-fit cases. Product limits and pricing should be rechecked before purchase.</p>
          <ol className="mt-5 space-y-3 text-sm text-slate-600">{article.sources.map((source) => <li key={source.id}><a className="font-semibold text-primary-700 underline underline-offset-2" href={source.url} target="_blank" rel="noreferrer">{source.publisher}: {source.title}</a> <span>(accessed {source.accessedAt})</span></li>)}</ol>
        </section>
      </article>
    </DefaultLayout>
  );
}
