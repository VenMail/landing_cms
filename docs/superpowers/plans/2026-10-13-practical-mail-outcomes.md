# Practical Mail Outcomes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reframe the homepage around inbox placement strategy, estimated open counts, reviewable follow-up drafts, and common business-email purposes.

**Architecture:** Keep the existing single-page structure and authentic product image. Replace the delivery-section data and presentation in `src/pages/index.jsx`, add a compact use-case band immediately after it, and align homepage SEO and existing copy-contract assertions.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS, Node test runner

---

### Task 1: Update homepage copy contracts

**Files:**
- Modify: `tests/tools/homepage-mail-first.test.mjs`

- [ ] Replace assertions for the superseded diagnostic-led copy with the approved outcome and use-case copy.
- [ ] Keep the authentic-image, CTA, pricing, API, navigation, FAQ, and unsupported-claim assertions unchanged.
- [ ] Run `node --test tests/tools/homepage-mail-first.test.mjs` and confirm the changed assertions fail before implementation.

### Task 2: Implement the approved homepage hierarchy

**Files:**
- Modify: `src/pages/index.jsx`
- Modify: `src/components/SeoDefaults.jsx`

- [ ] Replace the hero support sentence verbatim.
- [ ] Replace the diagnostic-led delivery section with the approved headline and three outcome rows, including the open-count privacy condition.
- [ ] Add the approved quotes, invoices, and customer-questions band immediately after the outcome rows.
- [ ] Simplify incoming filtering and helpdesk copy verbatim while preserving the remaining API, suite, pricing, signup, and FAQ hierarchy.
- [ ] Use the hero support sentence as the homepage SEO description.

### Task 3: Verify and inspect

**Files:**
- Verify: `src/pages/index.jsx`
- Verify: `src/components/SeoDefaults.jsx`
- Verify: `tests/tools/homepage-mail-first.test.mjs`

- [ ] Run the existing Node test suites and export verifier.
- [ ] Run `npm run build`, teeing output to `C:\Users\Son\.codex\tmp\mail-first-build.log`.
- [ ] Revert only generated feed noise from the build, if present.
- [ ] Inspect the final diff for approved copy, unchanged links and prices, and absence of unsupported delivery claims.
