import Head from "next/head";
import DefaultLayout from "@/components/layout/DefaultLayout";

/* ─── Design tokens mirrored from the real Venmail app ──────────────────── */
const T = {
  // surfaces
  bgPage:       "#f3f4f6",   // gray-100 — the outer "inbox" background
  bgPanel:      "#ffffff",   // white mail reader surface
  bgHeader:     "#ffffff",   // white
  bgActionBar:  "#f9fafb",   // gray-50
  borderColor:  "#e5e7eb",   // gray-200
  // text
  textPrimary:  "#111827",   // gray-900
  textSecondary:"#374151",   // gray-700
  textMuted:    "#4b5563",   // gray-600
  textXs:       "#6b7280",   // gray-500
  // avatar
  avatarBg:     "#dbeafe",   // blue-100
  avatarColor:  "#1d4ed8",   // blue-700
  avatarRing:   "#bfdbfe",   // blue-200
  // brand
  primary:      "#FF5C39",
};

/* ─── Action button (mimics MailActionButtons style) ────────────────────── */
function ActionBtn({ icon, label, href, onClick }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 12px",
        borderRadius: "6px",
        border: `1px solid ${T.borderColor}`,
        background: T.bgPanel,
        color: T.textSecondary,
        fontSize: "13px",
        fontWeight: 500,
        cursor: "pointer",
        textDecoration: "none",
        transition: "background 0.15s, border-color 0.15s, color 0.15s",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "#f9fafb";
        e.currentTarget.style.color = T.textPrimary;
        e.currentTarget.style.borderColor = "#d1d5db";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = T.bgPanel;
        e.currentTarget.style.color = T.textSecondary;
        e.currentTarget.style.borderColor = T.borderColor;
      }}
    >
      {icon}
      <span>{label}</span>
    </Tag>
  );
}

/* ─── SVG icons (matches lucide stroke style used in the app) ──────────── */
const icons = {
  reply: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/>
    </svg>
  ),
  forward: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 17 20 12 15 7"/><path d="M4 18v-2a4 4 0 0 1 4-4h12"/>
    </svg>
  ),
  star: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  archive: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>
    </svg>
  ),
  external: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  ),
  arrowRight: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  ),
};

/* ─── Divider ────────────────────────────────────────────────────────────── */
function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", margin: "40px 0" }}>
      <div style={{ flex: 1, height: "1px", background: T.borderColor }} />
      <span style={{ fontSize: "16px", color: "#d1d5db" }}>✦</span>
      <div style={{ flex: 1, height: "1px", background: T.borderColor }} />
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function WhyVenmail() {
  const fontStack = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

  return (
    <DefaultLayout>
      <Head>
        <title>Why Now — Venmail 1.0</title>
        <meta name="description" content="A founder's memo on why email is overdue for a reset — and why we built Venmail 1.0." />
        <meta property="og:title" content="Why Now — Venmail 1.0" />
        <meta property="og:description" content="A founder's memo on why email is overdue for a reset." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/why-venmail" />
        <style>{`
          .wnw-hero-title {
            background: linear-gradient(135deg, #ffffff 35%, rgba(255,92,57,0.85) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `}</style>
      </Head>

      {/* ── Dark hero ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0a0a0a",
          padding: "120px 24px 0",
          textAlign: "center",
          fontFamily: fontStack,
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          Founder Memo · March 2025
        </p>
        <h1
          className="wnw-hero-title"
          style={{
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "28px",
            maxWidth: "760px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Why Now.
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 21px)",
            color: "rgba(255,255,255,0.65)",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Email is the most-used software on earth. It is also the most
          neglected. We think that's about to change.
        </p>

        {/* Fade gradient into the email reader */}
        <div
          style={{
            height: "100px",
            background: `linear-gradient(to bottom, #0a0a0a 0%, ${T.bgPage} 100%)`,
            marginTop: "80px",
            marginLeft: "-24px",
            marginRight: "-24px",
            pointerEvents: "none",
          }}
        />
      </section>

      {/* ── Email reader shell ────────────────────────────────────────── */}
      <section
        style={{
          background: T.bgPage,
          padding: "0 16px 80px",
          fontFamily: fontStack,
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>

          {/* ── Venmail app chrome strip ─────────────────────────────── */}
          <div
            style={{
              background: T.bgPanel,
              borderRadius: "12px 12px 0 0",
              borderTop: `1px solid ${T.borderColor}`,
              borderLeft: `1px solid ${T.borderColor}`,
              borderRight: `1px solid ${T.borderColor}`,
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderBottom: `1px solid ${T.borderColor}`,
            }}
          >
            {/* Traffic lights */}
            {["#ff5f57","#ffbd2e","#28c840"].map((c, i) => (
              <div key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c, flexShrink: 0 }} />
            ))}
            <div style={{ flex: 1 }} />
            {/* Venmail wordmark */}
            <img src="/logo-black.png" alt="Venmail" style={{ height: "18px", opacity: 0.6 }} />
            <div style={{ flex: 1 }} />
          </div>

          {/* ── Email header — mirrors MailHeader.tsx ─────────────────── */}
          <div
            style={{
              background: T.bgHeader,
              borderLeft: `1px solid ${T.borderColor}`,
              borderRight: `1px solid ${T.borderColor}`,
              padding: "18px 20px 16px",
              borderBottom: `1px solid ${T.borderColor}`,
            }}
          >
            {/* Subject */}
            <h2
              style={{
                fontSize: "17px",
                fontWeight: 600,
                color: T.textPrimary,
                marginBottom: "14px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              Why Now — Venmail 1.0
            </h2>

            {/* Sender row */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              {/* Avatar — matches RecipientAvatar bg-blue-100 / text-blue-700 */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: T.avatarBg,
                  color: T.avatarColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                  fontWeight: 700,
                  flexShrink: 0,
                  outline: `2px solid ${T.avatarRing}`,
                  outlineOffset: "1px",
                  userSelect: "none",
                }}
                aria-hidden
              >
                V
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Name + date row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: T.textPrimary }}>
                    Venmail Team
                  </span>
                  <time style={{ fontSize: "12px", color: T.textXs, flexShrink: 0 }}>
                    Mon 10th Mar, 9:00
                  </time>
                </div>
                {/* From email */}
                <p style={{ fontSize: "12px", color: T.textXs, margin: "1px 0 6px" }}>
                  hello@venmail.io
                </p>
                {/* To row */}
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 500, color: T.textXs, width: "20px", flexShrink: 0 }}>To:</span>
                  <span style={{ fontSize: "12px", color: T.textMuted }}>you@yourcompany.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Action bar — mirrors MailActionButtons style ──────────── */}
          <div
            style={{
              background: T.bgActionBar,
              borderLeft: `1px solid ${T.borderColor}`,
              borderRight: `1px solid ${T.borderColor}`,
              borderBottom: `1px solid ${T.borderColor}`,
              padding: "8px 16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            <ActionBtn icon={icons.reply} label="Reply" href="mailto:hello@venmail.io" />
            <ActionBtn icon={icons.forward} label="Forward" />
            <ActionBtn icon={icons.star} label="Star" />
            <ActionBtn icon={icons.archive} label="Archive" />
            <div style={{ flex: 1 }} />
            {/* Unread dot + label */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: T.primary }} />
              <span style={{ fontSize: "12px", color: T.textXs }}>Founder Memo</span>
            </div>
          </div>

          {/* ── Email body — ViewMail content style ──────────────────── */}
          <div
            style={{
              background: T.bgPanel,
              borderLeft: `1px solid ${T.borderColor}`,
              borderRight: `1px solid ${T.borderColor}`,
              borderBottom: `1px solid ${T.borderColor}`,
              borderRadius: "0 0 12px 12px",
              padding: "36px 36px 48px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: T.textSecondary,
                maxWidth: "620px",
              }}
            >
              <p style={{ marginBottom: "22px" }}>
                Email was invented to connect people. A message sent between two machines in 1971.
                No subject line, no spam filter, no "mark as read." Just a connection.
              </p>

              <p style={{ marginBottom: "22px" }}>
                Over the next fifty years, that connection became the operating system of work.
                Every meeting, every sale, every support request, every invoice — it all flows
                through email. By the time the modern enterprise era arrived, over 100 business
                tools had integrated directly into it. Calendar invites. CRM updates. Payment
                receipts. Slack notifications. All landing in the inbox.
              </p>

              <p style={{ marginBottom: "22px", color: T.textPrimary, fontWeight: 500 }}>
                And yet nobody treated email itself as infrastructure worth building well.
              </p>

              {/* Pull quote — styled to match the Venmail primary accent */}
              <blockquote
                style={{
                  borderLeft: `3px solid ${T.primary}`,
                  paddingLeft: "20px",
                  margin: "32px 0",
                  color: T.textPrimary,
                  fontStyle: "italic",
                  fontSize: "17px",
                  lineHeight: 1.65,
                  background: "#fff8f6",
                  padding: "16px 16px 16px 20px",
                  borderRadius: "0 6px 6px 0",
                }}
              >
                "I only create email accounts for the operations team."
                <footer
                  style={{
                    fontSize: "13px",
                    fontStyle: "normal",
                    color: T.textXs,
                    marginTop: "8px",
                    fontWeight: 500,
                  }}
                >
                  — Sandra, SheCodes · a story we heard too many times
                </footer>
              </blockquote>

              <p style={{ marginBottom: "22px" }}>
                Per-seat pricing turned email into a resource to be rationed. Small businesses
                gave "official" addresses to a handful of people and told everyone else to use
                personal Gmail. Important conversations got fragmented. Context was lost. The
                inbox — the center of all business communication — became a line item teams had
                to justify.
              </p>

              <p style={{ marginBottom: "22px" }}>
                The big players had a different answer. More features. Smarter tabs. Priority
                inboxes. AI sorting. Undo send. These are good features. But they treat the
                symptom, not the cause. The real problem is that email was never rebuilt for
                the way work actually happens — with meetings, documents, payments, scheduling,
                and AI all needing to live in the same place.
              </p>

              <Divider />

              <h3
                style={{
                  fontSize: "19px",
                  fontWeight: 700,
                  color: T.textPrimary,
                  letterSpacing: "-0.02em",
                  marginBottom: "16px",
                }}
              >
                What we set out to build.
              </h3>

              <p style={{ marginBottom: "22px" }}>
                Venmail 1.0 is built on a simple premise: email should be the hub, not a silo.
                Everything you need to run your business — AI-assisted writing, scheduling,
                meeting transcripts, document handling, lead generation, payment tracking —
                should live inside your inbox, not scattered across a dozen tabs.
              </p>

              <p style={{ marginBottom: "22px" }}>
                We also believe infrastructure costs should reflect actual usage, not headcount.
                Venmail is built around storage-based pricing. A five-person team and a fifty-person
                team use roughly the same infrastructure. They should pay roughly the same amount.
              </p>

              <p style={{ marginBottom: "22px" }}>
                And you should own your data outright. Venmail runs on your own storage — S3,
                Azure Blob, or self-hosted. Your emails never pass through our servers. They
                live where you put them. When you leave, they come with you.
              </p>

              <Divider />

              <h3
                style={{
                  fontSize: "19px",
                  fontWeight: 700,
                  color: T.textPrimary,
                  letterSpacing: "-0.02em",
                  marginBottom: "16px",
                }}
              >
                Why now.
              </h3>

              <p style={{ marginBottom: "22px" }}>
                The tooling shift is already happening. More than 100 business applications
                integrate with email. Developers are building AI agents that live entirely inside
                the inbox. The workflow layer is moving here, whether the old providers are ready
                or not.
              </p>

              <p style={{ marginBottom: "22px" }}>
                We're not building email for how the world worked in 2010. We're building it for
                the way work is actually done today — asynchronously, across tools, with AI playing
                a first-class role in every interaction.
              </p>

              <p style={{ marginBottom: "32px", fontWeight: 600, color: T.textPrimary }}>
                This is Venmail 1.0. Not a feature refresh. A reset.
              </p>

              {/* Closing callout */}
              <div
                style={{
                  background: "#f9fafb",
                  border: `1px solid ${T.borderColor}`,
                  borderRadius: "8px",
                  padding: "24px",
                  marginBottom: "32px",
                }}
              >
                <p style={{ margin: "0 0 10px", fontWeight: 600, fontSize: "15px", color: T.textPrimary }}>
                  Have thoughts? We want to hear from you.
                </p>
                <p style={{ margin: 0, color: T.textMuted, fontSize: "14px", lineHeight: 1.65 }}>
                  We're building this for teams who are frustrated with the status quo. Reach
                  out and tell us what's broken about your email.{" "}
                  <a
                    href="mailto:hello@venmail.io"
                    style={{ color: T.primary, textDecoration: "none", fontWeight: 500 }}
                  >
                    hello@venmail.io
                  </a>
                </p>
              </div>

              {/* Footer CTAs — mirrors the "Get Started" CTA style from the app */}
              <div
                style={{
                  paddingTop: "28px",
                  borderTop: `1px solid ${T.borderColor}`,
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  alignItems: "center",
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
                    padding: "11px 22px",
                    background: T.primary,
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 600,
                    borderRadius: "6px",
                    textDecoration: "none",
                    transition: "opacity 0.15s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  Get Started Free
                  {icons.arrowRight}
                </a>
                <a
                  href="/pricing"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "11px 22px",
                    background: "transparent",
                    color: T.textSecondary,
                    fontSize: "14px",
                    fontWeight: 500,
                    borderRadius: "6px",
                    border: `1px solid ${T.borderColor}`,
                    textDecoration: "none",
                    transition: "border-color 0.15s, color 0.15s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#9ca3af"; e.currentTarget.style.color = T.textPrimary; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = T.borderColor; e.currentTarget.style.color = T.textSecondary; }}
                >
                  View Pricing
                </a>
                <a
                  href="https://m.venmail.io/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginLeft: "auto",
                    fontSize: "13px",
                    color: T.textXs,
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = T.textMuted}
                  onMouseLeave={e => e.currentTarget.style.color = T.textXs}
                >
                  {icons.external}
                  Open in Venmail
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </DefaultLayout>
  );
}
