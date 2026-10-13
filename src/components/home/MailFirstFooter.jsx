import { businessSignupUrl } from '@/config/pricing.mjs';
import { trackCTAClick } from '@/utils/trackConversion';

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
    <footer className="bg-[#0d252c] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">Business email for growing teams</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Start with Standard — $1/month</h2>
          </div>
          <a href={businessSignupUrl("standard")} onClick={() => trackCTAClick('homepage_footer', 'mail_first', 'homepage_mail_first')} className="w-fit rounded-full bg-orange-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-800">Create your account</a>
        </div>
        <div className="flex flex-col gap-7 pt-9 lg:flex-row lg:items-center lg:justify-between">
          <a href="/" className="w-fit rounded focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-4 focus:ring-offset-[#0d252c]"><span className="sr-only">Venmail home</span><img src="/logo-white.png" alt="" className="h-8 w-auto" /></a>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold text-white/70 transition hover:text-white">{label}</a>)}
          </nav>
          <p className="text-sm text-white/55">© {new Date().getFullYear()} VenMail LLC.</p>
        </div>
      </div>
    </footer>
  );
}
