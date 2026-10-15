# Office Laptop Collaboration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a resilient Office destination and refine the Venia Cloud landing section with approved copy, AI Agents wording, and a screenshot-first laptop-on-desk treatment.

**Architecture:** Keep primary-navigation metadata in `MailFirstHeader.jsx`, representing external navigation explicitly so desktop and mobile links share the same destination and security policy. Keep the collaboration feature self-contained in `VeniaCollaborationSection.jsx`, where local Tailwind composition layers frame the existing product image without introducing a second image or obscuring the workspace UI.

**Tech Stack:** Next.js Pages Router, React, Tailwind CSS, `next/image`, Node’s built-in test runner.

---

## File structure

- `src/components/home/MailFirstHeader.jsx` — declares the `Office` external navigation item, renders it in both responsive menus, and renames the landing AI label.
- `src/components/PageSections/AiInboxAgentsSection.jsx` — changes the homepage section eyebrow to `AI Agents` without changing the `/ai-inbox-agents` destination or explanatory copy.
- `src/components/PageSections/VeniaCollaborationSection.jsx` — supplies the approved collaboration sentence and CSS-only desk/laptop composition around the existing screenshot.
- `tests/tools/homepage-mail-first.test.mjs` — source-level regression coverage for navigation attributes, labels, copy, and screenshot-first composition.

### Task 1: Specify the revised landing behavior

**Files:**
- Modify: `tests/tools/homepage-mail-first.test.mjs:117-164`

- [ ] **Step 1: Extend the existing failing source test**

  Update the collaboration test’s source reads and assertions so it requires the approved copy, AI Agents label, Office metadata, and laptop composition marker:

  ```js
  const [homepage, collaboration, mailFirstHeader, agents] = await Promise.all([
    readSource('../../src/pages/index.jsx'),
    readSource('../../src/components/PageSections/VeniaCollaborationSection.jsx'),
    readSource('../../src/components/home/MailFirstHeader.jsx'),
    readSource('../../src/components/PageSections/AiInboxAgentsSection.jsx'),
  ]);

  assert.match(agents, />AI Agents<\/p>/);
  assert.doesNotMatch(mailFirstHeader, /AI inbox agents/);
  assert.match(mailFirstHeader, /label: 'Office', href: 'https:\/\/venia\.cloud', external: true/);
  assert.match(mailFirstHeader, /target=\{external \? '_blank' : undefined\}/);
  assert.match(mailFirstHeader, /rel=\{external \? 'noopener noreferrer' : undefined\}/);
  assert.match(collaboration, /Share or sign files, documents, spreadsheets, forms, and slides with your team and clients\./);
  assert.match(collaboration, /data-visual="office-laptop"/);
  assert.match(collaboration, /data-visual="office-desk"/);
  ```

- [ ] **Step 2: Run the focused test and confirm RED**

  Run: `node --test tests/tools/homepage-mail-first.test.mjs`

  Expected: FAIL because the current source still contains `AI inbox agents`, has no Office entry, keeps the previous collaboration copy, and has no office-laptop/office-desk composition markers.

- [ ] **Step 3: Commit the failing specification**

  ```powershell
  git add tests/tools/homepage-mail-first.test.mjs
  git commit -m "test: specify Office collaboration refinement"
  ```

### Task 2: Add Office navigation and AI Agents wording

**Files:**
- Modify: `src/components/home/MailFirstHeader.jsx:6-43`
- Modify: `src/components/PageSections/AiInboxAgentsSection.jsx:10-14`

- [ ] **Step 1: Replace tuple navigation metadata with external-link-aware entries**

  Replace the `links` tuples with objects so navigation owns the external-link policy once:

  ```jsx
  const links = [
    { label: 'Delivery', href: '/#delivery' },
    { label: 'Spam control', href: '/#spam-control' },
    { label: 'Developers', href: '/#developers' },
    { label: 'AI Agents', href: '/#ai-inbox-agents' },
    { label: 'Office', href: 'https://venia.cloud', external: true },
    { label: 'Pricing', href: '/#pricing' },
  ];
  ```

- [ ] **Step 2: Render the same link policy in desktop and mobile menus**

  Change each `links.map` callback to destructure `{ label, href, external }`; give both anchors the following attributes while retaining current focus, hover, and mobile close behavior:

  ```jsx
  target={external ? '_blank' : undefined}
  rel={external ? 'noopener noreferrer' : undefined}
  ```

  The mobile link must retain `onClick={() => closeDetailsMenu(mobileMenuRef.current)}`.

- [ ] **Step 3: Rename only the homepage AI eyebrow**

  In `AiInboxAgentsSection.jsx`, replace the eyebrow text with:

  ```jsx
  <p className="text-sm font-semibold text-orange-800">AI Agents</p>
  ```

  Keep the existing section id, AI Agents CTA, route, status labels, and customer-conversation heading unchanged.

- [ ] **Step 4: Run the focused test and confirm GREEN**

  Run: `node --test tests/tools/homepage-mail-first.test.mjs`

  Expected: the source test progresses past the Office and AI assertions, then still fails only for the unimplemented collaboration composition/copy.

### Task 3: Build the screenshot-first office laptop visual

**Files:**
- Modify: `src/components/PageSections/VeniaCollaborationSection.jsx:18-58`

- [ ] **Step 1: Replace the collaboration sentence exactly**

  Use the approved supporting copy:

  ```jsx
  <p className="mt-5 max-w-xl text-lg leading-[1.65] text-[#5f6368]">
    Share or sign files, documents, spreadsheets, forms, and slides with your team and clients.
  </p>
  ```

- [ ] **Step 2: Replace the browser frame with a CSS-only office desk and laptop hierarchy**

  Wrap the existing `Image` in two named static composition layers. The desk layer remains decorative and hidden from assistive technology; the laptop layer holds the product image and its existing `alt` text:

  ```jsx
  <div className="relative min-w-0" data-visual="office-desk">
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[72%] rounded-[2rem] bg-[#ece4da]" />
    <div aria-hidden="true" className="absolute right-8 top-3 h-20 w-20 rounded-full bg-orange-200/60 blur-2xl" />
    <div className="relative mx-auto w-full max-w-[46rem]" data-visual="office-laptop">
      <div className="relative rounded-[1.4rem] border-[0.45rem] border-[#202124] bg-[#202124] p-1 shadow-2xl shadow-slate-900/25">
        <span aria-hidden="true" className="absolute left-1/2 top-1.5 h-1.5 w-10 -translate-x-1/2 rounded-full bg-slate-700" />
        <div className="overflow-hidden rounded-[0.9rem] bg-white pt-2">
          <Image
            src="/images/venmail-office-shot-light.png"
            alt="Venia Cloud workspace with shared files and team tools"
            width={1536}
            height={724}
            className="block h-auto w-full"
          />
        </div>
      </div>
      <div aria-hidden="true" className="mx-auto h-4 w-[88%] rounded-b-[1.25rem] bg-gradient-to-b from-slate-600 to-slate-800 shadow-lg" />
    </div>
  </div>
  ```

  Keep the existing outer `min-w-0`, image aspect ratio, and source. Do not add a second product image, crop the screenshot, or add stock/AI imagery. The screen has the full laptop width; the decorative keyboard base is only `h-4`, so the screenshot remains the dominant visual.

- [ ] **Step 3: Run the focused source test and confirm GREEN**

  Run: `node --test tests/tools/homepage-mail-first.test.mjs`

  Expected: PASS, including the revised collaboration and AI navigation behavior.

- [ ] **Step 4: Commit the implementation**

  ```powershell
  git add src/components/home/MailFirstHeader.jsx src/components/PageSections/AiInboxAgentsSection.jsx src/components/PageSections/VeniaCollaborationSection.jsx tests/tools/homepage-mail-first.test.mjs
  git commit -m "Refine Office collaboration section"
  ```

### Task 4: Verify the merged landing experience

**Files:**
- Verify only: `src/components/home/MailFirstHeader.jsx`
- Verify only: `src/components/PageSections/AiInboxAgentsSection.jsx`
- Verify only: `src/components/PageSections/VeniaCollaborationSection.jsx`

- [ ] **Step 1: Run all source suites**

  Run: `npm run test:content` then `npm run test:tools`

  Expected: both suites exit 0.

- [ ] **Step 2: Build and check the static export**

  Run: `npm run build` then `node scripts/verify-landing-export.mjs`

  Expected: build exits 0 and the verifier reports `Exported metadata, offers, and 135 preserved routes verified.`

- [ ] **Step 3: Render-check the local page at desktop and mobile widths**

  Open `http://localhost:3004/` at a desktop viewport and a 390px-wide mobile viewport. Confirm:

  - Office opens `https://venia.cloud` in a new tab from both menus.
  - AI Agents is the landing label and still reaches `/#ai-inbox-agents`.
  - The exact collaboration sentence is readable.
  - The Venia screenshot is not cropped and occupies more visual area than the bezel, desk, or keyboard base.
  - The visual remains within the viewport without horizontal overflow.

- [ ] **Step 4: Commit generated feed artifacts only if their content changes**

  Inspect: `git diff --numstat -- public/rss.xml public/sitemap.xml`

  If the command has no output, restore any line-ending-only working-tree markers with:

  ```powershell
  git restore --source=HEAD --worktree -- public/rss.xml public/sitemap.xml
  ```

  If it reports content changes, inspect those changes before deciding whether they belong to this landing update.
