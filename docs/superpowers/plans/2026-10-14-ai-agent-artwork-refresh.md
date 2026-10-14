# AI Inbox Agents Artwork Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the glossy AI inbox hero asset with an illustration that matches Venmail's existing landing-page art direction, and remove Vercel as a landing-site deployment path.

**Architecture:** Keep `AiInboxAgentsSection` and its layout unchanged. Generate two wide comparison assets outside the published image path, inspect both against the existing flat and product-led artwork, then publish only the chosen WebP under the existing `public/images/ai-inbox-agents-teaser.webp` reference. Retain the existing GitHub Actions-to-Cloudflare R2 workflow as the deployment path, remove Vercel runtime dependencies and documentation, then disconnect the repository from the external Vercel project.

**Tech Stack:** Built-in image generation, WebP raster asset, Next.js `Image`, Next.js production build.

---

### Task 1: Generate and select the on-brand candidate

**Files:**
- Create: `public/images/ai-inbox-agents-teaser-illustration-led.webp`
- Create: `public/images/ai-inbox-agents-teaser-product-led.webp`
- Reference: `public/home/section-1.png`
- Reference: `public/home/section-4a.png`

- [ ] **Step 1: Generate the illustration-led comparison asset**

Use the built-in image generator with:

```text
Use case: stylized-concept
Asset type: wide landing-page product artwork
Primary request: Flat editorial illustration of an AI inbox agent coordinating a customer inbox, a conversation card, and a monthly routine card.
Style/medium: warm flat SaaS illustration matching a friendly modern business-email landing page.
Composition/framing: wide 16:10 composition, generous quiet off-white negative space on the left, subject cluster on the right.
Color palette: warm off-white, deep charcoal, Venmail coral-orange, pale mint, and soft lilac.
Materials/textures: paper-like matte fills, clean rounded cards, thin charcoal strokes.
Constraints: no glossy 3D objects, no robots, no gradients that dominate the art, no third-party marks, no embedded words, no logos, no watermark.
```

- [ ] **Step 2: Generate the product-led comparison asset**

Use the built-in image generator with:

```text
Use case: ui-mockup
Asset type: wide landing-page product artwork
Primary request: Editorial product collage for an AI inbox agent, showing a charcoal inbox panel, pastel conversation cards, and a small flat abstract assistant motif.
Style/medium: clean matte UI illustration matching a warm, modern business-email landing page.
Composition/framing: wide 16:10 composition, generous quiet off-white negative space on the left, layered product cluster on the right.
Color palette: warm off-white, deep charcoal, Venmail coral-orange, pale mint, and soft lilac.
Materials/textures: matte cards, restrained shadows, flat rounded geometry.
Constraints: no glossy 3D, no photorealism, no vendor marks, no readable accidental copy, no logos, no watermark.
```

- [ ] **Step 3: Inspect both outputs alongside the reference assets**

Run the local image viewer on all four files. Select the image with the strongest warm off-white/charcoal/coral visual language, recognisable email-and-routine motifs at section size, and no accidental text or third-party mark.

- [ ] **Step 4: Commit the selected source comparison assets**

```bash
git add public/images/ai-inbox-agents-teaser-illustration-led.webp public/images/ai-inbox-agents-teaser-product-led.webp
git commit -m "assets: add AI inbox artwork candidates"
```

### Task 2: Publish and verify the selected artwork

**Files:**
- Modify: `public/images/ai-inbox-agents-teaser.webp`
- Verify: `src/components/PageSections/AiInboxAgentsSection.jsx`

- [ ] **Step 1: Replace the published asset**

Copy the selected WebP candidate to `public/images/ai-inbox-agents-teaser.webp`. Preserve the existing 1586×992 display contract or use an equivalent wide source that retains the same aspect ratio.

- [ ] **Step 2: Verify the consuming component needs no code change**

Run:

```bash
rg -n 'ai-inbox-agents-teaser' src/components/PageSections/AiInboxAgentsSection.jsx
```

Expected: one `/images/ai-inbox-agents-teaser.webp` reference with `width={1586}`, `height={992}`, and the existing descriptive alt text.

- [ ] **Step 3: Run the production build**

Run:

```bash
yarn build
```

Expected: exit code 0 and no static asset or Next.js image errors.

- [ ] **Step 4: Commit the published asset**

```bash
git add public/images/ai-inbox-agents-teaser.webp
git commit -m "assets: align AI inbox artwork with landing style"
```

- [ ] **Step 5: Push the existing landing PR branch**

```bash
git push origin codex/ai-inbox-agents-landing
```

Expected: the existing landing PR updates with the artwork commits.

### Task 3: Remove the Vercel deployment path

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `README.md`
- Verify: `.github/workflows/deploy.yml`
- Verify: `tests/content/storage-disclosure.test.mjs`

- [ ] **Step 1: Confirm GitHub Actions remains the canonical deployment path**

Run:

```bash
rg -n 'Deploy to Cloudflare R2|push:|branches: \[ main \]|wrangler deploy' .github/workflows/deploy.yml
```

Expected: the `Deploy to Cloudflare R2` workflow deploys main to the configured R2 bucket and Cloudflare Worker.

- [ ] **Step 2: Remove unused Vercel runtime packages**

Run:

```bash
npm uninstall @vercel/analytics @vercel/speed-insights
```

Expected: `package.json` and `package-lock.json` contain no `@vercel/analytics` or `@vercel/speed-insights` dependency entry.

- [ ] **Step 3: Replace template deployment documentation**

Replace the Vercel section in `README.md` with:

```markdown
## Deployment

Pushes to `main` run the GitHub Actions `Deploy to Cloudflare R2` workflow. It validates content, builds the static export, synchronizes `out/` to Cloudflare R2, and deploys the Cloudflare Worker for `venmail.io` and `www.venmail.io`.
```

- [ ] **Step 4: Preserve the Cloudflare hosting regression test**

Run:

```bash
node --test tests/content/storage-disclosure.test.mjs
```

Expected: the test confirming no Vercel speed-insight script is loaded passes.

- [ ] **Step 5: Disconnect the external Vercel project**

In Vercel project settings, disconnect the `VenMail/landing_cms` Git repository or delete the unused Vercel project. This cannot be completed through a repository commit because the Vercel integration is account-level configuration.

- [ ] **Step 6: Run the full production validation**

Run:

```bash
npm run test:content && npm run test:tools && npm run build
```

Expected: every command exits 0.

- [ ] **Step 7: Commit and push the deployment cleanup**

```bash
git add package.json package-lock.json README.md
git commit -m "chore: remove Vercel landing deployment dependencies"
git push origin codex/ai-inbox-agents-landing
```
