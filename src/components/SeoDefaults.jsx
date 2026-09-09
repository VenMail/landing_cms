import Head from 'next/head';
import { useRouter } from 'next/router';

const TITLES = {
  '/': 'Venmail — Professional Email for Growing Teams',
  '/pricing': 'Business Email Plans and Pricing — Venmail',
  '/resources/privacy-policy': 'Privacy and Data Processing — Venmail',
  '/resources/ai-principles': 'AI Processing and User Controls — Venmail',
};
export default function SeoDefaults() {
  const { asPath } = useRouter();
  const path = (asPath || '/').split(/[?#]/)[0].replace(/\.html$/, '').replace(/\/+$/, '') || '/';
  const title = TITLES[path] || `${path.split('/').filter(Boolean).pop()?.replaceAll('-', ' ') || 'Business email'} — Venmail`;
  const description = path === '/pricing'
    ? 'Compare Venmail paid business email plans and shared storage. Review monthly or annual pricing and choose a plan for your team.'
    : 'Professional email on your business domain, with calendar, contacts and shared storage. Explore Venmail plans and get help moving your team.';
  return <Head>
    <title>{title}</title>
    <meta name="description" content={description} key="description" />
    <link rel="canonical" href={`https://venmail.io${path === '/' ? '' : path}`} key="canonical" />
    <meta property="og:title" content={title} key="og:title" />
    <meta property="og:description" content={description} key="og:description" />
    <meta property="og:url" content={`https://venmail.io${path === '/' ? '' : path}`} key="og:url" />
    <meta property="og:type" content="website" key="og:type" />
    <meta property="og:site_name" content="Venmail" />
    <meta property="og:image" content="https://venmail.io/android-chrome-512x512.png" />
  </Head>;
}
