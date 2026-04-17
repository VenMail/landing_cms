import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { trackSectionView, trackVideoEvent } from "@/utils/trackConversion";

const Player = dynamic(
  () => import("@remotion/player").then((mod) => mod.Player),
  { ssr: false }
);

const LazyEmailReckoning = dynamic(
  () => import("@/remotion/compositions/EmailReckoning"),
  { ssr: false }
);

export default function EmailReckoningVideo() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (inView) {
      trackSectionView("email_reckoning");
    }
  }, [inView]);

  return (
    <section ref={ref} className="bg-deep-dark py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">
            How we got here
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Email was invented to connect people.
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Then it became everything. Then it broke. This is the story of how we got here — and why it&apos;s time for a reset.
          </p>
        </div>

        {/* Remotion cinematic video */}
        <div className="rounded-lg overflow-hidden border border-white/10 max-w-4xl mx-auto">
          {isClient && LazyEmailReckoning ? (
            <Player
              component={LazyEmailReckoning}
              durationInFrames={1050}
              fps={30}
              compositionWidth={1280}
              compositionHeight={720}
              style={{ width: "100%", aspectRatio: "16/9" }}
              controls
              autoPlay={inView}
              loop={false}
              clickToPlay
              showVolumeControls={false}
              onPlay={() => trackVideoEvent("played", "email_reckoning")}
              onEnded={() => trackVideoEvent("completed", "email_reckoning")}
            />
          ) : (
            <div
              className="w-full bg-slate-800 flex items-center justify-center"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="text-white/30 text-lg">Loading...</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
