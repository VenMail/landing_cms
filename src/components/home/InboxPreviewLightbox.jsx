import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function InboxPreviewLightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeButtonRef = useRef(null);

  const close = () => {
    setIsOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    closeButtonRef.current?.focus();
    return undefined;
  }, [isOpen]);

  return (
    <>
      <div className="mx-auto mt-14 max-w-[1040px] overflow-hidden rounded-xl border border-[#dadce0] md:mt-16">
        <button
          ref={triggerRef}
          type="button"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
          className="group block w-full text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-700"
        >
          <Image src="/email-dashboard-preview.png" width={1802} height={905} priority sizes="(max-width: 1088px) calc(100vw - 32px), 1040px" alt="Venmail inbox" className="block h-auto w-full" />
          <span className="block border-t border-[#dadce0] px-4 py-3 text-sm font-semibold text-orange-800 underline decoration-orange-300 underline-offset-4 group-hover:text-orange-900">Open full-size Venmail inbox image.</span>
        </button>
      </div>

      {isOpen && (
        <div
          role="presentation"
          onMouseDown={event => {
            if (event.target === event.currentTarget) close();
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-4 sm:p-8"
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label="Venmail inbox preview"
            onKeyDown={event => {
              if (event.key === 'Escape') close();
            }}
            className="relative flex max-h-full max-w-full flex-col items-end gap-3 outline-none"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              className="inline-flex min-h-11 items-center rounded-lg bg-white px-4 text-sm font-semibold text-[#202124] transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Close preview
            </button>
            <Image src="/email-dashboard-preview.png" width={1802} height={905} priority alt="Venmail inbox" className="max-h-[calc(100vh-5rem)] max-w-full rounded-lg object-contain shadow-2xl shadow-black/30" />
          </section>
        </div>
      )}
    </>
  );
}
