import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

function FAQs() {
  const faqs = [
    {
      question: "Do paid plans include unlimited users?",
      answer: "Yes — every paid plan includes unlimited users. Choose a plan by storage (60GB, 250GB, or 1.5TB) and features; you never pay per seat.",
    },
    {
      question: "What's the catch with the pricing?",
      answer: "Business plans have no per-seat fee. Choose storage, features, billing period, and an available hosting region. Region can change the price. Custom Storage is a separate plan, and your storage provider bills separately. Confirm the final amount in checkout.",
    },
    {
      question: "Will my team need training?",
      answer: "If you've used Gmail, you'll feel at home. We kept the interface familiar and clean. The AI features work in the background - they help without getting in the way. Most teams don't need any formal training.",
    },
    {
      question: "How reliable is the service?",
      answer: "Check our service status and discuss your uptime, migration, support, and security requirements with our team. A free personal venia.cloud account and the 14-day individual demo are separate from paid custom-domain business plans.",
    },
    {
      question: "How does Venmail make email work better?",
      answer: "Venmail provides a robust fast and smart email experience allowing you to open, read mails faster and take action on them quickly, initate auto follow-ups, see who has opened/read your emails, schedule meetings/tasks easily et cetera. You'll simply notice work getting done faster.",
    },
    {
      question: "How does your AI actually help?",
      answer: "AI can summarize content, extract action items, and identify dates for scheduling. Email analysis uses server-side processing and may send message content and extracted attachment text to Groq. Review the original message before relying on AI output; see our Privacy Policy for processing details."
    },
    {
      question: "Is Venmail open source?",
      answer: "Partly... Our worksuite (Alternative to Google Drive, Documents, Spreadsheets, Forms, Slides: <a href='https://venia.cloud' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline'>https://venia.cloud</a>) is proudly open source under the MIT license. Many Venmail packages are open source - you can explore them at <a href='https://github.com/VenMail' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline'>https://github.com/VenMail</a>. We actively participate in and contribute to the open source community, believing in transparent, collaborative development."
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
                <p 
                  className="mt-2 text-sm text-gray-600"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* AI Chat Suggestion Section */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ask our team about current features, pricing, migration, and your data processing requirements.
          </p>
<a href="/contact-us" className="inline-flex items-center bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium">Talk to our team</a>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
