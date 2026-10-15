# Office Tabletop Composition Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the abstract Venia screenshot frame with a visibly office-like tabletop composition that keeps the workspace screenshot dominant.

**Architecture:** Keep all artwork in `VeniaCollaborationSection` as decorative CSS layers around the existing `next/image` screenshot. The section remains an ordinary responsive layout with no new assets, interactions, or content changes. The existing source-level homepage test asserts the composition markers so future changes do not quietly remove the visible office cues.

**Tech Stack:** Next.js, React, Tailwind CSS, Node test runner.

---

### Task 1: Specify visible foreground office cues

**Files:**
- Modify: `tests/tools/homepage-mail-first.test.mjs:175-179`
- Test: `tests/tools/homepage-mail-first.test.mjs`

- [ ] **Step 1: Write the failing test**

Replace the abstract vignette assertions with requirements for the actual tabletop and foreground objects:

```js
assert.match(collaboration, /data-visual="office-tabletop"/);
assert.match(collaboration, /data-visual="office-notebook"/);
assert.match(collaboration, /data-visual="office-pen"/);
assert.match(collaboration, /data-visual="office-plant"/);
assert.match(collaboration, /data-visual="office-laptop"/);
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `node --test tests/tools/homepage-mail-first.test.mjs`

Expected: FAIL because the notebook, pen, and plant markers do not yet exist.

- [ ] **Step 3: Commit the red test**

```powershell
git add -- tests/tools/homepage-mail-first.test.mjs
git commit -m "test: specify Office tabletop composition"
```

### Task 2: Build the screenshot-first tabletop scene

**Files:**
- Modify: `src/components/PageSections/VeniaCollaborationSection.jsx:42-59`
- Test: `tests/tools/homepage-mail-first.test.mjs`

- [ ] **Step 1: Replace abstract background layers with a desk composition**

Use a warm upper wall, a distinct horizontal tabletop, a cropped notebook with a visible pen, and a small plant silhouette at the art boundary. Keep every decorative layer `aria-hidden="true"`. Preserve the existing screenshot source and alt text.

```jsx
<div aria-hidden="true" data-visual="office-tabletop" className="absolute inset-x-0 bottom-0 h-[39%] bg-[#c8a884]" />
<div aria-hidden="true" data-visual="office-notebook" className="absolute -bottom-8 left-7 h-32 w-48 -rotate-[9deg] rounded-sm border border-[#c4a982] bg-[#f8ecd7] shadow-lg" />
<div aria-hidden="true" data-visual="office-pen" className="absolute bottom-[18%] left-28 h-2 w-32 -rotate-[12deg] rounded-full bg-[#202124] shadow-md" />
<div aria-hidden="true" data-visual="office-plant" className="absolute -right-8 bottom-[28%] h-36 w-28 rounded-t-full bg-emerald-950/80 blur-[1px]" />
```

- [ ] **Step 2: Slim the laptop silhouette without reducing screenshot priority**

Use a `border-[0.35rem]` desktop bezel, preserve the screen's width container, and retain the base below the display. Decorative objects must use lower stacking order than `data-visual="office-laptop"` so no part of the screenshot is obscured.

- [ ] **Step 3: Run the focused test to verify it passes**

Run: `node --test tests/tools/homepage-mail-first.test.mjs`

Expected: PASS with the Office collaboration test reporting `ok`.

- [ ] **Step 4: Commit the composition**

```powershell
git add -- src/components/PageSections/VeniaCollaborationSection.jsx tests/tools/homepage-mail-first.test.mjs
git commit -m "Refine Office tabletop composition"
```

### Task 3: Verify responsive rendering and regressions

**Files:**
- Modify: none
- Test: `tests/content/*.test.mjs`, `tests/tools/*.test.mjs`

- [ ] **Step 1: Run the automated suites**

Run: `npm run test:content; if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }; npm run test:tools`

Expected: both suites report zero failures.

- [ ] **Step 2: Run the production build**

Run: `npm run build`

Expected: Next.js completes optimized production compilation and static-page generation.

- [ ] **Step 3: Inspect the local preview at desktop and 390px mobile widths**

At both widths confirm: the screenshot is unobscured; tabletop, notebook, pen, and plant are visible at desktop width; no horizontal overflow exists on mobile; the Venia Cloud link and screenshot alt text are unchanged.

- [ ] **Step 4: Restore generated-only feed artifacts if the build marks them modified**

Run: `git diff --numstat -- public/rss.xml public/sitemap.xml`.

If the output is empty and `git status --short` still lists only those two files, run:

```powershell
git restore --source=HEAD --worktree -- public/rss.xml public/sitemap.xml
```

