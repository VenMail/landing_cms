import { AbsoluteFill, useCurrentFrame, interpolate, Sequence } from "remotion";

const DURATION_FRAMES = 1350; // 45s at 30fps

function ChapterLabel({ label }) {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15, 30, 45], [0, 1, 1, 0], { extrapolateRight: "clamp" });
  return (
    <div style={{ position: "absolute", top: 24, left: 24, opacity, background: "rgba(0,0,0,0.7)", color: "#fff", padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, fontFamily: "Inter, system-ui, sans-serif", zIndex: 100 }}>
      {label}
    </div>
  );
}

function InboxScene() {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ opacity, background: "#f9fafb", padding: 32, fontFamily: "Inter, system-ui, sans-serif" }}>
      <ChapterLabel label="Smart Inbox" />
      <div style={{ display: "flex", gap: 16, height: "100%" }}>
        {/* Sidebar */}
        <div style={{ width: 180, background: "#fff", borderRadius: 8, padding: 16, border: "1px solid #e5e7eb" }}>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, color: "#111" }}>Folders</div>
          {["Inbox (12)", "Priority", "Campaigns", "Prospects", "Calendar"].map((item, i) => {
            const itemOpacity = interpolate(frame, [10 + i * 6, 20 + i * 6], [0, 1], { extrapolateRight: "clamp" });
            return (
              <div key={item} style={{ opacity: itemOpacity, padding: "8px 10px", borderRadius: 6, fontSize: 13, color: i === 0 ? "#FF5C39" : "#6b7280", background: i === 0 ? "#FFEFEB" : "transparent", fontWeight: i === 0 ? 600 : 400, marginBottom: 2 }}>
                {item}
              </div>
            );
          })}
        </div>
        {/* Email list */}
        <div style={{ flex: 1, background: "#fff", borderRadius: 8, padding: 16, border: "1px solid #e5e7eb" }}>
          {[
            { from: "Sarah Chen", subject: "Q3 Partnership Proposal", badge: "Priority", badgeColor: "#ef4444" },
            { from: "DevOps Team", subject: "Infrastructure migration complete", badge: "Internal", badgeColor: "#3b82f6" },
            { from: "AI SDR Agent", subject: "3 new prospects discovered", badge: "AI", badgeColor: "#8b5cf6" },
            { from: "Legal Dept", subject: "NDA review needed", badge: "Action", badgeColor: "#f59e0b" },
            { from: "Alex Morgan", subject: "Campaign: 47% open rate", badge: "Analytics", badgeColor: "#22c55e" },
          ].map((email, i) => {
            const rowOpacity = interpolate(frame, [20 + i * 10, 35 + i * 10], [0, 1], { extrapolateRight: "clamp" });
            return (
              <div key={i} style={{ opacity: rowOpacity, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid #f3f4f6" }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#111" }}>{email.from}</div>
                  <div style={{ fontSize: 13, color: "#6b7280" }}>{email.subject}</div>
                </div>
                <div style={{ fontSize: 11, padding: "3px 8px", borderRadius: 12, background: `${email.badgeColor}15`, color: email.badgeColor, fontWeight: 600 }}>
                  {email.badge}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
}

function ComposerScene() {
  const frame = useCurrentFrame();
  const typingProgress = interpolate(frame, [30, 120], [0, 1], { extrapolateRight: "clamp" });
  const fullText = "Hi Sarah, your Q3 proposal aligns well with our strategic goals. We'd like to proceed with the partnership — let's schedule a call this week.";
  const visibleChars = Math.floor(typingProgress * fullText.length);

  return (
    <AbsoluteFill style={{ background: "#f9fafb", padding: 32, fontFamily: "Inter, system-ui, sans-serif" }}>
      <ChapterLabel label="AI Composer" />
      <div style={{ maxWidth: 700, margin: "40px auto 0", background: "#fff", borderRadius: 12, padding: 28, border: "1px solid #e5e7eb" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <span style={{ fontSize: 13, color: "#9ca3af" }}>To:</span>
          <span style={{ fontSize: 13, color: "#111" }}>sarah@partnerco.com</span>
        </div>
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          <span style={{ fontSize: 13, color: "#9ca3af" }}>Subject:</span>
          <span style={{ fontSize: 13, color: "#111" }}>Re: Q3 Partnership Proposal</span>
        </div>
        <div style={{ fontSize: 15, lineHeight: 1.7, color: "#111", minHeight: 80 }}>
          {fullText.slice(0, visibleChars)}
          <span style={{ borderRight: "2px solid #FF5C39", animation: "blink 1s infinite" }}>&nbsp;</span>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 20, opacity: interpolate(frame, [130, 145], [0, 1], { extrapolateRight: "clamp" }) }}>
          <div style={{ background: "#111", color: "#fff", padding: "8px 20px", borderRadius: 4, fontSize: 13, fontWeight: 600 }}>Send</div>
          <div style={{ background: "#FFEFEB", color: "#FF5C39", padding: "8px 16px", borderRadius: 4, fontSize: 13, fontWeight: 600 }}>AI Rewrite</div>
          <div style={{ background: "#f3f4f6", color: "#6b7280", padding: "8px 16px", borderRadius: 4, fontSize: 13, fontWeight: 600 }}>Schedule</div>
        </div>
      </div>
    </AbsoluteFill>
  );
}

function CampaignScene() {
  const frame = useCurrentFrame();
  const progressWidth = interpolate(frame, [40, 120], [0, 100], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: "#f9fafb", padding: 32, fontFamily: "Inter, system-ui, sans-serif" }}>
      <ChapterLabel label="Campaign Launch" />
      <div style={{ maxWidth: 800, margin: "20px auto 0" }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 20, opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }) }}>
          New Campaign: Q3 Partner Outreach
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ background: "#fff", borderRadius: 8, padding: 20, border: "1px solid #e5e7eb" }}>
            <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 8, fontWeight: 600, textTransform: "uppercase" }}>Recipients</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#111" }}>1,247</div>
            <div style={{ fontSize: 13, color: "#6b7280" }}>from "Enterprise Leads" group</div>
          </div>
          <div style={{ background: "#fff", borderRadius: 8, padding: 20, border: "1px solid #e5e7eb" }}>
            <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 8, fontWeight: 600, textTransform: "uppercase" }}>Template</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: "#111" }}>Partnership Proposal</div>
            <div style={{ fontSize: 13, color: "#22c55e", marginTop: 4 }}>Personalized with AI</div>
          </div>
        </div>
        <div style={{ marginTop: 20, background: "#fff", borderRadius: 8, padding: 20, border: "1px solid #e5e7eb" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>Sending...</span>
            <span style={{ fontSize: 14, color: "#6b7280" }}>{Math.round(progressWidth)}%</span>
          </div>
          <div style={{ height: 6, background: "#f3f4f6", borderRadius: 3 }}>
            <div style={{ width: `${progressWidth}%`, height: "100%", background: "linear-gradient(90deg, #FF5C39, #ea580c)", borderRadius: 3, transition: "width 0.1s" }} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
}

function SDRScene() {
  const frame = useCurrentFrame();

  const prospects = [
    { name: "TechFlow Inc.", role: "CTO", score: 92, status: "Ready" },
    { name: "DataBridge Corp.", role: "VP Engineering", score: 87, status: "Ready" },
    { name: "CloudScale Ltd.", role: "IT Director", score: 84, status: "Analyzing" },
  ];

  return (
    <AbsoluteFill style={{ background: "#f9fafb", padding: 32, fontFamily: "Inter, system-ui, sans-serif" }}>
      <ChapterLabel label="SDR Agent" />
      <div style={{ maxWidth: 800, margin: "20px auto 0" }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 4, opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }) }}>
          AI Prospect Discovery
        </div>
        <div style={{ fontSize: 14, color: "#6b7280", marginBottom: 20, opacity: interpolate(frame, [10, 25], [0, 1], { extrapolateRight: "clamp" }) }}>
          3 new prospects found matching "Enterprise IT, 200+ employees"
        </div>
        {prospects.map((p, i) => {
          const cardOpacity = interpolate(frame, [30 + i * 20, 50 + i * 20], [0, 1], { extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ opacity: cardOpacity, display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff", borderRadius: 8, padding: 16, border: "1px solid #e5e7eb", marginBottom: 8 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "#111" }}>{p.name}</div>
                <div style={{ fontSize: 13, color: "#6b7280" }}>Decision-maker: {p.role}</div>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: p.score > 90 ? "#22c55e" : "#3b82f6" }}>{p.score}</div>
                <div style={{ fontSize: 12, padding: "4px 10px", borderRadius: 12, background: p.status === "Ready" ? "#dcfce7" : "#fef3c7", color: p.status === "Ready" ? "#166534" : "#92400e", fontWeight: 600 }}>
                  {p.status}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

function CalendarScene() {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#f9fafb", padding: 32, fontFamily: "Inter, system-ui, sans-serif" }}>
      <ChapterLabel label="Calendar & Meetings" />
      <div style={{ maxWidth: 800, margin: "20px auto 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: "#fff", borderRadius: 8, padding: 20, border: "1px solid #e5e7eb", opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" }) }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#111", marginBottom: 16 }}>Today's Schedule</div>
          {[
            { time: "9:00 AM", title: "Standup", color: "#3b82f6" },
            { time: "11:00 AM", title: "Partnership Call", color: "#FF5C39" },
            { time: "2:00 PM", title: "Demo Presentation", color: "#8b5cf6" },
          ].map((evt, i) => (
            <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12, opacity: interpolate(frame, [20 + i * 12, 35 + i * 12], [0, 1], { extrapolateRight: "clamp" }) }}>
              <div style={{ width: 3, background: evt.color, borderRadius: 2 }} />
              <div>
                <div style={{ fontSize: 12, color: "#9ca3af" }}>{evt.time}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>{evt.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "#fff", borderRadius: 8, padding: 20, border: "1px solid #e5e7eb", opacity: interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" }) }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#111", marginBottom: 12 }}>Booking Links</div>
          <div style={{ background: "#f9fafb", borderRadius: 8, padding: 16, border: "1px solid #e5e7eb" }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>30-min Discovery Call</div>
            <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>book.venmail.io/your-name</div>
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              {["Mon", "Tue", "Wed", "Thu"].map((day) => (
                <div key={day} style={{ padding: "6px 12px", borderRadius: 4, background: "#FFEFEB", color: "#FF5C39", fontSize: 12, fontWeight: 600 }}>
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
}

function AnalyticsDashboard() {
  const frame = useCurrentFrame();

  const stats = [
    { label: "Delivered", value: 1247, color: "#22c55e" },
    { label: "Opened", value: 586, color: "#3b82f6" },
    { label: "Clicked", value: 203, color: "#FF5C39" },
    { label: "Replied", value: 89, color: "#8b5cf6" },
  ];

  return (
    <AbsoluteFill style={{ background: "#f9fafb", padding: 32, fontFamily: "Inter, system-ui, sans-serif" }}>
      <ChapterLabel label="Analytics Dashboard" />
      <div style={{ maxWidth: 800, margin: "20px auto 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 20 }}>
          {stats.map((stat, i) => {
            const animatedValue = interpolate(frame, [10 + i * 8, 60 + i * 8], [0, stat.value], { extrapolateRight: "clamp" });
            return (
              <div key={stat.label} style={{ background: "#fff", borderRadius: 8, padding: 16, border: "1px solid #e5e7eb", textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: stat.color }}>{Math.round(animatedValue)}</div>
                <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 4 }}>{stat.label}</div>
              </div>
            );
          })}
        </div>
        {/* Simple bar chart */}
        <div style={{ background: "#fff", borderRadius: 8, padding: 20, border: "1px solid #e5e7eb" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 16 }}>Open Rate Over Time</div>
          <div style={{ display: "flex", alignItems: "end", gap: 8, height: 120 }}>
            {[35, 42, 38, 47, 52, 49, 55, 58, 53, 61, 64, 59].map((val, i) => {
              const barHeight = interpolate(frame, [30 + i * 5, 50 + i * 5], [0, val * 1.8], { extrapolateRight: "clamp" });
              return (
                <div key={i} style={{ flex: 1, height: barHeight, background: `linear-gradient(to top, #FF5C39, #fdba74)`, borderRadius: "4px 4px 0 0", opacity: 0.8 }} />
              );
            })}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
}

function RevealScene() {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: "#020617", opacity, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div style={{ fontSize: 18, color: "rgba(255,255,255,0.4)", fontFamily: "Inter, system-ui, sans-serif", marginBottom: 16, opacity: interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" }) }}>
        All running on
      </div>
      <div style={{ display: "flex", gap: 32, marginBottom: 40 }}>
        {["Your Storage", "Your Domain", "Your Data"].map((item, i) => {
          const itemOpacity = interpolate(frame, [40 + i * 15, 60 + i * 15], [0, 1], { extrapolateRight: "clamp" });
          return (
            <div key={item} style={{ opacity: itemOpacity, fontSize: 28, fontWeight: 700, color: "#fff", fontFamily: "Inter, system-ui, sans-serif", padding: "12px 24px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8 }}>
              {item}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

export default function ProductWalkthrough() {
  return (
    <AbsoluteFill style={{ backgroundColor: "#f9fafb" }}>
      <Sequence from={0} durationInFrames={180}>
        <InboxScene />
      </Sequence>
      <Sequence from={150} durationInFrames={210}>
        <ComposerScene />
      </Sequence>
      <Sequence from={330} durationInFrames={210}>
        <CampaignScene />
      </Sequence>
      <Sequence from={510} durationInFrames={210}>
        <SDRScene />
      </Sequence>
      <Sequence from={690} durationInFrames={180}>
        <CalendarScene />
      </Sequence>
      <Sequence from={840} durationInFrames={210}>
        <AnalyticsDashboard />
      </Sequence>
      <Sequence from={1050} durationInFrames={300}>
        <RevealScene />
      </Sequence>
    </AbsoluteFill>
  );
}

export const productWalkthroughConfig = {
  id: "ProductWalkthrough",
  component: ProductWalkthrough,
  durationInFrames: DURATION_FRAMES,
  fps: 30,
  width: 1280,
  height: 720,
};
