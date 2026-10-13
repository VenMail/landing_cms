const footerGroups = [
  ['Service', [
    ['Pricing', '/#pricing'],
    ['Request a quote', '/request-quote'],
  ]],
  ['Support', [
    ['Help', '/resources/help'],
    ['Contact us', '/contact-us'],
    ['Service status', 'https://status.venmail.app'],
  ]],
  ['Company', [
    ['About us', '/about-us'],
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

        <div className="grid gap-12 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <a href="/" className="flex h-11 w-fit items-center rounded-lg bg-white px-3 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#202124]">
              <span className="sr-only">Venmail home</span>
              <img src="/logo-text.png" alt="" className="w-36" />
            </a>
            <address className="mt-6 space-y-1 text-sm not-italic leading-6 text-white/70">
              <p className="font-medium text-white">VenMail LLC</p>
              <p>8 The Green</p>
              <p>Dover, Delaware, USA</p>
              <a href="mailto:hello@venmail.io" className={linkClass}>hello@venmail.io</a>
              <a href="tel:+19027090836" className={linkClass}>+1 902-709-0836</a>
            </address>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
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
