import test from "node:test";
import assert from "node:assert/strict";
import { getPublishedArticles } from "../../src/data/content/catalog.mjs";

test("each of the eleven seeded opportunities has five to ten published guides", () => {
  const articles = getPublishedArticles();
  for (let id = 1; id <= 11; id++) {
    const matches = articles.filter(article => article.seedOpportunityIds?.includes(id));
    assert.ok(matches.length >= 5 && matches.length <= 10, `Opportunity ${id}: ${matches.length} guides`);
  }
});

test("new utility guides contain worked examples, completion checks and primary sources", () => {
  const articles = getPublishedArticles().filter(a => a.publishedAt === "2026-09-04");
  assert.equal(articles.length, 32);
  for (const article of articles) {
    assert.ok(article.body.some(b => b.type === "steps"), article.slug);
    assert.ok(article.body.some(b => b.type === "table" || b.type === "code" || b.title?.includes("Example")), article.slug);
    assert.ok(article.body.some(b => b.type === "checklist"), article.slug);
    assert.ok(article.sources.some(s => s.publisher === "Venmail"), article.slug);
    assert.ok(article.sources.some(s => s.publisher !== "Venmail"), article.slug);
    assert.match(JSON.stringify(article.body), /free/i);
  }
});
