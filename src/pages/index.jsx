import { useState, useRef, useEffect } from "react";
import { RxEnvelopeClosed } from "react-icons/rx";
import { GoCalendar } from "react-icons/go";
import { GoDeviceCameraVideo } from "react-icons/go";
import { LuUserPlus, LuUsers, LuMail, LuTarget } from "react-icons/lu";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Testimonial from "@/components/PageSections/Testimonial";
import CostComparisonSlider from "@/components/PageSections/CostComparisonSlider";
import VideoPlayer from "@/components/PageSections/VideoPlayer";
import MessagingCarousel from "@/components/MessagingCarousel";
import ReminderButton from "@/components/ReminderButton";
import IndividualUsersSection from "@/components/PageSections/IndividualUsersSection";
import BusinessesSection from "@/components/PageSections/BusinessesSection";
import DevelopersSection from "@/components/PageSections/DevelopersSection";
import WhyVenmailSection from "@/components/PageSections/WhyVenmailSection";
import MobileAppsSection from "@/components/PageSections/MobileAppsSection";
import { ChristmasSparkleWrapper } from "@/utils/christmasSparkle";
import dynamic from 'next/dynamic';

const WorkflowSection = dynamic(
  () => import('@/components/PageSections/WorkflowSection'),
  { ssr: false }
);

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
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-100 shadow-sm">
              {tabContent[activeTab].content || (
                <img
                  src={tabContent[activeTab].image}
                  alt={`${activeTab} Dashboard`}
                  className="rounded-lg w-full h-auto transition-all duration-300"
                />
              )}
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
          <div className="bg-[#f9f1ef] p-6 sm:p-8 md:p-10 rounded-lg">
            <img
              src={tabContent[activeTab].image}
              alt={`${tabContent[activeTab].title} Dashboard`}
              className="rounded-lg shadow-sm w-full h-auto transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [activeFeatureTab, setActiveFeatureTab] = useState('mail');

  // Add this new component before the main return
  const KeyDifferentiators = () => (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Us</h2>
          <p className="text-xl text-gray-600">
            Built for businesses that value simplicity, flexibility, and growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Unlimited Users */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <LuUserPlus className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Unlimited Team Members</h3>
            <p className="text-gray-600">
              Add as many team members as you need at no extra cost. Scale your business without worrying about per-user fees.
            </p>
          </div>
          
          {/* Lead Generation */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Lead Discovery</h3>
            <p className="text-gray-600">
              Find and connect with high-quality prospects using our advanced discovery tools. Grow your network and business effortlessly.
            </p>
          </div>
          
          {/* Campaign Management */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Powerful Campaign Tools</h3>
            <p className="text-gray-600">
              Create, manage, and track email campaigns with our intuitive tools. Schedule bulk emails and automate follow-ups to maximize engagement.
            </p>
          </div>
          
          {/* Flat Pricing */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Simple, Flat Pricing</h3>
            <p className="text-gray-600">
              Choose the plan that fits your needs with our straightforward pricing. No hidden fees or surprise charges.
            </p>
          </div>
          
          {/* BYOS - Enterprise Feature */}
          <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-indigo-200 relative">
            <span className="absolute -top-2 right-4 bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">Enterprise</span>
            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Bring Your Own Storage</h3>
            <p className="text-gray-600">
              Connect S3, R2, SFTP, or WebDAV. Full data sovereignty with Zstandard compression. GDPR, HIPAA, SOC2 ready.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-gray-500">
              <li className="flex items-center">
                <svg className="h-4 w-4 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                AWS S3 / Cloudflare R2
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                SFTP / WebDAV
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                On-premise deployment
              </li>
            </ul>
          </div>          
          {/* Free Plan */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Free</h3>
            <p className="text-gray-600">
              Try us risk-free with our free plan for up to 10 users with 5GB shared storage. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <DefaultLayout>
      {/* Hero: Who are you? */}
      <ChristmasSparkleWrapper className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 text-center md:text-left">
              <MessagingCarousel />
              <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto md:mx-0">
                One place for email, campaigns, and productivity. No stitching together tools.
              </p>
              <p className="text-sm font-medium text-gray-500 mb-4">Who is this for?</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                <a
                  href="#for-me"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 font-medium hover:border-primary-300 hover:bg-primary-50/50 transition-colors"
                >
                  For me
                </a>
                <a
                  href="#for-business"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 font-medium hover:border-primary-300 hover:bg-primary-50/50 transition-colors"
                >
                  For my business
                </a>
                <a
                  href="#for-developers"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 font-medium hover:border-primary-300 hover:bg-primary-50/50 transition-colors"
                >
                  For my app
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center sm:items-start">
                <a
                  href="https://m.venmail.io/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-primary-300"
                >
                  Get Started Free
                </a>
                <a
                  href="#see-it-in-action"
                  className="inline-flex items-center text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  See How Venmail Helps you win
                </a>
              </div>
              <div className="mt-6 flex items-center gap-3 justify-center md:justify-start text-sm text-gray-500">
                <span>Also on</span>
                <a href="https://apps.apple.com/us/search?term=venmail" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">App Store</a>
                <span aria-hidden>·</span>
                <a href="https://play.google.com/store/apps/details?id=io.venmail.app" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Google Play</a>
              </div>
            </div>
            <div className="md:col-span-5 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-100 rounded-2xl transform rotate-1" />
                <img
                  src="/home/section-1.png"
                  alt="Venmail Dashboard"
                  className="relative rounded-xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </ChristmasSparkleWrapper>

      <IndividualUsersSection />
      <BusinessesSection />
      <DevelopersSection />
      <WhyVenmailSection />
      <MobileAppsSection />

      <section className="bg-transparent py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VideoPlayer />
        </div>
      </section>

      {/* Workflow Section */}
      <WorkflowSection />

      {/* Unified Platform Showcase */}
      <section className="bg-white py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
             
      {/* Key Differentiators Section */}
      <KeyDifferentiators />

      {/* Solutions Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tailored to How You Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Founder, agency, freelancer, or marketing team — we've made everything fit your workflow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a href="/solutions/founders" className="group">
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  <LuUserPlus className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600">Founders</h3>
                <p className="text-gray-600 text-sm">Bespoke tools for closing your first 100 customers</p>
              </div>
            </a>
            <a href="/solutions/agency" className="group">
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <LuUsers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Agencies</h3>
                <p className="text-gray-600 text-sm">Tailored for managing multiple clients seamlessly</p>
              </div>
            </a>
            <a href="/solutions/freelancers" className="group">
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-300 transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                  <LuMail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600">Freelancers</h3>
                <p className="text-gray-600 text-sm">Cut to your budget, sewn for your success</p>
              </div>
            </a>
            <a href="/solutions/marketing" className="group">
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-violet-300 transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-violet-50 rounded-lg flex items-center justify-center text-violet-600 mb-4">
                  <LuTarget className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-violet-600">Marketing Teams</h3>
                <p className="text-gray-600 text-sm">Crafted for campaigns that actually convert</p>
              </div>
            </a>
          </div>
          <div className="text-center mt-12">
            <a href="/solutions" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
              View all solutions →
            </a>
          </div>
        </div>
      </section>

      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">See it in action</h2>
          <p className="text-gray-600">AI rewrite, prospects, scheduling, summaries, and more — from one inbox.</p>
        </div>
        <TabComponent />
      </section>
      <Testimonial />
      {/* Differentiators vs common providers (moved above pricing slider) */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See how VenMail compares to Gmail, Outlook, and Zoho</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">All-in-one email, campaigns, booking, and lead gen — without tool sprawl.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">All-in-One, Streamlined</h3>
              <p className="text-gray-600">Replace 3+ tools (Mail + Calendly + Mailchimp) with one integrated worksuite and one bill.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Built for SMEs</h3>
              <p className="text-gray-600">Simple setup, unified analytics, and pricing that cuts costs by 60–90% vs stitching big-brand suites.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Powered Workflow</h3>
              <p className="text-gray-600">From rewriting and summarizing emails to generating campaigns and prospects—AI embedded end‑to‑end.</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/compare/gmail" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-sm font-medium text-gray-800 bg-white hover:bg-gray-50">VenMail vs Gmail</a>
            <a href="/compare/outlook" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-sm font-medium text-gray-800 bg-white hover:bg-gray-50">VenMail vs Outlook</a>
            <a href="/compare/zoho" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-sm font-medium text-gray-800 bg-white hover:bg-gray-50">VenMail vs Zoho</a>
            <a href="/compare/webmail" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-sm font-medium text-gray-800 bg-white hover:bg-gray-50">VenMail vs Webmail</a>
          </div>
        </div>
      </section>
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

      <ReminderButton />
    </DefaultLayout>
  );
};
