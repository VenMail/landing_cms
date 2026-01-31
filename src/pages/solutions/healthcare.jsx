import React from "react";
import CustomLayout from "@/components/layout/CustomLayout";
import Testimonial from "@/components/PageSections/Testimonial";
import { BsCheck2 } from "react-icons/bs";
import { LuShield, LuHeart, LuUsers, LuFileText, LuCalendar, LuMail } from "react-icons/lu";
import { useCurrency } from "@/contexts/CurrencyContext";

export default function HealthcareSolution() {
  const { formatPrice, isLoading } = useCurrency();
  
  const capabilities = [
    {
      icon: <LuShield className="w-6 h-6" />,
      title: "HIPAA Compliant",
      description: "Self-hosted options with Bring Your Own Storage for complete data control and compliance.",
    },
    {
      icon: <LuMail className="w-6 h-6" />,
      title: "Secure Patient Communication",
      description: "Encrypted email with AI-powered follow-ups for appointments and care coordination.",
    },
    {
      icon: <LuUsers className="w-6 h-6" />,
      title: "Care Team Collaboration",
      description: "Real-time document editing and sharing for medical teams and departments.",
    },
    {
      icon: <LuCalendar className="w-6 h-6" />,
      title: "Appointment Management",
      description: "Custom booking pages with Google Calendar sync for patient scheduling.",
    },
  ];

  const benefits = [
    "HIPAA-compliant email infrastructure",
    "Self-hosted with custom storage options",
    "AI-powered patient communication",
    "Real-time collaboration on medical documents",
    "Automated appointment reminders",
    "Unlimited staff accounts",
    "Secure form generation for patient intake",
    "Campaign management for health newsletters",
  ];
  return (
    <CustomLayout logoVariant="dark" hideFooterJumbo={true}>
      {/* Hero */}
      <section className="bg-slate-900">
        <div className="max-w-screen-xl px-4 py-20 mx-auto md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 text-center md:text-left">
              <p className="text-blue-400 font-medium mb-4">For Healthcare Providers</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Healthcare Communication Made Secure
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                HIPAA-compliant email and collaboration platform designed specifically for 
                hospitals, clinics, and healthcare providers with self-hosted options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://m.venmail.io/register"
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Start Healthcare Trial
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
              <img src="/stock-images/data-center-servers.jpg" alt="Healthcare Security" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Healthcare Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything healthcare providers need for secure patient communication and team collaboration.
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
              <p className="text-blue-600 font-medium mb-3">Healthcare Operations</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Healthcare Providers Choose Venmail
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Venmail provides the security and compliance healthcare organizations need 
                while maintaining the efficiency your patients expect.
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
              <img src="/ai-dashboard.png" alt="Healthcare Dashboard" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <img src="/docs-editor.png" alt="Secure Document Editing" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:col-span-6 order-1 md:order-2">
              <p className="text-blue-600 font-medium mb-3">Cost-Effective Compliance</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Enterprise Security at Startup Prices
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get HIPAA-compliant email, collaboration tools, and self-hosted options 
                without the enterprise software price tag.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Typical healthcare software</span>
                  <span className="text-gray-400 line-through">
                    {isLoading ? (
                      <span className="inline-block w-20 h-6 bg-gray-200 animate-pulse rounded"></span>
                    ) : (
                      formatPrice(500) // Average of $300-700
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="text-gray-900 font-medium">Venmail Enterprise</span>
                  <span className="text-blue-600 font-bold">
                    {isLoading ? (
                      <span className="inline-block w-16 h-6 bg-gray-200 animate-pulse rounded"></span>
                    ) : (
                      formatPrice(100)
                    )}
                  </span>
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
            Ready to Secure Your Patient Communication?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Free plan available. No credit card required. HIPAA compliance included.
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
