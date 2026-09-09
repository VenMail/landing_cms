import CustomLayout from "@/components/layout/CustomLayout";
import Testimonial from "@/components/PageSections/Testimonial";
import { useCurrency } from "@/contexts/CurrencyContext";

const ICON_MAP = {
  users: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  mail: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  chart: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  building: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  calendar: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  lock: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  document: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

const ACCENT_COLORS = {
  blue: { hero: "text-blue-400", button: "bg-blue-600 hover:bg-blue-700", badge: "bg-blue-50 text-blue-600", border: "hover:border-blue-300", link: "text-blue-600 hover:text-blue-700", highlight: "bg-blue-50 border-blue-200" },
  orange: { hero: "text-orange-400", button: "bg-orange-600 hover:bg-orange-700", badge: "bg-orange-50 text-orange-600", border: "hover:border-orange-300", link: "text-orange-600 hover:text-orange-700", highlight: "bg-orange-50 border-orange-200" },
  purple: { hero: "text-purple-400", button: "bg-purple-600 hover:bg-purple-700", badge: "bg-purple-50 text-purple-600", border: "hover:border-purple-300", link: "text-purple-600 hover:text-purple-700", highlight: "bg-purple-50 border-purple-200" },
  cyan: { hero: "text-cyan-400", button: "bg-cyan-600 hover:bg-cyan-700", badge: "bg-cyan-50 text-cyan-600", border: "hover:border-cyan-300", link: "text-cyan-600 hover:text-cyan-700", highlight: "bg-cyan-50 border-cyan-200" },
  indigo: { hero: "text-indigo-400", button: "bg-indigo-600 hover:bg-indigo-700", badge: "bg-indigo-50 text-indigo-600", border: "hover:border-indigo-300", link: "text-indigo-600 hover:text-indigo-700", highlight: "bg-indigo-50 border-indigo-200" },
  emerald: { hero: "text-emerald-400", button: "bg-emerald-600 hover:bg-emerald-700", badge: "bg-emerald-50 text-emerald-600", border: "hover:border-emerald-300", link: "text-emerald-600 hover:text-emerald-700", highlight: "bg-emerald-50 border-emerald-200" },
  amber: { hero: "text-amber-400", button: "bg-amber-600 hover:bg-amber-700", badge: "bg-amber-50 text-amber-600", border: "hover:border-amber-300", link: "text-amber-600 hover:text-amber-700", highlight: "bg-amber-50 border-amber-200" },
  rose: { hero: "text-rose-400", button: "bg-rose-600 hover:bg-rose-700", badge: "bg-rose-50 text-rose-600", border: "hover:border-rose-300", link: "text-rose-600 hover:text-rose-700", highlight: "bg-rose-50 border-rose-200" },
  lime: { hero: "text-lime-400", button: "bg-lime-600 hover:bg-lime-700", badge: "bg-lime-50 text-lime-600", border: "hover:border-lime-300", link: "text-lime-600 hover:text-lime-700", highlight: "bg-lime-50 border-lime-200" },
  teal: { hero: "text-teal-400", button: "bg-teal-600 hover:bg-teal-700", badge: "bg-teal-50 text-teal-600", border: "hover:border-teal-300", link: "text-teal-600 hover:text-teal-700", highlight: "bg-teal-50 border-teal-200" },
  sky: { hero: "text-sky-400", button: "bg-sky-600 hover:bg-sky-700", badge: "bg-sky-50 text-sky-600", border: "hover:border-sky-300", link: "text-sky-600 hover:text-sky-700", highlight: "bg-sky-50 border-sky-200" },
};

export default function SolutionPage({ solution }) {
  const { formatPrice, isLoading } = useCurrency();
  const colors = ACCENT_COLORS[solution.accentColor] || ACCENT_COLORS.blue;

  return (
    <CustomLayout logoVariant="dark" hideFooterJumbo={true}>
      {/* Hero */}
      <section className="bg-slate-900">
        <div className="max-w-screen-xl px-4 py-20 mx-auto md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 text-center md:text-left">
              <p className={`${colors.hero} font-medium mb-4`}>
                {solution.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {solution.headline}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto md:mx-0">
                {solution.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://m.venmail.io/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-colors ${colors.button}`}
                >
                  Explore plans
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-gray-600 hover:bg-gray-800 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <img
                src={solution.heroImage}
                alt={solution.headline}
                className="rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Your Workflow
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solution.capabilities.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 border border-gray-200 rounded-xl transition-colors ${colors.border}`}
              >
                <div className={`w-12 h-12 ${colors.badge} rounded-lg flex items-center justify-center mb-4`}>
                  {ICON_MAP[item.icon] || ICON_MAP.mail}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features detail */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {solution.featureSectionTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {solution.featureSectionSubtitle}
              </p>
              <ul className="space-y-3 mb-8">
                {solution.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <a
                href="https://m.venmail.io/register"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center font-medium ${colors.link}`}
              >
                Explore plans &rarr;
              </a>
            </div>
            <div className="md:col-span-6">
              <img
                src={solution.featureImage}
                alt={solution.featureSectionTitle}
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <img
                src={solution.pricingImage}
                alt={solution.pricingTitle}
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {solution.pricingTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {solution.pricingDescription}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Per-seat tools (10 users)</span>
                  <span className="text-gray-400 line-through">
                    {isLoading ? (
                      <span className="inline-block w-20 h-6 bg-gray-200 animate-pulse rounded" />
                    ) : (
                      formatPrice(solution.perSeatComparison)
                    )}
                  </span>
                </div>
                <div className={`flex items-center justify-between p-4 rounded-lg border ${colors.highlight}`}>
                  <span className="text-gray-900 font-medium">VenMail Business</span>
                  <span className={`font-bold ${colors.link.split(" ")[0]}`}>
                    {isLoading ? (
                      <span className="inline-block w-16 h-6 bg-gray-200 animate-pulse rounded" />
                    ) : (
                      formatPrice(23.2)
                    )}
                  </span>
                </div>
              </div>
              <a href="/pricing" className={`inline-flex items-center font-medium ${colors.link}`}>
                Compare pricing plans &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Try It?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Choose a paid plan for your business domain, or explore a free personal venia.cloud account.
          </p>
          <a
            href="https://m.venmail.io/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-900 bg-white hover:bg-gray-100 transition-colors rounded-lg"
          >
            Explore plans
          </a>
        </div>
      </section>

      <Testimonial />
    </CustomLayout>
  );
}
