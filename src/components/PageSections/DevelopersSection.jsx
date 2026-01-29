import { LuCircleCheck, LuZap } from "react-icons/lu";

const BEST_FOR = ["Dev teams", "Product apps", "Integrations"];
const FEATURES = [
  "Receive webhook events for delivery, opens, reads, bounces",
  "Send email via API or SMTP",
  "Developer-friendly documentation and SDKs",
];

const CODE_SNIPPET = `POST /v1/send
Content-Type: application/json

{
  "to": "user@example.com",
  "subject": "Hello",
  "body": "<p>Hello from Venmail API</p>"
}

// Webhooks: delivery, opened, read, bounced
X-Venmail-Event: email.delivered`;

export default function DevelopersSection() {
  return (
    <section id="for-developers" className="bg-white py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Email infrastructure that scales with your code
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Send via API or SMTP. Get webhooks for delivery, opens, reads, and bounces. No lock-in.
            </p>
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-500 block mb-2">Best for</span>
              <div className="flex flex-wrap gap-2">
                {BEST_FOR.map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200"
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
                href="https://github.com/VenMail"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-black hover:bg-gray-800 transition-colors"
              >
                View API Docs
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
          <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300 font-mono whitespace-pre">
              {CODE_SNIPPET}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
