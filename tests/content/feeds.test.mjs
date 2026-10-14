import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import { getPublishedArticles } from "../../src/data/content/catalog.mjs";
import { buildRss, buildSitemap } from "../../scripts/generate-content-feeds.mjs";

const legacyPageRoutes = (await readFile(new URL("../fixtures/legacy-page-routes-2ce872d.txt", import.meta.url), "utf8"))
  .trim()
  .split(/\r?\n/);
const legacyArticleRoutes = (await readFile(new URL("../fixtures/legacy-article-routes-2ce872d.txt", import.meta.url), "utf8"))
  .trim()
  .split(/\r?\n/);
const alternateHomepageRoutes = new Set(["/cinematic", "/index-cinematic"]);

test("sitemap includes all and only published article routes", () => {
  const articles = getPublishedArticles();
  const xml = buildSitemap(articles);
  const articleUrls = [...xml.matchAll(/<loc>(https:\/\/venmail\.io\/blog\/[a-z0-9-]+)<\/loc>/g)].map((match) => match[1]);
  assert.equal(articleUrls.length, articles.length);
  assert.deepEqual(new Set(articleUrls), new Set(articles.map((article) => article.canonicalUrl)));
  for (const route of legacyArticleRoutes) {
    assert.ok(articleUrls.includes(`https://venmail.io${route}`), `${route} remains published`);
  }
  assert.ok(xml.includes("<loc>https://venmail.io/blog</loc>"));
  assert.ok(xml.includes("migrate-zoho-mail-to-new-provider"));
  for (const article of articles) assert.ok(xml.includes(`<lastmod>${article.updatedAt}</lastmod>`));
});

test("sitemap preserves every indexable page route from the pre-redesign export", () => {
  const xml = buildSitemap(getPublishedArticles());
  const sitemapRoutes = new Set(
    [...xml.matchAll(/<loc>https:\/\/venmail\.io(\/[^<]*)<\/loc>/g)]
      .map((match) => match[1]),
  );

  for (const route of legacyPageRoutes) {
    if (!alternateHomepageRoutes.has(route)) {
      assert.ok(sitemapRoutes.has(route), `${route} remains discoverable in the sitemap`);
    }
  }
});

test("sitemap includes the public AI inbox agents route", () => {
  const xml = buildSitemap(getPublishedArticles());

  assert.ok(xml.includes("<loc>https://venmail.io/ai-inbox-agents</loc>"));
});

test("RSS emits one escaped item per published article", () => {
  const articles = getPublishedArticles();
  const xml = buildRss(articles);
  assert.equal((xml.match(/<item>/g) ?? []).length, articles.length);
  assert.equal((xml.match(/<guid isPermaLink="true">/g) ?? []).length, articles.length);
  assert.ok(xml.includes("&amp;"));
  assert.ok(xml.includes("migrate-zoho-mail-to-new-provider"));
});
