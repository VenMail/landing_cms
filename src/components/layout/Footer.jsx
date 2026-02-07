import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { CONTACT_PAGE_PATH, getContactMailtoHref } from "@/config/contact";

export default function Footer({ hideFooterJumbo = false }) {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Email", href: "/product/mail" },
        { label: "Office Worksuite", href: "https://venia.cloud" },
        { label: "Prospects", href: "/product/contacts" },
        { label: "Calendar", href: "/product/calendar" },
        { label: "Meetings", href: "/product/meeting" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Founders", href: "/solutions/founders" },
        { label: "Marketing", href: "/solutions/marketing" },
        { label: "Agency", href: "/solutions/agency" },
        { label: "Freelancers", href: "/solutions/freelancers" },
      ],
    },
    {
      title: "Compare",
      links: [
        { label: "VenMail vs Gmail", href: "/compare/gmail" },
        { label: "VenMail vs Outlook", href: "/compare/outlook" },
        { label: "VenMail vs Zoho", href: "/compare/zoho" },
        { label: "VenMail vs Superhuman", href: "/compare/superhuman" },
        { label: "VenMail vs Front", href: "/compare/front" },
        { label: "VenMail vs Apollo", href: "/compare/apollo" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about-us" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/career" },
        { label: "Partners", href: "/resources/partner" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", href: "/resources/help" },
        { label: "Deliverability", href: "/solutions/deliverability" },
        { label: "Integrations", href: "/integrations" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/resources/privacy-policy" },
        { label: "Terms", href: "/resources/terms-of-service" },
        { label: "Data Processing", href: "/resources/dpa" },
      ],
    },
  ];

  return (
    <>
      {!hideFooterJumbo && (
        <section className="bg-white py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-[#0F172A] grid grid-cols-1 md:grid-cols-12 py-8 px-8 md:py-16 md:px-12 items-center gap-10 rounded-2xl shadow-xl">
            <div className="md:col-span-7 text-center md:text-left space-y-4">
              <p className="text-white/80 uppercase tracking-[0.2em] text-xs md:text-sm">Talk with our team</p>
              <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight md:leading-[52px]">
                Ready to migrate or scale? <br />
                We're one call away.
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-6 max-w-2xl">
                Get bespoke migration support, security reviews, and onboarding for your whole team.
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                <a
                  href={getContactMailtoHref({ cc: "outreach@venmail.io", subject: "VenMail sales inquiry" })}
                  className="inline-flex items-center justify-center px-10 py-3 text-base font-medium text-black bg-white rounded-full shadow-md hover:-translate-y-[1px] transition-transform"
                >
                  Talk to sales
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition"
                >
                  View pricing
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="bg-white/10 border border-white/10 rounded-2xl p-5 md:p-6 text-white shadow-lg backdrop-blur">
                <h3 className="text-lg font-semibold mb-4">Trusted operations stack</h3>
                <ul className="space-y-3 text-sm text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    SOC 2-aligned controls and audited vendors
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    24/7 support for migrations and deliverability
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    Multi-region data residency and SSO/SAML
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    White-glove onboarding for teams of any size
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-[#0B1624] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo-black.png" className="h-9 w-auto invert brightness-0" alt="VenMail" />
              <span className="text-sm text-white/70">Email and revenue operations that just work.</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-white/80">SOC 2-ready</span>
              <a
                href="https://status.venmail.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-white/80 hover:bg-white/15 hover:text-white transition-colors"
              >
                99.9% uptime
              </a>
              <span className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-white/80">Global support</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-8 lg:gap-10">
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Get Started</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="https://m.venmail.io/register" target="_blank" className="text-sm text-white/80 hover:text-white transition-colors">
                    Start free
                  </Link>
                </li>
                <li>
                  <Link href="https://m.venmail.io/login" target="_blank" className="text-sm text-white/80 hover:text-white transition-colors">
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-sm text-white/80 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {['Product', 'Solutions', 'Compare', 'Company', 'Resources', 'Legal'].map((title) => {
              const section = footerSections.find((s) => s.title === title);
              if (!section) return null;
              return (
                <div key={title}>
                  <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="text-sm text-white/80 hover:text-white transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><a href="mailto:hello@venmail.io" className="hover:text-white transition-colors">hello@venmail.io</a></li>
                <li><a href="tel:+19027090836" className="hover:text-white transition-colors">+1 902-709-0836</a></li>
                <li><a href={CONTACT_PAGE_PATH} className="hover:text-white transition-colors">Book a call</a></li>
                <li><a href="#" className="hover:text-white transition-colors">8 The Green, Dover, Delaware USA</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <a href="/resources/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/resources/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>© {currentYear} VenMail LLC.</span>
            </div>
            <div className="flex flex-row space-x-3">
              <a
                href="https://medium.com/@venmail"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                aria-label="Medium"
              >
                <FaMedium />
              </a>
              <a
                href="https://www.linkedin.com/company/venmail"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/venmailhq"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                aria-label="Twitter X"
              >
                <BsTwitterX />
              </a>
              <a
                href="https://www.youtube.com/@venmail"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
