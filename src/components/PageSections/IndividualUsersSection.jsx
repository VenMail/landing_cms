import { LuZap, LuCircleCheck, LuSparkles, LuBolt } from "react-icons/lu";

const BEST_FOR = ["Freelancers", "Remote workers", "Solopreneurs"];
const CORE_FEATURES = [
  {
    icon: LuBolt,
    title: "Power Mode",
    description: "Read through 75 emails in 5 minutes"
  },
  {
    icon: LuSparkles,
    title: "AI Assistant",
    description: "Turn on automatic follow-ups & smart replies"
  },
  {
    icon: LuCircleCheck,
    title: "Templates",
    description: "Compose once, send many times"
  }
];
const ADDITIONAL_FEATURES = [
  "Never miss meetings and tasks",
  "Advanced spam protection",
  "Set calendar availability and share booking links",
  "Insights mode for important emails",
  "Urgent mode for time-sensitive messages"
];

export default function IndividualUsersSection() {
  return (
    <section id="for-me" className="bg-gradient-to-b from-primary-50 to-white py-20 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Email that thinks ahead, so you don&apos;t have to
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Insights, Urgent, and Power modes put AI to work so you see what matters and act faster.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {BEST_FOR.map((label) => (
              <span
                key={label}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-primary-700 border border-primary-200 shadow-sm"
              >
                Best for {label}
              </span>
            ))}
          </div>
        </div>

        {/* Core Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {CORE_FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            const imageUrl = i === 0 
              ? "/powermodeshortcuts.png" // Power Mode shortcuts screenshot (smaller, bolder)
              : i === 1 
              ? "/send_auto_follow.png" // Auto follow-up screenshot
              : "/quick_templates.png"; // Templates screenshot
            
            return (
              <div key={i} className="glass-card p-8 rounded-2xl border border-gray-100 feature-glow">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-lg mb-4">{feature.description}</p>
                <div className="cinematic-frame rounded-lg overflow-hidden">
                  <img 
                    src={imageUrl}
                    alt={`${feature.title} - Professional email productivity`}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Hero Image */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="absolute -inset-4 bg-primary-100 rounded-2xl transform rotate-1 cinematic-glow" />
          <div className="relative cinematic-vignette rounded-xl">
            <img
              src="/ai-dashboard.png"
              alt="Venmail AI Dashboard showing insights and productivity features"
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Everything you need to stay productive</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {ADDITIONAL_FEATURES.map((item) => (
              <div key={item} className="flex items-center gap-3 text-gray-700">
                <LuCircleCheck className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-1 rounded-2xl inline-block">
            <div className="bg-white p-8 md:p-12 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Take control of your inbox today
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of professionals who've reclaimed their time with Venmail
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://m.venmail.io/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-black hover:bg-gray-800 transition-colors"
                >
                  Try Venmail Free
                </a>
                <a
                  href="#see-it-in-action"
                  className="inline-flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-primary-600 transition-colors"
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
