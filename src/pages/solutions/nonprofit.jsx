import React from "react";
import CustomLayout from "@/components/layout/CustomLayout";
import Testimonial from "@/components/PageSections/Testimonial";
import { BsCheck2 } from "react-icons/bs";
import { LuHeart, LuUsers, LuDollarSign, LuFileText, LuMail, LuCalendar } from "react-icons/lu";
import { useCurrency } from "@/contexts/CurrencyContext";

export default function NonprofitSolution() {
  const { formatPrice, isLoading } = useCurrency();
  
  const capabilities = [
    {
      icon: <LuHeart className="w-6 h-6" />,
      title: "Donor Communication",
      description: "AI-powered email with automated follow-ups for donor relations and fundraising.",
    },
    {
      icon: <LuUsers className="w-6 h-6" />,
      title: "Volunteer Coordination",
      description: "Streamlined communication for volunteer management and engagement programs.",
    },
    {
      icon: <LuFileText className="w-6 h-6" />,
      title: "Impact Reporting",
      description: "Real-time collaboration on impact reports, success stories, and grant applications.",
    },
    {
      icon: <LuCalendar className="w-6 h-6" />,
      title: "Event Management",
      description: "Custom booking pages with Google Calendar sync for fundraising events.",
    },
  ];

  const benefits = [
    "Secure donor data management",
    "Self-hosted with custom storage options",
    "AI-powered donor communication",
    "Real-time collaboration on grant applications",
    "Automated follow-up sequences",
    "Unlimited staff and volunteer accounts",
    "Secure form generation for donations",
    "Campaign management for fundraising",
    "SMTP API for transactional emails",
    "Volunteer management tools",
  ];
  return (
    <CustomLayout logoVariant="dark" hideFooterJumbo={true}>
      {/* Hero */}
      <section className="bg-slate-900">
        <div className="max-w-screen-xl px-4 py-20 mx-auto md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 text-center md:text-left">
              <p className="text-green-400 font-medium mb-4">For Nonprofit Organizations</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Nonprofit Communication Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Affordable, comprehensive email solution designed specifically for nonprofit organizations 
                to enhance donor relations, volunteer coordination, and mission communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://m.venmail.io/register"
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-green-600 hover:bg-green-700 transition-colors"
                >
                  Start Nonprofit Trial
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
              <img src="/stock-images/team-rowing-boat.jpg" alt="Nonprofit Team" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Nonprofit Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything nonprofit organizations need for donor communication and volunteer coordination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((item, idx) => (
              <div key={idx} className="p-6 border border-gray-200 rounded-xl hover:border-green-300 transition-colors">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
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
              <p className="text-green-600 font-medium mb-3">Nonprofit Operations</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Nonprofits Choose Venmail
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Venmail provides the affordability and features nonprofit organizations need 
                while maintaining the professional image your donors expect.
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
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
              >
                Get started free →
              </a>
            </div>
            <div className="md:col-span-6">
              <img src="/sent_metrics.png" alt="Nonprofit Analytics" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <img src="/follow_up.png" alt="Nonprofit Automation" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:col-span-6 order-1 md:order-2">
              <p className="text-green-600 font-medium mb-3">Nonprofit Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Enterprise Features at Nonprofit Prices
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get donor communication, volunteer coordination, and collaboration tools 
                designed specifically for nonprofit budgets.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Typical nonprofit software</span>
                  <span className="text-gray-400 line-through">
                    {isLoading ? (
                      <span className="inline-block w-20 h-6 bg-gray-200 animate-pulse rounded"></span>
                    ) : (
                      formatPrice(250) // Average of $150-350
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <span className="text-gray-900 font-medium">Venmail Startup</span>
                  <span className="text-green-600 font-bold">
                    {isLoading ? (
                      <span className="inline-block w-16 h-6 bg-gray-200 animate-pulse rounded"></span>
                    ) : (
                      `From ${formatPrice(7)}`
                    )}
                  </span>
                </div>
              </div>
              <a href="/pricing" className="inline-flex items-center text-green-600 font-medium hover:text-green-700">
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
            Ready to Amplify Your Mission?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Free plan available. No credit card required. Donor data protection included.
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
