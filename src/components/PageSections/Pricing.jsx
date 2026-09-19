import PricingPlans from './PricingPlans';

export default function Pricing() {
  return <section className="bg-[#E8EAEA] w-full sm:py-16">
    <div className="relative isolate mx-auto max-w-screen-xl py-8 px-4 lg:px-6">
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Professional email that grows with your team.</h2>
      <p className="mt-5"><a href="/pricing" className="underline text-gray-900">See full pricing details</a></p>
      <PricingPlans />
    </div>
  </section>;
}
