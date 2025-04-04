import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer({ hideFooterJumbo = false }) {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Venmail", href: "/product/mail" },
        { label: "Prospects", href: "/product/contacts" },
        { label: "Calendar", href: "/product/calendar" },
        { label: "Meetings", href: "/product/meeting" },
      ],
    },
    // {
    //   title: "Solutions",
    //   links: [
    //     { label: "Founders", href: "/solutions/founders" },
    //     { label: "Marketing", href: "/solutions/marketing" },
    //     { label: "Agency", href: "/solutions/agency" },
    //     { label: "Freelancers", href: "/solutions/freelancers" },
    //   ],
    // },
    {
      title: "Resources",
      links: [
        // { label: "Contact Us", href: "/contact-us" },
        // { label: "About", href: "/about-us" },
        // { label: "Career", href: "/career" },
        // { label: "Join Our Community", href: "/resources/community" },
        { label: "Terms of Service", href: "/resources/terms-of-service" },
        { label: "Privacy Policy", href: "/resources/privacy-policy" },
        { label: "Partnership", href: "/resources/partner" },
        { label: "Cookie Policy", href: "/resources/cookie-policy" },
        { label: "Cookie & CCPA Policy", href: "/resources/cookie_ccpa-policy" },
        { label: "AI Principles", href: "/resources/ai-principles" },
        // {
        //   label: "Download desktop app",
        //   href: "/resources/download-desktop-app",
        // },
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
                Have a specific <br /> question? Let's talk
              </h2>
              <p className="text-white text-sm md:text-base leading-6 max-w-md py-5">
                Get pricing details, technical specs, or migration help from our team.
              </p>
              <a
                href="/contact-us"
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
          Venmail
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-12 gap-8">
            {/* Company Info */}
            <div className="col-span-12 md:col-span-6 hidden md:block">
              <div>
                <h3 className="text-sm font-semibold mb-4 text-black">
                  Get Started
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href=""
                      className="text-sm text-black transition-colors"
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="text-sm text-black transition-colors"
                    >
                      Sign In
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="md:hidden block">
                <h3 className="text-sm font-semibold mb-4 text-black">
                  Get Started
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href=""
                      className="text-sm text-black transition-colors"
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="text-sm text-black transition-colors"
                    >
                      Sign In
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
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-black  transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <img src="/logo-black.png" className="h-8 my-8" />

          {/* Bottom Section */}
          <div className="mt-6 pt-8 border-t border-gray-200 ">
            <div className="flex flex-col md:flex-row justify-start md:justify-between md:items-center">
              <div className="flex flex-wrap mb-4 md:mb-0">
                <a
                  href="/resources/terms-of-service"
                  className="text-black text-sm mr-4 mb-4 cursor-pointer"
                >
                  Terms of Service
                </a>
                <a
                  href="/resources/privacy-policy"
                  className="text-black text-sm mr-4 mb-4 cursor-pointer"
                >
                  Privacy Policy
                </a>
                <a href="#" className="text-black text-sm cursor-pointer">
                  © {currentYear} Venmail Management Inc.
                </a>
              </div>
              {/* <p className="text-sm text-gray-600 ">
                © {currentYear} Venmail Management Inc.
              </p> */}
              <div className="flex flex-row space-x-6 mb-4 md:mb-0">
                <a
                  href="#"
                  className="bg-primary-100 text-black h-8 w-8 md:h-12 md:w-12 flex items-center justify-center cursor-pointer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-primary-100 text-black h-8 w-8 md:h-12 md:w-12 flex items-center justify-center cursor-pointer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="bg-primary-100 text-black h-8 w-8 md:h-12 md:w-12 flex items-center justify-center cursor-pointer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="bg-primary-100 text-black h-8 w-8 md:h-12 md:w-12 flex items-center justify-center cursor-pointer"
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
