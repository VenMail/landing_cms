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

      <div className="relative min-w-0 overflow-hidden rounded-[2rem] bg-[#e7dfd5] px-4 pb-7 pt-10 sm:px-8 sm:pb-10 sm:pt-14" data-visual="office-desk">
        <div aria-hidden="true" className="absolute inset-x-5 bottom-0 h-[70%] rounded-t-[2rem] border border-white/60 bg-[#f4eee5]" />
        <div aria-hidden="true" className="absolute right-[8%] top-5 h-20 w-20 rounded-full bg-orange-200/70 blur-2xl sm:h-28 sm:w-28" />
        <div aria-hidden="true" className="absolute bottom-5 left-[12%] h-16 w-24 rounded-full bg-slate-300/45 blur-2xl" />
        <div className="relative mx-auto w-full max-w-[46rem]" data-visual="office-laptop">
          <div className="relative rounded-[1.35rem] border-[0.45rem] border-[#202124] bg-[#202124] p-1 shadow-2xl shadow-slate-900/30">
            <span aria-hidden="true" className="absolute left-1/2 top-1.5 h-1.5 w-10 -translate-x-1/2 rounded-full bg-slate-700" />
            <div className="overflow-hidden rounded-[0.9rem] bg-white pt-2">
              <Image
                src="/images/venmail-office-shot-light.png"
                alt="Venia Cloud workspace with shared files and team tools"
                width={1536}
                height={724}
                className="block h-auto w-full"
              />
            </div>
          </div>
          <div aria-hidden="true" className="relative mx-auto h-5 w-[88%] -translate-y-px rounded-b-[1.2rem] border border-slate-500 bg-gradient-to-b from-slate-600 to-slate-800 shadow-lg">
            <span className="absolute left-1/2 top-0 h-1.5 w-16 -translate-x-1/2 rounded-b-md bg-slate-500" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VeniaCollaborationSection;
