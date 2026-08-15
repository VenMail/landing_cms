import { opportunities } from "./opportunities.mjs";
import { articleBodies } from "./articles/index.mjs";
import { sourcesById } from "./sources.mjs";

function joinArticle(opportunity) {
  const body = articleBodies[opportunity.slug] ?? [];
  const sources = (opportunity.evidenceSourceIds ?? [])
    .map((id) => sourcesById[id])
    .filter(Boolean);

  return Object.freeze({
    ...opportunity,
    body,
    sources,
    canonicalUrl: `https://venmail.io/blog/${opportunity.slug}`,
  });
}

export function getAllOpportunities() {
  return opportunities.map(joinArticle);
}

export function getPublishedArticles() {
  return getAllOpportunities().filter((item) => item.status === "published");
}

export function getArticleBySlug(slug) {
  return getPublishedArticles().find((item) => item.slug === slug) ?? null;
}
