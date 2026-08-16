const p = (slug, scenario, decisionQuestion, actions, checks, regionalNote) => Object.freeze({ slug, scenario, decisionQuestion, actions, checks, regionalNote });

export const expandedProfiles = Object.freeze([
  p("business-email-hosting-cloudflare-domain", "Your website works and Cloudflare controls the domain, but staff still rely on personal inboxes or an old hosting mailbox. You need business addresses without moving the website or giving away full Cloudflare access.", "Which setup matches the way your team uses email?", [
    ["List the addresses", "Write down each person, shared address and forwarding rule the business actually needs."],
    ["Choose the mailbox home", "Select a provider that stores mail and supports sending, not only a forwarding destination."],
    ["Create accounts first", "Test sign-in, recovery and an outbound message before changing any DNS record."],
    ["Connect Cloudflare", "Review the exact MX and authentication records, then test mail from an outside account."],
  ], ["Every required address exists", "The owner controls recovery", "Incoming mail reaches the new inbox", "Replies use the business domain", "Old DNS values are saved for rollback"], "For small teams in Nigeria, India, the UK or North America, confirm support hours and payment options before moving; the domain can remain at Cloudflare even when the mailbox is hosted elsewhere."),

  p("one-click-cloudflare-dns-email-setup", "The business owner wants a technician to connect email but does not want to share a reusable Cloudflare password. A one-time authorization link can narrow the handoff to the correct domain and records.", "Who should make the DNS change?", [
    ["Confirm the exact domain", "Check the spelling and Cloudflare zone before creating or sharing a setup link."],
    ["Name the administrator", "Send the link only to the owner or technical person responsible for that domain."],
    ["Review before accepting", "The administrator should read the proposed mail records and redirect address."],
    ["Return and verify", "After Cloudflare redirects back, refresh the setup page and test incoming and outgoing mail."],
  ], ["The link is for one domain", "The link expires after use", "No reusable password was shared", "The setup page shows connected", "A real external message was received"], "Shareable setup links are especially useful when a founder and technical administrator work in different countries or time zones; agree who will be available if the DNS check needs attention."),

  p("cloudflare-email-routing-plus-smtp", "Messages sent to your domain are forwarded into another inbox, but replies come from a personal address or sent mail is scattered across services. Adding an SMTP sender may help, but it is still not the same as a complete mailbox.", "Is forwarding plus a sender enough?", [
    ["Describe the daily workflow", "Ask whether users need folders, shared history, search, calendars or delegated access."],
    ["Test reply identity", "Confirm recipients see the business address and replies pass authentication."],
    ["Check storage and recovery", "Decide where sent and received history lives and who can recover access."],
    ["Choose simplicity", "Keep routing for simple aliases; use a mailbox when people work from the address every day."],
  ], ["Replies show the right From address", "Sent mail is retained", "SPF and DKIM pass", "Users know which inbox to open", "A departing staff member can be removed safely"], "For remote teams with limited administrator time, two loosely connected services may cost more to support than one mailbox even when their subscription prices look lower."),

  p("cloudflare-mx-spf-dkim-dmarc-guide", "A provider gives you several DNS values and each acronym looks risky. The simple rule is that MX chooses where mail arrives, while SPF, DKIM and DMARC help recipients trust mail you send.", "Which email DNS record solves which problem?", [
    ["Save the current records", "Copy the old MX and TXT values before making changes."],
    ["Change one purpose at a time", "Set inbound MX, then add the sender's SPF and DKIM values exactly as supplied."],
    ["Start DMARC carefully", "Use reporting while you identify every legitimate sender before enforcing a strict policy."],
    ["Read a real message header", "Send outside the domain and confirm the receiver reports passing, aligned authentication."],
  ], ["Only intended MX records remain", "There is one consolidated SPF record", "The active DKIM selector verifies", "DMARC reports go to a monitored address", "Mail hostnames are not accidentally proxied"], "Businesses using website forms, accounting systems and marketing tools across countries should list every sender first; a DNS record copied for one service can accidentally exclude another."),

  p("zero-downtime-mx-cutover-checklist", "The company cannot stop receiving enquiries while email moves. Keeping both providers active, copying mail before the DNS change and running a final copy afterwards creates a practical safety net.", "Can this move be reversed safely?", [
    ["Lower uncertainty", "Confirm admin access, mailbox list, storage and a saved DNS snapshot."],
    ["Copy while live", "Move existing folders while the old service continues receiving new messages."],
    ["Change MX in a staffed window", "Switch delivery only after new accounts can receive and reply."],
    ["Copy the remainder", "Bring across messages that reached the old host during DNS caching and keep both logs."],
  ], ["Both services remain paid and active", "A pilot mailbox reconciles", "Rollback MX values are ready", "External send-and-reply tests pass", "The final copy has a recorded finish time"], "Choose a cutover window when owners and administrators in all important time zones can be reached; midnight for headquarters may be the middle of a customer's working day."),

  p("migrate-yandex-360-email", "Your team needs to leave Yandex 360 but wants to keep every business address and old message. The safe route is to inventory accounts, enable supported access, copy mail first and change delivery only after testing.", "What must be preserved beyond the inbox?", [
    ["Inventory Yandex accounts", "List users, aliases, shared addresses, storage, contacts and calendars."],
    ["Prepare source access", "Confirm IMAP or export access and create app passwords where the account requires them."],
    ["Pilot one mailbox", "Copy a representative account and check folders, dates and message counts."],
    ["Cut over and finish", "Change DNS, run a final mail copy and import contacts or calendars separately."],
  ], ["All aliases have destinations", "App passwords work", "Contacts were exported", "Calendars retain time zones", "Old accounts stay active through rollback"], "International teams should confirm whether regional account policies, phone recovery or payment access could delay source authentication before announcing a migration date."),

  p("migrate-google-workspace-email", "You are leaving Google Workspace but customers must continue writing to the same addresses. Email can be copied separately from Drive, Chat and other Google data, so decide clearly what this project includes.", "Is this an email move or a full Workspace exit?", [
    ["Define the boundary", "Separate mail, contacts and calendars from files, chat, groups and identity."],
    ["Create matching destinations", "Rebuild users, aliases and shared addresses before data copy."],
    ["Run a pilot", "Copy one ordinary user and one account with labels or large folders."],
    ["Switch and reconcile", "Change mail DNS, complete a final copy and verify group addresses and devices."],
  ], ["Google admin access is confirmed", "Every group and alias is mapped", "Drive data has a separate decision", "Mobile users have new settings", "Final folder counts are recorded"], "For teams comparing costs across currencies, include the time needed to replace Google identity, files or meetings; a cheaper mailbox does not automatically replace the whole suite."),

  p("migrate-microsoft-365-email", "The business wants to move Outlook mailboxes without changing addresses. Exchange may also hold shared mailboxes, calendars, distribution groups and retention rules, so mailbox copying is only one part of the plan.", "How much of Microsoft 365 are you really replacing?", [
    ["Map the tenant", "List licensed users, shared mailboxes, groups, aliases and applications that send mail."],
    ["Separate other workloads", "Decide what happens to Teams, OneDrive, Office licensing and sign-in."],
    ["Pilot difficult accounts", "Test a large mailbox and one shared address before moving everyone."],
    ["Change delivery carefully", "Update DNS, devices and applications, then reconcile late messages."],
  ], ["Shared mailboxes have owners", "Distribution groups are rebuilt", "Applications have new sender settings", "Retention needs are documented", "The old tenant remains available for rollback"], "Organizations spanning the UK, EU, North America or Africa should confirm data-location and compliance needs rather than assuming every mailbox plan offers the same controls."),

  p("migrate-email-contacts-calendars", "IMAP moves email, but it does not normally move your address book or calendar. Treat messages, contacts and events as three related migrations with separate exports and checks.", "Which data type needs which migration path?", [
    ["List the data", "Ask users where contacts and calendars live, including phone-only and shared calendars."],
    ["Choose export formats", "Use standard mail copy, vCard or CSV for contacts, and ICS or supported calendar sync."],
    ["Pilot recurring events", "Check time zones, reminders, attendees and repeating meetings after import."],
    ["Give users a clean handoff", "Explain which account to select when saving new contacts and appointments."],
  ], ["Mail folders reconciled", "Contacts have names and all addresses", "Recurring meetings show correctly", "Shared calendars have permissions", "Phones save new items to the new account"], "Time-zone checks matter for teams between West Africa, Europe, India and North America; an event can import successfully yet appear at the wrong local hour."),

  p("migrate-zoho-mail-to-new-provider", "Moving from Zoho Mail starts with the same basic rule as any migration: create the new destination before changing MX, then copy messages and rebuild addresses the mailbox copy cannot see.", "What should be copied and what should be rebuilt?", [
    ["Review the Zoho organization", "List users, aliases, groups, forwarding, domains and storage."],
    ["Confirm migration access", "Check the plan's IMAP or export settings and any security restrictions."],
    ["Copy a pilot", "Compare folders and counts before scheduling the rest of the team."],
    ["Cut over with a final pass", "Change DNS only after tests, then copy mail that arrived during propagation."],
  ], ["Every group has a new destination", "Source access works", "New accounts can reply", "DNS authentication passes", "Old Zoho access remains during support"], "When teams pay through a local reseller or regional billing channel, confirm cancellation and data-access dates before the final copy so access does not end early."),

  p("migrate-fastmail-proton-mail", "Fastmail and Proton Mail solve different problems, so first understand why you are leaving. Export and client access can differ, especially where encryption or bridge software is involved.", "What feature are you giving up by moving?", [
    ["Name the reason", "Separate price, privacy, collaboration, administration and migration needs."],
    ["Check export access", "Confirm the source tools, bridge requirements and formats for mail, contacts and calendars."],
    ["Test a representative account", "Include aliases, custom folders and an older message archive."],
    ["Move DNS after proof", "Switch only when sending, receiving and recovery work at the destination."],
  ], ["Encryption expectations are understood", "Aliases are mapped", "Contacts and calendars are exported", "A pilot archive opens correctly", "The old provider stays active for rollback"], "Privacy and data-location expectations may differ by country. Record the requirement in plain language and verify it against official provider documentation before choosing on brand reputation alone."),

  p("migrate-email-aliases-forwarders-autoreplies", "A mailbox copy can look complete while sales@, billing@ and holiday replies silently stop. These addresses and rules are configuration, so they must be inventoried and rebuilt separately.", "Which invisible email rules keep the business running?", [
    ["Ask each team", "Collect aliases, group addresses, forwarding, catch-all rules and automatic replies."],
    ["Assign an owner", "Decide who receives each shared address and who may change it."],
    ["Rebuild before MX", "Create and test rules at the new provider before new mail arrives."],
    ["Test from outside", "Send to every important address and verify both delivery and reply behavior."],
  ], ["Sales and billing addresses work", "Forwarding does not loop", "Automatic replies have end dates", "Catch-all behavior is intentional", "Departing users no longer receive mail"], "Small businesses often rely on one person who remembers these rules. Write them down before migration so staff changes, time zones or unavailable contractors do not become a blocker."),

  p("microsoft-365-alternatives-small-business", "Microsoft 365 is valuable when Outlook, Office, Teams and identity work together. If the company mainly needs dependable custom-domain email, a simpler provider may reduce cost and administration.", "Do you need Microsoft 365 or mainly a business mailbox?", [
    ["List used tools", "Ask which Office, Teams, OneDrive and security features people actually use each week."],
    ["Protect non-negotiables", "Keep any provider that is required for compliance, shared files or desktop Office licensing."],
    ["Pilot the mailbox experience", "Test search, calendar, mobile setup, shared addresses and recovery."],
    ["Price the whole change", "Include migration, support and replacement tools rather than comparing mailbox price alone."],
  ], ["Office licensing has a plan", "Shared files remain accessible", "Calendar needs are tested", "Support responsibility is clear", "Migration cost is included"], "For small companies in Nigeria, India or Brazil, compare currency movement and payment methods; for UK, EU, Canadian or Australian teams, also verify retention and data-location needs."),

  p("zoho-mail-alternatives", "Zoho Mail can be a good-value choice, especially for teams using other Zoho products. Look elsewhere when a different privacy model, office suite, administration style or migration experience matters more.", "Which Zoho strength are you replacing?", [
    ["Define the missing outcome", "Name the daily problem instead of starting with a provider list."],
    ["Compare equal features", "Use the same mailbox, calendar, admin, storage and migration criteria for every option."],
    ["Test one normal week", "Pilot sending, search, mobile access, recovery and a shared address."],
    ["Check the exit path", "Confirm standard exports and domain ownership before subscribing."],
  ], ["Required Zoho apps are accounted for", "Storage is compared fairly", "Mobile setup is tested", "Administrator recovery works", "Export options are documented"], "Plan names and prices vary by market and change over time. Recheck the official local page and taxes on the day the team decides."),

  p("yandex-360-alternatives-business", "A Yandex 360 alternative should be chosen for the business you run now: mailbox reliability, administrator access, regional support, collaboration and an achievable migration path.", "Which provider can support your team and region?", [
    ["Record the reason for leaving", "Separate availability, policy, billing, support and feature concerns."],
    ["Shortlist by hard requirements", "Remove providers that fail data-location, payment, language or administrator needs."],
    ["Test migration access", "Confirm old mail, contacts, calendars and aliases can be moved."],
    ["Pilot before commitment", "Use a test user to validate sending, receiving, mobile access and recovery."],
  ], ["Regional support is available", "Payment works for the business", "Data-location needs are met", "Migration access is proven", "A rollback period is budgeted"], "Businesses operating across Europe, Central Asia, Africa or the Americas should verify account eligibility and support directly rather than relying on a global comparison page."),

  p("fastmail-proton-vs-venmail", "Fastmail is known for a focused email experience, Proton emphasizes privacy, and Venmail focuses on custom-domain business administration and guided migration. The best choice follows the team's main priority.", "Is your priority personal email, privacy or business administration?", [
    ["Name the main job", "Choose whether privacy, individual productivity or multi-user business setup comes first."],
    ["Check custom domains", "Compare aliases, users, shared addresses, recovery and administrator control."],
    ["Test daily use", "Try search, calendars, phone setup and a password-recovery scenario."],
    ["Review migration and exit", "Confirm how historical mail and standard exports work in both directions."],
  ], ["The privacy model is understood", "Business admins have suitable controls", "Users like the daily interface", "Contacts and calendars are covered", "Price includes the needed users and storage"], "Privacy law, payment access and support hours differ across target countries. Use the official regional terms and plan pages before making a final choice."),

  p("managed-email-vs-bring-your-own-ses", "Managed delivery removes much of the AWS setup work. Bringing your own Amazon SES account gives your team more direct control over the AWS relationship, but also more responsibility for credentials, regions, events and reputation.", "Who should own the sending infrastructure?", [
    ["Classify the messages", "Separate human mailbox replies, application alerts and marketing campaigns."],
    ["Measure technical capacity", "Name who will own AWS permissions, events, quotas and incidents."],
    ["Test the exact Venmail path", "Do not assume every feature uses a connected SES account without an end-to-end test."],
    ["Document fallback", "Decide what happens if the AWS account, credential or region becomes unavailable."],
  ], ["A technical owner is named", "The exact sending route is tested", "Bounce handling is assigned", "Credential rotation is scheduled", "Fallback behavior is understood"], "For distributed teams, choose a region and on-call arrangement that matches technical coverage and compliance needs, not simply the region closest to the company address."),

  p("amazon-ses-api-vs-smtp-credentials", "Amazon SES API keys and SES SMTP credentials are not interchangeable. API access normally uses AWS IAM credentials, while SMTP uses a separate username and password created for the SMTP interface.", "Which credential belongs in this connection?", [
    ["Identify the interface", "Check whether the application calls the AWS API or connects to an SMTP hostname."],
    ["Create a dedicated identity", "Use least privilege and never enter an AWS root credential."],
    ["Match the region", "Use the endpoint and verified identity from the same SES region."],
    ["Test safely", "Send to a controlled recipient and record the provider response before production use."],
  ], ["API and SMTP credential types are not mixed", "Root credentials are not used", "The region matches", "Secrets have an owner", "Rotation and revocation are documented"], "A founder may work in one country while the AWS account is operated elsewhere. Record the account owner, region and emergency contact so credential problems do not depend on one unavailable person."),

  p("amazon-ses-production-readiness", "SES can accept a test connection while the account is still restricted. Production readiness also requires a verified identity, working DomainKeys Identified Mail, suitable MAIL FROM setup, production access and bounce handling.", "Is the SES account ready for real customers?", [
    ["Verify the identity", "Confirm the domain or sending address is verified in the intended region."],
    ["Publish authentication", "Wait for DKIM and any custom MAIL FROM records to verify."],
    ["Review sandbox and quotas", "Request production access honestly and plan volume within the approved limits."],
    ["Exercise events", "Test a delivery, bounce and complaint path before important mail uses the account."],
  ], ["Identity is verified", "DKIM passes", "Sandbox status is known", "Quotas cover expected volume", "Bounce and complaint events reach an owner"], "Production access reviews and support response can take time. Apply before a public launch and keep a tested fallback for teams serving customers across time zones."),

  p("free-sendgrid-alternatives", "A free SendGrid alternative is useful only when its limits match the messages your product must send. Compare delivery events, support, logs and migration work as well as the free allowance.", "What will the free plan cost once the product grows?", [
    ["Describe the message stream", "Record volume, peaks, templates, attachments and how quickly messages must arrive."],
    ["List required evidence", "Decide how long logs, bounces and complaint events must remain available."],
    ["Pilot the integration", "Send a real template and process a controlled bounce before switching."],
    ["Plan the paid stage", "Price the expected six-month volume and the engineering time to operate it."],
  ], ["Current plan limits are verified", "Event webhooks work", "Authentication passes", "Support level is acceptable", "Growth cost is written down"], "Teams paying in naira, rupees or reais should model exchange-rate movement and taxes; the lowest US-dollar headline may not be the lowest predictable cost."),

  p("sendgrid-vs-mailgun-vs-postmark-vs-ses", "SendGrid and Mailgun offer broad developer platforms, Postmark focuses strongly on transactional mail, and Amazon SES provides lower-level AWS infrastructure. Choose by the work your team can operate reliably.", "Which provider matches your product and team?", [
    ["Separate mail streams", "List password resets, receipts, notifications and marketing messages independently."],
    ["Score equal criteria", "Compare API, SMTP, templates, events, logs, support and regional needs."],
    ["Run the same pilot", "Send the same representative message and test a bounce with each finalist."],
    ["Include operating effort", "Price engineering, monitoring and incident response alongside provider fees."],
  ], ["Every provider is scored equally", "A production-like test is complete", "Bounce events are understood", "Migration dependencies are listed", "The team accepts the operating work"], "Provider availability and tax treatment vary by market. Verify the official regional offer and avoid copying a price from an old comparison article."),

  p("transactional-email-provider-migration", "Changing a transactional provider means moving more than an SMTP password. Templates, domain authentication, event webhooks, suppression lists and application error handling all need a controlled handover.", "Can the application return to the old provider quickly?", [
    ["Map dependencies", "List credentials, templates, domains, callbacks, suppressions and dashboards."],
    ["Add the new sender", "Publish new authentication while the old provider remains authorized."],
    ["Move a small stream", "Start with low-risk internal notifications and compare delivery evidence."],
    ["Increase gradually", "Move critical traffic only after bounces, complaints and retries work."],
  ], ["Templates render correctly", "Webhook signatures are verified", "Suppressions are transferred", "Rollback credentials remain valid", "Old DNS is removed only after closeout"], "Deploy during hours when developers and customer support overlap. A global customer base can report missing password resets before the engineering team wakes up."),

  p("email-api-vs-business-mailbox", "Use an email API for messages created by software at scale. Use a business mailbox when a person needs to read, search, reply, organize conversations and recover access through a normal account.", "Is a person or an application doing the sending?", [
    ["Classify the sender", "Separate staff conversations from automated receipts, alerts and campaigns."],
    ["Choose ownership", "Give human mail to mailbox administrators and application mail to developers."],
    ["Separate reputation", "Use clear domains or streams so one workload does not hide another."],
    ["Test replies", "Decide what happens when a customer replies to an automated message."],
  ], ["Human replies have an inbox", "Automated events have logs", "Credentials are separate", "Bounce handling has an owner", "Customers know where replies go"], "A small business may begin with one mailbox and later need an API. Choose a setup that can separate workloads gradually instead of forcing a costly rebuild on day one."),

  p("hire-email-deliverability-specialist", "Hire a deliverability specialist when a defined email problem affects revenue or customers and your team lacks the evidence or experience to isolate it. Start with facts, not a promise of guaranteed inbox placement.", "Do you need diagnosis, ongoing operation or a software tool?", [
    ["Write the symptom", "Name the affected messages, recipient providers and date the change began."],
    ["Collect evidence", "Prepare headers, bounce text, volume, complaint data and recent DNS or platform changes."],
    ["Interview for method", "Ask how the specialist tests a hypothesis, records changes and handles rollback."],
    ["Agree the handoff", "Require a prioritized report and a plan your team can continue after the engagement."],
  ], ["The problem is measurable", "No guaranteed-inbox claim is made", "Evidence access is agreed", "Experiments have rollback", "Ownership after the engagement is clear"], "Choose someone who understands the receiver markets you serve, but insist on evidence from your own mail rather than country stereotypes or a single test inbox."),

  p("inbox-placement-testing", "An inbox placement test sends controlled messages to test accounts and reports where they appear. It is a useful clue, not a guarantee that every real recipient will see the same result.", "What can this test prove—and what can it not prove?", [
    ["Use a representative message", "Test the same From domain, links and sending system used in production."],
    ["Record the sample", "Note which providers, countries and account types are included or missing."],
    ["Compare other evidence", "Review bounces, complaints, engagement and authentication beside the seed result."],
    ["Repeat controlled changes", "Change one variable and look for a sustained trend rather than one good score."],
  ], ["Authentication passes", "The provider sample is documented", "Production evidence is compared", "One variable changes at a time", "No guarantee is promised"], "If customers are spread across regions, include the mailbox providers they actually use. A test aimed only at US consumer inboxes may say little about European or African business recipients."),

  p("spf-dkim-dmarc-after-migration", "After an email move, Sender Policy Framework, DomainKeys Identified Mail and DMARC must recognize the new sender while old systems are retired carefully. Authentication is about the real message path, not merely having records present.", "Does every legitimate sender still align with your domain?", [
    ["List sending services", "Include mailboxes, websites, accounting tools, support desks and marketing platforms."],
    ["Authorize the new path", "Publish the provider's DKIM and consolidate SPF without creating multiple SPF records."],
    ["Observe DMARC reports", "Use reporting to find forgotten senders before applying a stricter policy."],
    ["Remove old authorization", "Retire old keys and SPF entries only after their traffic stops."],
  ], ["Every sender is inventoried", "SPF has one policy", "New DKIM verifies", "DMARC alignment is checked", "Old authorization has a removal date"], "Regional website hosts or payment systems may send mail on the domain's behalf. Ask each local team before tightening policy so legitimate receipts are not rejected."),

  p("email-authentication-bounce-codes", "A bounce code is the receiving server's explanation of why it refused or later returned a message. Read the exact enhanced status and message before changing DNS, providers or domains.", "Is the failure about identity, policy, reputation or the recipient?", [
    ["Save the complete bounce", "Keep the code, text, recipient provider, time and original message ID."],
    ["Group similar failures", "Separate invalid recipients from authentication, rate, policy and temporary errors."],
    ["Check the matching layer", "Inspect DNS only for identity failures; inspect list quality for bad recipients."],
    ["Retest one case", "Make a controlled correction and send to a suitable test recipient."],
  ], ["Full error text is saved", "Temporary and permanent failures are separated", "The correct team owns the fix", "A controlled retest passes", "Repeated bad recipients are suppressed"], "Receiver wording can vary across providers and languages. Preserve the original text and code, then use the provider's official documentation when available."),

  p("contact-form-7-not-sending-email", "Contact Form 7 can accept a submission even when the message never reaches the recipient. Save the form entry, then test WordPress, the queue, the mail connection and the receiving inbox in order.", "At which handoff does the form message disappear?", [
    ["Protect the lead", "Store submissions in the site or another system before relying on email."],
    ["Reproduce once", "Submit a simple test and record the time, recipient and form response."],
    ["Check WordPress and transport", "Review mail logs, cron and the authenticated sender's response."],
    ["Inspect the inbox result", "Test more than one provider and read headers or bounce evidence."],
  ], ["Submissions are stored", "One mail plugin is active", "Queue jobs run", "The sender is authenticated", "A real external inbox receives the test"], "Where connectivity or budget hosting is less predictable, keeping form entries outside email is essential; a customer enquiry should survive a temporary mail failure."),

  p("woocommerce-email-not-sending", "WooCommerce email begins with an order event, passes through WordPress and a queue, then uses a mail provider. Check each stage so a payment receipt problem is not mistaken for a DNS problem.", "Did WooCommerce create the message before delivery failed?", [
    ["Choose one order", "Record its status changes and which customer or administrator messages should fire."],
    ["Check templates and queue", "Confirm the email is enabled and no background job remains failed."],
    ["Test authenticated sending", "Capture the provider response and message ID."],
    ["Verify customer receipt", "Use external inboxes and inspect spam, bounce and authentication results."],
  ], ["Order events are correct", "Templates are enabled", "Queue has no failed job", "Provider accepts the message", "Customer support can resend safely"], "Stores serving several countries should test the actual transactional templates, languages and recipient providers used by customers—not only an administrator's local inbox."),

  p("wordpress-emails-going-to-spam", "WordPress mail often goes to spam when the visible sender, sending service and domain authentication do not agree, or when message and recipient quality is poor. Fix identity first, then inspect reputation and content.", "Is the message trusted, wanted and sent through the expected system?", [
    ["Identify the real sender", "Capture a full received header or provider log for one message."],
    ["Align the domain", "Use an authenticated From address with passing DKIM and suitable SPF/DMARC alignment."],
    ["Separate message types", "Keep receipts, forms and marketing mail clearly organized."],
    ["Measure real outcomes", "Compare multiple providers and production evidence after one controlled change."],
  ], ["From address is valid", "DKIM passes", "DMARC aligns", "Unwanted recipients are removed", "Links and content match the business"], "Different mailbox providers dominate in different markets. Test the providers your customers use and avoid assuming a good result in one country predicts every inbox."),

  p("shopify-woocommerce-email-infrastructure", "E-commerce email includes store receipts, shipping updates, staff support and marketing. Separate these jobs so a campaign problem does not hide or harm messages customers need after payment.", "Which system should own each customer message?", [
    ["Map the lifecycle", "List order, payment, shipping, return, support and marketing messages."],
    ["Assign a sender", "Choose the commerce platform, mailbox or email API for each stream."],
    ["Protect transactional mail", "Keep authentication, reply handling and monitoring clear for receipts and resets."],
    ["Test the customer journey", "Place a controlled order and follow every message and reply path."],
  ], ["Every lifecycle message has an owner", "Receipts have delivery evidence", "Support replies reach people", "Marketing consent is separate", "A failed sender has a fallback plan"], "Stores selling across borders should test local languages, time zones and popular recipient providers, while keeping tax or payment details out of unsecured support threads."),

  p("email-to-webhook-architecture", "Email-to-webhook automation receives a message, checks that it is trustworthy, extracts needed fields and sends a structured event to another system. Reliability depends on duplicates, retries and exceptions—not only parsing the happy path.", "What happens when the same email arrives twice or cannot be parsed?", [
    ["Define the accepted sender", "Decide which addresses, domains and message types may trigger work."],
    ["Keep the original", "Store a safe reference to the message for audit and manual review."],
    ["Make events idempotent", "Use a message or business identifier so retries do not create duplicate work."],
    ["Route failures", "Send uncertain messages to a queue a person can review."],
  ], ["Sender rules are explicit", "Original evidence is retained", "Duplicates are harmless", "Retries are bounded", "Failed parsing reaches a person"], "Design for intermittent connections and remote teams: acknowledge receipt quickly, retry safely, and let an administrator review exceptions from another location."),

  p("zapier-email-parser-alternatives", "Zapier Email Parser is convenient for stable messages. Consider another rules tool, a no-code platform, custom code or human review when layouts vary, volume grows or mistakes have a high cost.", "How predictable are the emails you need to parse?", [
    ["Collect real samples", "Use messages from different senders, dates, languages and edge cases."],
    ["Mark required fields", "Separate fields that must be exact from optional helpful details."],
    ["Test three approaches", "Compare a simple rule, a workflow tool and a reviewed extraction."],
    ["Measure exceptions", "Choose based on error handling and recovery, not the best demonstration."],
  ], ["Variable samples are tested", "Required fields are validated", "Duplicates are controlled", "Sensitive data is limited", "A person can correct exceptions"], "No-code tools may price or bill differently across countries. Include task volume, exchange rates and the cost of manual correction when comparing alternatives."),

  p("extract-email-data-to-spreadsheet", "To move email data into a spreadsheet safely, define the columns first, validate each extracted value and keep a link or identifier for the original message. Never let uncertain text silently become a business fact.", "Which fields must be exact before a row is created?", [
    ["Design the sheet", "Name required columns, formats, owners and what counts as a duplicate."],
    ["Parse controlled samples", "Test missing fields, changed layouts, attachments and more than one language."],
    ["Validate before writing", "Reject or flag rows that fail required formats or business rules."],
    ["Review and reconcile", "Give a person a queue and compare row totals with processed messages."],
  ], ["Required columns are defined", "Duplicates have a stable key", "Invalid rows are flagged", "Original message reference is retained", "Access to personal data is limited"], "For distributed teams, set one time zone and number format for the sheet so dates, decimal marks and currencies are not interpreted differently by country."),

  p("turn-inbound-email-into-tasks", "Turning email into tasks works when each message gets one owner, a clear due rule and a link back to the conversation. Without duplicate control and reply handling, the task list becomes noisier than the inbox.", "What should create a task and who owns it?", [
    ["Define the trigger", "Choose the mailbox, sender or subject patterns that represent real work."],
    ["Set ownership rules", "Map customers, regions or request types to a team or person."],
    ["Prevent duplicates", "Use the conversation or message identifier when creating and retrying tasks."],
    ["Close the loop", "Record the reply and task outcome so another message does not reopen finished work."],
  ], ["Each task has one owner", "Duplicate emails do not duplicate tasks", "Due times use a known time zone", "Replies remain linked", "Exceptions have a review queue"], "Global teams should show due times in the assignee's local zone and define handoff hours; an overnight message should not become an unexplained overdue task."),

  p("webhook-to-email-vs-email-to-webhook", "Webhook-to-email turns a system event into a human notification. Email-to-webhook turns an incoming human or machine message into structured system work. Start with the system that owns the original event.", "Which system is the source of truth?", [
    ["Name the original event", "Decide whether it begins in software or arrives as an email."],
    ["Choose the direction", "Notify people by email or convert mail into a validated system event."],
    ["Plan retries and identity", "Authenticate the source and make repeated delivery safe."],
    ["Keep an audit trail", "Link the email and system record without copying unnecessary private data."],
  ], ["The source of truth is named", "Sender or webhook is authenticated", "Retries are safe", "Private data is minimized", "Failures alert an owner"], "Where users have unreliable connectivity, email can be a useful notification layer, but the underlying system—not the inbox—should retain the authoritative status."),

  p("email-infrastructure-for-agencies", "Agencies managing many domains need a repeatable onboarding checklist, isolated client access and clear ownership. Standardize the process without turning the agency into the hidden owner of every client domain.", "Can each client be supported and handed back independently?", [
    ["Create a client inventory", "Record domain owner, DNS administrator, mailboxes, senders and support contacts."],
    ["Separate access", "Use client-specific roles and credentials rather than a shared master password."],
    ["Standardize evidence", "Keep DNS snapshots, migration counts and acceptance tests for every domain."],
    ["Test offboarding", "Prove a client can regain administration and export data before signing the contract."],
  ], ["Client owns the domain", "Tenant access is isolated", "Setup evidence is stored", "Support responsibility is documented", "Offboarding is tested"], "Agencies serving several countries should agree billing currency, support hours and escalation contacts per client instead of promising one vague global service level."),

  p("shareable-email-administrator-setup-links", "A shareable setup link lets an owner delegate a specific email or DNS step to a technical administrator without sending a reusable account password. It should be scoped, expiring and visible to the owner.", "What can the administrator do with the link?", [
    ["Scope the task", "Tie the link to the exact domain and setup action the owner approved."],
    ["Choose the recipient", "Send it to a known technical or email administrator over a trusted channel."],
    ["Explain expiry", "State whether the link is one-time, when it expires and what completion looks like."],
    ["Review the result", "Show connected status and administrator access to the owner after authorization."],
  ], ["No reusable password is shared", "The domain is exact", "Expiry is understood", "Owner can see completion", "Unneeded administrator access can be removed"], "This is valuable when the owner and administrator are in different countries; verify the recipient and time the link so it is not left unused in a forwarded message."),

  p("pooled-storage-multi-tenant-email", "Pooled storage gives an organization one total allowance to share across mailboxes. Multi-tenant administration keeps separate client or company data and roles isolated even when one agency manages them.", "Should storage follow each person or the whole organization?", [
    ["Measure actual use", "Record current mailbox sizes and identify archives or unusually large accounts."],
    ["Define tenant boundaries", "Separate each company, domain, administrator and billing owner."],
    ["Set alerts and limits", "Warn before the pool fills and decide who may reallocate space."],
    ["Test administrator roles", "Confirm one tenant cannot view or change another tenant's data."],
  ], ["Total storage is understood", "Large mailboxes are identified", "Tenant access is isolated", "Usage alerts have owners", "Export and offboarding are possible"], "For agencies billing in different currencies, separate wholesale storage cost from client pricing and explain how exchange-rate changes or overages will be handled."),

  p("managed-client-email-migration", "A managed migration succeeds when the client, agency and provider know who owns credentials, data copy, DNS approval, user support and final sign-off. The technical copy is only one part of the service.", "Who is responsible at every migration stage?", [
    ["Agree the scope", "List mailboxes, aliases, contacts, calendars, applications and items explicitly excluded."],
    ["Protect access", "Use temporary or app-specific credentials and record who can use them."],
    ["Pilot and report", "Move one representative mailbox and share counts, errors and decisions."],
    ["Cut over with sign-off", "Require client approval for DNS, final reconciliation and closure of the old service."],
  ], ["Scope is signed", "Credentials are temporary", "Pilot evidence is accepted", "Rollback owner is available", "Client signs final reconciliation"], "For cross-border clients, document time zones, languages, data handling and support contacts. Do not schedule a cutover solely for the agency's convenience."),
]);
