import { LuZap, LuCircleCheck } from "react-icons/lu";

const BEST_FOR = ["Freelancers", "Remote workers", "Solopreneurs"];
const FEATURES = [
  "Turn on automatic follow-ups on your emails",
  "Compose once, send many times (templated emails and snippets)",
  "Never miss meetings and tasks",
  "Read through 75 emails in 5 minutes (Power mode)",
  "Advanced spam protection",
  "Set calendar availability and share booking links",
];

export default function IndividualUsersSection() {
  return (
    <section id="for-me" className="bg-white py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Email that thinks ahead, so you don&apos;t have to
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Insights, Urgent, and Power modes put AI to work so you see what matters and act faster.
            </p>
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-500 block mb-2">Best for</span>
              <div className="flex flex-wrap gap-2">
                {BEST_FOR.map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700 border border-primary-100"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <LuCircleCheck className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <a
                href="https://m.venmail.io/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-black hover:bg-gray-800 transition-colors"
              >
                Try Venmail Free
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
          <div className="relative">
            <div className="absolute -inset-4 bg-primary-100/50 rounded-2xl transform rotate-1" />
            <img
              src="/home/section-1.png"
              alt="Venmail AI-first email: Insights, Urgent, Power modes"
              className="relative rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
