import Head from "next/head";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function WhyVenmail() {
  return (
    <DefaultLayout>
      <Head>
        <title>Why We Built VenMail — Our Story and Mission</title>
        <meta name="description" content="The real story behind VenMail - why we started, what problems we're solving, and our commitment to affordable, private email." />
        <meta property="og:title" content="Why We Built VenMail" />
        <meta property="og:description" content="The reason we built VenMail." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/why-venmail" />
      </Head>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Email Shouldn't Be a Luxury
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building email that puts you in control
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p>
                Professional email and office is becoming something only established companies can afford. That's backwards. Every business, every startup, every creator deserves a web compatible virtual office without having to choose between paying very high per-seat fees or using personal addresses.
              </p>

              <p>
                We've watched this unfold for years. Top Workspace pricing keeps climbing. Small businesses end up with a handful of "official" email addresses while everyone else uses personal Gmail. It's not just expensive - it's unprofessional and it creates communication chaos.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">A story of many</h3>
                <p className="italic text-gray-700 mb-3">
                  "I only create email accounts for the operations team"
                </p>
                <p className="text-sm text-gray-600">— Sandra, SheCodes</p>
                <p className="mt-3 text-gray-700">
                  When email becomes a line item you have to justify, companies start rationing it. Important conversations get fragmented or even lost. This isn't just about money - it's about the fundamental breakdown of business communication.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Control Matters More Than Features</h2>
              
              <p>
                Here's something we learned: people don't want more features. They want control. They want their email to live where they choose, work how they expect, and cost what makes sense for their business.
              </p>

              <p>
                So we built VenMail around three simple principles:
              </p>

              <ul className="list-disc pl-6 space-y-2 my-4">
                <li><strong>Your email should live where you want it to live.</strong> Not trapped in someone else's system.</li>
                <li><strong>Pricing should be based on what you use.</strong> Not how many people work for you.</li>
                <li><strong>You should have the tools you actually need.</strong> Not a hundred features you'll never touch.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What This Actually Means</h2>

              <p>
                For us, this means building email infrastructure that works with your own storage. AWS S3, Google Cloud, even your own server. Your email stays yours, period. No exporting, no worrying about a provider shutting down and taking your communications with them.
              </p>

              <p>
                It means charging for storage, not seats. A 5-person team and a 50-person team pay about the same if they use the same amount of storage. Because email infrastructure costs are about storage and processing, not about how many people use it.
              </p>

              <p>
                It means including the features that growing teams actually need: follow-ups, tracking, campaigns, document handling. The things that help you communicate better and grow your business, without forcing you to juggle three different tools.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">This Isn't New</h3>
                <p>
                  You can piece together open source tools like CryptPad to get similar functionality, but the user experience suffers. We're not inventing something revolutionary - we're creating a unified office workspace with a pricing model that keeps things simple for growing teams.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">We're Part of Something Bigger</h2>

              <p>
                You might have noticed our other project, Venia.cloud - an open source office suite. That's not separate from this work. It's the same mission: building tools that respect the people who use them.
              </p>

              <p>
                Software should work for you, not shareholders. It should give you control, not take it away. It should be affordable, not exclusive. These principles guide everything we build.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">This Is Bigger Than Email</h2>

              <p>
                What we're doing with VenMail is part of a larger shift. People need more privacy sensitive/respsecting products; tools that feel clean and cohesive not fragmented.
              </p>

              <p>
                We're not trying to be the biggest email provider. But rather, one that understands that email is fundamental infrastructure, not a luxury service.
              </p>

              <p>
                If you believe in this vision - if you're tired of the status quo and want to be part of building something better - we'd love to have you with us. Not as customers, but as fellow travelers who believe technology should serve humanity, not the other way around.
              </p>

              <div className="bg-gray-100 p-6 rounded-lg my-8">
                <p className="text-center text-gray-600">
                  <strong>Have thoughts about this?</strong><br />
                  We're genuinely interested in your perspective.<br />
                  <a href="mailto:hello@venmail.io" className="text-blue-600 hover:text-blue-700">hello@venmail.io</a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Join the Mission</h2>
              <p className="text-gray-600 mb-8">
                Help us build email that respects users and their budgets
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://m.venmail.io/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-black hover:bg-gray-800 transition-colors"
                >
                  Try VenMail
                </a>
                <a
                  href="mailto:hello@venmail.io"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-800 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Share Your Thoughts
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
