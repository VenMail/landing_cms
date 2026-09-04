import test from "node:test";
import assert from "node:assert/strict";

import { getPublishedArticles } from "../../src/data/content/catalog.mjs";
import { buildRss, buildSitemap } from "../../scripts/generate-content-feeds.mjs";

test("sitemap includes all and only published article routes", () => {
  const articles = getPublishedArticles();
  const xml = buildSitemap(articles);
  const articleUrls = [...xml.matchAll(/<loc>(https:\/\/venmail\.io\/blog\/[a-z0-9-]+)<\/loc>/g)].map((match) => match[1]);
  assert.equal(articleUrls.length, articles.length);
  assert.deepEqual(new Set(articleUrls), new Set(articles.map((article) => article.canonicalUrl)));
  assert.ok(xml.includes("<loc>https://venmail.io/blog</loc>"));
  assert.ok(xml.includes("migrate-zoho-mail-to-new-provider"));
  for (const article of articles) assert.ok(xml.includes(`<lastmod>${article.updatedAt}</lastmod>`));
});

test("RSS emits one escaped item per published article", () => {
  const articles = getPublishedArticles();
  const xml = buildRss(articles);
  assert.equal((xml.match(/<item>/g) ?? []).length, articles.length);
  assert.equal((xml.match(/<guid isPermaLink="true">/g) ?? []).length, articles.length);
  assert.ok(xml.includes("&amp;"));
  assert.ok(xml.includes("migrate-zoho-mail-to-new-provider"));
});
