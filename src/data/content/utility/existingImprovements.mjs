import { p, h, steps, table, code } from "./shared.mjs";

const improvement = (sources, text, actions) => ({ sources: ["venmail-plans", ...sources], blocks: [
  h("free-practical-workflow", "A practical workflow you can start for free"),
  p(text, ...sources),
  steps("Try it on a small example", actions),
] });

export const existingImprovements = {
  "email-deliverability-services": improvement(["checkdmarc"], "Before hiring help, assemble a free evidence packet: one failed message, its sending time, the recipient's response and your domain's public authentication records. Use Venmail to reproduce the relevant sending path with a test mailbox you control. checkdmarc can help a technical teammate inspect SPF and DMARC; it does not prove inbox placement.", [
    ["Capture a baseline", "Record one message before changing configuration. Save its status code or received headers, removing customer content before sharing."],
    ["Name the unresolved question", "If DNS is correct but one receiver still rejects mail, ask a specialist to investigate that specific failure. Bring the baseline so you pay for diagnosis rather than repeating basic checks."],
  ]),
  "hire-email-deliverability-specialist": improvement(["checkdmarc"], "A free pre-engagement brief helps you buy the right expertise. Write down the affected message type, receiver, dates and changes. Include a Venmail test result and a public DNS check rather than granting broad access as the first step. Avoid sending private message bodies or credentials with the initial brief.", [
    ["Write a bounded question", "For example: booking confirmations to one provider began failing after a sender-domain change. Include a safe message identifier and the exact rejection."],
    ["Ask for an actionable handoff", "Request findings, a prioritized change list and a retest method. A promise to improve an unexplained score is not the same as a diagnosis."],
  ]),
  "spf-dkim-dmarc-after-migration": improvement(["checkdmarc"], "You can check public DNS without buying a monitoring subscription. Use the free checkdmarc utility for SPF and DMARC, then inspect a received test message for actual authentication results. Venmail's domain-specific setup values are the values to compare; never copy a generic SPF include from an unrelated tutorial.", [
    ["Inventory every sender", "Include the mailbox service, website, invoicing app and newsletter tool. A migration can fix normal mail while leaving another legitimate sender out."],
    ["Test each route", "Send one controlled message from each route and record the visible From domain and receiver results. Keep the old route available until its replacement is confirmed."],
  ]),
  "email-authentication-bounce-codes": improvement(["checkdmarc"], "Create a free incident sheet with columns for time, sender, recipient provider, status code and next action. Keep a safe message ID from Venmail when available. The word authentication may refer to SMTP credentials or to sender-domain checks; those need different fixes.", [
    ["Read the complete error", "An SMTP login rejection points toward connection credentials. A receiver's domain-policy rejection points toward the sending identity or policy. Do not replace DNS to fix a wrong password."],
    ["Retest the same layer", "After the specific correction, use a new controlled message and compare the result. Preserve the original error so support can see what changed."],
  ]),
  "inbox-placement-testing": improvement(["gmail-senders"], "A free test can use a few mailboxes your team already controls. Send a realistic Venmail message, then record inbox, spam, another folder or not found before interacting. Write the provider and sample size beside the result; three test inboxes cannot represent your whole audience.", [
    ["Keep the comparison controlled", "Use the same sender and content for the first run. Note mailbox rules and forwarding that could affect the folder result."],
    ["Make one change", "Repeat after correcting one suspected issue. If you change everything at once, even a better result will not explain the cause."],
  ]),
  "amazon-ses-alternatives": improvement(["mailpit", "venmail-api"], "Evaluate the sending contract before comparing bills. You can draft templates and exercise application jobs for free with a local mail catcher such as Mailpit. For a live Venmail pilot, confirm API access and the allowance for your account; free workspace access is not a published unlimited API quota.", [
    ["Choose a representative message", "Use a synthetic receipt with the reply address, plain text and template fields your app actually needs."],
    ["Record the operating work", "Compare sender setup, accepted-send response, bounce handling and support effort. Keep your own AWS account when that control is valuable and your team can operate it."],
  ]),
  "free-sendgrid-alternatives": improvement(["mailpit", "venmail-api"], "There are two different free starting points: local development tools and a provider's current hosted allowance. Mailpit can capture development SMTP at no sending cost. Venmail's public Free plan covers a workspace with basic email features; verify the live API terms for your account before treating it as a replacement sending quota.", [
    ["Test locally first", "Use synthetic messages to verify the app creates the right content. Keep live credentials out of development fixtures."],
    ["Compare the real contract", "Record current allowance, recipient restrictions, events, log retention and the cost after the allowance ends. A free trial and a continuing free tier are different offers."],
  ]),
  "free-mailgun-alternatives": improvement(["mailpit", "venmail-api"], "Use a free worksheet to compare one workload: expected monthly messages, peak traffic, required logs and who handles failures. Test content locally with Mailpit. Evaluate Venmail's actual account access for live sending rather than assuming a mailbox plan includes every API feature.", [
    ["Include the hidden work", "Add the time needed to migrate templates, suppressions and event handlers. A lower message price may not compensate for a difficult operational change."],
    ["Pilot a failure as well as success", "Confirm how your application sees an authorized test send and a controlled rejected request. Record who will investigate an uncertain timeout."],
  ]),
  "sendgrid-vs-mailgun-vs-postmark-vs-ses": improvement(["venmail-api", "mjml"], "Keep the comparison portable with one plain-text message and one simple HTML template. Free MJML can produce the template so its structure is not tied to one provider's editor. Venmail is another candidate where its provisioned interface and operating model meet your requirements; check current access and pricing separately.", [
    ["Use identical criteria", "Compare authorized senders, message response, failure events, suppression export and support on the same workload. Record unknowns instead of filling them with marketing assumptions."],
    ["Price a realistic month", "Include bursts, storage or log needs, and engineering time. Link to each current plan rather than freezing an old free allowance in your internal decision."],
  ]),
  "transactional-email-provider-migration": improvement(["mailpit", "venmail-api"], "Make a free migration inventory before changing traffic: templates, sender domains, event handlers, suppressions and application jobs. Use a local catcher for template regression checks. Keep the old provider available while a small, controlled Venmail pilot proves the replacement path.", [
    ["Map the contract", "For each old event and template field, document its destination equivalent or the application change required. Do not assume two providers use the same event names."],
    ["Reconcile before scaling", "Compare intended sends with accepted records and delivery outcomes. Move suppressed recipients explicitly and ensure a rollback will not resend already accepted business events."],
  ]),
  "email-to-webhook-architecture": improvement(["python-email", "mailparser", "venmail-api"], "You can prototype parsing for free with a synthetic .eml file and Python's email package or Nodemailer's MailParser. A delivery-status webhook is not automatically an inbound-message webhook. For Venmail, verify the documented inbound routing or mailbox access available to your account before designing a live receiver.", [
    ["Define the smallest payload", "For a support request, extract a message identifier, subject, reply route and the original-message reference. Treat all fields as untrusted input. Use a MIME parser rather than regular expressions over raw email."],
    ["Keep the receiver reliable", "Authenticate the actual delivery mechanism, persist an event before acknowledging it and deduplicate by a stable source identifier. Put malformed messages into review instead of discarding them."],
    ["Test without customer data", "Replay a synthetic message twice, omit a required field and use an oversized attachment. Check that only one task is created and failed extraction remains visible."],
  ]),
  "zapier-email-parser-alternatives": improvement(["python-email", "mailparser"], "Try a free local parser before choosing an automation subscription. Python's standard email package reads MIME structure; MailParser offers a Node.js option. Neither supplies hosting, a monitored inbox or your business rules. Venmail can supply the mailbox or a supported integration path, subject to the account's documented access.", [
    ["Collect representative fixtures", "Create synthetic examples of a normal message, a reply and a changed layout. Label the fields you need and which are optional."],
    ["Compare failure handling", "Run the same fixtures through each candidate. A parser that extracts the happy path but silently loses malformed messages is not ready for an operations workflow."],
    ["Choose a maintainable route", "Use a hosted tool when no one can maintain code. Use a local parser when a developer can own deployment, review queues and updates. Free source code is not free operation."],
  ]),
  "extract-email-data-to-spreadsheet": improvement(["python-email", "openrefine"], "Prototype with saved synthetic messages, a free MIME parser and a spreadsheet. Start with fields such as received time, order reference and amount, and preserve the original-message reference. Do not upload customer invoices to an unknown online converter merely because it is free.", [
    ["Define a row contract", "Use separate columns for amount and currency, plus extraction status and source ID. Mark missing values for review rather than converting them to zero."],
    ["Protect the spreadsheet", "Treat extracted text as text. Neutralize spreadsheet formula prefixes in untrusted values before opening a CSV, using the destination's safe-import method. Deduplicate on a stable source identifier."],
    ["Reconcile the output", "Review a small batch manually and compare source-message count with accepted and rejected rows. Use OpenRefine for reviewed cleanup. Venmail mailbox access or export must be confirmed for your chosen collection method."],
  ]),
  "turn-inbound-email-into-tasks": improvement(["mailparser", "python-email"], "A free prototype can parse a saved message and write a task-shaped record before connecting any live inbox. Use a monitored Venmail address for human replies and confirm the supported collection mechanism separately. Keep the message source linked to the task so an operator can recover context.", [
    ["Define ownership", "Give every accepted request a queue and an owner. Start with manual classification if automatic assignment cannot be trusted yet."],
    ["Deduplicate safely", "Use a stable source event or message identifier with a database uniqueness rule. Replaying the same delivery should update or reuse the task, not create another one."],
    ["Handle replies deliberately", "Do not infer thread membership from the subject alone. Preserve relevant message references and test forwarded mail, replies and auto-responses. Keep an exception queue visible to the team."],
  ]),
  "webhook-to-email-vs-email-to-webhook": improvement(["mailparser", "venmail-api"], "You can design both directions with free local fixtures, but they are different contracts. Webhook-to-email starts with a trusted application event and creates a message. Email-to-webhook starts with untrusted incoming mail and produces structured data. Venmail's delivery-event callbacks should not be mistaken for a general inbound parser.", [
    ["Choose the source of truth", "For a paid order, use the verified store event and current order state. For a support request, preserve the received email and its source identifier."],
    ["Stop feedback loops", "Mark processed events and distinguish generated notifications from incoming requests. A notification email must not create a new task that sends another notification forever."],
    ["Test repeats and failures", "Replay one event twice and simulate a destination outage. Verify that retrying neither loses the request nor multiplies the email. Confirm account integration access before deploying."],
  ]),
  "woocommerce-email-not-sending": improvement(["fluent-smtp", "mailpit"], "Use free tools to locate the first failed handoff. A staging Mailpit inbox can show whether WooCommerce creates a message. FluentSMTP can connect an authorized SMTP service. For Venmail, use the SMTP details issued to your account and keep the store's order logic in charge.", [
    ["Test an actual order event", "Use a synthetic test order and the expected state transition. A successful SMTP test is not evidence that the order event generated an email."],
    ["Compare the two paths", "If the plugin test arrives but the order notification does not, investigate order state, enabled notifications and background jobs before changing sender DNS."],
  ]),
  "shopify-woocommerce-email-infrastructure": improvement(["shopify-messaging", "woocommerce-email"], "Start with a free inventory of every customer message and its owner. Keep store-native receipts and checkout state under the commerce system's control. Use Venmail for monitored support correspondence and suitable subscribed broadcasts; no native Shopify connector or free lifecycle automation is assumed.", [
    ["Write one row per message", "Record receipt, shipping update, support reply and newsletter separately. Include trigger, recipient eligibility, sender and stop rule."],
    ["Test an exception", "Cancel a synthetic order and verify that a scheduled reminder does not make an outdated claim. If the store cannot expose reliable events, retain its native automation."],
  ]),
  "wordpress-not-sending-email": improvement(["fluent-smtp", "fluent-smtp-github"], "FluentSMTP is a free plugin that can connect WordPress to a compatible SMTP service. Use the exact Venmail account connection settings and an authorized sender. The plugin is free; hosting and sending allowances are separate.", [
    ["Set one deliberate route", "Check for competing mail plugins, then configure the approved SMTP connection. Do not publish credentials in a code repository or support screenshot."],
    ["Test the user's action", "After the plugin test, submit the actual form and request a reset for a dedicated test account. Confirm arrival and replies in addition to the plugin's success indicator."],
  ]),
  "contact-form-7-not-sending-email": improvement(["fluent-smtp", "wordpress-email"], "A useful free repair starts by separating submission storage from email notification. Check the form's mail settings and use an authorized business-domain sender. Put the visitor's validated address in Reply-To rather than From, so replies work without claiming to send as the visitor's provider.", [
    ["Compare two tests", "Send the SMTP plugin's test to your Venmail mailbox, then submit the form with a unique marker. If only the first arrives, inspect the form configuration and whether it produced mail."],
    ["Verify recovery", "Make sure a failed notification does not silently erase the enquiry. Use a supported submission-storage method and assign someone to review failures."],
  ]),
  "wordpress-emails-going-to-spam": improvement(["checkdmarc", "fluent-smtp"], "Start with free evidence: the received headers, the actual From address and the plugin configuration. A Venmail test message should use an authorized sender. A green plugin status only shows its own handoff; it does not describe the recipient's folder choice.", [
    ["Check identity first", "Compare the form's From with the sending domain. Keep the visitor address in Reply-To and inspect the receiver's authentication results."],
    ["Retest realistic content", "Use the actual form message with synthetic details. If authentication passes, inspect links, formatting and the receiver's explanation instead of changing domains without evidence."],
  ]),
  "white-label-email-marketing-platforms": improvement(["mautic", "mjml"], "You can prototype an agency service with free templates, a planning document and client-owned accounts. That does not establish white-label rights or client isolation. Evaluate Venmail's exact commercial and account features before promising a branded reseller platform.", [
    ["Test two fictional clients", "Check permissions, exports and sender ownership without using customer data. A changed logo is not proof of isolation."],
    ["Cost the operations", "For an open-source option such as Mautic, include hosting, backups, updates and support. For a hosted option, verify the same responsibilities in the service terms."],
  ]),
  "email-infrastructure-for-agencies": improvement(["mjml", "openrefine"], "Begin with a free client inventory: domain owner, sender, audience source, approval owner and support contact. Use separate client-authorized Venmail access where appropriate. Never mix unrelated client lists into one broadcast to simplify administration.", [
    ["Standardize the handoff", "Keep one repeatable checklist for DNS setup, test messages and reply ownership. Store credentials in an approved secret system, not in the checklist."],
    ["Make exit possible", "Test a client export and document how access is revoked. Templates can be maintained with free MJML when supported, while data cleanup can use OpenRefine on an approved machine."],
  ]),
  "shareable-email-administrator-setup-links": improvement(["cloudflare-email-dns"], "A free preparation sheet can make delegated setup much clearer. Record the domain, requested change, approving owner and test mailbox. In Venmail's supported setup flow, use the purpose-built authorization link rather than copying a reusable administrator password into email.", [
    ["Review the exact scope", "The administrator should see which domain and DNS changes are being authorized. Do not treat a setup link as permission to make unrelated account changes."],
    ["Verify the outcome", "After authorization, compare the intended records and send a controlled test. Record completion and keep the original rollback information available."],
  ]),
};

// A complete local example for the parser cluster; no network or customer data required.
existingImprovements["email-to-webhook-architecture"].blocks.push(
  code("Read a saved synthetic message with Python", `from email import policy
from email.parser import BytesParser
from pathlib import Path

message = BytesParser(policy=policy.default).parsebytes(
    Path("sample.eml").read_bytes()
)
record = {
    "message_id": str(message.get("Message-ID", "")),
    "subject": str(message.get("Subject", "")),
    "from_header": str(message.get("From", "")),
}
print(record)  # Use synthetic fixtures; do not log private mail in production.`),
  p("Save a synthetic email as sample.eml and run the script with Python 3. This only reads headers from a local file. The From header is untrusted text, not verified identity. Add your own validation, durable storage and authenticated destination before turning the record into a webhook."),
);
