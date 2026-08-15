import ArticlePage from "@/components/blog/ArticlePage";
import { getArticleBySlug, getPublishedArticles } from "@/data/content/catalog.mjs";

export default ArticlePage;

export function getStaticPaths() {
  return {
    paths: getPublishedArticles().map((article) => ({ params: { slug: article.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug);
  const candidates = getPublishedArticles().filter((item) => item.slug !== article.slug);
  const related = candidates
    .sort((left, right) => Number(right.cluster === article.cluster) - Number(left.cluster === article.cluster))
    .slice(0, 2);
  return { props: { article, related } };
}
