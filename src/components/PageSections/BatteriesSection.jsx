"use client";
import { useEffect, useRef, useState } from "react";

/* ─── Hub geometry ──────────────────────────────────────────────────────── */
const W = 640;          // viewBox / container width
const H = 640;          // viewBox / container height
const CX = W / 2;       // 320
const CY = H / 2;       // 320
const R  = 238;         // orbit radius

function deg2rad(d) { return (d * Math.PI) / 180; }

function orbitPos(i, total = 10) {
  const angle = deg2rad(-90 + (360 / total) * i);
  return { x: CX + R * Math.cos(angle), y: CY + R * Math.sin(angle) };
}

/* ─── Battery definitions ────────────────────────────────────────────────── */
const BATTERIES = [
  {
    name: "Meetings",
    color: "#3b82f6",
    bg: "#eff6ff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14"/>
        <rect x="1" y="6" width="14" height="12" rx="2"/>
      </svg>
    ),
  },
  {
    name: "Calendar",
    color: "#6366f1",
    bg: "#eef2ff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <rect x="7" y="14" width="3" height="3" rx="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: "Booking Links",
    color: "#8b5cf6",
    bg: "#f5f3ff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
      </svg>
    ),
  },
  {
    name: "Contacts",
    color: "#0ea5e9",
    bg: "#f0f9ff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    name: "Prospects",
    color: "#06b6d4",
    bg: "#ecfeff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <path d="M11 8a3 3 0 100 6"/>
      </svg>
    ),
  },
  {
    name: "AI SDR",
    color: "#f59e0b",
    bg: "#fffbeb",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 012 2v1h2a2 2 0 012 2v2h1a1 1 0 010 2h-1v2a2 2 0 01-2 2h-2v1a2 2 0 01-4 0v-1H8a2 2 0 01-2-2v-2H5a1 1 0 010-2h1V7a2 2 0 012-2h2V4a2 2 0 012-2z"/>
        <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/>
        <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none"/>
        <path d="M9 14s1 1 3 1 3-1 3-1"/>
      </svg>
    ),
  },
  {
    name: "Documents",
    color: "#10b981",
    bg: "#ecfdf5",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="8" y1="13" x2="16" y2="13"/>
        <line x1="8" y1="17" x2="13" y2="17"/>
      </svg>
    ),
  },
  {
    name: "Spreadsheets",
    color: "#22c55e",
    bg: "#f0fdf4",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="3" y1="15" x2="21" y2="15"/>
        <line x1="9" y1="3" x2="9" y2="21"/>
        <line x1="15" y1="3" x2="15" y2="21"/>
      </svg>
    ),
  },
  {
    name: "Forms",
    color: "#ec4899",
    bg: "#fdf2f8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <line x1="9" y1="9" x2="15" y2="9"/>
        <line x1="9" y1="13" x2="15" y2="13"/>
        <path d="M9 17h3"/>
        <circle cx="6.5" cy="9" r="1" fill="currentColor" stroke="none"/>
        <circle cx="6.5" cy="13" r="1" fill="currentColor" stroke="none"/>
        <circle cx="6.5" cy="17" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: "Chat",
    color: "#f43f5e",
    bg: "#fff1f2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/>
        <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none"/>
        <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
];

/* ─── Intersection observer ─────────────────────────────────────────────── */
function useIntersecting(ref, threshold = 0.2) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

/* ─── Hub visualization ─────────────────────────────────────────────────── */
const HUB_STYLE = `
@keyframes bat-pulse-ring {
  0%   { transform: scale(1);   opacity: 0.5; }
  100% { transform: scale(2.2); opacity: 0; }
}
@keyframes bat-spin-slow {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes bat-node-in {
  from { opacity: 0; transform: translate(-50%, -50%) scale(0.55); }
  to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
}
@keyframes bat-float {
  0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
  50%       { transform: translate(-50%, -50%) translateY(-5px); }
}
@keyframes bat-line-draw {
  from { stroke-dashoffset: 400; }
  to   { stroke-dashoffset: 0; }
}
@keyframes bat-dot-travel {
  0%   { offset-distance: 0%;   opacity: 0; }
  5%   { opacity: 1; }
  90%  { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
}
`;

function HubViz({ visible }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: `${W}px`, margin: "0 auto" }}>
      <style>{HUB_STYLE}</style>

      {/* Aspect-ratio wrapper */}
      <div style={{ paddingBottom: `${(H / W) * 100}%`, position: "relative" }}>

        {/* ── SVG layer: rings, lines, dots ──────────────────────────── */}
        <svg
          viewBox={`0 0 ${W} ${H}`}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
        >
          <defs>
            {BATTERIES.map((b, i) => {
              const { x, y } = orbitPos(i);
              return (
                <path
                  key={`path-${i}`}
                  id={`bat-path-${i}`}
                  d={`M ${CX} ${CY} L ${x} ${y}`}
                />
              );
            })}
          </defs>

          {/* Subtle grid pattern */}
          <defs>
            <pattern id="bat-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width={W} height={H} fill="url(#bat-grid)" opacity="0.5" rx="24"/>

          {/* Outer dashed orbit ring */}
          <circle
            cx={CX} cy={CY} r={R}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="1"
            strokeDasharray="4 6"
          />

          {/* Connection lines */}
          {BATTERIES.map((b, i) => {
            const { x, y } = orbitPos(i);
            const isHov = hovered === i;
            return (
              <g key={`line-${i}`}>
                {/* Background glow on hover */}
                {isHov && (
                  <line
                    x1={CX} y1={CY} x2={x} y2={y}
                    stroke={b.color}
                    strokeWidth="6"
                    strokeOpacity="0.15"
                    strokeLinecap="round"
                  />
                )}
                {/* Main line */}
                <line
                  x1={CX} y1={CY} x2={x} y2={y}
                  stroke={isHov ? b.color : "#d1d5db"}
                  strokeWidth={isHov ? "1.8" : "1"}
                  strokeLinecap="round"
                  strokeDasharray="400"
                  strokeDashoffset={visible ? 0 : 400}
                  style={{
                    transition: `stroke-dashoffset 0.9s ease ${i * 0.07}s, stroke 0.2s, stroke-width 0.2s`,
                  }}
                />
                {/* Traveling dot (only when visible) */}
                {visible && (
                  <circle r="3.5" fill={b.color} opacity="0.85">
                    <animateMotion
                      dur={`${2.2 + (i % 5) * 0.3}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.22}s`}
                    >
                      <mpath href={`#bat-path-${i}`} />
                    </animateMotion>
                  </circle>
                )}
              </g>
            );
          })}

          {/* Hub pulse rings */}
          {visible && [0, 1, 2].map((k) => (
            <circle
              key={k}
              cx={CX} cy={CY} r="44"
              fill="none"
              stroke="#FF5C39"
              strokeWidth="1.5"
              opacity="0"
              style={{
                transformOrigin: `${CX}px ${CY}px`,
                animation: `bat-pulse-ring 3s ease-out ${k * 1.0}s infinite`,
              }}
            />
          ))}
        </svg>

        {/* ── Tool nodes (HTML over SVG) ─────────────────────────────── */}
        {BATTERIES.map((b, i) => {
          const { x, y } = orbitPos(i);
          const pct = { left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` };
          const isHov = hovered === i;

          return (
            <div
              key={b.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "absolute",
                ...pct,
                width: "88px",
                textAlign: "center",
                cursor: "default",
                animation: visible
                  ? `bat-node-in 0.5s ease ${0.4 + i * 0.06}s both, bat-float 4s ease-in-out ${i * 0.4}s infinite`
                  : "none",
                zIndex: isHov ? 10 : 1,
              }}
            >
              {/* Icon card */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: isHov ? b.bg : "#ffffff",
                  border: `1.5px solid ${isHov ? b.color + "55" : "#e5e7eb"}`,
                  boxShadow: isHov
                    ? `0 8px 24px ${b.color}30, 0 0 0 3px ${b.color}18`
                    : "0 2px 8px rgba(0,0,0,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 7px",
                  color: isHov ? b.color : "#374151",
                  transition: "all 0.22s ease",
                  padding: "12px",
                }}
              >
                {b.icon}
              </div>
              {/* Label */}
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: isHov ? b.color : "#6b7280",
                  letterSpacing: "0.01em",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s",
                  display: "block",
                  lineHeight: 1.2,
                }}
              >
                {b.name}
              </span>
            </div>
          );
        })}

        {/* ── Center hub ────────────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 5,
            textAlign: "center",
          }}
        >
          {/* Spinning dashed ring */}
          {visible && (
            <svg
              width="116" height="116"
              style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                animation: "bat-spin-slow 14s linear infinite",
                pointerEvents: "none",
              }}
            >
              <circle
                cx="58" cy="58" r="52"
                fill="none"
                stroke="#FF5C39"
                strokeWidth="1"
                strokeDasharray="6 8"
                opacity="0.4"
              />
            </svg>
          )}
          {/* Hub card */}
          <div
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "22px",
              background: "linear-gradient(135deg, #FF5C39 0%, #ea580c 100%)",
              border: "none",
              boxShadow: "0 0 0 6px #FF5C3918, 0 12px 40px rgba(255,92,57,0.35), 0 4px 16px rgba(0,0,0,0.12)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              position: "relative",
              zIndex: 2,
            }}
          >
            <img
              src="/logo-icon-white.png"
              alt="Venmail"
              style={{ width: "40px", height: "40px", objectFit: "contain", display: "block" }}
            />
            <span style={{
              fontSize: "9px",
              fontWeight: 700,
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}>
              Venmail
            </span>
          </div>
        </div>

      </div>{/* end aspect-ratio wrapper */}
    </div>
  );
}

/* ─── Main export ────────────────────────────────────────────────────────── */
export default function BatteriesSection() {
  const ref = useRef(null);
  const visible = useIntersecting(ref, 0.15);

  return (
    <section
      ref={ref}
      style={{
        background: "#ffffff",
        padding: "96px 24px 80px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Section header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "56px",
            transition: "opacity 0.8s ease, transform 0.8s ease",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "999px",
              background: "#fff7ed",
              border: "1px solid #fed7aa",
              marginBottom: "20px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#c2410c",
              letterSpacing: "0.02em",
            }}
          >
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#FF5C39", display: "inline-block" }} />
            Batteries included
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4.5vw, 52px)",
              fontWeight: 800,
              color: "#111827",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            One platform.<br />
            <span style={{ color: "#FF5C39" }}>Everything connected.</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 19px)",
              color: "#4b5563",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Every tool your team needs — meetings, docs, leads, scheduling, chat
            — built into email. Not bolted on. Not a separate tab.
          </p>
        </div>

        {/* Hub visualization */}
        <div
          style={{
            transition: "opacity 1s ease 0.2s, transform 1s ease 0.2s",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <HubViz visible={visible} />
        </div>

        {/* Bottom stat row */}
        <div
          style={{
            marginTop: "52px",
            display: "flex",
            justifyContent: "center",
            gap: "clamp(24px, 5vw, 64px)",
            flexWrap: "wrap",
            transition: "opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
          }}
        >
          {[
            { value: "10+", label: "Built-in tools" },
            { value: "1", label: "Platform" },
            { value: "0", label: "Extra subscriptions" },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#111827", letterSpacing: "-0.03em" }}>
                {value}
              </div>
              <div style={{ fontSize: "14px", color: "#6b7280", fontWeight: 500, marginTop: "2px" }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "44px",
            textAlign: "center",
            transition: "opacity 0.8s ease 0.6s",
            opacity: visible ? 1 : 0,
          }}
        >
          <a
            href="https://m.venmail.io/register"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              background: "#FF5C39",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: 600,
              borderRadius: "6px",
              textDecoration: "none",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Explore all features
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 3l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
