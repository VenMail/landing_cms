import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { trackSectionView, trackVideoEvent } from "@/utils/trackConversion";

const Player = dynamic(
  () => import("@remotion/player").then((mod) => mod.Player),
  { ssr: false }
);

const LazyProductWalkthrough = dynamic(
  () => import("@/remotion/compositions/ProductWalkthrough"),
  { ssr: false }
);

const FEATURES = [
  {
    title: "AI-Assisted Inbox",
    description: "AI assists with sorting, drafting, and follow-ups",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Email Campaigns",
    description: "Bulk sends, sequences, analytics",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Integrated CRM",
    description: "Contacts, prospects, lead discovery",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Calendar & Meetings",
    description: "Scheduling, booking links, video calls",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Document & Payment Workflows",
    description: "Approval workflows, invoicing, signatures",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "API-Ready",
    description: "REST API, webhooks, white-label ready",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export default function ProductDemo() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (inView) {
      trackSectionView("product_demo");
    }
  }, [inView]);

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            See Venmail in Action
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A day with Venmail: inbox, AI assistance, campaigns, prospect discovery, calendar, and analytics — all in one platform.
          </p>
        </div>

        {/* Remotion Player */}
        <div className="mb-16 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
          {isClient && LazyProductWalkthrough ? (
            <Player
              component={LazyProductWalkthrough}
              durationInFrames={1350}
              fps={30}
              compositionWidth={1280}
              compositionHeight={720}
              style={{ width: "100%", aspectRatio: "16/9" }}
              controls
              autoPlay={inView}
              loop={false}
              clickToPlay
              showVolumeControls={false}
              onPlay={() => trackVideoEvent("played", "product_walkthrough")}
              onEnded={() => trackVideoEvent("completed", "product_walkthrough")}
            />
          ) : (
            <div
              className="w-full bg-gray-200 flex items-center justify-center"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="text-gray-400 text-lg">Loading demo...</div>
            </div>
          )}
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 p-5 rounded-lg hover:bg-gray-50 transition-colors"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(12px)",
                transition: `all 0.4s ease ${0.1 + i * 0.08}s`,
              }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
