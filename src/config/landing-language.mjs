export function landingLanguage(path) {
  const clean = String(path || '').split(/[?#]/)[0].replace(/\.html$/, '').replace(/\/$/, '');
  if (clean === '/pt-br/email-profissional') return 'pt-BR';
  if (clean === '/de/geschaeftliche-email') return 'de';
  return null;
}
export function registrationHref(href, language) {
  if (!['pt-BR', 'de'].includes(language)) return href;
  try {
    const url = new URL(href);
    if (url.origin !== 'https://m.venmail.io' || url.pathname !== '/register') return href;
    url.searchParams.set('landing_language', language);
    return url.href;
  } catch { return href; }
}
