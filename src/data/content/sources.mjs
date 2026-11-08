import { utilitySources } from "./utility/sources.mjs";
const accessedAt = "2026-08-15";

const entries = [
  ["constant-contact-holiday-2026", "Constant Contact", "Small Businesses Will Win New Holiday Customers They Aren't Prepared to Keep", "https://news.constantcontact.com/2026-11-03-Small-Businesses-Will-Win-New-Holiday-Customers-They-Arent-Prepared-to-Keep,-Constant-Contact-Research-Finds", "research", "2026-11-08"],
  ["ico-direct-marketing-guidance", "UK Information Commissioner's Office", "Plan direct marketing", "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/direct-marketing-guidance/plan-direct-marketing/", "official-guidance", "2026-11-08"],
  ["wellhub-ai-workload-2026", "Wellhub", "Your Best AI Talent Is Also Your Biggest Flight Risk", "https://wellhub.com/en-us/blog/press-releases/ai-talent-burnout-retention-wellhub-study/", "research", "2026-11-07"],
  ["gartner-ai-capacity-2026", "Gartner", "Three Steps for CFOs to Turn AI Time Savings into Business Value", "https://www.gartner.com/en/newsroom/press-releases/2026-11-04-gartner-idnetifies-three-steps-for-cfos-to-turn-ai-time-saavings-into-business-value", "research", "2026-11-07"],
  ["activtrak-ai-workdays-2026", "ActivTrak Productivity Lab", "AI users have workdays up to 90 minutes longer than non-users", "https://www.activtrak.com/news/productivity-lab-ai-users-longer-workdays/", "research"],
  ["gallup-ai-productivity-2026", "Gallup", "AI and workplace productivity: What the data show", "https://www.gallup.com/workplace/713063/ai-workplace-productivity.aspx", "research"],
  ["cloudflare-email-routing", "Cloudflare", "Email Routing documentation", "https://developers.cloudflare.com/email-routing/", "official-docs"],
  ["cloudflare-email-dns", "Cloudflare", "Set up email records", "https://developers.cloudflare.com/dns/manage-dns-records/how-to/email-records/", "official-docs"],
  ["cloudflare-dmarc", "Cloudflare", "DMARC management", "https://developers.cloudflare.com/dmarc-management/", "official-docs"],
  ["aws-ses-send", "Amazon Web Services", "Sending email with Amazon SES", "https://docs.aws.amazon.com/ses/latest/dg/send-email.html", "official-docs"],
  ["aws-ses-credentials", "Amazon Web Services", "Types of Amazon SES credentials", "https://docs.aws.amazon.com/ses/latest/dg/send-email-concepts-credentials.html", "official-docs"],
  ["aws-ses-sandbox", "Amazon Web Services", "Request production access", "https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html", "official-docs"],
  ["aws-ses-identities", "Amazon Web Services", "Creating and verifying identities", "https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html", "official-docs"],
  ["aws-ses-mail-from", "Amazon Web Services", "Custom MAIL FROM domains", "https://docs.aws.amazon.com/ses/latest/dg/mail-from.html", "official-docs"],
  ["google-data-migration", "Google", "Migrate email with the data migration service", "https://support.google.com/a/answer/9476255", "official-docs"],
  ["google-workspace-pricing", "Google", "Google Workspace pricing", "https://workspace.google.com/pricing.html", "official-product"],
  ["microsoft-email-migration", "Microsoft", "Ways to migrate multiple email accounts to Microsoft 365", "https://learn.microsoft.com/en-us/exchange/mailbox-migration/mailbox-migration", "official-docs"],
  ["microsoft-365-pricing", "Microsoft", "Microsoft 365 business plans and pricing", "https://www.microsoft.com/en-us/microsoft-365/business/compare-all-microsoft-365-business-products", "official-product"],
  ["zoho-mail-pricing", "Zoho", "Zoho Mail plans and pricing", "https://www.zoho.com/mail/zohomail-pricing.html", "official-product"],
  ["fastmail-pricing", "Fastmail", "Fastmail pricing", "https://www.fastmail.com/pricing/", "official-product"],
  ["proton-business", "Proton", "Proton for Business", "https://proton.me/business/plans", "official-product"],
  ["cpanel-email-accounts", "cPanel", "Email Accounts", "https://docs.cpanel.net/cpanel/email/email-accounts/", "official-docs"],
  ["wordpress-email", "WordPress", "FAQ Troubleshooting: emailed passwords are not being received", "https://wordpress.org/documentation/article/faq-troubleshooting/#e-mailed-passwords-are-not-being-received", "official-docs"],
  ["wordpress-site-health", "WordPress", "Site Health screen", "https://wordpress.org/documentation/article/site-health-screen/", "official-docs"],
  ["mailgun-pricing", "Mailgun", "Mailgun pricing", "https://www.mailgun.com/pricing/", "official-product"],
  ["sendgrid-pricing", "Twilio SendGrid", "Email API plans and pricing", "https://sendgrid.com/en-us/pricing", "official-product"],
  ["postmark-pricing", "Postmark", "Postmark pricing", "https://postmarkapp.com/pricing", "official-product"],
  ["google-helpful-content", "Google Search Central", "Creating helpful, reliable, people-first content", "https://developers.google.com/search/docs/fundamentals/creating-helpful-content", "official-guidance"],
  ["openai-crawlers", "OpenAI", "Overview of OpenAI crawlers", "https://developers.openai.com/api/docs/bots", "official-guidance"],
  ["dmarc-org", "DMARC.org", "DMARC overview", "https://dmarc.org/overview/", "standards-guidance"],
];

export const sources = Object.freeze([...entries.map(([id, publisher, title, url, kind, sourceAccessedAt]) => Object.freeze({
  id, publisher, title, url, accessedAt: sourceAccessedAt ?? accessedAt, kind,
})), ...utilitySources]);

export const sourcesById = Object.freeze(Object.fromEntries(sources.map((source) => [source.id, source])));
