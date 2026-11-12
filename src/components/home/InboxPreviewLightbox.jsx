import { useEffect, useRef, useState } from 'react';
import styles from './ProductPreview.module.css';

export default function InboxPreviewLightbox() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [pageVisible, setPageVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (typeof window.matchMedia !== 'function' || typeof IntersectionObserver !== 'function') return undefined;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(motionQuery.matches);
    const updateVisibility = () => setPageVisible(document.visibilityState === 'visible');
    updateMotion();
    updateVisibility();
    motionQuery.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    setReady(true);
    return () => {
      observer.disconnect();
      motionQuery.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  const wantsMotion = choice ?? !reducedMotion;
  const playing = wantsMotion && inView && pageVisible && !failed;
  const desktopSrc = failed ? '/home/shared-inbox-desktop.png' : playing ? '/home/shared-inbox-motion-desktop.gif' : '/home/shared-inbox-motion-desktop-poster.png';
  const mobileSrc = failed ? '/home/shared-inbox-mobile.png' : playing ? '/home/shared-inbox-motion-mobile.gif' : '/home/shared-inbox-motion-mobile-poster.png';

  return (
    <figure ref={ref} className={`mx-auto mt-14 max-w-5xl overflow-hidden rounded-[1.4rem] border border-[#e8ddd6] bg-[#f6ece5] p-3 text-left shadow-[0_24px_70px_rgba(63,38,25,.12)] sm:p-6 md:mt-16 ${styles.preview} ${inView ? styles.visible : ''}`}>
      <picture>
        <source media="(max-width: 639px)" srcSet={mobileSrc} />
        <img src={desktopSrc} width="960" height="414" loading="lazy" decoding="async" onError={() => setFailed(true)} alt="Sample shared inbox: searching conversations for an invoice" className="block aspect-[350/570] w-full rounded-xl border border-[#e9e1dd] object-cover object-top sm:aspect-[1440/620]" />
      </picture>
      <figcaption className="flex flex-wrap items-center justify-between gap-2 px-1 pt-3 text-xs leading-5 text-[#70635b]">
        <span>Shared inbox · Sample data</span>
        <div className="flex flex-wrap items-center gap-3">
          <span>Access may be limited.</span>
          {ready && !failed && <button type="button" className="min-h-11 rounded px-2 font-semibold text-[#8a3515] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-orange-700" onClick={() => setChoice(!wantsMotion)}>{wantsMotion ? 'Pause demonstration' : 'Play demonstration'}</button>}
        </div>
      </figcaption>
    </figure>
  );
}
