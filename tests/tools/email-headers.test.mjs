import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeHeaders, safeReport, SAMPLE_HEADERS } from '../../src/utils/emailHeaders.mjs';
test('sample exposes independent authentication results without claiming verification', () => {
  const r = analyzeHeaders(SAMPLE_HEADERS); assert.deepEqual(r.receivers[0].results, { spf: ['pass'], dkim: ['pass'], dmarc: ['pass'] }); assert.equal(r.receivedCount, 2);
});
test('unfolds headers, ignores case, and excludes message body', () => {
  const r = analyzeHeaders('From: private@example.org\r\nAUTHENTICATION-RESULTS: mx.example;\r\n\tspf=fail; dkim=none\r\n\r\nAuthentication-Results: fake; dmarc=pass');
  assert.equal(r.receivers.length, 1); assert.deepEqual(r.receivers[0].results, { spf: ['fail'], dkim: ['none'], dmarc: [] });
});
test('keeps conflicting receiver headers and duplicate method results distinct', () => {
  const r = analyzeHeaders('Authentication-Results: first; spf=pass; dkim=pass; dkim=fail\nAuthentication-Results: second; spf=fail');
  assert.equal(r.receivers.length, 2); assert.deepEqual(r.receivers[0].results.dkim, ['pass', 'fail']); assert.deepEqual(r.receivers[1].results.spf, ['fail']);
});
test('comments and quoted strings cannot impersonate authentication results', () => {
  const r = analyzeHeaders('Authentication-Results: mx.example (spoof; spf=pass); dkim=fail reason="oops; dmarc=pass" (nested (note; spf=pass))');
  assert.deepEqual(r.receivers[0].results, { spf: [], dkim: ['fail'], dmarc: [] });
});
test('unknown and missing statuses are not promoted to pass', () => {
  assert.deepEqual(analyzeHeaders('Authentication-Results: mx.example; spf=passenger').receivers[0].results.spf, ['unrecognized']);
  assert.equal(analyzeHeaders('From: name@example.org').receivers.length, 0);
});
test('invalid input is rejected with readable errors and input size is bounded', () => {
  for (const value of ['', 'hello world', 'x'.repeat(262145)]) assert.throws(() => analyzeHeaders(value), /Paste|header|large/i);
});
test('shareable report includes only fixed labels, counts and statuses, never input identifiers', () => {
  const r = analyzeHeaders('From: secret@example.org\nAuthentication-Results: secret.receiver.example; spf=fail smtp.mailfrom=secret@example.org\nSubject: confidential order');
  const report = safeReport(r); assert.match(report, /SPF: fail/); assert.doesNotMatch(report, /secret|confidential|example.org/);
});
