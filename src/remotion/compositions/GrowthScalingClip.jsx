import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const DURATION_FRAMES = 240; // 8s at 30fps

export default function GrowthScalingClip() {
  const frame = useCurrentFrame();

  // User counter
  const userCount = Math.round(interpolate(frame, [30, 180], [10, 200], { extrapolateRight: "clamp" }));
  const progress = interpolate(frame, [30, 180], [0, 1], { extrapolateRight: "clamp" });

  // Chart dimensions
  const chartWidth = 480;
  const chartHeight = 200;
  const chartTop = 100;
  const chartLeft = 80;

  // Cost lines
  const competitorCost = userCount * 6; // $6/user/mo (Google/Microsoft)
  const venmailCost = userCount <= 3 ? 0 : 7; // Flat $7/mo

  const maxCost = 200 * 6;
  const competitorY = chartTop + chartHeight - (competitorCost / maxCost) * chartHeight;
  const venmailY = chartTop + chartHeight - (venmailCost / maxCost) * chartHeight;

  const savingsOpacity = interpolate(frame, [160, 185], [0, 1], { extrapolateRight: "clamp" });
  const savings = competitorCost - venmailCost;

  return (
    <AbsoluteFill style={{ background: "#020617", fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Title */}
      <div style={{ position: "absolute", top: 24, left: 32, opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }) }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>Monthly Cost Comparison</div>
      </div>

      {/* User counter */}
      <div style={{ position: "absolute", top: 24, right: 32 }}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Team Size</div>
        <div style={{ fontSize: 28, fontWeight: 800, color: "#fff" }}>{userCount}</div>
      </div>

      {/* Chart area */}
      <svg width="100%" height="100%" viewBox="0 0 640 360" style={{ position: "absolute", inset: 0 }}>
        {/* Y-axis labels */}
        {[0, 300, 600, 900, 1200].map((val, i) => (
          <text key={i} x={70} y={chartTop + chartHeight - (val / maxCost) * chartHeight + 4} textAnchor="end" fill="rgba(255,255,255,0.3)" fontSize={10} fontFamily="Inter">
            ${val}
          </text>
        ))}

        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => (
          <line key={i} x1={chartLeft} y1={chartTop + chartHeight * (1 - pct)} x2={chartLeft + chartWidth} y2={chartTop + chartHeight * (1 - pct)} stroke="rgba(255,255,255,0.06)" strokeWidth={1} />
        ))}

        {/* X-axis */}
        <line x1={chartLeft} y1={chartTop + chartHeight} x2={chartLeft + chartWidth} y2={chartTop + chartHeight} stroke="rgba(255,255,255,0.2)" strokeWidth={1} />

        {/* Competitor line (steep, red) */}
        <line x1={chartLeft} y1={chartTop + chartHeight} x2={chartLeft + progress * chartWidth} y2={competitorY} stroke="#ef4444" strokeWidth={2.5} strokeLinecap="round" />

        {/* Venmail line (flat, green) */}
        <line x1={chartLeft} y1={chartTop + chartHeight} x2={chartLeft + progress * chartWidth} y2={venmailY} stroke="#22c55e" strokeWidth={2.5} strokeLinecap="round" />

        {/* Competitor dot */}
        <circle cx={chartLeft + progress * chartWidth} cy={competitorY} r={4} fill="#ef4444" opacity={progress > 0.05 ? 1 : 0} />

        {/* Venmail dot */}
        <circle cx={chartLeft + progress * chartWidth} cy={venmailY} r={4} fill="#22c55e" opacity={progress > 0.05 ? 1 : 0} />
      </svg>

      {/* Legend */}
      <div style={{ position: "absolute", bottom: 60, left: 32, display: "flex", gap: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 12, height: 3, background: "#ef4444", borderRadius: 2 }} />
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>Per-seat pricing (${userCount * 6}/mo)</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 12, height: 3, background: "#22c55e", borderRadius: 2 }} />
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>Venmail (${venmailCost}/mo)</span>
        </div>
      </div>

      {/* Savings highlight */}
      <div style={{ position: "absolute", bottom: 20, right: 32, opacity: savingsOpacity }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: "#22c55e" }}>
          Save ${savings}/mo
        </div>
      </div>
    </AbsoluteFill>
  );
}

export const growthScalingClipConfig = {
  id: "GrowthScalingClip",
  component: GrowthScalingClip,
  durationInFrames: DURATION_FRAMES,
  fps: 30,
  width: 640,
  height: 360,
};
