import { ArrowUpRight, Check, FileText, Files, FormInput, Presentation, ShieldCheck, Table2 } from 'lucide-react';
import styles from '../home/ProductPreview.module.css';
import usePreviewInView from '../home/usePreviewInView';

const workTypes = [
  [Files, 'Files'],
  [FileText, 'Documents'],
  [Table2, 'Spreadsheets'],
  [FormInput, 'Forms'],
  [Presentation, 'Slides'],
];

const VeniaCollaborationSection = () => {
  const [ref, visible] = usePreviewInView();
  return (
  <section className="border-t border-[#dadce0] bg-[#f8f9fa] px-4 py-16 sm:px-6 md:py-24">
    <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-orange-800">Venia Cloud</p>
        <h2 className="mt-3 text-4xl font-semibold leading-[1.15] tracking-[-0.025em] text-[#202124] sm:text-5xl">
          Work together with your team
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-[1.65] text-[#5f6368]">
          Share or sign files, documents, spreadsheets, forms, and slides with your team and clients.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 text-sm font-medium text-[#202124] sm:grid-cols-3">
          {workTypes.map(([Icon, label]) => (
            <div key={label} className="flex min-h-11 items-center gap-2 rounded-lg border border-[#dadce0] bg-white px-3">
              <Icon className="h-4 w-4 text-orange-800" aria-hidden="true" />
              {label}
            </div>
          ))}
        </div>
        <a
          href="https://venia.cloud"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-orange-800 underline decoration-orange-300 underline-offset-4 transition-colors hover:text-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2"
        >
          Open Venia Cloud
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <figure ref={ref} className={`min-w-0 rounded-[1.4rem] border border-[#e8ddd6] bg-[#f6ece5] p-3 shadow-[0_24px_70px_rgba(63,38,25,.1)] sm:p-5 ${styles.preview} ${visible ? styles.visible : ''}`}>
        <div className="overflow-hidden rounded-xl border border-[#e9e1dd] bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-[#eee8e4] px-4 py-3"><div className="flex items-center gap-2 text-sm font-semibold text-[#302c2b]"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff0e8] text-[#c44712]"><FileText size={16} /></span> Service agreement</div><span className="text-xs text-[#827a75]">Draft</span></div>
          <div className="space-y-4 p-4 sm:p-6"><div className="rounded-lg border border-[#eee7e2] bg-[#fffefd] p-4 sm:p-5"><p className="text-[10px] font-semibold uppercase tracking-[.15em] text-[#a18b7d]">Agreement</p><p className="mt-2 text-lg font-semibold text-[#302c2b]">A clear next step, together.</p><p className="mt-2 max-w-md text-sm leading-6 text-[#82766e]">Project scope, timeline, and terms are ready for review.</p><div className="mt-4 h-px bg-[#eee8e4]" /><div className="mt-4 flex items-center gap-2 text-xs text-[#776d67]"><ShieldCheck size={15} className="text-[#bd5427]" /> Signature field</div></div>
          <div className={`flex items-center justify-between gap-3 rounded-lg border border-[#e5eee7] bg-[#f5faf6] p-3 ${styles.signStatus}`}><div className="flex min-w-0 items-center gap-2"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dfefe3] text-[#438159]"><Check size={16} /></span><div className="min-w-0"><p className="truncate text-xs font-semibold text-[#314b38]">Maya Chen</p><p className="truncate text-[11px] text-[#728679]">maya@example.com</p></div></div><span className="shrink-0 text-xs font-medium text-[#438159]">Ready to send</span></div></div>
        </div><figcaption className="flex items-center justify-between gap-3 px-1 pt-3 text-xs text-[#82756d]"><span>Review and send for signing</span><span>Concept preview</span></figcaption>
      </figure>
    </div>
  </section>
  );
};

export default VeniaCollaborationSection;
