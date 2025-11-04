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
      name: "FREE",
      price: "$0/mo",
      caption: "Up to 10 users · 5GB shared storage",
      button: "Get Started",
      href: "https://m.venmail.io/register",
      external: true,
      features: {
        "Users Included": "Up to 10 users",
        "Storage Included": "5GB shared",
        "Bring Your Own Storage": "$20/mo add-on",
        "Prospect Discovery": "no",
        "Campaigns & Bulk Email": "Basic broadcasts",
        "Campaign/Newsletter Add-on": "$35/mo add-on",
        "Automated Follow-ups": "Manual",
        "AI Email Rewrites": "10 / user / day",
        "AI Summaries": "Included",
        "Mail Analytics": "Core reporting",
        "SDR Agent": "no",
        "Multi-factor authentication": "yes",
        "Email encryption": "yes",
        "Automated encrypted backups": "yes",
        "Advanced threat protection": "yes",
        "Priority Support": "Email",
        "Dedicated Account manager": "no",
      },
    },
    {
      name: "STARTUP",
      price: "$7/mo",
      caption: "Unlimited users · 60GB shared storage",
      button: "Choose Startup",
      href: "https://m.venmail.io/register",
      external: true,
      features: {
        "Users Included": "Unlimited users",
        "Storage Included": "60GB shared",
        "Bring Your Own Storage": "$20/mo add-on",
        "Prospect Discovery": "250 credits / mo",
        "Campaigns & Bulk Email": "Add-on",
        "Campaign/Newsletter Add-on": "$35/mo add-on",
        "Automated Follow-ups": "yes",
        "AI Email Rewrites": "20 / user / day",
        "AI Summaries": "Included",
        "Mail Analytics": "Advanced analytics",
        "SDR Agent": "no",
        "Multi-factor authentication": "yes",
        "Email encryption": "yes",
        "Automated encrypted backups": "yes",
        "Advanced threat protection": "yes",
        "Priority Support": "Priority email",
        "Dedicated Account manager": "no",
      },
    },
    {
      name: "BUSINESS",
      price: "$23.2/mo",
      caption: "Unlimited users · 250GB shared storage",
      button: "Choose Business",
      href: "https://m.venmail.io/register",
      external: true,
      isHighlighted: true,
      features: {
        "Users Included": "Unlimited users",
        "Storage Included": "250GB shared",
        "Bring Your Own Storage": "$20/mo add-on",
        "Prospect Discovery": "1,000 credits / mo",
        "Campaigns & Bulk Email": "Unlimited + templates",
        "Campaign/Newsletter Add-on": "Included",
        "Automated Follow-ups": "yes",
        "AI Email Rewrites": "50 / user / day",
        "AI Summaries": "Included",
        "Mail Analytics": "Advanced + deliverability",
        "SDR Agent": "no",
        "Multi-factor authentication": "yes",
        "Email encryption": "yes",
        "Automated encrypted backups": "yes",
        "Advanced threat protection": "yes",
        "Priority Support": "2-hour SLA",
        "Dedicated Account manager": "no",
      },
    },
    {
      name: "ENTERPRISE",
      price: "$100/mo",
      caption: "Unlimited users · 1.5TB shared storage",
      button: "Talk to Sales",
      href: "/contact-us",
      external: false,
      features: {
        "Users Included": "Unlimited users",
        "Storage Included": "1.5TB shared",
        "Bring Your Own Storage": "Included",
        "Prospect Discovery": "Unlimited*",
        "Campaigns & Bulk Email": "Unlimited + SLA",
        "Campaign/Newsletter Add-on": "Included",
        "Automated Follow-ups": "yes",
        "AI Email Rewrites": "100 / user / day",
        "AI Summaries": "Included",
        "Mail Analytics": "Advanced + custom reporting",
        "SDR Agent": "yes",
        "Multi-factor authentication": "yes",
        "Email encryption": "yes",
        "Automated encrypted backups": "yes",
        "Advanced threat protection": "yes",
        "Priority Support": "24/7 concierge",
        "Dedicated Account manager": "yes",
      },
    },
  ];

  const sections = [
    "TEAM SCALE",
    "GROWTH & CAMPAIGNS",
    "INTELLIGENCE",
    "SECURITY",
    "SUPPORT",
  ];

  const features = {
    "TEAM SCALE": [
      "Users Included",
      "Storage Included",
      "Bring Your Own Storage",
    ],
    "GROWTH & CAMPAIGNS": [
      "Prospect Discovery",
      "Campaigns & Bulk Email",
      "Campaign/Newsletter Add-on",
      "Automated Follow-ups",
    ],
    INTELLIGENCE: [
      "AI Email Rewrites",
      "AI Summaries",
      "Mail Analytics",
      "SDR Agent",
    ],
    SECURITY: [
      "Multi-factor authentication",
      "Email encryption",
      "Automated encrypted backups",
      "Advanced threat protection",
    ],
    SUPPORT: ["Priority Support", "Dedicated Account manager"],
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
                <div className="text-center space-y-2">
                  <div className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                    {plan.name}
                  </div>
                  <div className="text-lg font-semibold text-gray-900">{plan.price}</div>
                  {plan.caption && (
                    <div className="text-xs text-gray-500">
                      {plan.caption}
                    </div>
                  )}
                  <a
                    href={plan.href}
                    target={plan.external ? "_blank" : undefined}
                    rel={plan.external ? "noreferrer" : undefined}
                    className={`inline-flex justify-center px-7 py-2 rounded-sm text-sm ${
                      plan.isHighlighted
                        ? "bg-primary-600 text-white"
                        : "border border-gray-300 text-gray-700"
                    }`}
                  >
                    {plan.button}
                  </a>
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
      <p className="text-xs text-gray-500 mt-4 max-w-3xl">
        *Unlimited prospect discovery on Enterprise is subject to fair-use policies. Bring Your Own Storage is available as a $20/mo add-on for all paid plans; Campaign/Newsletter automation add-on available for $35/mo when not included.
      </p>
    </div>
  );
};

export const PricingSlider = ({ pricingPlans, hasButton }) => {
  const [storageGB, setStorageGB] = useState(60);
  const MAX_STORAGE = 1500; // GB

  const getPlan = (gb) => {
    if (gb <= 5) return "Free";
    if (gb <= 60) return "Startup";
    if (gb <= 250) return "Business";
    return "Enterprise";
  };

  const getPricePerMonth = (gb) => {
    if (gb <= 5) return 0;
    if (gb <= 60) return 7;
    if (gb <= 250) return 23.2;
    return 100;
  };

  const formatStorage = (gb) => {
    if (gb >= 1000) {
      const tb = gb / 1024;
      return `${tb.toFixed(tb >= 2 ? 1 : 2)} TB`;
    }
    return `${gb} GB`;
  };

  return (
    <div className="bg-gray-100 py-8 sm:py-24">
      <div className="w-full max-w-[90%] lg:max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-center mb-8 sm:mb-12 text-black">
          How much storage <br className="hidden sm:block"/> do you need?
        </h2>
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8">
          <div className="text-lg sm:text-xl text-black">{formatStorage(storageGB)} storage</div>
          <div className="w-full sm:w-[90%] lg:w-[80%] mx-auto">
            <input
              type="range"
              min="1"
              max={MAX_STORAGE}
              value={storageGB}
              onChange={(e) => setStorageGB(parseInt(e.target.value))}
              className="w-full appearance-none cursor-pointer relative
                [&::-webkit-slider-runnable-track]:h-[6px]
                [&::-webkit-slider-runnable-track]:bg-[#CCCCCC]
                [&::-webkit-slider-thumb]:appearance-none 
                [&::-webkit-slider-thumb]:h-12
                [&::-webkit-slider-thumb]:w-12
                sm:[&::-webkit-slider-thumb]:h-16 
                sm:[&::-webkit-slider-thumb]:w-16 
                [&::-webkit-slider-thumb]:rounded-full 
                [&::-webkit-slider-thumb]:bg-white 
                [&::-webkit-slider-thumb]:outline-none
                [&::-webkit-slider-thumb]:ring-4
                [&::-webkit-slider-thumb]:ring-black
                [&::-webkit-slider-thumb]:mt-[-25px]
                sm:[&::-webkit-slider-thumb]:mt-[-29px]
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:shadow-sm
                [&::-webkit-slider-thumb]:relative
                [&::-webkit-slider-thumb]:z-[2]
                before:content-['']
                before:absolute
                before:left-0
                before:top-[50%]
                before:h-[6px]
                before:bg-black
                before:w-[var(--before-width)]
                before:pointer-events-none
                before:z-[1]"
              style={{
                '--before-width': `${(storageGB - 1) / (MAX_STORAGE - 1) * 100}%`
              }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 mt-4 sm:mt-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`p-4 sm:p-6 rounded-md border transition-all duration-300 ${
                  getPlan(storageGB).toLowerCase() === plan.name.toLowerCase()
                    ? "bg-white scale-105 shadow-lg border-black"
                    : "opacity-50 bg-transparent border-black"
                }`}
              >
                <div className="py-2 sm:py-4">
                  <div className="text-black font-semibold uppercase text-sm sm:text-base">{plan.name}</div>
                  <div className="text-xl sm:text-2xl font-bold mt-2 text-black">${plan.monthly}/mo</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">
                    {plan.description2}
                  </div>
                  {getPlan(storageGB).toLowerCase() === plan.name.toLowerCase() && (
                    <div className="text-primary-600 text-xs sm:text-sm mt-2">
                      This is plan for you
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-xs sm:text-sm text-gray-600 mt-4">
            All paid plans include unlimited users. Choose your plan based on storage.
          </div>
          {hasButton && (
            <a href="/pricing" className="bg-black text-white px-8 py-2 rounded-none mt-10">
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const pricingPlans = [
    {
      name: "Free",
      id: "free",
      monthly: 0,
      yearly: 0,
      description1: "Launch your workspace with core email automation.",
      description2: "Up to 10 users · 5GB shared storage",
      featured: false,
      features: [
        "Up to 10 users included",
        "5GB shared storage",
        "AI rewrites (10 per user/day)",
        "Basic campaigns & broadcasts",
        "Smart email labelling",
      ],
      buttonText: "Start for Free",
      buttonLink: "https://m.venmail.io/register",
    },
    {
      name: "Startup",
      id: "startup",
      monthly: 7,
      yearly: 84,
      description1: "Unlock growth with unlimited users and automations.",
      description2: "Unlimited users · 60GB shared storage",
      featured: false,
      features: [
        "Unlimited users on a flat price",
        "60GB shared storage",
        "Prospect discovery (250 credits/mo)",
        "Bulk email & automated follow-ups (add-on)",
        "Bring Your Own Storage add-on ($20/mo)",
      ],
      buttonText: "Choose Startup",
      buttonLink: "https://m.venmail.io/register",
    },
    {
      name: "Business",
      id: "business",
      monthly: 23.2,
      yearly: 278.4,
      description1: "Advanced engagement, analytics, and deliverability.",
      description2: "Unlimited users · 250GB shared storage",
      featured: true,
      features: [
        "Unlimited users",
        "250GB shared storage",
        "Campaign & newsletter add-on included",
        "Advanced deliverability analytics",
        "Automated sequences & follow-ups",
        "Priority email support (2-hour SLA)",
      ],
      buttonText: "Choose Business",
      buttonLink: "https://m.venmail.io/register",
    },
    {
      name: "Enterprise",
      id: "enterprise",
      monthly: 100,
      yearly: 1200,
      description1: "Custom security, governance, and onboarding.",
      description2: "Unlimited users · 1.5TB shared storage",
      featured: false,
      features: [
        "Unlimited users",
        "1.5TB shared storage",
        "Bring your own storage included",
        "Custom compliance & security controls",
        "Unlimited prospect discovery*",
        "Campaign & newsletter add-on included",
        "Dedicated account manager + 24/7 support",
      ],
      buttonText: "Talk to Sales",
      buttonLink: "/contact-us",
    },
  ];

function pricing() {
  const [pricingPeriod, setPricingPeriod] = useState("monthly");
  

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <DefaultLayout>
      <section className="w-full sm:py-16 ">
        <div className="relative isolate mx-auto max-w-screen-xl py-8 px-4 lg:px-6">
          <div className="text-center md:pb-24 pb-12">
            <p className="uppercase text-sm text-black tracking-[0.3em]">pricing</p>
            <p className="mt-2 max-w-4xl mx-auto text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Don't let price constrain growth.
              <br className="hidden sm:block" />
            </p>
            <p className="mt-4 text-base text-gray-600 max-w-3xl mx-auto">
              Choose storage and features that fit your team. No per-seat pricing.
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
                        href={tier.buttonLink}
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
          </div>

        {/* <PricingSlider pricingPlans={pricingPlans} /> */}

        <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-16">
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
