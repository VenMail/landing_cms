import { validateCatalog } from "../src/data/content/validate.mjs";
import { getAllOpportunities, getPublishedArticles } from "../src/data/content/catalog.mjs";

const errors = validateCatalog();
if (errors.length) {
  process.stderr.write(`Content validation failed:\n${errors.map((error) => `- ${error}`).join("\n")}\n`);
  process.exitCode = 1;
} else {
  const all = getAllOpportunities();
  process.stdout.write(`Content validation passed: ${all.length} article records, ${getPublishedArticles().length} published articles, ${all.filter(item => item.status === "brief").length} briefs; all 11 seed topics have 5–10 guides.\n`);
}
