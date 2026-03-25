import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import DefaultLayout from "@/components/layout/DefaultLayout";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(gsap.plugins.ScrollTrigger);
}

// Floating animation component
const FloatingElement = ({ children, delay = 0, duration = 3, yDistance = 20 }) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    gsap.to(element, {
      y: yDistance,
      duration: duration,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: delay
    });
  }, [delay, duration, yDistance]);
  
  return <div ref={elementRef}>{children}</div>;
};

// Cinematic hero for healthcare/legal
const HealthcareHero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);
  
  useEffect(() => {
    if (!inView) return;
    
    const tl = gsap.timeline();
    
    tl.fromTo(textRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo(statsRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" },
      "-=0.5"
    );
  }, [inView]);
  
  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <FloatingElement delay={0} duration={4} yDistance={30}>
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
        </FloatingElement>
        <FloatingElement delay={1} duration={5} yDistance={25}>
          <div className="absolute top-40 right-20 w-48 h-48 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
        </FloatingElement>
        <FloatingElement delay={2} duration={6} yDistance={35}>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        </FloatingElement>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={textRef} className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <div className="relative">
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white/80 text-sm font-medium">HIPAA & GDPR Compliant • SOC 2 Type II</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Stop Paying
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
              $4.88M Breach Costs
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Healthcare & Legal email that protects patient data and client confidentiality.
            <br className="hidden md:block" />
            Your servers, your compliance, your peace of mind.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="https://m.venmail.io/register"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25"
            >
              <span className="relative z-10">Start Compliant Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </a>
            
            <a
              href="#compliance-crisis"
              className="inline-flex items-center text-lg font-medium text-white/80 hover:text-white transition-colors group"
            >
              <span>See the crisis</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
        
        <div ref={statsRef} className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-3xl opacity-30"></div>
          <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">$4.88M</div>
                <div className="text-white/80">Average breach cost 2024</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">133M</div>
                <div className="text-white/80">Health records exposed 2023</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">90%</div>
                <div className="text-white/80">Cost reduction vs Microsoft 365</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <FloatingElement delay={0} duration={2} yDistance={10}>
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll to see the crisis</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </FloatingElement>
      </div>
    </section>
  );
};

// Compliance Crisis Section
const ComplianceCrisisSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const crisisRef = useRef(null);
  
  useEffect(() => {
    if (!inView) return;
    
    const stats = crisisRef.current?.querySelectorAll('.crisis-stat');
    if (!stats) return;
    
    gsap.fromTo(stats,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );
  }, [inView]);
  
  return (
    <section id="compliance-crisis" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Compliance Crisis Is Real
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Healthcare and legal firms are under unprecedented attack. 
            Your current email provider is putting you at risk.
          </p>
        </div>
        
        <div ref={crisisRef} className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="crisis-stat bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100">
            <div className="text-5xl font-bold text-red-600 mb-4">239%</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Increase in Hacking</div>
            <div className="text-gray-600 mb-4">Healthcare data breaches 2018-2023</div>
            <div className="text-sm text-red-700 font-medium">HIPAA violations at all-time high</div>
          </div>
          
          <div className="crisis-stat bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-100">
            <div className="text-5xl font-bold text-orange-600 mb-4">€2.92B</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">GDPR Fines Since 2018</div>
            <div className="text-gray-600 mb-4">90% say GDPR is hardest compliance</div>
            <div className="text-sm text-orange-700 font-medium">Legal firms facing massive penalties</div>
          </div>
          
          <div className="crisis-stat bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
            <div className="text-5xl font-bold text-purple-600 mb-4">40%</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Breaches from Manual Compliance</div>
            <div className="text-gray-600 mb-4">Human error causing security gaps</div>
            <div className="text-sm text-purple-700 font-medium">Automated compliance is critical</div>
          </div>
          
          <div className="crisis-stat bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-5xl font-bold text-blue-600 mb-4">74%</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Breaches Involve Human Element</div>
            <div className="text-gray-600 mb-4">Email is the #1 attack vector</div>
            <div className="text-sm text-blue-700 font-medium">Your email provider is your weakest link</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
          <blockquote className="text-2xl md:text-3xl font-light mb-6 italic">
            "The average cost of a data breach in 2024 was $4.88 million—the highest total ever."
          </blockquote>
          <div className="text-lg text-gray-300 mb-4">— IBM Cost of a Data Breach Report 2024</div>
          <div className="text-gray-400">
            Healthcare and legal firms are the #1 targets. 
            Microsoft 365 and Google Workspace put your data on THEIR servers, 
            making you vulnerable to THEIR security breaches.
          </div>
        </div>
      </div>
    </section>
  );
};

// Cost Comparison Section
const CostComparisonSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const comparisonRef = useRef(null);
  
  useEffect(() => {
    if (!inView) return;
    
    gsap.fromTo(comparisonRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, [inView]);
  
  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stop the Email Provider Tax
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You're paying $300-1,100/month for email that puts you at risk. 
            Here's the math that will shock you.
          </p>
        </div>
        
        <div ref={comparisonRef} className="bg-white rounded-3xl p-8 shadow-2xl border border-green-100">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">50-Person Firm</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">Microsoft 365</div>
              <div className="text-4xl font-bold text-red-600 mb-2">$600/mo</div>
              <div className="text-sm text-gray-500">$12/user + compliance add-ons</div>
            </div>
            
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">50-Person Firm</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">Google Workspace</div>
              <div className="text-4xl font-bold text-orange-600 mb-2">$500/mo</div>
              <div className="text-sm text-gray-500">$10/user + Gemini AI</div>
            </div>
            
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">50-Person Firm</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">Traditional Host</div>
              <div className="text-4xl font-bold text-purple-600 mb-2">$400/mo</div>
              <div className="text-sm text-gray-500">$8/user + compliance tools</div>
            </div>
            
            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border-2 border-green-500">
              <div className="text-sm text-green-600 mb-2 font-semibold">50-Person Firm</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">VenMail</div>
              <div className="text-4xl font-bold text-green-600 mb-2">$27/mo</div>
              <div className="text-sm text-gray-500">Startup plan + BYOS add-on</div>
              <div className="text-lg font-bold text-green-700 mt-2">95% SAVINGS</div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Annual Savings Breakdown</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">$6,876</div>
                <div className="text-gray-600">vs Microsoft 365</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">$5,676</div>
                <div className="text-gray-600">vs Google Workspace</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">$4,476</div>
                <div className="text-gray-600">vs Traditional Host</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// VenMail Solution Section
const VenmailSolutionSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const solutionRef = useRef(null);
  
  useEffect(() => {
    if (!inView) return;
    
    const cards = solutionRef.current?.querySelectorAll('.solution-card');
    if (!cards) return;
    
    gsap.fromTo(cards,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" }
    );
  }, [inView]);
  
  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The VenMail Compliance Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built specifically for healthcare and legal firms that can't afford compliance risks
          </p>
        </div>
        
        <div ref={solutionRef} className="grid md:grid-cols-3 gap-8">
          <div className="solution-card group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Servers, Your Compliance</h3>
            <p className="text-gray-600 mb-4">
              BYOS (Bring Your Own Storage) keeps your patient/client data in your infrastructure. VenMail may temporarily process or cache data to run workflows and deliver messages.
              HIPAA & GDPR compliant by design.
            </p>
            <div className="text-blue-600 font-semibold">Zero data exfiltration risk →</div>
          </div>
          
          <div className="solution-card group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">95% Cost Reduction</h3>
            <p className="text-gray-600 mb-4">
              Storage-based pricing means you pay for what you use, not per-user. 
              $27/month for 50 users vs $600+ with Microsoft.
            </p>
            <div className="text-green-600 font-semibold">$6,876 annual savings →</div>
          </div>
          
          <div className="solution-card group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Compliance</h3>
            <p className="text-gray-600 mb-4">
              Built-in compliance workflows, audit trails, and automated reporting. 
              No manual compliance gaps that cause 40% of breaches.
            </p>
            <div className="text-purple-600 font-semibold">Zero manual errors →</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTASection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const ctaRef = useRef(null);
  
  useEffect(() => {
    if (!inView) return;
    
    gsap.fromTo(ctaRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, [inView]);
  
  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ctaRef} className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Protect Your Practice. Protect Your Clients.
          </h2>
          
          <div className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-300 leading-relaxed mb-16">
            <p className="mb-8">
              Every day you wait with Microsoft 365 or Google Workspace, 
              you're exposing your practice to $4.88M in breach costs.
            </p>
            <p className="mb-8">
              VenMail eliminates the risk while saving you $6,876 annually.
            </p>
            <p className="text-2xl md:text-3xl font-light text-green-300 italic">
              "The question isn't if you can afford VenMail. 
              It's if you can afford the breach."
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Start Compliant Today</h3>
            <p className="text-gray-300 mb-8">
              Free for up to 5 users. HIPAA & GDPR compliant from day one. 
              Your data stays on your servers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://m.venmail.io/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-full transition-all"
              >
                Start Free Trial
              </a>
              <a
                href="mailto:compliance@venmail.io"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white border border-white/30 hover:bg-white/10 rounded-full transition-all"
              >
                Talk to Compliance Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function HealthcareLegalLanding() {
  useEffect(() => {
    // Smooth scroll behavior
    const handleAnchorClick = (e) => {
      const href = e.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', (e) => handleAnchorClick(anchor));
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <DefaultLayout>
      <HealthcareHero />
      <ComplianceCrisisSection />
      <CostComparisonSection />
      <VenmailSolutionSection />
      <FinalCTASection />
    </DefaultLayout>
  );
}
