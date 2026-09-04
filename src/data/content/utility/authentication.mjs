import { guide, p, steps, table, check, example, apiCost } from "./shared.mjs";

const nonFit = "Use an established authentication framework or identity provider for the account-security layer; email delivery alone does not implement authentication.";
export default [
guide(5, "email-verification-vs-email-authentication", "Email verification and email authentication: which problem are you solving?", "Separate address checks, account verification, sender authentication and SMTP login errors.", "Founders and developers untangling confusing email error messages", ["validatorjs", "owasp-auth", "checkdmarc", "venmail-api"], nonFit, [
  p("Email verification can mean several different jobs. Checking an address's shape, proving someone controls a mailbox and authenticating your sending domain are separate tasks. Start by naming the outcome you need; otherwise you may buy a tool that solves the wrong problem."),
  table("Four jobs with similar names", ["Question", "What answers it", "What it does not prove"], [
    ["Does the address look valid?", "A syntax validator", "That the mailbox exists or wants mail"],
    ["Can this user access the mailbox?", "A confirmation link or code completed by the user", "Their legal identity or ongoing account security"],
    ["Is this sender authorized?", "SPF, DKIM and DMARC checks", "That a signup belongs to a real customer"],
    ["Why did SMTP login fail?", "The configured host, credentials and server response", "Whether a newsletter will reach the inbox"],
  ]),
  p("Imagine a signup page accepts an address, but the confirmation never arrives. A successful address-format check does not narrow the problem much. You need to know whether your application created the email, whether the sending service accepted it and whether the customer can complete the confirmation."),
  steps("Choose a useful first test", [
    ["Copy the exact symptom", "Record the error and the screen or log where it appeared. Do not put API keys, one-time links or passwords into a support screenshot. Include a safe request ID instead."],
    ["Test the relevant layer", "Use a free syntax library such as validator.js for input mistakes. Use a controlled signup for mailbox ownership. Use a DNS checker for sender records. Avoid treating any one result as proof of all three."],
    ["Follow the sending route", "If your application uses Venmail, match its request to the sending response or message record. A rejected credential needs a different fix from an accepted email that later bounces."],
    ["Retest the user journey", "After correcting the issue, complete a signup from a fresh test account. Confirm that a valid message can arrive and that an expired or already-used confirmation cannot verify a second account."],
  ]),
  example("a precise support request", "Our signup request 482 created a pending account. The email send returned a sender-authorization error at 09:20 UTC. The address-format check passed. We need help authorizing the configured From address, not changing the signup validation rule."),
  p("Use Venmail for the message-delivery part and a maintained authentication system for account state. Free utilities are useful here because they let you isolate mistakes before changing providers or paying for a larger verification service."),
  apiCost(),
  check("You have named the problem", ["The failed layer is identified", "The evidence contains no secrets", "The proposed fix addresses that layer", "The full signup flow is tested afterward"]),
]),
guide(5, "signup-verification-email-template", "Write a signup verification email people understand", "Give new users one clear action and explain what happens when the link no longer works.", "Product teams writing their first account-confirmation email", ["owasp-auth", "react-email", "venmail-api"], nonFit, [
  p("A verification email should answer three questions immediately: which product is this, what should I do, and what if I did not request it? Keep marketing out of this message. The reader is trying to finish a task, often with the signup page still open."),
  example("confirmation copy to adapt", "Subject: Confirm your email for Cedar. You started creating a Cedar account with this address. Confirm your email to finish setting it up. Button: Confirm email. This link expires in 30 minutes. If it has expired, return to Cedar and request a new one. If you did not start this signup, you can ignore this message."),
  p("The 30-minute period is an example, not a Venmail setting. Your application must enforce the period you state. If the product actually expires links in ten minutes, the email and the error page should say ten minutes too."),
  steps("Connect the copy to the product", [
    ["Use a recognizable sender", "Send from an address authorized for your Venmail account and identify the product in the From name. Provide a monitored support route. Do not ask the user to reply with their password or confirmation token."],
    ["Generate the link in the application", "Use your authentication framework to create a purpose-bound confirmation. Build the destination from an approved application origin, not a host value supplied by the visitor. Keep tokens out of analytics logs."],
    ["Make the button and fallback agree", "Both should lead to the same approved confirmation flow. The landing page should say whether confirmation succeeded, expired or was already completed. A generic error leaves users guessing whether they should sign up again."],
    ["Test difficult cases", "Send the template to a mailbox you control. Try a slow arrival, an expired link and a second click. Check the plain-text message as well as the designed version. Confirm that email scanners do not consume a token before a person confirms."],
  ]),
  table("Match email promises to application behavior", ["Email says", "The product must do"], [
    ["Confirm your email", "Verify only the intended account and address"],
    ["Expires in 30 minutes", "Reject it after that actual lifetime"],
    ["Request a new link", "Offer a rate-limited resend path"],
  ]),
  p("React Email is a free option for developers who want a reusable template. A plain message also works. Venmail can carry the email, while the authentication framework controls whether the account becomes verified."),
  apiCost(),
  check("Before release", ["Product and sender names agree", "The stated expiry is enforced", "A safe resend path exists", "Plain text contains the same action", "Repeated clicks cannot change another account"]),
]),
guide(5, "verification-email-not-arriving-debug", "Verification email not arriving? Follow this five-step check", "Find whether signup failed before sending, at the provider or after the receiving server accepted the message.", "Developers supporting users who cannot finish signup", ["mailpit", "owasp-auth", "venmail-api"], nonFit, [
  p("A missing verification email is a chain of questions, not a single deliverability problem. Did signup create a pending account? Was the email job created? Did the sending service accept it? Was it delivered? Does its link still work? Answer them in that order."),
  p("Ask the user to confirm the address they entered through an appropriate support channel. Do not ask them to forward a live verification token into an ordinary ticket. A safe request ID and approximate time are usually better for finding the event."),
  steps("Trace one signup", [
    ["Check application state", "Find the pending signup and its creation time. If validation rejected it before the mail job was created, fix the form or explain the input error. Sending infrastructure cannot deliver a job that does not exist."],
    ["Inspect the queue", "Check whether the job was picked up and whether it failed. Look for missing environment values, a stopped development worker or a template exception. Keep a record of the failure before retrying."],
    ["Read the sending response", "For a Venmail integration, inspect the response for authentication, sender authorization or content errors. Record the message identifier when accepted. Never log the credential or the full confirmation link."],
    ["Find the recipient outcome", "Use available delivery events and the user's spam-folder check. Acceptance by the recipient server is not proof that a person saw the email. An explicit permanent failure needs a different response from a temporary delay."],
    ["Test the link lifetime", "If mail arrives after the token expires, issuing the same expired link again will not help. Correct the delay, let the user request a fresh link and retire the old challenge according to your framework's rules."],
  ]),
  table("A small incident record", ["Stage", "Record", "Example finding"], [
    ["Signup", "Safe request ID and timestamp", "Pending account exists"],
    ["Queue", "Job status and error class", "Template failed before send"],
    ["Delivery", "Provider message ID if created", "No message submitted yet"],
    ["Resolution", "One change and a new test", "Fixed template; completed fresh signup"],
  ]),
  p("For free local testing, use Mailpit to capture development SMTP messages. It helps distinguish template and application problems from internet delivery. It does not test whether Gmail or another provider will accept your production sender.", "mailpit"),
  apiCost(),
  check("Close the incident when", ["The failed stage is known", "A fresh signup completes", "Expired links remain invalid", "Retries do not flood the user", "Logs contain identifiers rather than secrets"]),
]),
guide(5, "password-reset-email-free-test-plan", "Test password-reset emails with a free local mailbox", "Check reset content, expiry and failure states before real users depend on the flow.", "Developers preparing a password-reset feature for release", ["mailpit", "owasp-reset", "venmail-api"], nonFit, [
  p("A password-reset test should cover both the message and the account change. A screenshot of a good-looking email is not enough. Use a local mail catcher for repeatable development tests, then run a controlled delivery test through your production sending route."),
  p("The local tests cost no sending credits and cannot annoy a real customer if you keep the environment isolated. Use synthetic accounts and a mail catcher such as Mailpit. Ensure the development application points to the catcher rather than live SMTP credentials."),
  steps("Test the complete reset journey", [
    ["Start with the request screen", "Submit an existing and a non-existing account. The public response should not reveal which address has an account. Check that repeated requests are limited without locking a legitimate user out of normal login."],
    ["Read the captured email", "Check the product name, approved HTTPS destination and clear reset action. Make sure the email contains no password. Confirm that the stated lifetime agrees with the authentication service."],
    ["Exercise the token rules", "Use a fresh link, reuse it, let another expire and alter one character. Only the valid, intended challenge should permit a reset. Your authentication framework should enforce these rules on the server."],
    ["Check the aftermath", "Confirm the new password works and the old password does not. Review the session policy and notify the user of the completed change without exposing the new password. Log the event with safe identifiers."],
    ["Run a controlled live test", "Send a reset to your own test account through Venmail using authorized credentials. Confirm the actual link, delivery and end-to-end behavior. The local catcher cannot assess recipient filtering."],
  ]),
  table("Record expected and actual outcomes", ["Test", "Expected result"], [
    ["Unknown address", "Generic request acknowledgement"],
    ["Valid link used once", "Reset allowed for the intended account"],
    ["Same link used again", "No second reset"],
    ["Expired or altered link", "Safe failure with a route to request a new link"],
  ]),
  p("If a test fails, fix the identity flow before polishing the template. Email transport does not make a reset token single-use. OWASP's reset guidance is a useful review reference, while the application remains responsible for its security decisions.", "owasp-reset"),
  apiCost(),
  check("Release evidence", ["Local tests use synthetic accounts", "Tokens are single-use and expire", "Unknown accounts are not disclosed", "No passwords appear in email", "One controlled live reset succeeds"]),
]),
guide(5, "resend-verification-email-cooldown", "Design a resend-verification button that helps users", "Explain delivery delays, prevent repeated sends and give users a clear recovery path.", "Product teams fixing frustrating signup and resend experiences", ["owasp-auth", "owasp-reset", "venmail-api"], nonFit, [
  p("A resend button should help a user recover, not create five competing links in their inbox. Keep the page informative while a message is on its way, limit repeated requests on the server and explain which link the user should use."),
  p("Consider someone who taps Resend three times on a weak connection. If each tap silently invalidates the last link, they may open an older email and think signup is broken. Decide the challenge lifecycle first, then make the interface explain it."),
  steps("Design the recovery flow", [
    ["Confirm the destination safely", "During the user's own signup session, show enough of the entered address to help them spot a typo. Offer a controlled way to correct it. Avoid exposing account existence through a public address-lookup form."],
    ["Use a real server cooldown", "Disable repeated sends on the server, not only in JavaScript. Return an appropriate retry time for the interface. A short visible countdown can reduce repeated tapping, but its duration should match the backend policy."],
    ["Choose a link policy", "Use your authentication framework's documented rules for reusing or replacing an unexpired challenge. If a new link replaces old ones, say so. Never extend validity forever just because someone keeps pressing the button."],
    ["Handle uncertain sends", "Track the request and sending result with a safe identifier. A network timeout may happen after the provider accepts the email, so an immediate blind retry can create duplicates. Reconcile the outcome or use an application-level deduplication record."],
    ["Provide a next step", "After the wait, offer resend, address correction and a support path. Keep the explanation short. A user should not need to understand SMTP to finish signup."],
  ]),
  table("Example interface messages", ["State", "Suggested copy"], [
    ["Requested", "Check your inbox for a confirmation email. It may take a moment."],
    ["Cooldown", "You can request another email when this countdown ends."],
    ["New challenge replaces old", "Use the most recent confirmation email; earlier links no longer work."],
    ["Temporary failure", "We could not complete the request. Please try again shortly."],
  ]),
  p("Prototype these states for free with your existing app and local test mail. Venmail supplies the live sending path when configured; the cooldown, deduplication record and challenge lifecycle belong to your application. Test multiple tabs and slow responses as well as the happy path."),
  apiCost(),
  check("Resend acceptance", ["The server enforces limits", "Copy matches token behavior", "A slow response does not trigger uncontrolled duplicates", "Typos have a recovery path", "The page does not expose other accounts"]),
]),
];
