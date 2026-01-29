import { useState } from "react";
import { LuCircleCheck, LuZap, LuCode, LuWebhook, LuSend } from "react-icons/lu";

const BEST_FOR = ["Dev teams", "Product apps", "Integrations"];

const API_FEATURES = [
  {
    icon: LuSend,
    title: "Send Email",
    description: "Via REST API or SMTP",
    code: "POST /v1/send"
  },
  {
    icon: LuWebhook,
    title: "Real-time Webhooks",
    description: "Delivery, opens, reads, bounces",
    code: "POST /webhooks/email-events"
  },
  {
    icon: LuCode,
    title: "Developer-First",
    description: "Clean docs, SDKs, no lock-in",
    code: "npm install @venmail/api"
  }
];

const CODE_EXAMPLES = [
  {
    language: "curl",
    code: `curl -X POST https://api.venmail.io/v1/send \\
  -H "Authorization: Bearer vm_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "user@example.com",
    "subject": "Welcome to Venmail!",
    "html": "<p>Thanks for joining us!</p>"
  }'`
  },
  {
    language: "javascript",
    code: `import Venmail from '@venmail/api';

const client = new Venmail('vm_live_...');

await client.send({
  to: 'user@example.com',
  subject: 'Welcome to Venmail!',
  html: '<p>Thanks for joining us!</p>'
});`
  },
  {
    language: "webhook",
    code: `// Webhook payload received
{
  "event": "email.delivered",
  "timestamp": "2025-01-29T10:00:00Z",
  "email_id": "msg_123456",
  "recipient": "user@example.com",
  "status": "delivered"
}`
  }
];

export default function DevelopersSection() {
  const [activeCodeTab, setActiveCodeTab] = useState(0);

  return (
    <section id="for-developers" className="bg-gradient-to-b from-green-50 to-white py-20 lg:py-24 scroll-mt-20 relative overflow-hidden">
      {/* Cinematic backdrop overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 via-transparent to-emerald-100/20 backdrop-blur-[100px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1)_0%,transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Email infrastructure that scales with your code
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Send via API or SMTP. Get webhooks for delivery, opens, reads, and bounces. Zero tolerance for spam.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {BEST_FOR.map((label) => (
              <span
                key={label}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-green-700 border border-green-200 shadow-sm"
              >
                Best for {label}
              </span>
            ))}
          </div>
        </div>

        {/* API Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {API_FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="glass-card p-8 rounded-2xl border border-gray-100 feature-glow relative overflow-hidden">
                {/* Subtle animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-emerald-50/50 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-lg mb-4">{feature.description}</p>
                <code className="block bg-gray-900 text-green-400 px-3 py-2 rounded-lg text-sm font-mono">
                  {feature.code}
                </code>
              </div>
            );
          })}
        </div>

        {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="absolute -inset-4 bg-green-100 rounded-2xl transform rotate-1 cinematic-glow" />
            <div className="relative cinematic-vignette rounded-xl overflow-hidden">
              <img
                src="/stock-images/dual-monitor-workspace.jpg"
                alt="Professional developer workspace with dual monitors and clean setup"
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>

        {/* Code Examples */}
        <div className="cinematic-frame bg-gray-900 rounded-2xl p-8 mb-12 relative overflow-hidden">
          {/* Subtle animated grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="flex flex-wrap gap-2 mb-6">
            {CODE_EXAMPLES.map((example, i) => (
              <button
                key={i}
                onClick={() => setActiveCodeTab(i)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCodeTab === i
                    ? "bg-green-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {example.language}
              </button>
            ))}
          </div>
          <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
            <code>{CODE_EXAMPLES[activeCodeTab].code}</code>
          </pre>
        </div>

        {/* Additional Features */}
        <div className="glass-card p-8 md:p-12 rounded-2xl border border-gray-100 shadow-lg mb-12 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-emerald-50/30" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Built for developers</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "RESTful API design",
              "SMTP relay support",
              "Real-time webhooks",
              "SDKs for popular languages",
              "Comprehensive documentation",
              "99.9% uptime SLA",
              "GDPR compliant",
              "No vendor lock-in",
              "Instant API keys"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-gray-700">
                <LuCircleCheck className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-1 rounded-2xl inline-block">
            <div className="bg-white p-8 md:p-12 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Start building with Venmail API
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Get your API key in seconds and start sending emails immediately
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://github.com/VenMail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-black hover:bg-gray-800 transition-colors"
                >
                  View API Docs
                </a>
                <a
                  href="#see-it-in-action"
                  className="inline-flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                >
                  See How Venmail Helps you win
                  <LuZap className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
