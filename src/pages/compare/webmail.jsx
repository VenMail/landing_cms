import Head from "next/head";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function CompareWebmail() {
  const features = [
    { feature: "Custom Domain & Branding", venmail: true, webmail: true, notes: "Both support custom domains; VenMail adds cohesive branding across booking and campaigns" },
    { feature: "AI Rewrite & Summaries", venmail: true, webmail: false, notes: "AI embedded across inbox and campaigns on VenMail" },
    { feature: "Built-in Booking Pages", venmail: true, webmail: false, notes: "Calendly-class booking native to VenMail" },
    { feature: "Email Campaigns & Sequences", venmail: true, webmail: false, notes: "Replace Mailchimp with native campaigns and automation" },
    { feature: "Lead Gen & Enrichment", venmail: true, webmail: false, notes: "Prospecting + enrichment built-in" },
    { feature: "Deliverability Analytics", venmail: true, webmail: "basic", notes: "Opens, clicks, bounce insights for campaigns and sent mail on VenMail" },
    { feature: "Advanced Spam Detection", venmail: true, webmail: "varies", notes: "Quality varies by hosting; VenMail provides enterprise-grade filtering" },
    { feature: "Unified Pricing", venmail: true, webmail: "varies", notes: "VenMail replaces multiple add-ons with one predictable plan" },
    { feature: "Mobile/Desktop Applications", venmail: true, webmail: "limited", notes: "Webmail is browser-first; VenMail offers native mobile/desktop experience" },
    { feature: "Bulk Mail Import from Existing Domains", venmail: true, webmail: "manual", notes: "VenMail supports credential-based CSV import—no EML exports required" },
    { feature: "Easy DNS Setup", venmail: true, webmail: "manual", notes: "VenMail offers instant auto-setup for Cloudflare users; guided for others" },
  ];

  const badgeClass = (text) => {
    const t = (text || "").toString().toLowerCase();
    if (t === "limited") return "bg-amber-100 text-amber-700";
    if (t === "manual") return "bg-slate-100 text-slate-700";
    if (t === "add-on") return "bg-slate-100 text-slate-700";
    if (t === "basic") return "bg-slate-100 text-slate-700";
    if (t === "separate") return "bg-slate-100 text-slate-700";
    if (t === "varies") return "bg-purple-100 text-purple-700";
    return "bg-slate-100 text-slate-700";
  };

  const cell = (val) => (
    <span className="inline-flex items-center text-sm">
      {val === true && (
        <span className="inline-flex items-center gap-1 text-green-700">
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16Zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293A1 1 0 106.293 10.707l2 2a1 1 0 001.414 0l4-4Z" clipRule="evenodd"/></svg>
          <span className="font-medium">Yes</span>
        </span>
      )}
      {val === false && (
        <span className="text-gray-400">—</span>
      )}
      {typeof val === 'string' && val !== '' && (
        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${badgeClass(val)}`}>
          {val[0].toUpperCase() + val.slice(1)}
        </span>
      )}
    </span>
  );

  return (
    <DefaultLayout>
      <Head>
        <title>VenMail vs Webmail — All-in-One vs Basic Inbox</title>
        <meta name="description" content="Compare VenMail vs typical webmail (Roundcube/Horde). VenMail unifies email, campaigns, booking, AI, and lead gen with simple DNS and bulk import." />
        <meta property="og:title" content="VenMail vs Webmail" />
        <meta property="og:description" content="VenMail replaces multiple tools with one SME-focused suite: email, campaigns, booking, AI, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/compare/webmail" />
      </Head>
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-14 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">VenMail vs Webmail</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Webmail serves basic inbox needs. VenMail gives SMEs a unified growth stack: email, campaigns, booking, and lead generation.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
            <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200">
              <div className="col-span-6 p-4 md:p-5 text-sm font-semibold text-gray-700">Feature</div>
              <div className="col-span-3 p-4 md:p-5 text-sm font-semibold text-gray-700">VenMail</div>
              <div className="col-span-3 p-4 md:p-5 text-sm font-semibold text-gray-700">Webmail</div>
            </div>
            {features.map((row) => (
              <div key={row.feature} className="grid grid-cols-12 border-b border-gray-100 hover:bg-gray-50/60">
                <div className="col-span-6 p-4 md:p-5">
                  <div className="text-sm font-medium text-gray-900">{row.feature}</div>
                  {row.notes && <div className="text-xs text-gray-500 mt-1">{row.notes}</div>}
                </div>
                <div className="col-span-3 p-4 md:p-5">{cell(row.venmail)}</div>
                <div className="col-span-3 p-4 md:p-5">{cell(row.webmail)}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/compare/gmail" className="px-6 py-3 bg-white border border-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-50">Compare with Gmail</a>
            <a href="/compare/outlook" className="px-6 py-3 bg-white border border-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-50">Compare with Outlook</a>
            <a href="/compare/zoho" className="px-6 py-3 bg-white border border-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-50">Compare with Zoho</a>
            <a href="https://m.venmail.io/register" target="_blank" className="px-6 py-3 bg-black text-white text-sm font-medium">Start Free</a>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
