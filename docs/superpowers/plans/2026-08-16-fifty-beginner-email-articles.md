# Fifty Beginner-Friendly Email Articles Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish all 50 researched Venmail opportunities as clear, sourced, beginner-friendly articles with demographic context, approved bylines, hidden visual dates, and complete search/AI discovery metadata.

**Architecture:** Keep `opportunities.mjs` as the metadata source of truth and expand the body registry from ten to fifty complete article bodies. Use a focused beginner-article builder with forty topic-specific profiles so presentation structure is consistent while answers, scenarios, steps, pain points, comparisons, and regional context remain unique. The catalog validator, static routes, sitemap, and RSS all derive from the same 50-record catalog.

**Tech Stack:** Next.js 15 Pages Router, React 19, JavaScript/ES modules, Tailwind CSS, Node built-in test runner, static export.

---

## File Map

- Modify `src/data/content/opportunities.mjs`: mark all 50 records published; add target demographics, pain points, countries, approved author allocation, and beginner language fields.
- Create `src/data/content/articles/beginnerArticleBuilder.mjs`: pure renderer for the 40 expanded topic profiles.
- Create `src/data/content/articles/expandedProfiles.mjs`: 40 topic-specific plain answers, scenarios, steps, checks, option guidance, and regional notes.
- Modify `src/data/content/articles/index.mjs`: register generated bodies alongside the original ten hand-written bodies.
- Modify the original ten `src/data/content/articles/*.mjs`: simplify jargon and add direct-answer/reader-scenario blocks where needed.
- Modify `src/data/content/validate.mjs`: enforce 50/50/0 counts, approved authors, audience context, body completeness, source integrity, uniqueness, and readable copy.
- Modify `src/components/blog/ArticleCard.jsx`: remove visible dates.
- Modify `src/components/blog/ArticlePage.jsx`: remove visible dates and show beginner audience/pain context without exposing metadata dates.
- Modify `src/pages/blog.jsx`: remove “ten complete / forty briefs” copy and render all 50 published records.
- Modify `tests/content/catalog.test.mjs`: enforce the expanded editorial contract.
- Modify `tests/content/feeds.test.mjs`: require 50 sitemap and RSS article entries.
- Regenerate `public/sitemap.xml` and `public/rss.xml`.

### Task 1: Establish the 50-article contract

**Files:**
- Modify: `tests/content/catalog.test.mjs`
- Modify: `tests/content/feeds.test.mjs`

- [ ] **Step 1: Replace the old count assertions with the expanded contract**

```js
assert.equal(getAllOpportunities().length, 50);
assert.equal(getPublishedArticles().length, 50);
assert.equal(getAllOpportunities().filter((item) => item.status === "brief").length, 0);
```

Add assertions that every article has an approved author, `targetCountries`, `painPoints`, `plainAnswer`, at least two sources, at least six body blocks, and no unresolved body.

- [ ] **Step 2: Add visible-date and feed parity assertions**

Read `ArticleCard.jsx` and `ArticlePage.jsx` in the test and assert that neither renders `article.updatedAt`, `article.publishedAt`, `formatDate`, or a visible `<time>`. Update feed expectations to exactly 50 article URLs and 50 RSS `<item>` entries.

- [ ] **Step 3: Run the tests and verify RED**

Run: `npm run test:content`

Expected: FAIL because only ten bodies/routes exist, forty records remain briefs, old bylines are present, and feed counts are ten.

- [ ] **Step 4: Commit the failing contract**

```bash
git add tests/content/catalog.test.mjs tests/content/feeds.test.mjs
git commit -m "test: require fifty beginner email articles"
```

### Task 2: Expand metadata for beginner readers and target countries

**Files:**
- Modify: `src/data/content/opportunities.mjs`
- Modify: `src/data/content/validate.mjs`

- [ ] **Step 1: Add cluster-level audience profiles**

Define cluster guidance with concrete demographics and regions, for example:

```js
audience: "Small-business owners and the person responsible for company email",
targetCountries: ["Nigeria", "United Kingdom", "United States", "Canada", "India"],
regionalConsiderations: [
  "Limited access to a full-time email administrator",
  "Budget sensitivity and local payment planning",
  "Domains commonly managed separately from mailbox hosting",
],
```

Use country context only where the topic creates a real operational consideration.

- [ ] **Step 2: Publish every record and allocate approved authors**

Set every record to `published`. Allocate authors deterministically so adjacent articles alternate:

```js
author: numericId % 2 === 0 ? "Ada from Venmail" : "Claire from Venmail",
```

Add `plainAnswer`, `painPoints`, `targetCountries`, and `regionalConsiderations` to each joined record.

- [ ] **Step 3: Expand validation**

Require 50 published, zero briefs, one of the two approved authors, three pain points, two target countries, one regional consideration, at least two resolvable sources, and a non-empty plain answer. Retain slug/meta uniqueness and body similarity checks.

- [ ] **Step 4: Run tests**

Run: `npm run test:content`

Expected: metadata assertions PASS; body and feed assertions still FAIL for the forty expanded topics.

- [ ] **Step 5: Commit metadata**

```bash
git add src/data/content/opportunities.mjs src/data/content/validate.mjs
git commit -m "feat: add beginner audience context"
```

### Task 3: Write the remaining 40 complete article bodies

**Files:**
- Create: `src/data/content/articles/beginnerArticleBuilder.mjs`
- Create: `src/data/content/articles/expandedProfiles.mjs`
- Modify: `src/data/content/articles/index.mjs`

- [ ] **Step 1: Implement a strict beginner-article builder**

The builder accepts only complete topic-specific profiles and emits semantic blocks:

```js
export function buildBeginnerArticle(profile) {
  return Object.freeze([
    { type: "paragraph", text: profile.plainAnswer, sourceIds: profile.sourceIds },
    { type: "callout", tone: "plain", title: "A situation you may recognise", text: profile.scenario },
    { type: "heading", level: 2, id: "what-to-do", text: profile.actionHeading },
    { type: "steps", title: profile.stepsTitle, items: profile.steps },
    { type: "table", caption: profile.table.caption, headers: profile.table.headers, rows: profile.table.rows },
    { type: "checklist", title: profile.checklistTitle, items: profile.checklist },
    { type: "callout", tone: "warning", title: "When another option is better", text: profile.nonFit },
    { type: "paragraph", text: profile.regionalNote },
  ]);
}
```

Throw a descriptive error when a profile lacks a required field so incomplete copy cannot build.

- [ ] **Step 2: Write 20 migration/comparison profiles**

Create unique profiles for the four unpublished topics in each of the Cloudflare, provider migration, mailbox/web-host migration, provider alternatives, and Amazon SES clusters. Each profile must contain a direct answer, reader situation, at least four specific steps, a useful three-row decision table, five-item checklist, non-fit case, regional note, and official source IDs.

- [ ] **Step 3: Write 20 troubleshooting/agency/automation profiles**

Create equivalent unique profiles for the four unpublished topics in each of the transactional, deliverability, WordPress/commerce, automation, and agency clusters. Use examples understandable to founders, shop owners, operations staff, developers, and agency administrators rather than unexplained protocol language.

- [ ] **Step 4: Register all profiles**

Build a frozen object from profile slug to body and merge it with the original ten registry entries. Assert there are no duplicate keys and all 50 published slugs resolve to bodies.

- [ ] **Step 5: Run tests and commit**

Run: `npm run test:content`

Expected: catalog/body tests PASS; feed count tests FAIL until regeneration.

```bash
git add src/data/content/articles
git commit -m "feat: add forty beginner email guides"
```

### Task 4: Simplify the original ten and remove visible dates

**Files:**
- Modify: `src/data/content/articles/*.mjs`
- Modify: `src/components/blog/ArticleCard.jsx`
- Modify: `src/components/blog/ArticlePage.jsx`
- Modify: `src/pages/blog.jsx`

- [ ] **Step 1: Add direct answers and relatable situations to the original ten**

For each original article, ensure the first paragraph answers the title in plain language, spell out technical acronyms on first use, and add a scenario tied to a named reader pain point. Keep technical tables as optional depth after the explanation.

- [ ] **Step 2: Remove visible dates**

Delete date rendering from cards and article headers. Keep `publishedAt` and `updatedAt` in Head JSON-LD, sitemap, and RSS only.

- [ ] **Step 3: Update blog index copy**

Replace the old ten/forty wording with copy that presents 50 practical guides. Keep topic filtering progressive and all 50 cards in the static HTML.

- [ ] **Step 4: Run tests and build**

Run: `npm run test:content && npm run build`

Expected: 50 static article routes; no visible article date markup.

- [ ] **Step 5: Commit UI and copy**

```bash
git add src/data/content/articles src/components/blog src/pages/blog.jsx
git commit -m "feat: make email guides beginner friendly"
```

### Task 5: Regenerate discovery feeds and verify all public routes

**Files:**
- Modify: `public/sitemap.xml`
- Modify: `public/rss.xml`
- Test: `tests/content/feeds.test.mjs`

- [ ] **Step 1: Generate feeds**

Run: `npm run generate:feeds`

Expected: output states 50 published articles.

- [ ] **Step 2: Run feed tests**

Run: `npm run test:content`

Expected: sitemap has exactly 50 article URLs, RSS has exactly 50 items, and no slug is missing.

- [ ] **Step 3: Commit feeds**

```bash
git add public/sitemap.xml public/rss.xml tests/content/feeds.test.mjs
git commit -m "feat: publish fifty articles in discovery feeds"
```

### Task 6: Final quality, deployment, and live verification

**Files:**
- Review all files changed by Tasks 1–5.

- [ ] **Step 1: Run the full gate**

```bash
npm run test:content
npm run validate:content
npm run build
git diff --check
```

Expected: zero failures; validator reports 50 published articles and zero briefs; static build exports 50 article pages.

- [ ] **Step 2: Inspect static output**

Count 50 files under `out/blog`, verify canonical and Article JSON-LD on every file, confirm no visible `<time>` element, and confirm sitemap/RSS parity.

- [ ] **Step 3: Editorial spot-check all clusters**

Check every article for copied provider substitutions, unexplained jargon, decorative country mentions, unsupported claims, missing non-fit guidance, repetitive introductions, and any author outside the approved pair.

- [ ] **Step 4: Merge and deploy**

Fast-forward the isolated branch into `main`, preserving unrelated dirty files. Push `main` to trigger `.github/workflows/deploy.yml`, watch the Cloudflare R2 workflow to completion, and verify `/blog`, representative new article routes, sitemap, and RSS live.
