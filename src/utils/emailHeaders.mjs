export const MAX_HEADER_LENGTH = 262144;
export const SAMPLE_HEADERS = `From: Example shop <orders@example.org>
To: Sample reader <reader@example.net>
Subject: Synthetic order confirmation (not a real delivery)
Authentication-Results: mx.example.net;
 spf=pass smtp.mailfrom=example.org;
 dkim=pass header.d=example.org;
 dmarc=pass header.from=example.org
Received: from relay.example.org by mx.example.net; Fri, 04 Sep 2026 10:00:02 +0000
Received: from shop.example.org by relay.example.org; Fri, 04 Sep 2026 10:00:00 +0000`;

const METHODS = ['spf', 'dkim', 'dmarc'];
const STATUS = new Set(['pass', 'fail', 'softfail', 'neutral', 'none', 'temperror', 'permerror', 'policy']);

// Semicolons inside nested comments or quoted strings are not result separators.
function withoutCommentsOrQuotes(value) {
  let depth = 0, quoted = false, escaped = false, output = '';
  for (const char of value) {
    if (escaped) { escaped = false; output += ' '; continue; }
    if (char === '\\' && (depth || quoted)) { escaped = true; output += ' '; continue; }
    if (!depth && char === '"') { quoted = !quoted; output += ' '; continue; }
    if (!quoted && char === '(') { depth++; output += ' '; continue; }
    if (!quoted && depth && char === ')') { depth--; output += ' '; continue; }
    output += depth || quoted ? ' ' : char;
  }
  return depth || quoted || escaped ? null : output;
}

export function analyzeHeaders(input) {
  if (typeof input !== 'string' || !input.trim()) throw new Error('Paste the original email headers, or try the sample.');
  if (input.length > MAX_HEADER_LENGTH) throw new Error('This input is too large. Paste only the headers (up to 256 Ki characters), not the message body.');
  const lines = input.trimStart().replace(/\r\n?/g, '\n').split('\n');
  const fields = [];
  let malformed = 0;
  for (const line of lines) {
    if (line === '') break; // Never interpret a message body as headers.
    if (/^[ \t]/.test(line)) {
      if (fields.length) fields[fields.length - 1].value += ` ${line.trim()}`;
      else malformed++;
      continue;
    }
    const match = line.match(/^([!-9;-~]+):[ \t]*(.*)$/);
    if (match) fields.push({ name: match[1].toLowerCase(), value: match[2] });
    else { malformed++; break; }
  }
  if (!fields.length) throw new Error('No email header fields found. Open the original message and copy the lines above its body.');
  const receivers = fields.filter(field => field.name === 'authentication-results').map(field => {
    const clean = withoutCommentsOrQuotes(field.value);
    const parts = clean?.split(';') ?? [];
    const results = Object.fromEntries(METHODS.map(method => [method, []]));
    for (const part of parts.slice(1)) {
      const match = part.trim().match(/^(spf|dkim|dmarc)(?:\/\d+)?\s*=\s*([a-z][a-z0-9_-]*)(?=\s|$)/i);
      if (!match) continue;
      const status = match[2].toLowerCase();
      results[match[1].toLowerCase()].push(STATUS.has(status) ? status : 'unrecognized');
    }
    return { receiver: parts[0]?.trim().slice(0, 200) || 'Unrecognized receiver', results, malformed: clean === null || parts.length < 2 };
  });
  return { receivers, receivedCount: fields.filter(field => field.name === 'received').length, fieldCount: fields.length, malformed };
}

export function safeReport(result) {
  return [
    'Venmail email header summary — observations, not independent verification',
    `Authentication-Results fields: ${result.receivers.length}`,
    `Received fields: ${result.receivedCount}`,
    ...result.receivers.flatMap((receiver, i) => [
      `Receiver entry ${i + 1}${receiver.malformed ? ' (incomplete format)' : ''}`,
      ...METHODS.map(method => `${method.toUpperCase()}: ${receiver.results[method].join(', ') || 'not reported'}`),
    ]),
    'No addresses, domains, subject, message body or original headers included.',
    'Confirm the receiver with your mailbox provider. A pass does not prove inbox placement.',
    'https://venmail.io/tools/email-header-analyzer',
  ].join('\n');
}
