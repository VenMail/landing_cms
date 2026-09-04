import { guide, p, steps, table, check, example, code, apiCost } from "./shared.mjs";

const nonFit = "Use a maintained backend or form service if you cannot operate a secure server endpoint; a browser-only app must not contain mail credentials.";
export default [
guide(10, "react-contact-form-email-safe-pattern", "Send email from a React contact form: the safe pattern", "Keep the form in React and put validation, abuse controls and Venmail credentials on the server.", "React developers building a contact form", ["next-routes", "validatorjs", "venmail-api"], nonFit, [
  p("A React form should send a request to your backend, which then sends the email. Do not put a Venmail key in browser code, a public environment variable or a mobile bundle. Anything shipped to the visitor can be read and reused."),
  p("For a contact page, your backend should choose the destination mailbox and the authorized From address. The visitor supplies their name, reply address and message. Allowing the visitor to choose arbitrary recipients turns a helpful form into an open sending service."),
  table("The request boundary", ["Value", "Who controls it", "Example rule"], [
    ["Name and message", "Visitor, checked by server", "Trim and enforce size limits"],
    ["Reply address", "Visitor, checked by server", "Validate format and reject header control characters"],
    ["To and From", "Server configuration", "Fixed support inbox and authorized sender"],
    ["API credential", "Server secret store", "Never included in the browser bundle"],
  ]),
  steps("Implement the handoff", [
    ["Build an accessible form", "Use labelled fields and show validation errors beside the relevant input. Preserve the draft when a request fails. Disable repeated clicks while a request is pending, but do not rely on that as an abuse control."],
    ["Create a server endpoint", "In a server-hosted Next.js app, a Route Handler can receive the form request. A statically exported site needs a separate backend or function. Limit the request size and accept only the intended fields."],
    ["Validate and limit", "Check the address and text on the server. Apply a shared rate limit and appropriate bot protection. For cookie-authenticated flows, apply origin and CSRF protections. A free library such as validator.js can help with format checks, not proof of identity."],
    ["Send a fixed message shape", "Build a plain-text message from validated input, with the visitor address as Reply-To. Use the authorized Venmail From address and a fixed recipient. Avoid inserting raw visitor HTML into the template."],
    ["Return an honest result", "Tell the user their request was accepted only after your application has durably accepted it. Do not say delivered merely because a provider accepted the send. Return a safe reference if support needs to trace it."],
  ]),
  example("a useful success message", "Thanks. We have received your request and will reply to the address you provided. Reference: contact-482. This says what the application knows without claiming that a staff member has already read the email."),
  p("React, Next.js and the validation library can be used without a software license fee under their applicable licenses. Running the backend and sending live mail have their own requirements. Test the boundary with a local mailbox before connecting live credentials."),
  apiCost(),
  check("Before exposing the form", ["No mail key reaches the browser", "Recipient and sender are fixed server-side", "Input size and rate limits are enforced", "The draft survives a failed request", "Accepted and delivered are separate states"]),
]),
guide(10, "node-send-first-venmail-test-email", "Send your first Venmail test email from Node.js", "Use a small server-side script to verify credentials and a sender before connecting a React app.", "JavaScript developers checking a Venmail API integration", ["node-fetch", "venmail-api"], "Use the API documentation for your provisioned account if its endpoint or authentication differs; do not mix credentials from separate Venmail interfaces.", [
  p("Test the sending connection outside your app first. A short Node.js script makes it easier to identify an endpoint, credential or sender problem before adding forms, templates and queues. Send only to a mailbox you control for this first check."),
  p("The example uses the documented structured-message interface with X-Server-API-Key. Copy the full send endpoint and authorized sender from the documentation for your provisioned account. A mailbox login, partner API token and server API key are not interchangeable."),
  steps("Prepare the test", [
    ["Set server-only environment values", "Provide VENMAIL_SEND_URL, VENMAIL_SERVER_KEY, VENMAIL_FROM and VENMAIL_TEST_TO through your local secret configuration. Keep the key out of source control and shell screenshots. Use the documented HTTPS send endpoint, not a URL from a form input."],
    ["Save the script", "Save the code below as send-test.mjs and run it with a supported Node.js version that provides fetch. The script sends one plain-text message and prints only the response status, not the credential."],
    ["Read both results", "Check the script's API status and the destination mailbox. If the API rejects the request, investigate that response in a secure local debugger. If accepted, inspect delivery separately before declaring success."],
    ["Keep it out of the client", "When the test works, move this operation behind your application's server boundary. Add persistence and controlled retry behavior before making it part of a customer-facing flow."],
  ]),
  code("send-test.mjs — one controlled send", `const names = ["VENMAIL_SEND_URL", "VENMAIL_SERVER_KEY", "VENMAIL_FROM", "VENMAIL_TEST_TO"];
for (const name of names) {
  if (!process.env[name]) throw new Error("Missing " + name);
}
const endpoint = new URL(process.env.VENMAIL_SEND_URL);
if (endpoint.protocol !== "https:") throw new Error("Use the documented HTTPS endpoint");
const response = await fetch(endpoint, {
  method: "POST",
  headers: {
    "X-Server-API-Key": process.env.VENMAIL_SERVER_KEY,
    "Content-Type": "application/json",
  },
  signal: AbortSignal.timeout(15000),
  body: JSON.stringify({
    to: [process.env.VENMAIL_TEST_TO],
    from: process.env.VENMAIL_FROM,
    subject: "Controlled Venmail connection test",
    plain_body: "This is a test to a mailbox I control.",
  }),
});
const result = await response.json();
if (!response.ok || result.status !== "success") {
  throw new Error("Send was not accepted; inspect the response securely. HTTP " + response.status);
}
console.log("API accepted the message. Now verify receipt in the test mailbox.");`),
  p("A timeout leaves the outcome uncertain: the service may already have accepted the message. This script deliberately has no automatic retry. Check the sending record before rerunning it, then design application-level deduplication for production."),
  apiCost(),
  check("Connection verified", ["The endpoint matches your account docs", "The key remains server-side", "The sender is authorized", "The intended test inbox received the message", "No timeout was blindly retried"]),
]),
guide(10, "react-email-template-with-venmail", "Build a React Email template for Venmail", "Render a reusable component to HTML and plain text, then hand it to your server-side sender.", "React developers who want maintainable transactional email templates", ["react-email", "react-render", "venmail-api"], "Use a simple text email when a React template adds more complexity than value; a template library is optional for sending.", [
  p("React Email lets you write a template as a component and render it into an email body. Venmail can then send the rendered content through its structured-message interface. The template library handles presentation; your backend still owns recipients, credentials and delivery handling."),
  p("Begin with one message such as a booking confirmation. Keep the business facts in a small data object, and render only fields the server has validated. Avoid putting private booking details into a public preview or a committed fixture."),
  steps("Create a reusable template", [
    ["Install and pin the template packages", "Use the current React Email components and rendering utilities from their official documentation. Commit your lockfile so the production build uses the reviewed versions. The library is free software; mail delivery is separate."],
    ["Build a small component", "Use the example below in a server-side JSX-capable project. Keep the layout simple. Use fictional booking references while developing and an approved support destination when adding links."],
    ["Render both bodies", "Await render to produce HTML, then create plain text with the supported utility. Pass html_body and plain_body to your existing Venmail server-side sender. Do not bundle the sending credential with the template preview."],
    ["Test realistic content", "Try long names, different currencies if relevant, and non-English text. Send a test through the intended route and read it on a phone. A component preview alone is not a mail-client test."],
  ]),
  code("A minimal server-side rendering example", `import { Html, Body, Heading, Text } from "@react-email/components";
import { render, toPlainText } from "@react-email/render";

function BookingEmail({ reference }) {
  return (
    <Html>
      <Body>
        <Heading>Your booking is confirmed</Heading>
        <Text>Reference: {reference}</Text>
        <Text>Reply to this message if you need help.</Text>
      </Body>
    </Html>
  );
}

const html_body = await render(<BookingEmail reference="DEMO-482" />);
const plain_body = toPlainText(html_body);
// Pass both bodies to your server-side Venmail send operation.
// This example renders a template; it does not send a message.`),
  p("The reply instruction is a promise: configure a monitored reply address in the sending operation. If nobody receives replies, change the copy to a support route that actually works. Keep one owner responsible for reviewing shared templates after changes."),
  apiCost(),
  check("Template acceptance", ["HTML and plain text express the same facts", "No secret appears in the preview", "Long content remains readable", "Support instructions match the sender configuration", "A real test message was inspected"]),
]),
guide(10, "test-react-email-locally-mailpit", "Test React email locally with Mailpit before sending live", "Capture development messages for free and inspect the content without emailing customers.", "Developers testing forms and transactional templates", ["mailpit", "nodemailer", "venmail-api"], "Add controlled live tests for real delivery behavior; a local catcher cannot assess internet authentication, reputation or recipient filtering.", [
  p("A local mail catcher receives messages from your development app and shows them in a browser. Mailpit is a free option for this job. It is especially useful when you need to submit the same form many times or inspect a reset email without using a real inbox."),
  p("Keep development sending separate from production. A test run should use fictional recipients and local transport. Do not copy production API keys into a tutorial project simply to make its first test work."),
  steps("Build a local test loop", [
    ["Run Mailpit locally", "Install Mailpit from its official project using the method appropriate to your operating system. Bind its interfaces to localhost for a local-only test and use the ports shown by your installed configuration. Do not expose a test mailbox containing reset links to the internet."],
    ["Select a development transport", "Point an SMTP-capable development sender, such as Nodemailer, at the local catcher. Keep this behind an explicit environment setting. Your production Venmail HTTP API is a different transport and should not be assumed to point directly at Mailpit."],
    ["Trigger the real application action", "Submit the form or create a synthetic booking through the app. Inspect the captured subject, recipients, HTML and plain text. This checks more than calling the template renderer in isolation."],
    ["Test awkward data", "Try a long name, missing optional field and non-English text. Verify that visitor input is treated as content rather than executable HTML. Make sure error states preserve the user's draft where appropriate."],
    ["Switch deliberately for live testing", "Use a separate controlled configuration for a Venmail test to a mailbox you own. Verify production credentials, sender authorization and delivery there. Never let a local test silently fall back to live transport."],
  ]),
  table("Which test answers which question?", ["Test", "Answers", "Does not answer"], [
    ["Template preview", "Does the component render?", "Did the app create the mail job?"],
    ["Local SMTP capture", "Did the app produce the intended email?", "Will a public provider accept it?"],
    ["Controlled Venmail send", "Does the real sending path work for this test?", "Will every future recipient see it?"],
  ]),
  p("Keep a small set of synthetic fixtures in version control and delete captured sensitive test messages when finished. The best free test setup is one teammates can reproduce without access to customer mail."),
  apiCost(),
  check("Local test boundary", ["Mailpit is local-only", "Fixtures are synthetic", "Development cannot silently send live", "Both message bodies are inspected", "The live transport has a separate test"]),
]),
guide(10, "email-api-retries-without-duplicate-messages", "Handle email API failures without sending duplicate messages", "Track each intended email and distinguish a rejected request from an uncertain timeout.", "Developers adding reliable email delivery to a React or Next.js product", ["venmail-api", "node-fetch", "mailpit"], "Use a durable job system when a simple synchronous handler cannot preserve state across restarts and retries.", [
  p("When an email request times out, you do not necessarily know that it failed. The provider may have accepted the message before the connection broke. Reliable retries start with a record of the intended email, not a loop that resends every exception."),
  p("Give each business event a stable identity, such as booking-482-confirmation. Store that identity before sending and enforce uniqueness in your database. This application record is useful even when a provider has its own idempotency feature; do not assume such a feature exists without checking the API contract."),
  table("Treat different failures differently", ["Outcome", "Meaning", "Next action"], [
    ["Invalid credential or sender", "Configuration rejected", "Fix configuration; do not retry in a tight loop"],
    ["Explicit temporary rejection", "Request was rejected temporarily", "Retry according to documented guidance with a limit"],
    ["Timeout after submission", "Acceptance is uncertain", "Reconcile before sending again"],
    ["Accepted, then permanently bounced", "Sending succeeded but recipient delivery failed", "Record the failure and resolve the recipient problem"],
  ]),
  steps("Build a small delivery state machine", [
    ["Create the event record", "Save the business event, recipient reference and template version. Use a unique constraint so two concurrent workers cannot create two intended sends for the same event. Keep credentials and reset tokens out of this record."],
    ["Claim the job atomically", "Only one worker should own a send attempt at a time. Record attempt time and status. Use a durable queue or database lease appropriate to your stack, not only a variable in server memory."],
    ["Save the provider result", "When Venmail accepts the message, store the returned identifier. Separate accepted from delivered. If the connection outcome is unknown, mark it for reconciliation instead of reporting a certain failure."],
    ["Process updates once", "If using delivery webhooks, verify their authenticity with the account's documented mechanism and deduplicate event processing. Delivery events can arrive more than once or out of order."],
    ["Test interruption", "Simulate a worker stopping after submission but before saving the response. Check that recovery does not blindly send a duplicate. Define a manual review path when the provider cannot resolve an uncertain attempt."],
  ]),
  example("an honest status record", "Business event: booking-482-confirmation. State: acceptance uncertain. Last attempt: 10:15 UTC. Action: reconcile with the sending service before retrying. The customer-facing page says the booking is saved; it does not claim that the confirmation email has arrived."),
  p("You can exercise most of this logic for free with a test database and local mail capture. The important design choice is persistence across failures, not the number of retry attempts."),
  apiCost(),
  check("Retry readiness", ["Business events have stable unique IDs", "Jobs are claimed atomically", "Unknown outcomes stay distinct", "Provider IDs are saved", "Crash recovery is tested"]),
]),
];
