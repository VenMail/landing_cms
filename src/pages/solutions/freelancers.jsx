import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import CustomLayout from "@/components/layout/CustomLayout";
import SolutionJumbotron from "@/components/PageSections/SolutionJumbotron";
import Testimonial from "@/components/PageSections/Testimonial";


export default function Faqs() {
  // State to track the currently expanded FAQ
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <CustomLayout logoVariant="dark" headerColor="#FEF3CB" textColor={"black"} hideFooterJumbo={true}>
      <section className="bg-[#FEF3CB]">
        <div className="grid max-w-screen-xl px-4 py-16 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
          <div className="mr-auto place-self-center md:col-span-6 text-center md:text-start">
            <h1 className="max-w-3xl mb-4 text-4xl md:text-6xl font-medium tracking-tight md:leading-[72px] text-black">
              Work smarter, Respond faster
            </h1>
            <p className="max-w-lg mb-5 text-black">
              Say goodbye to the hassle of manual prospecting and let Venmail
              help you focus on what matters
            </p>
            <a
              href="#"
              className="md:inline-flex block items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary-600 focus:ring-4 focus:ring-primary-300 mr-0 md:mr-4"
            >
              Get started
            </a>
            <a
              href="/pricing"
              className="md:inline-flex block items-center justify-center px-5 py-3 mb-4 md:mr-3 text-base font-medium text-center text-black border border-black hover:bg-gray-100 focus:ring-4 focus:ring-gray-100   "
            >
              Compare Pricing
            </a>
          </div>
          <div className="mt-5 lg:col-span-6 lg:flex">
            <img src="/solutions/freelancers/section-1.png" alt="mockup" />
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-4 mx-auto max-w-screen-xl md:px-6">
        <div className="grid md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <div className="max-w-md">
              <h2 className="text-4xl font-medium md:text-5xl text-black md:leading-[56px]">
                Build targeted lists of your ideal clients
              </h2>
              <p className="text-[#637074] text-base my-5">
                Venmail harnesses the power of artificial intelligence to
                streamline your workflows, save valuable time, and maximize
                results.
              </p>
              <a
                href=""
                className="text-primary-500 font-bold flex items-center"
              >
                Sign up for free
              </a>
            </div>
          </div>
          <div className="lg:mt-0 md:col-span-6 flex justify-end ">
            <img
              src="/partner/partner-1.png"
              alt="mockup"
              className="mt-10 md:mt-0"
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-10 px-4 mx-auto max-w-screen-xl md:px-6">
        <div className="grid md:grid-cols-12 items-center">
          <div className="lg:mt-0 md:col-span-6 flex order-12 md:order-1">
            <img
              src="/partner/partner-2.png"
              alt="mockup"
              className="mt-10 md:mt-0"
            />
          </div>
          <div className="md:col-span-6 flex justify-end order-1 md:order-12">
            <div className="max-w-lg">
              <h2 className="text-4xl font-medium md:text-5xl text-black md:leading-[56px]">
                Deliver personalized outreach that works faster
              </h2>
              <p className="text-[#637074] text-base my-5">
                Venmail harnesses the power of artificial intelligence to
                streamline your workflows, save valuable time, and maximize
                results.
              </p>
              <a
                href=""
                className="text-primary-500 font-bold flex items-center"
              >
                Sign up for free
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 md:py-24 px-4 mx-auto max-w-screen-xl md:px-6">
        <SolutionJumbotron
          subheading={"venmail for founders"}
          title={"Founder-led sales with AI rewrites and more"}
          text={
            "Whether you're looking to expand your customer base, drive conversions, or build meaningful relationships, we ensure every lead is tailored to your goals. Say goodbye to guesswork and hello to results-driven prospecting!"
          }
        ></SolutionJumbotron>
      </section>
      <Testimonial />
    </CustomLayout>
  );
}
