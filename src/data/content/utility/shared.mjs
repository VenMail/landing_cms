export const p = (text, ...sourceIds) => ({ type: "paragraph", text, sourceIds });
export const h = (id, text) => ({ type: "heading", level: 2, id, text });
export const steps = (title, items) => ({ type: "steps", title, items: items.map(([title, text]) => ({ title, text })) });
export const table = (caption, headers, rows) => ({ type: "table", caption, headers, rows });
export const check = (title, items) => ({ type: "checklist", title, items });
export const example = (title, text) => ({ type: "callout", tone: "plain", title: `Example: ${title}`, text });
export const code = (title, text) => ({ type: "code", title, text });

export const freeMail = () => p("Start with Venmail's Free plan for basic email work and broadcasts. Check the current plan and your account's sending allowance before importing a list. A free workspace does not imply unlimited sending or access to every integration.", "venmail-plans");
export const apiCost = () => p("You can build and test this workflow with free software. For live sending, check API or SMTP access and the sending allowance in your Venmail account; the public Free workspace offer is not a promise of a free production API quota.", "venmail-plans", "venmail-api");

export function guide(seedId, slug, title, summary, reader, sources, nonFit, body) {
  return { seedId, slug, title, summary, reader, sources: [...new Set(["venmail-plans", ...sources])], nonFit, body };
}
