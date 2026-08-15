export default Object.freeze([
  { type: "paragraph", text: "Email deliverability is the measurable path from an accepted message to the intended recipient experience. A platform can surface authentication and reputation signals; a consultant can diagnose a bounded problem; an agency can operate a program; an in-house owner can integrate decisions into product and marketing. Buying the wrong category wastes time because none can override a recipient provider's final decision." },
  { type: "table", caption: "Decision model for deliverability help", headers: ["Model", "Buy it when", "Evidence it should produce", "Poor fit"], rows: [
    ["Platform", "You need continuous telemetry across known streams", "Authentication, bounce, complaint and trend data", "No one will act on alerts"],
    ["Consultant or specialist", "A specific failure needs independent diagnosis", "Root-cause memo, prioritized experiments and handoff", "You need daily execution indefinitely"],
    ["Agency", "Several streams require ongoing strategy and operations", "Runbooks, monitoring, change log and accountable reviews", "Team will not grant data or implementation access"],
    ["In-house owner", "Email is core enough to justify durable expertise", "Owned dashboards, policies and incident process", "Volume and complexity are too small for a role"],
  ], sourceIds: ["dmarc-org", "cloudflare-dmarc"] },
  { type: "heading", level: 2, id: "evidence", text: "Collect evidence before shopping" },
  { type: "checklist", title: "Diagnostic packet", items: ["Representative message IDs and full headers", "SMTP bounce code and enhanced status text", "Volume by stream and recent change timeline", "SPF, DKIM and DMARC results for the visible From domain", "Complaint, unsubscribe and hard-bounce rates by source", "List acquisition and consent process", "Sending domains, IP pools and providers", "Inbox placement test method and sample limitations"] },
  { type: "steps", title: "A credible engagement", items: [
    { title: "State a falsifiable problem", text: "For example: password resets to one receiver family fell after a DNS change. Avoid the vague brief 'fix our deliverability'." },
    { title: "Separate layers", text: "Test generation, provider acceptance, authentication, reputation, recipient filtering and user engagement independently." },
    { title: "Change one controlled variable", text: "Record the hypothesis, affected stream, start time and rollback before changing domains or infrastructure." },
    { title: "Measure sustained results", text: "A single seed-list score is not proof. Compare representative traffic and business outcomes over time." },
  ] },
  { type: "callout", tone: "warning", title: "Red flags", text: "Avoid guaranteed inbox claims, instant reputation resets, unexplained domain rotation, purchased-list tolerance, or a proposal that starts with new IPs before examining consent and message evidence." },
  { type: "paragraph", text: "Venmail can help with domain setup, mailbox migration and infrastructure choices, but it cannot guarantee inbox placement. Choose a dedicated deliverability specialist or agency when the problem spans consent, reputation, large marketing programs or receiver-specific remediation beyond the platform." },
]);
