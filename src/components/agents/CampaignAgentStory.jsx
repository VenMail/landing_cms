import { Player } from '@remotion/player';
import { useEffect, useRef, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import AgentConversationFilm from './AgentConversationFilm';
import { DEMO_SCENES, SCENE_FRAMES } from './agentDemoTimeline.mjs';


export default function CampaignAgentStory({ scenario = 'campaign', provider = 'Claude' }) {
  const player = useRef(null);
  const root = useRef(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [stage, setStage] = useState(0);
  const scenes = DEMO_SCENES[scenario];

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(media.matches);
    const onChange = event => setReduceMotion(event.matches);
    media.addEventListener('change', onChange);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    if (root.current) observer.observe(root.current);
    return () => { observer.disconnect(); media.removeEventListener('change', onChange); };
  }, []);

  useEffect(() => {
    if (!player.current || reduceMotion === null) return;
    if (reduceMotion) { player.current.pause(); player.current.seekTo(SCENE_FRAMES - 1); setPlaying(false); }
    else if (visible && !userPaused.current) { player.current.play(); setPlaying(true); }
    else { player.current.pause(); setPlaying(false); }
  }, [visible, reduceMotion, scenario, provider]);

  useEffect(() => {
    const current = player.current;
    if (!current) return undefined;
    const onFrame = event => setStage(Math.min(scenes.length - 1, Math.floor(event.detail.frame / SCENE_FRAMES)));
    const onEnd = () => setPlaying(false);
    current.addEventListener('frameupdate', onFrame);
    current.addEventListener('ended', onEnd);
    return () => { current.removeEventListener('frameupdate', onFrame); current.removeEventListener('ended', onEnd); };
  }, [scenario, scenes.length]);

  const chooseStage = index => {
    userPaused.current = true;
    player.current?.pause();
    player.current?.seekTo(index * SCENE_FRAMES + SCENE_FRAMES - 1);
    setStage(index);
    setPlaying(false);
  };
  return <div ref={root} className="bg-[#f6f5f2]">
    <Player ref={player} component={AgentConversationFilm} inputProps={{ scenario, provider }} durationInFrames={SCENE_FRAMES * scenes.length} compositionWidth={680} compositionHeight={1000} fps={30} style={{ width: '100%', aspectRatio: '680 / 1000' }} controls={false} clickToPlay={false} showVolumeControls={false} />
    <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#e8e5df] bg-white px-3 py-3 sm:px-4">
      <div className="flex flex-wrap gap-1" aria-label="Conversation chapters">{scenes.map((scene, index) => <button type="button" key={scene.title} onClick={() => chooseStage(index)} aria-pressed={stage === index} className={`rounded-full px-2.5 py-1.5 text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 ${stage === index ? 'bg-[#242424] text-white' : 'text-[#625e59] hover:bg-[#f3f1ee]'}`}>{scene.title}</button>)}</div>
      <div className="flex items-center gap-1 text-[#625e59]">
        <button type="button" aria-label="Replay conversation" onClick={() => { userPaused.current = false; player.current?.seekTo(0); player.current?.play(); setStage(0); setPlaying(true); }} className="rounded-md p-2 hover:bg-[#f3f1ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-700"><RotateCcw className="h-4 w-4" /></button>
        <button type="button" onClick={() => { userPaused.current = playing; if (playing) player.current?.pause(); else player.current?.play(); setPlaying(!playing); }} className="flex items-center gap-1 rounded-md px-2 py-2 text-xs font-semibold hover:bg-[#f3f1ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-700">{playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}{playing ? 'Pause' : 'Play'}</button>
      </div>
    </div>
    {scenario === 'campaign' && <p className="bg-white px-4 pb-3 text-xs text-[#68645f]">Recorded opens can include automated activity and do not prove a message was read.</p>}
  </div>;
}
