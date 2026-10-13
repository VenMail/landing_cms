import { useRef } from 'react';
import { businessSignupUrl } from '@/config/pricing.mjs';
import { trackCTAClick } from '@/utils/trackConversion';
import { closeDetailsMenu } from './mobileMenuState.mjs';

const links = [
  ['Mail', '#mail'],
  ['Customer conversations', '#customer-conversations'],
  ['Developers', '#developers'],
  ['Pricing', '#pricing'],
];

export default function MailFirstHeader() {
  const mobileMenuRef = useRef(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#fffdf9]/95 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="shrink-0 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-4">
          <span className="sr-only">Venmail home</span>
          <img src="/logo-text.png" alt="" className="h-8 w-auto" />
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold text-slate-700 transition hover:text-orange-700">{label}</a>)}
        </div>
        <div className="hidden items-center gap-4 sm:flex">
          <a href="https://m.venmail.io/login" className="text-sm font-bold text-slate-700 hover:text-slate-950">Sign in</a>
          <a href={businessSignupUrl("standard")} onClick={() => trackCTAClick('homepage_header', 'mail_first', 'homepage_mail_first')} className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-700">Create your account</a>
        </div>
        <details ref={mobileMenuRef} className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-slate-300 px-3 py-2 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500">Menu</summary>
          <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => closeDetailsMenu(mobileMenuRef.current)} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-800">{label}</a>)}
            <a href="https://m.venmail.io/login" onClick={() => closeDetailsMenu(mobileMenuRef.current)} className="mt-2 block border-t border-slate-200 px-3 pt-4 text-sm font-bold text-slate-700">Sign in</a>
            <a href={businessSignupUrl("standard")} onClick={() => { closeDetailsMenu(mobileMenuRef.current); trackCTAClick('homepage_mobile_nav', 'mail_first', 'homepage_mail_first'); }} className="mt-3 block rounded-lg bg-slate-950 px-3 py-2.5 text-center text-sm font-bold text-white">Create your account</a>
          </div>
        </details>
      </nav>
    </header>
  );
}
