# Venia Cloud collaboration section and Gmail FAQ Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Venia Cloud collaboration section to the landing page and state Gmail access through Venmail IMAP and SMTP credentials in the homepage FAQ.

**Architecture:** Keep the collaboration presentation isolated in `VeniaCollaborationSection.jsx`, using the approved light workspace screenshot as a static public asset. The homepage owns section order and FAQ data only; source tests assert the component contract and the homepage composition without browser mocks.

**Tech Stack:** Next.js pages router, React, `next/image`, Tailwind CSS, Node.js built-in test runner.

---

## File structure

- `public/images/venmail-office-shot-light.png` — Approved Vensuite workspace artwork source.
- `src/components/PageSections/VeniaCollaborationSection.jsx` — Responsive, themed Vensuite artwork and Venia Cloud destination.
- `src/pages/index.jsx` — Imports and places the collaboration section after AI inbox agents; adds the Gmail FAQ record.
- `tests/tools/homepage-mail-first.test.mjs` — Source contracts for placement, asset, link safety, responsive frame, and Gmail IMAP/SMTP language.
- `scripts/verify-landing-export.mjs` — Requires the final static homepage to include the approved collaboration and Gmail FAQ copy.

### Task 1: Establish the asset and regression contract

**Files:**
- Create: `public/images/venmail-office-shot-light.png`
- Modify: `tests/tools/homepage-mail-first.test.mjs`

- [ ] **Step 1: Copy the approved light workspace screenshot into the public image directory**

Run:

```powershell
Copy-Item -LiteralPath 'C:\Users\Son\Downloads\venmail-office-shot-light.png' -Destination 'public\images\venmail-office-shot-light.png'
```

Expected: `public/images/venmail-office-shot-light.png` exists and is the supplied light Vensuite capture.

- [ ] **Step 2: Add one failing source test for the collaboration section and Gmail FAQ**

Add this test after the AI inbox agents test in `tests/tools/homepage-mail-first.test.mjs`:

```js
test('homepage adds a framed Venia Cloud workspace and Gmail IMAP access details', async () => {
  const [homepage, collaboration] = await Promise.all([
    readSource('../../src/pages/index.jsx'),
    readSource('../../src/components/PageSections/VeniaCollaborationSection.jsx'),
  ]);

  assert.match(homepage, /import VeniaCollaborationSection from/);
  assert.equal((homepage.match(/<VeniaCollaborationSection \/>/g) || []).length, 1);
  assert.ok(homepage.indexOf('<AiInboxAgentsSection />') < homepage.indexOf('<VeniaCollaborationSection />'));
  assert.ok(homepage.indexOf('<VeniaCollaborationSection />') < homepage.indexOf('Work beyond email'));
  assert.match(homepage, /Can I use Venmail with Gmail\?/);
  assert.match(homepage, /Configure Gmail with your Venmail IMAP and SMTP credentials to send and receive through Gmail\./);
  assert.match(collaboration, /Work together with your team/);
  assert.match(collaboration, /src="\/images\/venmail-office-shot-light\.png"/);
  assert.match(collaboration, /href="https:\/\/venia\.cloud"/);
  assert.match(collaboration, /target="_blank"/);
  assert.match(collaboration, /rel="noopener noreferrer"/);
  assert.match(collaboration, /min-w-0/);
  assert.match(collaboration, /overflow-hidden/);
});
```

- [ ] **Step 3: Run the focused test to verify it fails**

Run: `node --test tests/tools/homepage-mail-first.test.mjs`

Expected: FAIL because `VeniaCollaborationSection.jsx` does not yet exist and the homepage does not import or render it.

- [ ] **Step 4: Commit the asset and failing test**

Run: `git add public/images/venmail-office-shot-light.png tests/tools/homepage-mail-first.test.mjs; git commit -m "Add Venia collaboration coverage"`

### Task 2: Build the collaboration component and connect the homepage

**Files:**
- Create: `src/components/PageSections/VeniaCollaborationSection.jsx`
- Modify: `src/pages/index.jsx`

- [ ] **Step 1: Create the isolated collaboration section**

Create a section with the following required details:

```jsx
import Image from 'next/image';
import { ArrowUpRight, Files, FileText, Presentation, Table2 } from 'lucide-react';

const workTypes = [[Files, 'Files'], [FileText, 'Documents'], [Table2, 'Spreadsheets'], [Presentation, 'Slides']];

const VeniaCollaborationSection = () => (
  <section className="border-t border-[#dadce0] bg-[#f8f9fa] px-4 py-16 sm:px-6 md:py-24">
    <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-orange-800">Venia Cloud</p>
        <h2 className="mt-3 text-4xl font-semibold leading-[1.15] tracking-[-0.025em] text-[#202124] sm:text-5xl">Work together with your team</h2>
        <p className="mt-5 max-w-xl text-lg leading-[1.65] text-[#5f6368]">Share files, documents, spreadsheets, forms, and slides for the work your team shares.</p>
        <div className="mt-8 grid grid-cols-2 gap-3 text-sm font-medium text-[#202124]">
          {workTypes.map(([Icon, label]) => <div key={label} className="flex min-h-11 items-center gap-2 rounded-lg border border-[#dadce0] bg-white px-3"><Icon className="h-4 w-4 text-orange-800" aria-hidden="true" />{label}</div>)}
        </div>
        <a href="https://venia.cloud" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-orange-800 underline decoration-orange-300 underline-offset-4 transition-colors hover:text-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">Open Venia Cloud <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
      </div>
      <div className="min-w-0 overflow-hidden rounded-2xl bg-[#202124] p-3 shadow-2xl shadow-slate-900/20 sm:p-5">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900 p-2 sm:p-3">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(249,115,22,0.28),transparent_25rem),radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.22),transparent_24rem)]" />
          <div className="relative flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs font-medium text-slate-300"><span className="h-2.5 w-2.5 rounded-full bg-rose-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /><span className="ml-2">venia.cloud</span></div>
          <Image src="/images/venmail-office-shot-light.png" alt="Venia Cloud workspace with shared files and team tools" width={1536} height={724} className="relative mt-3 h-auto w-full rounded-lg" priority />
        </div>
      </div>
    </div>
  </section>
);

export default VeniaCollaborationSection;
```

Use the existing mail-first spacing and typography. Wrap the image in a `min-w-0 overflow-hidden` charcoal browser-style frame with rounded corners, border, shadow, three status dots, a `venia.cloud` label, and restrained orange/blue radial lighting. Preserve its full image aspect ratio with `h-auto w-full` and do not recreate interface elements over the screenshot.

- [ ] **Step 2: Integrate the section and FAQ record without moving approved sections**

In `src/pages/index.jsx`, add this import:

```js
import VeniaCollaborationSection from '@/components/PageSections/VeniaCollaborationSection';
```

Add this FAQ record after the activation question:

```js
{
  question: 'Can I use Venmail with Gmail?',
  answer: 'Yes. Configure Gmail with your Venmail IMAP and SMTP credentials to send and receive through Gmail.',
},
```

Render the section in this order:

```jsx
<AgentApiSection />
<AiInboxAgentsSection />
<VeniaCollaborationSection />
```

- [ ] **Step 3: Run the focused test to verify it passes**

Run: `node --test tests/tools/homepage-mail-first.test.mjs`

Expected: PASS, including the new Venia and Gmail assertions.

- [ ] **Step 4: Commit the component and homepage integration**

Run: `git add src/components/PageSections/VeniaCollaborationSection.jsx src/pages/index.jsx tests/tools/homepage-mail-first.test.mjs; git commit -m "Add Venia collaboration section"`

### Task 3: Keep static-export verification aligned and validate the release

**Files:**
- Modify: `scripts/verify-landing-export.mjs`

- [ ] **Step 1: Add static homepage requirements**

Add these exact entries to the homepage string list in `scripts/verify-landing-export.mjs`:

```js
'Work together with your team',
'https://venia.cloud',
'Can I use Venmail with Gmail?',
'Configure Gmail with your Venmail IMAP and SMTP credentials to send and receive through Gmail.',
```

- [ ] **Step 2: Run source suites**

Run: `npm run test:content; npm run test:tools`

Expected: both commands exit `0`.

- [ ] **Step 3: Build and verify the static export**

Run: `npm run build; node scripts/verify-landing-export.mjs`

Expected: build exits `0`; export verification reports no assertion failures.

- [ ] **Step 4: Verify the local page through the browser**

Open `http://localhost:3003/`, refresh, and confirm the framed screenshot, Venia link, collaboration heading, and Gmail FAQ answer render without horizontal overflow.

- [ ] **Step 5: Commit static-export verification updates**

Run: `git add scripts/verify-landing-export.mjs; git commit -m "Verify Venia collaboration export"`
