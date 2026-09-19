# Venmail Hero Polish Design

## Goal

Present the real Venmail product as the dominant visual in a modern, relatable workspace while keeping the interface readable and authentic.

## Direction

Use a new editorial workspace background with warm natural light and restrained Venmail-orange accents. Place the existing real Venmail laptop screenshot above it without an additional simulated screen bezel. Crop the source closely enough that the inbox, compose panel, and orange Send action are immediately legible while retaining the physical laptop edge that makes the scene relatable.

## Composition

- The laptop occupies roughly 85% of the desktop hero width and begins near the top edge.
- The real product screenshot remains undistorted and is never regenerated.
- The generated asset contains environment only: desk, light, plants, and soft architectural depth; no laptop, screen, text, or logos.
- A subtle radial glow and bottom shadow separate the laptop from the background.
- Mobile uses a shallower crop centered on the compose panel and inbox, with no horizontal overflow.

## Accessibility and performance

- Keep the current descriptive product-image alternative text.
- Mark the workspace background and decorative lighting as hidden from assistive technology.
- Serve the project-local raster asset through the existing static path.
- Avoid animation so the first meaningful product view remains stable.

## Release guardrails

- Add a source-level regression check that rejects the former extra bezel wrapper and requires the close-crop treatment.
- Update the storage disclosure test so the pricing component is evaluated against the approved three-plan catalog rather than the retired region selector.
- Run content tests, tool tests, production build, export verification, and the GitHub Actions Cloudflare deployment.
