import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const DURATION_FRAMES = 240; // 8s at 30fps

export default function WhiteLabelClip() {
  const frame = useCurrentFrame();

  // Morph progress (0 = Venmail, 1 = Acme Mail)
  const morphProgress = interpolate(frame, [60, 120], [0, 1], { extrapolateRight: "clamp" });

  // Color interpolation
  const r = interpolate(morphProgress, [0, 1], [255, 59]);
  const g = interpolate(morphProgress, [0, 1], [92, 130]);
  const b = interpolate(morphProgress, [0, 1], [57, 246]);
  const accentColor = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;

  const fadeIn = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const taglineOpacity = interpolate(frame, [150, 175], [0, 1], { extrapolateRight: "clamp" });

  const brandName = morphProgress < 0.5 ? "Venmail" : "Acme Mail";
  const domain = morphProgress < 0.5 ? "@venmail.io" : "@acmemail.com";

  return (
    <AbsoluteFill style={{ background: "#020617", fontFamily: "Inter, system-ui, sans-serif", opacity: fadeIn }}>
      {/* Simulated interface */}
      <div style={{ position: "absolute", top: 40, left: 40, right: 40, bottom: 80 }}>
        {/* Header bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, padding: "12px 16px", background: "#111", borderRadius: "8px 8px 0 0", border: "1px solid #333" }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: accentColor }} />
          <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", transition: "all 0.3s" }}>
            {brandName}
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginLeft: "auto" }}>
            {domain}
          </div>
        </div>

        {/* Sidebar + content */}
        <div style={{ display: "flex", gap: 0, height: 200 }}>
          <div style={{ width: 140, background: "#111", padding: 12, borderRight: "1px solid #333", borderLeft: "1px solid #333" }}>
            {["Inbox", "Sent", "Campaigns"].map((item, i) => (
              <div key={item} style={{ padding: "8px 10px", borderRadius: 4, fontSize: 12, color: i === 0 ? "#fff" : "rgba(255,255,255,0.5)", background: i === 0 ? `${accentColor}20` : "transparent", marginBottom: 2 }}>
                {item}
              </div>
            ))}
          </div>
          <div style={{ flex: 1, background: "#0a0a0a", padding: 16, border: "1px solid #333", borderLeft: "none" }}>
            {["Partnership inquiry", "Support ticket #4821", "Welcome to " + brandName].map((subject, i) => (
              <div key={i} style={{ padding: "8px 0", borderBottom: "1px solid #222", fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
                {subject}
              </div>
            ))}
          </div>
        </div>

        {/* Accent bar at bottom */}
        <div style={{ height: 3, background: `linear-gradient(90deg, ${accentColor}, transparent)`, borderRadius: "0 0 8px 8px" }} />
      </div>

      {/* Tagline */}
      <div style={{ position: "absolute", bottom: 24, left: 0, right: 0, textAlign: "center", opacity: taglineOpacity }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>Your Brand. Our Infrastructure.</div>
      </div>
    </AbsoluteFill>
  );
}

export const whiteLabelClipConfig = {
  id: "WhiteLabelClip",
  component: WhiteLabelClip,
  durationInFrames: DURATION_FRAMES,
  fps: 30,
  width: 640,
  height: 360,
};
