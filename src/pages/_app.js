import "@/styles/globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import { CurrencyProvider } from "@/contexts/CurrencyContext";

export default function App({ Component, pageProps }) {
  return (
    <CurrencyProvider>
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
      <SpeedInsights />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </CurrencyProvider>
  );
}
