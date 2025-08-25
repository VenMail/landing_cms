import { useState, useRef, useEffect } from "react";
import { RxEnvelopeClosed } from "react-icons/rx";
import { GoCalendar } from "react-icons/go";
import { GoDeviceCameraVideo } from "react-icons/go";
import { LuUserPlus } from "react-icons/lu";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Testimonial from "@/components/PageSections/Testimonial";
import { PricingSlider, pricingPlans } from "./pricing";
import VideoPlayer from "@/components/PageSections/VideoPlayer";
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
    analytics: {
      title: "Sent Mail Analytics",
      description: "Track delivery rates, open rates, and email performance with detailed sent mail analytics.",
      image: "/sent-panel.png",
    },
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

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                The Premium Email Worksuite Built for SMEs
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
                Mail + Calendly + Mailchimp in one unified platform. Get enterprise features at SME-friendly pricing.
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
      </section>
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
              <p className="text-gray-600">AI-powered prospecting and contact enrichment at a fraction of Apollo's cost.</p>
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

      {/* Differentiators vs common providers */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See how VenMail compares to Gmail, Outlook, and Zoho</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Purpose-built for SMEs: one platform for email, campaigns, booking, and lead gen—no tool sprawl, no add-ons.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">All-in-One, Not Add-Ons</h3>
              <p className="text-gray-600">Replace 3+ tools (Mail + Calendly + Mailchimp) with one integrated worksuite and one bill.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Built for SMEs</h3>
              <p className="text-gray-600">Simple setup, unified analytics, and pricing that cuts costs by 60–90% vs stitching big-brand suites.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Across the Workflow</h3>
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

      {/* Workflow Section */}
      <WorkflowSection />

      {/* Unified Platform Showcase */}
      <section className="bg-white py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The Complete Communication Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Mail + Calendly + Mailchimp + AWS SES at an unbeatable price in a truly unified experience for SMEs.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
            <button
              className={`px-6 py-3 font-medium text-lg border-b-2 transition-colors ${activeFeatureTab === 'mail' ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveFeatureTab('mail')}
            >
              <div className="flex items-center">
                <RxEnvelopeClosed className="mr-2" />
                Email & Campaigns
              </div>
            </button>
            <button
              className={`px-6 py-3 font-medium text-lg border-b-2 transition-colors ${activeFeatureTab === 'calendar' ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveFeatureTab('calendar')}
            >
              <div className="flex items-center">
                <GoCalendar className="mr-2" />
                Calendar & Scheduling
              </div>
            </button>
            <button
              className={`px-6 py-3 font-medium text-lg border-b-2 transition-colors ${activeFeatureTab === 'contacts' ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveFeatureTab('contacts')}
            >
              <div className="flex items-center">
                <LuUserPlus className="mr-2" />
                Contacts & Prospects
              </div>
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Email & Campaigns */}
            {activeFeatureTab === 'mail' && (
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Email & Campaigns</h3>
                  <p className="text-gray-600 mb-8">
                    Advanced email capabilities with AI-powered features to enhance your communication and marketing efforts.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700">
                          ✓
                        </div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">AI-Powered Summaries</h4>
                        <p className="text-gray-600">Get concise summaries of unread emails to quickly catch up on important messages.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700">
                          ✓
                        </div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Automated Follow-ups</h4>
                        <p className="text-gray-600">Set up smart follow-up sequences that trigger based on recipient behavior.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700">
                          ✓
                        </div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Campaign Designer</h4>
                        <p className="text-gray-600">Create beautiful, responsive email campaigns with our drag-and-drop editor.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700">
                          ✓
                        </div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">AI Newsletter Generation</h4>
                        <p className="text-gray-600">Automatically generate engaging newsletter content with AI assistance.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <img
                      src="/email_dashboard_preview.png"
                      alt="Email Dashboard Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Calendar & Scheduling */}
            {activeFeatureTab === 'calendar' && (
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Smart Scheduling</h3>
                  <p className="text-gray-600 mb-8">
                    Streamline your scheduling process with intelligent calendar management and meeting tools.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700">
                          ✓
                        </div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Personal Booking Page</h4>
                        <p className="text-gray-600">Share your personalized booking link to let others schedule meetings at your convenience.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700">
                          ✓
                        </div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Calendar Sync</h4>
                        <p className="text-gray-600">Seamlessly sync with Google, Outlook, and other calendar providers.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700">
                          ✓
                        </div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Video Conferencing</h4>
                        <p className="text-gray-600">Built-in video calls with screen sharing and recording capabilities.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700">
                          ✓
                        </div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Smart Reminders</h4>
                        <p className="text-gray-600">Automated meeting reminders and follow-ups to reduce no-shows.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <img
                      src="/ai_progress.png"
                      alt="AI Progress Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Contacts & Prospects */}
            {activeFeatureTab === 'contacts' && (
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Lead Management</h3>
                  <p className="text-gray-600 mb-8">
                    Find, track, and convert more leads with our powerful contact management tools.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700">
                          ✓
                        </div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Contact Enrichment</h4>
                        <p className="text-gray-600">Automatically enrich contact details with social profiles and company information.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700">
                          ✓
                        </div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">AI Lead Generation</h4>
                        <p className="text-gray-600">Generate targeted leads by describing your ideal customer profile with AI.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700">
                          ✓
                        </div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Pipeline Automation</h4>
                        <p className="text-gray-600">Automate your sales pipeline with AI-powered introductions and follow-ups.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-700">
                          ✓
                        </div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Email Tracking</h4>
                        <p className="text-gray-600">Get real-time notifications when your emails are opened and links are clicked.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <img
                      src="/discovery_preview.png"
                      alt="Contacts Discovery"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <TabComponent />
      <Testimonial />
      <PricingSlider pricingPlans={pricingPlans} hasButton={true} />
    </DefaultLayout>
  );
}
