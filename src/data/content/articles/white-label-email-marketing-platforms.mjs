export default Object.freeze([
  { type: "paragraph", text: "White-label email is not merely replacing a logo. An agency is choosing who owns the tenant, sending reputation, domains, storage, billing, support and the client's exit path. A platform is safe to resell only when those responsibilities are explicit and testable." },
  { type: "table", caption: "Agency evaluation matrix", headers: ["Dimension", "Questions to ask", "Evidence before sale"], rows: [
    ["Tenancy", "Are client data, admins and domains isolated?", "Role test across two pilot clients"],
    ["Branding", "Which login, links, mail and help surfaces are brandable?", "Complete client journey screenshots"],
    ["Deliverability ownership", "Who controls domains, IP reputation, consent and incidents?", "Written responsibility map and event access"],
    ["Storage", "Per-seat, per-mailbox or pooled by organization?", "Quota and overage behavior under load"],
    ["Billing", "Can the agency set price and see usage without exposing wholesale data?", "Sample invoice and suspension workflow"],
    ["Migration", "Who collects credentials, copies data and signs off?", "Pilot report with counts and exceptions"],
    ["Administration", "Can owners add admins and delegate one-time setup?", "Role, recovery and audit test"],
  ] },
  { type: "heading", level: 2, id: "client-ownership", text: "Preserve client ownership while simplifying setup" },
  { type: "paragraph", text: "The client should retain domain control and know where data lives. A shareable one-time DNS setup link lets a technical or email administrator authorize exact changes without giving the agency a reusable Cloudflare password. The resulting administrator relationship, expiration and audit trail should be visible to the owner." , sourceIds: ["cloudflare-email-dns"] },
  { type: "steps", title: "Run a two-client pilot", items: [
    { title: "Choose unlike clients", text: "Pilot one simple domain and one with aliases, forms and existing mail. Similar demos hide tenancy and migration gaps." },
    { title: "Walk the owner journey", text: "Test invitation, DNS authorization, adding another administrator, password recovery and offboarding." },
    { title: "Exercise migration", text: "Copy a real test mailbox, reconcile counts, run a delta pass and document rollback." },
    { title: "Simulate an incident", text: "Trace a bounce, revoke a credential and confirm agency staff cannot cross tenant boundaries." },
    { title: "Export and leave", text: "Prove the client can retrieve data and DNS instructions before the first contract is signed." },
  ] },
  { type: "checklist", title: "Contract schedule", items: ["Controller/processor roles", "Domain and sender ownership", "Acceptable-use and consent responsibility", "Support response and escalation", "Backup, export and deletion terms", "Wholesale and retail billing responsibility", "Migration assumptions and exception handling", "Security incident notification"] },
  { type: "callout", tone: "plain", title: "Where Venmail fits", text: "Venmail is relevant for agencies that need custom-domain mailbox onboarding, migration, administrator delegation and storage-aware plans. A campaign-only white-label platform may be stronger when the agency needs a deep marketing automation builder, while Microsoft 365 or Google Workspace partners may be stronger for office-suite governance." },
]);
