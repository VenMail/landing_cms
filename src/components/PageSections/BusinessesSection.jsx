import { LuCircleCheck, LuZap, LuShield, LuRocket, LuDollarSign } from "react-icons/lu";

const BUSINESS_NICHES = [
  {
    icon: LuShield,
    title: "Privacy-First",
    headline: "Your data, your servers, your control",
    description: "Self-hosted solutions, BYOS (Bring Your Own Storage), GDPR/HIPAA ready.",
    bestFor: ["Hospitals", "Law firms", "Healthcare", "Finance"],
    gradient: "from-blue-50 to-indigo-100"
  },
  {
    icon: LuRocket,
    title: "Fast Growing",
    headline: "One dashboard for emails, campaigns, and contacts",
    description: "Unified dashboard, campaign management, contact management, one bill.",
    bestFor: ["Agencies", "Consultancies", "Schools", "HR teams"],
    gradient: "from-purple-50 to-pink-100"
  },
  {
    icon: LuDollarSign,
    title: "Budget-Conscious",
    headline: "Everything you need, one simple price",
    description: "Replace multiple tools, flat pricing, unlimited users.",
    bestFor: ["Startups", "SMEs", "Nonprofits"],
    gradient: "from-green-50 to-emerald-100"
  }
];

const CORE_FEATURES = [
  "Turn on automatic follow-ups on emails",
  "Compose once, send many times (templated emails and snippets)",
  "Read through 75 emails in 5 minutes (Power mode)",
  "Let AI help keep clients/customers engaged via campaigns",
  "Collaborate on documents and spreadsheets",
  "Generate and share forms with AI (payment collection included)",
  "Advanced spam protection",
  "Set calendar availability and share booking links",
  "Organize meetings smoothly with up to 25 users"
];

function BadgePills({ labels }) {
  return (
    <div className="flex flex-wrap gap-2">
      {labels.map((label) => (
        <span
          key={label}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/80 text-gray-700 border border-gray-200 backdrop-blur-sm"
        >
          {label}
        </span>
      ))}
    </div>
  );
}

export default function BusinessesSection() {
  return (
    <section id="for-business" className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            For your business
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            One place for email, campaigns, contacts, and collaboration — without the big-brand tax.
          </p>
        </div>
        
        {/* Business Niches Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {BUSINESS_NICHES.map((niche, i) => {
            const Icon = niche.icon;
            const imageUrl = i === 0 
              ? "/stock-images/data-center-servers.jpg" // Data center for privacy
              : i === 1 
              ? "/stock-images/business-team-collaboration.jpg" // Team collaboration
              : "/stock-images/modern-office-workspace.jpg"; // Modern office for budget
            
            return (
              <div
                key={i}
                className={`glass-card bg-gradient-to-br ${niche.gradient} p-8 rounded-2xl border border-gray-200 feature-glow`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{niche.title}</span>
                </div>
                <div className="cinematic-frame rounded-lg overflow-hidden mb-6">
                  <img 
                    src={imageUrl}
                    alt={`${niche.title} business solution`}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{niche.headline}</h3>
                <p className="text-gray-700 mb-6 text-lg">{niche.description}</p>
                <div>
                  <span className="text-sm font-medium text-gray-600 block mb-2">Best for</span>
                  <BadgePills labels={niche.bestFor} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Hero Image */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform rotate-1 cinematic-glow" />
          <div className="relative cinematic-vignette rounded-xl">
            <img
              src="/campaign_composer.png"
              alt="Venmail campaign composer and business collaboration tools"
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>
        </div>

        {/* Core Features */}
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-lg mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">What you get</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CORE_FEATURES.map((item) => (
              <div key={item} className="flex items-start gap-3 text-gray-700">
                <LuCircleCheck className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-2xl inline-block">
            <div className="bg-white p-8 md:p-12 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Transform your business communication
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of businesses that cut costs by 60–90% with Venmail
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://m.venmail.io/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-black hover:bg-gray-800 transition-colors"
                >
                  Start Business Trial
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
