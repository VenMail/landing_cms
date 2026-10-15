# Inbox Lightbox and Office Vignette Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Open the homepage inbox preview in an accessible lightbox and strengthen the Venia office context without competing with its product screenshot.

**Architecture:** Extract the stateful inbox trigger and modal into `InboxPreviewLightbox.jsx`, leaving `index.jsx` responsible only for placement. Keep collaboration decoration in `VeniaCollaborationSection.jsx` as `aria-hidden` CSS layers, with the supplied Venia image remaining the only product artwork.

**Tech Stack:** Next.js Pages Router, React hooks, `next/image`, Tailwind CSS, Node built-in test runner.

---

## File structure

- `src/components/home/InboxPreviewLightbox.jsx` — owns open state, focus control, Escape/backdrop dismissal, and the full-size inbox image dialog.
- `src/pages/index.jsx` — imports and places the lightbox component in the existing hero location.
- `src/components/PageSections/VeniaCollaborationSection.jsx` — adds decorative tabletop, notebook, and light-shadow layers behind the existing laptop.
- `tests/tools/homepage-mail-first.test.mjs` — asserts lightbox and vignette source contracts.

### Task 1: Specify the lightbox and office context

**Files:**
- Modify: `tests/tools/homepage-mail-first.test.mjs:19-30, 145-175`

- [ ] **Step 1: Write failing source expectations**

  Change the inbox preview test to load `InboxPreviewLightbox.jsx` and require the trigger, dialog semantics, state, dismissal hooks, focus restoration, and image source:

  ```js
  const [homepage, lightbox] = await Promise.all([
    readSource('../../src/pages/index.jsx'),
    readSource('../../src/components/home/InboxPreviewLightbox.jsx'),
  ]);

  assert.match(homepage, /import InboxPreviewLightbox from/);
  assert.match(homepage, /<InboxPreviewLightbox \/>/);
  assert.match(lightbox, /const \[isOpen, setIsOpen\] = useState\(false\)/);
  assert.match(lightbox, /<button[\s\S]*?aria-haspopup="dialog"/);
  assert.match(lightbox, /role="dialog"/);
  assert.match(lightbox, /aria-modal="true"/);
  assert.match(lightbox, /onKeyDown/);
  assert.match(lightbox, /event\.key === 'Escape'/);
  assert.match(lightbox, /event\.target === event\.currentTarget/);
  assert.match(lightbox, /triggerRef\.current\?\.focus\(\)/);
  assert.match(lightbox, /src="\/email-dashboard-preview\.png"/);
  ```

  Extend the existing collaboration test with:

  ```js
  assert.match(collaboration, /data-visual="office-tabletop"/);
  assert.match(collaboration, /data-visual="office-folio"/);
  assert.match(collaboration, /data-visual="office-window-light"/);
  ```

- [ ] **Step 2: Run the focused test and confirm RED**

  Run: `node --test tests/tools/homepage-mail-first.test.mjs`

  Expected: FAIL because the lightbox component and the three office-vignette markers do not yet exist.

- [ ] **Step 3: Commit the failing test**

  ```powershell
  git add tests/tools/homepage-mail-first.test.mjs
  git commit -m "test: specify inbox lightbox and office vignette"
  ```

### Task 2: Build the focus-safe inbox preview lightbox

**Files:**
- Create: `src/components/home/InboxPreviewLightbox.jsx`
- Modify: `src/pages/index.jsx:1-105`

- [ ] **Step 1: Create the stateful component**

  Use a trigger ref and a close callback that restores focus after clearing state:

  ```jsx
  import Image from 'next/image';
  import { useEffect, useRef, useState } from 'react';

  export default function InboxPreviewLightbox() {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef(null);
    const closeButtonRef = useRef(null);

    const close = () => {
      setIsOpen(false);
      requestAnimationFrame(() => triggerRef.current?.focus());
    };

    useEffect(() => {
      if (!isOpen) return undefined;
      closeButtonRef.current?.focus();
      const onKeyDown = event => {
        if (event.key === 'Escape') close();
      };
      window.addEventListener('keydown', onKeyDown);
      return () => window.removeEventListener('keydown', onKeyDown);
    }, [isOpen]);
  }
  ```

- [ ] **Step 2: Render the non-navigating trigger and contained dialog**

  Use a `button` for the current preview and label, then conditionally render a fixed backdrop with an explicit close button. The backdrop click handler must close only if `event.target === event.currentTarget`; the content must use `max-h-[calc(100vh-5rem)] max-w-full object-contain` so the image is never cropped.

  ```jsx
  <button ref={triggerRef} type="button" aria-haspopup="dialog" aria-expanded={isOpen} onClick={() => setIsOpen(true)}>
    <Image src="/email-dashboard-preview.png" width={1802} height={905} priority sizes="(max-width: 1088px) calc(100vw - 32px), 1040px" alt="Venmail inbox" />
    <span>Open full-size Venmail inbox image.</span>
  </button>

  {isOpen && (
    <div role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) close(); }}>
      <section role="dialog" aria-modal="true" aria-label="Venmail inbox preview">
        <button ref={closeButtonRef} type="button" onClick={close}>Close preview</button>
        <Image src="/email-dashboard-preview.png" width={1802} height={905} alt="Venmail inbox" className="max-h-[calc(100vh-5rem)] max-w-full object-contain" />
      </section>
    </div>
  )}
  ```

- [ ] **Step 3: Replace the direct-link markup in the homepage**

  Import `InboxPreviewLightbox` in `src/pages/index.jsx` and replace the existing wrapper containing `<a href="/email-dashboard-preview.png">` with `<InboxPreviewLightbox />` at the same hero location.

- [ ] **Step 4: Run focused test and confirm GREEN**

  Run: `node --test tests/tools/homepage-mail-first.test.mjs`

  Expected: the inbox-preview assertions pass; only the three missing office-vignette checks fail.

### Task 3: Add restrained office cues around the collaboration laptop

**Files:**
- Modify: `src/components/PageSections/VeniaCollaborationSection.jsx:42-60`

- [ ] **Step 1: Add a shallow tabletop plane and soft window light**

  Inside the existing `data-visual="office-desk"` container, preserve the current laptop and add decorative layers:

  ```jsx
  <div aria-hidden="true" data-visual="office-tabletop" className="absolute inset-x-0 bottom-0 h-[48%] bg-[#d9c7b3]" />
  <div aria-hidden="true" data-visual="office-window-light" className="absolute -left-12 top-6 h-40 w-48 -rotate-12 bg-white/45 blur-3xl" />
  ```

- [ ] **Step 2: Add a partially cropped folio below the screen**

  Add one non-interactive notebook/folio shape, anchored at the lower right and behind the laptop:

  ```jsx
  <div aria-hidden="true" data-visual="office-folio" className="absolute -bottom-10 right-4 h-28 w-44 -rotate-6 rounded-tl-sm border border-[#b59876] bg-[#f7ead7] shadow-lg" />
  ```

  Keep all three layers before the `data-visual="office-laptop"` element in DOM order. Do not change the image dimensions, screen width, or laptop base height.

- [ ] **Step 3: Run focused test and confirm GREEN**

  Run: `node --test tests/tools/homepage-mail-first.test.mjs`

  Expected: all homepage tests pass.

- [ ] **Step 4: Commit implementation**

  ```powershell
  git add src/components/home/InboxPreviewLightbox.jsx src/pages/index.jsx src/components/PageSections/VeniaCollaborationSection.jsx tests/tools/homepage-mail-first.test.mjs
  git commit -m "Add inbox lightbox and office vignette"
  ```

### Task 4: Verify interaction and responsive composition

**Files:**
- Verify only: `src/components/home/InboxPreviewLightbox.jsx`
- Verify only: `src/components/PageSections/VeniaCollaborationSection.jsx`

- [ ] **Step 1: Run all automated checks**

  Run: `npm run test:content`, `npm run test:tools`, `npm run build`, then `node scripts/verify-landing-export.mjs`.

  Expected: both test commands and the build exit 0; export verification reports 135 preserved routes.

- [ ] **Step 2: Desktop browser check**

  Open `http://localhost:3004/`, activate `Open full-size Venmail inbox image.`, and confirm the URL stays `http://localhost:3004/`, the dialog exposes `Close preview`, and the full image is not cropped. Close with Escape and confirm focus returns to the trigger.

- [ ] **Step 3: Mobile browser check**

  At a 390px viewport, confirm the dialog image remains contained without horizontal overflow and the office laptop visual shows the low tabletop/partial folio without overlapping the screenshot.

- [ ] **Step 4: Leave only intentional changes**

  Inspect: `git diff --numstat -- public/rss.xml public/sitemap.xml`.

  If no content changes are reported, run:

  ```powershell
  git restore --source=HEAD --worktree -- public/rss.xml public/sitemap.xml
  ```
