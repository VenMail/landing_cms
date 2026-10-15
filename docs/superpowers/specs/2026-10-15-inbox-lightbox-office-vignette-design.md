# Inbox lightbox and office vignette

## Goal

Keep the Venmail inbox preview on the homepage when expanded and give the Venia collaboration artwork a clearer office setting without reducing the workspace screenshot’s visual priority.

## Inbox preview lightbox

- Replace the inbox preview’s direct image URL navigation with a button that opens an in-page modal.
- Use the existing full-resolution `/email-dashboard-preview.png` image and its `Venmail inbox` description.
- Render a dark backdrop, a prominent Close button, and a contained image that scales to the available viewport without cropping.
- Close on the Close button, Escape, or clicking the backdrop.
- Keep the homepage scroll position and restore keyboard focus to the button that opened the modal.
- Use semantic dialog behavior: `role="dialog"`, `aria-modal="true"`, an accessible name, and a focused Close control on open.

## Venia collaboration artwork

- Retain the existing CSS laptop and full workspace screenshot as the primary visual.
- Add a shallow, cropped warm tabletop plane behind and below the laptop.
- Add one partially cropped folio/notebook shape and a restrained soft window-light shadow as decorative office cues.
- Mark decorative layers `aria-hidden="true"`.
- Keep the laptop screen at full component width; the foreground desk cue must stay low enough that it neither overlaps nor materially reduces the screenshot.
- Keep the existing responsive containment and avoid new external image assets.

## Verification

- Add source-level tests for the lightbox state, trigger button, dialog semantics, Escape/backdrop dismissal, focus restoration, and the retained full-resolution image source.
- Add source-level checks for the office vignette’s tabletop and cropped folio layers alongside the existing laptop and screenshot checks.
- Run the content and tool test suites, production build, and landing export verifier.
- Render-check the homepage at desktop and mobile widths: the collaboration screenshot remains unobscured, and the lightbox opens and closes without leaving the page.
