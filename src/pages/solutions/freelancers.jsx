import React from "react";
import CustomLayout from "@/components/layout/CustomLayout";
import Testimonial from "@/components/PageSections/Testimonial";
import { BsCheck2 } from "react-icons/bs";
import { LuUser, LuMail, LuCalendar, LuTarget } from "react-icons/lu";
import { useCurrency } from "@/contexts/CurrencyContext";

export default function Freelancers() {
  const { formatPrice, isLoading } = useCurrency();
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
    <CustomLayout logoVariant="dark" hideFooterJumbo={true}>
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
              <div className="cinematic-vignette rounded-lg overflow-hidden">
                <img src="/ai-dashboard.png" alt="Freelancer AI Dashboard" className="rounded-lg shadow-2xl w-full" />
              </div>
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
            {capabilities.map((item, idx) => {
              const featureImages = [
                "/quick_templates.png", // Professional Email - templates
                "/quick-meeting-scheduler.png", // Booking Pages - scheduling
                "/quick_tasks.png", // Docs & Templates - tasks/docs
                "/quick-replies-ai.png" // AI Assistance - AI rewrites
              ];
              
              return (
                <div key={idx} className="glass-card p-6 border border-gray-200 rounded-xl hover:border-emerald-300 transition-colors feature-glow relative overflow-hidden">
                  {/* Subtle animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-green-50/30 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="cinematic-frame rounded-lg overflow-hidden">
                    <img 
                      src={featureImages[idx]} 
                      alt={`${item.title} - Freelancer feature`} 
                      className="rounded-lg w-full h-32 object-cover"
                    />
                  </div>
                </div>
              );
            })}
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
              <div className="cinematic-vignette rounded-lg overflow-hidden">
                <img src="/powermodeshortcuts.png" alt="Freelancer Power Mode Features" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Freelancer-Specific Features */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Freelancer Workflows
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Features that solve real freelancer problems: client communication, time management, and professional presentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fast Processing */}
            <div className="glass-card bg-white p-6 rounded-xl border border-gray-200 feature-glow">
              <div className="cinematic-frame rounded-lg overflow-hidden mb-4">
                <img src="/fast_sort.png" alt="Fast Email Processing" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Process 75 Emails in 5 Minutes</h3>
              <p className="text-gray-600">Power mode helps you blast through client emails and focus on billable work instead of inbox management.</p>
            </div>

            {/* Smart Scheduling */}
            <div className="glass-card bg-white p-6 rounded-xl border border-gray-200 feature-glow">
              <div className="cinematic-frame rounded-lg overflow-hidden mb-4">
                <img src="/date-scheduler.png" alt="Smart Date Scheduling" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Never Miss Meeting Opportunities</h3>
              <p className="text-gray-600">AI detects dates in emails and converts them to schedulable events. One-click booking with clients.</p>
            </div>

            {/* Professional Analytics */}
            <div className="glass-card bg-white p-6 rounded-xl border border-gray-200 feature-glow">
              <div className="cinematic-frame rounded-lg overflow-hidden mb-4">
                <img src="/sent_metrics.png" alt="Email Analytics" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Client Engagement</h3>
              <p className="text-gray-600">Know when proposals are opened, follow up at the right time, and measure your communication effectiveness.</p>
            </div>

            {/* AI-Powered Writing */}
            <div className="glass-card bg-white p-6 rounded-xl border border-gray-200 feature-glow">
              <div className="cinematic-frame rounded-lg overflow-hidden mb-4">
                <img src="/quick-replies-ai.png" alt="AI Email Writing" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Write Better Client Emails</h3>
              <p className="text-gray-600">AI rewrites help you sound more professional, save time on responses, and maintain consistent client communication.</p>
            </div>

            {/* Dark Mode */}
            <div className="glass-card bg-white p-6 rounded-xl border border-gray-200 feature-glow">
              <div className="cinematic-frame rounded-lg overflow-hidden mb-4">
                <img src="/dark_mode2.png" alt="Professional Dark Mode" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Work Any Time, Comfortably</h3>
              <p className="text-gray-600">Professional dark mode for late-night work sessions. Reduced eye strain during those client deadline pushes.</p>
            </div>

            {/* Campaign Tools */}
            <div className="glass-card bg-white p-6 rounded-xl border border-gray-200 feature-glow">
              <div className="cinematic-frame rounded-lg overflow-hidden mb-4">
                <img src="/campaign_composer.png" alt="Campaign Tools" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Newsletter & Updates</h3>
              <p className="text-gray-600">Built-in campaign tools to keep clients informed about your services, availability, and portfolio updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <div className="cinematic-vignette rounded-lg overflow-hidden">
                <img src="/sent_metrics.png" alt="Freelancer Email Analytics" className="rounded-lg shadow-lg w-full" />
              </div>
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
                  <span className="text-emerald-600 font-bold">
                    {isLoading ? (
                      <span className="inline-block w-16 h-6 bg-gray-200 animate-pulse rounded"></span>
                    ) : (
                      formatPrice(0)
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Pro Plan</span>
                  <span className="text-gray-900 font-medium">
                    {isLoading ? (
                      <span className="inline-block w-16 h-6 bg-gray-200 animate-pulse rounded"></span>
                    ) : (
                      `From ${formatPrice(7)}`
                    )}
                  </span>
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
