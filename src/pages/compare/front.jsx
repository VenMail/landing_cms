import Head from "next/head";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function CompareFront() {
  const features = [
    { feature: "Shared Inbox & Collaboration", venmail: true, front: true, notes: "Both offer shared inbox with assignments and internal comments" },
    { feature: "Multi-channel Support", venmail: "email-focused", front: true, notes: "Front supports SMS, social, chat; VenMail focuses on email excellence" },
    { feature: "AI-Powered Workflows", venmail: true, front: true, notes: "AI automation on both; VenMail includes campaign generation" },
    { feature: "Built-in Booking Pages", venmail: true, front: true, notes: "Meeting scheduling available on both platforms" },
    { feature: "Email Campaigns & Sequences", venmail: true, front: "add-on", notes: "Native campaigns included vs Front's integrations" },
    { feature: "Lead Gen & Enrichment", venmail: true, front: false, notes: "Prospecting and enrichment built-in on VenMail" },
    { feature: "Message Templates", venmail: true, front: true, notes: "Reusable templates on both platforms" },
    { feature: "Scheduling & Snoozing", venmail: true, front: true, notes: "Message scheduling and snoozing on both" },
    { feature: "Guest Accounts", venmail: true, front: true, notes: "External collaboration on both platforms" },
    { feature: "Analytics & Reporting", venmail: true, front: true, notes: "Performance analytics on both platforms" },
    { feature: "Document Intelligence", venmail: true, front: false, notes: "AI processes PDFs, Word docs, spreadsheets on VenMail" },
    { feature: "Payment Automation", venmail: true, front: false, notes: "Payment processing and webhooks on VenMail" },
    { feature: "API Access", venmail: true, front: true, notes: "Developer APIs available on both platforms" },
  ];

  const badgeClass = (text) => {
    const t = (text || "").toString().toLowerCase();
    if (t === "limited") return "bg-amber-100 text-amber-700";
    if (t === "manual") return "bg-slate-100 text-slate-700";
    if (t === "add-on") return "bg-slate-100 text-slate-700";
    if (t === "basic") return "bg-slate-100 text-slate-700";
    if (t === "separate") return "bg-slate-100 text-slate-700";
    if (t === "varies") return "bg-purple-100 text-purple-700";
    if (t === "email-focused") return "bg-blue-100 text-blue-700";
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
        <title>VenMail vs Front — Email-Focused Business Platform</title>
        <meta name="description" content="Compare VenMail vs Front. See how VenMail provides complete email operations with AI, campaigns, and scheduling vs Front's multi-channel approach." />
        <meta property="og:title" content="VenMail vs Front" />
        <meta property="og:description" content="VenMail focuses on email excellence with built-in campaigns, AI, and scheduling vs Front's multi-channel customer communication." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/compare/front" />
      </Head>
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-14 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">VenMail vs Front</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Front excels at multi-channel communication. VenMail delivers complete email operations with AI, campaigns, and scheduling built for email-first businesses.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
            <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200">
              <div className="col-span-6 p-4 md:p-5 text-sm font-semibold text-gray-700">Feature</div>
              <div className="col-span-3 p-4 md:p-5 text-sm font-semibold text-gray-700">VenMail</div>
              <div className="col-span-3 p-4 md:p-5 text-sm font-semibold text-gray-700">Front</div>
            </div>
            {features.map((row) => (
              <div key={row.feature} className="grid grid-cols-12 border-b border-gray-100 hover:bg-gray-50/60">
                <div className="col-span-6 p-4 md:p-5">
                  <div className="text-sm font-medium text-gray-900">{row.feature}</div>
                  {row.notes && <div className="text-xs text-gray-500 mt-1">{row.notes}</div>}
                </div>
                <div className="col-span-3 p-4 md:p-5">{cell(row.venmail)}</div>
                <div className="col-span-3 p-4 md:p-5">{cell(row.front)}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/compare/superhuman" className="px-6 py-3 bg-white border border-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-50">Compare with Superhuman</a>
            <a href="/compare/apollo" className="px-6 py-3 bg-white border border-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-50">Compare with Apollo</a>
            <a href="https://m.venmail.io/register" target="_blank" className="px-6 py-3 bg-black text-white text-sm font-medium">Start Free</a>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
