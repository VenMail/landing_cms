# AI Agent and Mobile Artwork Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the AI teaser with a friendly-agent/product hybrid and add a bold, authentic Venmail iOS/Android showcase to the landing page.

**Architecture:** Keep the AI teaser as one optimized 1586 x 992 local WebP consumed by the existing `next/image` component. Build the phone presentation in `MobileAppsSection.jsx` from real official-store screenshot pixels inside CSS device frames, so the actual app UI remains inspectable while the landing layout owns the premium composition. Mount that self-contained section between AI agents and the wider product suite.

**Tech Stack:** Next.js pages router, React, `next/image`, Tailwind utility classes, Node test runner, Sharp for owned-image optimization, ImageGen for the AI illustration.

---

### Task 1: Cover the new artwork and mobile-app contract with source tests

**Files:**
- Modify: `tests/tools/homepage-mail-first.test.mjs:110-132`
- Modify: `src/pages/index.jsx:1-8,225-228`
- Modify: `src/components/PageSections/AiInboxAgentsSection.jsx:18-23,61-68`
- Modify: `src/components/PageSections/MobileAppsSection.jsx:1-49`

- [ ] **Step 1: Add failing assertions for AI copy, selected asset, homepage order, phone imagery, and verified store destinations**

  Extend the existing AI-agent test and add this focused mobile test:

  ```js
  test('homepage gives native Venmail apps a verified, accessible mobile showcase', async () => {
    const [homepage, mobileApps] = await Promise.all([
      readSource('../../src/pages/index.jsx'),
      readSource('../../src/components/PageSections/MobileAppsSection.jsx'),
    ]);

    assert.match(homepage, /import MobileAppsSection from/);
    assert.ok(homepage.indexOf('<AiInboxAgentsSection />') < homepage.indexOf('<MobileAppsSection />'));
    assert.ok(homepage.indexOf('<MobileAppsSection />') < homepage.indexOf('Work beyond email'));
    assert.match(mobileApps, /src="\/images\/venmail-mobile-inbox-store-capture\.webp"/);
    assert.match(mobileApps, /alt="Venmail mobile inbox"/);
    assert.match(mobileApps, /https:\/\/apps\.apple\.com\/us\/app\/venmail\/id6755040289/);
    assert.match(mobileApps, /https:\/\/play\.google\.com\/store\/apps\/details\?id=io\.venmail\.app/);
    assert.match(mobileApps, /aria-label="Download Venmail on the App Store"/);
    assert.match(mobileApps, /aria-label="Get Venmail on Google Play"/);
    assert.match(mobileApps, /target="_blank"/);
    assert.match(mobileApps, /rel="noopener noreferrer"/);
    assert.doesNotMatch(mobileApps, /what you(?:'|’)ve created|keep what you create|return to|in one place|this screen|this page|\bhere\b|use this to|you can find/i);
  });
  ```

  In the existing AI test, add:

  ```js
  assert.match(agents, /Talk to your AI mail agent over Telegram or WhatsApp\./);
  assert.match(agents, /src="\/images\/ai-inbox-agents-teaser\.webp"/);
  assert.match(agents, /width=\{1586\}/);
  assert.match(agents, /height=\{992\}/);
  ```

- [ ] **Step 2: Run the focused test to verify the mobile contract fails before implementation**

  Run: `node --test tests/tools/homepage-mail-first.test.mjs`

  Expected: the new mobile-app test fails because `index.jsx` does not yet import or render `MobileAppsSection`.

- [ ] **Step 3: Commit the red test only if the repository convention accepts a separate test commit**

  Run: `git add tests/tools/homepage-mail-first.test.mjs && git commit -m "test: cover mobile app showcase"`

  Expected: one test-only commit. If the project requires green commits, retain the staged test and commit it with Task 3 instead.

### Task 2: Produce and validate owned visual assets

**Files:**
- Create: `public/images/ai-inbox-agents-teaser.webp`
- Create: `public/images/venmail-mobile-inbox-store-capture.webp`
- Keep for comparison: `public/images/ai-inbox-agents-teaser-illustration-led.webp`
- Keep for comparison: `public/images/ai-inbox-agents-teaser-product-led.webp`

- [ ] **Step 1: Generate the approved AI hybrid from the two existing candidates**

  Use ImageGen edit mode with both local candidates as references. Use this prompt:

  ```text
  Create the final wide 16:10 landing-page artwork by combining the two supplied Venmail AI inbox references. Keep the product-led composition: warm off-white field, deep charcoal inbox panel, layered rounded mint/lilac/coral product cards on the right, quiet space on the left. Replace the abstract coral star-like motif with the friendly coral assistant character language from the illustration-led reference: approachable flat editorial assistant, not a humanoid robot. Matte paper-like fills, clean thin charcoal outlines, restrained soft shadows. Match Venmail's warm off-white, charcoal, coral-orange, pale mint, and soft lilac palette. No glossy 3D, photorealism, logos, vendor marks, readable accidental copy, third-party messaging symbols, or watermark.
  ```

- [ ] **Step 2: Normalize the generated image and inspect it**

  Convert the chosen generated output to `public/images/ai-inbox-agents-teaser.webp` with Sharp, setting `width: 1586`, `height: 992`, `fit: 'cover'`, `format: 'webp'`, and `quality: 88`.

  Run: `node -e "const sharp=require('sharp'); Promise.all(['public/images/ai-inbox-agents-teaser.webp'].map(async p=>{const m=await sharp(p).metadata(); if(m.width!==1586||m.height!==992||m.format!=='webp') throw new Error(JSON.stringify(m)); console.log(p,m.width,m.height,m.format)}))"`

  Expected: `public/images/ai-inbox-agents-teaser.webp 1586 992 webp`.

- [ ] **Step 3: Obtain and preserve a real official-store app capture**

  Download only the Venmail-owned Google Play listing screenshot from the verified listing URL, preserving its pixels without synthetic UI edits. Use `https://play.google.com/store/apps/details?id=io.venmail.app` as the provenance record and select the clearest inbox view from the listing’s screenshots. Save it as `public/images/venmail-mobile-inbox-store-capture.webp` using Sharp at `quality: 90`; do not add fabricated messages, names, counts, or controls.

  Record the source URL and image dimensions in the asset commit message or PR summary. Visually inspect the resulting asset before it is used.

- [ ] **Step 4: Commit the visual assets**

  Run: `git add public/images/ai-inbox-agents-teaser.webp public/images/venmail-mobile-inbox-store-capture.webp && git commit -m "assets: refresh AI and mobile app artwork"`

  Expected: only the selected final AI asset and real mobile capture are committed; existing candidate assets remain untouched.

### Task 3: Implement the agent copy and premium two-device mobile section

**Files:**
- Modify: `src/components/PageSections/AiInboxAgentsSection.jsx:18-23`
- Modify: `src/components/PageSections/MobileAppsSection.jsx:1-49`
- Modify: `src/pages/index.jsx:1-8,225-228`
- Modify: `tests/tools/homepage-mail-first.test.mjs:110-155`

- [ ] **Step 1: Update the AI supporting copy without changing channel-status rows**

  Replace the current supporting paragraph with:

  ```jsx
  <p className="mt-5 text-lg leading-[1.65] text-[#5f6368]">
    Connect a dedicated Venmail inbox to an AI agent. Talk to your AI mail agent
    over Telegram or WhatsApp.
  </p>
  ```

  Keep the existing `Telegram / Active` and `WhatsApp / Coming soon` rows unchanged.

- [ ] **Step 2: Replace `MobileAppsSection.jsx` with a self-contained two-device composition**

  Import `Image` from `next/image`. Retain the existing verified Store URLs, but build the section as a two-column `bg-[#f8f9fa]` section with the copy and store links on the left and device artwork on the right. Use the shared source in two different `Image` crops inside charcoal rounded device frames:

  ```jsx
  <Image
    src="/images/venmail-mobile-inbox-store-capture.webp"
    alt="Venmail mobile inbox"
    fill
    sizes="(max-width: 639px) 66vw, 290px"
    className="object-cover object-[54%_center]"
  />
  ```

  The primary frame must remain fully visible. The secondary frame must be offset behind it with `absolute`, a smaller width, a mint/lilac support panel, and `aria-hidden="true"`; its duplicate image must have `alt=""`. The device frames use `overflow-hidden`, a charcoal border, a small top speaker detail, rounded corners, and a restrained shadow. Do not fabricate UI within either device.

  Use these customer-visible strings:

  ```jsx
  <p className="text-sm font-semibold text-orange-800">Venmail mobile apps</p>
  <h2 id="mobile-apps-title" className="mt-3 text-4xl font-semibold leading-[1.15] tracking-[-0.025em]">Business mail, wherever work takes you</h2>
  <p className="mt-5 text-lg leading-[1.65] text-[#5f6368]">Venmail for iPhone, iPad, and Android.</p>
  ```

  Give the primary `section` `aria-labelledby="mobile-apps-title"`, and keep buttons at least 44px tall with visible focus treatment.

- [ ] **Step 3: Render the section in the approved order**

  In `src/pages/index.jsx`, add:

  ```jsx
  import MobileAppsSection from '@/components/PageSections/MobileAppsSection';
  ```

  Then mount:

  ```jsx
  <AgentApiSection />
  <AiInboxAgentsSection />
  <MobileAppsSection />
  ```

  Leave the following `Work beyond email` section in place.

- [ ] **Step 4: Run the focused test and confirm it passes**

  Run: `node --test tests/tools/homepage-mail-first.test.mjs`

  Expected: all homepage mail-first subtests pass, including the AI-agent and new mobile showcase assertions.

- [ ] **Step 5: Commit implementation and tests**

  Run: `git add src/components/PageSections/AiInboxAgentsSection.jsx src/components/PageSections/MobileAppsSection.jsx src/pages/index.jsx tests/tools/homepage-mail-first.test.mjs && git commit -m "feat: add native mobile app showcase"`

  Expected: the commit includes only the new page composition, approved copy, homepage mount, and its tests.

### Task 4: Verify responsive output and release readiness

**Files:**
- Verify: `src/components/PageSections/AiInboxAgentsSection.jsx`
- Verify: `src/components/PageSections/MobileAppsSection.jsx`
- Verify: `src/pages/index.jsx`
- Verify: `tests/tools/homepage-mail-first.test.mjs`

- [ ] **Step 1: Inspect responsive visual output**

  Run the local application and inspect the homepage at 390px and 1440px widths. Confirm the primary phone is not clipped, the secondary frame remains decorative and unobtrusive, the AI image has the friendly assistant rather than the star motif, and the Store links remain visible without horizontal overflow.

- [ ] **Step 2: Run release verification**

  Run: `npm run test:content && npm run test:tools && npm run build`

  Expected: 18 content tests pass, all tooling tests pass, and `next build` exits 0. Note the pre-existing Next configuration and static-export warnings separately if they recur; do not broaden this change to unrelated configuration work.

- [ ] **Step 3: Check change scope and commit any verification-only generated updates only when their content changed**

  Run: `git diff --check && git status --short`

  Expected: no whitespace errors and no untracked build artifacts. Do not commit generated sitemap or RSS files when their semantic content is unchanged.

- [ ] **Step 4: Push the reviewed branch and inspect the existing PR**

  Run: `git push origin codex/ai-inbox-agents-landing && gh pr view 11 --json url,state,mergeStateStatus,statusCheckRollup`

  Expected: PR #11 points to the pushed branch. Confirm that the canonical GitHub Actions → Cloudflare release workflow remains the only intended production deployment path before merging.
