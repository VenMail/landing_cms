export const SCENE_FRAMES = 270;
export const DEMO_SCENES = {
  campaign: [
    { title: 'Draft campaign', user: 'Draft an introduction for my Toronto retailers contact group. Invite them to a short call.', tool: 'Venmail · Search contact groups', detail: 'Toronto retailers · 100 contacts', result: 'I found 100 contacts. Here’s a draft for your review.', subject: 'A new partnership for your shop', body: 'Hi there, I’d love to learn more about your shop and explore how we could work together. Would you be open to a short call next week?', status: 'Ready for review · 100 contacts' },
    { title: 'Send', user: 'Yes, send it. Draft a follow-up for anyone with two opens.', tool: 'Venmail · Send campaign', detail: '100 recipients · Sending now', result: 'The campaign is queued. Would you like this follow-up to run for 30 days after 2 recorded opens?', subject: 'A quick conversation?', body: 'Hi there, would a 15-minute call next week be useful? I’d be glad to share a few ideas for your shop.', status: 'Queued · Follow-up ready for review' },
    { title: 'Follow up', user: 'Yes, use that follow-up for 30 days.', tool: 'Venmail · Set follow-up rule', detail: '2 recorded opens · 30 days', result: 'The follow-up is active for eligible contacts after 2 recorded opens.', subject: 'Follow-up rule', body: 'A quick conversation? · 30 days', status: 'Follow-up active' },
    { title: 'Results', user: 'How is the campaign doing?', tool: 'Venmail · Check campaign activity', detail: 'Toronto retailers', result: 'Here’s the latest campaign activity.', subject: 'Toronto retailers', body: '100 sent  ·  24 with recorded opens  ·  6 reached the follow-up threshold', status: 'Follow-up active' },
  ],
  mail: [
    { title: 'Find a thread', user: 'What did Maya say about the partnership six days ago?', tool: 'Venmail · Search your mail', detail: 'Maya Chen · Partnership', result: 'Maya asked for a revised proposal and suggested a call next week.', subject: 'Partnership proposal', body: '“Could you share the updated proposal? A call next week would be great.”', status: 'Maya Chen · 6 days ago' },
    { title: 'Review context', user: 'What should I follow up on?', tool: 'Venmail · Read conversation', detail: 'Maya Chen · Partnership proposal', result: 'The revised proposal is still outstanding. A short reply with the proposal and a meeting suggestion would move it forward.', subject: 'Next step', body: 'Share the revised proposal and suggest a time to talk.', status: 'Based on your conversation' },
    { title: 'Draft a reply', user: 'Draft a short reply suggesting Tuesday at 2 pm.', tool: 'Venmail · Read thread', detail: 'Maya Chen · Partnership proposal', result: 'Here’s a reply for your review.', subject: 'Re: Partnership proposal', body: 'Hi Maya, I’ll share the revised proposal shortly. Would Tuesday at 2 pm work for a quick call?', status: 'Draft for review' },
    { title: 'Find details', user: 'What else did Maya mention about the proposal?', tool: 'Venmail · Read conversation', detail: 'Maya Chen · Partnership proposal', result: 'Maya asked to see the updated pricing and timeline before the call.', subject: 'Partnership proposal', body: 'Updated pricing and delivery timeline · requested before the meeting', status: 'Maya Chen · 6 days ago' },
  ],
};
export function getAgentDemoFrame(scenario, frame) {
  const scenes = DEMO_SCENES[scenario] || DEMO_SCENES.mail;
  return scenes[Math.max(0, Math.min(scenes.length - 1, Math.floor(frame / SCENE_FRAMES)))];
}
