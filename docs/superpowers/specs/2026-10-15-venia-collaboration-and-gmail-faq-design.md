# Venia Cloud collaboration section and Gmail FAQ

## Purpose

Add a concise collaboration offer to the approved mail-first landing page and make Gmail access through Venmail IMAP and SMTP credentials explicit in the homepage FAQ.

## Placement and structure

Place the new `VeniaCollaborationSection` after `AiInboxAgentsSection` and before the existing “Work beyond email” section. The component is self-contained and the homepage only imports and renders it once.

The section contains:

- A `Venia Cloud` eyebrow.
- Heading: `Work together with your team`.
- Copy naming files, documents, spreadsheets, forms, and slides as shared work.
- A primary external link to `https://venia.cloud` with `target="_blank"` and `rel="noopener noreferrer"`.
- A composed product artwork, not a bare screenshot.

## Artwork

Use `public/images/venmail-office-shot-light.png`, copied from the approved supplied screenshot. Keep the light workspace capture as the focal contrast inside a dark charcoal presentation surface.

The composition uses a rounded browser-like frame, subtle orange and blue radial illumination, a restrained workspace label, border, shadow, and internal padding. It must not recreate product UI or obscure the source screenshot. The image keeps its intrinsic aspect ratio, has descriptive alternative text, and remains within the viewport on narrow screens through `min-w-0`, `overflow-hidden`, and responsive layout rules.

## Gmail FAQ

Add the following homepage FAQ item under the existing account and delivery questions:

- Question: `Can I use Venmail with Gmail?`
- Answer: `Yes. Configure Gmail with your Venmail IMAP and SMTP credentials to send and receive through Gmail.`

The language describes the supported setup without promising automated configuration, delivery outcomes, or broader Gmail synchronization behavior.

## Quality gates

- Source tests assert the homepage renders the collaboration section once, the Venia destination is correct, the approved image is referenced, and the Gmail FAQ uses the supported IMAP/SMTP language.
- The focused test must fail before implementation and pass after it.
- Run the content and site test suites, production build, and export verifier.
- Confirm the local rendered homepage exposes the collaboration heading, Venia link, and Gmail FAQ.
