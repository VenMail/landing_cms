import React from 'react';
import ProductLayout from '@/components/layout/ProductLayout';
import ProductHero from '@/components/PageSections/ProductHero';
import {
  ShieldCheckIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

/* ─── Inline SVG illustrations ─────────────────────────────────────────── */

function IllustrationPopup() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: "8px" }}>
      <rect width="320" height="200" fill="#fff8f6" rx="8"/>
      {/* Popup window */}
      <rect x="60" y="16" width="200" height="168" rx="10" fill="white" stroke="#fde0d8" strokeWidth="1.5"/>
      {/* Header bar */}
      <rect x="60" y="16" width="200" height="36" rx="10" fill="#FF5C39"/>
      <rect x="60" y="36" width="200" height="16" fill="#FF5C39"/>
      <circle cx="80" cy="34" r="5" fill="rgba(255,255,255,0.4)"/>
      <text x="92" y="38" fontSize="11" fontWeight="600" fill="white" fontFamily="system-ui">Venmail Agent</text>
      {/* Search bar */}
      <rect x="72" y="62" width="176" height="28" rx="6" fill="#f9f5f4" stroke="#fde0d8" strokeWidth="1"/>
      <circle cx="87" cy="76" r="5" stroke="#FF5C39" strokeWidth="1.5"/>
      <line x1="91" y1="80" x2="94" y2="83" stroke="#FF5C39" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="100" y="70" width="100" height="12" rx="3" fill="#e8e0de"/>
      {/* Result card */}
      <rect x="72" y="100" width="176" height="72" rx="8" fill="#fff8f6" stroke="#fde0d8" strokeWidth="1"/>
      {/* Avatar */}
      <circle cx="92" cy="122" r="14" fill="#fde0d8"/>
      <circle cx="92" cy="118" r="5" fill="#FF5C39" opacity="0.7"/>
      <path d="M82 132 Q92 127 102 132" stroke="#FF5C39" strokeWidth="1.5" fill="none" opacity="0.7"/>
      {/* Name & email */}
      <rect x="112" y="113" width="80" height="8" rx="2" fill="#374151"/>
      <rect x="112" y="126" width="100" height="6" rx="2" fill="#9ca3af"/>
      {/* Trust badge */}
      <rect x="112" y="140" width="44" height="18" rx="9" fill="#dcfce7" stroke="#86efac" strokeWidth="1"/>
      <circle cx="122" cy="149" r="3" fill="#22c55e"/>
      <rect x="128" y="145" width="22" height="8" rx="2" fill="#22c55e" opacity="0.6"/>
    </svg>
  );
}

function IllustrationDashboard() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: "8px" }}>
      <rect width="320" height="200" fill="#fff8f6" rx="8"/>
      {/* Window chrome */}
      <rect x="20" y="16" width="280" height="168" rx="8" fill="white" stroke="#fde0d8" strokeWidth="1.5"/>
      <rect x="20" y="16" width="280" height="32" rx="8" fill="#f9f5f4" stroke="#fde0d8" strokeWidth="1.5"/>
      <rect x="20" y="32" width="280" height="16" fill="#f9f5f4"/>
      <circle cx="36" cy="32" r="5" fill="#fca5a5"/>
      <circle cx="52" cy="32" r="5" fill="#fcd34d"/>
      <circle cx="68" cy="32" r="5" fill="#86efac"/>
      {/* Table header */}
      <rect x="20" y="48" width="280" height="22" fill="#fff1ee"/>
      <text x="32" y="63" fontSize="9" fontWeight="700" fill="#9ca3af" fontFamily="system-ui" letterSpacing="0.05em">EMAIL</text>
      <text x="140" y="63" fontSize="9" fontWeight="700" fill="#9ca3af" fontFamily="system-ui" letterSpacing="0.05em">NAME</text>
      <text x="220" y="63" fontSize="9" fontWeight="700" fill="#9ca3af" fontFamily="system-ui" letterSpacing="0.05em">TRUST</text>
      <text x="268" y="63" fontSize="9" fontWeight="700" fill="#9ca3af" fontFamily="system-ui" letterSpacing="0.05em">AGE</text>
      {/* Row 1 */}
      <rect x="20" y="70" width="280" height="26" fill="white"/>
      <rect x="32" y="78" width="90" height="8" rx="2" fill="#374151"/>
      <rect x="140" y="78" width="60" height="8" rx="2" fill="#374151"/>
      <rect x="220" y="74" width="30" height="16" rx="8" fill="#dcfce7"/>
      <text x="225" y="85" fontSize="8" fontWeight="700" fill="#16a34a" fontFamily="system-ui">94</text>
      <rect x="262" y="78" width="22" height="8" rx="2" fill="#e5e7eb"/>
      {/* Row 2 */}
      <rect x="20" y="96" width="280" height="26" fill="#fafafa"/>
      <rect x="32" y="104" width="76" height="8" rx="2" fill="#374151"/>
      <rect x="140" y="104" width="50" height="8" rx="2" fill="#374151"/>
      <rect x="220" y="100" width="30" height="16" rx="8" fill="#fef9c3"/>
      <text x="225" y="111" fontSize="8" fontWeight="700" fill="#ca8a04" fontFamily="system-ui">71</text>
      <rect x="262" y="104" width="22" height="8" rx="2" fill="#e5e7eb"/>
      {/* Row 3 */}
      <rect x="20" y="122" width="280" height="26" fill="white"/>
      <rect x="32" y="130" width="84" height="8" rx="2" fill="#374151"/>
      <rect x="140" y="130" width="56" height="8" rx="2" fill="#374151"/>
      <rect x="220" y="126" width="30" height="16" rx="8" fill="#dcfce7"/>
      <text x="225" y="137" fontSize="8" fontWeight="700" fill="#16a34a" fontFamily="system-ui">88</text>
      <rect x="262" y="130" width="22" height="8" rx="2" fill="#e5e7eb"/>
      {/* Row 4 */}
      <rect x="20" y="148" width="280" height="26" fill="#fafafa"/>
      <rect x="32" y="156" width="70" height="8" rx="2" fill="#d1d5db"/>
      <rect x="140" y="156" width="44" height="8" rx="2" fill="#d1d5db"/>
      <rect x="220" y="152" width="30" height="16" rx="8" fill="#fee2e2"/>
      <text x="225" y="163" fontSize="8" fontWeight="700" fill="#dc2626" fontFamily="system-ui">32</text>
      <rect x="262" y="156" width="22" height="8" rx="2" fill="#e5e7eb"/>
    </svg>
  );
}

function IllustrationHistory() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: "8px" }}>
      <rect width="320" height="200" fill="#fff8f6" rx="8"/>
      <rect x="20" y="16" width="280" height="168" rx="8" fill="white" stroke="#fde0d8" strokeWidth="1.5"/>
      {/* Search bar */}
      <rect x="30" y="26" width="200" height="26" rx="6" fill="#f9f5f4" stroke="#fde0d8" strokeWidth="1"/>
      <circle cx="45" cy="39" r="5" stroke="#FF5C39" strokeWidth="1.5"/>
      <line x1="49" y1="43" x2="52" y2="46" stroke="#FF5C39" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="58" y="34" width="80" height="10" rx="2" fill="#e8e0de"/>
      <rect x="240" y="26" width="50" height="26" rx="6" fill="#FF5C39"/>
      <rect x="250" y="36" width="30" height="6" rx="2" fill="white" opacity="0.8"/>
      {/* Section label */}
      <text x="32" y="70" fontSize="9" fontWeight="700" fill="#9ca3af" fontFamily="system-ui" letterSpacing="0.08em">TODAY</text>
      {/* History rows */}
      {[
        { y: 78, email: "ceo@startup.io", time: "2h ago", color: "#FF5C39" },
        { y: 104, email: "press@media.com", time: "4h ago", color: "#22c55e" },
        { y: 130, email: "vendor@supply.co", time: "6h ago", color: "#f59e0b" },
      ].map((row, i) => (
        <g key={i}>
          <circle cx="40" cy={row.y + 9} r="5" fill={row.color} opacity="0.2"/>
          <circle cx="40" cy={row.y + 9} r="3" fill={row.color}/>
          <rect x="52" y={row.y + 4} width={row.email.length * 5.5} height="10" rx="2" fill="#374151"/>
          <rect x="240" y={row.y + 4} width="42" height="10" rx="2" fill="#e5e7eb"/>
        </g>
      ))}
      <text x="32" y="160" fontSize="9" fontWeight="700" fill="#9ca3af" fontFamily="system-ui" letterSpacing="0.08em">YESTERDAY</text>
      <circle cx="40" cy="174" r="5" fill="#6366f1" opacity="0.2"/>
      <circle cx="40" cy="174" r="3" fill="#6366f1"/>
      <rect x="52" y="169" width="108" height="10" rx="2" fill="#374151"/>
      <rect x="240" y="169" width="42" height="10" rx="2" fill="#e5e7eb"/>
    </svg>
  );
}

function IllustrationEnrichment() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: "8px" }}>
      <rect width="320" height="200" fill="#fff8f6" rx="8"/>
      <rect x="20" y="16" width="280" height="168" rx="8" fill="white" stroke="#fde0d8" strokeWidth="1.5"/>
      {/* Input email */}
      <rect x="32" y="28" width="256" height="32" rx="6" fill="#fff1ee" stroke="#FF5C39" strokeWidth="1.5"/>
      <rect x="44" y="38" width="110" height="10" rx="3" fill="#FF5C39" opacity="0.5"/>
      <rect x="232" y="33" width="44" height="22" rx="4" fill="#FF5C39"/>
      <rect x="240" y="40" width="28" height="8" rx="2" fill="white" opacity="0.9"/>
      {/* Arrow */}
      <line x1="160" y1="60" x2="160" y2="74" stroke="#FF5C39" strokeWidth="1.5" strokeDasharray="3 2"/>
      <path d="M155 71 L160 76 L165 71" stroke="#FF5C39" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* Enriched card */}
      <rect x="32" y="80" width="256" height="96" rx="8" fill="#f9f5f4" stroke="#fde0d8" strokeWidth="1"/>
      {/* Avatar */}
      <circle cx="60" cy="108" r="18" fill="#fde0d8"/>
      <circle cx="60" cy="103" r="7" fill="#FF5C39" opacity="0.6"/>
      <path d="M46 120 Q60 114 74 120" stroke="#FF5C39" strokeWidth="1.5" fill="none" opacity="0.6"/>
      {/* Info rows */}
      <rect x="86" y="88" width="120" height="10" rx="3" fill="#111827"/>
      <rect x="86" y="103" width="150" height="8" rx="3" fill="#9ca3af"/>
      <rect x="86" y="116" width="90" height="8" rx="3" fill="#9ca3af"/>
      {/* Social badges */}
      <rect x="86" y="132" width="36" height="18" rx="9" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
      <rect x="90" y="138" width="28" height="6" rx="2" fill="#2563eb" opacity="0.7"/>
      <rect x="128" y="132" width="36" height="18" rx="9" fill="#f0fdf4" stroke="#86efac" strokeWidth="1"/>
      <rect x="132" y="138" width="28" height="6" rx="2" fill="#16a34a" opacity="0.7"/>
      <rect x="170" y="132" width="36" height="18" rx="9" fill="#fdf2f8" stroke="#f9a8d4" strokeWidth="1"/>
      <rect x="174" y="138" width="28" height="6" rx="2" fill="#db2777" opacity="0.7"/>
      {/* Trust score pill */}
      <rect x="230" y="88" width="46" height="24" rx="12" fill="#dcfce7" stroke="#86efac" strokeWidth="1"/>
      <circle cx="244" cy="100" r="4" fill="#22c55e"/>
      <text x="252" y="104" fontSize="11" fontWeight="800" fill="#16a34a" fontFamily="system-ui">94</text>
    </svg>
  );
}

/* ─── Illustration card ─────────────────────────────────────────────────── */
function IllustCard({ subheading, title, description, illustration }) {
  return (
    <div style={{
      background: "#f9f1ef",
      borderRadius: "16px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{ padding: "40px 40px 24px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#374151", marginBottom: "12px" }}>
          {subheading}
        </p>
        <h3 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 600, color: "#111827", lineHeight: 1.3, marginBottom: "12px" }}>
          {title}
        </h3>
        <p style={{ fontSize: "15px", color: "#6b7280", lineHeight: 1.7, marginBottom: "20px" }}>
          {description}
        </p>
        <a href="https://m.venmail.io/register" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: "14px", fontWeight: 600, color: "#FF5C39", textDecoration: "none" }}>
          Get started free →
        </a>
      </div>
      <div style={{ padding: "0 24px 24px" }}>
        {illustration}
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
const VenmailAgentPage = () => {
  const features = [
    {
      icon: <ShieldCheckIcon className="h-8 w-8 md:h-10 md:w-10 text-primary-600" />,
      title: "Email Verification",
      text: "Validate deliverability before you send. Flag risky, disposable, or inactive addresses the moment they appear — so you never burn sender reputation on bad data.",
    },
    {
      icon: <MagnifyingGlassIcon className="h-8 w-8 md:h-10 md:w-10 text-primary-600" />,
      title: "Reputation Signals",
      text: "Surface trust indicators from domain age, breach exposure, and social footprint. Get a clear read on who you're talking to before the first reply.",
    },
    {
      icon: <DocumentTextIcon className="h-8 w-8 md:h-10 md:w-10 text-primary-600" />,
      title: "Contact Enrichment",
      text: "Turn an email address into a full contact profile — name, title, company, and social links pulled from multiple sources in a single request.",
    },
    {
      icon: <ClockIcon className="h-8 w-8 md:h-10 md:w-10 text-primary-600" />,
      title: "Search History & Export",
      text: "Every lookup is logged and searchable. Filter by domain, company, or date — then export to CSV or JSON for your CRM, compliance records, or ops team.",
    },
  ];

  const boxes = [
    {
      subheading: "Popup",
      title: "Instant lookup from any tab",
      description: "Open the extension, type an email or name, and get verified contact data in under a second. No copy-pasting, no tab-switching.",
      illustration: <IllustrationPopup />,
    },
    {
      subheading: "Dashboard",
      title: "Full analysis workspace",
      description: "Bulk lookups, color-coded trust scores, and sortable columns. Built for ops and sales teams who live in data.",
      illustration: <IllustrationDashboard />,
    },
    {
      subheading: "Search History",
      title: "Every query, always on hand",
      description: "Auto-logged lookups with timestamps and result snapshots. Search, filter, and revisit past intelligence without re-running queries.",
      illustration: <IllustrationHistory />,
    },
    {
      subheading: "Enrichment",
      title: "One email → full profile",
      description: "Name, title, company, social links, and a trust score — surfaced from multiple web sources and consolidated into one clean view.",
      illustration: <IllustrationEnrichment />,
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<ShieldCheckIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title="Contact Intelligence for Every Email"
        description="Know who you're dealing with before you reply. Venmail Agent surfaces verified contact data, reputation signals, and enriched profiles — directly in your browser."
        image={"/venmail-agent-full.png"}
        button1Text={"Install Extension"}
        button2Text={"View Documentation"}
      />

      {/* Features */}
      <section className="bg-white">
        <div className="py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
          <div className="max-w-2xl mb-12 mx-auto text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Built for people who send consequential email
            </h2>
            <p className="text-gray-500 sm:text-lg">
              Sales reps, recruiters, journalists, founders — anyone who needs to know that the person on the other end is who they say they are.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="mb-5">{feature.icon}</div>
                <h3 className="mb-3 text-lg font-semibold text-black">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Illustration cards */}
      <section style={{ background: "#fafafa", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 800, color: "#111827", letterSpacing: "-0.02em", marginBottom: "12px" }}>
              Two interfaces. One workflow.
            </h2>
            <p style={{ fontSize: "17px", color: "#6b7280", maxWidth: "500px", margin: "0 auto" }}>
              Quick lookups in the popup, deep dives in the dashboard. History and exports keep your team aligned.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))", gap: "24px" }}>
            {boxes.map((box, index) => (
              <IllustCard
                key={index}
                subheading={box.subheading}
                title={box.title}
                description={box.description}
                illustration={box.illustration}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900">
              Stop guessing. Start knowing.
            </h2>
            <p className="text-gray-500 mb-8">
              Install Venmail Agent and turn every inbox into an intelligence layer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chrome.google.com/webstore/detail/venmail-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg"
              >
                Install Extension
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-900 border border-gray-300 hover:bg-gray-100 rounded-lg"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </ProductLayout>
  );
};

export default VenmailAgentPage;
