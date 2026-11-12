import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = path => readFile(new URL(path, import.meta.url), 'utf8');

test('homepage makes team inboxes discoverable and offers an access inquiry', async () => {
  const [home, header, story] = await Promise.all([
    read('../../src/pages/index.jsx'),
    read('../../src/components/home/MailFirstHeader.jsx'),
    read('../../src/components/home/SharedInboxStory.jsx'),
  ]);
  assert.match(home, /<SharedInboxStory\s*\/>/);
  assert.ok(home.indexOf('<SharedInboxStory') < home.indexOf('professional-email-title'));
  assert.match(header, /label: 'Shared inbox', href: '\/#shared-inbox'/);
  assert.match(story, /id="shared-inbox"/);
  assert.match(story, /Assign a teammate/);
  assert.match(story, /Discuss with your team/);
  assert.match(story, /Reply to customers/);
  assert.match(story, /Shared inbox access may be limited/);
  assert.match(story, /getContactMailtoHref/);
  assert.match(story, /Ask about shared inbox access/);
  assert.doesNotMatch(story, /automatically assign|never miss|sentiment|reads? emotions|reply from a shared address/i);
  assert.match(story, /<span>Example<\/span>/);
  assert.match(story, /Delivery question/);
  assert.match(story, /Assigned to/);
  assert.match(story, /Team discussion/);
  assert.doesNotMatch(story, /<img|<Image|screenshot/i);
});
