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

export const articleBodies = Object.freeze({
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
});
