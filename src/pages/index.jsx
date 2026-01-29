import { useState, useRef, useEffect } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import CostComparisonSlider from "@/components/PageSections/CostComparisonSlider";
import IndividualUsersSection from "@/components/PageSections/IndividualUsersSection";
import BusinessesSection from "@/components/PageSections/BusinessesSection";
import DevelopersSection from "@/components/PageSections/DevelopersSection";
import MobileAppsSection from "@/components/PageSections/MobileAppsSection";
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
    summary: {
      title: "Instant Email Summary",
      description: "Get the gist of long emails in seconds with AI summaries.",
      image: "/home/section-4d.png",
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
                  <img
                    src={tabContent[activeTab].image}
                    alt={`${activeTab} Dashboard`}
                    className="rounded-lg w-full h-auto transition-all duration-300"
                  />
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
              <img
                src={tabContent[activeTab].image}
                alt={`${tabContent[activeTab].title} Dashboard`}
                className="rounded-lg shadow-sm w-full h-auto transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <DefaultLayout>
      {/* Hero: Clear Value Proposition */}
      <ChristmasSparkleWrapper className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Email that works for you
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              AI-powered email, campaigns, and productivity — all in one place. Not stitches, use like a champ.
            </p>
            <p className="text-lg font-medium text-gray-700 mb-6">Who are you?</p>
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <a
                href="#for-me"
                className="group p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all text-center"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">For Me</h3>
                <p className="text-sm text-gray-600">Personal email with AI superpowers</p>
              </a>
              <a
                href="#for-business"
                className="group p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">For Business</h3>
                <p className="text-sm text-gray-600">Team email, campaigns & contacts</p>
              </a>
              <a
                href="#for-developers"
                className="group p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-center"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">For Developers</h3>
                <p className="text-sm text-gray-600">Email API & webhooks</p>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://m.venmail.io/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-primary-300"
              >
                Get Started Free
              </a>
              <a
                href="#see-it-in-action"
                className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                See How Venmail Helps you win
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 justify-center text-sm text-gray-500">
              <span>Also on</span>
              <a href="https://apps.apple.com/us/search?term=venmail" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">App Store</a>
              <span aria-hidden>·</span>
              <a href="https://play.google.com/store/apps/details?id=io.venmail.app" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Google Play</a>
            </div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-primary-100 rounded-2xl transform rotate-1 cinematic-glow" />
            <div className="relative cinematic-vignette rounded-xl">
              <img
                src="/stock-images/business-team-collaboration.jpg"
                alt="Professional business team collaborating in modern office"
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </ChristmasSparkleWrapper>

      <IndividualUsersSection />
      <BusinessesSection />
      <DevelopersSection />
      <MobileAppsSection />

      {/* See it in Action */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">See it in action</h2>
          <p className="text-gray-600">AI rewrite, prospects, scheduling, summaries, and more — from one inbox.</p>
        </div>
        <TabComponent />
      </section>

      {/* Pricing Comparison */}
      <CostComparisonSlider hasButton={true} />

      {/* Footer CTA */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Still not sure? Start free and see for yourself
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <a
              href="https://m.venmail.io/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-black hover:bg-gray-800 transition-colors"
            >
              For Personal Use
            </a>
            <a
              href="https://m.venmail.io/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-800 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              For Business
            </a>
          </div>
          <a
            href="#see-it-in-action"
            className="inline-flex items-center text-base font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            See How Venmail Helps you win
          </a>
        </div>
      </section>
    </DefaultLayout>
  );
};
