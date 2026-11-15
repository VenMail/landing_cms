import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { DEMO_SCENES, SCENE_FRAMES, getAgentDemoFrame } from './agentDemoTimeline.mjs';

const fade = (frame, start, duration = 9) => interpolate(frame, [start, start + duration], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
const ink = '#252422';
const muted = '#77736f';

export default function AgentConversationFilm({ scenario = 'campaign', provider = 'Claude' }) {
  const frame = useCurrentFrame();
  const scene = getAgentDemoFrame(scenario, frame);
  const index = Math.min(DEMO_SCENES[scenario].length - 1, Math.floor(frame / SCENE_FRAMES));
  const local = frame % SCENE_FRAMES;
  const prior = index > 0 ? DEMO_SCENES[scenario][index - 1] : null;
  const typed = scene.user.slice(0, Math.floor(interpolate(local, [0, 52], [0, scene.user.length], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })));
  const assistant = provider === 'Claude' ? '#d27857' : '#202b27';
  return <AbsoluteFill style={{ background: '#f6f5f2', color: ink, fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', fontSize: 24 }}>
    <div style={{ height: 64, padding: '0 27px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e8e5df', background: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 13, fontWeight: 650 }}><span style={{ fontSize: 26, color: '#8a8681' }}>☰</span><span>{provider}</span><span style={{ fontWeight: 400, color: '#a5a19b' }}>⌄</span></div>
      <span style={{ fontSize: 21, color: '#8f8b85' }}>↗ &nbsp; ···</span>
    </div>
    <div style={{ flex: 1, overflow: 'hidden', position: 'relative', background: '#fff' }}>
      <div style={{ maxWidth: 660, margin: '0 auto', padding: '28px 27px 20px' }}>
        {prior && <div style={{ color: '#9d9891', fontSize: 20, borderBottom: '1px solid #f0ede8', paddingBottom: 15, marginBottom: 22, lineHeight: 1.5 }}><span style={{ color: '#a49d96' }}>Earlier · </span>{prior.user}</div>}
        <div style={{ display: 'flex', justifyContent: 'flex-end', minHeight: 108 }}>
          <div style={{ opacity: fade(local, 52), maxWidth: '88%', background: '#f0eeeb', borderRadius: '24px 24px 5px 24px', padding: '17px 23px', fontSize: 26, lineHeight: 1.5, alignSelf: 'flex-start' }}>{scene.user}</div>
        </div>
        <div style={{ opacity: fade(local, 61), margin: '15px 0 0 4px', display: 'flex', gap: 13 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: assistant, color: '#fff', display: 'grid', placeItems: 'center', fontSize: 24, flexShrink: 0 }}>{provider === 'Claude' ? '✳' : '✦'}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px', borderRadius: 12, background: '#f7f6f3', border: '1px solid #eeebe6', fontSize: 21, color: '#6c6964' }}><span style={{ display: 'grid', placeItems: 'center', background: '#fc5d3f', color: 'white', borderRadius: 7, width: 28, height: 28, fontSize: 20 }}>V</span><span style={{ flex: 1 }}>{scene.tool}</span><span style={{ color: '#51936b' }}>{local < 105 ? '•••' : '✓'}</span></div>
            <div style={{ opacity: fade(local, 105), paddingTop: 18, lineHeight: 1.55, fontSize: 26 }}>{scene.result}</div>
            <div style={{ opacity: fade(local, 129), marginTop: 18, border: '1px solid #e8e5df', borderRadius: 15, padding: '18px 20px', background: '#fff', boxShadow: '0 4px 16px rgba(31, 26, 20, .04)' }}>
              <div style={{ fontSize: 18, color: muted, textTransform: 'uppercase', letterSpacing: '.07em' }}>{scene.detail}</div>
              <div style={{ fontWeight: 650, fontSize: 21, marginTop: 8 }}>{scene.subject}</div>
              <div style={{ color: '#5d5a56', fontSize: 23, lineHeight: 1.55, marginTop: 10 }}>{scene.body}</div>
              <div style={{ fontSize: 19, color: '#438760', fontWeight: 600, marginTop: 14 }}>✓ &nbsp;{scene.status}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ background: '#fff', padding: '14px 52px 22px' }}><div style={{ height: 68, border: '1px solid #ddd9d2', borderRadius: 21, display: 'flex', alignItems: 'center', padding: '0 17px', gap: 14, color: '#99948d', boxShadow: '0 4px 16px rgba(0,0,0,.04)' }}><span style={{ fontSize: 27 }}>＋</span><span style={{ flex: 1, fontSize: 23, color: local < 52 ? ink : '#99948d', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{local < 52 ? typed + '|' : `Message ${provider}…`}</span><span style={{ background: '#eeeae4', borderRadius: 12, padding: '3px 11px', color: '#a39c92' }}>↑</span></div></div>
  </AbsoluteFill>;
}
