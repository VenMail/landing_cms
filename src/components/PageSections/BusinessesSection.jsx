import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { trackSectionView } from "@/utils/trackConversion";

const AUDIENCES = [
  {
    title: "Enterprise & Regulated Industries",
    story:
      "Review storage location, access controls and service processing with our team before moving regulated data. Your requirements determine the appropriate configuration.",
    bestFor: ["Government", "Healthcare", "Legal", "Finance"],
    image: "/email-dashboard-preview.png",
    imageAlt: "Venmail inbox with organizational mail controls",
    imagePosition: "object-left-top",
    accentColor: "blue",
  },
  {
    title: "Hosting Providers & Resellers",
    story:
      "Your brand, your infrastructure, your margin.",
    bestFor: ["Hosting companies", "ISPs", "Telcos", "MSPs"],
    image: "/screenshot-full.webp",
    imageAlt: "Venmail mail workspace on a laptop",
    imagePosition: "object-center",
    accentColor: "purple",
  },
  {
    title: "Growing Organizations",
    story:
      "Add team members without per-seat charges. Choose storage capacity and features for your workspace. Managed plans currently use shared storage.",
    bestFor: ["Startups", "SMEs", "Schools", "Nonprofits"],
    image: "/campaign_composer.png",
    imageAlt: "Venmail campaign composer",
    imagePosition: "object-left-top",
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
                className={`group premium-card rounded-lg overflow-hidden ${styles.border} transition-all duration-200`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease ${i * 0.12}s`,
                }}
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <Image
                    src={audience.image}
                    alt={audience.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`object-cover ${audience.imagePosition} transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.02]`}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-white/5" />
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
