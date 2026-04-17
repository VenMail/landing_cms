import { AbsoluteFill, useCurrentFrame, interpolate, Sequence } from "remotion";

const DURATION_FRAMES = 1050; // 35s at 30fps

function Chapter({ year, headline, subtext, accentColor = "#FF5C39" }) {
  const frame = useCurrentFrame();
  const yearOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const yearScale = interpolate(frame, [0, 30], [0.8, 1], { extrapolateRight: "clamp" });
  const headlineOpacity = interpolate(frame, [20, 45], [0, 1], { extrapolateRight: "clamp" });
  const headlineY = interpolate(frame, [20, 45], [30, 0], { extrapolateRight: "clamp" });
  const subtextOpacity = interpolate(frame, [40, 65], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [140, 170], [1, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ opacity: fadeOut, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 60, background: "#020617" }}>
      <div style={{ opacity: yearOpacity, transform: `scale(${yearScale})`, fontSize: 120, fontWeight: 800, color: accentColor, letterSpacing: "-0.04em", fontFamily: "Inter, system-ui, sans-serif", lineHeight: 1 }}>
        {year}
      </div>
      <div style={{ opacity: headlineOpacity, transform: `translateY(${headlineY}px)`, fontSize: 42, fontWeight: 700, color: "#fff", textAlign: "center", maxWidth: 800, marginTop: 24, fontFamily: "Inter, system-ui, sans-serif", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
        {headline}
      </div>
      <div style={{ opacity: subtextOpacity, fontSize: 20, color: "rgba(255,255,255,0.6)", textAlign: "center", maxWidth: 600, marginTop: 16, fontFamily: "Inter, system-ui, sans-serif", lineHeight: 1.6 }}>
        {subtext}
      </div>
    </AbsoluteFill>
  );
}

function ChaosScene() {
  const frame = useCurrentFrame();
  const envelopeCount = Math.min(Math.floor(frame / 2), 40);
  const envelopes = Array.from({ length: envelopeCount }, (_, i) => ({
    x: (Math.sin(i * 2.7) * 0.5 + 0.5) * 100,
    y: (Math.cos(i * 1.3) * 0.5 + 0.5) * 100,
    rotation: Math.sin(i * 0.8) * 20,
    scale: 0.6 + Math.sin(i * 1.1) * 0.3,
    opacity: interpolate(frame, [i * 2, i * 2 + 15], [0, 0.7], { extrapolateRight: "clamp" }),
  }));

  const textOpacity = interpolate(frame, [60, 80], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [150, 180], [1, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: "#020617", opacity: fadeOut }}>
      {envelopes.map((env, i) => (
        <div key={i} style={{ position: "absolute", left: `${env.x}%`, top: `${env.y}%`, transform: `rotate(${env.rotation}deg) scale(${env.scale})`, opacity: env.opacity, fontSize: 24 }}>
          📧
        </div>
      ))}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", zIndex: 10 }}>
        <div style={{ opacity: textOpacity, fontSize: 100, fontWeight: 800, color: "#ef4444", fontFamily: "Inter, system-ui, sans-serif", letterSpacing: "-0.04em" }}>
          2000s
        </div>
        <div style={{ opacity: textOpacity, fontSize: 42, fontWeight: 700, color: "#fff", textAlign: "center", fontFamily: "Inter, system-ui, sans-serif", marginTop: 16 }}>
          Then came the flood.
        </div>
        <div style={{ opacity: textOpacity, fontSize: 20, color: "rgba(255,255,255,0.5)", textAlign: "center", maxWidth: 500, marginTop: 12, fontFamily: "Inter, system-ui, sans-serif" }}>
          Spam. Mass blasts. CC chains. The inbox became a battlefield.
        </div>
      </div>
    </AbsoluteFill>
  );
}

function BandAidScene() {
  const frame = useCurrentFrame();
  const fadeOut = interpolate(frame, [150, 180], [1, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  const bandaids = ["Smart Tabs", "Priority Inbox", "AI Sorting", "Snooze", "Undo Send"];

  return (
    <AbsoluteFill style={{ background: "#020617", opacity: fadeOut, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 60 }}>
      <div style={{ opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" }), fontSize: 100, fontWeight: 800, color: "#f59e0b", fontFamily: "Inter, system-ui, sans-serif", letterSpacing: "-0.04em" }}>
        2010s
      </div>
      <div style={{ opacity: interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" }), fontSize: 42, fontWeight: 700, color: "#fff", textAlign: "center", fontFamily: "Inter, system-ui, sans-serif", marginTop: 16, marginBottom: 32 }}>
        Big Tech promised to fix it.
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        {bandaids.map((label, i) => {
          const pillOpacity = interpolate(frame, [50 + i * 10, 65 + i * 10], [0, 1], { extrapolateRight: "clamp" });
          const strikethrough = interpolate(frame, [100 + i * 5, 110 + i * 5], [0, 1], { extrapolateRight: "clamp" });
          return (
            <div key={label} style={{ opacity: pillOpacity, position: "relative", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "10px 20px", borderRadius: 24, fontSize: 16, color: "rgba(255,255,255,0.7)", fontFamily: "Inter, system-ui, sans-serif" }}>
              {label}
              <div style={{ position: "absolute", left: 8, right: 8, top: "50%", height: 2, background: "#ef4444", transform: `scaleX(${strikethrough})`, transformOrigin: "left" }} />
            </div>
          );
        })}
      </div>
      <div style={{ opacity: interpolate(frame, [120, 145], [0, 1], { extrapolateRight: "clamp" }), fontSize: 20, color: "rgba(255,255,255,0.5)", marginTop: 32, fontFamily: "Inter, system-ui, sans-serif" }}>
        They treated the symptom, not the cause.
      </div>
    </AbsoluteFill>
  );
}

function ResetRevealScene() {
  const frame = useCurrentFrame();
  const questionOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const questionScale = interpolate(frame, [0, 30], [0.9, 1], { extrapolateRight: "clamp" });
  const answerOpacity = interpolate(frame, [60, 90], [0, 1], { extrapolateRight: "clamp" });
  const glowIntensity = interpolate(frame, [90, 150], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: "#020617", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 60 }}>
      <div style={{ opacity: questionOpacity, transform: `scale(${questionScale})`, fontSize: 52, fontWeight: 800, color: "#fff", textAlign: "center", fontFamily: "Inter, system-ui, sans-serif", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
        What if we reset?
      </div>
      <div style={{ opacity: answerOpacity, marginTop: 32 }}>
        <div style={{ fontSize: 28, fontWeight: 600, textAlign: "center", fontFamily: "Inter, system-ui, sans-serif", letterSpacing: "-0.01em", lineHeight: 1.5, background: `linear-gradient(135deg, #FF5C39, #ea580c)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: `drop-shadow(0 0 ${glowIntensity * 20}px rgba(255,92,57,0.3))` }}>
          Email as infrastructure you own.
        </div>
      </div>
      <div style={{ opacity: interpolate(frame, [100, 130], [0, 1], { extrapolateRight: "clamp" }), fontSize: 18, color: "rgba(255,255,255,0.5)", marginTop: 24, textAlign: "center", maxWidth: 500, fontFamily: "Inter, system-ui, sans-serif", lineHeight: 1.6 }}>
        Your storage. Your domain. Your data. No per-seat fees. No vendor lock-in.
      </div>
    </AbsoluteFill>
  );
}

export default function EmailReckoning() {
  return (
    <AbsoluteFill style={{ backgroundColor: "#020617" }}>
      {/* Chapter 1: 1971 — The beginning */}
      <Sequence from={0} durationInFrames={180}>
        <Chapter year="1971" headline="Email was invented to connect people." subtext="A message sent between two machines. No subject line, no spam filter. Just a connection." accentColor="#22c55e" />
      </Sequence>

      {/* Chapter 2: 1990s — Email becomes everything */}
      <Sequence from={180} durationInFrames={180}>
        <Chapter year="1990s" headline="Email became the OS of work." subtext="Business. Sales. Support. Invoices. The inbox became foundational infrastructure." accentColor="#3b82f6" />
      </Sequence>

      {/* Chapter 3: 2000s — The flood */}
      <Sequence from={360} durationInFrames={180}>
        <ChaosScene />
      </Sequence>

      {/* Chapter 4: 2010s — Band-aids */}
      <Sequence from={540} durationInFrames={180}>
        <BandAidScene />
      </Sequence>

      {/* Chapter 5: Today — The Reset */}
      <Sequence from={720} durationInFrames={330}>
        <ResetRevealScene />
      </Sequence>
    </AbsoluteFill>
  );
}

export const emailReckoningConfig = {
  id: "EmailReckoning",
  component: EmailReckoning,
  durationInFrames: DURATION_FRAMES,
  fps: 30,
  width: 1280,
  height: 720,
};
