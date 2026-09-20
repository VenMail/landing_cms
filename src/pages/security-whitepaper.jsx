import Head from 'next/head';
import Link from 'next/link';
import DefaultLayout from '@/components/layout/DefaultLayout';

const sections = [
  { title: 'Connections and email processing', text: 'The web application is served over HTTPS. Venmail servers process readable email content to provide mailbox and automation features. This is not a blanket end-to-end encrypted or zero-access email service. Connection encryption, storage protection, and content processing are separate controls.' },
  { title: 'Mailbox storage', text: 'Paid managed plans currently use the same shared storage infrastructure. Nigeria, South Africa, and Europe selections record a future region preference; they do not place data in those regions today. Business storage upgrades or customer-provided storage are arranged with Venmail. Storage placement does not by itself confine application processing, email delivery, backups, or third-party processing to the same location. Confirm the full processing scope for your deployment.' },
  { title: 'AI and third-party processing', text: 'Email analysis can send message content and extracted attachment text to Groq, a third-party AI provider. Review the Privacy Policy and AI Principles, and discuss current account controls before using sensitive content. Do not assume a storage-region choice disables AI processing or that a universal AI opt-out applies to every feature.' },
  { title: 'Domain setup and access', text: 'A custom-domain business workspace requires a paid plan and domain setup. Configure and verify the domain authentication records supplied during setup. Review account access and integration permissions, and confirm the administrative controls available for your plan with our team.' },
  { title: 'Security evidence and regulated workloads', text: 'Request the controls, processing locations, subprocessors, retention arrangements, and contractual terms that apply to the service you intend to use. This overview does not establish a certification, audit result, service-level agreement, or regulatory compliance for a particular workload. Those requirements should be assessed against deployment-specific evidence.' },
];

export default function SecurityWhitepaper() {
  return <DefaultLayout>
    <Head>
      <title>Security and Data Processing — Venmail</title>
      <meta name="description" key="description" content="How Venmail handles mailbox storage, server-side email analysis, and third-party AI processing. Review security requirements for your deployment." />
    </Head>
    <section className="bg-slate-950 text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-primary-400 font-semibold mb-4">Security overview · Updated September 9, 2026</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Security and data processing</h1>
        <p className="text-xl text-slate-300">Understand where mailbox data is stored, how service features process it, and what to confirm for your organization.</p>
      </div>
    </section>
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        {sections.map(section => <div key={section.title} className="border-b border-gray-200 pb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
          <p className="text-gray-700 leading-relaxed">{section.text}</p>
        </div>)}
        <div className="bg-gray-50 border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Review your requirements with us</h2>
          <div className="flex flex-wrap gap-5 text-primary-700 underline">
            <Link href="/resources/privacy-policy">Privacy Policy</Link>
            <Link href="/resources/ai-principles">AI Principles</Link>
            <Link href="/resources/dpa">Data Processing Agreement</Link>
            <Link href="/contact-us">Contact our team</Link>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>;
}
