import React from "react";
import CustomLayout from "@/components/layout/CustomLayout";
import Testimonial from "@/components/PageSections/Testimonial";
import { BsCheck2 } from "react-icons/bs";
import { LuMail, LuBarChart3, LuTarget, LuSparkles } from "react-icons/lu";

export default function Marketing() {
  const capabilities = [
    {
      icon: <LuMail className="w-6 h-6" />,
      title: "Email Campaigns",
      description: "Create and send email campaigns with templates, scheduling, and automation.",
    },
    {
      icon: <LuSparkles className="w-6 h-6" />,
      title: "AI Writing Assistant",
      description: "Generate compelling email copy and subject lines with AI assistance.",
    },
    {
      icon: <LuTarget className="w-6 h-6" />,
      title: "Lead Discovery",
      description: "Find prospects that match your ideal customer profile from verified data.",
    },
    {
      icon: <LuBarChart3 className="w-6 h-6" />,
      title: "Campaign Analytics",
      description: "Track opens, clicks, and conversions with detailed reporting.",
    },
  ];

  const benefits = [
    "AI-assisted email copywriting",
    "Automated drip campaigns",
    "Contact segmentation",
    "A/B testing for subject lines",
    "Deliverability monitoring",
    "Team collaboration tools",
  ];

  return (
    <CustomLayout logoVariant="dark" headerColor="#7c3aed" textColor={"white"} hideFooterJumbo={true}>
      {/* Hero */}
      <section className="bg-violet-700">
        <div className="max-w-screen-xl px-4 py-20 mx-auto md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 text-center md:text-left">
              <p className="text-violet-200 font-medium mb-4">For Marketing Teams</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                For Marketing Teams: Campaigns That Convert
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Email campaigns, lead discovery, performance tracking—all with AI woven in. 
                No tool juggling. Just results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://m.venmail.io/register"
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-violet-700 bg-white hover:bg-violet-50 transition-colors"
                >
                  Start Free Trial
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-violet-400 hover:bg-violet-600 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <img src="/solutions/marketing/section-1.png" alt="Marketing Dashboard" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Crafted for Modern Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything for successful campaigns, AI-powered and sewn together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((item, idx) => (
              <div key={idx} className="p-6 border border-gray-200 rounded-xl hover:border-violet-300 transition-colors">
                <div className="w-12 h-12 bg-violet-50 rounded-lg flex items-center justify-center text-violet-600 mb-4">
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
              <p className="text-violet-600 font-medium mb-3">AI-Powered Campaigns</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why This Works for Marketing Teams
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                VenMail's AI helps you craft compelling email copy, 
                optimize subject lines, and personalize content at scale.
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
                className="inline-flex items-center text-violet-600 font-medium hover:text-violet-700"
              >
                Get started free →
              </a>
            </div>
            <div className="md:col-span-6">
              <img src="/partner/partner-1.png" alt="Campaign Features" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <img src="/partner/partner-2.png" alt="Marketing Pricing" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:col-span-6 order-1 md:order-2">
              <p className="text-violet-600 font-medium mb-3">Transparent Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Marketing Tools Without the Marketing Price
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get email marketing, CRM, and automation in one platform 
                at a fraction of what you'd pay for separate tools.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Typical marketing stack</span>
                  <span className="text-gray-400 line-through">$300-800/mo</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-violet-50 rounded-lg border border-violet-200">
                  <span className="text-gray-900 font-medium">VenMail Business</span>
                  <span className="text-violet-600 font-bold">$23.20/mo</span>
                </div>
              </div>
              <a href="/pricing" className="inline-flex items-center text-violet-600 font-medium hover:text-violet-700">
                Compare pricing plans →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-violet-700 py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to See What It Can Do?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Free plan. No credit card. Try it out.
          </p>
          <a
            href="https://m.venmail.io/register"
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-violet-700 bg-white hover:bg-violet-50 transition-colors rounded-lg"
          >
            Get Started Free
          </a>
        </div>
      </section>

      <Testimonial />
    </CustomLayout>
  );
}
