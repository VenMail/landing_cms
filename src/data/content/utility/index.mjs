import deliverability from "./deliverability.mjs";
import marketing from "./marketing.mjs";
import authentication from "./authentication.mjs";
import commerce from "./commerce.mjs";
import agencies from "./agencies.mjs";
import developers from "./developers.mjs";
import leads from "./leads.mjs";
import { seedTopics } from "../seedCoverage.mjs";

export const utilityGuides = Object.freeze([
  ...deliverability, ...marketing, ...authentication, ...commerce, ...agencies, ...developers, ...leads,
]);

export const utilityOpportunities = Object.freeze(utilityGuides.map((guide, index) => {
  const topic = seedTopics.find(topic => topic.id === guide.seedId);
  const stepTitles = guide.body.filter(b => b.type === "steps").flatMap(b => b.items.map(i => i.title));
  const artifacts = guide.body.filter(b => ["table", "code", "checklist"].includes(b.type) || b.title?.startsWith("Example:"));
  return Object.freeze({
    id: 51 + index, slug: guide.slug, status: "published",
    cluster: topic.label, category: topic.label, seedOpportunityIds: [guide.seedId],
    serverOpportunityId: guide.seedId,
    primaryKeyword: guide.title.toLowerCase(),
    secondaryKeywords: [topic.name, `${topic.label} free tools`],
    metrics: { volume: null, cpc: null, difficulty: null },
    intent: "practical how-to", funnelStage: "consideration", reader: guide.reader,
    problem: guide.summary, plainAnswer: guide.body[0].text,
    painPoints: [guide.summary, ...stepTitles.slice(0, 2)],
    targetCountries: ["United States", "United Kingdom", "Nigeria", "India"],
    regionalConsiderations: ["Test non-English names, local currency where relevant, and the recipient providers your actual audience uses."],
    title: guide.title, excerpt: guide.summary, metaTitle: `${guide.title} | Venmail`, metaDescription: guide.summary,
    evidenceSourceIds: guide.sources,
    alternatives: ["Manual workflow with free tools", "A specialist service for the required task"],
    venmailFit: guide.body.filter(b => b.type === "paragraph" && /Venmail/.test(b.text)).map(b => b.text).at(-1),
    nonFit: guide.nonFit,
    originalValue: artifacts.map(b => b.caption ?? b.title),
    outline: [...stepTitles, "Check the worked example", "Verify the result"],
    questions: [guide.title, "Which parts can I do for free?", "How do I check the result?"],
    researchTasks: ["Check the current Venmail plan and integration contract", "Review the linked primary tool documentation", "Inspect the example and completion checks"],
    cta: { label: "Explore Venmail's free plan", href: "/pricing" },
    internalLinks: ["/pricing", "/blog"],
    author: index % 2 === 0 ? "Ada from Venmail" : "Claire from Venmail",
    reviewer: "Source and editorial checks", publishedAt: "2026-09-04", updatedAt: "2026-09-04",
  });
}));

export const utilityBodies = Object.freeze(Object.fromEntries(utilityGuides.map(g => [g.slug, g.body])));
