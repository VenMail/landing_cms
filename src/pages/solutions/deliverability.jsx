import Head from "next/head";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function Deliverability() {
  const deliverabilityFeatures = [
    {
      title: "Domain Authentication",
      description: "Complete DNS setup and authentication protocols",
      features: ["SPF records", "DKIM signatures", "DMARC policies", "BIMI support"]
    },
    {
      title: "IP Reputation Management",
      description: "Dedicated IP addresses with warm-up protocols",
      features: ["Shared and dedicated IPs", "Automatic warm-up", "Reputation monitoring", "Blacklist prevention"]
    },
    {
      title: "Content Optimization",
      description: "AI-powered content analysis and optimization",
      features: ["Spam score checking", "Subject line testing", "Content filtering", "Image optimization"]
    },
    {
      title: "Analytics & Monitoring",
      description: "Real-time deliverability metrics and insights",
      features: ["Open rate tracking", "Bounce analysis", "Complaint monitoring", "Geographic insights"]
    }
  ];

  const deliverabilityStats = [
    { metric: "99.2%", description: "Average deliverability rate" },
    { metric: "< 0.1%", description: "Spam complaint rate" },
    { metric: "24/7", description: "Reputation monitoring" },
    { metric: "15min", description: "Issue detection time" }
  ];

  const bestPractices = [
    {
      title: "List Hygiene",
      description: "Maintain clean, engaged email lists",
      tips: [
        "Regular bounce processing",
        "Remove inactive subscribers",
        "Confirm opt-in consent",
        "Monitor engagement metrics"
      ]
    },
    {
      title: "Content Guidelines",
      description: "Follow email marketing best practices",
      tips: [
        "Avoid spam trigger words",
        "Balance text and images",
        "Use clear subject lines",
        "Include physical address"
      ]
    },
    {
      title: "Sending Patterns",
      description: "Establish consistent sending habits",
      tips: [
        "Gradual volume increases",
        "Consistent sending schedules",
        "Segment your audience",
        "Test before bulk sends"
      ]
    }
  ];

  return (
    <DefaultLayout>
      <Head>
        <title>Email Deliverability — VenMail Platform</title>
        <meta name="description" content="Ensure your emails reach the inbox with VenMail's advanced deliverability tools, domain authentication, and real-time monitoring." />
        <meta property="og:title" content="Email Deliverability" />
        <meta property="og:description" content="Advanced email deliverability platform with 99.2% average inbox placement rate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/solutions/deliverability" />
      </Head>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Email Deliverability That Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your emails to the inbox, not the spam folder. VenMail's deliverability platform ensures 
              your messages reach their destination every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {deliverabilityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Deliverability Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {deliverabilityFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 mb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Support Team</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our deliverability experts are here to help you maintain optimal inbox placement rates. 
                From DNS setup to content optimization, we've got you covered.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600 mb-2">&lt; 1hr</div>
                  <div className="text-gray-600">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600 mb-2">100%</div>
                  <div className="text-gray-600">Expert Team</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Best Practices</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {bestPractices.map((practice, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{practice.title}</h3>
                  <p className="text-gray-600 mb-4">{practice.description}</p>
                  <ul className="space-y-2">
                    {practice.tips.map((tip) => (
                      <li key={tip} className="text-sm text-gray-600 flex items-start">
                        <span className="text-primary-500 mr-2 mt-1">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Improve Your Deliverability?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of businesses that trust VenMail for their email deliverability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://m.venmail.io/register"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-black hover:bg-gray-800 transition-colors"
              >
                Start Free
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-800 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
