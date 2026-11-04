import { Clock3, Eye, Sparkles } from 'lucide-react';
import styles from './ProductPreview.module.css';
import usePreviewInView from './usePreviewInView';

export default function InboxPreviewLightbox() {
  const [ref, visible] = usePreviewInView();
  return (
    <figure ref={ref} className={`mx-auto mt-14 max-w-[960px] overflow-hidden rounded-[1.4rem] border border-[#e8ddd6] bg-[#f6ece5] p-3 text-left shadow-[0_24px_70px_rgba(63,38,25,.12)] sm:p-6 md:mt-16 ${styles.preview} ${visible ? styles.visible : ''}`}>
      <div className="overflow-hidden rounded-xl border border-[#e9e1dd] bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-[#eee8e4] px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#262328]"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff0e8] text-[#c44712]"><Sparkles size={16} /></span> Inbox briefing</div>
          <span className="text-xs text-[#827a75]">Today</span>
        </div>
        <div className="grid gap-4 p-4 sm:p-6 md:grid-cols-[1fr_.8fr] md:gap-6">
          <div className="min-w-0 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[.12em] text-[#a06448]">Worth a follow-up</p>
            <div className={`rounded-xl border border-[#f0ded3] bg-[#fff9f6] p-4 ${styles.mailCard}`}>
              <div className="flex items-start justify-between gap-3"><div className="min-w-0"><p className="text-sm font-semibold text-[#302c2b]">Project proposal</p><p className="mt-1 text-xs text-[#81756f]">maya@example.com</p></div><span className="shrink-0 rounded-full bg-[#fff0e6] px-2 py-1 text-[11px] font-medium text-[#bd4b1e]">Follow up</span></div>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#766d68]"><span className="flex items-center gap-1"><Eye size={14} /> Opened twice</span><span className="flex items-center gap-1"><Clock3 size={14} /> No reply yet</span></div>
            </div>
            <p className="text-xs leading-5 text-[#857b75]">Open counts are estimates.</p>
          </div>
          <div className={`rounded-xl border border-[#eee6e0] bg-[#fcfbfa] p-4 ${styles.draftCard}`}>
            <div className="flex items-center justify-between gap-3"><span className="flex items-center gap-1.5 text-xs font-semibold text-[#b54a1e]"><Sparkles size={14} /> Suggested follow-up</span><span className="rounded-full bg-[#eaf6ef] px-2 py-1 text-[10px] font-semibold text-[#3a7951]">Ready to review</span></div>
            <p className="mt-4 text-sm leading-6 text-[#4c4541]">Hi Maya, just checking in on the proposal. Happy to answer any questions or walk through the next steps.</p>
            <div className="mt-5 flex justify-end"><span className="inline-flex items-center gap-2 rounded-full bg-[#fff0e8] px-3 py-2 text-xs font-semibold text-[#a7471d]">Draft ready for review</span></div>
          </div>
        </div>
      </div>
      <figcaption className="flex items-center justify-between gap-3 px-1 pt-3 text-xs text-[#82756d]"><span>Follow-up, ready for review</span><span>Concept preview</span></figcaption>
    </figure>
  );
}
