import Head from "next/head";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function Help() {
  const helpCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      articles: [
        "Setting up your account",
        "Importing existing emails",
        "Configuring DNS settings",
        "Adding team members",
        "Understanding the dashboard"
      ]
    },
    {
      title: "Email Features",
      icon: "📧",
      articles: [
        "Sending and receiving emails",
        "Using AI-powered compose",
        "Setting up email signatures",
        "Managing folders and labels",
        "Email search and filters"
      ]
    },
    {
      title: "Calendar & Meetings",
      icon: "📅",
      articles: [
        "Setting up your calendar",
        "Creating meeting links",
        "Scheduling meetings",
        "Calendar integrations",
        "Meeting reminders"
      ]
    },
    {
      title: "Automation & AI",
      icon: "🤖",
      articles: [
        "Setting up email automation",
        "Using AI email assistant",
        "Creating workflow rules",
        "Email templates and snippets",
        "Auto-responders"
      ]
    },
    {
      title: "Campaigns & Marketing",
      icon: "📢",
      articles: [
        "Creating email campaigns",
        "Managing subscriber lists",
        "Campaign analytics",
        "A/B testing",
        "Deliverability optimization"
      ]
    },
    {
      title: "Integrations",
      icon: "🔗",
      articles: [
        "Connecting Gmail/Outlook",
        "Setting up Zapier integrations",
        "Webhook configurations",
        "CRM integrations",
        "API documentation"
      ]
    },
    {
      title: "Account & Billing",
      icon: "⚙️",
      articles: [
        "Managing subscription",
        "Upgrading/downgrading plans",
        "Understanding pricing",
        "Billing history",
        "Canceling subscription"
      ]
    },
    {
      title: "Security & Privacy",
      icon: "🔒",
      articles: [
        "Two-factor authentication",
        "Data encryption",
        "Privacy settings",
        "Data export",
        "Account deletion"
      ]
    }
  ];

  const popularArticles = [
    "How to import emails from Gmail",
    "Setting up custom domain email",
    "Understanding AI email features",
    "Troubleshooting email delivery issues",
    "Managing team permissions"
  ];

  return (
    <DefaultLayout>
      <Head>
        <title>Help Center — VenMail Support</title>
        <meta name="description" content="Get help with VenMail's email platform. Find guides, tutorials, and support for all features." />
        <meta property="og:title" content="VenMail Help Center" />
        <meta property="og:description" content="Comprehensive support documentation and guides for VenMail features." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/resources/help" />
      </Head>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Help Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to get the most out of VenMail. Find answers, guides, and support.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <svg
                className="absolute left-4 top-3.5 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularArticles.map((article, index) => (
                <a
                  key={index}
                  href="#"
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-medium text-gray-900">{article}</h3>
                </a>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpCategories.map((category, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {article}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still need help?</h2>
              <p className="text-gray-600 mb-6">
                Our support team is here to help you get the most out of VenMail.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:support@venmail.io"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Email Support
                </a>
                <div className="text-sm text-gray-600">
                  <p>Response time: Within 24 hours</p>
                  <p>Available: Monday - Friday, 9am - 6pm EST</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-primary-600 transition-colors">
                  Video Tutorials →
                </a>
                <a href="#" className="block text-gray-600 hover:text-primary-600 transition-colors">
                  API Documentation →
                </a>
                <a href="#" className="block text-gray-600 hover:text-primary-600 transition-colors">
                  Community Forum →
                </a>
                <a href="#" className="block text-gray-600 hover:text-primary-600 transition-colors">
                  System Status →
                </a>
                <a href="/resources/privacy-policy" className="block text-gray-600 hover:text-primary-600 transition-colors">
                  Privacy Policy →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
