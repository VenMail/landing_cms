export default function WorkspaceHero() {
  return (
    <section className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-900/20">
      <img
        src="/hero/venmail-workspace.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-slate-950/5 via-slate-950/10 to-slate-950/70" />
      <figure className="relative mx-auto flex min-h-[290px] items-end justify-center px-4 pt-12 sm:min-h-[430px] sm:px-10 sm:pt-20">
        <img
          src="/screenshot-full.webp"
          alt="Venmail inbox and compose workspace"
          className="w-full max-w-4xl rounded-t-xl border border-slate-700/60 shadow-[0_-16px_50px_rgba(15,23,42,0.55)]"
        />
      </figure>
    </section>
  );
}
