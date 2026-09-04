import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { getPublishedArticles } from "../src/data/content/catalog.mjs";

const siteUrl = "https://venmail.io";
const staticRoutes = [
  "/", "/about-us", "/blog", "/contact-us", "/integrations", "/pricing", "/solutions",
  "/why-venmail", "/product/mail", "/product/calendar", "/product/contacts",
  "/resources/faqs", "/resources/help", "/resources/partner",
];

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function buildSitemap(articles) {
  const staticEntries = staticRoutes.map((route) => {
    const loc = route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`;
    return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n  </url>`;
  });
  const articleEntries = articles.map((article) => `  <url>\n    <loc>${escapeXml(article.canonicalUrl)}</loc>\n    <lastmod>${article.updatedAt}</lastmod>\n  </url>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...staticEntries, ...articleEntries].join("\n")}\n</urlset>\n`;
}

export function buildRss(articles) {
  const ordered = [...articles].sort((left, right) => right.updatedAt.localeCompare(left.updatedAt));
  const items = ordered.map((article) => `    <item>\n      <title>${escapeXml(article.title)}</title>\n      <link>${escapeXml(article.canonicalUrl)}</link>\n      <guid isPermaLink="true">${escapeXml(article.canonicalUrl)}</guid>\n      <description>${escapeXml(article.excerpt)}</description>\n      <category>${escapeXml(article.category)}</category>\n      <pubDate>${new Date(`${article.updatedAt}T00:00:00Z`).toUTCString()}</pubDate>\n    </item>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Venmail Email &amp; Free Tool Guides</title>\n    <link>${siteUrl}/blog</link>\n    <description>Practical guides for business email, free tools, marketing, developer workflows and migration.</description>\n    <language>en</language>\n${items.join("\n")}\n  </channel>\n</rss>\n`;
}

async function writeFeeds() {
  const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const articles = getPublishedArticles();
  await Promise.all([
    writeFile(path.join(repositoryRoot, "public", "sitemap.xml"), buildSitemap(articles), "utf8"),
    writeFile(path.join(repositoryRoot, "public", "rss.xml"), buildRss(articles), "utf8"),
  ]);
  process.stdout.write(`Generated sitemap and RSS for ${articles.length} published articles.\n`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  await writeFeeds();
}
