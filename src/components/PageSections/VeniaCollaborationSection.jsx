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
          Share files, documents, spreadsheets, forms, and slides for the work your team shares.
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

      <div className="min-w-0 overflow-hidden rounded-2xl bg-[#202124] p-3 shadow-2xl shadow-slate-900/20 sm:p-5">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900 p-2 sm:p-3">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(249,115,22,0.28),transparent_25rem),radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.22),transparent_24rem)]" />
          <div className="relative flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs font-medium text-slate-300">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-2">venia.cloud</span>
          </div>
          <Image
            src="/images/venmail-office-shot-light.png"
            alt="Venia Cloud workspace with shared files and team tools"
            width={1536}
            height={724}
            className="relative mt-3 h-auto w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default VeniaCollaborationSection;
