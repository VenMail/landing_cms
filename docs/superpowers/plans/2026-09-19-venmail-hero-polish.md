# Venmail Hero Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the real Venmail interface the dominant, tightly cropped homepage hero visual and restore the Cloudflare deployment workflow.

**Architecture:** Keep the real product screenshot as a separate foreground asset so it cannot be distorted by image generation. Generate only a new workspace background, then compose the two responsively in `WorkspaceHero.jsx`. Update focused source tests and the obsolete storage-disclosure assertion before releasing through `main`.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS, Node test runner, GitHub Actions, Cloudflare R2

---

### Task 1: Restore the GitHub Actions test gate

**Files:**
- Modify: `tests/content/storage-disclosure.test.mjs`

- [ ] **Step 1: Change the pricing assertion to the approved catalog**

Require `PricingPlans.jsx` to disclose 200 GB pooled storage and customer-provided storage, while keeping region-preference checks on the legal and trust pages that still make those claims.

- [ ] **Step 2: Run the content test to verify the workflow failure is removed**

Run: `npm run test:content`
Expected: 17 passing tests, 0 failures.

### Task 2: Generate the editorial workspace background

**Files:**
- Create: `public/hero/venmail-workspace-v2.png`

- [ ] **Step 1: Generate a laptop-free background**

Use the built-in image generator for a wide, photorealistic modern desk with warm daylight, subtle orange reflections, plants, and architectural depth. Exclude laptops, screens, readable text, logos, and people.

- [ ] **Step 2: Inspect the asset**

Confirm the center remains visually quiet enough for the real Venmail laptop image and that no generated interface or device is present.

### Task 3: Tighten the real product crop

**Files:**
- Modify: `src/components/PageSections/WorkspaceHero.jsx`
- Modify: `tests/tools/landing-offers.test.mjs`

- [ ] **Step 1: Write the failing source regression**

Assert that the hero references `/hero/venmail-workspace-v2.png`, uses the real `/screenshot-full.webp`, applies the close-crop class, and no longer renders the extra simulated screen bezel.

- [ ] **Step 2: Run the focused test and verify it fails**

Run: `node --test tests/tools/landing-offers.test.mjs`
Expected: failure because the v2 background and close-crop treatment are absent.

- [ ] **Step 3: Implement the responsive composition**

Render the generated environment as a decorative background. Render the real screenshot as a large foreground image with a tight crop, subtle highlight, shadow, and responsive positioning; do not wrap it in another laptop bezel.

- [ ] **Step 4: Run the focused test and verify it passes**

Run: `node --test tests/tools/landing-offers.test.mjs`
Expected: all landing-offer tests pass.

### Task 4: Verify and release

**Files:**
- Verify: `.github/workflows/deploy.yml`

- [ ] **Step 1: Run all repository gates**

Run: `npm run test:content && npm run test:tools && npm run build && node scripts/verify-landing-export.mjs`
Expected: every command exits 0.

- [ ] **Step 2: Inspect the local browser**

Confirm the runtime overlay is absent, the real Venmail screenshot is visible, the old Startup pricing copy is absent, and the laptop fills the hero without double framing.

- [ ] **Step 3: Commit and push the follow-up pull request**

Commit the design, generated asset, component, and tests on `codex/pricing-hero-polish`; open and merge a pull request to `main`.

- [ ] **Step 4: Watch the Cloudflare workflow**

Run: `gh run watch <run-id> --repo VenMail/landing_cms --exit-status`
Expected: `Deploy to Cloudflare R2` completes successfully.
