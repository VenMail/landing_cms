import { useEffect, useState } from 'react';
import { BsCheck2 } from 'react-icons/bs';
import { PLANS, PERSONAL_SIGNUP_URL, PRICING_ENDPOINT, availableRegions, businessSignupUrl, formatUsd, getOffer } from '@/config/pricing.mjs';

export default function PricingPlans({ comparison = false }) {
  const [billing, setBilling] = useState('monthly');
  const [region, setRegion] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    fetch(PRICING_ENDPOINT, { signal: controller.signal })
      .then(response => { if (!response.ok) throw new Error('Pricing unavailable'); return response.json(); })
      .then(payload => { setData(payload); })
      .catch(() => { /* Keep labeled reference prices; checkout provides the final quote. */ })
      .finally(() => { clearTimeout(timeout); setLoading(false); });
    return () => { clearTimeout(timeout); controller.abort(); };
  }, []);
  const regions = availableRegions(data);
  const signup = plan => businessSignupUrl(plan.id, billing, region);

  return <>
    <div className="flex flex-wrap justify-center items-end gap-6 mt-10">
      <fieldset className="flex gap-4">
        <legend className="text-sm text-gray-700 mb-2">Billing period</legend>
        {['monthly', 'yearly'].map(period => <button key={period} type="button" aria-pressed={billing === period}
          onClick={() => setBilling(period)} className={`px-5 py-2 border ${billing === period ? 'border-primary-600 text-primary-600' : 'border-gray-300 text-gray-700'}`}>
          {period === 'monthly' ? 'Monthly' : 'Yearly'}
        </button>)}
      </fieldset>
      <label className="text-sm text-gray-700">Hosting region
        <select aria-label="Hosting region" value={region} onChange={event => setRegion(event.target.value)} className="block mt-2 border border-gray-300 bg-white p-2 text-gray-900" disabled={!regions.length}>
          <option value="">Choose during signup</option>
          {regions.map(item => <option key={item.code} value={item.code}>{item.label || item.name || item.code.toUpperCase()}</option>)}
        </select>
      </label>
    </div>
    <p className="mt-5 text-sm text-gray-600 text-center" aria-live="polite">
      {loading ? 'Loading regional quotes. Base USD prices are shown below.' : region ? 'Regional USD quotes shown where available. Confirm your final amount in checkout.' : 'Base USD prices shown. Your hosting region can change the price; choose it here or during signup.'}
      {' '}Yearly amounts are billed annually. Custom Storage is a separate plan, not an add-on; your storage provider bills separately.
    </p>
    <div className="my-16 grid grid-cols-1 items-stretch md:grid-cols-2 xl:grid-cols-4 gap-6">
      {PLANS.map(plan => {
        const offer = getOffer(plan.id, billing, region, data);
        return <div key={plan.id} className={`p-7 border flex flex-col ${plan.featured ? 'bg-[#FFFBEE]' : 'bg-white/60'}`}>
          <h3 id={`plan-${plan.id}`} className="text-sm font-semibold text-gray-900 uppercase">{plan.name}</h3>
          <p className="text-xs text-gray-600 mt-4">{offer.isQuote ? 'Regional price · USD' : 'Base price · USD'}</p>
          <p className="mt-1 text-4xl font-medium text-gray-900">{formatUsd(offer.amount)}<span className="text-base text-gray-500">/{billing === 'monthly' ? 'month' : 'year'}</span></p>
          <p className="text-gray-800 mt-6">{plan.description}</p>
          <p className="text-gray-700 mt-2">{plan.storage}</p>
          <ul className="text-gray-600 space-y-3 text-sm mt-8 mb-8">
            {plan.features.map(feature => <li key={feature} className="flex gap-3"><BsCheck2 aria-hidden="true" className="h-5 w-5 flex-none" />{feature}</li>)}
          </ul>
          <a href={signup(plan)} aria-describedby={`plan-${plan.id}`} className={`mt-auto block px-3.5 py-2.5 text-center text-sm font-semibold ${plan.featured ? 'bg-primary-600 text-white' : 'bg-white text-black border border-black'}`}>Choose {plan.name}</a>
        </div>;
      })}
    </div>
    {comparison && <div className="overflow-x-auto mb-16">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Compare business plans</h2>
      <table className="min-w-full border text-left text-sm text-gray-700">
        <caption className="text-left mb-4">The same billing period and hosting-region selection applies to every plan link.</caption>
        <thead><tr><th scope="col" className="p-4">Plan</th><th scope="col" className="p-4">Users</th><th scope="col" className="p-4">Storage</th><th scope="col" className="p-4">Price (USD)</th><th scope="col" className="p-4">Get started</th></tr></thead>
        <tbody>{PLANS.map(plan => { const offer = getOffer(plan.id, billing, region, data); return <tr key={plan.id} className="border-t">
          <th scope="row" className="p-4">{plan.name}</th><td className="p-4">Unlimited</td><td className="p-4">{plan.storage}</td>
          <td className="p-4">{formatUsd(offer.amount)}/{billing === 'monthly' ? 'month' : 'year'}<span className="block text-xs">{offer.isQuote ? 'Regional price' : 'Base price'}</span></td>
          <td className="p-4"><a className="underline" href={signup(plan)}>Choose {plan.name}</a></td>
        </tr>; })}</tbody>
      </table>
    </div>}
    <div className="border border-gray-200 bg-gray-50 p-6 text-gray-700">
      <h2 className="text-xl font-semibold text-gray-900">Looking for a personal mailbox?</h2>
      <p className="mt-2">Free personal accounts use a venia.cloud address. A custom-domain business workspace requires a paid plan. The 14-day individual demo is a separate way to explore the mailbox.</p>
      <div className="flex flex-wrap gap-5 mt-4"><a href={PERSONAL_SIGNUP_URL} className="underline">Create a personal account</a><a href="/contact-us" className="underline">Ask about migration or the demo</a></div>
    </div>
  </>;
}
