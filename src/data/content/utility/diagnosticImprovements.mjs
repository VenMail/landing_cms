import { h, p, steps, table, code, check } from './shared.mjs';

export const diagnosticImprovements = {
  'free-email-deliverability-audit': [
    h('read-a-real-header', 'Read the receiver’s evidence before changing settings'),
    p('Venmail’s free Email Header Analyzer turns the Authentication-Results fields in a received message into a readable summary. No account is needed, and the header text stays in your browser. Use the tool linked below with one recent test message; do not paste a customer’s message body.'),
    steps('A ten-minute evidence check', [
      ['Collect a fresh message', 'Send a message you control through the same workflow that has the problem. Open the received copy and use Show original, View source or Message details. Record separately whether it landed in Inbox or Spam.'],
      ['Read each receiver entry', 'Paste the original headers into the analyzer. Several Authentication-Results fields can exist. Confirm which receiver belongs to your mailbox provider before relying on its result; a sender can insert a misleading header.'],
      ['Choose one investigation', 'If the trusted receiver reports an authentication failure, compare your sending provider’s exact setup values with DNS. If authentication passes but placement is poor, check recipient consent, complaints, list quality and content before changing authentication records.'],
      ['Keep a private summary', 'Download the tool’s status-only summary for your incident notes. It excludes addresses, domains, subjects and raw headers. Add any sensitive identifiers separately only when your support team actually needs them.'],
    ]),
    code('Synthetic example: authentication passes but placement is unknown', 'Authentication-Results: mx.example.net;\n spf=pass smtp.mailfrom=example.org;\n dkim=pass header.d=example.org;\n dmarc=pass header.from=example.org'),
    p('Expected tool output: SPF pass, DKIM pass and DMARC pass for one receiver entry. This example proves how to read the output, not that a real email reached an inbox. The tool does not perform a fresh DNS lookup or verify a signature.', 'authentication-results-rfc'),
    check('Your audit is useful when', ['You recorded the sending workflow and the recipient’s observed folder.', 'You identified the trusted receiving provider’s result, rather than choosing whichever header says pass.', 'You have one next action and will compare a fresh message after the change.']),
  ],
  'spf-dkim-dmarc-after-migration': [
    h('compare-received-tests', 'Compare received tests before and after migration'),
    p('Use the free Venmail Email Header Analyzer linked below to read a test sent through the new provider. A DNS record can look right while an application still sends through the old route. A received message shows what that receiver reported about that particular delivery.'),
    code('Synthetic migration failure: SPF passes for the wrong domain', 'Authentication-Results: mx.example.net;\n spf=pass smtp.mailfrom=old-provider.example;\n dkim=none;\n dmarc=fail header.from=shop.example'),
    table('What to do with this example', ['Observation', 'Meaning', 'Next check'], [
      ['SPF pass', 'The receiver reports that the envelope sender passed SPF. This alone does not authenticate the visible From domain.', 'Compare the envelope sender and the From domain in the full original-message view.'],
      ['DKIM none', 'No usable DKIM authentication result was reported as a pass.', 'Confirm that signing is enabled and the new provider’s selector record matches its instructions.'],
      ['DMARC fail', 'The receiver reports that DMARC did not pass for this message.', 'Check alignment and whether the app still uses an old mail route. Do not weaken DMARC merely to hide the symptom.'],
    ]),
    p('The example domains are reserved illustrations. The analyzer displays reported status words; use your provider’s message details to inspect the actual domains and confirm alignment. Do not paste this example into DNS.', 'authentication-results-rfc'),
    steps('Retest every sending route', [
      ['Test the mailbox', 'Send from a normal user mailbox on the new provider and inspect the received copy.'],
      ['Test the website', 'Trigger a controlled form or order notification and inspect that received copy too. A website may use different credentials and a different sender.'],
      ['Compare and retire carefully', 'Record the receiver’s results for each route. Remove an old authorization only after you have confirmed that no legitimate workflow still needs it.'],
    ]),
  ],
  'email-authentication-bounce-codes': [
    h('bounce-versus-header', 'Use the bounce and the received header for different questions'),
    p('A bounce describes a rejected delivery attempt. Authentication-Results belongs to a received message and may describe a different attempt or the bounce notification itself. Use the free Venmail Email Header Analyzer linked below for a received test; keep the full SMTP response as separate evidence.'),
    table('Synthetic troubleshooting examples', ['Evidence', 'What it can tell you', 'Practical next action'], [
      ['535 plus an authentication-credentials error', 'The SMTP login attempt was rejected. This is not a DMARC result.', 'Verify the sending application’s credentials and provider-required connection settings.'],
      ['550 plus a sender-domain authentication rejection', 'This receiving server rejected the attempt under its policy. The response text matters.', 'Check the domain and authentication requirement named in the response; retain the timestamp and a safe message reference.'],
      ['A received test reports dmarc=fail', 'That receiver reports a DMARC failure for this received message.', 'Confirm it is the same sender route as the failed attempt, then investigate alignment and signing.'],
      ['A received test reports temperror', 'A temporary authentication evaluation problem was reported.', 'Retest later and consult the provider if it persists instead of repeatedly editing DNS.'],
    ]),
    p('Response wording and enhanced status codes vary by provider. Do not diagnose from the three-digit number alone. The analyzer does not parse a bounce body or promise to identify the cause of a rejected message.', 'authentication-results-rfc', 'gmail-senders'),
    check('Before sending your support note', ['Separate the original rejection from the later received test.', 'Include the exact response text in your private incident record.', 'Use the tool’s private summary for authentication status; share full headers only through an appropriate support channel.', 'After correcting one cause, send a new controlled test and record the outcome.']),
  ],
};

export const diagnosticCta = {
  label: 'Open the free email header analyzer', href: '/tools/email-header-analyzer',
  description: 'Read a received message’s reported SPF, DKIM and DMARC results. No account or upload required.',
};
