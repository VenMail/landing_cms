import React from 'react';

const ProductShowcase = () => {
  const products = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Meetings",
      description: "Schedule and manage meetings seamlessly"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Calendar Booking Pages",
      description: "Professional booking links for easy scheduling"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Campaigns",
      description: "Create and track email campaigns"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Docs",
      description: "Collaborative documents and note-taking"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v1a1 1 0 001 1h4a1 1 0 001-1v-1m3-2V8a2 2 0 00-2-2H8a2 2 0 00-2 2v6m0 0V8a2 2 0 012-2h8a2 2 0 012 2v6m-3 2h.01M17 16h.01" />
        </svg>
      ),
      title: "Spreadsheets",
      description: "Data organization and analysis"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Contacts",
      description: "Manage your professional network"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Email Automation",
      description: "Automate repetitive email tasks"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "AI Workflows",
      description: "Intelligent automation for complex tasks"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "SMTP API",
      description: "Programmable email sending"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-[#050910] py-16 lg:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Security-first workspace • 99.9% uptime
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            One platform. Everything you need.
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-8">
            Venmail replaces scattered tools with one unified workspace for email, productivity, and automation—built for modern teams.
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
          <p className="text-sm text-white/60">No credit card required • Free plan available</p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
