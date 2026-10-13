# Homepage Conversion Friction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make signup, pricing, product evidence, and secondary details easier to reach without changing offers or destinations.

**Architecture:** Reorder existing homepage sections, use native links and disclosures, and make the responsive header render one signup path per breakpoint. Preserve the current component boundaries and pricing configuration.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS, Node test runner

---

### Task 1: Update existing contracts

- [ ] Update `tests/tools/homepage-mail-first.test.mjs` for the approved price and activation copy, section order, full-size image link, native payment disclosure, API caveat placement, and responsive header CTAs.
- [ ] Update `scripts/verify-landing-export.mjs` only where exported copy or structure changed.
- [ ] Run the homepage contract test and confirm the revised assertions fail before implementation.

### Task 2: Resolve conversion friction

- [ ] Update `src/components/home/MailFirstHeader.jsx` with one compact mobile signup action and non-overlapping responsive actions.
- [ ] Update `src/pages/index.jsx` with the approved hero conditions, full-size image link, earlier pricing, updated Standard account price, payment disclosure, and API caveat inside its disclosure.
- [ ] Preserve all existing signup destinations, analytics calls, prices, FAQ answers, and secondary sections.

### Task 3: Verify once

- [ ] Run both existing Node suites and the syntax verifier.
- [ ] Run one production build with output logged to `C:\Users\Son\.codex\tmp\mail-first-build.log`.
- [ ] Run the export verifier, restore only generated RSS and sitemap noise, and inspect the final diff.
