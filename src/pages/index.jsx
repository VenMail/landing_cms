import { useState, useRef, useEffect } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import CostComparisonSlider from "@/components/PageSections/CostComparisonSlider";
import IndividualUsersSection from "@/components/PageSections/IndividualUsersSection";
import BusinessesSection from "@/components/PageSections/BusinessesSection";
import DevelopersSection from "@/components/PageSections/DevelopersSection";
import MobileAppsSection from "@/components/PageSections/MobileAppsSection";
import AIWorkflowShowcase from "@/components/PageSections/AIWorkflowShowcase";
import ProductShowcase from "@/components/PageSections/ProductShowcase";
import BatteriesSection from "@/components/PageSections/BatteriesSection";
import CountUpStats from "@/components/PageSections/CountUpStats";
import CinematicHowItWorks from "@/components/PageSections/CinematicHowItWorks";
import { ChristmasSparkleWrapper } from "@/utils/christmasSparkle";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("rewrite");
  const buttonRefs = useRef({});
  const [loadingProgress, setLoadingProgress] = useState(0); // For the loading bar
  const intervalRef = useRef(null);
  

  const tabContent = {
    rewrite: {
      title: "AI Rewrite",
      description: "Write better emails, faster, with AI-powered rewrites.",
      image: "/home/section-4a.png",
    },
    prospects: {
      title: "Generate Prospects",
      description: "Find and connect with the right leads instantly.",
      image: "/home/section-4b.png",
    },
    schedule_meetings: {
      title: "Schedule Meetings",
      description: "Book meetings effortlessly, straight from your inbox.",
      image: "/home/section-4c.png",
    },
    // summary: {
    //   title: "Instant Email Summary",
    //   description: "Get the gist of long emails in seconds with AI summaries.",
    //   image: "/home/section-4d.png",
    // },
    document_intelligence: {
      title: "Document Intelligence",
      description: "AI reads and understands PDFs, Word docs, and spreadsheets automatically.",
      image: "/home/section-document-intelligence.svg",
    },
    sdr_ai: {
      title: "AI Sales Agent", 
      description: "AI discovers prospects, analyzes companies, and automates outreach at scale.",
      image: "/home/section-sdr-ai.svg",
    },
    payment_automation: {
      title: "Payment Automation",
      description: "Automatic payment processing, receipt generation, and webhook integration.",
      image: "/home/section-payment-automation.svg",
    },
    // analytics: {
    //   title: "Sent Mail Analytics",
    //   description: "Track delivery rates, open rates, and email performance with detailed sent mail analytics.",
    //   image: "/sent-panel.png",
    // },
    spam: {
      title: "Spam Detection",
      description: "Eliminate spam and phishing with advanced AI filters.",
      image: "/home/section-4f.png",
    },
  };

  const tabs = Object.keys(tabContent);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    resetLoading();
    buttonRefs.current[tabName]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const resetLoading = () => {
    clearInterval(intervalRef.current);
    setLoadingProgress(0);
    startAutoLoading();
  };

  const startAutoLoading = () => {
    intervalRef.current = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          const currentIndex = tabs.indexOf(activeTab);
          const nextIndex = (currentIndex + 1) % tabs.length;
          setActiveTab(tabs[nextIndex]);
          return 0;
        }
        return prev + 1;
      });
    }, 50); // Adjust speed of loading here
  };

  useEffect(() => {
    startAutoLoading();
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [activeTab]);

  return (
    <section id="see-it-in-action" className="bg-white py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="md:col-span-3 flex flex-col md:justify-between">
          <div className="overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar">
            <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 min-w-max lg:min-w-0">
              {Object.entries(tabContent).map(([key, _]) => (
                <div key={key} className="flex flex-col w-full">
                  <button
                    ref={(el) => (buttonRefs.current[key] = el)}
                    className={`whitespace-nowrap text-sm text-left py-4 ${
                      activeTab === key
                        ? " text-primary-600"
                        : "border-transparent text-gray-500"
                    } text-xl font-medium transition-colors`}
                    onClick={() => handleTabClick(key)}
                  >
                    {_.title}
                  </button>
                  {/* Loading bar */}
                  <div className="h-[1px] md:block hidden w-full bg-gray-200">
                    <div
                      className="h-[1px] bg-orange-500 transition-all duration-100"
                      style={{
                        width:
                          activeTab === key ? `${loadingProgress}%` : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden block mt-6 lg:mt-0">
            <div className="cinematic-frame bg-white p-6 sm:p-8 rounded-lg border border-gray-100 shadow-sm">
              <div className="cinematic-vignette rounded-lg overflow-hidden">
                {tabContent[activeTab].content || (
                  tabContent[activeTab].image.endsWith('.svg') ? (
                    <div className="flex items-center justify-center p-0">
                      <img
                        src={tabContent[activeTab].image}
                        alt={`${activeTab} Feature`}
                        className="rounded-lg w-full h-auto transition-all duration-300"
                      />
                    </div>
                  ) : (
                    <img
                      src={tabContent[activeTab].image}
                      alt={`${activeTab} Dashboard`}
                      className="rounded-lg w-full h-auto transition-all duration-300"
                    />
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-600  mb-3 text-lg">
              {tabContent[activeTab].description}
            </p>
            <a
            target="_blank"
              href="https://m.venmail.io/register"
              className="block md:inline-flex cursor-pointer items-center justify-center px-4 py-2 text-base font-medium text-center text-white bg-black focus:ring-4 focus:ring-primary-300"
            >
              Signup for Free
            </a>
          </div>
        </div>
        <div className="hidden md:block col-span-9">
          <div className="cinematic-frame bg-[#f9f1ef] p-6 sm:p-8 md:p-10 rounded-lg">
            <div className="cinematic-vignette rounded-lg overflow-hidden">
              {tabContent[activeTab].content || (
                tabContent[activeTab].image.endsWith('.svg') ? (
                  <div className="flex items-center justify-center p-0">
                    <img
                      src={tabContent[activeTab].image}
                      alt={`${activeTab} Feature`}
                      className="rounded-lg w-full h-auto transition-all duration-300"
                    />
                  </div>
                ) : (
                  <img
                    src={tabContent[activeTab].image}
                    alt={`${activeTab} Dashboard`}
                    className="rounded-lg w-full h-auto transition-all duration-300"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const JOURNEY_STEPS = [
  {
    label: "First impression",
    title: "Ads, referrals, email intros",
    text: "Every campaign link can carry context so VenMail knows why a visitor arrived before they become a known contact.",
  },
  {
    label: "First visit",
    title: "Personalized landing moments",
    text: "Show the right greeting, summary, offer, or question based on source, segment, product interest, and prior visits.",
  },
  {
    label: "Conversation",
    title: "AI Concierge",
    text: "Answer questions, qualify intent, capture contact details, and hand off warm leads through chat, voice, or email.",
  },
  {
    label: "Memory",
    title: "Visitor Memory",
    text: "Build a living profile from pages visited, questions asked, products viewed, emails opened, and referral activity.",
  },
  {
    label: "Next action",
    title: "SDR + campaigns",
    text: "Trigger the right follow-up sequence across email, sales outreach, booking, CRM notes, and team alerts.",
  },
  {
    label: "Growth loop",
    title: "Referral Engine",
    text: "Turn happy customers into evangelists with education, referral links, rewards, and retention journeys.",
  },
];

const CUSTOMER_JOURNEY_MODULES = [
  {
    title: "Visitor Memory",
    text: "Recognize anonymous and known visitors by source, behavior, return visits, product interest, and conversation history.",
    accent: "border-teal-500",
  },
  {
    title: "AI Concierge",
    text: "Guide buyers on any page with contextual answers, dynamic questions, summaries, and voice-ready support.",
    accent: "border-orange-500",
  },
  {
    title: "Contact Intelligence",
    text: "Enrich emails, verify deliverability, score reputation, and prepare records for CRM or sales workflows.",
    accent: "border-blue-500",
  },
  {
    title: "AI SDR",
    text: "Research companies, find ICP-fit prospects, generate pain-point-aware outreach, and schedule follow-ups.",
    accent: "border-amber-500",
  },
  {
    title: "Campaign Automation",
    text: "Run email sequences, newsletters, segmented campaigns, behavioral nudges, and reactivation flows.",
    accent: "border-rose-500",
  },
  {
    title: "Referral Engine",
    text: "Create trackable referral links, educate customers, and reward advocacy across each customer journey.",
    accent: "border-emerald-500",
  },
];

const ECOMMERCE_SIGNALS = [
  "Product pages viewed",
  "Buying timeframe",
  "Cart or quote intent",
  "Repeat visit patterns",
  "Referral source",
  "Next product to stock",
];

function JourneyHero() {
  return (
    <section className="relative min-h-[86vh] overflow-hidden bg-slate-950 text-white">
      <img
        src="/screenshot-full.webp"
        alt="VenMail customer workspace with email, automation, and customer context"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-900/46" />
      <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            AI Customer Journey CRM
          </div>
          <h1 className="mb-6 max-w-5xl text-4xl font-bold leading-[1.05] md:text-7xl">
            Turn every visitor into a remembered customer journey.
          </h1>
          <p className="mb-8 max-w-3xl text-lg leading-8 text-white/78 md:text-2xl md:leading-9">
            VenMail connects visitor memory, AI chat, contact intelligence, SDR automation, email campaigns, and referrals so your team knows who to help, what they care about, and the best next action.
          </p>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://m.venmail.io/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-orange-100"
            >
              Audit my customer journey
            </a>
            <a
              href="#journey-map"
              className="inline-flex items-center justify-center border border-white/30 px-7 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              See VenMail in action
            </a>
          </div>
          <dl className="grid max-w-3xl grid-cols-1 gap-3 text-sm text-white/72 sm:grid-cols-3">
            <div className="border-l border-orange-400 pl-4">
              <dt className="font-semibold text-white">Recognize</dt>
              <dd>Every visit, referral, and return signal</dd>
            </div>
            <div className="border-l border-teal-400 pl-4">
              <dt className="font-semibold text-white">Respond</dt>
              <dd>AI chat, email, SDR, and booking</dd>
            </div>
            <div className="border-l border-blue-400 pl-4">
              <dt className="font-semibold text-white">Retain</dt>
              <dd>Campaigns, referrals, and customer memory</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function CustomerJourneyMap() {
  return (
    <section id="journey-map" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-orange-600">The customer journey operating system</p>
          <h2 className="mb-5 text-3xl font-bold leading-tight text-gray-950 md:text-5xl">
            From first impression to retained customer, VenMail keeps the context alive.
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            The landing page should sell the whole loop: acquisition, recognition, conversation, qualification, follow-up, retention, and referrals.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {JOURNEY_STEPS.map((step, index) => (
            <div key={step.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase text-gray-500">{step.label}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-950">{step.title}</h3>
              <p className="leading-7 text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomerJourneyModules() {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-3 text-sm font-semibold uppercase text-teal-700">One journey, connected modules</p>
            <h2 className="text-3xl font-bold leading-tight text-gray-950 md:text-5xl">
              Not just email. The memory layer for sales, marketing, support, and referrals.
            </h2>
          </div>
          <p className="text-lg leading-8 text-gray-600 lg:col-span-5">
            Email remains the infrastructure, but the market-facing promise is stronger: VenMail helps businesses understand customers and automate the right action across channels.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CUSTOMER_JOURNEY_MODULES.map((module) => (
            <article key={module.title} className={`rounded-lg border-t-4 ${module.accent} bg-white p-6 shadow-sm`}>
              <h3 className="mb-3 text-xl font-bold text-gray-950">{module.title}</h3>
              <p className="leading-7 text-gray-600">{module.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcommerceGrowthSection() {
  return (
    <section className="bg-[#101820] py-16 text-white lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
        <div className="lg:col-span-5">
          <p className="mb-3 text-sm font-semibold uppercase text-orange-300">Ecommerce growth wedge</p>
          <h2 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
            Help stores sell what customers want now and stock what they will want next.
          </h2>
          <p className="mb-8 text-lg leading-8 text-white/72">
            For ecommerce, VenMail should be positioned as a revenue system: capture intent, ask smart questions, recover interest, trigger campaigns, and learn which products deserve inventory.
          </p>
          <a
            href="/ecommerce-crm"
            className="inline-flex items-center justify-center bg-orange-500 px-7 py-4 text-base font-semibold text-white transition hover:bg-orange-600"
          >
            Explore ecommerce CRM
          </a>
        </div>
        <div className="lg:col-span-7">
          <div className="grid gap-3 sm:grid-cols-2">
            {ECOMMERCE_SIGNALS.map((signal) => (
              <div key={signal} className="rounded-lg border border-white/12 bg-white/10 p-5">
                <span className="text-sm font-semibold text-orange-200">Signal captured</span>
                <p className="mt-2 text-lg font-semibold text-white">{signal}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-lg border border-teal-300/30 bg-teal-300/10 p-6">
            <p className="text-sm font-semibold uppercase text-teal-200">Next best action</p>
            <p className="mt-2 text-xl font-semibold text-white">
              Send the right campaign, ask the right question, suggest the right product, or alert the team before the customer disappears.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyAuditCTA() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase text-orange-600">Lead magnet</p>
        <h2 className="mb-5 text-3xl font-bold leading-tight text-gray-950 md:text-5xl">
          Start with a customer journey audit, not a generic signup.
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-gray-600">
          The strongest landing-page conversion path is a short diagnostic that asks the visitor what they sell, where leads come from, how they follow up, and what retention problem they need solved.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://m.venmail.io/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-slate-950 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
          >
            Build my journey audit
          </a>
          <a
            href="/customer-journey-automation"
            className="inline-flex items-center justify-center border border-gray-300 px-8 py-4 text-base font-semibold text-gray-900 transition hover:border-gray-900"
          >
            View the journey model
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <DefaultLayout>
      <ChristmasSparkleWrapper className="bg-white">
        <JourneyHero />
      </ChristmasSparkleWrapper>
      <CustomerJourneyMap />
      <CustomerJourneyModules />
      <EcommerceGrowthSection />
      
      {/* Product Showcase — dark infrastructure cards */}
      <ProductShowcase />

      {/* Batteries — hub-and-spoke animation showing built-in tools */}
      <BatteriesSection />

      {/* CountUp Stats Section */}
      <CountUpStats />
      
      <BusinessesSection />
      <CinematicHowItWorks />
      <DevelopersSection />
      <MobileAppsSection />
      <AIWorkflowShowcase />

      {/* Pricing Comparison */}
      <CostComparisonSlider hasButton={true} />

      <JourneyAuditCTA />

      {/* Footer CTA */}
      <section className="bg-gray-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 text-sm font-medium text-white/70">
            Free base tier · No per-seat fees · BYOS storage
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Stop renting your email infrastructure.
          </h2>
          <a
            href="#for-business"
            className="inline-flex items-center text-base md:text-lg font-medium text-white/90 hover:text-white transition-colors mb-6"
          >
            See how your business runs better
          </a>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Deploy Venmail on your own storage. Your email data stays under your control in the storage you manage. No per-seat tax as you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="https://m.venmail.io/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-white hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </a>
            <a
              href="/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/30 hover:bg-white/10 transition-colors"
            >
              View Pricing
            </a>
          </div>
          <p className="text-sm text-white/50">Join 7,100+ users already using Venmail</p>
        </div>
      </section>
    </DefaultLayout>
  );
};
