import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import DefaultLayout from "@/components/layout/DefaultLayout";
import ABVariant from "@/components/ABVariant";
import EmailReckoningVideo from "@/components/PageSections/EmailReckoningVideo";
import ProductDemo from "@/components/PageSections/ProductDemo";
import BusinessesSection from "@/components/PageSections/BusinessesSection";
import AgentApiSection from "@/components/PageSections/AgentApiSection";
import BusinessCase from "@/components/PageSections/BusinessCase";
import { trackCTAClick } from "@/utils/trackConversion";
import { useABTest } from "@/contexts/ABTestContext";

const Player = dynamic(
  () => import("@remotion/player").then((mod) => mod.Player),
  { ssr: false }
);

const LazyHeroFlythrough = dynamic(
  () => import("@/remotion/compositions/HeroFlythrough"),
  { ssr: false }
);

// ─── HERO VARIANT A: Vision-Led ───────────────────────────────────────────────
function HeroVisionLed() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isClient, setIsClient] = useState(false);
  const { variant } = useABTest("hero_v1");

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section ref={heroRef} className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
            Professional Email,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              Within Reach
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed">
            Professional email infrastructure with your storage, your domain, your data.
            <br className="hidden md:block" />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://m.venmail.io/register?type=business"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick("hero", variant, "hero_v1")}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              <ABVariant
                testName="hero_cta_v1"
                a={<>Get Started</>}
                b={<>Choose a Business Plan</>}
              />
            </a>
            <a
              href="/why-venmail"
              className="inline-flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Read Our Vision
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Remotion hero flythrough */}
        <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden border border-gray-200">
          {isClient && LazyHeroFlythrough ? (
            <Player
              component={LazyHeroFlythrough}
              durationInFrames={360}
              fps={30}
              compositionWidth={1280}
              compositionHeight={720}
              style={{ width: "100%", aspectRatio: "16/9" }}
              autoPlay
              loop
              showVolumeControls={false}
            />
          ) : (
            <div
              className="w-full bg-gray-100 flex items-center justify-center"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="text-gray-400">Loading...</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── HERO VARIANT B: Problem-Led ──────────────────────────────────────────────
function HeroProblemLed() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isClient, setIsClient] = useState(false);
  const { variant } = useABTest("hero_v1");

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section ref={heroRef} className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
            Email Infrastructure for
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              Modern Teams
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed">
            Scale email without per-user costs. Control your data.
            <br className="hidden md:block" />
            Venmail reimagines professional email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://m.venmail.io/register?type=business"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick("hero", variant, "hero_v1")}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              <ABVariant
                testName="hero_cta_v1"
                a={<>Get Started</>}
                b={<>Choose a Business Plan</>}
              />
            </a>
            <a
              href="#product-demo"
              className="inline-flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              View Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Remotion hero flythrough */}
        <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden border border-gray-200">
          {isClient && LazyHeroFlythrough ? (
            <Player
              component={LazyHeroFlythrough}
              durationInFrames={360}
              fps={30}
              compositionWidth={1280}
              compositionHeight={720}
              style={{ width: "100%", aspectRatio: "16/9" }}
              autoPlay
              loop
              showVolumeControls={false}
            />
          ) : (
            <div
              className="w-full bg-gray-100 flex items-center justify-center"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="text-gray-400">Loading...</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER CTA ───────────────────────────────────────────────────────────────
function FooterCTA() {
  const { variant } = useABTest("footer_cta_v1");

  return (
    <section className="bg-deep-dark py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 text-sm font-medium text-white/50">
          Get started today
        </div>

        <ABVariant
          testName="footer_cta_v1"
          a={
            <>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                Email infrastructure designed for your business.
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
                Professional email on your business domain. Choose a paid plan, or explore a free personal venia.cloud account.
              </p>
            </>
          }
          b={
            <>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                Deploy in minutes. Maintain full control.
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
                Choose a business plan, then configure your domain. Managed plans currently use shared storage. Our team can help you plan the migration.
              </p>
            </>
          }
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://m.venmail.io/register?type=business"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick("footer", variant, "footer_cta_v1")}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </a>
          <a
            href="/why-venmail"
            className="inline-flex items-center gap-2 text-lg font-medium text-white/60 hover:text-white transition-colors"
          >
            Read the Full Story
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── HOMEPAGE ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <DefaultLayout>
      {/* ACT I — THE PROBLEM */}
      {/* Section 1: Hero */}
      <ABVariant
        testName="hero_v1"
        a={<HeroVisionLed />}
        b={<HeroProblemLed />}
      />

      {/* Section 2: The Reckoning */}
      <EmailReckoningVideo />


      {/* ACT III — THE VISION */}
      {/* Section 4: The Reset — See It In Action */}
      <div id="product-demo">
        <ProductDemo />
      </div>

      {/* Section 5: Who This Is For */}
      <BusinessesSection />

      {/* Section 5b: AI agent API — developer / automation pitch */}
      <AgentApiSection />

      {/* ACT IV — THE PROOF */}
      {/* Section 6: The Business Case */}
      <BusinessCase />

      {/* ACT V — THE MOVEMENT */}
      {/* Section 7: Join the Mission */}
      <FooterCTA />
    </DefaultLayout>
  );
}
