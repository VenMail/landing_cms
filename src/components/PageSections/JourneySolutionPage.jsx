import React from "react";
import Head from "next/head";
import CustomLayout from "@/components/layout/CustomLayout";

export const journeyPages = {
  "ai-crm": {
    eyebrow: "AI Customer Journey CRM",
    title: "A CRM that remembers the whole customer journey.",
    description:
      "VenMail connects website visits, AI conversations, contact intelligence, campaigns, SDR follow-up, and referrals into one memory layer for growth teams.",
    image: "/email-dashboard-preview.png",
    sections: [
      "Recognize known and anonymous visitors by source, page behavior, return visits, and campaign engagement.",
      "Create a living customer timeline across chat, email, meetings, contact enrichment, and follow-up activity.",
      "Trigger the next best action for marketing, sales, support, and customer success.",
    ],
    useCases: ["B2B SaaS", "Agencies", "Ecommerce", "Professional services"],
  },
  "customer-journey-automation": {
    eyebrow: "Customer Journey Automation",
    title: "Automate every step from first visit to loyal customer.",
    description:
      "VenMail helps teams react to intent signals with contextual questions, AI summaries, email sequences, SDR tasks, and referral loops.",
    image: "/home/section-ai-workflows.svg",
    sections: [
      "Map the buyer journey from ad, referral, email, or search into a single customer profile.",
      "Ask dynamic questions when visitors show strong intent or return after earlier research.",
      "Coordinate chat, campaigns, booking, SDR, and CRM updates without losing context.",
    ],
    useCases: ["Growth teams", "Sales teams", "Customer success", "Founders"],
  },
  "ai-sdr": {
    eyebrow: "AI SDR",
    title: "Research prospects, understand pain points, and follow up with context.",
    description:
      "VenMail's AI SDR layer discovers prospects, studies company signals, extracts contacts, and builds follow-up sequences that match the ICP.",
    image: "/home/section-sdr-ai.svg",
    sections: [
      "Use ICP rules to decide which domains and companies are actually relevant.",
      "Enrich prospects with verified contact data, reputation signals, and company context.",
      "Generate cold intros and follow-ups that reference the prospect's likely pain points.",
    ],
    useCases: ["Outbound sales", "Founder-led sales", "Agencies", "B2B services"],
  },
  "ecommerce-crm": {
    eyebrow: "Ecommerce CRM",
    title: "Know what shoppers want before, during, and after the sale.",
    description:
      "VenMail gives ecommerce teams a customer memory layer for product interest, purchase intent, abandoned journeys, post-purchase campaigns, and referral growth.",
    image: "/campaign_composer.png",
    sections: [
      "Capture product views, buying timeframe, referral source, and return visits as useful customer context.",
      "Ask smart questions when shoppers hesitate, compare products, or return to the same category.",
      "Recover demand through email, chat, product recommendations, and restock insights.",
    ],
    useCases: ["Online stores", "DTC brands", "Retailers", "Marketplaces"],
  },
  "visitor-memory": {
    eyebrow: "Visitor Memory",
    title: "Stop treating every returning visitor like a stranger.",
    description:
      "VenMail marks visitor behavior, page interests, source links, and conversation history so every future interaction starts with better context.",
    image: "/ai-context.png",
    sections: [
      "Track anonymous visitor behavior without forcing a form before there is trust.",
      "Merge known contact details with prior visits, questions, campaign clicks, and product interests.",
      "Let teams see why a person returned and what action is most likely to help them convert.",
    ],
    useCases: ["Landing pages", "High-intent websites", "Product-led funnels", "Consultancies"],
  },
  "ai-live-chat": {
    eyebrow: "AI Live Chat",
    title: "A site concierge that knows the page, visitor, and next step.",
    description:
      "VenMail's AI chat layer can summarize pages, answer buyer questions, qualify needs, capture contact details, and pass context into follow-up workflows.",
    image: "/popup-shot.png",
    sections: [
      "Show contextual summaries or questions after meaningful page engagement.",
      "Ask dynamic qualifying questions based on industry, product category, intent, and returning behavior.",
      "Turn chat conversations into CRM notes, email follow-ups, and sales handoffs.",
    ],
    useCases: ["Sales websites", "Ecommerce", "Healthcare and legal", "Support teams"],
  },
  "referral-automation": {
    eyebrow: "Referral Automation",
    title: "Turn retained customers into measurable evangelists.",
    description:
      "VenMail can connect customer education, referral links, rewards, and follow-up campaigns so satisfied customers bring the next wave of buyers.",
    image: "/partner/partner.png",
    sections: [
      "Give customers personalized referral links and track which campaigns create new qualified visits.",
      "Teach customers what the company does and why it matters before asking them to share.",
      "Combine referral source, buyer intent, and lifecycle stage with future outreach sequences.",
    ],
    useCases: ["SaaS", "Ecommerce", "Agencies", "Community-led brands"],
  },
};

export default function JourneySolutionPage({ page }) {
  return (
    <CustomLayout logoVariant="dark" hideFooterJumbo={true}>
      <Head>
        <title>{`${page.eyebrow} | VenMail`}</title>
        <meta name="description" content={page.description} />
      </Head>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="lg:col-span-7">
            <p className="mb-4 text-sm font-semibold uppercase text-orange-300">{page.eyebrow}</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">{page.title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-white/72 md:text-xl">{page.description}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://m.venmail.io/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-orange-100"
              >
                Start customer journey audit
              </a>
              <a
                href="/#journey-map"
                className="inline-flex items-center justify-center border border-white/30 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                See journey model
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-white/10 bg-white/10 p-4">
              <img src={page.image} alt={`${page.eyebrow} product visual`} className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase text-orange-600">What this means in practice</p>
            <h2 className="text-3xl font-bold leading-tight text-gray-950 md:text-5xl">
              VenMail should sell outcomes, not isolated email features.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {page.sections.map((section) => (
              <div key={section} className="rounded-lg border border-gray-200 p-6 shadow-sm">
                <p className="leading-7 text-gray-700">{section}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-950">Best-fit teams</h2>
          <div className="flex flex-wrap gap-3">
            {page.useCases.map((useCase) => (
              <span key={useCase} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700">
                {useCase}
              </span>
            ))}
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
