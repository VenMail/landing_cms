import React from "react";
import CustomLayout from "@/components/layout/CustomLayout";
import Testimonial from "@/components/PageSections/Testimonial";
import { BsCheck2 } from "react-icons/bs";
import { LuGraduationCap, LuUsers, LuFileText, LuCalendar, LuMail, LuShield } from "react-icons/lu";
import { useCurrency } from "@/contexts/CurrencyContext";

export default function EducationSolution() {
  const { formatPrice, isLoading } = useCurrency();
  
  const capabilities = [
    {
      icon: <LuUsers className="w-6 h-6" />,
      title: "Student Communication",
      description: "Secure email with AI-powered follow-ups for student engagement and parent communication.",
    },
    {
      icon: <LuMail className="w-6 h-6" />,
      title: "Administrative Tools",
      description: "Streamlined communication for school administration, faculty, and staff coordination.",
    },
    {
      icon: <LuFileText className="w-6 h-6" />,
      title: "Document Collaboration",
      description: "Real-time editing and sharing of assignments, grades, and educational materials.",
    },
    {
      icon: <LuCalendar className="w-6 h-6" />,
      title: "Academic Scheduling",
      description: "Custom booking pages with Google Calendar sync for classes and meetings.",
    },
  ];

  const benefits = [
    "Secure student data protection",
    "Self-hosted with custom storage options",
    "AI-powered student communication",
    "Real-time collaboration on educational documents",
    "Automated follow-up sequences",
    "Unlimited staff and faculty accounts",
    "Secure form generation for student enrollment",
    "Campaign management for school newsletters",
    "SMTP API for transactional emails",
    "Parent-teacher communication portal",
  ];
  return (
    <CustomLayout logoVariant="dark" hideFooterJumbo={true}>
      {/* Hero */}
      <section className="bg-slate-900">
        <div className="max-w-screen-xl px-4 py-20 mx-auto md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 text-center md:text-left">
              <p className="text-amber-400 font-medium mb-4">For Educational Institutions</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Education Communication Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive email solution designed specifically for schools, universities, 
                and educational institutions to enhance student, parent, and faculty communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://m.venmail.io/register"
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-amber-600 hover:bg-amber-700 transition-colors"
                >
                  Start Education Trial
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
              <img src="/stock-images/business-team-collaboration.jpg" alt="Education Collaboration" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Educational Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything educational institutions need for secure student communication and collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((item, idx) => (
              <div key={idx} className="p-6 border border-gray-200 rounded-xl hover:border-amber-300 transition-colors">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-4">
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
              <p className="text-amber-600 font-medium mb-3">Educational Operations</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Educational Institutions Choose Venmail
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Venmail provides the security and collaboration features educational institutions need 
                while maintaining the accessibility students and parents expect.
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
                className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
              >
                Get started free →
              </a>
            </div>
            <div className="md:col-span-6">
              <img src="/quick-meeting-scheduler.png" alt="Education Scheduling" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <img src="/scheduling-setup.png" alt="Education Administration" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:col-span-6 order-1 md:order-2">
              <p className="text-amber-600 font-medium mb-3">Educational Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Enterprise Features at Educational Prices
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get secure student communication, collaboration tools, and self-hosted options 
                designed specifically for educational budgets.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Typical educational software</span>
                  <span className="text-gray-400 line-through">
                    {isLoading ? (
                      <span className="inline-block w-20 h-6 bg-gray-200 animate-pulse rounded"></span>
                    ) : (
                      formatPrice(300) // Average of $200-400
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <span className="text-gray-900 font-medium">Venmail Business</span>
                  <span className="text-amber-600 font-bold">
                    {isLoading ? (
                      <span className="inline-block w-16 h-6 bg-gray-200 animate-pulse rounded"></span>
                    ) : (
                      formatPrice(23.2)
                    )}
                  </span>
                </div>
              </div>
              <a href="/pricing" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700">
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
            Ready to Transform Your School Communication?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Free plan available. No credit card required. Student data protection included.
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
