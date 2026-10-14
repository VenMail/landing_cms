# Mobile Artwork Composition Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the human on-the-go artwork visible alongside the real mobile product captures.

**Architecture:** Adjust the existing `MobileAppsSection` layout only. Preserve the existing captures, art asset, copy, links, and section order; assert the visual layers remain in the component contract.

**Tech Stack:** Next.js, React, Tailwind CSS, Node test runner, Playwright visual checks.

---

### Task 1: Recompose the mobile-apps visual

**Files:**
- Modify: `src/components/PageSections/MobileAppsSection.jsx`
- Modify: `tests/tools/homepage-mail-first.test.mjs`

- [ ] **Step 1: Write the failing layout contract**

```js
assert.match(mobileApps, /venmail-mobile-on-the-go-illustration\.webp/);
assert.match(mobileApps, /object-left-bottom/);
assert.match(mobileApps, /left-\[35%\].*w-\[38%\]/s);
assert.match(mobileApps, /right-\[-2%\].*w-\[52%\]/s);
```

- [ ] **Step 2: Run the focused test**

Run: `node --test tests/tools/homepage-mail-first.test.mjs`

Expected: FAIL until the frame sizes and positions expose the illustration.

- [ ] **Step 3: Implement the composition**

Reduce and shift the secondary capture right beside the primary capture, leaving the transit scene visible at the left. Move the primary capture slightly beyond the right edge while retaining its readable size. Keep both frames above the illustration and preserve the mint/lilac shapes and overflow boundary.

- [ ] **Step 4: Verify responsive visual behavior**

Run the local app and inspect `#mobile-apps` at 1440px and 390px. Confirm the person/plant is visible, both captures are intact, and document scroll width equals client width at 390px.

- [ ] **Step 5: Run release checks and commit**

Run: `npm run test:content && npm run test:tools && npm run build && node scripts/verify-landing-export.mjs && git diff --check`

Expected: all commands exit 0.

```bash
git add src/components/PageSections/MobileAppsSection.jsx tests/tools/homepage-mail-first.test.mjs
git commit -m "fix: rebalance mobile apps artwork"
```

### Task 2: Deploy and verify

- [ ] **Step 1: Push, create and merge the release PR**

Use the established GitHub-to-Cloudflare release path. Do not use Vercel for production.

- [ ] **Step 2: Verify production**

Confirm `https://venmail.io/` returns 200, contains the human-touch asset, preserves the App Store and Google Play links, and renders Mobile apps after Work beyond email.
