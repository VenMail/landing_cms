import { getAllOpportunities, getPublishedArticles } from "./catalog.mjs";

const required = [
  "id", "slug", "status", "cluster", "category", "primaryKeyword", "intent",
  "reader", "problem", "title", "excerpt", "metaTitle", "metaDescription",
  "venmailFit", "nonFit", "author", "reviewer", "publishedAt", "updatedAt",
];

function tokens(article) {
  const text = article.body.map((block) => JSON.stringify(block)).join(" ").toLowerCase();
  return new Set(text.match(/[a-z0-9]{4,}/g) ?? []);
}

function similarity(a, b) {
  const left = tokens(a);
  const right = tokens(b);
  const intersection = [...left].filter((token) => right.has(token)).length;
  const union = new Set([...left, ...right]).size;
  return union ? intersection / union : 0;
}

export function validateCatalog(catalog = getAllOpportunities()) {
  const errors = [];
  const published = catalog.filter((item) => item.status === "published");
  const briefs = catalog.filter((item) => item.status === "brief");

  if (catalog.length !== 50) errors.push(`Expected 50 opportunities; found ${catalog.length}.`);
  if (published.length !== 50) errors.push(`Expected 50 published articles; found ${published.length}.`);
  if (briefs.length !== 0) errors.push(`Expected no briefs; found ${briefs.length}.`);

  for (const field of ["slug", "title", "metaTitle", "metaDescription"]) {
    const values = catalog.map((item) => item[field]).filter(Boolean);
    if (new Set(values).size !== values.length) errors.push(`${field} values must be unique.`);
  }

  for (const item of catalog) {
    for (const field of required) if (!item[field]) errors.push(`${item.slug ?? item.id}: missing ${field}.`);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug ?? "")) errors.push(`${item.id}: invalid slug.`);
    if (!Array.isArray(item.secondaryKeywords) || item.secondaryKeywords.length < 2) errors.push(`${item.slug}: needs two secondary keywords.`);
    if (!["Claire from Venmail", "Ada from Venmail"].includes(item.author)) errors.push(`${item.slug}: invalid public author.`);
    if (!item.plainAnswer || item.plainAnswer.length < 80) errors.push(`${item.slug}: needs a plain-English answer.`);
    if (!Array.isArray(item.painPoints) || item.painPoints.length < 3) errors.push(`${item.slug}: needs three reader pain points.`);
    if (!Array.isArray(item.targetCountries) || item.targetCountries.length < 2) errors.push(`${item.slug}: needs target-country context.`);
    if (!Array.isArray(item.regionalConsiderations) || item.regionalConsiderations.length < 1) errors.push(`${item.slug}: needs a regional consideration.`);
    if (!Array.isArray(item.internalLinks) || item.internalLinks.length < 2) errors.push(`${item.slug}: needs two internal links.`);
    if (!item.cta?.label || !item.cta?.href) errors.push(`${item.slug}: missing CTA.`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(item.publishedAt ?? "") || !/^\d{4}-\d{2}-\d{2}$/.test(item.updatedAt ?? "")) errors.push(`${item.slug}: invalid dates.`);
  }

  for (const item of published) {
    if ((item.sources ?? []).length < 2) errors.push(`${item.slug}: needs two resolvable sources.`);
    if (!Array.isArray(item.alternatives) || item.alternatives.length < 1) errors.push(`${item.slug}: needs honest alternatives.`);
    if (!Array.isArray(item.originalValue) || item.originalValue.length < 2) errors.push(`${item.slug}: needs two original-value elements.`);
    if (!Array.isArray(item.body) || item.body.length < 5) errors.push(`${item.slug}: needs at least five content blocks.`);
  }

  for (let i = 0; i < published.length; i += 1) {
    for (let j = i + 1; j < published.length; j += 1) {
      if (similarity(published[i], published[j]) >= 0.75) errors.push(`${published[i].slug} is too similar to ${published[j].slug}.`);
    }
  }

  return errors;
}
