import Link from "next/link";

export default function Footer() {
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
    {
      title: "Solutions",
      links: [
        { label: "Sales", href: "/solutions/sales" },
        { label: "Founders", href: "/solutions/founders" },
        { label: "Marketing", href: "/solutions/marketing" },
        { label: "Agency", href: "/solutions/agency" },
        { label: "Freelancers", href: "/solutions/freelancers" },
        { label: "Enterprise", href: "/solutions/enterprise" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Contact Us", href: "/resources/contact-us" },
        { label: "About", href: "/resources/about" },
        { label: "Career", href: "/resources/career" },
        { label: "Join Our Community", href: "/resources/community" },
        { label: "Terms of use", href: "/resources/terms-of-use" },
        {
          label: "Download desktop app",
          href: "/resources/download-desktop-app",
        },
        { label: "Partnership", href: "/resources/partnership" },
      ],
    },
  ];

  return (
    <>
      <section className=" py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="bg-primary-500 grid grid-cols-1 md:grid-cols-12 py-5 px-8 items-center gap-8 md:gap-0">
          <div className="md:col-span-5 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight md:leading-[56px] mb-3 md:mb-5">
              Predict Spam with AI-Powered Insights
            </h2>
            <p className="text-white text-sm md:text-base leading-6">
              Advanced algorithms analyze patterns to identify and filter
              unwanted messages, keeping your inbox focused and efficient.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="flex md:gap-4 items-center md:justify-end">
              <img src="/home/section-7a.svg" className="w-1/2 md:w-auto" />
              <img src="/home/section-7b.svg" className="w-1/2 md:w-auto" />
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-background border-black/[.1] ">
        <p className="md:text-[350px] text-8xl text-center leading-none md:my-32 my-24">
          Venmail
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-12 gap-8">
            {/* Company Info */}
            <div className="col-span-12 md:col-span-6">
              <div>
                <h3 className="text-sm font-semibold mb-4">Get Started</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href=""
                      className="text-sm text-gray-600  hover:text-gray-900  transition-colors"
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="text-sm text-gray-600  hover:text-gray-900  transition-colors"
                    >
                      Sign In
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 grid grid-cols-3 gap-8">
              {/* Footer Sections */}
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-600  hover:text-gray-900  transition-colors"
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
          <img src="/logo-black.png" className="h-8 my-6" />

          {/* Bottom Section */}
          <div className="mt-6 pt-8 border-t border-gray-200 ">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  GitHub
                </a>
              </div>
              <p className="text-sm text-gray-600 ">
                © {currentYear} Venmail Management Inc.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
