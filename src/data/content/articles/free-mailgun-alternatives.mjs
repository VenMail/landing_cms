export default Object.freeze([
  { type: "paragraph", text: "A 'free Mailgun alternative' is only useful if it supports the workload after the trial: volume, logs, event retention, inbound routes, templates, support and reputation controls. Free allowances and prices change, so this comparison uses operating model rather than a copied price table. Confirm the current offer on each official page before committing." , sourceIds: ["mailgun-pricing", "sendgrid-pricing"] },
  { type: "table", caption: "Alternative fit matrix", headers: ["Provider", "Core model", "Useful when", "Operational trade-off"], rows: [
    ["Mailgun", "Developer API and email tooling", "Existing integration uses routes and Mailgun events", "Leaving means migrating more than an SMTP endpoint"],
    ["Amazon SES", "AWS sending infrastructure", "Team can own IAM, events and reputation operations", "Fewer mailbox and workflow abstractions"],
    ["SendGrid", "Packaged email API and marketing features", "Team wants a mature dashboard and broad integration ecosystem", "Plan limits and feature packaging need review"],
    ["Postmark", "Transactional-message focus", "Product separates critical transactional streams", "Not designed as a collaborative human mailbox"],
    ["Venmail", "Business mailboxes plus managed or connected delivery options", "Team needs custom-domain users, migration and sending choices together", "Verify exact API and customer-owned SES path for the workload"],
  ], sourceIds: ["aws-ses-send", "postmark-pricing"] },
  { type: "heading", level: 2, id: "cost", text: "Calculate real monthly cost" },
  { type: "list", style: "bulleted", items: ["Expected sent messages plus retry and growth headroom", "Required log and event retention", "Dedicated IP or reputation tooling", "Inbound parsing and stored attachments", "Engineering time for templates, webhooks, suppressions and incident response", "Support tier needed when receipts or authentication mail fail"] },
  { type: "steps", title: "Migration test", items: [
    { title: "Freeze the interface", text: "List every API call, SMTP setting, template, route and webhook the application uses." },
    { title: "Dual-publish authentication", text: "Add the new provider's DKIM and authorize it in SPF while the old sender remains active." },
    { title: "Shadow a low-risk stream", text: "Move internal notifications or a small traffic slice and compare events, latency and headers." },
    { title: "Move suppressions and callbacks", text: "A successful send API response is not enough; bounces and complaints must reach the same business logic." },
    { title: "Retire deliberately", text: "Keep the old account and DNS authorization through a rollback window, then revoke credentials and remove stale records." },
  ] },
  { type: "callout", tone: "plain", title: "When Mailgun remains the right choice", text: "Stay when Mailgun's routes, logs, APIs and team knowledge already solve the problem at an acceptable cost. Migration risk can exceed a modest provider-price difference." },
]);
