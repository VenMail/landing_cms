export default Object.freeze([
  { type: "paragraph", text: "Venmail can store an organization-level Amazon SES provider configuration and test API connectivity. Use a dedicated least-privilege IAM identity, not an AWS root user, and treat the AWS region as part of the configuration because SES identities, sandbox state and quotas are regional." , sourceIds: ["aws-ses-credentials", "aws-ses-identities"] },
  { type: "callout", tone: "warning", title: "Verified scope", text: "This guide covers configuring and testing the SES provider connection exposed in Venmail. Before production, verify the exact outbound route—campaign, automation or mailbox—against your account. Do not infer that every Venmail sending path automatically uses the customer-owned SES provider." },
  { type: "table", caption: "Credential and account prerequisites", headers: ["Item", "Required evidence", "Common failure"], rows: [
    ["IAM API credentials", "Access key for a dedicated principal with only required SES actions", "Using SES SMTP credentials in API fields"],
    ["Region", "Same region as verified identity and intended sending", "Identity exists in another region"],
    ["SES sandbox", "Production access or a test limited to verified recipients", "Unverified recipient rejected while sandboxed"],
    ["Identity", "Verified domain or email identity", "From address not covered by the identity"],
    ["DKIM", "Published selectors report verified", "Truncated or misplaced TXT/CNAME records"],
    ["Custom MAIL FROM", "Optional domain with its required MX and SPF", "Confusing MAIL FROM with visible From"],
  ], sourceIds: ["aws-ses-sandbox", "aws-ses-mail-from"] },
  { type: "steps", title: "Connection and test sequence", items: [
    { title: "Create the IAM identity", text: "In AWS, create a dedicated programmatic identity and grant only the SES actions required for the verified sending workflow. Document the owner and rotation date." },
    { title: "Verify the domain in the selected region", text: "Publish the SES identity and DKIM records in authoritative DNS. Wait for AWS to show the identity as verified." },
    { title: "Check sandbox and quota state", text: "A sandboxed account may only send to verified recipients. Request production access with an honest use case before live traffic." },
    { title: "Enter provider details in Venmail", text: "Supply the access key, secret and exact region in the organization's SMTP provider settings. Do not paste a root credential or an SES-generated SMTP password into API credential fields." },
    { title: "Run the built-in test", text: "Use a controlled sender and recipient. A successful connectivity test proves the credentials can call SES; it does not replace an end-to-end message test." },
    { title: "Exercise the intended route", text: "Send through the precise Venmail feature you will operate. Capture the SES message ID, received headers, DKIM result and event handling." },
  ] },
  { type: "checklist", title: "Production acceptance", items: ["IAM permission is least privilege", "Secret storage and rotation owner are documented", "Identity and DKIM are verified in the configured region", "Sandbox restriction is understood or removed", "SPF and DMARC include the intended stream", "Bounce and complaint handling has an owner", "The exact Venmail route passed an end-to-end test", "Fallback behavior is known"] },
  { type: "heading", level: 2, id: "debug", text: "Debug by layer" },
  { type: "list", style: "numbered", items: ["Authentication error: check key type, secret, clock and IAM policy.", "Identity error: check region and whether the From address is covered.", "Sandbox rejection: use a verified recipient or obtain production access.", "Delivery but no inbox: inspect SES events and receiver headers; connectivity is not deliverability.", "Venmail test works but a feature does not: verify that feature's provider selection and routing rather than changing DNS blindly."] },
]);
