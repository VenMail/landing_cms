import { validateCatalog } from "../src/data/content/validate.mjs";

const errors = validateCatalog();
if (errors.length) {
  process.stderr.write(`Content validation failed:\n${errors.map((error) => `- ${error}`).join("\n")}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write("Content validation passed: 50 opportunities, 10 published articles, 40 briefs.\n");
}
