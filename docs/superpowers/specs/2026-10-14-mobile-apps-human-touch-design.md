# Mobile apps human-touch design

## Goal

Place Venmail mobile apps after the `Work beyond email` suite and give the product captures a warm, human context without diluting their evidence value.

## Composition

- Keep the existing heading, availability copy, verified store links, and two genuine Venmail captures.
- Move `MobileAppsSection` immediately after the `Work beyond email` section.
- Add one non-interactive, transparent-background illustration of a person at a café or transit stop reviewing mail on a phone.
- Position the illustration behind and beside the two device frames on wide layouts; reduce it on narrow layouts so both device screenshots and store links remain clear.
- Match the landing artwork palette: warm off-white, charcoal, coral, mint, and muted lilac. Avoid gradients, logos, invented product screens, or text within the illustration.

## Accessibility and behavior

- Treat the illustration as decorative (`alt=""`); the real mobile capture retains its descriptive alternative text.
- Keep both store controls at least 44px high, with their current names and destinations.
- Preserve no horizontal page overflow at 390px. The decoration must not cover controls or intercept input.

## Verification

- Regression coverage confirms the homepage order, decorative asset usage, correct store links, and responsive containment.
- Inspect the homepage at 390px and 1440px after implementation.
- Run the content and tools suites, production build, export verifier, then Cloudflare deployment workflow.
