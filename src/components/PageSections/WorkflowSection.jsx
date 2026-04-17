"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  {
    id: "unified",
    title: "Integrated Communication Suite",
    subtitle: "INTEGRATED WORKFLOW",
    description:
      "VenMail combines email, scheduling, and lead generation in one platform. Manage communication workflows from a unified interface.",
    icon: "/icons/unified.svg"
  },
  {
    id: "ai",
    title: "AI-Assisted Email",
    subtitle: "WORKFLOW 1: EMAIL MANAGEMENT",
    description:
      "AI assists with email drafting, thread summaries, and spam detection.",
    icon: "/icons/ai.svg"
  },
  {
    id: "scheduling",
    title: "Meeting Scheduling",
    subtitle: "WORKFLOW 2: CALENDAR INTEGRATION",
    description:
      "Share your booking page for direct client scheduling. Calendar sync included.",
    icon: "/icons/calendar.svg"
  },
  {
    id: "leads",
    title: "Lead Management",
    subtitle: "WORKFLOW 3: LEAD MANAGEMENT",
    description:
      "Find, track, and convert leads from your inbox.",
    icon: "/icons/leads.svg"
  },
];

export default function WorkflowSection() {
  const [activeSection, setActiveSection] = useState("unified");
  const observerRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-5 space-y-8">
            {sections.map((section) => (
              <div 
                key={section.id} 
                id={section.id}
                ref={el => sectionRefs.current[section.id] = el}
                className="min-h-screen flex flex-col justify-center py-20 lg:py-32"
              >
                <div className="space-y-6">
                  {section.subtitle && (
                    <span className="text-sm font-semibold tracking-wider text-primary-600 uppercase">
                      {section.subtitle}
                    </span>
                  )}
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                  {section.id === 'unified' && (
                    <a
                      href="https://m.venmail.io/register"
                      target="_blank"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                    >
                      Get Started
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Visuals */}
          <div className="lg:col-span-7 sticky top-0 h-screen flex items-center">
            <div className="relative w-full h-4/5 rounded-xl overflow-hidden bg-[#f9f1ef] p-8 flex items-center justify-center">
              <div className="relative w-full h-full">
                {sections.map((section) => (
                  <div 
                    key={`visual-${section.id}`}
                    className={`absolute inset-0 transition-opacity duration-500 ${activeSection === section.id ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <img
                      src={section.id === 'unified' ? '/home/section-1.png' : 
                           section.id === 'ai' ? '/home/section-4a.png' :
                           section.id === 'scheduling' ? '/home/section-4c.png' :
                           '/home/section-4b.png'}
                      alt={section.title}
                      className="w-full h-auto max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
