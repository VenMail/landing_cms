import DefaultLayout from "@/components/layout/DefaultLayout";
import FAQs from "@/components/PageSections/FAQs";
import PricingToggle from "@/components/PageSections/PricingToggle";
import React from "react";
import { useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { GoCheck } from "react-icons/go";
import { VscChromeClose } from "react-icons/vsc";

const PricingTable = () => {
  const plans = [
    {
      name: "SOLO FOUNDER",
      price: "$0/mo",
      button: "Get Started",
      features: {
        "AI Email Rewrites": "10",
        "AI Labeling": "yes",
        "Instant AI summaries": "yes",
        Search: "yes",
        "Email signatures": "yes",
        "Outgoing Email Validator": "yes",
        "Sync Contact": "yes",
        "Secure Email Hosting": "yes",
        "Instant AI Summaries": "yes",
        "Generate Prospects": "5",
        "Auto Meeting Scheduler": "yes",
        "Auto Tasks Extraction": "yes",
        "Split your inbox": "yes",
        Storage: "5GB",
        "SMTP API Access": "no",
        "Addon Installation Request": "no",
        "Mail Analytics": "yes",
        "Storage Usage": "yes",
        "Employee Insight": "no",
        "Multi-factor authentication": "yes",
        "Email encryption": "yes",
        "Automated encrypted backups": "yes",
        "Phishing protection": "yes",
        "Advanced threat protection": "yes",
        "Custom security policies": "yes",
        "Customizable encryption keys": "yes",
        "Priority Email Support": "yes",
        "Dedicated Account manager": "no",
      },
    },
    {
      name: "START UP",
      price: "$4.55/mo",
      button: "Get Started",
      features: {
        "AI Email Rewrites": "20",
        "AI Labeling": "yes",
        "Instant AI summaries": "yes",
        Search: "yes",
        "Email signatures": "yes",
        "Outgoing Email Validator": "yes",
        "Sync Contact": "yes",
        "Secure Email Hosting": "yes",
        "Instant AI Summaries": "yes",
        "Generate Prospects": "10",
        "Auto Meeting Scheduler": "yes",
        "Auto Tasks Extraction": "yes",
        "Split your inbox": "yes",
        Storage: "10GB",
        "SMTP API Access": "no",
        "Addon Installation Request": "no",
        "Mail Analytics": "yes",
        "Storage Usage": "yes",
        "Employee Insight": "yes",
        "Multi-factor authentication": "yes",
        "Email encryption": "yes",
        "Automated encrypted backups": "yes",
        "Phishing protection": "yes",
        "Advanced threat protection": "yes",
        "Custom security policies": "yes",
        "Customizable encryption keys": "yes",
        "Priority Email Support": "yes",
        "Dedicated Account manager": "no",
      },
    },
    {
      name: "BUSINESS",
      price: "$23.5/mo",
      button: "Get Started",
      isHighlighted: "yes",
      features: {
        "AI Email Rewrites": "50",
        "AI Labeling": "yes",
        "Instant AI summaries": "yes",
        Search: "yes",
        "Email signatures": "yes",
        "Outgoing Email Validator": "yes",
        "Sync Contact": "yes",
        "Secure Email Hosting": "yes",
        "Instant AI Summaries": "yes",
        "Generate Prospects": "50",
        "Auto Meeting Scheduler": "yes",
        "Auto Tasks Extraction": "yes",
        "Split your inbox": "yes",
        Storage: "15GB",
        "SMTP API Access": "no",
        "Addon Installation Request": "no",
        "Mail Analytics": "yes",
        "Storage Usage": "yes",
        "Employee Insight": "yes",
        "Multi-factor authentication": "yes",
        "Email encryption": "yes",
        "Automated encrypted backups": "yes",
        "Phishing protection": "yes",
        "Advanced threat protection": "yes",
        "Custom security policies": "yes",
        "Customizable encryption keys": "yes",
        "Priority Email Support": "no",
        "Dedicated Account manager": "no",
      },
    },
    {
      name: "ENTERPRISE",
      price: "$95/mo",
      button: "Contact Sales",
      features: {
        "AI Email Rewrites": "100",
        "AI Labeling": "yes",
        "Instant AI summaries": "yes",
        Search: "yes",
        "Email signatures": "yes",
        "Outgoing Email Validator": "yes",
        "Sync Contact": "yes",
        "Secure Email Hosting": "yes",
        "Instant AI Summaries": "yes",
        "Generate Prospects": "200",
        "Auto Meeting Scheduler": "yes",
        "Auto Tasks Extraction": "yes",
        "Split your inbox": "yes",
        Storage: "25GB",
        "SMTP API Access": "25,000 emails /day",
        "Addon Installation Request": "1",
        "Mail Analytics": "yes",
        "Storage Usage": "yes",
        "Employee Insight": "yes",
        "Multi-factor authentication": "yes",
        "Email encryption": "yes",
        "Automated encrypted backups": "yes",
        "Phishing protection": "yes",
        "Advanced threat protection": "yes",
        "Custom security policies": "yes",
        "Customizable encryption keys": "yes",
        "Priority Email Support": "yes",
        "Dedicated Account manager": "yes",
      },
    },
  ];

  const sections = [
    "SMART ASSISTANT",
    "PRODUCTIVITY",
    "INTELLIGENCE",
    "SECURITY",
    "SUPPORT",
  ];

  const features = {
    "SMART ASSISTANT": [
      "AI Email Rewrites",
      "AI Labeling",
      "Instant AI summaries",
      "Search",
      "Email signatures",
      "Outgoing Email Validator",
      "Sync Contact",
    ],
    PRODUCTIVITY: [
      "Secure Email Hosting",
      "Instant AI summaries",
      "Generate Prospects",
      "Auto Meeting Scheduler",
      "Auto Tasks Extraction",
      "Split your inbox",
      "Storage",
      "SMTP API Access",
      "Addon Installation Request",
    ],
    INTELLIGENCE: ["Mail Analytics", "Storage Usage", "Employee Insight"],
    SECURITY: [
      "Multi-factor authentication",
      "Email encryption",
      "Automated encrypted backups",
      "Phishing protection",
      "Advanced threat protection",
      "Custom security policies",
      "Customizable encryption keys",
    ],
    SUPPORT: ["Priority Email Support", "Dedicated Account manager"],
  };

  return (
    <div className="overflow-x-auto mt-14">
      <table className="min-w-full border text-left text-sm text-gray-600">
        {/* Header Row */}
        <thead>
          <tr className="border-b">
            <th className="p-4 flex items-start text-base font-semibold text-gray-900">
              FEATURES
            </th>
            {plans.map((plan, idx) => (
              <th
                key={idx}
                className={`p-4 text-sm font-medium text-gray-900 ${
                  plan.isHighlighted ? "bg-yellow-50" : ""
                } ${idx === 0 ? "border-x" : "border-r"}`}
              >
                <div className="text-center">
                  <div>{plan.name}</div>
                  <div className="text-lg font-semibold">{plan.price}</div>
                  <button
                    className={`mt-6 px-7 py-2 rounded-sm text-sm ${
                      plan.isHighlighted
                        ? "bg-primary-600 text-white"
                        : "border border-gray-300 text-gray-700"
                    }`}
                  >
                    {plan.button}
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Sections */}
        <tbody>
          {sections.map((section, sectionIdx) => (
            <React.Fragment key={sectionIdx}>
              {/* Section Title */}
              <tr>
                <td
                  // colSpan={plans.length + 1}
                  className="p-4 pb-12 border-r text-2xl font-semibold text-gray-900"
                >
                  {section}
                </td>
                {plans.map((plan, planIdx) => (
                  <td
                    key={planIdx}
                    className={`${
                      plan.isHighlighted ? "bg-yellow-50" : ""
                    } border-r`}
                  ></td>
                ))}
              </tr>
              {/* Features */}
              {features[section].map((feature, featureIdx) => (
                <tr key={featureIdx} className="border-b">
                  <td className="p-4 border-r">{feature}</td>
                  {plans.map((plan, planIdx) => (
                    <td
                      key={planIdx}
                      className={`p-4 border-r ${
                        plan.isHighlighted ? "bg-yellow-50" : ""
                      }`}
                    >
                      <div className="flex justify-center items-center">
                        {plan.features[feature] === 'yes' && (<GoCheck className="text-[#26D07C] text-2xl" />)}
                        {plan.features[feature] === 'no' && (<VscChromeClose className="text-[#949D9F] text-xl" />)}
                        {plan.features[feature] !== 'yes' && plan.features[feature] !== 'no' && (plan.features[feature])}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function pricing() {
  const [pricingPeriod, setPricingPeriod] = useState("monthly");
  const pricingPlans = [
    {
      name: "solo founder",
      monthly: 0,
      yearly: 0,
      description1: "perfect for solo founders",
      description2: "only one person included",
      featured: false,
      features: [
        "secure email hosting",
        "5GB total storage",
        "advanced spam protection",
        "smart email labelling",
        "auto contact synchronization",
      ],
      buttonText: "Get Started",
      buttonLink: "/",
    },
    {
      name: "start up",
      monthly: 4.55,
      yearly: 0,
      description1: "Essential tools for small teams",
      description2: "10 team members included",
      featured: false,
      features: [
        "Secure business mails@yourdomain.com",
        "10GB storage per user",
        "advanced spam protection",
        "20 daily AI email rewrites/user",
        "10 daily prospect generations",
      ],
      buttonText: "Get Started",
      buttonLink: "/",
    },
    {
      name: "business",
      monthly: 23.5,
      yearly: 0,
      description1: "Premium email suite for SMEs",
      description2: "25 team members included",
      featured: true,
      features: [
        "AI summarisation",
        "15GB storage per user (375GB total)",
        "Advanced spam protection",
        "50 daily prospect generations",
        "50 daily AI email rewrites/user",
      ],
      buttonText: "Get Started",
      buttonLink: "/",
    },
    {
      name: "enterprise",
      monthly: 95,
      yearly: 0,
      description1: "Tailored plans for big companies",
      description2: "100 team members included",
      featured: false,
      features: [
        "Dedicated account manager",
        "25GB storage per user (2.5TB total)",
        "advanced spam protection",
        "200 daily prospect generations",
        "100 daily AI email rewrites/user",
      ],
      buttonText: "Contact Sales",
      buttonLink: "/",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <DefaultLayout>
      <section className="w-full sm:py-16 ">
        <div className="relative isolate mx-auto max-w-screen-xl py-8 px-4 lg:px-6">
          <div className="text-center md:pb-24 pb-12">
            <p className="uppercase text-sm text-black">pricing</p>
            <p className="mt-2 max-w-md mx-auto text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              Find the perfect plan for you
            </p>
            <PricingToggle setPricingPeriod={setPricingPeriod} />
          </div>
          <div className="my-16 grid grid-cols-1 items-center sm:my-14 md:grid-cols-4 gap-y-6">
            {pricingPlans.map((tier, tierIdx) => (
              <div key={tier.id} className="h-full relative">
                {tier.featured && (
                  <div className="w-full bg-[#FEEDB2] border border-b-0 text-[#6A5A25] flex h-12 items-center justify-center uppercase text-center relative md:absolute top-0 md:-top-12">
                    most popular
                  </div>
                )}
                <div
                  className={classNames(
                    " p-7 border md:h-full h-auto",
                    tier.featured ? "bg-[#FFFBEE]" : "bg-white/60",
                    tierIdx < pricingPlans.length - 1 ? "md:border-r-0" : ""
                  )}
                >
                  <div className={tierIdx === 13 ? "space-y-3" : ""}>
                    <h3
                      id={tier.id}
                      className="text-sm font-semibold text-black uppercase"
                    >
                      {tier.name}
                    </h3>
                    <p className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-medium tracking-tight text-gray-900">
                        $
                        {pricingPeriod === "monthly"
                          ? tier.monthly
                          : tier.yearly}
                      </span>
                      <span
                        className={classNames(
                          tier.featured ? "text-gray-400" : "text-gray-500",
                          "text-base"
                        )}
                      >
                        /{pricingPeriod === "monthly" ? "month" : "year"}
                      </span>
                    </p>
                    <p className="text-black mt-6 text-base/7">
                      {tier.description1}
                    </p>
                    <p className="text-black text-base/7">
                      {tier.description2}
                    </p>
                  </div>

                  <div className="pb-48">
                    {tierIdx !== 13 && (
                      <a
                        href={tier.href}
                        aria-describedby={tier.id}
                        className={`cursor-pointer ${
                          tier.featured
                            ? "bg-primary-600 text-white"
                            : "bg-white text-black border border-black"
                        }   mt-4 block px-3.5 py-2.5 text-center text-sm font-semibold sm:mt-10 `}
                      >
                        {tier.buttonText}
                      </a>
                    )}
                    <ul
                      role="list"
                      className="text-gray-600 space-y-3 text-sm/6 mt-8"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <BsCheck2
                            aria-hidden="true"
                            className="h-6 w-5 flex-none"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="absolute bottom-[35px] text-black text-medium text-sm">
                    Show price comparison
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Compare all features plans 
          </p>
          <PricingTable />
        </div>
      </section>
      <FAQs />
    </DefaultLayout>
  );
}

export default pricing;
