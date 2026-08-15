export default Object.freeze([
  { type: "paragraph", text: "Amazon SES is a scalable sending service, not a normal collaborative business mailbox. It accepts mail through an API or SMTP interface and gives the account owner direct responsibility for identities, regions, production access, quotas, bounces and complaints. An alternative should be chosen according to which of those responsibilities you want a provider to absorb." , sourceIds: ["aws-ses-send", "aws-ses-sandbox"] },
  { type: "table", caption: "Amazon SES alternatives by operating model", headers: ["Option", "Primary job", "What it simplifies", "What you still own", "Best fit"], rows: [
    ["Amazon SES", "Infrastructure sending", "AWS-native, usage-oriented delivery", "Application, events, reputation and credentials", "AWS teams with email engineering capacity"],
    ["SendGrid", "Transactional and marketing sending", "Developer UI, APIs and packaged features", "Integration and program governance", "Teams wanting an established email platform"],
    ["Mailgun", "Developer email API", "APIs, routing and tooling", "Integration, list hygiene and policy", "Developer-led products"],
    ["Postmark", "Transactional streams", "Focused transactional workflow", "Application integration and recipient quality", "Products prioritizing transactional separation"],
    ["Venmail", "Managed business email plus selectable delivery infrastructure", "Domain setup, mailbox administration and migration", "Domain ownership and policy decisions", "Teams needing mailboxes as well as delivery choices"],
  ], sourceIds: ["sendgrid-pricing", "mailgun-pricing", "postmark-pricing"] },
  { type: "heading", level: 2, id: "hidden-work", text: "The cost that is not in the per-message price" },
  { type: "list", style: "bulleted", items: ["Secure and rotate credentials without placing AWS root keys in an application.", "Verify every sending identity and maintain DKIM and MAIL FROM records.", "Move out of the SES sandbox and monitor regional quotas.", "Process bounce and complaint events into suppression and support workflows.", "Separate transactional, marketing and human correspondence so one stream does not obscure another."] },
  { type: "steps", title: "Choose an alternative in four tests", items: [
    { title: "Classify the message", text: "A password reset, a marketing campaign and a person's mailbox reply have different tooling and consent requirements." },
    { title: "Price operations", text: "Estimate engineering, monitoring, incident response and support alongside provider fees." },
    { title: "Verify migration surface", text: "Inventory templates, event webhooks, suppressions, DNS, dedicated IPs and historical logs." },
    { title: "Run a production-like pilot", text: "Use a verified domain, real event handling and representative volumes before changing the main stream." },
  ] },
  { type: "callout", tone: "warning", title: "Do not replace SES merely for a lower headline price", text: "If the team already operates AWS securely, consumes events correctly and needs raw sending infrastructure, SES may remain the strongest fit. Change when the operating model—not a comparison-page superlative—justifies the move." },
  { type: "paragraph", text: "Venmail is a different category from an infrastructure-only ESP: it is relevant when a business needs hosted mailboxes, guided migration or administration around delivery. For customer-owned SES, verify the exact Venmail sending path you intend to use before assuming every mailbox, campaign and automation route will use that account." },
]);
