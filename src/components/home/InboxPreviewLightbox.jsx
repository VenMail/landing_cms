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
          <div className="max-sm:h-[220px] overflow-hidden"><Image src="/follow_up.png" width={1090} height={530} priority sizes="(max-width: 700px) 700px, 1040px" alt="Follow-up list with message status and follow-up action" className="block h-auto w-[700px] max-w-none sm:w-full" /></div>
          <span className="block border-t border-[#dadce0] px-4 py-3 text-sm font-semibold text-orange-800 underline decoration-orange-300 underline-offset-4 group-hover:text-orange-900">View follow-ups</span>
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
            aria-label="Follow-up preview"
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
            <Image src="/follow_up.png" width={1090} height={530} priority alt="Follow-up list with message status and follow-up action" className="max-h-[calc(100vh-5rem)] max-w-full rounded-lg object-contain shadow-2xl shadow-black/30" />
          </section>
        </div>
      )}
    </>
  );
}
