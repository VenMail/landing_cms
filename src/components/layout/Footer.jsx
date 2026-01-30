import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import {
  FaMedium,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { CONTACT_PAGE_PATH } from "@/config/contact";

export default function Footer({ hideFooterJumbo = false }) {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Venmail", href: "/product/mail" },
        { label: "Venmail Worksuite", href: "https://venia.cloud" },
        { label: "Prospects", href: "/product/contacts" },
        { label: "Calendar", href: "/product/calendar" },
        { label: "Meetings", href: "/product/meeting" },
      ],
    },
    {
      title: "Compare",
      links: [
        { label: "VenMail vs Gmail", href: "/compare/gmail" },
        { label: "VenMail vs Outlook", href: "/compare/outlook" },
        { label: "VenMail vs Zoho", href: "/compare/zoho" },
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
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Partners", href: "/partners" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/resources/privacy-policy" },
        { label: "Terms", href: "/resources/terms-of-service" },
        { label: "Security", href: "/security" },
      ],
    },
  ];

  return (
    <>
      {!hideFooterJumbo && (
        <section className="bg-white py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="bg-primary-500 grid grid-cols-1 md:grid-cols-12 py-5 px-8 md:py-20 md:px-12 items-center gap-8 md:gap-0">
            <div className="md:col-span-6 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight md:leading-[48px] mb-3 md:mb-5">
                Questions? <br /> Let's talk
              </h2>
              <p className="text-white text-sm md:text-base leading-6 max-w-md py-5">
                Pricing, technical details, or migration help—we're here.
              </p>
              <a
                href={CONTACT_PAGE_PATH}
                className="block md:inline-flex items-center justify-center px-12 py-4 text-base font-medium text-center text-white bg-black focus:ring-4 focus:ring-primary-300 rounded-sm"
              >
                Contact Us
              </a>
            </div>
            <div className="md:col-span-6">
              <img src="/home/section-7.png" className="" />
            </div>
          </div>
        </section>
      )}
      <footer className="bg-white border-black/[.1] ">
        <p className="md:text-[350px] text-8xl text-center text-[#16292F] leading-none md:mt-14 mb-8">
          VenMail
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            {/* Company Info */}
            <div className="hidden lg:block">
              <div>
                <h3 className="text-sm font-semibold mb-4 text-black">
                  Get Started
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="https://m.venmail.io/register"
                      target="_blank"
                      className="text-sm text-black transition-colors"
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://m.venmail.io/login"
                      target="_blank"
                      className="text-sm text-black transition-colors"
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-sm text-black transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:hidden">
              <h3 className="text-sm font-semibold mb-4 text-black">
                Get Started
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://m.venmail.io/register"
                    target="_blank"
                    className="text-sm text-black transition-colors"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://m.venmail.io/login"
                    target="_blank"
                    className="text-sm text-black transition-colors"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-sm text-black transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-black mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-black transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex justify-center my-8">
            <img src="/logo-black.png" className="h-8 max-w-[120px] object-contain" />
          </div>

          {/* Bottom Section */}
          <div className="mt-6 pt-8 border-t border-gray-200">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="flex flex-wrap gap-4">
                <a
                  href="/resources/terms-of-service"
                  className="text-black text-sm hover:text-gray-600 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="/resources/privacy-policy"
                  className="text-black text-sm hover:text-gray-600 transition-colors"
                >
                  Privacy Policy
                </a>
                <span className="text-black text-sm">
                  © {currentYear} VenMail LLC.
                </span>
              </div>
              
              <div className="flex flex-row space-x-4">
                <a
                  href="https://medium.com/@venmail"
                  className="bg-primary-100 text-black h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary-200 transition-colors"
                  aria-label="Medium"
                >
                  <FaMedium />
                </a>
                <a
                  href="https://www.linkedin.com/company/venmail"
                  className="bg-primary-100 text-black h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://x.com/venmailhq"
                  className="bg-primary-100 text-black h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary-200 transition-colors"
                  aria-label="Twitter X"
                >
                  <BsTwitterX />
                </a>
                <a
                  href="https://www.youtube.com/@venmail"
                  className="bg-primary-100 text-black h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary-200 transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
