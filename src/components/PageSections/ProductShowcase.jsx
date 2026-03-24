import React from 'react';

const ProductShowcase = () => {
  const products = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "SMTP / IMAP Core",
      description: "Full standards-compliant email infrastructure — receive, send, store"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M4 7c0-2 1-3 3-3h10c2 0 3 1 3 3M4 7h16M10 11h4" />
        </svg>
      ),
      title: "Bring Your Own Storage",
      description: "S3, Azure, Google Cloud, self-hosted or sovereign DC — you pick, you own"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Data Sovereignty",
      description: "GDPR, NDPR, DPDP, NCA — natively compliant because data never leaves your storage"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "API-Native Core",
      description: "REST API + webhooks. Programmable from day one — not a retrofit"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "White-Label Ready",
      description: "Hosting companies resell Venmail under their own brand — zero setup cost"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Unlimited Users",
      description: "No per-seat fees. Add your entire organisation — pricing scales with storage, not headcount"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Campaigns & Automation",
      description: "Bulk sends, follow-up sequences, and delivery analytics — built in"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Custom Domains",
      description: "Full multi-domain support with MX, SPF, DKIM, DMARC — configured in minutes"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "AI Spam & Threat Filtering",
      description: "Advanced spam detection and phishing protection at the infrastructure layer"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-[#050910] py-16 lg:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            BYOS-native • 99.9% uptime
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Step up your <span className="line-through">game</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">stack</span> with.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Premium Experience.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-8">
            Choose the model that fits your stage: managed convenience, rented capacity, or infrastructure-level control with BYOS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur px-5 py-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-primary-300/60"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary-500/10 via-transparent to-white/5" />
              <div className="relative flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-primary-200 group-hover:border-primary-200/60">
                  <div className="text-primary-100 group-hover:text-white">
                    {product.icon}
                  </div>
                </div>
                <span className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">Included</span>
              </div>
              <h3 className="relative text-lg font-semibold text-white mb-1">{product.title}</h3>
              <p className="relative text-white/70 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="https://m.venmail.io/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-primary-400 rounded-full shadow-lg hover:bg-primary-300 transition-transform hover:-translate-y-[1px]"
            >
              Get started for free
            </a>
            <a
              href="#see-it-in-action"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-full border border-white/15 hover:border-primary-300/80 hover:text-primary-100 transition"
            >
              <span>See product tour</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-white/60">No credit card required · No per-seat fees · BYOS storage</p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
