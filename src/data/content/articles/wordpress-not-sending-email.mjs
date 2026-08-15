export default Object.freeze([
  { type: "paragraph", text: "When WordPress says a form was submitted, it usually means application code reached the mail handoff—not that a recipient accepted the message. Debug the chain in order: form event, WordPress mail call, queue or cron, transport, provider response, DNS authentication and recipient delivery." , sourceIds: ["wordpress-email", "wordpress-site-health"] },
  { type: "table", caption: "Failure isolation map", headers: ["Layer", "Test", "Evidence", "Likely owner"], rows: [
    ["Form", "Submit a minimal test", "Stored entry and application log", "Site developer"],
    ["WordPress", "Trigger a known wp_mail path", "Mail logging entry or PHP error", "Developer or host"],
    ["Queue", "Inspect cron and background jobs", "Pending/failed job with timestamp", "Developer or host"],
    ["Transport", "Test host mail or SMTP plugin connection", "SMTP response and provider message ID", "Host or email admin"],
    ["Authentication", "Inspect received header", "SPF, DKIM and DMARC alignment", "DNS/email admin"],
    ["Recipient", "Compare providers and folders", "Bounce, complaint or filter result", "Email operations"],
  ], sourceIds: ["dmarc-org"] },
  { type: "steps", title: "Diagnostic runbook", items: [
    { title: "Preserve the submission", text: "Configure the form to store entries or send them to a controlled log. Do not make email the only copy of a business lead." },
    { title: "Enable scoped logging", text: "Use a maintained mail logging tool temporarily, reproduce one message, then note sender, recipient, time and any PHP error." },
    { title: "Check the queue", text: "Confirm WordPress cron or the host's job runner is executing. A healthy SMTP service cannot send a job that remains pending." },
    { title: "Test authenticated SMTP", text: "Configure an SMTP plugin with a dedicated credential and matching From identity. Capture the server response instead of repeatedly clicking send." },
    { title: "Verify DNS authentication", text: "Confirm the actual sender passes DKIM and aligns with the visible From domain under DMARC." },
    { title: "Test outside recipients", text: "Use at least two unrelated providers. Inspect spam folders and full headers; do not conclude success from one inbox." },
  ] },
  { type: "callout", tone: "warning", title: "Do not mask the error", text: "Changing the From address randomly, installing several SMTP plugins or publishing multiple SPF records creates new variables. Make one logged change at a time and remove abandoned credentials." },
  { type: "checklist", title: "Production fix acceptance", items: ["Form entries are retained independently", "A single maintained SMTP plugin is active", "Credential is dedicated and recoverable", "Queue executes reliably", "Provider returns a message ID", "SPF/DKIM/DMARC results match the intended domain", "Bounces reach an owner", "Mail logging is minimized after diagnosis"] },
  { type: "paragraph", text: "If the website sends only a few notifications, a reliable authenticated mailbox or transactional provider may be sufficient. At higher volume or for receipts and password resets, separate application mail from human mailboxes and add event handling. Venmail is useful when the same organization also needs custom-domain mailboxes and guided administration; a developer-only API may be a better fit for a pure application workload." },
]);
