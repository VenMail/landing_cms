import { BsCheck2 } from 'react-icons/bs';
import { PERSONAL_SIGNUP_URL, PLANS, businessSignupUrl, formatNgn, formatUsd, getOffer, USD_TO_NGN } from '@/config/pricing.mjs';

function Price({ plan }) {
  if (plan.checkout === 'quote') return <p className="mt-3 text-3xl font-medium text-gray-900">Request a quote</p>;
  const offer = getOffer(plan.id);
  return <>
    <p className="mt-3 text-4xl font-medium text-gray-900">{formatUsd(offer.amount)}<span className="text-base text-gray-500">/month</span></p>
    <p className="mt-2 text-sm text-gray-600">{formatNgn(offer.amount * USD_TO_NGN)}/month</p>
  </>;
}

export default function PricingPlans({ comparison = false }) {
  return <>
    <div className="my-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
      {PLANS.map(plan => <article key={plan.id} className={`flex flex-col border p-7 ${plan.featured ? 'border-primary-600 bg-[#FFFBEE]' : 'border-gray-200 bg-white/60'}`}>
        <h3 id={`plan-${plan.id}`} className="text-sm font-semibold uppercase text-gray-900">{plan.name}</h3>
        <Price plan={plan} />
        <p className="mt-6 text-gray-800">{plan.description}</p>
        <ul className="mb-8 mt-8 space-y-3 text-sm text-gray-600">
          {plan.features.map(feature => <li key={feature} className="flex gap-3"><BsCheck2 aria-hidden="true" className="h-5 w-5 flex-none" />{feature}</li>)}
        </ul>
        <a href={plan.checkout === 'quote' ? '/request-quote' : businessSignupUrl(plan.id)} aria-describedby={`plan-${plan.id}`} className={`mt-auto block px-3.5 py-2.5 text-center text-sm font-semibold ${plan.featured ? 'bg-primary-600 text-white' : 'border border-black bg-white text-black'}`}>
          {plan.checkout === 'quote' ? 'Request a quote' : `Choose ${plan.name}`}
        </a>
      </article>)}
    </div>

    <p className="mx-auto max-w-3xl text-center text-sm text-gray-600">Naira pricing uses a fixed rate of $1 = ₦1,500. Standard account charges are calculated from active email accounts. Business storage upgrades and customer-provided storage are arranged with the Venmail team.</p>

    {comparison && <div className="mb-16 mt-12 overflow-x-auto">
      <h2 className="mb-6 text-3xl font-semibold text-gray-900">Compare business plans</h2>
      <table className="min-w-full border text-left text-sm text-gray-700">
        <thead><tr><th scope="col" className="p-4">Plan</th><th scope="col" className="p-4">Email accounts</th><th scope="col" className="p-4">Storage</th><th scope="col" className="p-4">Monthly price</th><th scope="col" className="p-4">Next step</th></tr></thead>
        <tbody>{PLANS.map(plan => <tr key={plan.id} className="border-t">
          <th scope="row" className="p-4">{plan.name}</th>
          <td className="p-4">{plan.id === 'standard' ? '5 included, then $1 each' : plan.id === 'business' ? 'Unlimited' : 'Tailored'}</td>
          <td className="p-4">{plan.id === 'business' ? '200 GB included; upgrades or customer-provided storage' : plan.id === 'standard' ? 'Shared storage included' : 'Tailored'}</td>
          <td className="p-4">{plan.checkout === 'quote' ? 'Quote' : `${formatUsd(getOffer(plan.id).amount)} / ${formatNgn(getOffer(plan.id).amount * USD_TO_NGN)}`}</td>
          <td className="p-4"><a className="underline" href={plan.checkout === 'quote' ? '/request-quote' : businessSignupUrl(plan.id)}>{plan.checkout === 'quote' ? 'Request a quote' : `Choose ${plan.name}`}</a></td>
        </tr>)}</tbody>
      </table>
    </div>}

    <div className="border border-gray-200 bg-gray-50 p-6 text-gray-700">
      <h2 className="text-xl font-semibold text-gray-900">Personal mailbox</h2>
      <p className="mt-2">A free personal account uses a venia.cloud address. Custom-domain business email starts with Standard.</p>
      <div className="mt-4 flex flex-wrap gap-5"><a href={PERSONAL_SIGNUP_URL} className="underline">Create a personal account</a><a href="/request-quote" className="underline">Discuss migration or white-label requirements</a></div>
    </div>
  </>;
}
