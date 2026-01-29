import { LuCircleCheck, LuZap } from "react-icons/lu";

const SUB_SECTIONS = [
  {
    headline: "Your data, your servers, your control",
    description: "Self-hosted solutions, BYOS (Bring Your Own Storage), GDPR/HIPAA ready.",
    bestFor: ["Hospitals", "Law firms", "Healthcare", "Finance"],
  },
  {
    headline: "One dashboard for emails, campaigns, and contacts",
    description: "Unified dashboard, campaign management, contact management, one bill.",
    bestFor: ["Agencies", "Consultancies", "Schools", "HR teams"],
  },
  {
    headline: "Everything you need, one simple price",
    description: "Replace multiple tools, flat pricing, unlimited users.",
    bestFor: ["Startups", "SMEs", "Nonprofits"],
  },
];

const FEATURES = [
  "Turn on automatic follow-ups on emails",
  "Compose once, send many times (templated emails and snippets)",
  "Never miss meetings and tasks",
  "Read through 75 emails in 5 minutes (Power mode)",
  "Let AI help keep clients/customers engaged via campaigns (upload assets, templates, AI copy)",
  "Collaborate on documents and spreadsheets",
  "Generate and share forms with AI (payment collection included)",
  "Advanced spam protection",
  "Set calendar availability and share booking links",
  "Organize meetings smoothly with up to 25 users (transcriptions and summaries inbuilt)",
];

function BadgePills({ labels }) {
  return (
    <div className="flex flex-wrap gap-2">
      {labels.map((label) => (
        <span
          key={label}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200"
        >
          {label}
        </span>
      ))}
    </div>
  );
}

export default function BusinessesSection() {
  return (
    <section id="for-business" className="bg-gray-50 py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            For your business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            One place for email, campaigns, contacts, and collaboration — without the big-brand tax.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {SUB_SECTIONS.map((block, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{block.headline}</h3>
              <p className="text-gray-600 text-sm mb-4">{block.description}</p>
              <span className="text-xs font-medium text-gray-500 block mb-2">Best for</span>
              <BadgePills labels={block.bestFor} />
            </div>
          ))}
        </div>
        <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">What you get</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {FEATURES.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                <LuCircleCheck className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center sm:items-start">
            <a
              href="https://m.venmail.io/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-black hover:bg-gray-800 transition-colors"
            >
              Start Business Trial
            </a>
            <a
              href="#see-it-in-action"
              className="inline-flex items-center gap-2 text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              See How Venmail Helps you win
              <LuZap className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
