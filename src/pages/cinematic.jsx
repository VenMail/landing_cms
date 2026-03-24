import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import DefaultLayout from "@/components/layout/DefaultLayout";
import CostComparisonSlider from "@/components/PageSections/CostComparisonSlider";

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

// Cinematic hero section
const CinematicHero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    if (!inView) return;
    
    const tl = gsap.timeline();
    
    tl.fromTo(textRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo(imageRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" },
      "-=0.5"
    );
  }, [inView]);
  
  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <FloatingElement delay={0} duration={4} yDistance={30}>
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        </FloatingElement>
        <FloatingElement delay={1} duration={5} yDistance={25}>
          <div className="absolute top-40 right-20 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
        </FloatingElement>
        <FloatingElement delay={2} duration={6} yDistance={35}>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
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
            <span className="text-white/80 text-sm font-medium">Join 5,500+ teams who've reclaimed their email</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Email Shouldn't
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
              Be a Luxury
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Professional email that puts you in control. 
            <br className="hidden md:block" />
            Your data, your servers, your pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="https://m.venmail.io/register"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10">Start Your Revolution</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </a>
            
            <a
              href="#the-problem"
              className="inline-flex items-center text-lg font-medium text-white/80 hover:text-white transition-colors group"
            >
              <span>Discover the mission</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
        
        <div ref={imageRef} className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30"></div>
          <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
            <img
              src="/screenshot-full.webp"
              alt="Venmail interface - Email that respects your freedom"
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <FloatingElement delay={0} duration={2} yDistance={10}>
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </FloatingElement>
      </div>
    </section>
  );
};

// The Problem Section
const TheProblemSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const statsRef = useRef(null);
  
  useEffect(() => {
    if (!inView) return;
    
    const stats = statsRef.current?.querySelectorAll('.stat-item');
    if (!stats) return;
    
    gsap.fromTo(stats,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );
  }, [inView]);
  
  return (
    <section id="the-problem" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Email Crisis Is Real
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional email has become something only established companies can afford. 
            That's backwards. Every creator, every startup deserves proper email infrastructure.
          </p>
        </div>
        
        <div ref={statsRef} className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="stat-item text-center p-8 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl border border-red-100">
            <div className="text-5xl font-bold text-red-600 mb-4">$25+</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Per User Per Month</div>
            <div className="text-gray-600">The industry standard that's killing small teams</div>
          </div>
          
          <div className="stat-item text-center p-8 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border border-orange-100">
            <div className="text-5xl font-bold text-orange-600 mb-4">73%</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Ration Email</div>
            <div className="text-gray-600">Companies limit professional emails to save costs</div>
          </div>
          
          <div className="stat-item text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100">
            <div className="text-5xl font-bold text-purple-600 mb-4">∞</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Fragmentation</div>
            <div className="text-gray-600">Important conversations lost across personal accounts</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
          <blockquote className="text-2xl md:text-3xl font-light mb-6 italic">
            "I only create email accounts for the operations team"
          </blockquote>
          <div className="text-lg text-gray-300">— Sandra, SheCodes</div>
          <div className="mt-8 text-gray-400">
            When email becomes a line item you justify, companies start rationing it. 
            Important conversations get fragmented or lost.
          </div>
        </div>
      </div>
    </section>
  );
};

// The Solution Section
const TheSolutionSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const cardsRef = useRef(null);
  
  useEffect(() => {
    if (!inView) return;
    
    const cards = cardsRef.current?.querySelectorAll('.solution-card');
    if (!cards) return;
    
    gsap.fromTo(cards,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" }
    );
  }, [inView]);
  
  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Control Matters More Than Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We built VenMail around three simple principles that change everything
          </p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          <div className="solution-card group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Data, Your Choice</h3>
            <p className="text-gray-600 mb-4">
              Your email lives where you want it to live. AWS S3, Google Cloud, even your own server. 
              Not trapped in someone else's system.
            </p>
            <div className="text-purple-600 font-semibold">No exporting worries →</div>
          </div>
          
          <div className="solution-card group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Storage-Based Pricing</h3>
            <p className="text-gray-600 mb-4">
              Pay for what you use, not how many people work for you. 
              A 5-person team and 50-person team pay about the same for same storage.
            </p>
            <div className="text-blue-600 font-semibold">Fair and predictable →</div>
          </div>
          
          <div className="solution-card group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What You Actually Need</h3>
            <p className="text-gray-600 mb-4">
              Follow-ups, tracking, campaigns, document handling. 
              Things that help you communicate better and grow your business.
            </p>
            <div className="text-green-600 font-semibold">No feature bloat →</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// The Mission Section
const TheMissionSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const contentRef = useRef(null);
  
  useEffect(() => {
    if (!inView) return;
    
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, [inView]);
  
  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            This Is Bigger Than Email
          </h2>
          
          <div className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-300 leading-relaxed mb-16">
            <p className="mb-8">
              We're part of a larger shift. People need privacy-respecting products; 
              tools that feel clean and cohesive, not fragmented.
            </p>
            <p className="mb-8">
              We're not trying to be the biggest email provider. 
              But rather, one that understands that email is fundamental infrastructure, not a luxury service.
            </p>
            <p className="text-2xl md:text-3xl font-light text-purple-300 italic">
              "Technology should serve humanity, not the other way around."
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Join the Mission</h3>
            <p className="text-gray-300 mb-8">
              Help us build email that respects users and their budgets. 
              Not as customers, but as fellow travelers who believe in this vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://m.venmail.io/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full transition-all"
              >
                Try VenMail
              </a>
              <a
                href="mailto:hello@venmail.io"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white border border-white/30 hover:bg-white/10 rounded-full transition-all"
              >
                Share Your Thoughts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function CinematicHome() {
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
      <CinematicHero />
      <TheProblemSection />
      <TheSolutionSection />
      <TheMissionSection />
      
      {/* Pricing Comparison */}
      <CostComparisonSlider hasButton={true} />
      
      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Reclaim Your Email?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join the revolution. Be part of building something better.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://m.venmail.io/register"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25"
            >
              <span className="relative z-10">Start Free Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </a>
            
            <a
              href="mailto:hello@venmail.io"
              className="inline-flex items-center text-lg font-medium text-white/80 hover:text-white transition-colors"
            >
              Talk to our team
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            ⚡ 5,500+ users have already made the switch
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
