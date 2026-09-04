# Venmail visibility sprint and WordPress product brief

Prepared September 4, 2026. Plugin rankings below are product judgments based on fit, differentiation and implementation scope, not measured search demand or revenue forecasts.

## What this sprint delivers

- A free, browser-only [email header analyzer](https://venmail.io/tools/email-header-analyzer): reported SPF/DKIM/DMARC values, separate receiver entries, practical next checks and a downloadable summary that excludes input identifiers.
- Three expanded supporting guides: [free audit](https://venmail.io/blog/free-email-deliverability-audit), [post-migration authentication](https://venmail.io/blog/spf-dkim-dmarc-after-migration), and [authentication and bounces](https://venmail.io/blog/email-authentication-bounce-codes). Each has a direct tool CTA, a distinct worked example and explicit limits on what the evidence establishes.
- Canonical redirects for existing trailing-slash and .html page aliases, true HTTP 404s for missing pages, and revalidation for robots/sitemap/RSS files. The deployment preserves the actual error page.
- The tool is linked from the footer and included in the sitemap. Its explanation, metadata and WebApplication schema are statically rendered; analysis requires JavaScript.
- Specific acquisition events layered on the existing GA4 installation.

These changes improve technical eligibility and usefulness. They do not establish increased rankings, traffic or AI citations. Google says its usual SEO practices apply to AI Overviews and AI Mode, with no special AI schema or text file required; inclusion is not guaranteed. [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)

## Measurement: implemented versus pending

GA4 tag `G-18DJTP5FYM` already existed. This sprint adds:

| Event | Meaning | Parameters | Interpretation |
|---|---|---|---|
| `article_tool_clicked` | Supporting article CTA clicked | `article_slug`, `cta_location`, `tool_id` | Tool interest, not a completed analysis |
| `article_cta_clicked` | Other article CTA clicked | `article_slug`, `cta_location` | Next-step intent, not a signup |
| `email_header_analyzed` | Input successfully parsed | `tool_id`, `input_kind` | Tool use; filter `input_kind=pasted` to exclude the sample |
| `email_header_report_downloaded` | Summary download initiated | `tool_id`, `input_kind` | Report action, not confirmation that the user kept it |
| `email_header_venmail_clicked` | Tool’s free-plan CTA clicked | `tool_id`, `input_kind` | Product interest, not registration completion |

Tool events require the tool’s optional checkbox, which defaults off and is not persisted. The site’s existing page analytics still runs. Do not treat opt-in event counts as total usage or divide them by all visitors to claim a completion rate. Article events use the existing site analytics behavior. No event includes pasted text, authentication statuses, receiver names, email addresses, message IDs or domains from the analyzed message.

**Pending account work:** Search Console and GA4 account access or exports are needed. Authenticated analytics access has not been established; opening the GA4 site in the available browser failed with a DNS-resolution error. No 28-day traffic baseline, Search Console property verification, event arrival in GA4, or actual signup attribution has been confirmed in this sprint.

Once account access is available:

1. Verify the exact `venmail.io` Search Console property, sitemap processing and URL inspection for the tool plus the three supporting guides. Request indexing for these priority URLs if appropriate.
2. Export the previous 28 days by page/query/country/device, then repeat on the same window after enough new data exists. Keep the release date as an annotation, not an assumed causal explanation.
3. Confirm the new events in GA4 Realtime/DebugView; register event-scoped custom dimensions for `article_slug`, `cta_location`, `tool_id`, and `input_kind` if useful and available.
4. Build an exploration for organic landing page → article CTA → tool page → opted-in analysis → product CTA. Deduplicate by users or sessions as appropriate; raw repeated clicks are not unique prospects.
5. Verify the registration flow separately before calling any event a signup. A pricing-page visit is a leading indicator only. Cross-domain attribution to the app has not been implemented here.

| Weekly metric | Baseline | Target or decision rule |
|---|---|---|
| Seed opportunities with 5–10 assigned guides | 11 of 11 | Maintain useful distinct coverage; avoid quota-driven duplicates |
| Published articles | 82 | Improve articles with real impressions before adding volume |
| Search Console indexed priority URLs | Not available | Inspect all four priority URLs; resolve exclusions with evidence |
| Non-brand impressions/clicks by opportunity | Not available | Compare equivalent 28-day windows and query intent |
| Article → tool interest | New events, not yet confirmed in GA4 | Find pages with visits but few useful next-step clicks |
| Real-input tool use | Opt-in only; no baseline | Track separately from sample activity and report consent coverage limitations |
| Qualified signups | Not instrumented end to end | Link completed registrations before attributing acquisition |
| AI referrals and cited URLs | Not available | Review referral sources and a fixed monthly prompt set; log model/date/location |

AI prompt checks are a reproducible sample, not a universal rank. Use the same 10–20 problem statements from the seeded opportunities, record whether Venmail or a specific guide is cited, save the answer and date, and repeat manually. Google AI-feature traffic is included in Search Console’s Web reporting, so do not label all Google organic traffic “AI traffic.” [Google measurement guidance](https://developers.google.com/search/docs/appearance/ai-features#measure-performance)

## A practical article quality score

Use a 100-point editorial rubric rather than presenting a score as a probability of ranking:

| Dimension | Weight | Full-credit evidence |
|---|---:|---|
| Opportunity and intent fit | 20 | Specific user problem, accurate promise, title matches the job |
| Practical utility | 25 | Reader can complete a task with steps, a worked example and a completion check |
| Readability | 15 | Plain language, defined terminology, scannable sections, clear mobile layout |
| Evidence and honesty | 15 | Primary sources, verified product claims, explicit limits, genuine examples labeled correctly |
| Search accessibility | 15 | Indexable HTML, correct status/canonical, internal links, valid metadata, current discovery files |
| Useful next action | 10 | Contextual free utility or relevant Venmail step, event instrumentation |

Proposed publication floor: 80/100 with no unsupported free-tier claims or broken core task. A reviewer should assign each score and cite evidence. This sprint does not rescore all 82 articles. The earlier approximate 6/10 acquisition-readiness judgment remains an editorial assessment, not a traffic prediction; reader usefulness was stronger than measurement and external authority.

## WordPress plugin opportunities

| Priority | Proposed product | Useful free core | Venmail opportunity fit | Main constraint |
|---|---|---|---|---|
| 1 | **Venmail Email Health** | Before/after migration checklist, current mail-path checks, local header interpretation, private developer handoff report | WordPress SMTP, deliverability, agency migration | Diagnostics already exist; win on clarity, privacy and the migration workflow |
| 2 | **Venmail Form Delivery Check** | Controlled test walkthrough for one supported form plugin; distinguish submission saved, mail attempted and receipt manually confirmed | WordPress, lead generation, agencies | Form integrations and sensitive submission data require careful boundaries |
| 3 | **Venmail Order Email Check** | Explain WooCommerce notification settings and correlate selected test-order events with mail attempts | Ecommerce transactions and authentication mail | Existing WooCommerce troubleshooting/logging covers part of this; compatibility and duplicate sends matter |
| 4 | **Venmail Subscriber Import Check** | Browser-side CSV preview, duplicate/format checks, column mapping and import-ready download | Small-business marketing and lead hygiene | Must not claim mailbox verification or infer consent from an address |
| 5 | **Venmail Email Template Preflight** | Check missing alt text, empty links, placeholder tokens and plain-text availability on supported templates | React email, commerce and agencies | A preview cannot guarantee rendering in every inbox |

The SMTP market already includes [FluentSMTP](https://wordpress.org/plugins/fluent-smtp/) and [Check & Log Email](https://wordpress.org/plugins/check-email/). Diagnostic competition includes [Does My Email Work](https://wordpress.org/plugins/does-my-email-work/) and [Elevoire Email Delivery Doctor](https://wordpress.org/plugins/elevoire-email-delivery-doctor/). These are overlapping products, not proof that the proposed niche is empty. Before committing to a larger build, test the first workflow with five site owners or agencies and watch whether they can diagnose the next action without support.

WooCommerce already documents how to distinguish missing generation, sending errors and deliverability issues. An extension must add a clearer cross-step workflow or evidence report rather than duplicate a log screen. [WooCommerce email troubleshooting](https://woocommerce.com/document/email-faq/)

## Recommended first release: Venmail Email Health

**Promise:** “Changed your host or email provider? Check what WordPress is using, understand a received test and hand your developer a clear report.”

Keep the first version useful without a Venmail account:

1. A Tools screen showing supported active mailer integrations, From configuration and relevant local warnings. Label unknown configurations as unknown; never read out or export SMTP passwords or API keys.
2. A before/after checklist for mailbox, contact-form and order-notification routes. Preserve structured results only when the administrator chooses to save them; exclude message bodies and customer data.
3. An explicit test-send action to an administrator-controlled address, using the site’s existing mail route. Do not replace transport configuration or send automatically on activation.
4. A local header interpreter based on the web analyzer. Explain that a successful `wp_mail()` call is a handoff result, not proof of receipt. [WordPress `wp_mail()` reference](https://developer.wordpress.org/reference/functions/wp_mail/)
5. An export preview with fixed status labels, local configuration warnings and manually selected context. Sensitive details stay excluded by default; the user decides what to give their developer.
6. Contextual links to the relevant free Venmail guide and an optional provider-setup path. No forced account, public-site backlink, tracking pixel or repeated upgrade notice.

**Release boundary:** No automatic DNS writes, bulk resends, inbox-placement score, background customer-message capture, or external diagnostic service in version one. DNS/network checks can be a later explicit feature with a clear data description. This keeps the plugin compatible with existing SMTP choices and avoids promising evidence it cannot observe.

**Acceptance checks:** capability and nonce protection; escaped output; input size limits; no secrets in reports; no body storage; isolated test-email flow; no unintended mailer changes; clean uninstall; keyboard-accessible translated strings; installation tests on the supported WordPress/PHP matrix, both with default mail and selected SMTP plugins. Validate the exact supported versions during implementation.

## Directory publication and distribution

The WordPress deliverable in this sprint is a researched brief, not a plugin ZIP or submitted listing. No account login is needed to research it. Directory submission will need a completed, tested plugin and the owner’s WordPress.org account; a WordPress.com site account alone is not a published plugin listing.

Use GPL-compatible licensing, ship readable source/build instructions, keep core utility free, disclose external services, and obtain consent for external tracking. Public-site credits must be opt-in; promotional notices should be restrained. [WordPress plugin guidelines](https://developer.wordpress.org/plugins/wordpress-org/detailed-plugin-guidelines/)

Before submission, run [Plugin Check](https://wordpress.org/plugins/plugin-check/), prepare the readme, screenshots and privacy description, verify the proposed slug, and establish a support owner. Submit through the official directory and handle review feedback; submission is not approval. [Submission and maintenance process](https://developer.wordpress.org/plugins/wordpress-org/planning-submitting-and-maintaining-plugins/)

After release, connect each distribution asset to a specific job:

- A public GitHub repository with installation, tests, example reports and a clear license; link the relevant Venmail guide from the README.
- A directory listing centered on diagnosing WordPress email and migration checks, with accurate screenshots and limited relevant tags.
- Five supporting guides: test WordPress mail after moving hosts; compare mail before/after a provider change; understand “sent” versus received; prepare a private email support report; check website sender configuration.
- A short recorded walkthrough using synthetic data, embedded on the plugin landing page and supporting guides.
- Helpful answers to relevant community questions where a tool or guide solves the problem. No mass posting, manufactured reviews, hidden backlinks or unsolicited outreach.

## Next visibility work, in order

1. Complete account-level measurement and index inspection as soon as access arrives.
2. Validate the Email Health migration workflow with real site owners, then build the narrowly scoped plugin.
3. Upgrade the pages gaining relevant impressions with tested screenshots, real examples and concise answers; retain accurate synthetic labels where applicable.
4. Publish topic hubs for the strongest observed clusters, with links organized by task and prerequisites.
5. Add verifiable case studies and maintain a public changelog for the free tools; build evidence that people and answer engines can cite.

This is a prioritized backlog, not an automation schedule. Outreach and WordPress publication have not been performed.
