export const USD_TO_NGN = 1500;
export const QUOTE_ENDPOINT = 'https://m.venmail.io/api/public/quote-requests';
export const LANDING_SIGNUP_SOURCE = 'cloudflare_landing';
export const PERSONAL_SIGNUP_URL = signupUrl('personal');
export const STANDARD_INCLUDED_ACCOUNTS = 5;
export const BUSINESS_MONTHLY_USD = 20;

export const PLANS = [
  { id: 'standard', name: 'Standard', monthly: 1, checkout: 'self_serve', description: 'Professional email for small teams on a custom domain.', features: ['5 email accounts included', '$1/month for each additional account', 'Shared storage included', 'Calendar and contacts'] },
  { id: 'business', name: 'Business', monthly: 20, checkout: 'self_serve', featured: true, description: 'Email infrastructure for teams that need room to grow.', features: ['Unlimited email accounts', '200 GB pooled storage included', 'Storage upgrades available', 'Bring your own storage'] },
  { id: 'enterprise', name: 'Enterprise / White-label', checkout: 'quote', description: 'A tailored deployment for branded services and complex requirements.', features: ['White-label requirements', 'Migration and onboarding', 'Storage and security design', 'Priority support and SLAs'] },
];

export function businessSignupUrl(plan) {
  if (!PLANS.some(item => item.id === plan && item.checkout === 'self_serve')) throw new Error('Unsupported self-service business plan');
  return signupUrl('business', plan);
}

export function signupUrl(type, plan) {
  const url = new URL('https://m.venmail.io/register');
  url.searchParams.set('type', type);
  if (plan) url.searchParams.set('plan', plan);
  url.searchParams.set('signup_source', LANDING_SIGNUP_SOURCE);
  return url.href;
}

export function getOffer(plan, billing = 'monthly') {
  const reference = PLANS.find(item => item.id === plan);
  if (!reference || reference.checkout !== 'self_serve' || billing !== 'monthly') throw new Error('Unsupported self-service offer');
  return { amount: reference.monthly, isQuote: false };
}

export function getRecommendedOffer(accountCount) {
  const accounts = Math.max(1, Math.trunc(Number(accountCount) || 1));
  const standardAmount = 1 + Math.max(0, accounts - STANDARD_INCLUDED_ACCOUNTS);
  if (standardAmount >= BUSINESS_MONTHLY_USD) {
    return { plan: 'business', accounts, amount: BUSINESS_MONTHLY_USD };
  }

  return { plan: 'standard', accounts, amount: standardAmount };
}

export const formatUsd = amount => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(amount);
export const formatNgn = amount => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount);
