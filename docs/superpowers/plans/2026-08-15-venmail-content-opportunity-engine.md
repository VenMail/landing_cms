# Venmail Content Opportunity Engine Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static-export-compatible Venmail content engine containing 50 evidence-backed SEO opportunities, ten complete launch articles, forty non-public editorial briefs, crawler discovery assets, and intent-matched lead capture.

**Architecture:** Store opportunity metadata and article bodies in focused ES modules, join and validate them through a pure catalog API, and render only completed articles through Next.js static routes. Generate the sitemap and RSS feed from the same catalog during `prebuild`, while a Node test suite enforces opportunity counts, editorial quality fields, source integrity, uniqueness, and public-route eligibility.

**Tech Stack:** Next.js 15 Pages Router, React 19, JavaScript/ES modules, Tailwind CSS, Node's built-in test runner, static export.

---

## File Map

- Create `src/data/content/opportunities.mjs`: exactly 50 researched opportunity records and measured server metrics.
- Create `src/data/content/sources.mjs`: reusable authoritative source definitions.
- Create `src/data/content/articles/*.mjs`: one focused body module for each of ten launch articles.
- Create `src/data/content/articles/index.mjs`: article-body registry.
- Create `src/data/content/catalog.mjs`: joins metadata and bodies and exposes catalog queries.
- Create `src/data/content/validate.mjs`: pure validation and similarity checks.
- Create `src/components/blog/ContentBlocks.jsx`: semantic renderer for paragraphs, lists, steps, callouts, tables, and checklists.
- Create `src/components/blog/ArticleCard.jsx`: accessible blog card.
- Create `src/components/blog/ArticlePage.jsx`: shared article layout, disclosures, sources, internal links, and CTA.
- Modify `src/pages/blog.jsx`: render the catalog-driven published index.
- Create `src/pages/blog/[slug].jsx`: static article routes.
- Create `scripts/generate-content-feeds.mjs`: generate sitemap and RSS from the catalog.
- Create `scripts/validate-content.mjs`: CLI wrapper for build-time validation.
- Create `tests/content/catalog.test.mjs`: catalog and editorial-contract tests.
- Create `tests/content/feeds.test.mjs`: sitemap/RSS generator tests.
- Modify `public/robots.txt`: explicit crawler policy and feed discovery.
- Modify `package.json`: content test, validation, feed, and prebuild scripts.

### Task 1: Establish the test-first catalog contract

**Files:**
- Create: `tests/content/catalog.test.mjs`
- Create: `src/data/content/catalog.mjs`
- Create: `src/data/content/validate.mjs`
- Create: `src/data/content/opportunities.mjs` as an empty catalog stub
- Create: `src/data/content/articles/index.mjs` as an empty body-registry stub
- Modify: `package.json`

- [ ] **Step 1: Add the failing catalog contract test**

Create `tests/content/catalog.test.mjs` with tests that import `getAllOpportunities`, `getPublishedArticles`, `getArticleBySlug`, and `validateCatalog`, then assert:

```js
assert.equal(getAllOpportunities().length, 50);
assert.equal(getPublishedArticles().length, 10);
assert.equal(getAllOpportunities().filter((item) => item.status === "brief").length, 40);
assert.equal(new Set(getAllOpportunities().map((item) => item.slug)).size, 50);
assert.equal(validateCatalog().length, 0);
assert.equal(getArticleBySlug("cloudflare-email-hosting-vs-email-routing").status, "published");
assert.equal(getArticleBySlug("migrate-zoho-mail-to-new-provider"), null);
```

Add individual assertions that every published record contains an author, reviewer, at least two authoritative sources, a non-empty `nonFit`, an `originalValue` array, at least five body sections, a CTA, a canonical URL, and JSON-LD-compatible dates.

- [ ] **Step 2: Add the Node test script and verify RED**

Add to `package.json`:

```json
"test:content": "node --test tests/content/catalog.test.mjs",
"validate:content": "node scripts/validate-content.mjs"
```

Run: `npm run test:content`

Expected: FAIL because the content catalog modules do not exist.

- [ ] **Step 3: Implement the minimal catalog and validation API**

Create empty `opportunities` and `articleBodies` exports, then create `src/data/content/catalog.mjs` to join opportunity metadata to the article-body registry by slug. Export immutable results from:

```js
export function getAllOpportunities() { return opportunities.map(joinArticle); }
export function getPublishedArticles() { return getAllOpportunities().filter((item) => item.status === "published"); }
export function getArticleBySlug(slug) { return getPublishedArticles().find((item) => item.slug === slug) ?? null; }
```

Create `src/data/content/validate.mjs` with pure validators for required fields, slug uniqueness, title/meta uniqueness, source count, alternatives and non-fit disclosure, body structure, CTA fields, date format, 50/10/40 counts, and pairwise token-set similarity under `0.75` for published article bodies.

- [ ] **Step 4: Run the test and confirm it now fails only for missing data**

Run: `npm run test:content`

Expected: FAIL with count assertions reporting zero opportunities and zero published articles.

- [ ] **Step 5: Commit the catalog contract**

```bash
git add package.json tests/content/catalog.test.mjs src/data/content/catalog.mjs src/data/content/validate.mjs src/data/content/opportunities.mjs src/data/content/articles/index.mjs
git commit -m "test: define content catalog contract"
```

### Task 2: Add authoritative sources and all 50 opportunity records

**Files:**
- Create: `src/data/content/sources.mjs`
- Create: `src/data/content/opportunities.mjs`
- Test: `tests/content/catalog.test.mjs`

- [ ] **Step 1: Extend the failing test for measured opportunity retention**

Assert exact server values for `email-deliverability-services`, `amazon-ses-alternatives`, `free-mailgun-alternatives`, `white-label-email-marketing-platforms`, `email-to-webhook-architecture`, and `wordpress-not-sending-email`, including source opportunity ID, volume, CPC, and difficulty.

Run: `npm run test:content`

Expected: FAIL because the opportunity records are absent.

- [ ] **Step 2: Create the authoritative source registry**

Add stable records for Cloudflare DNS and Email Routing, AWS SES sending and credentials, Google Workspace migration, Microsoft 365 migration, Yandex IMAP/CardDAV, Google Search people-first and generative-content guidance, OpenAI crawlers, Bing sitemap/IndexNow guidance, DMARC, SPF, DKIM, WordPress mail behavior, and official provider pricing/product pages.

Every source record must contain `id`, `publisher`, `title`, `url`, `accessedAt`, and `kind`. Prefer official documentation; use independent analysis only where the provider cannot substantiate a comparison claim.

- [ ] **Step 3: Create exactly 50 opportunity records**

Implement the ten five-topic clusters from the approved design. Every record must include:

```js
{
  id, slug, status, cluster, category, primaryKeyword, secondaryKeywords,
  serverOpportunityId, metrics: { volume, cpc, difficulty },
  intent, funnelStage, reader, problem, title, excerpt, metaTitle,
  metaDescription, evidenceSourceIds, alternatives, venmailFit, nonFit,
  originalValue, outline, questions, cta, internalLinks, author,
  reviewer, publishedAt, updatedAt
}
```

Use `null`, never invented numbers, for newly researched terms without measured metrics. Set the ten approved launch slugs to `published` and the remaining forty to `brief`.

- [ ] **Step 4: Run tests and verify the metadata layer is green except for bodies**

Run: `npm run test:content`

Expected: count, uniqueness, and metric tests PASS; published-body requirements FAIL for the ten launch slugs.

- [ ] **Step 5: Commit the opportunity catalog**

```bash
git add src/data/content/sources.mjs src/data/content/opportunities.mjs tests/content/catalog.test.mjs
git commit -m "feat: add researched content opportunities"
```

### Task 3: Write ten evidence-backed launch articles

**Files:**
- Create: `src/data/content/articles/cloudflare-email-hosting-vs-email-routing.mjs`
- Create: `src/data/content/articles/switch-email-provider-keep-same-address.mjs`
- Create: `src/data/content/articles/migrate-cpanel-email-to-new-host.mjs`
- Create: `src/data/content/articles/google-workspace-alternatives-email-only.mjs`
- Create: `src/data/content/articles/amazon-ses-alternatives.mjs`
- Create: `src/data/content/articles/use-venmail-with-your-amazon-ses-account.mjs`
- Create: `src/data/content/articles/free-mailgun-alternatives.mjs`
- Create: `src/data/content/articles/email-deliverability-services.mjs`
- Create: `src/data/content/articles/wordpress-not-sending-email.mjs`
- Create: `src/data/content/articles/white-label-email-marketing-platforms.mjs`
- Create: `src/data/content/articles/index.mjs`
- Test: `tests/content/catalog.test.mjs`

- [ ] **Step 1: Add failing editorial-structure tests**

For each launch slug, assert its required practical element and provider coverage:

- Cloudflare article: routing/hosting decision table and DNS record map.
- Provider-switch article: preflight, cutover, rollback, and post-cutover checklist.
- cPanel article: inventory, IMAP copy, DNS cutover, device reconfiguration, rollback.
- Workspace alternatives: Google Workspace, Microsoft 365, Zoho, Fastmail, Proton, and Venmail matrix.
- SES alternatives: SES, SendGrid, Mailgun, Postmark, and Venmail fit matrix.
- BYO SES article: IAM/API credentials, region, sandbox, identity verification, DKIM, MAIL FROM, and test sequence.
- Mailgun alternatives: Mailgun, SES, SendGrid, Postmark, and Venmail comparison.
- Deliverability services: platform, consultant, agency, and in-house decision model.
- WordPress article: host mail, SMTP plugin, DNS authentication, form, queue, and logging diagnostics.
- White-label article: tenancy, branding, deliverability ownership, storage, billing, migration, and administration matrix.

Run: `npm run test:content`

Expected: FAIL because article bodies and practical blocks are missing.

- [ ] **Step 2: Write the Cloudflare, switching, and cPanel migration articles**

Use structured blocks with `type` values `paragraph`, `heading`, `list`, `steps`, `checklist`, `callout`, and `table`. Cite official Cloudflare and provider documentation inline by source ID. Include explicit rollback guidance and distinguish DNS management from mailbox hosting.

- [ ] **Step 3: Write the Workspace, SES alternatives, and BYO SES articles**

Use equal comparison dimensions: mailbox capability, office suite, inbound receiving, outbound delivery, migration tooling, admin model, pricing basis, and best fit. Explain that SES is sending infrastructure rather than a complete collaborative mailbox. For BYO SES, state only verified Venmail capabilities and retain the product-verification disclaimer for broader outbound paths.

- [ ] **Step 4: Write the Mailgun, deliverability, WordPress, and white-label articles**

Include reproducible diagnostics, decision tables, non-fit cases, official sources, and one useful operational artifact per article. Avoid generic introductions and repeated provider descriptions.

- [ ] **Step 5: Register all body modules and run GREEN verification**

Export a frozen `articleBodies` object keyed by slug from `articles/index.mjs`.

Run: `npm run test:content`

Expected: all catalog tests PASS with exactly 10 published articles and 40 briefs.

- [ ] **Step 6: Commit the launch content**

```bash
git add src/data/content/articles tests/content/catalog.test.mjs
git commit -m "feat: add evidence-backed launch articles"
```

### Task 4: Build semantic blog and article rendering

**Files:**
- Create: `src/components/blog/ContentBlocks.jsx`
- Create: `src/components/blog/ArticleCard.jsx`
- Create: `src/components/blog/ArticlePage.jsx`
- Modify: `src/pages/blog.jsx`
- Create: `src/pages/blog/[slug].jsx`
- Test: `tests/content/catalog.test.mjs`

- [ ] **Step 1: Add failing route and rendering-contract tests**

Assert every published slug has a canonical path `/blog/<slug>`, valid Article JSON-LD inputs, at least two internal links, and CTA label/href. Assert briefs are absent from `getPublishedArticles()` and `getArticleBySlug()`.

Run: `npm run test:content`

Expected: FAIL until canonical and rendering helpers exist.

- [ ] **Step 2: Implement content block rendering**

Render only known block types. Tables must use captions and header cells; ordered steps must use `<ol>`; checklists must remain readable without JavaScript; source references must render as normal outbound links with publisher and title.

- [ ] **Step 3: Replace the hard-coded blog index**

Render only the ten published articles, support cluster filtering without hiding content from the server-rendered HTML, and keep the primary CTA visually restrained. Remove fictional authors and stale 2023/2024 dates.

- [ ] **Step 4: Add the static article route**

Implement `getStaticPaths` from published slugs with `fallback: false`, `getStaticProps` from `getArticleBySlug`, canonical/Open Graph/Twitter metadata, Article and Breadcrumb JSON-LD, visible byline/reviewer/source disclosure, related articles, and the intent-matched CTA.

- [ ] **Step 5: Run tests and a production build**

Run: `npm run test:content && npm run build`

Expected: tests PASS and static export includes ten `/blog/<slug>/index.html` files.

- [ ] **Step 6: Commit rendering**

```bash
git add src/components/blog src/pages/blog.jsx src/pages/blog/[slug].jsx tests/content/catalog.test.mjs
git commit -m "feat: render static content hub"
```

### Task 5: Generate sitemap, RSS, and crawler controls

**Files:**
- Create: `tests/content/feeds.test.mjs`
- Create: `scripts/generate-content-feeds.mjs`
- Create: `scripts/validate-content.mjs`
- Modify: `package.json`
- Modify: `public/robots.txt`
- Modify: `public/sitemap.xml` through the generator
- Create: `public/rss.xml` through the generator

- [ ] **Step 1: Write failing feed tests**

Test pure `buildSitemap` and `buildRss` functions. Assert exactly ten article URLs, correct escaped XML, canonical `https://venmail.io/blog/<slug>`, accurate `lastmod`, no brief URLs, and an RSS item for each published article.

Run: `npm run test:content`

Expected: FAIL because the generator does not exist.

- [ ] **Step 2: Implement the pure XML builders and file-writing CLI**

Export `buildSitemap(catalog)` and `buildRss(catalog)`. Only the CLI entry point may write `public/sitemap.xml` and `public/rss.xml`. Preserve valid existing public routes, add `/blog`, and include the ten published article routes.

- [ ] **Step 3: Implement the validation CLI and build integration**

Add scripts:

```json
"test:content": "node --test tests/content/catalog.test.mjs tests/content/feeds.test.mjs",
"generate:feeds": "node scripts/generate-content-feeds.mjs",
"prebuild": "npm run validate:content && npm run generate:feeds"
```

The validator prints every catalog error and exits non-zero when any error exists.

- [ ] **Step 4: Update crawler policy**

Keep general crawl access, explicitly allow `OAI-SearchBot`, retain a documented independent policy for `GPTBot`, remove the unsupported global crawl delay, and expose both sitemap and RSS URLs.

- [ ] **Step 5: Run RED/GREEN verification and commit**

Run: `npm run test:content && npm run validate:content && npm run generate:feeds`

Expected: all commands exit 0; sitemap and RSS contain ten article entries and no briefs.

```bash
git add tests/content/feeds.test.mjs scripts package.json public/robots.txt public/sitemap.xml public/rss.xml
git commit -m "feat: add content discovery feeds"
```

### Task 6: Final quality and build verification

**Files:**
- Review all files changed by Tasks 1-5.

- [ ] **Step 1: Run the complete automated checks**

Run:

```bash
npm run test:content
npm run validate:content
npm run build
git diff --check
```

Expected: all commands exit 0, with 50 opportunities, 10 published articles, 40 briefs, and no whitespace errors.

- [ ] **Step 2: Inspect the static export**

Verify ten article directories exist under `out/blog`, each contains canonical metadata and Article JSON-LD, `out/sitemap.xml` contains every published article, and `out/rss.xml` contains ten items.

- [ ] **Step 3: Run editorial spot checks**

Review all ten articles for unsupported claims, provider-name substitutions, copied phrasing, stale pricing, missing non-fit cases, citation mismatch, and claims that Venmail routes every outbound path through customer-owned SES. Any SES-wide claim must be removed or narrowed unless product verification evidence exists.

- [ ] **Step 4: Review repository scope**

Run `git status --short` and confirm unrelated existing changes to `src/pages/pricing.jsx`, `.vscode/`, Docker/install scripts, and `src/pages/enterprise-west-africa.jsx` were not included in feature commits.

- [ ] **Step 5: Commit any verified quality corrections**

```bash
git add src/data/content src/components/blog src/pages/blog.jsx src/pages/blog/[slug].jsx scripts tests public package.json
git commit -m "fix: complete content quality review"
```

Skip this commit when the quality review produces no changes.
