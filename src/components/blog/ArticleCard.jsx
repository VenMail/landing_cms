import Link from "next/link";

export default function ArticleCard({ article }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.16em]">
        <span className="text-primary-700">{article.category}</span>
      </div>
      <h2 className="text-xl font-bold leading-snug tracking-tight text-slate-950">
        <Link href={`/blog/${article.slug}`} className="transition group-hover:text-primary-700">{article.title}</Link>
      </h2>
      <p className="mt-3 flex-1 leading-7 text-slate-600">{article.excerpt}</p>
      <Link href={`/blog/${article.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-slate-950" aria-label={`Read ${article.title}`}>
        Read the guide <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
