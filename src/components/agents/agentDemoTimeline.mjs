export const SCENE_FRAMES = 195;
export const DEMO_SCENES = {
  campaign: [
    { title: 'Draft campaign', user: 'Draft an introduction for my Toronto retailers contact group. Invite them to a short call.', tool: 'Venmail · Search contact groups', detail: 'Toronto retailers · 100 contacts', result: 'I found 100 contacts. Here’s a draft for your review.', subject: 'A new partnership for your shop', body: 'Hi there, I’d love to learn more about your shop and explore how we could work together. Would you be open to a short call next week?', status: 'Ready for review · 100 contacts' },
    { title: 'Send', user: 'Yes, send it. Draft a follow-up for anyone with two opens.', tool: 'Venmail · Send campaign', detail: '100 recipients · Sending now', result: 'The campaign is queued. Would you like this follow-up to run for 30 days after 2 recorded opens?', subject: 'A quick conversation?', body: 'Hi there, would a 15-minute call next week be useful? I’d be glad to share a few ideas for your shop.', status: 'Queued · Follow-up ready for review' },
    { title: 'Follow up', user: 'Yes, use that follow-up for 30 days.', tool: 'Venmail · Set follow-up rule', detail: '2 recorded opens · 30 days', result: 'The follow-up is active for eligible contacts after 2 recorded opens.', subject: 'Follow-up rule', body: 'A quick conversation? · 30 days', status: 'Follow-up active' },
    { title: 'Results', user: 'How is the campaign doing?', tool: 'Venmail · Check campaign activity', detail: 'Toronto retailers', result: 'Here’s the latest campaign activity.', subject: 'Toronto retailers', body: '100 sent  ·  24 with recorded opens  ·  6 reached the follow-up threshold', status: 'Follow-up active' },
  ],
  mail: [
    { title: 'Ask', user: 'What did Maya say about the quote last week?', tool: 'Venmail · Finding your email', detail: 'Maya Chen · 6 days ago', result: 'She liked the quote and asked if you could start next month.', subject: 'Your quote', body: '“This looks great! Could you start next month?”', status: 'From Maya' },
    { title: 'Catch up', user: 'Did I reply to her?', tool: 'Venmail · Checking the conversation', detail: 'Your last message', result: 'Not yet. The last message in this conversation is Maya’s reply.', subject: 'Your quote', body: 'Maya is waiting to hear whether you can start next month.', status: 'From your conversation' },
    { title: 'Draft', user: 'Draft a short reply saying yes.', tool: 'Venmail · Preparing a reply', detail: 'Reply to Maya', result: 'Here’s a reply to review:', subject: 'Re: Your quote', body: 'Hi Maya, yes, we can start next month! I’ll send over the next steps shortly.', status: 'Draft ready' },
    { title: 'Refine', user: 'Make it a little warmer.', tool: 'Venmail · Updating the draft', detail: 'Reply to Maya', result: 'How about this?', subject: 'Re: Your quote', body: 'Hi Maya, that’s wonderful to hear! We’d love to get started next month. I’ll be in touch with the next steps shortly.', status: 'Ready to review' },
  ],
};
export function getAgentDemoFrame(scenario, frame) {
  const scenes = DEMO_SCENES[scenario] || DEMO_SCENES.mail;
  return scenes[Math.max(0, Math.min(scenes.length - 1, Math.floor(frame / SCENE_FRAMES)))];
}
