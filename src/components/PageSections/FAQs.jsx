import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

function FAQs() {
  const faqs = [
    {
      question: "Is it really just $5 total for 10 users?",
      answer: "$4.5 actually. You pay $4.5/month for 10 users, not per user. Some providers would charge you $63 for the same team size. We believe email shouldn't cost more just because your team grows.",
    },
    {
      question: "What's the catch with the pricing?",
      answer: "No catch. No hidden fees. No sudden price jumps. You get all features, including AI assistance, at the advertised price. We keep costs low by running lean and focusing on what matters: making email work better for teams.",
    },
    {
      question: "Will my team need training?",
      answer: "If you've used Gmail, you'll feel at home. We kept the interface familiar and clean. The AI features work in the background - they help without getting in the way. Most teams don't need any formal training.",
    },
    {
      question: "How reliable is the service?",
      answer: "We maintain 99.9% uptime, backed by the same enterprise-grade security as major providers. But don't take our word - try it free for 30 days. If anything doesn't work as promised, cancel instantly. No questions asked.",
    },
    {
      question: "How does Venmail make email work better?",
      answer: "Venmail provides a robust smart email experience allowing you to open, read mails faster and take action on them via email summaries and instant task and meeting scheduling. You'll just notice work getting done faster.",
    },
    {
      question: "How does your AI actually help?",
      answer: "It works in three ways: Reads emails and extracts action items automatically, Suggests responses based on your writing style, Schedules meetings and follow-ups without you asking But it's subtle - you won't see 'AI' plastered everywhere. You'll just notice work getting done faster."
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
          Questions you're probably asking
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
                <p className="mt-2 text-sm text-gray-600">
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
