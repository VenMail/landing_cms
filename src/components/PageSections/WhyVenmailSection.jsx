import { LuMail, LuLayers, LuShield } from "react-icons/lu";

const PILLARS = [
  {
    icon: LuMail,
    title: "Email for domains is getting pricier",
    body: "Gmail and Microsoft keep raising the bar. Venmail gives you professional email for your domain without the big-brand tax.",
  },
  {
    icon: LuLayers,
    title: "Growing teams need more marketing in email",
    body: "Automatic follow-ups, read/open tracking, and campaigns from the same inbox shouldn't require 2–3 separate tools. We built that into one place.",
  },
  {
    icon: LuShield,
    title: "A productivity-first email UI you actually own",
    body: "Skiff showed what a privacy-first, productivity-focused email could be; it was acquired. We're taking it further: store mail on your own devices or cloud (S3/FTP-compatible) so you never have to \"export\" your data in the first place.",
  },
];

export default function WhyVenmailSection() {
  return (
    <section id="why-venmail" className="bg-gray-50 py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We built Venmail because privacy and productivity should remain affordable to the common man.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-center sm:text-left">
          <a
            href="https://github.com/VenMail"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Venmail on GitHub
          </a>
          <a
            href="https://venia.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-base font-medium text-primary-600 border border-primary-200 rounded-md hover:bg-primary-50 transition-colors"
          >
            Open source worksuite (Docs, Sheets, Forms, Slides, Media)
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
