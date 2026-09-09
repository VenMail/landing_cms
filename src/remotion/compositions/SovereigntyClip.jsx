import { AbsoluteFill, useCurrentFrame, interpolate, Sequence } from "remotion";

const DURATION_FRAMES = 240; // 8s at 30fps

export default function SovereigntyClip() {
  const frame = useCurrentFrame();

  // Scene 1: Shared inbox (0-90 frames)
  const inboxOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const inboxFadeOut = interpolate(frame, [80, 100], [1, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // Scene 2: Data flow (90-180 frames)
  const flowOpacity = interpolate(frame, [90, 110], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const flowFadeOut = interpolate(frame, [170, 190], [1, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const arrowProgress = interpolate(frame, [110, 160], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Scene 3: Lock (180-240 frames)
  const lockOpacity = interpolate(frame, [180, 200], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const lockScale = interpolate(frame, [180, 210], [0.5, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: "#020617", fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Scene 1: Shared inbox */}
      <div style={{ position: "absolute", inset: 0, opacity: inboxOpacity * inboxFadeOut, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 32 }}>
        <div style={{ background: "#111", borderRadius: 8, padding: 16, width: 400, border: "1px solid #333" }}>
          <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 12 }}>Shared Inbox — Legal Team</div>
          {["Alice → NDA Review", "Bob → Client Contract", "Carol → Compliance Audit"].map((item, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #222", opacity: interpolate(frame, [15 + i * 10, 30 + i * 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
              <span style={{ color: "#e5e7eb", fontSize: 13 }}>{item}</span>
              <span style={{ color: "#22c55e", fontSize: 11, fontWeight: 600 }}>Assigned</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scene 2: Data flow */}
      <div style={{ position: "absolute", inset: 0, opacity: flowOpacity * flowFadeOut, display: "flex", justifyContent: "center", alignItems: "center", gap: 60 }}>
        {/* Emails */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[1, 2, 3].map((_, i) => (
            <div key={i} style={{ width: 40, height: 30, background: "#3b82f6", borderRadius: 4, opacity: interpolate(frame, [100 + i * 8, 115 + i * 8], [0, 0.8], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }), display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
              📧
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div style={{ width: 100, height: 4, background: "#333", borderRadius: 2, position: "relative" }}>
          <div style={{ width: `${arrowProgress * 100}%`, height: "100%", background: "linear-gradient(90deg, #22c55e, #16a34a)", borderRadius: 2 }} />
          <div style={{ position: "absolute", right: -8, top: -6, fontSize: 16, opacity: arrowProgress }}>→</div>
        </div>

        {/* Storage bucket */}
        <div style={{ background: "#14532d", border: "2px solid #22c55e", borderRadius: 8, padding: 16, textAlign: "center" }}>
          <div style={{ fontSize: 24, marginBottom: 4 }}>🪣</div>
          <div style={{ fontSize: 12, color: "#22c55e", fontWeight: 700 }}>Your S3 Bucket</div>
        </div>
      </div>

      {/* Scene 3: Lock + text */}
      <div style={{ position: "absolute", inset: 0, opacity: lockOpacity, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div style={{ transform: `scale(${lockScale})`, fontSize: 48, marginBottom: 16 }}>🔒</div>
        <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>
          Choose Your Storage
        </div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 8 }}>
          Storage location and service processing are separate.
        </div>
      </div>
    </AbsoluteFill>
  );
}

export const sovereigntyClipConfig = {
  id: "SovereigntyClip",
  component: SovereigntyClip,
  durationInFrames: DURATION_FRAMES,
  fps: 30,
  width: 640,
  height: 360,
};
