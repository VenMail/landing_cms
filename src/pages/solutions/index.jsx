import React from "react";
import CustomLayout from "@/components/layout/CustomLayout";
import Testimonial from "@/components/PageSections/Testimonial";
import { LuUserPlus, LuUsers, LuMail, LuTarget } from "react-icons/lu";

export default function Solutions() {
  const solutions = [
    {
      href: "/solutions/founders",
      icon: <LuUserPlus className="w-8 h-8" />,
      title: "Founders & Startups",
      description: "Close your first 100 customers without a sales team. AI-powered outreach, prospect discovery, and campaign automation.",
      color: "primary"
    },
    {
      href: "/solutions/agency",
      icon: <LuUsers className="w-8 h-8" />,
      title: "Agencies & Consultancies",
      description: "Scale client campaigns without scaling costs. Multi-client management, white-label options, and flat pricing.",
      color: "blue"
    },
    {
      href: "/solutions/freelancers",
      icon: <LuMail className="w-8 h-8" />,
      title: "Freelancers & Solopreneurs",
      description: "Professional tools at freelancer-friendly prices. Custom domain email, scheduling, and productivity suite.",
      color: "emerald"
    },
    {
      href: "/solutions/marketing",
      icon: <LuTarget className="w-8 h-8" />,
      title: "Marketing Teams",
      description: "AI-powered campaign management. Email marketing, lead generation, and analytics in one platform.",
      color: "violet"
    }
  ];

  const colorClasses = {
    primary: {
      bg: "bg-primary-50",
      icon: "text-primary-600",
      hover: "hover:border-primary-300",
      titleHover: "group-hover:text-primary-600"
    },
    blue: {
      bg: "bg-blue-50",
      icon: "text-blue-600",
      hover: "hover:border-blue-300",
      titleHover: "group-hover:text-blue-600"
    },
    emerald: {
      bg: "bg-emerald-50",
      icon: "text-emerald-600",
      hover: "hover:border-emerald-300",
      titleHover: "group-hover:text-emerald-600"
    },
    violet: {
      bg: "bg-violet-50",
      icon: "text-violet-600",
      hover: "hover:border-violet-300",
      titleHover: "group-hover:text-violet-600"
    }
  };

  return (
    <CustomLayout logoVariant="dark" hideFooterJumbo={true}>
      {/* Hero */}
      <section className="bg-gray-900">
        <div className="max-w-screen-xl px-4 py-20 mx-auto md:py-28">
          <div className="text-center">
            <p className="text-primary-400 font-medium mb-4">Solutions</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Built for Every Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Whether you're a founder, agency, freelancer, or marketing team — 
              VenMail adapts to your workflow and helps you achieve your goals faster.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <a 
                key={idx} 
                href={solution.href}
                className="group block"
              >
                <div className={`p-8 rounded-xl border border-gray-200 ${colorClasses[solution.color].hover} transition-all hover:shadow-lg h-full`}>
                  <div className={`w-16 h-16 ${colorClasses[solution.color].bg} rounded-xl flex items-center justify-center ${colorClasses[solution.color].icon} mb-6`}>
                    {solution.icon}
                  </div>
                  <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${colorClasses[solution.color].titleHover} transition-colors`}>
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="mt-6 flex items-center text-primary-600 font-medium">
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Features That Power Every Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All solutions include our core platform features, tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered</h3>
              <p className="text-gray-600 text-sm">Smart assistance for writing, scheduling, and campaigns</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600 text-sm">BYOS, GDPR compliance, and data sovereignty</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Unlimited Team</h3>
              <p className="text-gray-600 text-sm">No per-seat pricing. Add unlimited team members.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Open Source</h3>
              <p className="text-gray-600 text-sm">Productivity suite is open source with self-hosting option</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Find Your Perfect Solution
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Start with our free plan. No credit card required.
          </p>
          <a
            href="https://m.venmail.io/register"
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors rounded-lg"
          >
            Get Started Free
          </a>
        </div>
      </section>

      <Testimonial />
    </CustomLayout>
  );
}
