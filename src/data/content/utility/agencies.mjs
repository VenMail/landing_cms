import { guide, p, steps, table, check, example } from "./shared.mjs";

export default [
guide(9, "start-client-newsletter-service-free-tools", "Start a client newsletter service with free tools", "Build a clear service around planning, writing and review before paying for a reseller platform.", "Freelancers and small agencies serving their first newsletter client", ["mjml", "openrefine", "mautic"], "Choose a documented reseller platform when branded client portals, automated billing and enforceable tenant isolation are required from day one.", [
  p("You can deliver a useful newsletter service before buying a white-label platform. Start with one client, a clear scope and a repeatable approval process. The client is paying for useful communication and reliable execution, not merely access to another dashboard."),
  p("Keep the client's sender identity, audience and approvals separate from your agency's marketing. A client-owned Venmail workspace may be a practical place for its mailbox and basic broadcasts. That is an operating arrangement, not a claim that Venmail offers free white-label resale rights."),
  table("A small first engagement", ["Deliverable", "Included", "Client responsibility"], [
    ["Planning", "One audience and one newsletter objective", "Explain the customer problem"],
    ["Writing", "One draft and an agreed revision round", "Approve facts and offers"],
    ["Sending", "Test copy and approved recipient selection", "Own the audience and sending account"],
    ["Review", "Replies, outcomes and one next improvement", "Answer customer questions"],
  ]),
  steps("Run a clean pilot", [
    ["Agree the boundary", "Write down the number of issues, review rounds and reporting scope. Define who handles replies and opt-outs. Do not promise revenue results or inbox placement that you cannot control."],
    ["Keep ownership visible", "Use client-authorized access and a client-controlled sender domain. Document which account holds contacts and which person can approve sends. Never collect reusable passwords in a shared planning sheet."],
    ["Use simple free production tools", "Draft in a document, review audience exports with a spreadsheet or OpenRefine, and use plain text or an MJML template if HTML is supported. Free software still requires careful work and secure storage."],
    ["Approve the exact send", "Share the final subject, message, audience count and intended sending time. Record approval for that specific version. If the audience or offer changes afterward, obtain a fresh approval before sending."],
    ["Review and hand over", "Report the agreed outcome with its denominator. Give the client the final copy and a change log. Make sure they can continue using their own mailbox and audience if the engagement ends."],
  ]),
  example("approval record", "Issue: October workshop guide. Audience: current workshop subscribers, excluding all opt-outs. Version: final-3. Sender: the client's approved address. Client approval: recorded against this version. Reply owner: the client's bookings team."),
  p("Venmail's Free workspace may support a small pilot's basic email needs; check its current limits. For advanced journeys, Mautic is an open-source alternative to evaluate, with hosting and maintenance work of its own. Neither option makes account permissions or a reseller agreement unnecessary.", "venmail-plans", "mautic"),
  check("A service worth repeating", ["Scope is written down", "The client owns its audience and sender", "Exact content and audience are approved", "Replies and opt-outs have owners", "Handoff is possible without your personal account"]),
]),
guide(9, "white-label-email-free-software-cost-checklist", "White-label email: what free software does and does not cover", "Compare branding, account separation and operating costs before promising clients a platform.", "Agencies evaluating an email service or reseller offering", ["mautic", "mjml", "venmail-api"], "Buy a supported reseller service when your team cannot operate updates, backups, access controls and sending incidents for multiple clients.", [
  p("Free email software can reduce license spending, but a white-label service also needs client separation, support and clear commercial rights. Treat branding and operations as separate decisions. Changing a logo does not establish that one client cannot see another client's contacts."),
  p("Start with what you want to sell. A managed newsletter service can use client-owned accounts and manual approvals. A self-service reseller product needs stronger controls, billing and an exit path. These are different scopes even if both use your agency's brand."),
  table("Evaluate the whole service", ["Area", "Question to answer", "Evidence"], [
    ["Branding", "Which screens and messages can be branded?", "A tested client walkthrough and applicable terms"],
    ["Separation", "Can a client access another client's records?", "Tests using two restricted accounts"],
    ["Sending", "Who owns domains, limits and failures?", "Written responsibility and account settings"],
    ["Exit", "Can the client export data and keep its domain?", "A completed export and handoff exercise"],
    ["Operations", "Who restores service after a failure?", "Backup restore evidence and a support owner"],
  ]),
  steps("Make an evidence-based choice", [
    ["Prototype with synthetic clients", "Create two test organizations and fictional contacts. Test the permissions that matter, including export and administrator access. Never use real client data to discover that isolation is missing."],
    ["Price the recurring work", "Include hosting, backups, mail delivery, monitoring, upgrades and support hours. Free source code does not remove these jobs. Compare costs at the same client count and workload."],
    ["Check Venmail's exact role", "Evaluate Venmail for approved mailboxes, sending or administration. Confirm white-label rights, account boundaries and commercial terms directly before offering a branded reseller product. Do not infer them from multi-domain support."],
    ["Set a go or no-go rule", "Write the requirements you will not compromise on. If you cannot prove separation or client export, keep the pilot as a managed service with explicit access rather than launching a self-service portal."],
  ]),
  example("a simple operating-cost worksheet", "Monthly cost = hosting + sending + backup storage + monitoring + support hours × internal hourly cost. Record each assumption and the client volume it supports. Keep one-time setup and migration work separate so they do not vanish from the quote."),
  p("Mautic is an open-source marketing platform to evaluate, while MJML can supply reusable template code. Review their current licenses and deployment requirements. Venmail can be part of the stack where its documented features fit; no free white-label entitlement is assumed here."),
  check("Before selling access", ["Branding rights are confirmed", "Two-client separation is tested", "Operating costs include staff time", "Restore and export work", "Support and sender responsibility are assigned"]),
]),
];
