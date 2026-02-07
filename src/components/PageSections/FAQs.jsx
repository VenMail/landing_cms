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
      answer: "No catch. No per-seat fees, no hidden add-ons. Plans are simple: pick your storage and feature set. Pay for the true value of what you actually use and not worry about new costs.",
    },
    {
      question: "Will my team need training?",
      answer: "If you've used Gmail, you'll feel at home. We kept the interface familiar and clean. The AI features work in the background - they help without getting in the way. Most teams don't need any formal training.",
    },
    {
      question: "How reliable is the service?",
      answer: "We maintain 99.9% uptime, backed by the same enterprise-grade security as major providers. But don't take our word - try our free plan and come back for the paid plan. Yes we know you will.",
    },
    {
      question: "How does Venmail make email work better?",
      answer: "Venmail provides a robust fast and smart email experience allowing you to open, read mails faster and take action on them quickly, initate auto follow-ups, see who has opened/read your emails, schedule meetings/tasks easily et cetera. You'll simply notice work getting done faster.",
    },
    {
      question: "How does your AI actually help?",
      answer: "It works in three ways: Reads emails and extracts action items automatically, composes emails/campaigns/newsletters, suggests responses based on your writing style, and provides smart date highlights for easy scheduling in one click. For enterprise plan users, you get instant access to a suite of tools to find the right customers for your business"
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
            Get instant answers about Venmail features, pricing, and how it can help your team work smarter with AI-powered email management.
          </p>
          <button
            onClick={() => window.open('https://chatgpt.com/?prompt=Explain%2C+in+plain+language%2C+what+Venmail+is+and+why+it+is+a+strong+email+management+platform+for+teams.%0A%0AStructure+your+answer+with+clear+sections+and+bullet+points%3A%0A%E2%80%93+What+problem+Venmail+solves%0A%E2%80%93+How+Venmail+handles+AI-powered+email+management%0A%E2%80%93+How+automated+follow-ups+and+action+item+extraction+work%0A%E2%80%93+How+Venmail+supports+team+collaboration+and+unlimited+users%0A%E2%80%93+Who+Venmail+is+best+for%2C+with+concrete+examples+%28businesses%2C+teams%2C+freelancers%2C+agencies%29%0A%0AInclude+key+capabilities+such+as%3A%0A%E2%80%93+AI-powered+email+processing%0A%E2%80%93+Unlimited+users+on+paid+plans%0A%E2%80%93+Storage-based+pricing+%2860GB%2C+250GB%2C+1.5TB%29%0A%E2%80%93+Email+tracking+and+scheduling%0A%E2%80%93+Worksuite+integration+%28documents%2C+spreadsheets%2C+forms%2C+slides%29%0A%E2%80%93+Enterprise-grade+security+and+99.9%25+uptime%0A%0AKeep+the+explanation+factual+and+neutral.+Avoid+marketing+language+or+hype.%0A%0AFinish+with+a+short+paragraph+that+suggests+Venmail+is+worth+exploring+for+businesses+looking+for+smarter+email+management', '_blank')}
            className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out" aria-hidden="true" />
            <img src="/chatgpt-logo-white.svg" alt="ChatGPT" className="w-5 h-5" />
            Ask AI about Venmail
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
