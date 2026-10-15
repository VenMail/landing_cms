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

      <div className="relative min-w-0 overflow-hidden rounded-[2rem]" data-visual="office-desk">
        <Image src="/images/venia-office-desk.png" alt="Venia Cloud workspace on an office desk" width={1792} height={1024} className="relative z-30 block h-auto w-full" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[64%] bg-gradient-to-b from-[#f5f0e8] to-[#e4d5c2]" />
        <div aria-hidden="true" data-visual="office-window-light" className="absolute left-[8%] top-0 h-32 w-32 border-x-[0.65rem] border-b-[0.65rem] border-white/70 bg-white/45 shadow-[0_22px_46px_rgba(255,255,255,0.55)] sm:h-40 sm:w-40" />
        <div aria-hidden="true" data-visual="office-tabletop" className="absolute inset-x-0 bottom-0 h-[41%] border-t border-[#b48d65] bg-[#c49b72] shadow-[inset_0_12px_24px_rgba(104,70,42,0.12)]" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-[40%] h-px bg-white/45" />
        <div aria-hidden="true" data-visual="office-notebook" className="absolute -bottom-9 left-2 z-20 h-28 w-40 -rotate-[7deg] rounded-sm border border-[#b79872] bg-[#fbf0de] shadow-[0_12px_20px_rgba(91,61,34,0.28)] sm:-bottom-7 sm:left-3 sm:h-32 sm:w-48">
          <span className="absolute inset-x-4 top-6 h-px bg-[#dcc6a9]" />
          <span className="absolute inset-x-4 top-10 h-px bg-[#dcc6a9]" />
          <span className="absolute inset-x-4 top-14 h-px bg-[#dcc6a9]" />
        </div>
        <div aria-hidden="true" data-visual="office-pen" className="absolute bottom-5 left-5 z-20 h-2 w-24 -rotate-[12deg] rounded-full bg-[#242832] shadow-[0_3px_5px_rgba(39,28,18,0.35)] sm:bottom-7 sm:left-8 sm:w-28">
          <span className="absolute -right-2 top-0 h-2 w-3 rounded-r-full bg-[#c89a5f]" />
        </div>
        <div aria-hidden="true" data-visual="office-mug" className="absolute bottom-3 right-5 z-20 h-14 w-14 rounded-b-[1.1rem] rounded-t-[0.7rem] border-4 border-[#f8ede1] bg-[#c95622] shadow-[0_8px_12px_rgba(91,61,34,0.3)] sm:bottom-5 sm:right-8 sm:h-16 sm:w-16">
          <span className="absolute -right-4 top-3 h-7 w-5 rounded-r-full border-[0.35rem] border-l-0 border-[#f8ede1]" />
          <span className="absolute left-2 top-1 h-2 w-6 rounded-full bg-[#5b3423]" />
        </div>
        <div aria-hidden="true" data-visual="office-plant" className="absolute -right-3 bottom-[17%] z-[2] h-40 w-28 sm:right-[2%] sm:bottom-[19%] sm:h-48 sm:w-36">
          <span className="absolute bottom-0 left-8 h-16 w-16 rounded-b-[1.6rem] bg-[#a9794b] shadow-lg" />
          <span className="absolute bottom-12 left-3 h-24 w-10 -rotate-[28deg] rounded-t-full rounded-br-full bg-[#3c5b45]" />
          <span className="absolute bottom-14 left-14 h-28 w-10 rotate-[23deg] rounded-t-full rounded-bl-full bg-[#496c51]" />
          <span className="absolute bottom-10 left-8 h-24 w-9 -rotate-[4deg] rounded-t-full bg-[#587a5b]" />
        </div>
        <div className="hidden relative z-10 mx-auto w-[96%] max-w-[44rem] sm:w-[86%]" data-visual="office-laptop">
          <div className="relative rounded-[1.2rem] border-[0.35rem] border-[#202124] bg-[#202124] p-1 shadow-2xl shadow-slate-900/35">
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
          <div aria-hidden="true" className="relative mx-auto h-5 w-[88%] -translate-y-px rounded-b-[1.2rem] border border-slate-500 bg-gradient-to-b from-slate-600 to-slate-800 shadow-[0_12px_16px_rgba(42,35,28,0.4)]">
            <span className="absolute left-1/2 top-0 h-1.5 w-16 -translate-x-1/2 rounded-b-md bg-slate-500" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VeniaCollaborationSection;
