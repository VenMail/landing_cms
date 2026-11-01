import "@/styles/globals.css";
import MainLayout from "@/components/layout/MainLayout";
import Script from "next/script";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import { ABTestProvider } from "@/contexts/ABTestContext";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { landingLanguage, registrationHref } from '@/config/landing-language.mjs';
import SeoDefaults from '@/components/SeoDefaults';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    try {
      const language = landingLanguage(router.asPath);
      if (language) sessionStorage.setItem('venmail_landing_language', language);
    } catch {}
    const onClick = (event) => {
      const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!link) return;
      try {
        const language = sessionStorage.getItem('venmail_landing_language');
        if (language) link.href = registrationHref(link.href, language);
      } catch {}
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [router.asPath]);
  return (
    <CurrencyProvider>
      <ABTestProvider>
        <SeoDefaults />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-18DJTP5FYM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-18DJTP5FYM');
          `}
        </Script>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ABTestProvider>
    </CurrencyProvider>
  );
}
