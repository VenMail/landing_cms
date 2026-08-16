import cloudflare from "./cloudflare-email-hosting-vs-email-routing.mjs";
import switchProvider from "./switch-email-provider-keep-same-address.mjs";
import cpanel from "./migrate-cpanel-email-to-new-host.mjs";
import workspaceAlternatives from "./google-workspace-alternatives-email-only.mjs";
import sesAlternatives from "./amazon-ses-alternatives.mjs";
import byoSes from "./use-venmail-with-your-amazon-ses-account.mjs";
import mailgunAlternatives from "./free-mailgun-alternatives.mjs";
import deliverability from "./email-deliverability-services.mjs";
import wordpress from "./wordpress-not-sending-email.mjs";
import whiteLabel from "./white-label-email-marketing-platforms.mjs";
import { opportunities } from "../opportunities.mjs";
import { buildBeginnerArticle } from "./beginnerArticleBuilder.mjs";
import { expandedProfiles } from "./expandedProfiles.mjs";

const originalBodies = {
  "cloudflare-email-hosting-vs-email-routing": cloudflare,
  "switch-email-provider-keep-same-address": switchProvider,
  "migrate-cpanel-email-to-new-host": cpanel,
  "google-workspace-alternatives-email-only": workspaceAlternatives,
  "amazon-ses-alternatives": sesAlternatives,
  "use-venmail-with-your-amazon-ses-account": byoSes,
  "free-mailgun-alternatives": mailgunAlternatives,
  "email-deliverability-services": deliverability,
  "wordpress-not-sending-email": wordpress,
  "white-label-email-marketing-platforms": whiteLabel,
};

const opportunitiesBySlug = new Map(opportunities.map((opportunity) => [opportunity.slug, opportunity]));
const expandedBodies = Object.fromEntries(expandedProfiles.map((profile) => {
  const opportunity = opportunitiesBySlug.get(profile.slug);
  if (!opportunity) throw new Error(`${profile.slug}: profile has no matching opportunity`);
  if (originalBodies[profile.slug]) throw new Error(`${profile.slug}: profile duplicates a hand-written article`);
  return [profile.slug, buildBeginnerArticle(opportunity, profile)];
}));

const registeredBodies = { ...originalBodies, ...expandedBodies };
const missingBodies = opportunities.filter(({ slug }) => !registeredBodies[slug]).map(({ slug }) => slug);
if (missingBodies.length) throw new Error(`Missing article bodies: ${missingBodies.join(", ")}`);

export const articleBodies = Object.freeze(registeredBodies);
