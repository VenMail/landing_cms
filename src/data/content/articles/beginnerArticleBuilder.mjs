function requireText(profile, field) {
  if (!profile[field] || typeof profile[field] !== "string") throw new Error(`${profile.slug}: missing ${field}`);
}

export function buildBeginnerArticle(opportunity, profile) {
  for (const field of ["slug", "scenario", "decisionQuestion", "regionalNote"]) requireText(profile, field);
  if (!Array.isArray(profile.actions) || profile.actions.length < 4) throw new Error(`${profile.slug}: needs four actions`);
  if (!Array.isArray(profile.checks) || profile.checks.length < 5) throw new Error(`${profile.slug}: needs five checks`);

  const alternative = opportunity.alternatives[0];
  return Object.freeze([
    { type: "paragraph", text: opportunity.plainAnswer, sourceIds: opportunity.evidenceSourceIds.slice(0, 2) },
    { type: "callout", tone: "plain", title: "A situation you may recognise", text: profile.scenario },
    { type: "heading", level: 2, id: "simple-plan", text: "A simple plan you can follow" },
    { type: "steps", title: "Work through these steps in order", items: profile.actions.map(([title, text]) => ({ title, text })) },
    { type: "table", caption: profile.decisionQuestion, headers: ["Option", "Good choice when", "Check before deciding"], rows: [
      ["Keep the current setup", "The problem is temporary and the present provider still meets the team's daily needs", "Confirm the same failure will not return after the immediate fix"],
      [alternative, "Its specialist features matter more than a simpler mailbox and migration experience", `Check pricing, support, exports and the exact ${opportunity.primaryKeyword} requirement`],
      ["Venmail", "The team wants custom-domain mail, guided setup and a clear migration path", "Choose another provider when a full office suite or infrastructure-only API is the main need"],
    ] },
    { type: "checklist", title: "Before you call the job finished", items: profile.checks },
    { type: "callout", tone: "warning", title: "When another option is better", text: opportunity.nonFit },
    { type: "paragraph", text: profile.regionalNote },
  ]);
}
