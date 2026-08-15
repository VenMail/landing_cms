import test from "node:test";
import assert from "node:assert/strict";

import {
  getAllOpportunities,
  getPublishedArticles,
  getArticleBySlug,
} from "../../src/data/content/catalog.mjs";
import { validateCatalog } from "../../src/data/content/validate.mjs";

test("catalog exposes exactly 50 useful opportunities", () => {
  const all = getAllOpportunities();
  assert.equal(all.length, 50);
  assert.equal(getPublishedArticles().length, 10);
  assert.equal(all.filter((item) => item.status === "brief").length, 40);
  assert.equal(new Set(all.map((item) => item.slug)).size, 50);
});

test("only completed work is publicly addressable", () => {
  assert.equal(
    getArticleBySlug("cloudflare-email-hosting-vs-email-routing")?.status,
    "published",
  );
  assert.equal(getArticleBySlug("migrate-zoho-mail-to-new-provider"), null);
});

test("measured opportunities retain production research values", () => {
  const expected = {
    "email-deliverability-services": [1, 590, 89.76, 15],
    "amazon-ses-alternatives": [4, 110, 23.68, 0],
    "free-mailgun-alternatives": [4, 20, 56.35, 0],
    "white-label-email-marketing-platforms": [9, 170, 36.6, 3],
    "email-to-webhook-architecture": [6, 70, 21.58, 0],
    "wordpress-not-sending-email": [8, 110, 1.54, 0],
  };

  for (const [slug, [sourceId, volume, cpc, difficulty]] of Object.entries(expected)) {
    const item = getAllOpportunities().find((candidate) => candidate.slug === slug);
    assert.equal(item.serverOpportunityId, sourceId);
    assert.deepEqual(item.metrics, { volume, cpc, difficulty });
  }
});

test("published articles meet the editorial contract", () => {
  for (const article of getPublishedArticles()) {
    assert.ok(article.author);
    assert.ok(article.reviewer);
    assert.ok(article.sources.length >= 2);
    assert.ok(article.nonFit);
    assert.ok(article.originalValue.length >= 2);
    assert.ok(article.body.length >= 5);
    assert.ok(article.cta?.label && article.cta?.href);
    assert.match(article.canonicalUrl, /^https:\/\/venmail\.io\/blog\/[a-z0-9-]+$/);
    assert.match(article.publishedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.match(article.updatedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(article.internalLinks.length >= 2);
  }
});

test("the validator accepts the completed catalog", () => {
  assert.deepEqual(validateCatalog(), []);
});
