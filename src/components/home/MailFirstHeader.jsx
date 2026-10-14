import { useRef } from 'react';
import { businessSignupUrl } from '@/config/pricing.mjs';
import { trackCTAClick } from '@/utils/trackConversion';
import { closeDetailsMenu } from './mobileMenuState.mjs';

const links = [
  ['Delivery', '/#delivery'],
  ['Spam control', '/#spam-control'],
  ['Developers', '/#developers'],
  ['AI inbox agents', '/#ai-inbox-agents'],
  ['Pricing', '/#pricing'],
];

export default function MailFirstHeader() {
  const mobileMenuRef = useRef(null);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dadce0] bg-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-[#202124] focus:ring-2 focus:ring-orange-700">Skip to content</a>
      <nav aria-label="Primary" className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-1 px-4 sm:gap-4 sm:px-6">
        <a href="/" className="flex h-11 items-center rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">
          <span className="sr-only">Venmail home</span>
          <img src="/logo-text.png" alt="" className="w-24 sm:w-36" />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="flex h-11 items-center text-sm font-medium text-[#5f6368] transition-colors hover:text-[#202124] focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">{label}</a>)}
        </div>

        <div className="hidden items-center gap-4 sm:flex">
          <a href="https://m.venmail.io/login" className="flex h-11 items-center px-2 text-sm font-medium text-[#5f6368] hover:text-[#202124] focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">Sign in</a>
          <a href={businessSignupUrl("standard")} onClick={() => trackCTAClick('homepage_header', 'mail_first', 'homepage_mail_first')} className="inline-flex h-11 items-center justify-center rounded-lg bg-orange-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2">Create your account</a>
        </div>

        <a href={businessSignupUrl("standard")} onClick={() => trackCTAClick('homepage_mobile_header', 'mail_first', 'homepage_mail_first')} className="inline-flex h-11 items-center justify-center rounded-lg bg-orange-700 px-3 text-sm font-semibold text-white transition-colors hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2 sm:hidden">Sign up</a>

        <details ref={mobileMenuRef} className="relative lg:hidden">
          <summary className="flex h-11 cursor-pointer list-none items-center rounded-lg border border-[#dadce0] px-3 text-sm font-medium text-[#202124] focus:outline-none focus:ring-2 focus:ring-orange-700">Menu</summary>
          <div className="absolute right-0 mt-2 w-64 border border-[#dadce0] bg-white p-2">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => closeDetailsMenu(mobileMenuRef.current)} className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa] hover:text-[#202124] focus:outline-none focus:ring-2 focus:ring-orange-700">{label}</a>)}
            <a href="https://m.venmail.io/login" onClick={() => closeDetailsMenu(mobileMenuRef.current)} className="mt-2 flex min-h-11 items-center border-t border-[#dadce0] px-3 pt-2 text-sm font-medium text-[#5f6368]">Sign in</a>
          </div>
        </details>
      </nav>
    </header>
  );
}
