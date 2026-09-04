import { utilityOpportunities } from "./utility/index.mjs";
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
const clusterGuidance = {
  "Cloudflare email infrastructure": {
    alternatives: ["Cloudflare Email Routing", "Google Workspace", "Microsoft 365", "hosted mailbox providers"],
    nonFit: "Do not position Venmail as necessary when the reader only needs free inbound forwarding; Cloudflare Email Routing can be the simpler answer.",
    originalValue: ["DNS record map with ownership and rollback columns", "Forwarding-versus-mailbox decision table"],
    outline: ["Separate DNS, forwarding and mailbox hosting", "Inventory inbound and outbound identities", "Map MX, SPF, DKIM and DMARC", "Compare delegated authorization methods", "Test and roll back safely"],
    researchTasks: ["Verify current Cloudflare Email Routing limits in official docs", "Build a disposable-zone DNS example", "Capture passing and failing authentication headers"],
  },
  "Provider migration operations": {
    alternatives: ["provider-native migration tools", "IMAP copy services", "specialist migration consultants"],
    nonFit: "Recommend a suite specialist when the project includes drives, chat, retention holds or identity migration beyond mail, contacts and calendars.",
    originalValue: ["Minute-by-minute cutover and delta-sync runbook", "Rollback decision sheet with stop conditions"],
    outline: ["Establish domain and administrator control", "Inventory mailboxes and hidden routing", "Stage accounts and initial data copy", "Cut over DNS with both systems live", "Reconcile, support users and close rollback"],
    researchTasks: ["Run a pilot mailbox copy and record exceptions", "Verify source-specific export and app-password requirements", "Test cached-DNS behavior and final delta synchronization"],
  },
  "Mailbox and web-host migrations": {
    alternatives: ["cPanel transfer tools", "IMAP migration utilities", "provider-managed migration"],
    nonFit: "Do not promise IMAP as a complete migration when contacts, calendars, local POP archives or server-side rules are material to the reader.",
    originalValue: ["Mailbox/routing inventory worksheet", "Import exception log and reconciliation method"],
    outline: ["Inventory data and non-mail objects", "Classify users, aliases and shared addresses", "Pilot data transfer", "Execute DNS and client cutover", "Reconcile counts and retain rollback"],
    researchTasks: ["Test source authentication with a pilot account", "Document contacts/calendar export formats", "Compare pre- and post-copy folder/message totals"],
  },
  "Provider alternatives": {
    alternatives: ["Google Workspace", "Microsoft 365", "Zoho Mail", "Fastmail", "Proton Mail"],
    nonFit: "State clearly when an integrated office suite, privacy-first encryption or a mature personal-mail experience is more important than Venmail's migration model.",
    originalValue: ["Equal-dimension provider decision matrix", "Date-stamped cost model with explicit assumptions"],
    outline: ["Define the reader and required jobs", "Remove options that fail non-negotiables", "Compare each provider on identical dimensions", "Pilot administrator and user workflows", "Calculate migration and operating cost"],
    researchTasks: ["Recheck official plan pages on publication day", "Pilot one normal user and one administrator workflow", "Document a concrete non-fit case for every shortlisted provider"],
  },
  "Amazon SES and developer infrastructure": {
    alternatives: ["Amazon SES", "SendGrid", "Mailgun", "Postmark", "managed business email"],
    nonFit: "Keep direct Amazon SES when the customer wants raw AWS infrastructure and already owns IAM, event processing, quota, reputation and incident operations.",
    originalValue: ["Least-privilege credential and region checklist", "Sandbox-to-production acceptance test"],
    outline: ["Classify mailbox versus infrastructure needs", "Explain API and SMTP credential boundaries", "Verify identity, region and sandbox state", "Connect and test the intended path", "Define events, fallback and credential rotation"],
    researchTasks: ["Verify current AWS SES requirements in official documentation", "Run a region-mismatch and sandbox failure test", "Confirm the exact Venmail feature path before making a routing claim"],
  },
  "Transactional email alternatives": {
    alternatives: ["Mailgun", "Amazon SES", "SendGrid", "Postmark", "Venmail"],
    nonFit: "Do not recommend a mailbox-first product for a pure high-volume API workload unless its exact sending, event and suppression capabilities meet the application contract.",
    originalValue: ["Provider matrix using one application contract", "Template/webhook/suppression migration map"],
    outline: ["Define message streams and delivery contract", "Compare APIs and SMTP on equal criteria", "Account for logs, events and support", "Pilot authentication and callbacks", "Migrate gradually with rollback"],
    researchTasks: ["Verify official plan limits without freezing volatile prices", "Exercise one send and one bounce callback per provider", "Inventory every template, webhook and suppression dependency"],
  },
  "Deliverability and authentication": {
    alternatives: ["deliverability platform", "independent consultant", "specialist agency", "in-house email operator"],
    nonFit: "Venmail should not be presented as a guaranteed inbox-placement service; reputation, consent, content and recipient decisions require broader evidence and expertise.",
    originalValue: ["Layered deliverability diagnostic tree", "Evidence packet a specialist can act on"],
    outline: ["Define the observed failure precisely", "Separate generation, acceptance and placement", "Validate SPF, DKIM and DMARC alignment", "Inspect reputation, consent and engagement", "Choose platform, specialist, agency or in-house ownership"],
    researchTasks: ["Collect representative headers and enhanced bounce codes", "Compare seed-test limits with production telemetry", "Document one controlled remediation experiment and rollback"],
  },
  "WordPress and commerce reliability": {
    alternatives: ["authenticated host SMTP", "transactional email API", "managed mailbox provider", "commerce-native sending"],
    nonFit: "Use a dedicated transactional provider when the workload is application-only, high volume or requires event-level observability beyond a normal business mailbox.",
    originalValue: ["Form-to-recipient failure isolation map", "Logged reproduction and production acceptance checklist"],
    outline: ["Preserve the business event independently", "Trace the WordPress mail call and queue", "Test authenticated transport", "Validate sender-domain alignment", "Inspect receiver evidence and prevent recurrence"],
    researchTasks: ["Reproduce with scoped mail and application logs", "Test cron/queue behavior separately from SMTP", "Capture a delivered header and a provider rejection"],
  },
  "Automation and parsing": {
    alternatives: ["Zapier Email Parser", "Make", "custom inbound webhook", "human-in-the-loop extraction"],
    nonFit: "Keep a human review step when message layouts are variable, errors are costly or the automation cannot preserve an auditable copy of the original email.",
    originalValue: ["Inbound-message architecture and trust-boundary diagram", "Retry, idempotency and exception-handling table"],
    outline: ["Define the event owner and trust boundary", "Parse and validate structured fields", "Design idempotency, retries and dead-letter handling", "Protect attachments and personal data", "Measure exceptions and add human review"],
    researchTasks: ["Build three deliberately different sample messages", "Test duplicate delivery and parser failure", "Record latency, exception rate and recovery evidence"],
  },
  "Agencies and white-label email": {
    alternatives: ["white-label campaign platform", "Google Workspace reseller", "Microsoft 365 partner", "managed hosting reseller"],
    nonFit: "Choose a specialist campaign or office-suite partner program when its automation, compliance or collaboration depth is the client's main requirement.",
    originalValue: ["Agency/client responsibility and tenancy matrix", "Two-client onboarding, incident and exit pilot"],
    outline: ["Define tenant and domain ownership", "Evaluate branding and administrator delegation", "Assign deliverability, security and support duties", "Model storage, usage and billing", "Test migration, incident response and client exit"],
    researchTasks: ["Pilot two unlike client tenants", "Attempt cross-tenant access and administrator recovery", "Complete a client data/DNS export before signing off"],
  },
};

const readerProfiles = {
  "Cloudflare email infrastructure": {
    audience: "Small-business owners and the person responsible for company email",
    targetCountries: ["Nigeria", "United Kingdom", "United States", "Canada", "India"],
    painPoints: ["The domain is on Cloudflare but email is hosted elsewhere", "DNS records feel risky to change", "The business needs replies and stored mail, not forwarding alone"],
    regionalConsiderations: ["Many growing businesses use a separate domain registrar, DNS provider and mailbox service, so ownership must be confirmed before a change"],
  },
  "Provider migration operations": {
    audience: "Business owners, operations staff and administrators changing email providers",
    targetCountries: ["United Kingdom", "United States", "Canada", "Australia", "Nigeria"],
    painPoints: ["Customers must keep using the same address", "New messages cannot be lost during the move", "Users need a simple changeover plan"],
    regionalConsiderations: ["Schedule support around the team's working hours and keep both providers active long enough for slower DNS caches and remote users"],
  },
  "Mailbox and web-host migrations": {
    audience: "Small firms moving email away from a website host or older mailbox service",
    targetCountries: ["Nigeria", "India", "Brazil", "United Kingdom", "United States"],
    painPoints: ["Email is tied to the old web-hosting account", "Contacts and calendars may not move with IMAP", "Old devices and website forms still use previous settings"],
    regionalConsiderations: ["Budget hosting commonly bundles websites and email, so the migration must separate the two services without interrupting either one"],
  },
  "Provider alternatives": {
    audience: "Founders and small teams comparing business-email subscriptions",
    targetCountries: ["United States", "United Kingdom", "Canada", "Australia", "Nigeria", "India"],
    painPoints: ["The team may be paying for office tools it rarely uses", "Per-user pricing rises as the team grows", "Migration effort makes comparisons difficult"],
    regionalConsiderations: ["Compare local payment options, taxes, support hours and data-location needs alongside the advertised monthly price"],
  },
  "Amazon SES and developer infrastructure": {
    audience: "Founders and developers who send application email or want to use their own Amazon SES account",
    targetCountries: ["United States", "Germany", "Netherlands", "India", "Brazil", "Nigeria"],
    painPoints: ["SES is powerful but does not provide a normal team mailbox", "Credentials and regions are easy to confuse", "The team must decide who owns bounces and reputation"],
    regionalConsiderations: ["Choose an AWS region and support arrangement that fits the organization's technical team, compliance needs and working hours"],
  },
  "Transactional email alternatives": {
    audience: "Product teams choosing how applications send receipts, alerts and password resets",
    targetCountries: ["United States", "United Kingdom", "Germany", "India", "Brazil"],
    painPoints: ["Provider pricing is hard to compare fairly", "Templates and webhooks make switching difficult", "A failed transactional message can block a customer"],
    regionalConsiderations: ["Measure total operating cost in the team's local currency and include engineering time, support and tax rather than message price alone"],
  },
  "Deliverability and authentication": {
    audience: "Business owners and email administrators investigating bounces or missing messages",
    targetCountries: ["United States", "United Kingdom", "Canada", "Australia", "Nigeria", "India"],
    painPoints: ["Messages are accepted but do not reach the inbox", "Technical reports use unfamiliar terms", "The team does not know whether to hire a tool, consultant or agency"],
    regionalConsiderations: ["Use evidence from the actual recipient providers and sending regions instead of assuming one test inbox represents every market"],
  },
  "WordPress and commerce reliability": {
    audience: "Website owners, store operators and agencies responsible for customer notifications",
    targetCountries: ["United States", "United Kingdom", "Nigeria", "India", "Brazil", "Australia"],
    painPoints: ["Forms say sent but no message arrives", "Orders and password resets depend on email", "Several plugins and hosts may each control part of delivery"],
    regionalConsiderations: ["Keep a copy of leads and orders outside email where intermittent hosting, cron or connectivity problems could otherwise hide a customer request"],
  },
  "Automation and parsing": {
    audience: "Operations teams and no-code builders turning incoming email into structured work",
    targetCountries: ["United States", "United Kingdom", "Canada", "India", "Nigeria"],
    painPoints: ["Email layouts change without warning", "Duplicate messages create duplicate tasks", "Sensitive attachments need controlled handling"],
    regionalConsiderations: ["Design for slower connections and manual review so a temporary outage does not silently discard a customer request"],
  },
  "Agencies and white-label email": {
    audience: "Agencies and service providers managing email for several client domains",
    targetCountries: ["United States", "United Kingdom", "Nigeria", "India", "Australia", "Canada"],
    painPoints: ["Client domains and credentials must stay under clear ownership", "Each new customer repeats the same setup work", "Support, billing and deliverability responsibility can become unclear"],
    regionalConsiderations: ["Set support hours, billing currency, client approval and administrator handoff expectations before managing domains across countries"],
  },
};
let numericId = 0;

function makeOpportunity(group, topic) {
  numericId += 1;
  const [slug, title, primaryKeyword, problem] = topic;
  const metric = measured[slug];
  const guidance = clusterGuidance[group.cluster];
  const readerProfile = readerProfiles[group.cluster];
  const status = "published";
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
    reader: readerProfile.audience,
    problem,
    plainAnswer: `${problem} The safest starting point is to understand who controls the domain, what people need from email each day, and which parts must keep working while the change is made.`,
    painPoints: readerProfile.painPoints,
    targetCountries: readerProfile.targetCountries,
    regionalConsiderations: readerProfile.regionalConsiderations,
    title,
    excerpt: problem,
    metaTitle: `${title} | Venmail`,
    metaDescription: `${problem} Practical guidance, trade-offs and a usable checklist from Venmail.`,
    evidenceSourceIds: group.sources,
    alternatives: guidance.alternatives,
    venmailFit: "Venmail fits teams that want custom-domain mail, guided setup and one place to administer migration and delivery choices.",
    nonFit: guidance.nonFit,
    originalValue: guidance.originalValue,
    outline: guidance.outline,
    questions: [`What does ${primaryKeyword} include for this reader?`, `Which evidence separates a successful ${primaryKeyword} project from a superficial setup?`, `When should the reader choose ${guidance.alternatives[0]} instead of Venmail?`],
    researchTasks: guidance.researchTasks,
    cta,
    internalLinks: ["/pricing", "/blog"],
    author: numericId % 2 === 0 ? "Ada from Venmail" : "Claire from Venmail",
    reviewer: "Venmail Email Operations",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-15",
  });
}

export const opportunities = Object.freeze([...clusters.flatMap((group) => group.topics.map((topic) => makeOpportunity(group, topic))), ...utilityOpportunities]);
