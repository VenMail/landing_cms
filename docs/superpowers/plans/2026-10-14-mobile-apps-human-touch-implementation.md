# Mobile Apps Human-Touch Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Place the mobile apps offer after the product-suite section and add a restrained human illustration around the genuine Venmail mobile captures.

**Architecture:** Keep `MobileAppsSection` as the single owner of store links, device captures, and its new decorative asset. The homepage owns section order only. A file-backed source-contract test protects ordering, asset use, accessibility, and the existing verified destinations.

**Tech Stack:** Next.js pages router, React, Tailwind CSS, `next/image`, Node.js test runner, built-in ImageGen, GitHub Actions, Cloudflare R2 and Worker.

---

### Task 1: Define the mobile-apps regression contract

**Files:**
- Modify: `tests/tools/homepage-mail-first.test.mjs:190-224`
- Modify: `src/pages/index.jsx:225-245`
- Modify: `src/components/PageSections/MobileAppsSection.jsx:1-103`

- [ ] **Step 1: Write the failing test**

  Amend the `mobile apps follow AI inbox agents with verified store destinations` test so it reads the homepage and the section source, then assert the new order and the decorative-art contract:

  ```js
  assert.ok(homepage.indexOf('Work beyond email') < homepage.indexOf('<MobileAppsSection />'));
  assert.match(mobileApps, /src="\/images\/venmail-mobile-on-the-go-illustration\.webp"/);
  assert.match(mobileApps, /alt=""/);
  assert.match(mobileApps, /aria-hidden="true"/);
  assert.match(mobileApps, /pointer-events-none/);
  ```

  Keep the existing assertions for the two different genuine store captures, App Store link, Google Play link, and `noopener noreferrer`.

- [ ] **Step 2: Run the focused test to verify it fails**

  Run:

  ```powershell
  node --test tests/tools/homepage-mail-first.test.mjs
  ```

  Expected: FAIL because the mobile section precedes `Work beyond email` and no human-touch illustration is referenced.

- [ ] **Step 3: Commit the red test**

  ```powershell
  git add tests/tools/homepage-mail-first.test.mjs
  git commit -m "test: define mobile apps human-touch contract"
  ```

### Task 2: Create and validate the decorative artwork

**Files:**
- Create: `public/images/venmail-mobile-on-the-go-illustration.webp`

- [ ] **Step 1: Generate one project-bound illustration with the built-in ImageGen tool**

  Use this prompt and request a transparent background:

  ```text
  Flat editorial landing-page illustration, transparent background: a friendly adult professional seated at a quiet café or transit stop, casually reviewing email on a small smartphone. Use a warm off-white, charcoal, coral orange, mint green, and muted lilac palette. Rounded organic forms, matte vector-like texture, subtle human warmth. Compose the person on the left with open breathing room on the right for overlapping real product phone screenshots. No words, logos, product UI, app-store badges, gradients, starbursts, or decorative text. Match a premium B2B mail-product landing page.
  ```

- [ ] **Step 2: Inspect and persist the selected asset**

  Confirm the figure is legible at small size, has no text or invented interface, and leaves the right side open. Copy the selected image from the generated-images directory into:

  ```text
  public/images/venmail-mobile-on-the-go-illustration.webp
  ```

  Preserve transparency and do not replace either existing authentic store capture.

- [ ] **Step 3: Verify the asset is ready for Next.js**

  Run:

  ```powershell
  Get-Item public/images/venmail-mobile-on-the-go-illustration.webp | Select-Object Name,Length
  ```

  Expected: the WebP exists and has a non-zero size.

- [ ] **Step 4: Commit the asset**

  ```powershell
  git add public/images/venmail-mobile-on-the-go-illustration.webp
  git commit -m "assets: add mobile on-the-go illustration"
  ```

### Task 3: Recompose the mobile offer and relocate it

**Files:**
- Modify: `src/components/PageSections/MobileAppsSection.jsx:1-103`
- Modify: `src/pages/index.jsx:225-245`

- [ ] **Step 1: Add the decorative asset beneath the device frames**

  In the existing device-art `<div className="relative ...">`, place this non-interactive layer before the colored shapes and phone frames:

  ```jsx
  <div aria-hidden="true" className="pointer-events-none absolute inset-0">
    <Image
      src="/images/venmail-mobile-on-the-go-illustration.webp"
      fill
      sizes="(max-width: 1023px) 100vw, 560px"
      alt=""
      className="object-contain object-left-bottom opacity-95"
    />
  </div>
  ```

  Keep the decorative layer behind both device frames. Preserve the visible primary capture's `alt="Venmail mobile inbox"`; leave the secondary capture decorative and hidden.

- [ ] **Step 2: Keep the scene responsive and non-overlapping**

  Update the visual wrapper and frame layers so the illustration is reduced on narrow screens while the real screenshots remain foremost:

  ```jsx
  <div className="relative mx-auto h-[400px] w-full max-w-[560px] overflow-hidden sm:h-[640px] lg:h-[620px]">
  ```

  Apply `z-10` or higher to both device-frame wrappers; retain `z-20` for interactive text and store controls. Do not add a new heading, marketing sentence, or control.

- [ ] **Step 3: Move the mounted section after the suite**

  In `src/pages/index.jsx`, keep the sequence:

  ```jsx
  <AgentApiSection />
  <AiInboxAgentsSection />
  <section>{/* Work beyond email */}</section>
  <MobileAppsSection />
  ```

  The mobile section must not be duplicated.

- [ ] **Step 4: Run the focused test to verify it passes**

  Run:

  ```powershell
  node --test tests/tools/homepage-mail-first.test.mjs
  ```

  Expected: all homepage-mail-first tests pass.

- [ ] **Step 5: Commit the implementation**

  ```powershell
  git add src/components/PageSections/MobileAppsSection.jsx src/pages/index.jsx tests/tools/homepage-mail-first.test.mjs
  git commit -m "feat: add human touch to mobile apps showcase"
  ```

### Task 4: Verify responsive presentation and release readiness

**Files:**
- Verify: `src/pages/index.jsx`
- Verify: `src/components/PageSections/MobileAppsSection.jsx`
- Verify: `public/images/venmail-mobile-on-the-go-illustration.webp`

- [ ] **Step 1: Inspect mobile and desktop behavior**

  Run the local app and inspect the homepage at 390px and 1440px. Confirm:

  ```text
  - Work beyond email precedes Venmail mobile apps.
  - Both store controls remain unobstructed and at least 44px high.
  - The illustration is decorative, behind the device frames, and does not cause horizontal overflow.
  - Both genuine device captures remain visible at desktop width.
  ```

- [ ] **Step 2: Run the complete verification set**

  ```powershell
  npm run test:content
  npm run test:tools
  npm run build
  node scripts/verify-landing-export.mjs
  git diff --check
  ```

  Expected: zero test failures, successful static build/export, successful export verifier, and no whitespace errors.

- [ ] **Step 3: Commit any generated sitemap change only if content differs**

  ```powershell
  git status --short
  ```

  If `public/sitemap.xml` has a content diff, stage it with its generator output; otherwise leave it unstaged.

- [ ] **Step 4: Push, merge, and monitor the approved release path**

  Create a clean PR from the current `origin/main`, merge once it is clean, then verify the `Deploy to Cloudflare R2` workflow completes successfully. Confirm the live homepage returns HTTP 200 and contains `Venmail mobile apps`, both verified store destinations, and the new decorative asset path.
