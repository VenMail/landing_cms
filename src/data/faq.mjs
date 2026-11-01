export const faqGroups = [
  {
    title: 'Business email',
    questions: [
      {
        question: 'Can a small team use business email without Google Workspace?',
        answer: 'Yes. A business email provider can host mailboxes on your own domain without requiring a full office suite. Compare storage, migration, security and collaboration needs before choosing.',
        href: '/blog/google-workspace-alternatives-email-only', linkText: 'Compare email alternatives',
      },
      {
        question: 'How much does Venmail business email cost?',
        answer: 'The Standard plan costs $1 per month for five inboxes, with additional inboxes at $1 per month each. A verified domain and paid plan are required to activate mailboxes.',
        href: '/pricing', linkText: 'See plans and pricing',
      },
      {
        question: 'Is there a cheaper alternative to Microsoft 365 for business email?',
        answer: 'Mailbox-focused providers can cost less when a team mainly needs email. Compare the total price, mailbox storage and migration costs, as well as any Microsoft apps or features your team would need to replace.',
        href: '/blog/microsoft-365-alternatives-small-business', linkText: 'Compare Microsoft 365 alternatives',
      },
      {
        question: 'What are the alternatives to Zoho Mail for a small business?',
        answer: 'Alternatives include mailbox-focused providers and broader collaboration suites. Compare custom-domain support, storage, administration, migration and the apps your team uses before switching.',
        href: '/blog/zoho-mail-alternatives', linkText: 'Compare Zoho Mail alternatives',
      },
      {
        question: 'Can I use a domain I already own?',
        answer: 'Yes. Standard uses a domain you already own. Verify the domain and configure the required email DNS records before activating your mailbox.',
        href: '/blog/cloudflare-email-hosting-vs-email-routing', linkText: 'Read the domain setup guide',
      },
    ],
  },
  {
    title: 'Migration',
    questions: [
      {
        question: 'How do I change email providers and keep the same address?',
        answer: 'If you control the domain, create the destination mailboxes, copy your existing messages and update the domain’s mail records. Keep the old provider active during the transition and test delivery in both directions.',
        href: '/blog/switch-email-provider-keep-same-address', linkText: 'Read the migration guide',
      },
      {
        question: 'Can I move from Zoho Mail to another provider?',
        answer: 'Yes. Inventory mailboxes, aliases and storage first. Create the new mailboxes, copy messages and update DNS only after testing the destination.',
        href: '/blog/migrate-zoho-mail-to-new-provider', linkText: 'Read the Zoho migration guide',
      },
      {
        question: 'Can I use Venmail with Gmail?',
        answer: 'Yes. You can configure Gmail with your Venmail IMAP and SMTP credentials to receive and send mail through Gmail.',
        href: '/#delivery', linkText: 'Learn about Venmail email',
      },
    ],
  },
  {
    title: 'Delivery and DNS',
    questions: [
      {
        question: 'Does Cloudflare Email Routing include a mailbox?',
        answer: 'Cloudflare Email Routing forwards incoming messages to another address; it does not itself provide a stored mailbox or authenticated outbound sending.',
        href: '/blog/cloudflare-email-hosting-vs-email-routing', linkText: 'Compare forwarding and hosting',
      },
      {
        question: 'Why might business emails be rejected or land in spam?',
        answer: 'Recipient policies, sender reputation, authentication and message content can all affect delivery. Check the bounce or headers and verify SPF, DKIM and DMARC before changing the setup.',
        href: '/blog/free-email-deliverability-audit', linkText: 'Read the deliverability guide',
      },
      {
        question: 'How should I warm up a new email domain?',
        answer: 'Authenticate the domain, start with messages people expect and increase sending gradually. Watch delivery, bounces and recipient responses; warm-up cannot guarantee inbox placement.',
        href: '/blog/warm-up-new-email-domain-without-paid-tools', linkText: 'Read the domain warm-up guide',
      },
    ],
  },
];
