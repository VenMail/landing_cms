import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    value: 10,
    suffix: 'x',
    label: 'operational efficiency',
    description: 'Streamlined workflows and automation'
  },
  {
    value: 42,
    suffix: '%',
    label: 'more productive',
    description: 'Teams accomplish more with fewer tools'
  },
  {
    value: 90,
    suffix: '%',
    label: 'cost savings',
    description: 'Reduce software expenses significantly'
  },
  {
    value: 0,
    suffix: '$',
    label: 'per-seat pricing',
    description: 'Unlimited users on every plan'
  }
];

function StatCard({ stat, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: index * 200 // Stagger the animations
  });

  return (
    <div 
      ref={ref}
      className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
        {inView ? (
          <>
            <CountUp 
              end={stat.value} 
              duration={2.5}
              start={0}
              delay={0.5}
              easing="easeOut"
            />
            {stat.suffix}
          </>
        ) : (
          <span>0{stat.suffix}</span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {stat.label}
      </h3>
      <p className="text-sm text-gray-600">
        {stat.description}
      </p>
    </div>
  );
}

export default function CountUpStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Top Badge with Cancelled Pricing */}
            <div className="relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-full shadow-lg">
              <div className="relative">
                <span className="text-gray-700 font-bold text-lg line-through">$10/seat/mo</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              <span className="text-orange-600 font-bold text-lg">→ $0/seat</span>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Say goodbye to
              </h2>
              <div className="text-3xl md:text-5xl font-bold text-orange-600">
                per-seat pricing
              </div>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Cut software bloat while keeping teams fast, clear, and connected.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Unlimited users on every plan</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Replace multiple subscriptions with one platform</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Pay for storage, not people</span>
              </div>
            </div>
            <a
              href="https://m.venmail.io/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium text-white bg-black hover:bg-gray-800 transition-colors"
            >
              Unlock your savings
            </a>
          </div>

          {/* Right Stats Grid */}
          <div ref={ref} className="grid md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
