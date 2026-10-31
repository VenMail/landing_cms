# Campaigns and SDR Product Page

## Purpose

Add a dedicated, non-navigation landing page that introduces Venmail’s campaign and SDR capabilities to business users. The page explains a bounded outreach workflow: prospect research, campaign preparation, individualized follow-up, and response review.

## Route and scope

- Route: `/campaigns-sdr`
- Do not add a header, footer, or other navigation link.
- Preserve existing campaign, automation, and solution pages.
- Use only capabilities already represented in the product: campaign drafting and sending, prospect research, outreach sequences, monitored replies, and campaign measurement.

## Content model

### Hero

- Heading: a direct business outcome about reaching suitable prospects.
- Supporting copy: campaigns, prospect research, and accountable follow-up.
- Primary CTA: start a Venmail business signup.
- Secondary CTA: contact sales for a business discussion.

### Workflow

Four bounded stages:

1. Define the audience and source criteria.
2. Review prospect evidence and select relevant contacts.
3. Prepare campaign messages and follow-up timing.
4. Review replies, opt-outs, and campaign results.

### Capability cards

- Prospect research: source evidence and review before outreach.
- Campaign preparation: sender identity, relevant message, and timing.
- Follow-up: clear owner, response handling, and stop requests.
- Measurement: campaign and reply signals for subsequent decisions.

### Guardrails

The page must state that recipient consent, applicable law, and opt-out requests govern outreach. It must not promise unlimited data, inbox placement, response rates, automatic qualification, or guaranteed sales results.

## Visual direction

Create three original supporting Venmail-style illustrations, used only on this page:

1. **Prospect research** — a calm desk scene with a company profile card, evidence notes, and an orange/teal research signal.
2. **Campaign sequence** — a restrained timeline of a tailored initial message and scheduled follow-up, with no performance claim.
3. **Response review** — a small reply tray, opt-out marker, and measurement cards to emphasize accountable handling.

The artwork uses the established warm Venmail landing palette, soft editorial gradients, rounded composition, and light paper/desk texture. It must avoid fake product UI, customer data, performance metrics, or interface recreation.

## Technical design

- Create `src/pages/campaigns-sdr.jsx` using the landing site’s existing layout components and metadata pattern.
- Add generated raster illustrations in `public/` with descriptive, non-personal filenames and accurate `alt` text.
- Keep the route out of navigation configuration.
- Add route coverage and copy/claim assertions to the existing landing tool tests.

## Error and access handling

- The route is publicly renderable and requires no runtime data fetch.
- Signup links retain the existing approved business signup helper and plan attribution.
- Contact links use the existing contact helper.

## Verification

- `yarn test:tools`
- `yarn build`
- Confirm the route renders successfully in the static output.
- Confirm no navigation configuration references `/campaigns-sdr`.
- Confirm customer-visible copy contains the outreach guardrails and omits prohibited outcome claims.
