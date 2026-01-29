import React from "react";
import CustomLayout from "@/components/layout/CustomLayout";
import Testimonial from "@/components/PageSections/Testimonial";
import { BsCheck2 } from "react-icons/bs";
import { LuMail, LuCalendar, LuFileText, LuClock } from "react-icons/lu";

export default function Freelancers() {
  const capabilities = [
    {
      icon: <LuMail className="w-6 h-6" />,
      title: "Professional Email",
      description: "Custom domain email that builds credibility with clients and prospects.",
    },
    {
      icon: <LuCalendar className="w-6 h-6" />,
      title: "Booking Pages",
      description: "Let clients schedule calls directly. No more back-and-forth emails.",
    },
    {
      icon: <LuFileText className="w-6 h-6" />,
      title: "Docs & Templates",
      description: "Create proposals, contracts, and invoices with built-in productivity tools.",
    },
    {
      icon: <LuClock className="w-6 h-6" />,
      title: "AI Assistance",
      description: "Write better emails faster with AI rewrites and smart summaries.",
    },
  ];

  const benefits = [
    "Custom domain email included",
    "Built-in scheduling pages",
    "AI email rewrites and summaries",
    "Docs, Sheets, Forms included",
    "Campaign tools for outreach",
    "Free plan available",
  ];

  return (
    <CustomLayout logoVariant="dark" headerColor="#047857" textColor={"white"} hideFooterJumbo={true}>
      {/* Hero */}
      <section className="bg-emerald-700">
        <div className="max-w-screen-xl px-4 py-20 mx-auto md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 text-center md:text-left">
              <p className="text-emerald-200 font-medium mb-4">For Freelancers & Solopreneurs</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                For Freelancers: Professional Tools, Real Prices
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Custom email, scheduling, campaigns, productivity suite—sewn together for how you work. 
                Start free. Upgrade when it makes sense.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://m.venmail.io/register"
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-emerald-700 bg-white hover:bg-emerald-50 transition-colors"
                >
                  Start Free
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-emerald-400 hover:bg-emerald-600 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <img src="/solutions/freelancers/section-1.png" alt="Freelancer Dashboard" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything to Look Professional
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Run your freelance business with tools cut to your budget, not enterprise bloat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((item, idx) => (
              <div key={idx} className="p-6 border border-gray-200 rounded-xl hover:border-emerald-300 transition-colors">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6">
              <p className="text-emerald-600 font-medium mb-3">Your Professional Toolkit</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Impress Clients, Save Time
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                VenMail gives you the tools to present professionally, 
                automate repetitive tasks, and focus on billable work.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <BsCheck2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <a
                href="https://m.venmail.io/register"
                target="_blank"
                className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
              >
                Get started free →
              </a>
            </div>
            <div className="md:col-span-6">
              <img src="/partner/partner-1.png" alt="Freelancer Features" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <img src="/partner/partner-2.png" alt="Freelancer Pricing" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:col-span-6 order-1 md:order-2">
              <p className="text-emerald-600 font-medium mb-3">Affordable Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why This Works for Freelancers
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our free plan includes everything you need to get started. 
                Upgrade for more storage and advanced features.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <span className="text-gray-900 font-medium">Free Plan</span>
                  <span className="text-emerald-600 font-bold">$0/mo</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Pro Plan</span>
                  <span className="text-gray-900 font-medium">From $7/mo</span>
                </div>
              </div>
              <a href="/pricing" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700">
                Compare all plans →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-700 py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Try It?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Free plan. No credit card. Just see if it fits.
          </p>
          <a
            href="https://m.venmail.io/register"
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-emerald-700 bg-white hover:bg-emerald-50 transition-colors rounded-lg"
          >
            Get Started Free
          </a>
        </div>
      </section>

      <Testimonial />
    </CustomLayout>
  );
}
