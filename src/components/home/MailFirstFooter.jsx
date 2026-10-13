const footerGroups = [
  ['Service', [
    ['Pricing', '/#pricing'],
    ['Request a quote', '/request-quote'],
  ]],
  ['Products', [
    ['Mail', '/product/mail'],
    ['Calendar', '/product/calendar'],
    ['Contacts', '/product/contacts'],
    ['Meetings', '/product/meeting'],
    ['Bookings', '/product/booking'],
    ['Email automation', '/product/email-automation'],
    ['Email-to-Action', '/product/email-to-action'],
  ]],
  ['Compare', [
    ['Gmail', '/compare/gmail'],
    ['Outlook', '/compare/outlook'],
    ['Zoho', '/compare/zoho'],
    ['Webmail', '/compare/webmail'],
  ]],
  ['Resources', [
    ['Blog', '/blog'],
    ['Email header analyzer', '/tools/email-header-analyzer'],
    ['FAQs', '/resources/faqs'],
    ['Help', '/resources/help'],
  ]],
  ['Support', [
    ['Contact us', '/contact-us'],
    ['Service status', 'https://status.venmail.app'],
  ]],
  ['Company', [
    ['Solutions', '/solutions'],
    ['Integrations', '/integrations'],
    ['Why Venmail', '/why-venmail'],
    ['Venmail Agent', '/venmail-agent'],
    ['About us', '/about-us'],
    ['Careers', '/career'],
    ['Partners', '/resources/partner'],
    ['AI principles', '/resources/ai-principles'],
    ['Security whitepaper', '/security-whitepaper'],
    ['GitHub', 'https://github.com/VenMail'],
  ]],
  ['Legal', [
    ['Terms of service', '/resources/terms-of-service'],
    ['Privacy policy', '/resources/privacy-policy'],
    ['Data processing agreement', '/resources/dpa'],
  ]],
];

const linkClass = 'flex min-h-11 w-fit items-center text-sm text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#202124]';

export default function MailFirstFooter() {
  return (
    <footer className="border-t border-white/15 bg-[#202124] text-white">
      <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <section aria-label="Venmail service facts" className="grid border-b border-white/15 sm:grid-cols-2">
          <div className="py-8 sm:pr-8">
            <p className="text-4xl font-semibold tracking-[-0.025em]">8,000+</p>
            <p className="mt-2 text-base font-medium">Email accounts</p>
            <p className="mt-1 text-sm text-white/60">As of 13 October 2026</p>
          </div>
          <div className="border-t border-white/15 py-8 sm:border-l sm:border-t-0 sm:pl-8">
            <p className="text-4xl font-semibold tracking-[-0.025em]">100%</p>
            <p className="mt-2 text-base font-medium">Reported web uptime</p>
            <p className="mt-1 text-sm text-white/60">90-day reporting window</p>
          </div>
        </section>

        <p className="border-b border-white/15 py-5 text-sm leading-6 text-white/60">
          Web availability for venmail.io, m.venmail.io, and venia.cloud, reported by <a href="https://status.venmail.app" className="font-medium text-white underline decoration-white/40 underline-offset-4 hover:decoration-white focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#202124]">Pulsetic</a> as of 13 October 2026.
        </p>

        <div className="py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <a href="/" className="flex h-11 w-fit shrink-0 items-center rounded-lg bg-white px-3 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#202124]">
              <span className="sr-only">Venmail home</span>
              <img src="/logo-text.png" alt="" className="w-36" />
            </a>
            <address className="flex max-w-3xl flex-col text-sm not-italic leading-6 text-white/70 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-x-6">
              <p className="font-medium text-white">VenMail LLC</p>
              <p>8 The Green, Dover, Delaware, USA</p>
              <a href="mailto:hello@venmail.io" className={linkClass}>hello@venmail.io</a>
              <a href="tel:+19027090836" className={linkClass}>+1 902-709-0836</a>
            </address>
          </div>

          <nav aria-label="Footer" className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/15 pt-10 sm:grid-cols-3 lg:grid-cols-7">
            {footerGroups.map(([heading, links]) => (
              <section key={heading} aria-labelledby={`footer-${heading.toLowerCase()}`}>
                <h2 id={`footer-${heading.toLowerCase()}`} className="text-sm font-semibold text-white">{heading}</h2>
                <ul className="mt-3">
                  {links.map(([label, href]) => <li key={href}><a href={href} className={linkClass}>{label}</a></li>)}
                </ul>
              </section>
            ))}
          </nav>
        </div>

        <p className="border-t border-white/15 pt-6 text-sm text-white/60">© {new Date().getFullYear()} VenMail LLC.</p>
      </div>
    </footer>
  );
}
