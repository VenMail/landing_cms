const publishedSlugs = new Set([
  "cloudflare-email-hosting-vs-email-routing",
  "switch-email-provider-keep-same-address",
  "migrate-cpanel-email-to-new-host",
  "google-workspace-alternatives-email-only",
  "amazon-ses-alternatives",
  "use-venmail-with-your-amazon-ses-account",
  "free-mailgun-alternatives",
  "email-deliverability-services",
  "wordpress-not-sending-email",
  "white-label-email-marketing-platforms",
]);

const measured = {
  "email-deliverability-services": { serverOpportunityId: 1, volume: 590, cpc: 89.76, difficulty: 15 },
  "amazon-ses-alternatives": { serverOpportunityId: 4, volume: 110, cpc: 23.68, difficulty: 0 },
  "free-mailgun-alternatives": { serverOpportunityId: 4, volume: 20, cpc: 56.35, difficulty: 0 },
  "email-to-webhook-architecture": { serverOpportunityId: 6, volume: 70, cpc: 21.58, difficulty: 0 },
  "wordpress-not-sending-email": { serverOpportunityId: 8, volume: 110, cpc: 1.54, difficulty: 0 },
  "white-label-email-marketing-platforms": { serverOpportunityId: 9, volume: 170, cpc: 36.6, difficulty: 3 },
};

const clusters = [
  {
    cluster: "Cloudflare email infrastructure",
    category: "Cloudflare & DNS",
    sources: ["cloudflare-email-routing", "cloudflare-email-dns", "cloudflare-dmarc"],
    topics: [
      ["cloudflare-email-hosting-vs-email-routing", "Cloudflare Email Routing vs email hosting: what businesses actually need", "cloudflare email hosting", "Choose forwarding or a real mailbox without confusing DNS management with email hosting."],
      ["business-email-hosting-cloudflare-domain", "Business email hosting for a Cloudflare-managed domain", "business email hosting for cloudflare domain", "Connect mailbox hosting while keeping authoritative DNS at Cloudflare."],
      ["one-click-cloudflare-dns-email-setup", "One-click Cloudflare DNS authorization for business email", "one click cloudflare email setup", "Understand a signed Domain Connect flow before granting a setup link."],
      ["cloudflare-email-routing-plus-smtp", "Cloudflare Email Routing plus SMTP vs a complete mailbox", "cloudflare email routing alternative", "Decide whether forwarding plus a sender is sufficient for daily business mail."],
      ["cloudflare-mx-spf-dkim-dmarc-guide", "MX, SPF, DKIM and DMARC on Cloudflare: a migration map", "cloudflare dns email setup", "Publish email records correctly and avoid proxying mail hostnames."],
    ],
  },
  {
    cluster: "Provider migration operations",
    category: "Email migration",
    sources: ["cloudflare-email-dns", "google-data-migration", "microsoft-email-migration"],
    topics: [
      ["switch-email-provider-keep-same-address", "How to switch email provider and keep the same address", "switch email provider keep same address", "Move mailboxes, DNS and devices without changing the address customers know."],
      ["zero-downtime-mx-cutover-checklist", "Zero-downtime MX cutover checklist for business email", "move business email without downtime", "Stage both systems and preserve rollback options during DNS cutover."],
      ["migrate-yandex-360-email", "How to migrate Yandex 360 business email safely", "migrate yandex business email", "Inventory aliases and copy mail before changing delivery."],
      ["migrate-google-workspace-email", "Migrate Google Workspace email without losing messages", "migrate google workspace email", "Plan credentials, labels, data copy and final synchronization."],
      ["migrate-microsoft-365-email", "Migrate Microsoft 365 email to another provider", "migrate microsoft 365 email to another provider", "Preserve folders, shared addresses and continuity during a tenant exit."],
    ],
  },
  {
    cluster: "Mailbox and web-host migrations",
    category: "Email migration",
    sources: ["cpanel-email-accounts", "google-data-migration", "cloudflare-email-dns"],
    topics: [
      ["migrate-cpanel-email-to-new-host", "Move cPanel email to a new host without losing mail", "move cpanel email to new host", "Inventory web-host mailboxes, copy by IMAP and cut over with a tested rollback."],
      ["migrate-email-contacts-calendars", "How to migrate email, contacts and calendars together", "migrate contacts calendar and email", "Treat IMAP mail, address books and calendars as three separate data jobs."],
      ["migrate-zoho-mail-to-new-provider", "Migrate Zoho Mail to a new provider", "migrate zoho mail", "Plan export, IMAP access, aliases and a staged DNS switch."],
      ["migrate-fastmail-proton-mail", "Move from Fastmail or Proton Mail to another provider", "migrate fastmail email", "Account for encryption, export formats, aliases and client configuration."],
      ["migrate-email-aliases-forwarders-autoreplies", "Migrate aliases, forwarding rules and automatic replies", "migrate email aliases", "Rebuild the invisible routing rules that mailbox-only migrations miss."],
    ],
  },
  {
    cluster: "Provider alternatives",
    category: "Comparisons",
    sources: ["google-workspace-pricing", "microsoft-365-pricing", "zoho-mail-pricing", "fastmail-pricing", "proton-business"],
    topics: [
      ["google-workspace-alternatives-email-only", "Google Workspace alternatives for teams that mainly need email", "google workspace alternative for email", "Compare mailbox-first providers without paying for an office suite you may not use."],
      ["microsoft-365-alternatives-small-business", "Microsoft 365 email alternatives for small businesses", "microsoft 365 email alternative", "Compare admin complexity, office apps and mailbox needs."],
      ["zoho-mail-alternatives", "Zoho Mail alternatives: five honest choices", "zoho mail alternative", "Match collaboration, privacy and migration requirements to the right provider."],
      ["yandex-360-alternatives-business", "Yandex 360 alternatives for business email", "yandex 360 alternative for business", "Evaluate region, support, migration and collaboration trade-offs."],
      ["fastmail-proton-vs-venmail", "Fastmail vs Proton Mail vs Venmail for custom domains", "fastmail proton mail alternative", "Choose between privacy, polished personal email and multi-domain administration."],
    ],
  },
  {
    cluster: "Amazon SES and developer infrastructure",
    category: "Developer email",
    sources: ["aws-ses-send", "aws-ses-credentials", "aws-ses-sandbox", "aws-ses-identities", "aws-ses-mail-from"],
    topics: [
      ["amazon-ses-alternatives", "Amazon SES alternatives: when infrastructure is not enough", "amazon ses alternative", "Compare sending infrastructure, developer experience, mailboxes and managed operations."],
      ["use-venmail-with-your-amazon-ses-account", "How to use Venmail with your own Amazon SES account", "use venmail with amazon ses", "Connect a dedicated AWS identity and validate the integration without sharing root credentials."],
      ["managed-email-vs-bring-your-own-ses", "Managed email delivery vs bring your own Amazon SES", "bring your own amazon ses", "Choose operational simplicity or direct AWS quota and reputation ownership."],
      ["amazon-ses-api-vs-smtp-credentials", "Amazon SES API credentials vs SMTP credentials", "amazon ses smtp credentials", "Avoid the common mistake of using one credential type in the other interface."],
      ["amazon-ses-production-readiness", "SES sandbox, DKIM, custom MAIL FROM and production access", "amazon ses production access checklist", "Prepare a verified sending domain before production traffic."],
    ],
  },
  {
    cluster: "Transactional email alternatives",
    category: "Developer email",
    sources: ["mailgun-pricing", "sendgrid-pricing", "postmark-pricing", "aws-ses-send"],
    topics: [
      ["free-sendgrid-alternatives", "Free SendGrid alternatives for early-stage products", "free sendgrid alternative", "Compare usable free entry points without ignoring limits and operational work."],
      ["free-mailgun-alternatives", "Free Mailgun alternatives: compare the real operating cost", "free mailgun alternative", "Compare SES, SendGrid, Postmark and Venmail by workload rather than headline price."],
      ["sendgrid-vs-mailgun-vs-postmark-vs-ses", "SendGrid vs Mailgun vs Postmark vs Amazon SES", "sendgrid mailgun postmark ses comparison", "Use a common decision matrix for transactional sending."],
      ["transactional-email-provider-migration", "Transactional email provider migration checklist", "migrate transactional email provider", "Move templates, events, suppression lists and DNS without losing observability."],
      ["email-api-vs-business-mailbox", "When an email API is better than a business mailbox", "email api vs mailbox", "Separate application-generated messages from human correspondence."],
    ],
  },
  {
    cluster: "Deliverability and authentication",
    category: "Deliverability",
    sources: ["dmarc-org", "cloudflare-dmarc", "aws-ses-identities"],
    topics: [
      ["email-deliverability-services", "Email deliverability services: platform, specialist or agency?", "email deliverability services", "Diagnose the failure first, then hire the right kind of help."],
      ["hire-email-deliverability-specialist", "When to hire an email deliverability specialist", "email deliverability specialist", "Know which evidence and access a credible specialist should request."],
      ["inbox-placement-testing", "Inbox placement testing without misleading scores", "inbox placement test", "Interpret seed tests as diagnostic samples, not guaranteed delivery forecasts."],
      ["spf-dkim-dmarc-after-migration", "SPF, DKIM and DMARC alignment after an email migration", "email authentication after migration", "Validate every visible From path after a provider switch."],
      ["email-authentication-bounce-codes", "Diagnose email authentication failures and bounce codes", "email authentication failed", "Map SMTP evidence to identity, policy, reputation or recipient problems."],
    ],
  },
  {
    cluster: "WordPress and commerce reliability",
    category: "Troubleshooting",
    sources: ["wordpress-email", "wordpress-site-health", "dmarc-org"],
    topics: [
      ["wordpress-not-sending-email", "WordPress not sending email: a diagnostic runbook", "wordpress not sending emails", "Trace generation, queueing, transport, authentication and delivery in order."],
      ["contact-form-7-not-sending-email", "Contact Form 7 not sending email: test each handoff", "contact form 7 not sending email", "Separate form submission success from message delivery."],
      ["woocommerce-email-not-sending", "WooCommerce transactional emails not sending", "woocommerce email not sending", "Inspect order events, templates, queues, SMTP and recipient evidence."],
      ["wordpress-emails-going-to-spam", "Why WordPress emails go to spam and how to investigate", "wordpress emails going to spam", "Align identities and inspect content, reputation and engagement evidence."],
      ["shopify-woocommerce-email-infrastructure", "Shopify and WooCommerce lifecycle email infrastructure", "ecommerce transactional email infrastructure", "Separate receipts, support mail and marketing streams."],
    ],
  },
  {
    cluster: "Automation and parsing",
    category: "Email automation",
    sources: ["aws-ses-send", "google-helpful-content", "openai-crawlers"],
    topics: [
      ["email-to-webhook-architecture", "Email-to-webhook architecture: reliable inbound automation", "email to webhook", "Design parsing, authentication, retries and idempotency before automating."],
      ["zapier-email-parser-alternatives", "Zapier Email Parser alternatives for production workflows", "zapier email parser alternative", "Compare rules, code, APIs and human review for variable messages."],
      ["extract-email-data-to-spreadsheet", "Extract structured email data into a spreadsheet safely", "extract data from email to spreadsheet", "Validate fields and preserve the original message for audit."],
      ["turn-inbound-email-into-tasks", "Turn inbound email into tasks without losing context", "email to task automation", "Design ownership, deduplication and reply handling."],
      ["webhook-to-email-vs-email-to-webhook", "Webhook-to-email vs email-to-webhook patterns", "webhook to email", "Choose direction based on the system that owns the event."],
    ],
  },
  {
    cluster: "Agencies and white-label email",
    category: "Agencies",
    sources: ["cloudflare-email-dns", "aws-ses-credentials", "google-data-migration"],
    topics: [
      ["white-label-email-marketing-platforms", "White-label email platforms: an agency evaluation framework", "white label email marketing", "Evaluate tenancy, branding, deliverability responsibility and client handoff."],
      ["email-infrastructure-for-agencies", "Email infrastructure for agencies managing many domains", "email hosting for agencies", "Standardize onboarding while preserving client ownership."],
      ["shareable-email-administrator-setup-links", "Shareable setup links for technical and email administrators", "email administrator setup link", "Delegate DNS authorization without circulating reusable credentials."],
      ["pooled-storage-multi-tenant-email", "Pooled storage and multi-tenant email administration", "pooled storage email hosting", "Compare per-seat limits with organization-level allocation and controls."],
      ["managed-client-email-migration", "Managed email migration for client domains", "managed email migration service", "Define responsibility, evidence, rollback and sign-off for each client."],
    ],
  },
];

const defaultMetrics = Object.freeze({ volume: null, cpc: null, difficulty: null });
let numericId = 0;

function makeOpportunity(group, topic) {
  numericId += 1;
  const [slug, title, primaryKeyword, problem] = topic;
  const metric = measured[slug];
  const status = publishedSlugs.has(slug) ? "published" : "brief";
  const migrationIntent = /migrat|switch|move|cutover/i.test(`${slug} ${title}`);
  const developerIntent = /ses|mailgun|sendgrid|webhook|api|wordpress|deliverability/i.test(slug);
  const cta = migrationIntent
    ? { label: "Start a secure email migration", href: "https://m.venmail.io/email-migrations/start" }
    : developerIntent
      ? { label: "Discuss your email infrastructure", href: "/contact-us" }
      : { label: "See Venmail plans", href: "/pricing" };

  return Object.freeze({
    id: numericId,
    slug,
    status,
    cluster: group.cluster,
    category: group.category,
    primaryKeyword,
    secondaryKeywords: [`${primaryKeyword} guide`, `${primaryKeyword} checklist`],
    serverOpportunityId: metric?.serverOpportunityId ?? null,
    metrics: metric ? { volume: metric.volume, cpc: metric.cpc, difficulty: metric.difficulty } : defaultMetrics,
    intent: migrationIntent ? "migration" : developerIntent ? "technical evaluation" : "commercial comparison",
    funnelStage: migrationIntent ? "decision" : "consideration",
    reader: developerIntent ? "Technical owner or email administrator" : "Business owner or operations lead",
    problem,
    title,
    excerpt: problem,
    metaTitle: `${title} | Venmail`,
    metaDescription: `${problem} Practical guidance, trade-offs and a usable checklist from Venmail.`,
    evidenceSourceIds: group.sources,
    alternatives: group.sources.slice(0, 3).map((sourceId) => sourceId.split("-")[0].replace(/^aws$/, "Amazon SES")),
    venmailFit: "Venmail fits teams that want custom-domain mail, guided setup and one place to administer migration and delivery choices.",
    nonFit: "Choose a specialist office suite or infrastructure-only provider when its collaboration, compliance or raw API model is the primary requirement.",
    originalValue: ["Operational decision framework", "Reusable implementation checklist"],
    outline: ["Define the decision", "Inventory requirements", "Compare options consistently", "Execute safely", "Verify and roll back"],
    questions: [`What does ${primaryKeyword} include?`, "What can fail during implementation?", "When is Venmail not the right choice?"],
    cta,
    internalLinks: ["/pricing", "/blog"],
    author: "Venmail Editorial Team",
    reviewer: "Venmail Email Operations",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-15",
  });
}

export const opportunities = Object.freeze(clusters.flatMap((group) => group.topics.map((topic) => makeOpportunity(group, topic))));
