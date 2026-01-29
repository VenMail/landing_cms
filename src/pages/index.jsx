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
      {/* Hero Section */}
      <ChristmasSparkleWrapper className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 text-center md:text-left">
              <MessagingCarousel />
              <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto md:mx-0">
                Email, docs, campaigns — cut to fit your workflow.
                <br className="hidden md:block" />
                No stitching together tools. Everything sewn into one workspace.
              </p>
              <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                <a 
                  href="https://github.com/VenMail/vensuite" 
                  target="_blank"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-900 rounded-full text-white text-sm hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Open Source
                </a>
                <span className="text-sm text-gray-500">Productivity suite on GitHub</span>
              </div>
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

      

      {/* Open Source Productivity Suite Section */}
      <section className="bg-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full mb-6">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-sm font-medium">Open Source</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vensuite: Your Complete Productivity Suite
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Google Docs, Sheets, Forms & Slides alternatives — fully open source. 
              Self-host or use our managed service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Docs */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Docs</h3>
              <p className="text-gray-400 text-sm">
                Rich text editor with real-time collaboration, PDF export, and AI writing assistance.
              </p>
            </div>
            
            {/* Sheets */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Sheets</h3>
              <p className="text-gray-400 text-sm">
                Powerful spreadsheets with formulas, charts, and Excel/CSV import/export.
              </p>
            </div>
            
            {/* Forms */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Forms</h3>
              <p className="text-gray-400 text-sm">
                Build surveys, quizzes, and data collection forms with payment integration.
              </p>
            </div>
            
            {/* Slides */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Slides</h3>
              <p className="text-gray-400 text-sm">
                Create presentations with templates, PPTX import/export, and PDF rendering.
              </p>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/venmail/vensuite"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-white bg-transparent hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
            <a
              href="https://m.venmail.io"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors"
            >
              Try Vensuite Free
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
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
      <ReminderButton />
    </DefaultLayout>
  );
};
