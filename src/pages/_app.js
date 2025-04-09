import "@/styles/globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App({ Component, pageProps }) {
  return (
    <SpeedInsights>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SpeedInsights>
  );
}
