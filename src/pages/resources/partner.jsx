import Image from "next/image";
import CustomLayout from "@/components/layout/CustomLayout";
import { FiUpload, FiUsers, FiUserCheck, FiDollarSign, FiGlobe, FiBriefcase } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi2";

export default function Partner() {
  const partnershipTypes = [
    {
      icon: <FiGlobe className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "Hosting Companies",
      text: "Add Venmail to your hosting portfolio. Offer enterprise email with AI features to your existing customers and increase ARPU.",
      benefits: ["80% commission with whitelabeling", "Seamless integration", "Dedicated support"]
    },
    {
      icon: <FiBriefcase className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "Resellers & Agencies", 
      text: "Resell Venmail to your clients or manage their email infrastructure. Perfect for IT consultants and digital agencies.",
      benefits: ["Up to 80% commissions", "White-label options", "Client management tools"]
    },
    {
      icon: <FiUsers className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "Technology Partners",
      text: "Integrate Venmail with your SaaS platform or complementary services. Expand your ecosystem with email capabilities.",
      benefits: ["API access", "Co-marketing opportunities", "Revenue sharing"]
    }
  ];

  const benefits = [
    {
      icon: <FiDollarSign className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "Earn Up to 80% Commission",
      text: "Start from 15% commissions instantly. Earn up to 80% commission with whitelabeling options."
    },
    {
      icon: <FiUserCheck className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "White-Label Solutions",
      text: "Brand Venmail as your own. Custom domains, logos, and branding options available."
    },
    {
      icon: <FiUpload className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "Easy Customer Management",
      text: "Manage all your customers from one dashboard. Handle subscriptions, billing, and support seamlessly."
    }
  ];
  return (
    <CustomLayout logoVariant="light" headerColor="#16292F" textColor={"white"}>
      <section className="bg-[#16292F]">
        <div className="grid max-w-screen-xl px-4 py-16 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
          <div className="mr-auto place-self-center md:col-span-6 text-center md:text-start">
            <p className="uppercase text-white mb-3">partner program</p>
            <h1 className="max-w-3xl mb-4 text-4xl md:text-6xl font-medium tracking-tight md:leading-[72px] text-white">
              Partner with Venmail - Earn Up to 80% Commission
            </h1>
            <p className="max-w-lg mb-5 text-white">
              Perfect for hosting companies, resellers, and agencies. Add enterprise email with AI to your portfolio and increase revenue.
            </p>
            <a
              href="https://m.venmail.io/partner/signup"
              className="md:inline-flex block cursor-pointer items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary-600 focus:ring-4 focus:ring-primary-300 "
            >
              Start earning today
            </a>
          </div>
          <div className="mt-5 lg:col-span-6 lg:flex">
            <img src="/partner/partner.png" alt="mockup" />
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perfect Partnership for Your Business
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're a hosting provider, reseller, or agency, Venmail offers the tools and commissions to grow your business.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {partnershipTypes.map((type, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">{type.icon}</div>
              <h3 className="mb-2 text-xl text-black font-semibold">{type.title}</h3>
              <p className="text-[#637074] mb-4">{type.text}</p>
              <ul className="space-y-2">
                {type.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-50 py-20 px-4 mx-auto max-w-screen-xl md:px-6">
        <div className="grid md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <div className="max-w-md">
              <h2 className="text-4xl font-medium md:text-5xl text-black md:leading-[56px]">
                Earn Up to 80% Commission
              </h2>
              <p className="text-[#637074] text-base my-5">
                Start with 15% commission instantly and scale up to 80% with whitelabeling options. No caps, no limits.
              </p>
              <a href="https://m.venmail.io/partner/signup" target="_blank" className="text-primary-600 cursor-pointer font-bold flex items-center">Become a partner <HiArrowRight className="ml-2" /></a>
            </div>
          </div>
          <div className="lg:mt-0 md:col-span-6 flex justify-end ">
            <img src="/partner/partner-1.png" alt="Partner dashboard showing commissions and earnings" className="mt-10 md:mt-0"/> 
          </div> 
        </div>
      </section>

      <section className="bg-white py-20 px-4 mx-auto max-w-screen-xl md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partnership Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to successfully sell and manage Venmail for your clients
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="mb-2 text-xl text-black font-semibold">{benefit.title}</h3>
              <p className="text-[#637074]">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-600 py-20 px-4 mx-auto max-w-screen-xl md:px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Revenue?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of hosting companies, resellers, and agencies already earning with Venmail
          </p>
          <a
            href="https://m.venmail.io/partner/signup"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-black hover:bg-gray-900 transition-colors"
          >
            Start Your Partnership Journey
          </a>
        </div>
      </section>
    </CustomLayout>
  );
}
