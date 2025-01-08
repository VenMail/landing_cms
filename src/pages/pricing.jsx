import DefaultLayout from "@/components/layout/DefaultLayout";
import React from "react";
import { BsCheck2 } from "react-icons/bs";

function pricing() {
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
          </div>
          <div className="mt-16 grid grid-cols-1 items-center sm:mt-20 md:grid-cols-4 gap-y-6">
            {pricingPlans.map((tier, tierIdx) => (
              <div key={tier.id} className="h-full relative">
                {tier.featured && (
                  <div className="w-full bg-[#FEEDB2] text-[#6A5A25] flex h-12 items-center justify-center uppercase text-center relative md:absolute top-0 md:-top-12">most popular</div>
                )}
                <div
                  className={classNames(
                    " p-5 ring-1 ring-gray-900/10 h-full",
                    tier.featured ? "bg-[#FFFBEE]" : "bg-white/60"
                  )}
                >
                  <div className={tierIdx === 13 ? "space-y-3" : ""}>
                    <h3
                      id={tier.id}
                      className="text-base/7 font-semibold text-black uppercase"
                    >
                      {tier.name}
                    </h3>
                    <p className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-medium tracking-tight text-gray-900">
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

                  <div className="pb-48">
                    {tierIdx !== 13 && (
                      <a
                        href={tier.href}
                        aria-describedby={tier.id}
                        className={`${
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
                  <p className="absolute bottom-[35px] text-black text-medium text-sm">Show price comparison</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default pricing;
