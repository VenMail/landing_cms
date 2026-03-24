"use client";
import { useEffect, useRef, useState, useCallback } from "react";

/* Gradient-text via injected <style> — avoids SSR hydration issues with
   WebkitTextFillColor: transparent in inline styles */
const GRADIENT_TEXT_STYLE = `
  .cinematic-gradient-text {
    background: linear-gradient(135deg, #ffffff 30%, rgba(255,92,57,0.9) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

/* ─── Email Evolution Chapters ─────────────────────────────────────────── */
const CHAPTERS = [
  {
    year: "1971",
    headline: "Email was invented\nto connect people.",
    sub: "Ray Tomlinson sent the first network email — a simple message between two machines sitting side by side.",
    accent: "#a78bfa",   // violet
  },
  {
    year: "1990s",
    headline: "Then it became\neverything.",
    sub: "Business. Sales. Support. Notifications. The inbox became the operating system of work.",
    accent: "#60a5fa",   // blue
  },
  {
    year: "2000s",
    headline: "Then came the flood.",
    sub: "Spam. Mass blasts. CC chains. The average inbox received 100+ emails a day. Inbox zero became a myth.",
    accent: "#f59e0b",   // amber
  },
  {
    year: "2010s",
    headline: "Big Tech promised\nto fix it.",
    sub: "Smart tabs. Priority inbox. AI sorting. Snooze. Undo send. The inbox is still broken.",
    accent: "#f87171",   // red
  },
  {
    year: "Today",
    headline: "100+ tools\nintegrate with email.",
    sub: "Email doesn't have to feel like the Wild Wild West... What if we could turn it around — let AI run the email and embed all the tools? Meetings, documents, payments, AI. All of it, from your inbox.",
    accent: "#fb923c",   // orange
  },
];

/* ─── Helpers ───────────────────────────────────────────────────────────── */
function useIntersecting(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

/* ─── Single Chapter Panel ─────────────────────────────────────────────── */
function ChapterPanel({ chapter, index, isLast }) {
  const ref = useRef(null);
  const visible = useIntersecting(ref, 0.45);

  return (
    <div
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        position: "relative",
      }}
    >
      {/* Ambient gradient blob */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${chapter.accent}18 0%, transparent 70%)`,
          pointerEvents: "none",
          transition: "opacity 1s ease",
          opacity: visible ? 1 : 0,
        }}
      />

      <div
        style={{
          maxWidth: "860px",
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Year badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            borderRadius: "999px",
            border: `1px solid ${chapter.accent}55`,
            background: `${chapter.accent}14`,
            marginBottom: "32px",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: chapter.accent,
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: chapter.accent,
              textTransform: "uppercase",
            }}
          >
            {chapter.year}
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: "clamp(36px, 6vw, 76px)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            whiteSpace: "pre-line",
            marginBottom: "28px",
            transition: "opacity 0.9s ease 0.12s, transform 0.9s ease 0.12s",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          {chapter.headline}
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 22px)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.65,
            maxWidth: "620px",
            margin: "0 auto",
            transition: "opacity 0.9s ease 0.22s, transform 0.9s ease 0.22s",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {chapter.sub}
        </p>

        {/* Divider line pointing down */}
        {!isLast && (
          <div
            style={{
              marginTop: "60px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              transition: "opacity 1s ease 0.4s",
              opacity: visible ? 0.35 : 0,
            }}
          >
            <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.3)" }} />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v9M2 7l4 4 4-4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── "Until Now" Reveal ───────────────────────────────────────────────── */
function VenmailReveal() {
  const ref = useRef(null);
  const visible = useIntersecting(ref, 0.4);

  return (
    <>
      <style>{GRADIENT_TEXT_STYLE}</style>
    <div
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Large glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
          width: "800px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,92,57,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
          transition: "opacity 1.2s ease",
          opacity: visible ? 1 : 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
        {/* "Until now." */}
        <p
          style={{
            fontSize: "clamp(14px, 1.5vw, 18px)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "24px",
            fontWeight: 500,
            transition: "opacity 0.8s ease, transform 0.8s ease",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
          }}
        >
          Now
        </p>

        {/* Main headline */}
        <h2
          className="cinematic-gradient-text"
          style={{
            fontSize: "clamp(48px, 9vw, 110px)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.035em",
            marginBottom: "32px",
            transition: "opacity 1s ease 0.1s, transform 1s ease 0.1s",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
          }}
        >
          Introducing Venmail 1.0.
        </h2>

        {/* Descriptor */}
        <p
          style={{
            fontSize: "clamp(17px, 2.2vw, 26px)",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.6,
            maxWidth: "640px",
            margin: "0 auto 56px",
            transition: "opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Email, meetings, scheduling, and AI — unified in one platform built for how work actually happens.
        </p>

        {/* CTA */}
        <div
          style={{
            transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <a
            href="/why-venmail"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 36px",
              background: "#FF5C39",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: 600,
              borderRadius: "4px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Read our memo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Scroll cue to video */}
        <div
          style={{
            marginTop: "80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            transition: "opacity 1.2s ease 0.6s",
            opacity: visible ? 0.4 : 0,
          }}
        >
          <span style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Watch the demo</span>
          <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.25)" }} />
        </div>
      </div>
    </div>
    </>
  );
}

/* ─── Cinematic Video Player ────────────────────────────────────────────── */
function CinematicVideo() {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const visible = useIntersecting(wrapRef, 0.3);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const progressInterval = useRef(null);

  // Auto-play when in view (muted)
  useEffect(() => {
    if (!videoRef.current) return;
    if (visible) {
      videoRef.current.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  }, [visible]);

  // Progress tracker
  useEffect(() => {
    clearInterval(progressInterval.current);
    if (playing) {
      progressInterval.current = setInterval(() => {
        if (videoRef.current && videoRef.current.duration) {
          setProgress(videoRef.current.currentTime / videoRef.current.duration);
        }
      }, 200);
    }
    return () => clearInterval(progressInterval.current);
  }, [playing]);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }, [playing]);

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  }, [muted]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement && wrapRef.current) {
      wrapRef.current.requestFullscreen?.();
      setFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setFullscreen(false);
    }
  }, []);

  const handleSeek = useCallback((e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = x * videoRef.current.duration;
    setProgress(x);
  }, []);

  return (
    <div
      style={{
        padding: "0 24px 120px",
        transition: "opacity 1.2s ease, transform 1.2s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section label */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span
            style={{
              fontSize: "12px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              fontWeight: 600,
            }}
          >
            Product Demo
          </span>
        </div>

        {/* Video container */}
        <div
          ref={wrapRef}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: "relative",
            borderRadius: "16px",
            overflow: "hidden",
            background: "#111",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 40px 120px rgba(255,92,57,0.18), 0 20px 60px rgba(0,0,0,0.7)",
            cursor: "pointer",
            aspectRatio: "16/9",
            transition: "box-shadow 0.4s ease",
          }}
          onClick={togglePlay}
        >
          {/* Ambient glow behind video */}
          <div
            style={{
              position: "absolute",
              inset: "-20px",
              background: "radial-gradient(ellipse at 50% 100%, rgba(255,92,57,0.12) 0%, transparent 65%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Browser chrome header */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "40px",
              background: "rgba(18,18,18,0.95)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
              gap: "8px",
              zIndex: 4,
              transition: "opacity 0.3s ease",
              opacity: hovered ? 0.0 : 0.7,
            }}
          >
            {/* Traffic lights */}
            {["#ff5f57", "#ffbd2e", "#28c840"].map((c, i) => (
              <div key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c, opacity: 0.85 }} />
            ))}
            {/* URL bar */}
            <div
              style={{
                flex: 1,
                maxWidth: "340px",
                margin: "0 auto",
                height: "22px",
                borderRadius: "6px",
                background: "rgba(255,255,255,0.07)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.4 }}>
                <path d="M5 1a4 4 0 100 8A4 4 0 005 1zM5 3a2 2 0 110 4A2 2 0 015 3z" fill="white" />
              </svg>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.02em" }}>app.venmail.io</span>
            </div>
          </div>

          {/* The video */}
          <video
            ref={videoRef}
            src="/venmail_demo_v4.mp4"
            muted={muted}
            playsInline
            loop
            preload="metadata"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              position: "relative",
              zIndex: 1,
            }}
          />

          {/* Gradient overlay (bottom) */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "80px",
              background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Center play/pause indicator — appears on hover or when paused */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 5,
              pointerEvents: "none",
              transition: "opacity 0.25s ease",
              opacity: hovered || !playing ? 1 : 0,
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
                border: "1.5px solid rgba(255,255,255,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {playing ? (
                /* Pause icon */
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="5" y="4" width="4" height="14" rx="1.5" fill="white" />
                  <rect x="13" y="4" width="4" height="14" rx="1.5" fill="white" />
                </svg>
              ) : (
                /* Play icon */
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M7 4.5l12 6.5-12 6.5V4.5z" fill="white" />
                </svg>
              )}
            </div>
          </div>

          {/* Bottom controls bar */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 5,
              padding: "12px 16px 14px",
              transition: "opacity 0.25s ease",
              opacity: hovered ? 1 : 0,
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Progress bar */}
            <div
              style={{
                height: "3px",
                background: "rgba(255,255,255,0.2)",
                borderRadius: "3px",
                marginBottom: "10px",
                cursor: "pointer",
                position: "relative",
              }}
              onClick={handleSeek}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress * 100}%`,
                  background: "#FF5C39",
                  borderRadius: "3px",
                  transition: "width 0.2s linear",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    right: "-5px",
                    top: "-3.5px",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#FF5C39",
                    boxShadow: "0 0 6px rgba(255,92,57,0.7)",
                  }}
                />
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              {/* Left: play + mute */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <button
                  onClick={togglePlay}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", color: "white", display: "flex", alignItems: "center" }}
                >
                  {playing ? (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="3" y="2.5" width="4" height="13" rx="1.5" fill="white" />
                      <rect x="11" y="2.5" width="4" height="13" rx="1.5" fill="white" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M4 3l11 6-11 6V3z" fill="white" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={toggleMute}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", color: "white", display: "flex", alignItems: "center" }}
                >
                  {muted ? (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 3L5 7H2v4h3l4 4V3z" fill="white" opacity="0.5" />
                      <path d="M14 7l-4 4M10 7l4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 3L5 7H2v4h3l4 4V3z" fill="white" />
                      <path d="M12 6c1.1 1 1.8 2.4 1.8 3.9S13.1 13 12 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M14.5 4c2 1.7 3.3 4.2 3.3 7s-1.3 5.3-3.3 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Right: fullscreen */}
              <button
                onClick={toggleFullscreen}
                style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", color: "white", display: "flex", alignItems: "center" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 6V2h4M12 2h4v4M16 12v4h-4M6 16H2v-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Below video: caption + secondary CTA */}
        <div
          style={{
            marginTop: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.38)", maxWidth: "480px", lineHeight: 1.65 }}>
            Venmail brings together email, AI, scheduling, and lead generation — all in one place. No switching tabs. No missed follow-ups.
          </p>
          <a
            href="https://m.venmail.io/register"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.2)",
              paddingBottom: "2px",
              letterSpacing: "0.01em",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,1)"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
          >
            Start for free — no credit card required
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Separator between dark section and rest of page ───────────────────── */
function DarkToLightFade() {
  return (
    <div
      style={{
        height: "120px",
        background: "linear-gradient(to bottom, #0a0a0a 0%, #ffffff 100%)",
        pointerEvents: "none",
      }}
    />
  );
}

/* ─── Main Export ────────────────────────────────────────────────────────── */
export default function CinematicHowItWorks() {
  return (
    <>
      <section
        style={{
          background: "#0a0a0a",
        }}
      >
        {/* Section intro */}
        <div
          style={{
            minHeight: "40vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "80px 24px 48px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              fontWeight: 600,
              marginBottom: "24px",
            }}
          >
            The story of email
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 700,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              maxWidth: "640px",
            }}
          >
            How we got here.
          </h2>
        </div>

        {/* Chapter panels */}
        {CHAPTERS.map((chapter, i) => (
          <ChapterPanel
            key={chapter.year}
            chapter={chapter}
            index={i}
            isLast={i === CHAPTERS.length - 1}
          />
        ))}

        {/* Venmail reveal */}
        <VenmailReveal />

        {/* Cinematic video */}
        <CinematicVideo />
      </section>

      {/* Smooth fade back to white */}
      <DarkToLightFade />
    </>
  );
}
