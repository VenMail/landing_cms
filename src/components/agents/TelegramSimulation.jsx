import { useEffect, useRef, useState } from 'react';
import { BatteryFull, ChevronLeft, Paperclip, Send, Signal, Smile, MoreHorizontal, Wifi } from 'lucide-react';
import styles from './TelegramSimulation.module.css';

export default function TelegramSimulation() {
  const [motion, setMotion] = useState(false);
  const [run, setRun] = useState(0);
  const [inView, setInView] = useState(false);
  const figureRef = useRef(null);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotion(!query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (typeof IntersectionObserver !== 'function') return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (figureRef.current) observer.observe(figureRef.current);
    return () => observer.disconnect();
  }, []);
  return <figure ref={figureRef} className={styles.figure}>
    <div className={styles.phone}>
      <div className={styles.screen}>
        <div className={styles.status} aria-hidden="true"><span>9:41</span><span className={styles.statusIcons}><Signal size={12}/><Wifi size={12}/><BatteryFull size={15}/></span></div>
        <div className={styles.header}>
          <ChevronLeft aria-hidden="true" size={23}/><span className={styles.avatar} aria-hidden="true">V</span>
          <div className={styles.headerText}><strong>Venmail Agent</strong><span>bot</span></div><MoreHorizontal aria-hidden="true" size={22}/>
        </div>
        <div className={styles.chat} key={run} data-animate={motion && inView ? 'true' : 'false'}>
          <span className={styles.day}>Today</span>
          <div className={`${styles.bubble} ${styles.outgoing} ${styles.first}`}>How many unread emails do I have?<span className={styles.time}>9:41 ✓✓</span></div>
          <div className={`${styles.bubble} ${styles.incoming} ${styles.second}`}>You have 2 unread messages, including mail from maya@example.test.<span className={styles.time}>9:41</span></div>
          <div className={`${styles.bubble} ${styles.outgoing} ${styles.third}`}>Reply to my latest email saying Thanks for the update.<span className={styles.time}>9:42 ✓✓</span></div>
          <div className={`${styles.bubble} ${styles.incoming} ${styles.fourth}`}><span>To: maya@example.test<br/>Subject: Re: Project update<br/><br/>Thanks for the update.<br/><br/>Reply send draft to send, or cancel draft.</span><span className={styles.time}>9:42</span></div>
        </div>
        <div className={styles.composer} aria-hidden="true"><Paperclip size={21}/><span>Message</span><Smile size={21}/><span className={styles.send}><Send size={17}/></span></div>
      </div>
    </div>
    {motion && <figcaption className={styles.caption}><button type="button" onClick={() => setRun(value => value + 1)}>Replay</button></figcaption>}
  </figure>;
}
