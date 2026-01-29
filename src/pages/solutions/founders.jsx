import React from "react";
import CustomLayout from "@/components/layout/CustomLayout";
import Testimonial from "@/components/PageSections/Testimonial";
import { BsCheck2 } from "react-icons/bs";
import { LuUserPlus, LuMail, LuCalendar, LuTarget } from "react-icons/lu";

export default function Founders() {
  const capabilities = [
    {
      icon: <LuMail className="w-6 h-6" />,
      title: "AI-Powered Email",
      description: "Write better emails faster with AI rewrites, summaries, and smart prioritization.",
    },
    {
      icon: <LuTarget className="w-6 h-6" />,
      title: "Lead Discovery",
      description: "Find prospects that match your ideal customer profile from verified business data.",
    },
    {
      icon: <LuCalendar className="w-6 h-6" />,
      title: "Meeting Scheduling",
      description: "Built-in booking pages eliminate the back-and-forth of scheduling calls.",
    },
    {
      icon: <LuUserPlus className="w-6 h-6" />,
      title: "Unlimited Team",
      description: "Add your entire team at no extra cost. No per-seat pricing surprises.",
    },
  ];

  const benefits = [
    "AI rewrites that match your voice",
    "Automated follow-up sequences",
    "Campaign analytics and tracking",
    "Docs, Sheets, Forms included",
    "Custom domain email",
    "Bring Your Own Storage option",
  ];

  return (
    <CustomLayout logoVariant="dark" hideFooterJumbo={true}>
      {/* Hero */}
      <section className="bg-gray-900">
        <div className="max-w-screen-xl px-4 py-20 mx-auto md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 text-center md:text-left">
              <p className="text-primary-400 font-medium mb-4">For Founders & Small Teams</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                For Founders: Your First 100 Customers
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                No sales team? No problem. We've tailored everything you need to find leads, 
                run campaigns, and close deals—cut to fit how you actually work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://m.venmail.io/register"
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                >
                  Start Free Trial
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-gray-600 hover:bg-gray-800 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <img src="/solutions/founder/section-1.png" alt="VenMail Dashboard" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's in Your Kit
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything sewn together for founder-led sales. No complexity, no fluff.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((item, idx) => (
              <div key={idx} className="p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
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
              <p className="text-primary-600 font-medium mb-3">Founder-Led Sales</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Close Deals Without a Sales Team
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                VenMail helps you write compelling outreach, find the right prospects, 
                and automate follow-ups — so you can focus on building your product.
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
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
              >
                Get started free →
              </a>
            </div>
            <div className="md:col-span-6">
              <img src="/partner/partner-1.png" alt="AI Email Features" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <img src="/partner/partner-2.png" alt="Cost Savings" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:col-span-6 order-1 md:order-2">
              <p className="text-primary-600 font-medium mb-3">Simple Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why This Works for Founders
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Stop paying for Gmail Workspace, Calendly, Mailchimp, and Apollo separately. 
                Get everything in one platform with transparent, flat pricing.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Typical tool stack</span>
                  <span className="text-gray-400 line-through">$200-500/mo</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg border border-primary-200">
                  <span className="text-gray-900 font-medium">VenMail Startup</span>
                  <span className="text-primary-600 font-bold">From $7/mo</span>
                </div>
              </div>
              <a href="/pricing" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                Compare pricing plans →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Free plan. No credit card. Just start.
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
