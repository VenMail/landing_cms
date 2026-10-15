# Office navigation and collaboration laptop treatment

## Goal

Make the Venia Cloud collaboration offer easier to reach from the landing-page navigation and give its product screenshot a premium office context without reducing its legibility.

## Navigation

- Add an `Office` item to the shared desktop and mobile primary navigation.
- The item links to `https://venia.cloud` in a new tab with `rel="noopener noreferrer"`.
- Retain the existing landing-page anchor links and mobile-menu close behavior.

## Homepage copy

- Rename the homepage navigation and collaboration-section label from `AI inbox agents` to `AI Agents`.
- Preserve the existing dedicated AI Agents destination and product heading.
- Replace the collaboration supporting copy with: `Share or sign files, documents, spreadsheets, forms, and slides with your team and clients.`

## Collaboration visual

- Keep the supplied Venia workspace screenshot as the primary visual and accessible image content.
- Present it inside a restrained laptop: a narrow dark bezel, subtle camera detail, and a shallow keyboard base.
- Place the laptop in a quiet warm office-desk composition made with local CSS: a soft surface, small ambient highlights, and minimal depth cues.
- Allocate the majority of the visual area to the screen; the desk, bezel, and keyboard must not obscure, crop, or materially shrink the screenshot.
- Preserve responsive containment, including `min-w-0` and overflow protection on narrow viewports.

## Verification

- Extend the homepage source test to require the Office destination and security attributes, the revised AI label, the exact collaboration copy, and the laptop composition hooks.
- Run the content suite, tool suite, production build, and landing export verifier.
- Check the rendered landing page at desktop and mobile widths to confirm the screenshot remains readable and the navigation link behaves as intended.
