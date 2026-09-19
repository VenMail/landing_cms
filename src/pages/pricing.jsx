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
            Start with five email accounts for $1/month, choose unlimited accounts with Business, or request a tailored Enterprise / White-label quote.
          </p>
        </div>
        <PricingPlans comparison />
      </div>
    </section>
    <FAQs />
  </DefaultLayout>;
}
