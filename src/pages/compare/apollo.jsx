import Head from "next/head";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function CompareApollo() {
  const features = [
    { feature: "B2B Database & Prospecting", venmail: true, apollo: true, notes: "Apollo has 270M+ contacts; VenMail includes prospecting in unified platform" },
    { feature: "Email Sequences & Campaigns", venmail: true, apollo: true, notes: "Advanced sales sequences and automation on both" },
    { feature: "AI-Powered Writing", venmail: true, apollo: true, notes: "AI email assistance on both platforms" },
    { feature: "Built-in Email Inbox", venmail: true, apollo: false, notes: "Native email client on VenMail vs Apollo's integration-only approach" },
    { feature: "Meeting Scheduler", venmail: true, apollo: true, notes: "Booking pages and scheduling on both platforms" },
    { feature: "Sales Engagement Platform", venmail: true, apollo: true, notes: "Complete sales tools on both platforms" },
    { feature: "CRM Integrations", venmail: true, apollo: true, notes: "Salesforce, HubSpot integrations on both" },
    { feature: "Analytics & Reporting", venmail: true, apollo: true, notes: "Email performance and sales analytics on both" },
    { feature: "Call Recording & Intelligence", venmail: false, apollo: true, notes: "Conversation intelligence available on Apollo" },
    { feature: "Lead Scoring", venmail: true, apollo: true, notes: "Advanced lead scoring on both platforms" },
    { feature: "Document Intelligence", venmail: true, apollo: false, notes: "AI processes PDFs, Word docs, spreadsheets on VenMail" },
    { feature: "Payment Automation", venmail: true, apollo: false, notes: "Payment processing and webhooks on VenMail" },
    { feature: "Credit-based System", venmail: false, apollo: true, notes: "Apollo uses credits for exports; VenMail is all-inclusive" },
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
        <title>VenMail vs Apollo — Complete Sales & Email Platform</title>
        <meta name="description" content="Compare VenMail vs Apollo. See how VenMail includes email inbox, booking, and AI workflows alongside sales tools in one unified platform." />
        <meta property="og:title" content="VenMail vs Apollo" />
        <meta property="og:description" content="VenMail offers complete email operations with inbox, campaigns, and AI vs Apollo's sales-focused engagement platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/compare/apollo" />
      </Head>
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-14 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">VenMail vs Apollo</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Apollo excels at sales engagement. VenMail delivers complete email operations with inbox, scheduling, AI, and sales tools in one unified platform.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
            <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200">
              <div className="col-span-6 p-4 md:p-5 text-sm font-semibold text-gray-700">Feature</div>
              <div className="col-span-3 p-4 md:p-5 text-sm font-semibold text-gray-700">VenMail</div>
              <div className="col-span-3 p-4 md:p-5 text-sm font-semibold text-gray-700">Apollo</div>
            </div>
            {features.map((row) => (
              <div key={row.feature} className="grid grid-cols-12 border-b border-gray-100 hover:bg-gray-50/60">
                <div className="col-span-6 p-4 md:p-5">
                  <div className="text-sm font-medium text-gray-900">{row.feature}</div>
                  {row.notes && <div className="text-xs text-gray-500 mt-1">{row.notes}</div>}
                </div>
                <div className="col-span-3 p-4 md:p-5">{cell(row.venmail)}</div>
                <div className="col-span-3 p-4 md:p-5">{cell(row.apollo)}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/compare/superhuman" className="px-6 py-3 bg-white border border-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-50">Compare with Superhuman</a>
            <a href="/compare/front" className="px-6 py-3 bg-white border border-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-50">Compare with Front</a>
            <a href="https://m.venmail.io/register" target="_blank" className="px-6 py-3 bg-black text-white text-sm font-medium">Start Free</a>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
