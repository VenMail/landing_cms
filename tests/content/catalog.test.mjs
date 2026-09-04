import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import {
  getAllOpportunities,
  getPublishedArticles,
  getArticleBySlug,
} from "../../src/data/content/catalog.mjs";
import { validateCatalog } from "../../src/data/content/validate.mjs";

test("catalog exposes 82 useful article records", () => {
  const all = getAllOpportunities();
  assert.equal(all.length, 82);
  assert.equal(getPublishedArticles().length, 82);
  assert.equal(all.filter((item) => item.status === "brief").length, 0);
  assert.equal(new Set(all.map((item) => item.slug)).size, 82);
});

test("only completed work is publicly addressable", () => {
  assert.equal(
    getArticleBySlug("cloudflare-email-hosting-vs-email-routing")?.status,
    "published",
  );
  assert.equal(getArticleBySlug("migrate-zoho-mail-to-new-provider")?.status, "published");
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

test("all articles meet the beginner-first editorial contract", () => {
  const approvedAuthors = new Set(["Claire from Venmail", "Ada from Venmail"]);
  for (const article of getPublishedArticles()) {
    assert.ok(approvedAuthors.has(article.author), `${article.slug} has an unapproved author`);
    assert.ok(article.reviewer);
    assert.ok(article.sources.length >= 2);
    assert.ok(article.nonFit);
    assert.ok(article.plainAnswer.length >= 80, `${article.slug} needs a direct answer`);
    assert.ok(article.painPoints.length >= 3, `${article.slug} needs specific pain points`);
    assert.ok(article.targetCountries.length >= 2, `${article.slug} needs country context`);
    assert.ok(article.regionalConsiderations.length >= 1, `${article.slug} needs a real regional consideration`);
    assert.ok(article.originalValue.length >= 2);
    assert.ok(article.body.length >= 6, `${article.slug} needs a complete body`);
    assert.ok(article.cta?.label && article.cta?.href);
    assert.match(article.canonicalUrl, /^https:\/\/venmail\.io\/blog\/[a-z0-9-]+$/);
    assert.match(article.publishedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.match(article.updatedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(article.internalLinks.length >= 2);
  }
});

test("every article is actionable rather than a keyword shell", () => {
  for (const article of getAllOpportunities()) {
    assert.ok(article.outline.length >= 5, `${article.slug} needs a usable outline`);
    assert.ok(article.questions.length >= 3, `${article.slug} needs reader questions`);
    assert.ok(article.originalValue.length >= 2, `${article.slug} needs original artifacts`);
    assert.ok(article.researchTasks.length >= 3, `${article.slug} needs primary research tasks`);
    assert.ok(article.evidenceSourceIds.length >= 2, `${article.slug} needs primary sources`);
    assert.ok(article.alternatives.length >= 2, `${article.slug} needs honest alternatives`);
    assert.ok(article.nonFit.length >= 40, `${article.slug} needs a non-fit case`);
  }
});

test("dates stay in metadata but are not rendered visibly", async () => {
  const card = await readFile(new URL("../../src/components/blog/ArticleCard.jsx", import.meta.url), "utf8");
  const page = await readFile(new URL("../../src/components/blog/ArticlePage.jsx", import.meta.url), "utf8");
  assert.ok(!card.includes("article.updatedAt"));
  assert.ok(!card.includes("article.publishedAt"));
  assert.ok(!page.includes("formatDate"));
  assert.ok(!page.includes("<time"));
  assert.ok(!page.includes("source.accessedAt"));
  assert.ok(page.includes("datePublished: article.publishedAt"));
  assert.ok(page.includes("dateModified: article.updatedAt"));
});

test("article headers do not display reviewer attribution", async () => {
  const page = await readFile(new URL("../../src/components/blog/ArticlePage.jsx", import.meta.url), "utf8");
  assert.ok(!page.includes("Reviewed by"));
  assert.ok(!page.includes("article.reviewer"));
});

test("content validation reports dynamic catalog counts", async () => {
  const script = await readFile(new URL("../../scripts/validate-content.mjs", import.meta.url), "utf8");
  assert.ok(script.includes("getPublishedArticles().length"));
  assert.ok(!script.includes("10 published articles, 40 briefs"));
});

test("launch articles include the practical evidence promised by their titles", () => {
  const requiredCoverage = {
    "cloudflare-email-hosting-vs-email-routing": ["decision table", "MX", "SPF", "DKIM", "DMARC"],
    "switch-email-provider-keep-same-address": ["preflight", "cutover", "rollback", "post-cutover"],
    "migrate-cpanel-email-to-new-host": ["inventory", "IMAP", "DNS cutover", "device", "rollback"],
    "google-workspace-alternatives-email-only": ["Google Workspace", "Microsoft 365", "Zoho", "Fastmail", "Proton", "Venmail"],
    "amazon-ses-alternatives": ["Amazon SES", "SendGrid", "Mailgun", "Postmark", "Venmail"],
    "use-venmail-with-your-amazon-ses-account": ["IAM", "region", "sandbox", "identity", "DKIM", "MAIL FROM", "test"],
    "free-mailgun-alternatives": ["Mailgun", "Amazon SES", "SendGrid", "Postmark", "Venmail"],
    "email-deliverability-services": ["platform", "consultant", "agency", "in-house"],
    "wordpress-not-sending-email": ["host mail", "SMTP plugin", "DNS authentication", "form", "queue", "logging"],
    "white-label-email-marketing-platforms": ["tenancy", "branding", "deliverability", "storage", "billing", "migration", "administration"],
  };

  for (const [slug, phrases] of Object.entries(requiredCoverage)) {
    const articleText = JSON.stringify(getArticleBySlug(slug).body).toLowerCase();
    for (const phrase of phrases) assert.ok(articleText.includes(phrase.toLowerCase()), `${slug} is missing ${phrase}`);
  }
});

test("the validator accepts the completed catalog", () => {
  assert.deepEqual(validateCatalog(), []);
});
