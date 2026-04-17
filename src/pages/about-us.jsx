import { useState, useRef } from "react";
import CustomLayout from "@/components/layout/CustomLayout";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("rewrite");
  const buttonRefs = useRef({});

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    buttonRefs.current[tabName]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <CustomLayout logoVariant="light" headerColor="#16292F" textColor="white">
      {/* Hero Section */}
      <section className="bg-[#16292F]">
        <div className="grid max-w-screen-xl px-4 mx-auto md:gap-8 xl:gap-0 py-16 md:grid-cols-12">
          <div className="mr-auto place-self-center md:col-span-12 text-center md:text-start">
            <p className="uppercase text-white mb-3">about</p>
            <h1 className="max-w-4xl mb-4 text-4xl md:text-6xl font-medium tracking-tight md:leading-[96px] text-white">
              Professional Email for Every Organization
            </h1>
            <p className="max-w-2xl mb-8 text-xl text-gray-300">
              Email infrastructure that gives you control
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/careers"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                Explore Careers
              </a>
              <a
                href="https://m.venmail.io/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-black hover:bg-gray-800 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="mt-8 lg:col-span-12 lg:flex">
            <img src="/about-bg.png" alt="VenMail Dashboard" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-20 px-4 mx-auto max-w-screen-xl md:py-44 md:px-6">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="uppercase text-sm text-black mb-5">our mission</p>
            <h2 className="text-xl font-semibold md:text-5xl text-black md:leading-[56px] mb-6">
              Professional email for every organization.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're replacing per-seat pricing with storage-based costs. Every organization deserves enterprise-grade email at predictable costs.
            </p>
            <p className="text-lg text-gray-600">
              Our mission: email infrastructure that respects budgets, privacy, and control.
            </p>
          </div>
          <div className="lg:mt-0 md:col-span-5 flex justify-end">
            <img src="/about/mission.svg" alt="Our Mission" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-20 px-4 mx-auto max-w-screen-xl md:py-44 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase text-sm text-black mb-5">the problem</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Email Infrastructure Costs
            </h2>
            <p className="text-xl text-gray-600">
              Professional email costs should be predictable.
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">A Common Challenge</h3>
              <p className="italic text-gray-700 mb-3 text-lg">
                "I only create email accounts for the operations team"
              </p>
              <p className="text-sm text-gray-600 mb-4">— Sandra Okonkwo, Operations Director, SheCodes</p>
              <p className="text-gray-700">
                When email costs are unpredictable, companies limit access. Important conversations become fragmented or lost. This impacts business communication and efficiency.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-20 px-4 mx-auto max-w-screen-xl md:py-44 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase text-sm text-black mb-5">our solution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Control and Compliance First
            </h2>
            <p className="text-xl text-gray-600">
              Three principles that guide everything we build
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Your Data, Your Infrastructure</h3>
              <p className="text-gray-600">Your email lives where you choose - AWS S3, Google Cloud, or your own server. No vendor lock-in. Full data portability.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Pay for Storage, Not Users</h3>
              <p className="text-gray-600">Teams pay based on storage usage, not headcount. Predictable pricing that scales with usage.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Business-Critical Features</h3>
              <p className="text-gray-600">Follow-ups, tracking, campaigns, document handling. Essential tools for business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-primary-50 py-20 px-4 mx-auto max-w-screen-xl md:py-44 md:px-6">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="uppercase text-sm text-black mb-5">our vision</p>
            <h2 className="text-xl font-semibold md:text-5xl text-black md:leading-[56px] mb-6">
              Beyond Email Infrastructure
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're building infrastructure that respects budgets and control. Organizations need cohesive, privacy-respecting infrastructure.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Infrastructure should serve business needs, provide control, and remain accessible.
            </p>
            <p className="text-lg text-gray-600">
              We're building email infrastructure that scales with your business.
            </p>
          </div>
          <div className="lg:mt-0 md:col-span-5 flex justify-end">
            <img src="/about/story.svg" alt="Our Vision" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-white py-20 px-4 mx-auto max-w-screen-xl md:py-44 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Started</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Email infrastructure that respects budgets and control. Whether you're a customer, contributor, or team member.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://m.venmail.io/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-black hover:bg-gray-800 transition-colors"
            >
              Try VenMail
            </a>
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-800 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Explore Careers
            </a>
            <a
              href="mailto:hello@venmail.io"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-800 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Share Your Thoughts
            </a>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
