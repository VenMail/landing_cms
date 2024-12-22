import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

function FAQs() {
  const faqs = [
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
  ];

  // State to track the currently expanded FAQ
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="max-w-4xl px-4 py-16 sm:px-6 md:px-8 md:py-32 mx-auto">
      <div className="mb-10 lg:mb-14">
        <h2 className="text-3xl font-medium md:text-5xl md:leading-tight text-black">
          Everything you need to know
        </h2>
      </div>
      <div className="mx-auto">
        <div className="grid gap-x-6 md:gap-x-12">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border-b border-[#e8eaea] py-6">
              <button
                className="w-full text-left text-lg font-semibold text-black flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
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
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
