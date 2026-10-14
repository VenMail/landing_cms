import Image from 'next/image';

const storeLinkClassName = 'inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#202124] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#35373a] focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2 focus:ring-offset-[#f8f9fa]';

export default function MobileAppsSection() {
  return (
    <section
      id="mobile-apps"
      aria-labelledby="mobile-apps-title"
      className="scroll-mt-24 overflow-hidden border-t border-[#dadce0] bg-[#f8f9fa] px-4 py-16 sm:px-6 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="relative z-20">
          <p className="text-sm font-semibold text-orange-800">Venmail mobile apps</p>
          <h2
            id="mobile-apps-title"
            className="mt-3 max-w-xl text-4xl font-semibold leading-[1.15] tracking-[-0.025em] sm:text-5xl"
          >
            Business mail, wherever work takes you
          </h2>
          <p className="mt-5 text-lg leading-[1.65] text-[#5f6368]">
            Venmail for iPhone, iPad, and Android.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://apps.apple.com/us/app/venmail/id6755040289"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Venmail on the App Store"
              className={storeLinkClassName}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 shrink-0">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
              </svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=io.venmail.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Venmail on Google Play"
              className={storeLinkClassName}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 shrink-0">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85A1.5 1.5 0 0 1 3 20.5Zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27Zm3.35-4.31c.34.27.59.69.59 1.19 0 .5-.22.9-.57 1.18L17.89 12l2.27-1.19ZM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49Z" />
              </svg>
              Google Play
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-[400px] w-full max-w-[560px] overflow-hidden sm:h-[640px] lg:h-[620px]">
          <div className="absolute bottom-[8%] left-[2%] h-[70%] w-[56%] rounded-[2.5rem] bg-[#dff3e8]" aria-hidden="true" />
          <div className="absolute right-[1%] top-[6%] h-[72%] w-[57%] rounded-[2.5rem] bg-[#ede4f7]" aria-hidden="true" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
            <Image
              src="/images/venmail-mobile-on-the-go-illustration.webp"
              fill
              sizes="(max-width: 1023px) 100vw, 560px"
              alt=""
              className="object-contain object-left-bottom opacity-95"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute left-[5%] top-[12%] z-10 w-[47%] -rotate-6 overflow-hidden rounded-[2rem] border-[8px] border-[#292a2d] bg-[#292a2d] shadow-[0_22px_50px_rgba(32,33,36,0.18)]"
          >
            <span className="absolute left-1/2 top-2 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-[#292a2d]" />
            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.35rem]">
              <Image
                src="/images/venmail-mobile-inbox-store-capture-tablet.webp"
                fill
                sizes="(max-width: 639px) 44vw, (max-width: 1023px) 250px, 280px"
                alt=""
                className="object-cover object-[center_28%]"
              />
            </div>
          </div>

          <div className="absolute right-[4%] top-[3%] z-10 w-[49%] rotate-3 overflow-hidden rounded-[2rem] border-[8px] border-[#202124] bg-[#202124] shadow-[0_28px_65px_rgba(32,33,36,0.24)]">
            <span aria-hidden="true" className="absolute left-1/2 top-2 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-[#202124]" />
            <Image
              src="/images/venmail-mobile-inbox-store-capture.webp"
              width={598}
              height={1130}
              sizes="(max-width: 639px) 46vw, (max-width: 1023px) 270px, 290px"
              alt="Venmail mobile inbox"
              className="block h-auto w-full rounded-[1.35rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
