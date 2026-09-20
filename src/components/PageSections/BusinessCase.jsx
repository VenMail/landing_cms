import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { useCurrency } from "@/contexts/CurrencyContext";
import { trackSectionView } from "@/utils/trackConversion";
import { getRecommendedOffer } from "@/config/pricing.mjs";

const STATS = [
  {
    value: 1,
    prefix: "$",
    suffix: "",
    label: "Starting monthly price",
    description: "Five email accounts included",
  },
];

const PROVIDERS = [
  { key: "google", name: "$6/seat example", perUser: 6 },
  { key: "microsoft", name: "$8/seat example", perUser: 8 },
  { key: "zoho", name: "$3/seat example", perUser: 3 },
];

export default function BusinessCase() {
  const [users, setUsers] = useState(50);
  const { formatPrice, isLoading } = useCurrency();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      trackSectionView("business_case");
    }
  }, [inView]);

  const recommendation = getRecommendedOffer(users);

  function fmt(n) {
    return isLoading ? `$${n.toFixed(2)}` : formatPrice(n);
  }

  return (
    <section ref={ref} className="section-padding" style={{ background: "#FAFAFA" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Compare illustrative email costs
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Standard starts at $1/month. Business is $20/month with unlimited email accounts and 200 GB pooled storage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Stats */}
          <div className="grid gap-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="premium-card p-6 rounded-lg text-center"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(12px)",
                  transition: `all 0.4s ease ${i * 0.1}s`,
                }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {inView ? (
                    <>
                      {stat.prefix}
                      <CountUp
                        end={stat.value}
                        duration={2}
                        decimals={stat.decimals || 0}
                      />
                      {stat.suffix}
                    </>
                  ) : (
                    <span>{stat.prefix}{stat.value}{stat.suffix}</span>
                  )}
                </div>
                <div className="font-semibold text-gray-700 text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Right: Cost comparison slider */}
          <div className="premium-card p-8 rounded-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">
                Cost comparison
              </h3>
              <div className="text-sm text-gray-500">
                {users} {users === 1 ? "user" : "users"}
              </div>
            </div>

            <input
              type="range"
              min="1"
              max="200"
              value={users}
              onChange={(e) => setUsers(parseInt(e.target.value))}
              className="w-full mb-8 appearance-none cursor-pointer h-1.5 bg-gray-200 rounded-full
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:w-5
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-gray-900
                [&::-webkit-slider-thumb]:cursor-pointer"
            />

            <div className="space-y-3">
              {/* Venmail */}
              <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    Venmail
                  </div>
                  <div className="text-xs text-gray-500">
                    {recommendation.plan === "standard"
                      ? "Standard · five accounts included, then $1 per additional account"
                      : "Business · unlimited accounts and 200 GB pooled storage"}
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-700">
                  {fmt(recommendation.amount)}<span className="text-sm font-normal text-green-600">/mo</span>
                </div>
              </div>

              {/* Competitors */}
              {PROVIDERS.map((p) => (
                <div
                  key={p.key}
                  className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg"
                >
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {p.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {fmt(p.perUser)}/user example
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {fmt(p.perUser * users)}<span className="text-sm font-normal text-gray-500">/mo</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/pricing"
              className="block text-center mt-6 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              See full pricing details &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
