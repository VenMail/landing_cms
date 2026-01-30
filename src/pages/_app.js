import "@/styles/globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { CurrencyProvider } from "@/contexts/CurrencyContext";

export default function App({ Component, pageProps }) {
  return (
    <CurrencyProvider>
      <SpeedInsights />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <Analytics />
    </CurrencyProvider>
  );
}
