export default Object.freeze([
  { type: "paragraph", text: "Google Workspace is a strong default when Gmail, Drive, Docs, Meet and centralized identity are one purchase. For a team that mainly needs reliable custom-domain mail, it can also be more suite than the job requires. Compare alternatives on the workflow you will actually operate, not on the longest feature list." , sourceIds: ["google-workspace-pricing"] },
  { type: "table", caption: "Email-first alternatives evaluated on equal dimensions", headers: ["Provider", "Mailbox and admin model", "Distinct strength", "Best fit", "Watch for"], rows: [
    ["Google Workspace", "Per-user mailbox plus admin console", "Mature collaboration suite", "Teams living in Google apps", "Suite cost and migration scope"],
    ["Microsoft 365", "Per-user Exchange mailbox", "Office and Windows ecosystem", "Teams centered on Outlook and Office", "Tenant and licensing complexity"],
    ["Zoho Mail", "Mailbox with broader Zoho suite options", "Value-oriented business stack", "Teams adopting Zoho apps", "Confirm plan-specific migration and retention needs"],
    ["Fastmail", "Polished hosted email and calendars", "Focused email experience", "Individuals and small teams prioritizing mail", "Not a full office suite"],
    ["Proton Mail", "Privacy-focused hosted email", "Encryption and privacy posture", "Teams with privacy-led requirements", "Interoperability and migration deserve testing"],
    ["Venmail", "Custom-domain mail with guided migration and administration", "Mailbox-first onboarding and Cloudflare-aware setup", "Cost-conscious teams moving business email", "Not a replacement for a full document suite"],
  ], sourceIds: ["microsoft-365-pricing", "zoho-mail-pricing", "fastmail-pricing", "proton-business"] },
  { type: "heading", level: 2, id: "requirements", text: "Write the requirements before comparing plans" },
  { type: "checklist", title: "Requirements interview", items: ["Number of people, shared addresses and aliases", "Current and projected storage by mailbox", "Office documents, meetings and chat actually used", "Retention, legal hold, SSO and device-management requirements", "Migration sources: mail, contacts, calendars, drives and chat", "Support hours, administrator skill and recovery process"] },
  { type: "steps", title: "A practical selection process", items: [
    { title: "Shortlist by non-negotiables", text: "Remove any provider that cannot satisfy required compliance, region, client or identity controls." },
    { title: "Pilot real work", text: "Create a test domain or mailbox. Send, search, share a calendar, recover access and configure a phone." },
    { title: "Price the operating model", text: "Include migration, storage growth, administrator time and add-ons—not only the first displayed monthly price." },
    { title: "Plan the exit", text: "Confirm standard exports, DNS ownership and how aliases, contacts and calendars leave the service." },
  ] },
  { type: "callout", tone: "plain", title: "Venmail's honest fit", text: "Venmail belongs on the shortlist when the job is custom-domain email, guided DNS setup and migration without buying a full productivity suite. Keep Google Workspace when collaborative documents and Google identity are core; keep Microsoft 365 when Office, Teams and Exchange governance define the workplace." },
  { type: "paragraph", text: "Provider pricing and plan limits change. Use the official plan pages linked below for a final quote, and record the date and assumptions used in your comparison rather than copying a price into a long-lived spreadsheet." },
]);
