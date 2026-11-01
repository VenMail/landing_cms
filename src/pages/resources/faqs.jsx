import Head from 'next/head';
import CustomLayout from '@/components/layout/CustomLayout';
import { faqGroups } from '@/data/faq.mjs';

export default function Faqs() {
  return (
    <CustomLayout logoVariant="dark" headerColor="#FFEFEB" textColor="black">
      <Head>
        <title>Business email questions | Venmail</title>
        <meta name="description" content="Answers about business email, domain setup, migration and email delivery." />
      </Head>
      <section className="bg-[#FFEFEB] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-screen-xl">
          <h1 className="max-w-3xl text-4xl font-medium tracking-tight text-black md:text-6xl">Business email questions</h1>
        </div>
      </section>
      <section className="mx-auto max-w-screen-xl space-y-12 bg-white px-4 py-16 md:px-6">
        {faqGroups.map(group => (
          <div key={group.title}>
            <h2 className="text-2xl font-semibold text-black">{group.title}</h2>
            <div className="mt-4 max-w-3xl">
              {group.questions.map(item => (
                <details key={item.question} className="border-b border-[#e8eaea] py-5">
                  <summary className="cursor-pointer text-lg font-semibold text-black">{item.question}</summary>
                  <p className="mt-3 text-base leading-7 text-gray-700">{item.answer}</p>
                  <a className="mt-2 inline-block text-primary-600 underline" href={item.href}>{item.linkText}</a>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>
    </CustomLayout>
  );
}
