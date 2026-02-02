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
                  AI-powered email, campaigns, meetings and documents
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
                <span className="font-semibold text-gray-900">Join <span className="text-2xl font-bold text-green-600">5,500+</span> who've discovered Venmail</span>
              </div>
              <div className="hidden md:flex items-center gap-4 ml-2 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>5.3M emails sent</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>$50K+ USD saved</span>
                </div>
              </div>
            </div>
            <p className="text-lg font-medium text-gray-700 mb-6">Which are you?</p>
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
                <p className="text-sm text-gray-600">Simple smart personal email with booking link, drive and meetings</p>
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
                <p className="text-sm text-gray-600">Collaborative inbox, campaigns, CRM integrations and more</p>
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
                <p className="text-sm text-gray-600">Program the entire email experience whether receiving or sending</p>
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
              <a href="https://apps.apple.com/us/app/venmail/id6755040289" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">App Store</a>
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
      <BusinessesSection />
      <DevelopersSection />
      <MobileAppsSection />

      {/* See it in Action */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Better now than later</h2>
          <p className="text-gray-600">Simple modern features to transform and amplify your email powers.</p>
        </div>
        <TabComponent />
      </section>

      {/* Pricing Comparison */}
      <CostComparisonSlider hasButton={true} />

      {/* Footer CTA */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to give yourself a treat?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <a
              href="https://m.venmail.io/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-black hover:bg-gray-800 transition-colors"
            >
              Yes!
            </a>
            <a
              href="/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-800 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              More coffee please
            </a>
          </div>
          <p className="text-center text-sm text-gray-600 mb-4">⚡ Join 5,500+ users who've already made the switch</p>
          <a
            href="#see-it-in-action"
            className="inline-flex items-center text-base font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            It takes less than 2 minutes to sign up
          </a>
        </div>
      </section>
    </DefaultLayout>
  );
};
