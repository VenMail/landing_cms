# Mail-first homepage presentation

## Product evidence

- The homepage must use authentic Venmail product captures. Fabricated screenshots, reconstructed inboxes, simulated customer messages, and simulated delivery-result panels are prohibited.
- The approved homepage image is `public/email-dashboard-preview.png`. It was added in commit `4663280` (`Improve landing`) and is presented without a browser, device, or decorative overlay.
- Future imagery must come from an authentic product capture. Do not generate or reconstruct product interfaces for marketing use.

## Visual direction

- Use a white canvas, charcoal text (`#202124`), secondary text (`#5f6368`), and fine neutral rules (`#dadce0`). Reserve Venmail orange for the logo, primary actions, links, and small accents. White text on orange actions requires an accessible orange such as Tailwind `orange-700`.
- Load Inter through `next/font/google` at weights 400, 500, and 600. Keep headings at 600 or below. Desktop hero headings should be 56–64px with about 1.1 line height and modest negative tracking; section headings should be 36–40px. Body copy should be approximately 18px with 1.65 line height.
- Use an 8px spacing rhythm, 80–104px desktop section spacing, 48–64px mobile section spacing, and 1080–1180px content containers. Controls should be at least 44px high, with 8–10px corner radii.
- Avoid gradients, decorative browser chrome, pill-heavy layouts, heavy shadows, fabricated badges or stats, fake customer logos, and colored panels that compete with product evidence.

## Conversion audit findings

- Put pricing directly after the three practical use cases so the commercial decision follows the primary value case.
- Keep one persistent 44px signup target at mobile widths; switch to the existing desktop account actions at `sm` without duplicate hidden tab stops.
- Link the authentic inbox capture directly to its full-size source and give that link a visible caption.
- Keep secondary payment guidance and the API sample caveat inside native disclosure controls so closed details do not compete with the primary offer.

## Claims and content boundaries

- Lead with practical customer-email outcomes: inbox placement strategy, estimated open counts when tracking is enabled, and reviewable follow-up drafts. Follow immediately with quotes, invoices, and customer questions. Incoming filtering comes second; customer conversations, programmatic mail, and the wider operations suite remain supporting capabilities.
- Open counts may include repeat opens. State that privacy settings can hide or add opens, so counts are estimates.
- Follow-up suggestions use the original email, conversation, and open status. Describe them as drafts that require review before sending.
- Delivery copy may describe outbound content and sending-pattern checks, SPF, DKIM, DMARC, and email-header diagnostics. Enforcement mode is not verified, so do not claim that outgoing messages are automatically held or blocked. Do not promise inbox placement, premium delivery, uptime certifications, or outcomes controlled by recipient systems.
- Incoming filtering may describe content and sender-pattern checks, Spam routing, and optional AI review. Do not present AI review as mandatory or imply a specific probability threshold.
- API examples must match the verified agent messages contract. Label responses as excerpts and describe server acceptance without treating it as inbox proof.
- Pricing, domain activation conditions, cryptocurrency guidance, signup attribution, and destination URLs must continue to come from the established pricing and signup configuration.

## Public trust claim provenance

- `8,000+ Email accounts — As of 13 October 2026` comes from a production aggregate across 153 Employee shards: 8,188 non-deleted records with `kind=human`. The public claim excludes assistant accounts, shared accounts, records with unset kinds, activity, payment status, and customer or person counts. Only the aggregate and snapshot date are public.
- `100% Reported web uptime — 90-day reporting window` is a dated Pulsetic snapshot for `venmail.io`, `m.venmail.io`, and `venia.cloud` as of 13 October 2026. It describes web availability only and is not an SMTP, delivery, or SLA claim.

## Professional email illustration

- `public/professional-address-art.png` was generated with OpenAI's built-in image generation tool for the custom-domain email section.
- Prompt summary: a text-free, transparent-background editorial illustration with two business people, an oversized envelope and an `@` motif; flat coral, orange, cream, and charcoal shapes matching the Contacts and Calendar artwork. The prompt excluded product UI, status indicators, dashboards, and screenshots.
