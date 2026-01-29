import React from "react";
import CustomLayout from "@/components/layout/CustomLayout";
import Testimonial from "@/components/PageSections/Testimonial";
import { BsCheck2 } from "react-icons/bs";
import { LuUsers, LuBarChart3, LuShield, LuBuilding } from "react-icons/lu";

export default function Agency() {
  const capabilities = [
    {
      icon: <LuUsers className="w-6 h-6" />,
      title: "Multi-Client Management",
      description: "Manage all client accounts from one dashboard with separate workspaces and unified billing.",
    },
    {
      icon: <LuBuilding className="w-6 h-6" />,
      title: "White-Label Options",
      description: "Custom domains and branded booking pages for a seamless client experience.",
    },
    {
      icon: <LuBarChart3 className="w-6 h-6" />,
      title: "Campaign Analytics",
      description: "Detailed reporting on open rates, clicks, and conversions to demonstrate ROI.",
    },
    {
      icon: <LuShield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "GDPR compliant with optional Bring Your Own Storage for sensitive clients.",
    },
  ];

  const benefits = [
    "Unlimited team members included",
    "Flat pricing that protects margins",
    "Separate client workspaces",
    "Shared templates and assets",
    "Campaign automation tools",
    "Priority support available",
  ];

  return (
    <CustomLayout logoVariant="dark" headerColor="#0f172a" textColor={"white"} hideFooterJumbo={true}>
      {/* Hero */}
      <section className="bg-slate-900">
        <div className="max-w-screen-xl px-4 py-20 mx-auto md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 text-center md:text-left">
              <p className="text-blue-400 font-medium mb-4">For Agencies & Consultancies</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                For Agencies: Scale Without the Bill Shock
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Manage clients, run campaigns, deliver results—all from one workspace 
                tailored to how agencies actually work. Flat pricing, no surprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://m.venmail.io/register"
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
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
              <img src="/solutions/agencies/section-1.png" alt="Agency Dashboard" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cut for Agency Workflows
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything sewn together for managing client campaigns. No tool juggling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((item, idx) => (
              <div key={idx} className="p-6 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
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
              <p className="text-blue-600 font-medium mb-3">Agency Operations</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why This Works for Agencies
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                VenMail gives agencies the tools to manage multiple clients efficiently 
                while maintaining healthy margins with flat, predictable pricing.
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
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
              >
                Get started free →
              </a>
            </div>
            <div className="md:col-span-6">
              <img src="/solutions/agencies/content-image-1.png" alt="Client Management" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <img src="/solutions/agencies/content-image-2.png" alt="Agency Pricing" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:col-span-6 order-1 md:order-2">
              <p className="text-blue-600 font-medium mb-3">Predictable Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Flat Pricing That Protects Margins
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Unlike per-seat tools that eat into your margins as you grow, 
                VenMail offers flat pricing with unlimited team members.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Per-seat tools (10 users)</span>
                  <span className="text-gray-400 line-through">$500-800/mo</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="text-gray-900 font-medium">VenMail Business</span>
                  <span className="text-blue-600 font-bold">$23.20/mo</span>
                </div>
              </div>
              <a href="/pricing" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                Compare pricing plans →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Try It?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Free plan. No credit card. See if it fits.
          </p>
          <a
            href="https://m.venmail.io/register"
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-900 bg-white hover:bg-gray-100 transition-colors rounded-lg"
          >
            Get Started Free
          </a>
        </div>
      </section>

      <Testimonial />
    </CustomLayout>
  );
}
