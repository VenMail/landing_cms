import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const checks = [
  {
    file: "src/pages/index.jsx",
    text: "Turn every visitor into a remembered customer journey",
    reason: "homepage hero must lead with the new customer-journey position",
  },
  {
    file: "src/pages/index.jsx",
    text: "AI Customer Journey CRM",
    reason: "homepage must name the category clearly",
  },
  {
    file: "src/pages/index.jsx",
    text: "Visitor Memory",
    reason: "homepage must show that VenMail tracks and remembers visitors",
  },
  {
    file: "src/pages/index.jsx",
    text: "AI Concierge",
    reason: "homepage must show the website/chat customer-facing layer",
  },
  {
    file: "src/pages/index.jsx",
    text: "Referral Engine",
    reason: "homepage must show retention and evangelist loops",
  },
  {
    file: "src/pages/_document.js",
    text: "AI customer journey CRM",
    reason: "metadata must move beyond email-only positioning",
  },
  {
    file: "public/sitemap.xml",
    text: "https://venmail.io/ai-crm",
    reason: "sitemap must expose the new AI CRM entry point",
  },
  {
    file: "public/sitemap.xml",
    text: "https://venmail.io/ecommerce-crm",
    reason: "sitemap must expose the ecommerce growth wedge",
  },
];

const failures = checks.filter(({ file, text }) => !read(file).includes(text));

if (failures.length > 0) {
  console.error("Landing positioning checks failed:");
  for (const failure of failures) {
    console.error(`- ${failure.file}: missing "${failure.text}" (${failure.reason})`);
  }
  process.exit(1);
}

console.log(`Landing positioning checks passed (${checks.length}/${checks.length}).`);
