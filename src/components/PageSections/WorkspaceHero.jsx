export default function WorkspaceHero() {
  return (
    <section
      data-hero-framing="close-up"
      className="relative mx-auto aspect-[4/3] max-w-6xl overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-[#e9dfd1] shadow-[0_32px_90px_rgba(15,23,42,0.22)] sm:aspect-[16/9]"
    >
      <img
        src="/hero/venmail-workspace-v2.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.12),rgba(15,23,42,0.14)_88%)]" />
      <figure className="absolute inset-0 flex items-center justify-center">
        <img
          src="/screenshot-full.webp"
          alt="Venmail inbox and compose workspace"
          className="w-[124%] max-w-none translate-y-[1%] drop-shadow-[0_28px_36px_rgba(15,23,42,0.48)] sm:w-[108%] lg:w-[104%]"
        />
      </figure>
    </section>
  );
}
