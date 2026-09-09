import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { trackSectionView } from "@/utils/trackConversion";

const Player = dynamic(
  () => import("@remotion/player").then((mod) => mod.Player),
  { ssr: false }
);

const LazySovereigntyClip = dynamic(
  () => import("@/remotion/compositions/SovereigntyClip"),
  { ssr: false }
);

const LazyWhiteLabelClip = dynamic(
  () => import("@/remotion/compositions/WhiteLabelClip"),
  { ssr: false }
);

const LazyGrowthScalingClip = dynamic(
  () => import("@/remotion/compositions/GrowthScalingClip"),
  { ssr: false }
);

const AUDIENCES = [
  {
    title: "Enterprise & Regulated Industries",
    story:
      "Review storage location, access controls and service processing with our team before moving regulated data. Your requirements determine the appropriate configuration.",
    bestFor: ["Government", "Healthcare", "Legal", "Finance"],
    clip: { component: LazySovereigntyClip, frames: 240 },
    accentColor: "blue",
  },
  {
    title: "Hosting Providers & Resellers",
    story:
      "Your brand, your infrastructure, your margin.",
    bestFor: ["Hosting companies", "ISPs", "Telcos", "MSPs"],
    clip: { component: LazyWhiteLabelClip, frames: 240 },
    accentColor: "purple",
  },
  {
    title: "Growing Organizations",
    story:
      "Add team members without per-seat charges. Choose storage capacity, hosting region and features for the workspace you need.",
    bestFor: ["Startups", "SMEs", "Schools", "Nonprofits"],
    clip: { component: LazyGrowthScalingClip, frames: 240 },
    accentColor: "green",
  },
];

const ACCENT_STYLES = {
  blue: {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    border: "hover:border-blue-200",
  },
  purple: {
    badge: "bg-purple-50 text-purple-700 border-purple-200",
    border: "hover:border-purple-200",
  },
  green: {
    badge: "bg-green-50 text-green-700 border-green-200",
    border: "hover:border-green-200",
  },
};

export default function BusinessesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (inView) {
      trackSectionView("who_this_is_for");
    }
  }, [inView]);

  return (
    <section
      id="for-business"
      ref={ref}
      className="section-padding bg-white scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            One Platform, Three Use Cases
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            For sovereignty, reselling, or cost efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {AUDIENCES.map((audience, i) => {
            const styles = ACCENT_STYLES[audience.accentColor];
            return (
              <div
                key={i}
                className={`premium-card rounded-lg overflow-hidden ${styles.border} transition-all duration-200`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease ${i * 0.12}s`,
                }}
              >
                {/* Remotion clip */}
                <div className="aspect-video bg-slate-950 relative">
                  {isClient && audience.clip.component ? (
                    <Player
                      component={audience.clip.component}
                      durationInFrames={audience.clip.frames}
                      fps={30}
                      compositionWidth={640}
                      compositionHeight={360}
                      style={{ width: "100%", height: "100%" }}
                      autoPlay={inView}
                      loop
                      showVolumeControls={false}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm">
                      Loading...
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {audience.story}
                  </p>
                  <div>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                      Best for
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {audience.bestFor.map((label) => (
                        <span
                          key={label}
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${styles.badge}`}
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
