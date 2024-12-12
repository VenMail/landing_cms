import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Venmail', href: '/product/venmail' },
        { label: 'Prospects', href: '/product/prospects' },
        { label: 'Calendar', href: '/product/calendar' },
        { label: 'Meetings', href: '/product/meetings' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Sales', href: '/solutions/sales' },
        { label: 'Founders', href: '/solutions/founders' },
        { label: 'Marketing', href: '/solutions/marketing' },
        { label: 'Agency', href: '/solutions/agency' },
        { label: 'Freelancers', href: '/solutions/freelancers' },
        { label: 'Enterprise', href: '/solutions/enterprise' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Contact Us', href: '/resources/contact-us' },
        { label: 'About', href: '/resources/about' },
        { label: 'Career', href: '/resources/career' },
        { label: 'Join Our Community', href: '/resources/community' },
        { label: 'Terms of use', href: '/resources/terms-of-use' },
        { label: 'Download desktop app', href: '/resources/download-desktop-app' },
        { label: 'Partnership', href: '/resources/partnership' },
      ],
    },
  ];

  return (
    <footer className="bg-background border-black/[.1] dark:border-white/[.1]">
      <p className='md:text-[350px] text-8xl text-center leading-none md:my-32 my-24'>Venmail</p>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="col-span-12 md:col-span-6">
            <div>
              <h3 className="text-sm font-semibold mb-4">Get Started</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href=''
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    href=''
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
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
                <h3 className="text-sm font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
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
        <img src='/logo-black.png' className='h-8 my-6' />

        {/* Bottom Section */}
        <div className="mt-6 pt-8 border-t border-gray-200 dark:border-gray-800">
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
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Venmail Management Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 