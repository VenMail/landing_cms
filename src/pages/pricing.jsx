import DefaultLayout from '@/components/layout/DefaultLayout';
import FAQs from '@/components/PageSections/FAQs';
import PricingPlans from '@/components/PageSections/PricingPlans';

export default function Pricing() {
  return <DefaultLayout>
    <section className="w-full sm:py-16">
      <div className="relative isolate mx-auto max-w-screen-xl py-8 px-4 lg:px-6">
        <div className="text-center">
          <p className="uppercase text-sm text-black tracking-[0.3em]">pricing</p>
          <h1 className="mt-2 max-w-4xl mx-auto text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Pricing that grows with your business.</h1>
          <p className="mt-4 text-base text-gray-600 max-w-3xl mx-auto">
            From $0.20 per inbox/month. Standard costs $1/month total for 5 inboxes with 20 GB shared storage. Each added account adds 10 GB shared storage. Business includes up to 100 email accounts and 200 GB pooled storage for $20/month.
          </p>
        </div>
        <PricingPlans comparison />
      </div>
    </section>
    <FAQs />
  </DefaultLayout>;
}
