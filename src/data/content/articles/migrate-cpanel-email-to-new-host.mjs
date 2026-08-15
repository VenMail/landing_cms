export default Object.freeze([
  { type: "paragraph", text: "cPanel email is often coupled to a website hosting account, but moving the website does not automatically copy mailbox data. Treat mail as a separate service: inventory accounts and rules, create destinations, copy folders over IMAP, switch DNS, then reconfigure users and applications." , sourceIds: ["cpanel-email-accounts"] },
  { type: "table", caption: "Inventory before touching DNS", headers: ["Item", "Where to look", "Record"], rows: [
    ["Mailboxes", "cPanel Email Accounts", "Address, quota, used storage, owner"],
    ["Routing", "Forwarders and Email Routing", "Alias, target, catch-all behavior"],
    ["Clients", "Connect Devices plus user interviews", "IMAP/SMTP hostnames and usernames"],
    ["Automation", "Website config, cron and plugins", "Sender, SMTP relay and secret owner"],
    ["DNS", "Authoritative DNS provider", "MX, SPF, DKIM and DMARC values"],
  ] },
  { type: "steps", title: "Copy and cutover runbook", items: [
    { title: "Export the inventory", text: "Resolve duplicate addresses and decide which old mailboxes become users, aliases or shared destinations." },
    { title: "Create and test the new accounts", text: "Confirm webmail login, quota, password recovery and an outbound message before import." },
    { title: "Start the IMAP copy", text: "Use the full email address as the source username. Migrate one pilot first; compare folders and counts before scaling." },
    { title: "Perform the DNS cutover", text: "Replace MX only after destination tests pass. Update SPF and publish the new DKIM key without removing still-active senders prematurely." },
    { title: "Run a final synchronization", text: "Copy mail received by the old cPanel host during propagation and preserve the migration log." },
  ] },
  { type: "callout", tone: "warning", title: "Contacts and calendars need another path", text: "IMAP copies messages and folders, not address books or calendars. Export contacts as CSV or vCard and calendars as ICS or use a supported CardDAV/CalDAV migration. Verify recurring events and time zones separately." },
  { type: "heading", level: 2, id: "devices", text: "Device and application reconfiguration" },
  { type: "list", style: "bulleted", items: ["Give users the exact incoming and outgoing hostnames, ports, encryption and username format.", "Update the website's SMTP plugin or application secret; a mailbox password saved in WordPress will not follow the migration.", "Check scanners and older devices for modern TLS support before the cutover.", "Remove the old account from devices only after sent items and local-only folders are accounted for."] },
  { type: "table", caption: "Rollback decision", headers: ["Symptom", "First check", "Rollback?"], rows: [
    ["One user cannot sign in", "Credentials and destination account", "No; isolate the account"],
    ["All outside senders receive rejection", "MX target and receiver health", "Yes, if the receiver cannot be restored promptly"],
    ["Outbound mail fails authentication", "SMTP settings, SPF and DKIM", "Usually no; inbound MX can remain"],
    ["Some mail still reaches cPanel", "DNS cache and old MX remnants", "No; wait, correct records, then delta-copy"],
  ] },
  { type: "checklist", title: "Closeout", items: ["Message and folder counts reconciled", "Aliases and forms tested", "DNS authentication passes", "Device guide delivered", "Final IMAP copy logged", "Old host retained through the agreed rollback window"] },
]);
