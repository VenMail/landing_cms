import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { CONTACT_PAGE_PATH } from "@/config/contact";

const SIGNUP_URL = "https://m.venmail.io/register";

export default function Pricing() {
  const pricingPlans = [
    {
      id: "free",
      name: "Free",
      monthly: 0,
      description1: "Start with essential productivity tools.",
      description2: "Up to 10 users · 5GB shared storage",
      buttonText: "Get started free",
      buttonLink: SIGNUP_URL,
      external: true,
      features: [
        "Secure email, calendar, and contact sync",
        "AI summaries + 10 rewrites/day",
        "Manual follow-ups",
        "Core analytics & spam protection",
        "Community support",
      ],
    },
    {
      id: "startup",
      name: "Startup",
      monthly: 7,
      description1: "Storage-based plan for growing teams.",
      description2: "Unlimited users · 60GB shared storage",
      buttonText: "Choose Startup",
      buttonLink: SIGNUP_URL,
      external: true,
      features: [
        "60GB shared storage (BYOS add-on $20/mo)",
        "250 prospect discovery credits / month",
        "AI rewrites (20/day) & automated follow-ups",
        "Campaign & newsletter add-on ($35/mo)",
        "Priority email support",
      ],
    },
    {
      id: "business",
      name: "Business",
      monthly: 23.2,
      description1: "Best for teams running campaigns at scale.",
      description2: "Unlimited users · 250GB shared storage",
      description3: "Campaigns & newsletter automation included.",
      buttonText: "Choose Business",
      buttonLink: SIGNUP_URL,
      external: true,
      featured: true,
      features: [
        "1,000 prospect discovery credits / month",
        "AI rewrites (50/day) & deliverability analytics",
        "Campaigns & newsletters included",
        "Advanced security & backups",
        "2-hour SLA priority support",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      monthly: 100,
      description1: "For organizations needing scale & compliance.",
      description2: "Unlimited users · 2.5TB shared storage",
      description3: "Includes BYOS, SDR Agent, and dedicated support.",
      buttonText: "Talk to Sales",
      buttonLink: CONTACT_PAGE_PATH,
      external: false,
      features: [
        "Unlimited prospect discovery (fair use)",
        "Campaigns, newsletters & BYOS included",
        "AI rewrites (100/day) & custom analytics",
        "Dedicated account manager & 24/7 support",
        "SDR Agent for outbound automation",
      ],
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
    <section className="bg-[#E8EAEA]  w-full sm:py-16 ">

      <div className="relative isolate mx-auto max-w-screen-xl py-8 px-4 lg:px-6">
        <div className="">
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl pb-5">
            Unlimited users on every paid plan. Pick the storage tier that fits your team.
          </p>
          <a href="/pricing" className="py-3 my-5 px-8 border border-black text-black w-full md:w-auto">See full pricing details</a>

        </div>
        <div className="mt-16 grid grid-cols-1 items-center gap-6 sm:mt-20 md:grid-cols-3">
          {pricingPlans.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                "bg-white/60 p-8 ring-1 ring-gray-900/10 sm:p-10",
                tierIdx === 3
                  ? "col-span-full grid grid-cols-1 md:grid-cols-2 gap-8"
                  : "h-full"
              )}
            >
              <div className={tierIdx === 3 ? "space-y-3" : ""}>
                <h3 id={tier.id} className="text-base/7 font-semibold text-black uppercase">
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span
                    className={classNames(
                      tier.featured ? "text-white" : "text-gray-900",
                      "text-5xl font-semibold tracking-tight"
                    )}
                  >
                    ${tier.monthly}
                  </span>
                  <span
                    className={classNames(
                      tier.featured ? "text-gray-400" : "text-gray-500",
                      "text-base"
                    )}
                  >
                    /month
                  </span>
                </p>
                <p className="text-black mt-6 text-base/7">
                  {tier.description1}
                </p>
                <p className="text-black text-base/7">
                  {tier.description2}
                </p>
              </div>

              <div className={tierIdx === 3 ? "space-y-8" : ""}>
                {tierIdx !== 3 && (
                  <a
                    href={tier.buttonLink}
                    aria-describedby={tier.id}
                    target={tier.external ? "_blank" : undefined}
                    rel={tier.external ? "noreferrer" : undefined}
                    className="border cursor-pointer border-black text-black mt-8 block px-3.5 py-2.5 text-center text-sm font-semibold sm:mt-10"
                  >
                    {tier.buttonText || "Get started today"}
                  </a>
                )}
                {(tier.name === "business" || tier.name === "enterprise") && (
                  <p className="text-gray-600 text-base/7 mt-8">
                    {tier.description3}
                  </p>
                )}
                <ul role="list" className="text-gray-600 space-y-3 text-sm/6 mt-8">
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
                {tierIdx === 3 && (
                  <a
                    href={tier.buttonLink}
                    aria-describedby={tier.id}
                    className="border cursor-pointer border-black text-black mt-8 block px-3.5 py-2.5 text-center text-sm font-semibold sm:mt-10"
                  >
                    {tier.buttonText || "Contact sales"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
