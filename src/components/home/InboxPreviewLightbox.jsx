import styles from './ProductPreview.module.css';
import usePreviewInView from './usePreviewInView';

export default function InboxPreviewLightbox() {
  const [ref, visible] = usePreviewInView();
  return (
    <figure ref={ref} className={`mx-auto mt-14 max-w-5xl overflow-hidden rounded-[1.4rem] border border-[#e8ddd6] bg-[#f6ece5] p-3 text-left shadow-[0_24px_70px_rgba(63,38,25,.12)] sm:p-6 md:mt-16 ${styles.preview} ${visible ? styles.visible : ''}`}>
      <picture>
        <source media="(max-width: 639px)" srcSet="/home/shared-inbox-mobile.png" />
        <img src="/home/shared-inbox-desktop.png" width="1440" height="900" alt="Shared inbox conversations with sample customer messages" className="block aspect-[350/570] w-full rounded-xl border border-[#e9e1dd] object-cover object-top sm:aspect-[1440/620]" />
      </picture>
      <figcaption className="flex flex-wrap items-center justify-between gap-2 px-1 pt-3 text-xs leading-5 text-[#70635b]"><span>Shared inbox · Sample data</span><span>Access may be limited.</span></figcaption>
    </figure>
  );
}
