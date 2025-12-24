import { useState, useRef, useEffect } from "react";
import { RxEnvelopeClosed } from "react-icons/rx";
import { GoCalendar } from "react-icons/go";
import { GoDeviceCameraVideo } from "react-icons/go";
import { LuUserPlus } from "react-icons/lu";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Testimonial from "@/components/PageSections/Testimonial";
import CostComparisonSlider from "@/components/PageSections/CostComparisonSlider";
import VideoPlayer from "@/components/PageSections/VideoPlayer";
import MessagingCarousel from "@/components/MessagingCarousel";
import ExitIntentPopup from "@/components/ExitIntentPopup";
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
    <section className="bg-white py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
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
          <p className="mt-4 text-xl text-gray-600">
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
          
          {/* BYOS */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Bring Your Own Storage</h3>
            <p className="text-gray-600">
              Keep your data under your control with BYOS support for compliance and flexibility.
            </p>
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
      <ExitIntentPopup />
      {/* Hero Section */}
      <ChristmasSparkleWrapper className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 text-center md:text-left">
              <MessagingCarousel />
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
                Don't let price constrain you. <br className="hidden md:block" />
                Supercharge your growith with Mail + Calendly + Mailchimp + Auto Follow-ups in one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://m.venmail.io/register"
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-center text-white bg-black focus:ring-4 focus:ring-primary-300"
                >
                  Get Started Free
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  See How It Works
                </a>
              </div>
            </div>
            <div className="md:col-span-5 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-100 rounded-2xl transform rotate-1"></div>
                <img
                  src="/home/section-1.png"
                  alt="VenMail Dashboard"
                  className="relative rounded-xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </ChristmasSparkleWrapper>
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cut Costs by 90% Without Sacrificing Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your SME needs: premium email, smart scheduling, lead generation, and automation - all in one affordable platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#F9F1EF] rounded-full flex items-center justify-center mx-auto mb-6">
                <RxEnvelopeClosed className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Email Suite</h3>
              <p className="text-gray-600">Enterprise-grade email with AI assistance, delivery tracking and powerful spam protection.</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI email summaries & rewrites
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced spam protection
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom domain & branding
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#F9F1EF] rounded-full flex items-center justify-center mx-auto mb-6">
                <GoCalendar className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Built-in Calendly Alternative</h3>
              <p className="text-gray-600">Professional booking pages and easy calendar management.</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Branded booking pages
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-calendar sync
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automated reminders
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#F9F1EF] rounded-full flex items-center justify-center mx-auto mb-6">
                <GoDeviceCameraVideo className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Marketing Suite</h3>
              <p className="text-gray-600">Replace Mailchimp with built-in campaigns, automation, and advanced analytics.</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quick campaign creation with AI
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automated sequences
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Delivery analytics
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuUserPlus className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Lead Gen</h3>
              <p className="text-gray-600">AI-powered prospecting and contact enrichment at a fraction of the cost.</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI prospect generation
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Contact enrichment
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Email verification
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a
              href="https://m.venmail.io/register"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              Get Started Free
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-transparent py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-transparent">
            <VideoPlayer />
          </div>
        </div>
      </section>
      {/*Add video player here */}
      {/* <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Save $500+/month on <span className="text-primary-600">communication tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why pay for Gmail Workspace + Calendly + Apollo + Mailchimp separately when you can get everything in one premium platform?
            </p>
          </div>
        </div>
      </section> */}

      

      {/* Workflow Section */}
      <WorkflowSection />

      {/* Unified Platform Showcase */}
      <section className="bg-white py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
             
      {/* Key Differentiators Section */}
      <KeyDifferentiators />


      </section>

      <TabComponent />
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
      
    </DefaultLayout>
  );
};
