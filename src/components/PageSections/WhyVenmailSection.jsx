import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { LuMail, LuLayers, LuShield, LuTrendingUp, LuUsers, LuDollarSign } from "react-icons/lu";

const PILLARS = [
  {
    icon: LuMail,
    title: "Email for domains is getting pricier",
    body: "Gmail and Microsoft keep raising the bar. Venmail gives you professional email for your domain without the big-brand tax.",
    stat: "$7/mo",
    statLabel: "vs $30+/mo",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: LuLayers,
    title: "Growing teams need more marketing in email",
    body: "Automatic follow-ups, read/open tracking, and campaigns from the same inbox shouldn't require 2–3 separate tools. We built that into one place.",
    stat: "3 tools",
    statLabel: "in 1 platform",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: LuShield,
    title: "A productivity-first email UI you actually own",
    body: "Skiff showed what a privacy-first, productivity-focused email could be; it was acquired. We're taking it further: store mail on your own devices or cloud (S3/FTP-compatible) so you never have to \"export\" your data in the first place.",
    stat: "100%",
    statLabel: "data ownership",
    color: "from-green-500 to-emerald-500"
  },
];

function PillarCard({ pillar, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      key={pillar.title}
      className={`group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Background Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Content */}
      <div className="relative p-8">
        {/* Icon with Animation */}
        <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center text-white mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          <pillar.icon className="w-8 h-8" />
        </div>
        
        {/* Stats Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-4">
          <span className="text-2xl font-bold text-gray-900">{pillar.stat}</span>
          <span className="text-sm text-gray-600">{pillar.statLabel}</span>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
          {pillar.title}
        </h3>
        
        {/* Body */}
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {pillar.body}
        </p>
        
        {/* Hover Indicator */}
        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${pillar.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
      </div>
    </div>
  );
}

export default function WhyVenmailSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="why-venmail" className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 lg:py-32 scroll-mt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          ref={ref}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-full mb-6">
            <LuTrendingUp className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-800">Why VenMail Wins</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            We built Venmail because
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
              privacy and productivity should remain affordable
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stop paying per-seat. Start owning your data. Get enterprise-grade email without the enterprise price tag.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`transition-all duration-1000 delay-${index * 200} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <PillarCard pillar={pillar} index={index} />
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <LuDollarSign className="w-5 h-5 text-green-600" />
                <span className="text-3xl font-bold text-gray-900">70%</span>
              </div>
              <p className="text-sm text-gray-600">Cost savings vs competitors</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <LuUsers className="w-5 h-5 text-blue-600" />
                <span className="text-3xl font-bold text-gray-900">∞</span>
              </div>
              <p className="text-sm text-gray-600">Users on every plan</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <LuShield className="w-5 h-5 text-purple-600" />
                <span className="text-3xl font-bold text-gray-900">100%</span>
              </div>
              <p className="text-sm text-gray-600">Data ownership</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <LuMail className="w-5 h-5 text-orange-600" />
                <span className="text-3xl font-bold text-gray-900">99.9%</span>
              </div>
              <p className="text-sm text-gray-600">Uptime guarantee</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/VenMail"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
            <a
              href="https://venia.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl hover:from-primary-700 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Open Source Worksuite
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Docs, Sheets, Forms, Slides, Media - All free and open source
          </p>
        </div>
      </div>
    </section>
  );
}
