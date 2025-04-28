import React from "react";
import { BsCheck2 } from "react-icons/bs";
export default function Pricing() {
  const pricingPlans = [
    {
      name: "solo founder",
      monthly: 0,
      yearly: 0,
      description1: "perfect for solo founders",
      description2: "only one person included",
      features: [
        "secure email hosting",
        "5GB total storage",
        "advanced spam protection",
        "smart email labelling",
        "auto contact synchronization",
      ],
      buttonText: "Get Started",
      buttonLink: "https://m.venmail.io/register",
    },
    {
      name: "start up",
      monthly: 4.55,
      yearly: 0,
      description1: "Essential tools for small teams",
      description2: "10 team members included",
      features: [
        "Secure business mails@yourdomain.com",
        "10GB storage per user",
        "advanced spam protection",
        "20 daily AI email rewrites/user",
        "10 daily prospect generations",
      ],
      buttonText: "Get Started",
      buttonLink: "https://m.venmail.io/register",
    },
    {
      name: "business",
      monthly: 23.5,
      yearly: 0,
      description1: "Premium email suite for SMEs",
      description2: "25 team members included",
      description3: "Everything in Start Up, and:",
      features: [
        "AI summarisation",
        "15GB storage per user (375GB total)",
        "Advanced spam protection",
        "50 daily prospect generations",
        "50 daily AI email rewrites/user",
      ],
      buttonText: "Get Started",
      buttonLink: "https://m.venmail.io/register",
    },
    {
      name: "enterprise",
      monthly: 95,
      yearly: 0,
      description1: "Tailored plans for larger companies",
      description2: "100 team members included",
      description3: "Everything in Business, and:",
      features: [
        "Dedicated account manager",
        "25GB storage per user (2.5TB total)",
        "advanced spam protection",
        "200 daily prospect generations",
        "100 daily AI email rewrites/user",
      ],
      buttonText: "Contact Sales",
      buttonLink: "/contact-us",
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
          One flat rate per team. Save up to 92% vs Gmail.
          </p>
          <a href="/pricing" className="py-3 my-5 px-8 border border-black text-black w-full md:w-auto">See all benefits</a>

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
                    target="_blank"
                    className="border cursor-pointer border-black text-black mt-8 block px-3.5 py-2.5 text-center text-sm font-semibold sm:mt-10"
                  >
                    Get started today
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
                    Contact sales
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
