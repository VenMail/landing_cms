export default Object.freeze([
  { type: "paragraph", text: "Cloudflare can manage the DNS records that tell the internet where mail should go, and Cloudflare Email Routing can forward inbound messages to another inbox. Neither feature, by itself, creates a stored mailbox with folders, sent mail, IMAP access and authenticated outbound sending. That distinction is the starting point for a sound decision.", sourceIds: ["cloudflare-email-routing", "cloudflare-email-dns"] },
  { type: "callout", tone: "plain", title: "Short answer", text: "Use Email Routing when a few addresses only need to forward somewhere else. Choose email hosting when people need to sign in, send and receive as the business domain, retain mail, share administration or migrate an existing mailbox." },
  { type: "table", caption: "Decision table: forwarding or a hosted mailbox", headers: ["Requirement", "Email Routing", "Mailbox hosting", "Why it matters"], rows: [
    ["Receive at an alias", "Yes, then forwards", "Yes, stores locally", "Both can accept inbound mail"],
    ["Reply as the custom domain", "Needs a separate sender", "Built in", "Forwarding does not supply an outbound identity"],
    ["IMAP/webmail folders", "No", "Yes", "Required for a normal mailbox experience"],
    ["Shared admin and recovery", "Routing rules only", "Users, passwords and policies", "Operational control differs"],
    ["Existing-mail migration", "No mailbox to import into", "Usually supported", "Historical mail needs storage"],
  ] },
  { type: "heading", level: 2, id: "dns-record-map", text: "The DNS record map" },
  { type: "table", caption: "DNS records and their jobs", headers: ["Record", "Job", "Migration check"], rows: [
    ["MX", "Selects the inbound receiving service", "Remove conflicting old priorities only after the destination works"],
    ["SPF", "Lists permitted sending systems", "Publish one consolidated SPF TXT record, not several competing ones"],
    ["DKIM", "Signs outbound messages for a specific sender", "Use the selector and public key issued by the active sender"],
    ["DMARC", "Evaluates alignment and declares policy", "Start with reporting while every legitimate stream is inventoried"],
  ], sourceIds: ["cloudflare-email-dns", "cloudflare-dmarc"] },
  { type: "steps", title: "A safe Cloudflare setup sequence", items: [
    { title: "Inventory mail flows", text: "List human mailboxes, aliases, forms, invoices, marketing tools and application senders. DNS changes affect all of them." },
    { title: "Provision before routing", text: "Create the destination mailbox and verify sign-in, recovery and outbound sending before editing MX." },
    { title: "Authorize DNS narrowly", text: "Review the exact zone and records. A shareable one-time setup link is safer than sending reusable account credentials to an administrator." },
    { title: "Test both directions", text: "Send from an unrelated provider, reply from the new mailbox, and inspect SPF, DKIM and DMARC results." },
  ] },
  { type: "callout", tone: "warning", title: "Where Venmail is not the fit", text: "Keep Cloudflare Email Routing alone when forwarding is the whole requirement. Choose Google Workspace or Microsoft 365 when tightly integrated office documents, meetings and enterprise governance outweigh a mailbox-first service." },
  { type: "checklist", title: "Before declaring the domain connected", items: ["No mail hostname is accidentally proxied", "Only intended MX records remain", "Outbound mail has aligned DKIM", "SPF covers every legitimate sender", "A rollback copy of the old DNS values exists"] },
]);
