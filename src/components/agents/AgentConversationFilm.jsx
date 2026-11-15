import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { DEMO_SCENES, SCENE_FRAMES, getAgentDemoFrame } from './agentDemoTimeline.mjs';
import { ArrowUp, LockKeyhole, PanelLeft, Plus, Search, SquarePen, MoreHorizontal, Share2 } from 'lucide-react';

const fade = (frame, start, duration = 9) => interpolate(frame, [start, start + duration], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
const ink = '#252422';
const muted = '#77736f';

function ChatGPTFilm({ scene, prior, local, typed }) {
  return <AbsoluteFill style={{ background: '#fff', color: '#0d0d0d', fontFamily: 'system-ui, sans-serif' }}>
    <div style={{ height: 56, background: '#f4f4f4', display: 'flex', alignItems: 'center', gap: 10, padding: '0 20px', borderBottom: '1px solid #e6e6e6' }}>
      <span style={{ color: '#d27a6f', fontSize: 19 }}>●</span><span style={{ color: '#d5ad68', fontSize: 19 }}>●</span><span style={{ color: '#87ad88', fontSize: 19 }}>●</span>
      <div style={{ margin: '0 auto', width: 300, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, borderRadius: 9, background: '#fff', padding: '6px 12px', fontSize: 17, color: '#616161' }}><LockKeyhole size={15}/>chatgpt.com</div>
    </div>
    <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
      <div style={{ width: 65, background: '#f9f9f9', borderRight: '1px solid #ececec', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, paddingTop: 20, color: '#4c4c4c' }}>
        <PanelLeft size={24}/><SquarePen size={24}/><Search size={24}/>
      </div>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 62, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 22px', fontSize: 22, fontWeight: 650 }}><span>ChatGPT <span style={{ fontSize: 15, color: '#777' }}>⌄</span></span><span style={{ display: 'flex', gap: 15, color: '#666' }}><Share2 size={21}/><MoreHorizontal size={23}/></span></div>
        <div style={{ flex: 1, overflow: 'hidden', padding: '16px 28px 0' }}>
          {prior && <div style={{ color: '#a0a0a0', fontSize: 18, lineHeight: 1.4, marginBottom: 20, borderBottom: '1px solid #eee', paddingBottom: 12 }}>Earlier · {prior.user}</div>}
          <div style={{ minHeight: 102, display: 'flex', justifyContent: 'flex-end' }}><div style={{ opacity: fade(local, 52), maxWidth: '90%', alignSelf: 'flex-start', borderRadius: 24, padding: '15px 20px', background: '#f4f4f4', fontSize: 24, lineHeight: 1.45 }}>{scene.user}</div></div>
          <div style={{ opacity: fade(local, 65), marginTop: 12, fontSize: 20, color: '#737373', display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#f15a40', fontWeight: 700 }}>●</span> Venmail <span style={{ fontSize: 17 }}>· {local < 105 ? 'Searching…' : 'Connected app'}</span></div>
          <div style={{ opacity: fade(local, 105), marginTop: 20, fontSize: 25, lineHeight: 1.55 }}>{scene.result}</div>
          <div style={{ opacity: fade(local, 130), marginTop: 20, borderLeft: '3px solid #d7d7d7', paddingLeft: 17, fontSize: 22, lineHeight: 1.5 }}><div style={{ fontWeight: 650 }}>{scene.subject}</div><div style={{ color: '#4c4c4c', marginTop: 8 }}>{scene.body}</div><div style={{ fontSize: 18, color: '#767676', marginTop: 12 }}>{scene.status}</div></div>
        </div>
        <div style={{ padding: '12px 26px 24px' }}><div style={{ minHeight: 68, border: '1px solid #dedede', borderRadius: 26, display: 'flex', alignItems: 'center', padding: '0 14px', gap: 14, boxShadow: '0 2px 8px rgba(0,0,0,.06)' }}><Plus size={24} color="#555"/><span style={{ flex: 1, fontSize: 22, color: local < 52 ? '#111' : '#8a8a8a', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{local < 52 ? typed + '|' : 'Ask anything'}</span><span style={{ width: 38, height: 38, background: '#151515', borderRadius: '50%', display: 'grid', placeItems: 'center', color: '#fff' }}><ArrowUp size={23}/></span></div></div>
      </div>
    </div>
  </AbsoluteFill>;
}

export default function AgentConversationFilm({ scenario = 'campaign', provider = 'Claude' }) {
  const frame = useCurrentFrame();
  const scene = getAgentDemoFrame(scenario, frame);
  const index = Math.min(DEMO_SCENES[scenario].length - 1, Math.floor(frame / SCENE_FRAMES));
  const local = frame % SCENE_FRAMES;
  const prior = index > 0 ? DEMO_SCENES[scenario][index - 1] : null;
  const typed = scene.user.slice(0, Math.floor(interpolate(local, [0, 52], [0, scene.user.length], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })));
  if (provider === 'ChatGPT') return <ChatGPTFilm scene={scene} prior={prior} local={local} typed={typed} />;
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
