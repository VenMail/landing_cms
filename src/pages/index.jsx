import { useState, useRef, useEffect } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import CostComparisonSlider from "@/components/PageSections/CostComparisonSlider";
import IndividualUsersSection from "@/components/PageSections/IndividualUsersSection";
import BusinessesSection from "@/components/PageSections/BusinessesSection";
import DevelopersSection from "@/components/PageSections/DevelopersSection";
import MobileAppsSection from "@/components/PageSections/MobileAppsSection";
import AIWorkflowShowcase from "@/components/PageSections/AIWorkflowShowcase";
import ProductShowcase from "@/components/PageSections/ProductShowcase";
import BatteriesSection from "@/components/PageSections/BatteriesSection";
import CountUpStats from "@/components/PageSections/CountUpStats";
import CinematicHowItWorks from "@/components/PageSections/CinematicHowItWorks";
import { ChristmasSparkleWrapper } from "@/utils/christmasSparkle";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("rewrite");
  const buttonRefs = useRef({});
  const [loadingProgress, setLoadingProgress] = useState(0); // For the loading bar
  const intervalRef = useRef(null);
  

  const tabContent = {
    rewrite: {
      title: "AI Rewrite",
      description: "Write better emails, faster, with AI-powered rewrites.",
      image: "/home/section-4a.png",
    },
    prospects: {
      title: "Generate Prospects",
      description: "Find and connect with the right leads instantly.",
      image: "/home/section-4b.png",
    },
    schedule_meetings: {
      title: "Schedule Meetings",
      description: "Book meetings effortlessly, straight from your inbox.",
      image: "/home/section-4c.png",
    },
    // summary: {
    //   title: "Instant Email Summary",
    //   description: "Get the gist of long emails in seconds with AI summaries.",
    //   image: "/home/section-4d.png",
    // },
    document_intelligence: {
      title: "Document Intelligence",
      description: "AI reads and understands PDFs, Word docs, and spreadsheets automatically.",
      image: "/home/section-document-intelligence.svg",
    },
    sdr_ai: {
      title: "AI Sales Agent", 
      description: "AI discovers prospects, analyzes companies, and automates outreach at scale.",
      image: "/home/section-sdr-ai.svg",
    },
    payment_automation: {
      title: "Payment Automation",
      description: "Automatic payment processing, receipt generation, and webhook integration.",
      image: "/home/section-payment-automation.svg",
    },
    // analytics: {
    //   title: "Sent Mail Analytics",
    //   description: "Track delivery rates, open rates, and email performance with detailed sent mail analytics.",
    //   image: "/sent-panel.png",
    // },
    spam: {
      title: "Spam Detection",
      description: "Eliminate spam and phishing with advanced AI filters.",
      image: "/home/section-4f.png",
    },
  };

  const tabs = Object.keys(tabContent);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    resetLoading();
    buttonRefs.current[tabName]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const resetLoading = () => {
    clearInterval(intervalRef.current);
    setLoadingProgress(0);
    startAutoLoading();
  };

  const startAutoLoading = () => {
    intervalRef.current = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          const currentIndex = tabs.indexOf(activeTab);
          const nextIndex = (currentIndex + 1) % tabs.length;
          setActiveTab(tabs[nextIndex]);
          return 0;
        }
        return prev + 1;
      });
    }, 50); // Adjust speed of loading here
  };

  useEffect(() => {
    startAutoLoading();
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [activeTab]);

  return (
    <section id="see-it-in-action" className="bg-white py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="md:col-span-3 flex flex-col md:justify-between">
          <div className="overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar">
            <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 min-w-max lg:min-w-0">
              {Object.entries(tabContent).map(([key, _]) => (
                <div key={key} className="flex flex-col w-full">
                  <button
                    ref={(el) => (buttonRefs.current[key] = el)}
                    className={`whitespace-nowrap text-sm text-left py-4 ${
                      activeTab === key
                        ? " text-primary-600"
                        : "border-transparent text-gray-500"
                    } text-xl font-medium transition-colors`}
                    onClick={() => handleTabClick(key)}
                  >
                    {_.title}
                  </button>
                  {/* Loading bar */}
                  <div className="h-[1px] md:block hidden w-full bg-gray-200">
                    <div
                      className="h-[1px] bg-orange-500 transition-all duration-100"
                      style={{
                        width:
                          activeTab === key ? `${loadingProgress}%` : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden block mt-6 lg:mt-0">
            <div className="cinematic-frame bg-white p-6 sm:p-8 rounded-lg border border-gray-100 shadow-sm">
              <div className="cinematic-vignette rounded-lg overflow-hidden">
                {tabContent[activeTab].content || (
                  tabContent[activeTab].image.endsWith('.svg') ? (
                    <div className="flex items-center justify-center p-0">
                      <img
                        src={tabContent[activeTab].image}
                        alt={`${activeTab} Feature`}
                        className="rounded-lg w-full h-auto transition-all duration-300"
                      />
                    </div>
                  ) : (
                    <img
                      src={tabContent[activeTab].image}
                      alt={`${activeTab} Dashboard`}
                      className="rounded-lg w-full h-auto transition-all duration-300"
                    />
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-600  mb-3 text-lg">
              {tabContent[activeTab].description}
            </p>
            <a
            target="_blank"
              href="https://m.venmail.io/register"
              className="block md:inline-flex cursor-pointer items-center justify-center px-4 py-2 text-base font-medium text-center text-white bg-black focus:ring-4 focus:ring-primary-300"
            >
              Signup for Free
            </a>
          </div>
        </div>
        <div className="hidden md:block col-span-9">
          <div className="cinematic-frame bg-[#f9f1ef] p-6 sm:p-8 md:p-10 rounded-lg">
            <div className="cinematic-vignette rounded-lg overflow-hidden">
              {tabContent[activeTab].content || (
                tabContent[activeTab].image.endsWith('.svg') ? (
                  <div className="flex items-center justify-center p-0">
                    <img
                      src={tabContent[activeTab].image}
                      alt={`${activeTab} Feature`}
                      className="rounded-lg w-full h-auto transition-all duration-300"
                    />
                  </div>
                ) : (
                  <img
                    src={tabContent[activeTab].image}
                    alt={`${activeTab} Dashboard`}
                    className="rounded-lg w-full h-auto transition-all duration-300"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HERO_HEADLINES = [
  "Email is Infrastructure",
  "Context is King",
  "Compliance is Safety",
];

const TypewriterHeroHeadline = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [typedChars, setTypedChars] = useState(0);

  const currentLine = HERO_HEADLINES[lineIndex];
  const fullText = currentLine;

  useEffect(() => {
    if (typedChars < fullText.length) {
      const typingTimer = setTimeout(() => {
        setTypedChars((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(typingTimer);
    }

    const holdTimer = setTimeout(() => {
      setLineIndex((prev) => (prev + 1) % HERO_HEADLINES.length);
      setTypedChars(0);
    }, 2200);

    return () => clearTimeout(holdTimer);
  }, [typedChars, fullText.length]);

  const typedText = fullText.slice(0, typedChars);

  return (
    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 min-h-[7rem] md:min-h-[10rem]">
      <span className="block">
        {typedText}
        <span className="ml-1 inline-block h-[1em] w-[2px] bg-gray-400 align-middle animate-pulse" />
      </span>
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
        Own Yours
      </span>
    </h1>
  );
};

export default function Home() {
  return (
    <DefaultLayout>
      {/* Hero: Clear Value Proposition */}
      <ChristmasSparkleWrapper className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full mb-6 text-sm font-medium text-gray-600">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Own your business data
            </div>
            <TypewriterHeroHeadline />
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Bring your own storage. No per-seat fees. Full data sovereignty.
                </p>
            <div className="relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full shadow-sm mb-8">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">JD</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SK</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AM</span>
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-gray-600 text-xs font-bold">+5k</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900">Join <span className="text-xl font-bold text-green-600">7,100+</span> who've discovered Venmail</span>
              </div>
              <div className="hidden md:flex items-center gap-4 ml-2 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>5.6M emails processed</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>$50K+ saved</span>
                </div>
                              </div>
            </div>
            
            {/* Audience Segments */}
            <p className="text-lg font-medium text-gray-700 mb-6">Built for organisations that value sovereignty</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-4xl mx-auto mb-8">
              <a
                href="#for-business"
                className="group p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all text-center"
              >
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-orange-200">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Businesses</h3>
                <p className="text-xs text-gray-500">Own your data, cut costs</p>
              </a>
              <a
                href="#for-business"
                className="group p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all text-center"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-200">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Hosting Cos</h3>
                <p className="text-xs text-gray-500">White-label &amp; resell</p>
              </a>
              <a
                href="#for-business"
                className="group p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-amber-500 hover:bg-amber-50 transition-all text-center"
              >
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-amber-200">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Schools</h3>
                <p className="text-xs text-gray-500">Sovereign student data</p>
              </a>
              <a
                href="#for-business"
                className="group p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all text-center"
              >
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-indigo-200">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Legal</h3>
                <p className="text-xs text-gray-500">Privileged comms, your servers</p>
              </a>
              <a
                href="#for-business"
                className="group p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-center"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-green-200">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10h.01M12 10h.01M15 10h.01" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Governments</h3>
                <p className="text-xs text-gray-500">In-country, sovereign</p>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://m.venmail.io/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-primary-300"
              >
                Sign Up Today
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 justify-center text-sm text-gray-500">
              <span>Also on</span>
              <a
                href="https://apps.apple.com/us/app/venmail/id6755040289"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white shadow-sm hover:shadow-md transition border border-gray-200 overflow-hidden"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                  loading="lazy"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=io.venmail.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white shadow-sm hover:shadow-md transition border border-gray-200 overflow-hidden"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-10 w-auto"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-primary-100 rounded-2xl transform rotate-1 cinematic-glow" />
            <div className="relative cinematic-vignette rounded-xl">
              <img
                src="/screenshot-full.webp"
                alt="Venmail inbox interface with AI-powered email management"
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </ChristmasSparkleWrapper>
      
      {/* Product Showcase — dark infrastructure cards */}
      <ProductShowcase />

      {/* Batteries — hub-and-spoke animation showing built-in tools */}
      <BatteriesSection />

      {/* CountUp Stats Section */}
      <CountUpStats />
      
      <BusinessesSection />
      <CinematicHowItWorks />
      <DevelopersSection />
      <MobileAppsSection />
      <AIWorkflowShowcase />

      {/* Pricing Comparison */}
      <CostComparisonSlider hasButton={true} />

      {/* Footer CTA */}
      <section className="bg-gray-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 text-sm font-medium text-white/70">
            Free base tier · No per-seat fees · BYOS storage
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Stop renting your email infrastructure.
          </h2>
          <a
            href="#for-business"
            className="inline-flex items-center text-base md:text-lg font-medium text-white/90 hover:text-white transition-colors mb-6"
          >
            See how your business runs better
          </a>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Deploy Venmail on your own storage. Your data never leaves your control. No per-seat tax as you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="https://m.venmail.io/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-white hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </a>
            <a
              href="/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/30 hover:bg-white/10 transition-colors"
            >
              View Pricing
            </a>
          </div>
          <p className="text-sm text-white/50">Join 7,100+ users already using Venmail</p>
        </div>
      </section>
    </DefaultLayout>
  );
};
