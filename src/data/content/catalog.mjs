import { opportunities } from "./opportunities.mjs";
import { articleBodies } from "./articles/index.mjs";
import { sourcesById } from "./sources.mjs";
import { existingSeedCoverage, seedTopics } from "./seedCoverage.mjs";
import { existingImprovements } from "./utility/existingImprovements.mjs";

function joinArticle(opportunity) {
  const improvement = existingImprovements[opportunity.slug];
  const body = [...(articleBodies[opportunity.slug] ?? []), ...(improvement?.blocks ?? [])];
  const evidenceSourceIds = [...new Set([...(opportunity.evidenceSourceIds ?? []), ...(improvement?.sources ?? []), ...body.flatMap(block => block.sourceIds ?? [])])];
  const sources = evidenceSourceIds
    .map((id) => sourcesById[id])
    .filter(Boolean);

  const seedOpportunityIds = opportunity.seedOpportunityIds ?? existingSeedCoverage[opportunity.slug] ?? [];
  return Object.freeze({
    ...opportunity,
    seedOpportunityIds,
    topicLabels: seedOpportunityIds.length ? seedTopics.filter(topic => seedOpportunityIds.includes(topic.id)).map(topic => topic.label) : [opportunity.cluster],
    evidenceSourceIds,
    updatedAt: improvement ? "2026-09-04" : opportunity.updatedAt,
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
