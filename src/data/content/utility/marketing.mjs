import { guide, p, steps, table, check, example, freeMail } from "./shared.mjs";

const sources = ["gmail-senders", "mjml"];
const nonFit = "Choose a dedicated commerce or marketing system when you need event-driven journeys beyond basic broadcasts and manual follow-up.";
export default [
guide(3, "first-small-business-newsletter-free", "Send your first small-business newsletter with free tools", "Write one useful email, prepare a small subscribed audience and check it before sending.", "Owners sending their first business newsletter", sources, nonFit, [
  p("Your first newsletter needs one useful idea and one clear next step. It does not need a complex design or a large list. Use Venmail's basic broadcast workflow for a small subscribed audience, and spend your preparation time making the message worth opening."),
  p("For example, a repair shop could explain three signs that a bicycle needs a service. That helps a reader before asking them to book. A message that only lists discounts gives them less reason to keep reading next month."),
  steps("Build the first issue", [
    ["Choose one reader and problem", "Write down who will read the message and what they should be able to do afterward. Replace a broad topic such as company news with a concrete promise such as checking brake wear before a commute."],
    ["Prepare your audience", "Use people who signed up for this type of message. Keep a simple record of the signup source and exclude prior unsubscribes. Do not treat your entire customer address book as a newsletter list."],
    ["Draft a short message", "Use a descriptive subject, a two-sentence introduction, three practical points and one action. Put essential information in text so the message still works when images do not load. Include the business identity and a working unsubscribe route."],
    ["Create and test the broadcast", "In Venmail, prepare a basic campaign or broadcast using the intended sender. Send a test to yourself first. Read it on a phone, follow the main link and reply to verify that a real person can answer."],
    ["Send within your allowance", "Check the recipient count and account limits before the final send. Afterward, review replies, invalid addresses and the action you asked people to take. Save one improvement for the next issue."],
  ]),
  example("a one-minute newsletter outline", "Subject: Three checks before your next bike commute. Opening: A five-minute check can prevent a late start. Tips: inspect tyre pressure, test both brakes, check your lights. Action: reply if you want help with any of these. Footer: why you received this and how to unsubscribe."),
  p("Plain text is a good free starting point. If a developer later helps with a branded layout, MJML is an open-source email template framework. It produces HTML; it does not supply a mailing list or pay the cost of delivering messages.", "mjml"),
  freeMail(),
  check("Ready to send", ["The email teaches one useful thing", "Every recipient expects this message", "The mobile test is easy to read", "The action and unsubscribe links work", "Replies reach someone"]),
]),
guide(3, "four-week-small-business-email-calendar", "A four-week email calendar for a small business", "Plan four useful messages without turning every email into a sales pitch.", "Solo owners who need a manageable newsletter routine", sources, nonFit, [
  p("A simple calendar removes the weekly question of what to send. Build each issue around a different customer need: learn, choose, prepare and decide. Four messages are enough to test a useful routine; you can slow the schedule if weekly mail is more than your audience expects."),
  p("A local plant shop, for example, could help new owners keep a plant healthy before recommending another purchase. The calendar below is an original planning example. Replace the subject matter with real questions your own customers ask."),
  table("Four issues for a plant shop", ["Issue", "Useful content", "One action"], [
    ["Week 1: learn", "How to tell overwatering from underwatering", "Reply with a care question"],
    ["Week 2: choose", "Three plants for a low-light room", "Read the short selection guide"],
    ["Week 3: prepare", "A repotting checklist using items at home", "Save the checklist"],
    ["Week 4: decide", "What happens at our plant-care workshop", "View dates and decide whether to book"],
  ]),
  steps("Turn the calendar into a routine", [
    ["Choose a sustainable frequency", "Look at the signup promise and your available time. If readers joined for monthly updates, use these as four months of ideas. More frequent sending is not automatically more useful."],
    ["Write the useful part first", "Answer one question fully before adding an offer. Explain unfamiliar terms in everyday words. Ask someone outside your business to tell you what they learned after reading the draft."],
    ["Prepare a review copy", "Draft each message in a document, then put it into Venmail's broadcast workflow. Keep the final text, audience description and link destination together so an old draft is not sent accidentally."],
    ["Learn from real responses", "After each issue, record replies and the intended action. If people repeatedly ask the same follow-up question, make that the next topic. Do not force the calendar when customers reveal a more urgent need."],
  ]),
  p("Use a free spreadsheet with columns for issue, promise, draft owner, audience, test sent and outcome. One row per issue is enough. Leave the outcome blank until you have evidence; a planned send is not a completed one."),
  freeMail(),
  check("Keep the schedule useful", ["Frequency matches the subscription promise", "Each issue has a different purpose", "Links lead to current information", "The next draft is ready before you send", "Opt-outs are excluded each time"]),
]),
guide(3, "clean-newsletter-csv-before-import", "Clean a newsletter CSV before importing it into Venmail", "Remove avoidable import mistakes while preserving subscription and unsubscribe records.", "Small teams moving an existing permission-based mailing list", ["openrefine", "gmail-senders"], "A cleanup tool cannot turn an unknown or purchased list into a subscribed audience; collect a fresh opt-in where permission is unclear.", [
  p("A clean CSV makes an import easier to review, but valid formatting is only half the job. You also need to preserve who subscribed, what they requested and who opted out. Work on a copy so a cleanup mistake does not destroy the original record."),
  p("Suppose two exports contain the same customer: one says subscribed and the newer one says unsubscribed. Simply removing a duplicate row can keep the wrong version. Establish the rule that an opt-out must not disappear during a merge."),
  steps("Clean in a safe order", [
    ["Save the originals", "Keep the untouched exports with their dates and source systems. Make a working copy. Identify the column that records subscription status before deleting or renaming any fields."],
    ["Keep a small, useful schema", "Retain email, name if needed, subscription source, subscription date and status. Avoid importing unrelated notes or sensitive customer details into a mailing list. Keep identifiers that let you reconcile the result."],
    ["Find formatting problems", "Trim accidental surrounding spaces, locate empty addresses and inspect obvious typos. Use OpenRefine's facets or a spreadsheet filter to review groups. Do not guess corrections to a real person's address."],
    ["Reconcile duplicates and opt-outs", "Review conflicting rows by source and date. Preserve unsubscribe and hard-bounce exclusions. Normalize the domain part carefully; do not erase meaningful address characters or assume every provider treats aliases the same way."],
    ["Try a small import", "Map the columns in Venmail and inspect a handful of records before importing the rest. Confirm that names, special characters and status handling match your expectation. Send no broadcast until the count and exclusions reconcile."],
  ]),
  table("Reconciliation worksheet", ["Check", "Illustrative count", "What to do"], [
    ["Original rows", "240", "Save the raw exports"],
    ["Duplicate rows", "18", "Review status conflicts before merging"],
    ["Opt-outs or invalid rows", "22", "Keep an exclusion record"],
    ["Eligible recipients", "200", "Reconcile with the destination before sending"],
  ]),
  p("Those counts are an example, not a formula for every file: duplicate and exclusion groups may overlap. Your worksheet should explain each removal once. Save the cleaned file in UTF-8 and check non-English names after import."),
  p("OpenRefine is free software for cleaning data. Run it on a machine approved for your contact data and review its export before importing. It does not verify consent or guarantee that an address accepts mail.", "openrefine"),
  freeMail(),
  check("Import acceptance", ["Raw files are preserved", "Opt-outs survive the merge", "No guessed address corrections", "Counts reconcile", "Non-English names render correctly"]),
]),
guide(3, "write-newsletter-people-can-read-on-phone", "Write a newsletter people can read on a phone", "Use a text-first layout, clear links and a quick phone check before sending.", "Business owners editing their own campaign copy", ["mjml", "react-email"], "Get specialist accessibility and client testing for complex layouts or high-volume campaigns across many email clients.", [
  p("A phone-friendly newsletter is mostly an editing job. Make the point early, keep paragraphs short and give every link a clear purpose. Start with a layout that survives without images, then add only the visuals that help explain the message."),
  p("Readers may be on a slow connection, using larger text or checking mail between tasks. A poster saved as one large image makes all three situations harder. Put dates, prices, locations and the main action in actual text."),
  steps("Edit from top to bottom", [
    ["Make the subject specific", "Name the benefit or event honestly. Replace Big news inside with Saturday workshop: bring your first sketch. Keep the opening sentence useful even if a mailbox shows it as preview text."],
    ["Cut the introduction", "Remove throat-clearing such as we are delighted to announce. Say what changed and why the reader should care. Use one idea per paragraph, with a short heading when the topic changes."],
    ["Make the action descriptive", "Use link wording such as View workshop times instead of Click here. Keep the primary action easy to find and leave enough space around links for touch use. Avoid a row of tiny buttons."],
    ["Test the actual message", "Send a Venmail test to your own phone. Turn off images if your mail app allows it, enlarge text and try every link. Check that the unsubscribe and reply routes are still easy to find."],
  ]),
  table("A practical copy edit", ["Before", "After", "Why"], [
    ["An image containing the venue and time", "Text: Saturday, 10:00, 14 Market Road", "Essential details load without the image"],
    ["Click here", "See available workshop dates", "The destination is clear"],
    ["A 150-word opening paragraph", "Two sentences explaining the reader's benefit", "The main point appears sooner"],
  ]),
  p("For a reusable design, a developer can work with free MJML or React Email components and export HTML. Test that HTML in the sending workflow you actually use; a browser preview does not reproduce every mail app. If the editor does not support HTML import, use its native text and layout tools."),
  p("Finish with a human check: ask a colleague what the email asks them to do. If they name three competing actions, simplify it again. Venmail's basic broadcast is enough to practise this process without buying a separate design subscription."),
  freeMail(),
  check("Phone review", ["Essential details are text", "The first screen explains the purpose", "Links have meaningful labels", "Large text remains readable", "The footer works without images"]),
]),
guide(3, "measure-newsletter-results-without-paid-analytics", "Measure newsletter results without a paid analytics dashboard", "Track a clear outcome, a useful denominator and customer replies in a small spreadsheet.", "Small businesses deciding whether a newsletter is worth their time", ["gmail-senders", "venmail-api"], "Use a dedicated analytics setup when attribution spans several channels or you need experiments with statistically reliable comparisons.", [
  p("Choose the result you want before sending the newsletter. For a workshop, it may be completed bookings. For a consultant, it may be relevant replies. Opens alone cannot tell you whether an email helped a reader or produced useful work."),
  p("Email images can be blocked or loaded automatically, and security software may follow links. Treat opens and clicks as clues rather than proof that a person read or acted. Keep the actual business action in your measurement sheet."),
  steps("Build a small measurement habit", [
    ["Define one outcome", "Write an observable action: booking confirmed, quote requested or guide downloaded. Decide where it will be recorded. If the goal is a reply, make sure the reply address reaches someone who can count and answer it."],
    ["Record the audience and message", "Save the issue name, sending date, attempted recipient count and the audience rule. Use the reporting available in your Venmail account to note delivery failures. Do not assume missing data is zero."],
    ["Connect the action", "Use a dedicated landing-page link or a simple campaign label if your website already supports it. For replies, note the subject or issue. Avoid putting personal information in tracking URLs."],
    ["Compare like with like", "Review two issues sent to similar audiences with similar goals. If one went to new subscribers and another to long-time customers, describe that difference before judging the subject line."],
  ]),
  table("Example results sheet", ["Issue", "Attempted", "Confirmed bookings", "Useful replies", "Lesson"], [
    ["Workshop checklist", "120", "6", "9", "Readers asked about materials"],
    ["Materials explained", "118", "8", "7", "Answering the question helped; other factors may also matter"],
  ]),
  p("In the first example, six bookings out of 120 attempts is a five percent booking-per-attempt rate. Label that denominator. It is not a click-to-booking rate, and it does not prove the email caused every booking. The numbers are illustrative, not Venmail customer results."),
  p("A free spreadsheet is enough to spot recurring questions and decide what to improve. Spend the next issue answering one of those questions. Buy more analytics when a specific decision needs data the sheet cannot provide."),
  freeMail(),
  check("A useful report includes", ["One defined business action", "A named denominator", "Missing data marked unknown", "Audience differences explained", "One concrete change for the next issue"]),
]),
];
