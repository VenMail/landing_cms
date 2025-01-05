import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import CustomLayout from "@/components/layout/CustomLayout";

export default function Faqs() {
  const faqs = [
    {
      group: "General",
      content: [
        {
          question: "What is Venmail?",
          answer: "",
        },
        {
          question: "Does venmail integrate with other tools?",
          answer: "",
        },
        {
          question: "How secure is venmail?",
          answer: "",
        },
        {
          question: "Is venmail easy to setup?",
          answer: "",
        },
        {
          question: "How does venmail improve productivity?",
          answer: "",
        },
      ],
    },
    {
      group: "Product",
      content: [
        {
          question: "What is Venmail?",
          answer: "",
        },
        {
          question: "Does venmail integrate with other tools?",
          answer: "",
        },
        {
          question: "How secure is venmail?",
          answer: "",
        },
        {
          question: "Is venmail easy to setup?",
          answer: "",
        },
        {
          question: "How does venmail improve productivity?",
          answer: "",
        },
      ],
    },
    {
      group: "Partnership",
      content: [
        {
          question: "What is Venmail?",
          answer: "",
        },
        {
          question: "Does venmail integrate with other tools?",
          answer: "",
        },
        {
          question: "How secure is venmail?",
          answer: "",
        },
        {
          question: "Is venmail easy to setup?",
          answer: "",
        },
        {
          question: "How does venmail improve productivity?",
          answer: "",
        },
      ],
    },
    {
      group: "Billing",
      content: [
        {
          question: "What is Venmail?",
          answer: "",
        },
        {
          question: "Does venmail integrate with other tools?",
          answer: "",
        },
        {
          question: "How secure is venmail?",
          answer: "",
        },
        {
          question: "Is venmail easy to setup?",
          answer: "",
        },
        {
          question: "How does venmail improve productivity?",
          answer: "",
        },
      ],
    },
  ];

  // State to track the currently expanded FAQ
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <CustomLayout logoVariant="dark" headerColor="#FFEFEB" textColor={"black"}>
      <section className="bg-[#FFEFEB]">
        <div className="grid max-w-screen-xl px-4 py-16 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
          <div className="mr-auto place-self-center md:col-span-6 text-center md:text-start">
            <h1 className="max-w-3xl mb-4 text-4xl md:text-6xl font-medium tracking-tight md:leading-[72px] text-black">
              Frequently Asked Questions
            </h1>
            <p className="max-w-lg mb-5 text-black">
              We're here to answer any questions you have. Please do not
              hesitate to <span className="text-primary-600">contact us</span>.
              Our team is available and happy to assist. Email Address:
              hey@venmail.com
            </p>
            <a
              href="#"
              className="md:inline-flex block items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary-600 focus:ring-4 focus:ring-primary-300 "
            >
              Get started
            </a>
          </div>
          <div className="mt-5 lg:col-span-6 lg:flex">
            <img src="/faq.png" alt="mockup" />
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-4 mx-auto max-w-screen-xl md:px-6">
        <div className="grid gap-16 md:grid-cols-12 items-center">
          {faqs.map((faq, index) => (
            <div key={index} className="md:col-span-6">
              <h2 className="text-black text-2xl font-semibold">{faq.group}</h2>
              {faq.content.map((q, i) => (
                
                <div
                  key={i}
                  className="border-b border-[#e8eaea] py-6"
                >
                  <button
                    className="w-full text-left text-lg font-semibold text-black flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    {q.question}
                    <span
                      className={`ml-2 text-sm transition-transform ${
                        openIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <FaChevronDown />
                    </span>
                  </button>
                  {openIndex === index && (
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {q.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </CustomLayout>
  );
}
