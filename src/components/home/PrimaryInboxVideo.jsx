import { useEffect, useRef, useState } from 'react';

export default function PrimaryInboxVideo({ caption }) {
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState(null);
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);
  const [audioUnavailable, setAudioUnavailable] = useState(false);

  useEffect(() => {
    if (typeof window.matchMedia !== 'function' || typeof IntersectionObserver !== 'function') return undefined;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 639px)');
    const updateMotion = () => setReducedMotion(motionQuery.matches);
    const updateMobile = () => setMobile(mobileQuery.matches);
    const updateVisibility = () => setVisible(document.visibilityState === 'visible');
    updateMotion(); updateMobile(); updateVisibility();
    motionQuery.addEventListener('change', updateMotion);
    mobileQuery.addEventListener('change', updateMobile);
    document.addEventListener('visibilitychange', updateVisibility);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.05 });
    if (frameRef.current) observer.observe(frameRef.current);
    setReady(true);
    return () => {
      observer.disconnect();
      motionQuery.removeEventListener('change', updateMotion);
      mobileQuery.removeEventListener('change', updateMobile);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  const wantsMotion = choice ?? !reducedMotion;
  const playing = wantsMotion && inView && visible && !failed;
  useEffect(() => {
    if (!playing) { setMuted(true); return; }
    const video = videoRef.current;
    if (!video) return;
    try {
      const play = video.play();
      if (play && typeof play.catch === 'function') play.catch(() => {
        if (videoRef.current === video) { setMuted(true); setChoice(false); }
      });
    } catch {
      if (videoRef.current === video) { setMuted(true); setChoice(false); }
    }
  }, [playing, mobile]);

  const enableSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      video.muted = false;
      video.volume = 0.4;
      await video.play();
      if (videoRef.current === video) { setMuted(false); setAudioUnavailable(false); }
    } catch {
      video.muted = true;
      if (videoRef.current === video) { setMuted(true); setAudioUnavailable(true); }
    }
  };

  const muteSound = () => {
    if (videoRef.current) videoRef.current.muted = true;
    setMuted(true);
    setAudioUnavailable(false);
  };
  const desktopPoster = '/home/primary-inbox-motion-desktop-poster.png';
  const mobilePoster = '/home/primary-inbox-motion-mobile-poster.png';
  return (
    <figure ref={frameRef} className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[1.4rem] border border-[#e8ddd6] bg-[#f6ece5] p-3 text-left shadow-[0_24px_70px_rgba(63,38,25,.12)] sm:p-6 md:mt-16">
      {playing ? (
        <video ref={videoRef} key={mobile ? 'mobile' : 'desktop'} src={mobile ? '/home/primary-inbox-demo-mobile.mp4' : '/home/primary-inbox-demo-desktop.mp4'} poster={mobile ? mobilePoster : desktopPoster} muted={muted} autoPlay playsInline loop preload="metadata" onError={() => { setMuted(true); setFailed(true); }} aria-label="Sample primary inbox demonstration" className="block aspect-[390/844] w-full rounded-xl border border-[#e9e1dd] object-cover object-top sm:aspect-[5/3]" />
      ) : (
        <picture>
          <source media="(max-width: 639px)" srcSet={mobilePoster} />
          <img src={desktopPoster} width="960" height="576" loading="lazy" decoding="async" alt="Sample primary inbox with briefing and message composition" className="block aspect-[390/844] w-full rounded-xl border border-[#e9e1dd] object-cover object-top sm:aspect-[5/3]" />
        </picture>
      )}
      <figcaption className="flex flex-wrap items-center justify-between gap-2 px-1 pt-3 text-xs leading-5 text-[#70635b]">
        <span>{caption}</span>
        <div className="flex flex-wrap items-center gap-3">
          {audioUnavailable && <span role="status">Sound unavailable</span>}
          {ready && !failed && <button type="button" aria-label={`${wantsMotion ? 'Stop' : 'Play'} primary inbox demonstration`} className="min-h-11 rounded px-2 font-semibold text-[#8a3515] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-orange-700" onClick={() => { setMuted(true); setChoice(!wantsMotion); }}>{wantsMotion ? 'Stop demonstration' : 'Play demonstration'}</button>}
          {playing && <button type="button" aria-label={muted ? 'Turn sound on for primary inbox demonstration' : 'Mute primary inbox demonstration'} className="min-h-11 rounded px-2 font-semibold text-[#8a3515] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-orange-700" onClick={() => { if (muted) void enableSound(); else muteSound(); }}>{muted ? 'Sound on' : 'Mute'}</button>}
        </div>
      </figcaption>
    </figure>
  );
}
