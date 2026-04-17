import { useInView } from "react-intersection-observer";
import { trackSectionView } from "@/utils/trackConversion";
import { useEffect } from "react";

const TESTIMONIALS = [
  {
    quote: "I only create email accounts for the operations team.",
    author: "Sandra Okonkwo",
    company: "SheCodes",
    role: "Operations Director",
    linkedin: "https://linkedin.com", // Add actual LinkedIn profile
    companyUrl: "https://shecodes.com", // Add actual company website
    photo: "/testimonials/sandra.jpg", // Add actual headshot photo
  },
  {
    quote: "We were paying $14,400/year for 200 seats. With Venmail it's under $100.",
    author: "Michael Thompson",
    company: "GrowthStack",
    role: "CTO",
    linkedin: "https://linkedin.com", // Add actual LinkedIn profile
    companyUrl: "https://growthstack.com", // Add actual company website
    photo: "/testimonials/michael.jpg", // Add actual headshot photo
  },
  {
    quote: "Our legal team needed data to stay in-country. Venmail was the only option that didn't require a custom build.",
    author: "Adaeze Okonkwo",
    company: "FinServe Nigeria",
    role: "Head of IT",
    linkedin: "https://linkedin.com", // Add actual LinkedIn profile
    companyUrl: "https://finserve.ng", // Add actual company website
    photo: "/testimonials/adaeze.jpg", // Add actual headshot photo
  },
];

const TRUST_BADGES = [
  { label: "GDPR", desc: "Compliant" },
  { label: "NDPR", desc: "Compliant" },
  { label: "DPDP", desc: "Ready" },
  { label: "SOC 2", desc: "In Progress" },
];

const METRICS = [
  { value: "Thousands", label: "Organizations" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function SocialProofNarrative() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      trackSectionView("social_proof_narrative");
    }
  }, [inView]);

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lead quote — the Sandra moment */}
        <div className="text-center mb-16">
          <blockquote className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
            &ldquo;I only create email accounts for the operations team.&rdquo;
          </blockquote>
          <div className="text-gray-500 text-lg">
            — Sandra Okonkwo, Operations Director at SheCodes
          </div>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Sound familiar? When professional email becomes a luxury, teams lose context, communication fragments, and growth slows.
          </p>
        </div>

        {/* More testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {TESTIMONIALS.slice(1).map((t, i) => (
            <div
              key={i}
              className="premium-card p-8 rounded-lg"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${0.2 + i * 0.15}s`,
              }}
            >
              <blockquote className="text-lg text-gray-900 font-medium leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {t.photo ? (
                    <img src={t.photo} alt={t.author} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-sm font-bold text-gray-600">{t.author.charAt(0)}</span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">{t.author}</div>
                  <div className="text-gray-500 text-sm">
                    {t.role}, {t.company}
                  </div>
                  <div className="flex gap-2 mt-1">
                    {t.linkedin && (
                      <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800">
                        LinkedIn
                      </a>
                    )}
                    {t.companyUrl && (
                      <a href={t.companyUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-gray-800">
                        Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
          {METRICS.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                {m.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.label}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm"
            >
              <svg
                className="w-4 h-4 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium text-gray-700">{badge.label}</span>
              <span className="text-gray-500">{badge.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
