const footerLinks = [
  ['Support', '/resources/help'],
  ['Service status', 'https://status.venmail.app'],
  ['Migration', '/request-quote'],
  ['Terms', '/resources/terms-of-service'],
  ['Privacy', '/resources/privacy-policy'],
  ['Security', '/security-whitepaper'],
];

export default function MailFirstFooter() {
  return (
    <footer className="border-t border-[#dadce0] bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <a href="/" className="flex h-11 w-fit items-center rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2"><span className="sr-only">Venmail home</span><img src="/logo-text.png" alt="" className="w-36" /></a>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-[#5f6368] transition-colors hover:text-[#202124]">{label}</a>)}
        </nav>
        <p className="text-sm text-[#5f6368]">© {new Date().getFullYear()} VenMail LLC.</p>
      </div>
    </footer>
  );
}
