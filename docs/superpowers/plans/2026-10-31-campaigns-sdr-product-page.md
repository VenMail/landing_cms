# Campaigns and SDR Product Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a non-navigation `/campaigns-sdr` product page that explains Venmail campaign and SDR work with bounded claims and original supporting artwork.

**Architecture:** A static Next.js page will use the Mail First header and footer but will not be registered in either navigation list. The page owns its facts, capability cards, workflow, safeguards, CTAs, and image references; the sitemap generator lists the route. Tool tests assert the public route, exact safeguard language, absence of prohibited claims, and absence of navigation references.

**Tech Stack:** Next.js Pages Router, React, Tailwind CSS, `next/image`, Heroicons, Node test runner, ImageGen raster assets.

---

## File structure

- Create: `src/pages/campaigns-sdr.jsx` — public product route, metadata, copy, CTA wiring, and illustration layout.
- Create: `public/images/campaigns-sdr-prospect-research.png` — editorial prospect-research illustration.
- Create: `public/images/campaigns-sdr-campaign-sequence.png` — editorial campaign-sequence illustration.
- Create: `public/images/campaigns-sdr-response-review.png` — editorial reply and opt-out review illustration.
- Modify: `scripts/generate-content-feeds.mjs` — list the static sitemap route.
- Modify: `scripts/verify-landing-export.mjs` — verify exported metadata and product copy.
- Modify: `tests/tools/homepage-mail-first.test.mjs` — verify the public route and non-navigation constraint.

### Task 1: Write the route and claim regression test

**Files:**
- Modify: `tests/tools/homepage-mail-first.test.mjs`
- Modify: `scripts/verify-landing-export.mjs`

- [ ] **Step 1: Add the failing page-source contract**

Append this exact test to `tests/tools/homepage-mail-first.test.mjs`:

```js
test('campaigns SDR product page is public without becoming a navigation item', async () => {
  const [page, header, footer] = await Promise.all([
    readSource('../../src/pages/campaigns-sdr.jsx'),
    readSource('../../src/components/home/MailFirstHeader.jsx'),
    readSource('../../src/components/home/MailFirstFooter.jsx'),
  ]);

  assert.match(page, /Prospect research and accountable outreach/);
  assert.match(page, /Recipient consent, applicable law, and opt-out requests govern outreach\./);
  assert.match(page, /Campaigns and SDR \| Venmail/);
  assert.match(page, /\/images\/campaigns-sdr-prospect-research\.png/);
  assert.match(page, /\/images\/campaigns-sdr-campaign-sequence\.png/);
  assert.match(page, /\/images\/campaigns-sdr-response-review\.png/);
  assert.doesNotMatch(page, /unlimited leads|guaranteed delivery|guaranteed sales|automatic qualification|response rate/i);
  assert.doesNotMatch(header, /campaigns-sdr/);
  assert.doesNotMatch(footer, /campaigns-sdr/);
});
```

- [ ] **Step 2: Add the exported artifact contract**

In `scripts/verify-landing-export.mjs`, replace the route list beginning on line 38 with:

```js
for (const route of ['', 'pricing', 'campaigns-sdr', 'resources/privacy-policy', 'resources/ai-principles', 'security-whitepaper']) {
```

After the existing homepage assignment, add:

```js
const campaignsSdr = fs.readFileSync('out/campaigns-sdr.html', 'utf8');
for (const text of [
  'Prospect research and accountable outreach',
  'Recipient consent, applicable law, and opt-out requests govern outreach.',
  'Review replies, opt-outs, and campaign results.',
]) {
  assert.ok(campaignsSdr.includes(text), `campaigns-sdr: expected \${text}`);
}
```

- [ ] **Step 3: Run the test and confirm its red state**

Run:

```powershell
yarn test:tools
```

Expected: the new test fails with `ENOENT` for `src/pages/campaigns-sdr.jsx`.

- [ ] **Step 4: Commit the regression contract**

```powershell
git add tests/tools/homepage-mail-first.test.mjs scripts/verify-landing-export.mjs
git commit -m "test: define campaigns SDR landing contract"
```

### Task 2: Generate original supporting illustrations

**Files:**
- Create: `public/images/campaigns-sdr-prospect-research.png`
- Create: `public/images/campaigns-sdr-campaign-sequence.png`
- Create: `public/images/campaigns-sdr-response-review.png`

- [ ] **Step 1: Generate the prospect-research illustration**

Use ImageGen with this prompt and save its PNG output as `public/images/campaigns-sdr-prospect-research.png`:

```text
Editorial SaaS illustration for Venmail: a warm ivory business desk viewed at a gentle angle, one generic company profile card, three small evidence notes, a teal magnifying-glass signal and a restrained orange paper accent. Rounded geometric shapes, subtle grain, soft shadow, deep ink outlines, sparse composition, premium B2B landing-page art. No text, no logos, no product UI, no people, no customer data, no charts or performance metrics. Landscape 3:2.
```

- [ ] **Step 2: Generate the campaign-sequence illustration**

Use ImageGen with this prompt and save its PNG output as `public/images/campaigns-sdr-campaign-sequence.png`:

```text
Editorial SaaS illustration for Venmail: warm cream background, three abstract message cards connected by a simple curved timeline with one planned follow-up marker, muted teal, soft orange and dark navy accents, light paper texture, rounded geometry and quiet depth. It communicates carefully prepared business outreach without showing an interface. No words, no logos, no realistic inbox, no customer data, no charts or success metrics. Landscape 3:2.
```

- [ ] **Step 3: Generate the response-review illustration**

Use ImageGen with this prompt and save its PNG output as `public/images/campaigns-sdr-response-review.png`:

```text
Editorial SaaS illustration for Venmail: a calm response-review composition with generic reply envelopes, a respectful opt-out marker, and two small neutral measurement tiles on a warm ivory desk, teal and orange details with navy outline, rounded forms, subtle paper grain, premium B2B editorial art. No text, no logos, no product UI, no real names, no performance numbers, no customer data. Landscape 3:2.
```

- [ ] **Step 4: Verify the local assets**

Run:

```powershell
Get-Item public\images\campaigns-sdr-*.png | Select-Object Name,Length
```

Expected: exactly three non-zero PNG files, each under 2 MB.

- [ ] **Step 5: Commit the artwork**

```powershell
git add public/images/campaigns-sdr-prospect-research.png public/images/campaigns-sdr-campaign-sequence.png public/images/campaigns-sdr-response-review.png
git commit -m "feat: add campaigns SDR illustrations"
```

### Task 3: Implement the standalone page and sitemap route

**Files:**
- Create: `src/pages/campaigns-sdr.jsx`
- Modify: `scripts/generate-content-feeds.mjs`

- [ ] **Step 1: Create the page**

Create the page with the exact heading, guardrail, image paths, metadata, and CTA conventions below. Keep it out of all navigation arrays.

```jsx
import Head from 'next/head';
import Image from 'next/image';
import { ArrowRightIcon, ChartBarIcon, ChatBubbleLeftRightIcon, CheckCircleIcon, MagnifyingGlassIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import MailFirstHeader from '@/components/home/MailFirstHeader';
import MailFirstFooter from '@/components/home/MailFirstFooter';
import { businessSignupUrl } from '@/config/pricing.mjs';
import { getContactMailtoHref } from '@/config/contact';
import { trackCTAClick } from '@/utils/trackConversion';

const capabilities = [
  [MagnifyingGlassIcon, 'Prospect research', 'Review company evidence and contact relevance before outreach.'],
  [PaperAirplaneIcon, 'Campaign preparation', 'Prepare sender identity, message purpose, and follow-up timing.'],
  [ChatBubbleLeftRightIcon, 'Response handling', 'Assign reply ownership and record stop requests.'],
  [ChartBarIcon, 'Campaign review', 'Review campaign and reply signals before the next decision.'],
];
const workflow = [
  ['01', 'Define the audience', 'Set source criteria, business fit, and message purpose.'],
  ['02', 'Review prospect evidence', 'Select contacts only after reviewing the available evidence.'],
  ['03', 'Prepare outreach', 'Send a relevant message with an accountable sender and follow-up timing.'],
  ['04', 'Review the response', 'Handle replies, opt-outs, and campaign results before further contact.'],
];
const illustrations = [
  ['/images/campaigns-sdr-prospect-research.png', 'Abstract prospect research materials on a desk', 'Research before contact', 'Source evidence supports more relevant outreach decisions.'],
  ['/images/campaigns-sdr-campaign-sequence.png', 'Abstract tailored campaign sequence', 'Plan the message sequence', 'A clear purpose and timing keep follow-up accountable.'],
  ['/images/campaigns-sdr-response-review.png', 'Abstract reply and opt-out review materials', 'Own the response', 'Replies and opt-outs shape the next action.'],
];

export default function CampaignsSdrPage() {
  const signupHref = businessSignupUrl('business');
  const contactHref = getContactMailtoHref({ subject: 'Campaigns and SDR inquiry' });

  return <div className="bg-[#fffdf9] text-[#202124]">
    <Head>
      <title>Campaigns and SDR | Venmail</title>
      <meta name="description" content="Prospect research, campaign preparation, accountable follow-up, and response review for business outreach." />
      <link rel="canonical" href="https://venmail.io/campaigns-sdr" />
    </Head>
    <MailFirstHeader />
    <main id="main-content">
      <section className="border-b border-[#eadfd2] bg-[#f6faf8] px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold text-orange-800">Campaigns and SDR</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl">Prospect research and accountable outreach</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6368]">Review sources, prepare relevant campaign messages, schedule follow-up, and handle the resulting conversations with a clear owner.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={signupHref} onClick={() => trackCTAClick('campaigns_sdr_signup', 'campaigns_sdr', 'campaigns_sdr_page')} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-orange-700 px-6 font-semibold text-white hover:bg-orange-800">Start with Business <ArrowRightIcon className="h-4 w-4" /></a>
              <a href={contactHref} className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#202124] px-6 font-semibold">Discuss your outreach</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#e2d6c9] bg-white p-3">
            <Image src="/images/campaigns-sdr-prospect-research.png" alt="Abstract prospect research materials on a desk" width={1500} height={1000} priority sizes="(max-width: 1023px) calc(100vw - 56px), 520px" className="h-auto w-full rounded-xl" />
          </div>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl"><h2 className="text-4xl font-semibold tracking-[-0.025em]">Work from evidence to response</h2><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{capabilities.map(([Icon, title, text]) => <article key={title} className="border-t border-[#dadce0] py-6"><Icon className="h-7 w-7 text-orange-700" /><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 leading-7 text-[#5f6368]">{text}</p></article>)}</div></div>
      </section>
      <section className="border-y border-[#eadfd2] bg-[#f6faf8] px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl"><h2 className="text-4xl font-semibold tracking-[-0.025em]">A disciplined campaign sequence</h2><ol className="mt-10 grid gap-px border border-[#d6e3de] bg-[#d6e3de] md:grid-cols-4">{workflow.map(([number, title, text]) => <li key={number} className="bg-white p-6"><p className="text-sm font-semibold text-orange-800">{number}</p><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-[#5f6368]">{text}</p></li>)}</ol></div>
      </section>
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">{illustrations.map(([src, alt, title, text]) => <article key={src} className="overflow-hidden rounded-2xl border border-[#e2d6c9] bg-white"><Image src={src} alt={alt} width={1500} height={1000} sizes="(max-width: 767px) calc(100vw - 48px), 32vw" className="h-auto w-full" /><div className="p-6"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-2 leading-7 text-[#5f6368]">{text}</p></div></article>)}</div>
      </section>
      <section className="bg-[#202124] px-4 py-16 text-white sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl"><CheckCircleIcon className="h-8 w-8 text-orange-300" /><h2 className="mt-5 text-3xl font-semibold">Outreach conditions</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-white/75">Recipient consent, applicable law, and opt-out requests govern outreach. Review sources and message relevance before sending.</p><a href={contactHref} className="mt-8 inline-flex min-h-12 items-center rounded-lg bg-white px-6 font-semibold text-[#202124]">Discuss your outreach</a></div>
      </section>
    </main>
    <MailFirstFooter />
  </div>;
}
```

- [ ] **Step 2: Add the sitemap route**

In `scripts/generate-content-feeds.mjs`, insert this immediately after `"/ai-inbox-agents",`:

```js
  "/campaigns-sdr",
```

- [ ] **Step 3: Run the focused test and confirm it passes**

Run:

```powershell
yarn test:tools
```

Expected: all tool tests pass, including `campaigns SDR product page is public without becoming a navigation item`.

- [ ] **Step 4: Commit the page and sitemap input**

```powershell
git add src/pages/campaigns-sdr.jsx scripts/generate-content-feeds.mjs scripts/verify-landing-export.mjs tests/tools/homepage-mail-first.test.mjs
git commit -m "feat: add campaigns SDR product page"
```

### Task 4: Build and inspect the static delivery artifact

**Files:**
- Generated: `out/campaigns-sdr.html`
- Generated when content differs: `public/sitemap.xml`

- [ ] **Step 1: Build the static site**

Run:

```powershell
yarn build
```

Expected: Next.js compiles successfully and writes `out/campaigns-sdr.html`.

- [ ] **Step 2: Verify the output and sitemap**

Run:

```powershell
Select-String -Path out\campaigns-sdr.html -Pattern 'Prospect research and accountable outreach','Recipient consent, applicable law, and opt-out requests govern outreach.'
Select-String -Path public\sitemap.xml -Pattern 'https://venmail.io/campaigns-sdr'
```

Expected: both commands return their requested strings.

- [ ] **Step 3: Stage only a content change to the generated sitemap**

Run:

```powershell
git diff -- public/sitemap.xml
```

If the command has content output, commit it:

```powershell
git add public/sitemap.xml
git commit -m "chore: add campaigns SDR page to sitemap"
```

If it has no content output, do not stage the file; an end-of-line-only worktree status is not a product change.

- [ ] **Step 4: Confirm the release diff does not alter navigation**

Run:

```powershell
git diff origin/main...HEAD -- src/components/home/MailFirstHeader.jsx src/components/home/MailFirstFooter.jsx src/components/layout/Header.jsx
git diff --check origin/main...HEAD
```

Expected: the navigation diff is empty and the whitespace check has no output.

- [ ] **Step 5: Push the prepared branch**

Run:

```powershell
git push origin codex/landing-standard-storage-release
```

Expected: pull request #18 updates. Do not merge it until the matching application entitlement release has passed its production gate.
