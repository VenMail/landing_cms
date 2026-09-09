// Reference USD amounts match mailer_web/config/constants.php (2026-09-09).
// A regional API quote takes precedence. Reference amounts are not checkout quotes.
export const PRICING_ENDPOINT = 'https://m.venmail.io/api/public/pricing/data-regions';
export const PERSONAL_SIGNUP_URL = 'https://m.venmail.io/register?type=personal';
export const PLANS = [
  { id: 'startup', name: 'Startup', monthly: 7, yearly: 67.2, storage: '60GB shared storage', description: 'Professional email for growing teams.', features: ['Unlimited users', 'Calendar and contacts', 'Automated follow-ups', 'AI meeting transcription and summaries'] },
  { id: 'business', name: 'Business', monthly: 23.5, yearly: 225.6, storage: '250GB shared storage', description: 'More storage for communication and campaigns.', featured: true, features: ['Unlimited users', 'Campaign and newsletter tools', 'Deliverability analytics', 'Automated sequences and follow-ups'] },
  { id: 'enterprise', name: 'Enterprise', monthly: 99, yearly: 950.4, storage: '1.5TB shared storage', description: 'Larger workspaces with assisted onboarding.', features: ['Unlimited users', 'Campaign and newsletter tools', 'AI meeting transcription and summaries', 'Discuss support requirements with sales'] },
  { id: 'custom', name: 'Custom Storage', monthly: 20, yearly: 200, storage: 'Bring your own storage', description: 'A separate plan for your own storage infrastructure.', features: ['Unlimited users', 'Customer-provided storage', 'Storage provider charges are separate', 'Confirm setup requirements with our team'] },
];
const REGION_CODES = ['ng', 'za', 'eu'];

export function businessSignupUrl(plan, billing = 'monthly', region = '') {
  if (!PLANS.some(p => p.id === plan)) throw new Error('Unsupported business plan');
  if (!['monthly', 'yearly'].includes(billing)) throw new Error('Unsupported billing period');
  if (region && !REGION_CODES.includes(region)) throw new Error('Unsupported data region');
  const url = new URL('https://m.venmail.io/register');
  url.searchParams.set('type', 'business');
  url.searchParams.set('plan', plan);
  url.searchParams.set('billing', billing);
  if (region) url.searchParams.set('region', region);
  return url.href;
}

export function availableRegions(data) {
  return data?.success === true && Array.isArray(data.regions)
    ? data.regions.filter(r => r.available === true && REGION_CODES.includes(r.code)) : [];
}

export function getOffer(plan, billing = 'monthly', region = '', data = null) {
  const reference = PLANS.find(p => p.id === plan);
  if (!reference || !['monthly', 'yearly'].includes(billing)) throw new Error('Unsupported offer');
  const quote = data?.plans?.[plan]?.[region]?.[billing];
  if (availableRegions(data).some(r => r.code === region) && quote?.plan_code === plan && quote.billing_period === billing && quote.data_region === region && typeof quote.amount_usd === 'number' && Number.isFinite(quote.amount_usd) && quote.amount_usd > 0) {
    return { amount: quote.amount_usd, isQuote: true };
  }
  return { amount: reference[billing], isQuote: false };
}

export const formatUsd = amount => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(amount);
