import { AbsoluteFill, useCurrentFrame, interpolate, Img, Sequence } from "remotion";

const DURATION_FRAMES = 360; // 12s at 30fps

function InboxScene() {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const scale = interpolate(frame, [0, 30], [1.05, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ opacity, transform: `scale(${scale})`, backgroundColor: "#f9fafb" }}>
      {/* Simulated inbox UI */}
      <div style={{ padding: 40, fontFamily: "Inter, system-ui, sans-serif" }}>
        <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
          <div style={{ width: 200, height: "100%", background: "#fff", borderRadius: 8, padding: 16, border: "1px solid #e5e7eb" }}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16, color: "#111" }}>Venmail</div>
            {["Inbox", "Sent", "Drafts", "Campaigns", "Contacts"].map((item, i) => (
              <div key={item} style={{ padding: "8px 12px", borderRadius: 6, fontSize: 14, color: i === 0 ? "#FF5C39" : "#6b7280", background: i === 0 ? "#FFEFEB" : "transparent", fontWeight: i === 0 ? 600 : 400, marginBottom: 4 }}>
                {item}
              </div>
            ))}
          </div>
          <div style={{ flex: 1, background: "#fff", borderRadius: 8, padding: 16, border: "1px solid #e5e7eb" }}>
            <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 16, color: "#111" }}>Inbox <span style={{ color: "#9ca3af", fontWeight: 400 }}>— 12 unread</span></div>
            {[
              { from: "Sarah Chen", subject: "Q3 Partnership Proposal", time: "2m ago", unread: true },
              { from: "DevOps Team", subject: "Infrastructure migration complete", time: "15m ago", unread: true },
              { from: "Legal Dept", subject: "NDA review — signatures needed", time: "1h ago", unread: false },
              { from: "Alex Morgan", subject: "Campaign results: 47% open rate", time: "2h ago", unread: false },
            ].map((email, i) => {
              const rowOpacity = interpolate(frame, [15 + i * 8, 30 + i * 8], [0, 1], { extrapolateRight: "clamp" });
              return (
                <div key={i} style={{ opacity: rowOpacity, display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #f3f4f6" }}>
                  <div>
                    <div style={{ fontWeight: email.unread ? 700 : 400, fontSize: 14, color: "#111" }}>{email.from}</div>
                    <div style={{ fontSize: 13, color: "#6b7280" }}>{email.subject}</div>
                  </div>
                  <div style={{ fontSize: 12, color: "#9ca3af" }}>{email.time}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
}

function AIRewriteScene() {
  const frame = useCurrentFrame();
  const shimmer = interpolate(frame, [0, 60], [0, 100], { extrapolateRight: "clamp" });
  const buttonPulse = Math.sin(frame * 0.15) * 0.1 + 1;

  return (
    <AbsoluteFill style={{ backgroundColor: "#f9fafb", padding: 40, fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", background: "#fff", borderRadius: 12, padding: 32, border: "1px solid #e5e7eb", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
        <div style={{ fontSize: 14, color: "#6b7280", marginBottom: 12 }}>To: sarah@partnerco.com</div>
        <div style={{ fontSize: 14, color: "#6b7280", marginBottom: 20 }}>Subject: Re: Q3 Partnership Proposal</div>

        {/* Original text fading out */}
        <div style={{ opacity: interpolate(frame, [20, 40], [1, 0.3], { extrapolateRight: "clamp" }), fontSize: 15, lineHeight: 1.7, color: "#374151", marginBottom: 16 }}>
          Hi Sarah, thanks for the proposal. We think it looks good and would like to move forward with the partnership...
        </div>

        {/* AI button */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16, transform: `scale(${buttonPulse})` }}>
          <div style={{ background: "linear-gradient(135deg, #FF5C39, #ea580c)", color: "white", padding: "8px 16px", borderRadius: 6, fontSize: 13, fontWeight: 600 }}>
            AI Rewrite
          </div>
        </div>

        {/* Rewritten text appearing */}
        <div style={{ opacity: interpolate(frame, [40, 70], [0, 1], { extrapolateRight: "clamp" }), fontSize: 15, lineHeight: 1.7, color: "#111", background: `linear-gradient(90deg, #FFEFEB ${shimmer}%, transparent ${shimmer}%)` }}>
          Hi Sarah, your Q3 proposal aligns well with our strategic goals. We'd like to proceed — let's schedule a call this week to discuss implementation timelines and resource allocation.
        </div>
      </div>
    </AbsoluteFill>
  );
}

function AnalyticsScene() {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#f9fafb", padding: 40, fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 24 }}>Campaign Analytics</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16 }}>
          {[
            { label: "Delivered", value: interpolate(frame, [0, 60], [0, 1247], { extrapolateRight: "clamp" }), color: "#22c55e" },
            { label: "Opened", value: interpolate(frame, [10, 70], [0, 586], { extrapolateRight: "clamp" }), color: "#3b82f6" },
            { label: "Clicked", value: interpolate(frame, [20, 80], [0, 203], { extrapolateRight: "clamp" }), color: "#FF5C39" },
            { label: "Replied", value: interpolate(frame, [30, 90], [0, 89], { extrapolateRight: "clamp" }), color: "#8b5cf6" },
          ].map((stat) => (
            <div key={stat.label} style={{ background: "#fff", borderRadius: 8, padding: 20, border: "1px solid #e5e7eb", textAlign: "center" }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: stat.color }}>{Math.round(stat.value)}</div>
              <div style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
}

export default function HeroFlythrough() {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#f9fafb" }}>
      <Sequence from={0} durationInFrames={120}>
        <InboxScene />
      </Sequence>
      <Sequence from={90} durationInFrames={150}>
        <AIRewriteScene />
      </Sequence>
      <Sequence from={210} durationInFrames={150}>
        <AnalyticsScene />
      </Sequence>
    </AbsoluteFill>
  );
}

export const heroFlythroughConfig = {
  id: "HeroFlythrough",
  component: HeroFlythrough,
  durationInFrames: DURATION_FRAMES,
  fps: 30,
  width: 1280,
  height: 720,
};
