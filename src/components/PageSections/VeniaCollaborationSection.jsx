import Image from 'next/image';
import { ArrowUpRight, FileText, Files, FormInput, Presentation, Table2 } from 'lucide-react';

const workTypes = [
  [Files, 'Files'],
  [FileText, 'Documents'],
  [Table2, 'Spreadsheets'],
  [FormInput, 'Forms'],
  [Presentation, 'Slides'],
];

const VeniaCollaborationSection = () => (
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

      <div className="min-w-0 overflow-hidden rounded-2xl border border-[#dadce0] bg-white shadow-lg shadow-slate-900/10">
        <Image src="/docs-editor.png" alt="Venia document editor with a meeting notes template" width={998} height={800} sizes="(max-width: 1023px) calc(100vw - 32px), 650px" className="block h-auto w-full" />
      </div>
    </div>
  </section>
);

export default VeniaCollaborationSection;
