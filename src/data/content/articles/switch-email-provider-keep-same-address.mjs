export default Object.freeze([
  { type: "paragraph", text: "An email address belongs to the domain, not to the company currently hosting its mailbox. If you control the domain and its DNS, you can keep sales@example.com while moving storage and delivery. The hard part is sequencing account creation, data copy, DNS cutover and device changes so no message disappears between systems." },
  { type: "checklist", title: "Preflight inventory", items: ["Every mailbox and its current storage use", "Aliases, groups, shared addresses and catch-all rules", "Forwarders, automatic replies and blocked senders", "Desktop and mobile clients using IMAP, POP or Exchange", "Website forms, scanners and apps that send as the domain", "Contacts and calendars, which IMAP does not carry"] },
  { type: "steps", title: "Migration sequence", items: [
    { title: "Create destinations", text: "Provision every required address at the new provider. Set recovery access and test login before changing mail flow." },
    { title: "Run the first copy", text: "Copy folders over IMAP or a supported migration API while the old system remains live. Record message counts and exceptions." },
    { title: "Prepare authentication", text: "Add the new sender's DKIM and update SPF carefully. Keep old authorization until old-system sending has stopped." },
    { title: "Cutover MX", text: "Change the domain's MX records during a staffed window. New deliveries will progressively move as cached DNS answers expire." },
    { title: "Run a delta copy", text: "Copy messages that arrived at the old host during DNS propagation, then test from multiple outside providers." },
  ] },
  { type: "table", caption: "Cutover controls", headers: ["Phase", "Evidence to capture", "Stop condition"], rows: [
    ["Preflight", "Account list, DNS snapshot, message counts", "Unknown addresses or no admin access"],
    ["Copy", "Folder totals and error log", "Repeated authentication or quota failures"],
    ["DNS cutover", "Old and new MX values with timestamps", "Destination cannot receive and reply"],
    ["Post-cutover", "Header authentication and external probes", "Unexpected rejections or missing mail"],
  ] },
  { type: "heading", level: 2, id: "rollback", text: "Rollback is a planned route, not a panic button" },
  { type: "paragraph", text: "Keep the old service active and do not delete mailboxes immediately. If the new receiver fails, restore the saved MX records, confirm the old host accepts delivery, fix the destination, and schedule another cutover. A rollback changes where new mail lands; it does not undo already copied or delivered messages, so retain both logs." },
  { type: "checklist", title: "Post-cutover verification", items: ["Inbound mail works from at least two unrelated providers", "Replies show the intended From address", "SPF, DKIM and DMARC align", "Aliases and shared addresses reach the right people", "Phones and desktop clients use new settings", "A final delta copy completed", "Users know the support and password-reset path"] },
  { type: "callout", tone: "plain", title: "When to use a specialist suite", text: "If the move also involves shared drives, chat, retention holds or deeply integrated calendars, select a migration tool and provider designed for that suite. A mailbox migration alone will not reproduce those workloads." },
]);
