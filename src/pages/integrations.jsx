import Head from "next/head";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function Integrations() {
  const integrationCategories = [
    {
      title: "Email Providers",
      description: "Connect your existing email accounts and migrate seamlessly",
      integrations: [
        {
          name: "Gmail",
          description: "Import existing Gmail accounts, sync contacts, and maintain your current workflow",
          features: ["Credential-based import", "Contact synchronization", "Thread preservation", "Label mapping"],
          setup: "Automatic OAuth connection with guided setup",
          icon: "📧"
        },
        {
          name: "Outlook",
          description: "Seamlessly integrate with Microsoft Outlook and Exchange",
          features: ["OAuth authentication", "Calendar sync", "Contact import", "Folder structure mapping"],
          setup: "One-click Microsoft 365 integration",
          icon: "🔷"
        },
        {
          name: "IMAP/SMTP",
          description: "Connect any email provider supporting standard protocols",
          features: ["Universal compatibility", "Custom server settings", "SSL/TLS support", "Bulk import capability"],
          setup: "Manual server configuration with guided wizard",
          icon: "⚙️"
        }
      ]
    },
    {
      title: "Automation Platforms",
      description: "Connect with popular automation and workflow tools",
      integrations: [
        {
          name: "Zapier",
          description: "Connect VenMail with 5,000+ apps without coding",
          features: ["Real-time triggers", "Multi-step Zaps", "Custom field mapping", "Premium app support"],
          setup: "Connect via OAuth and start building Zaps immediately",
          icon: "⚡"
        },
        {
          name: "Make (Integromat)",
          description: "Visual workflow builder for complex integrations",
          features: ["Drag-and-drop scenarios", "Error handling", "Data transformation", "Scheduled execution"],
          setup: "API key authentication with full scenario library",
          icon: "🔧"
        },
        {
          name: "n8n",
          description: "Open-source workflow automation for self-hosted solutions",
          features: ["Fair-code license", "Self-hosting option", "Custom nodes", "Community workflows"],
          setup: "Webhook endpoints with JSON payload configuration",
          icon: "🔗"
        }
      ]
    },
    {
      title: "CRM & Sales Tools",
      description: "Sync with your favorite CRM and sales platforms",
      integrations: [
        {
          name: "Salesforce",
          description: "Two-way sync with Salesforce CRM and Sales Cloud",
          features: ["Lead/contact sync", "Opportunity tracking", "Activity logging", "Custom object mapping"],
          setup: "Connected App setup with OAuth 2.0",
          icon: "☁️"
        },
        {
          name: "HubSpot",
          description: "Integrate with HubSpot CRM and Marketing Hub",
          features: ["Contact synchronization", "Deal tracking", "Email logging", "Marketing automation"],
          setup: "Private app integration with scoped permissions",
          icon: "🎯"
        },
        {
          name: "Pipedrive",
          description: "Connect with Pipedrive for streamlined sales processes",
          features: ["Deal synchronization", "Activity sync", "Contact updates", "Pipeline management"],
          setup: "API token authentication with webhook support",
          icon: "📊"
        }
      ]
    },
    {
      title: "Webhook-Supported Platforms",
      description: "Any platform that supports webhooks can integrate with VenMail",
      integrations: [
        {
          name: "Email Marketing Platforms",
          description: "Connect with Mailchimp, SendGrid, ConvertKit, and more",
          features: ["Campaign triggers", "List synchronization", "Unsubscribe handling", "Analytics tracking"],
          setup: "Configure webhook URLs for real-time event sync",
          icon: "📢"
        },
        {
          name: "Project Management",
          description: "Integrate with Asana, Trello, Jira, and Monday.com",
          features: ["Task creation", "Status updates", "Comment notifications", "Deadline reminders"],
          setup: "Webhook endpoints for project event automation",
          icon: "📋"
        },
        {
          name: "Communication Tools",
          description: "Connect with Slack, Microsoft Teams, and Discord",
          features: ["Message notifications", "Channel updates", "File sharing", "Status alerts"],
          setup: "Incoming webhook URLs for message posting",
          icon: "💬"
        },
        {
          name: "E-commerce Platforms",
          description: "Integrate with Shopify, WooCommerce, and BigCommerce",
          features: ["Order notifications", "Customer updates", "Shipping alerts", "Inventory sync"],
          setup: "Event-based webhooks for store automation",
          icon: "🛒"
        }
      ]
    }
  ];

  const webhookEvents = [
    {
      event: "Email Received",
      description: "Trigger when new emails arrive in specified inboxes",
      payload: "Includes sender, subject, body, attachments, and metadata"
    },
    {
      event: "Email Sent",
      description: "Fire when emails are successfully sent through VenMail",
      payload: "Contains recipient, subject, timestamp, and delivery status"
    },
    {
      event: "Email Opened",
      description: "Track when recipients open your emails",
      payload: "Includes open timestamp, location, and device information"
    },
    {
      event: "Link Clicked",
      description: "Monitor clicks on links within your emails",
      payload: "Contains clicked URL, timestamp, and recipient details"
    },
    {
      event: "Campaign Status",
      description: "Get updates on email campaign performance",
      payload: "Includes delivery rates, open rates, click rates, and bounces"
    },
    {
      event: "Meeting Scheduled",
      description: "Notify when meetings are booked via VenMail scheduling",
      payload: "Contains meeting details, participants, and calendar information"
    }
  ];

  return (
    <DefaultLayout>
      <Head>
        <title>VenMail Integrations — Connect with Your Favorite Tools</title>
        <meta name="description" content="Integrate VenMail with Gmail, Zapier, Salesforce, HubSpot, and thousands of other apps via webhooks. Automate your email workflows." />
        <meta property="og:title" content="VenMail Integrations" />
        <meta property="og:description" content="Connect VenMail with your favorite tools and automate your email workflows." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/integrations" />
      </Head>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Integrations that work for you
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect VenMail with the tools you already use. From email providers to automation platforms, 
              we make integration seamless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5,000+</div>
              <div className="text-gray-600">Apps via Zapier</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Webhook Compatible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">OAuth 2.0</div>
              <div className="text-gray-600">Secure Authentication</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Real-time</div>
              <div className="text-gray-600">Data Synchronization</div>
            </div>
          </div>

          {integrationCategories.map((category, index) => (
            <div key={category.title} className={`mb-20 ${index > 0 ? 'pt-12 border-t border-gray-200' : ''}`}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.integrations.map((integration) => (
                  <div key={integration.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{integration.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900">{integration.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{integration.description}</p>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {integration.features.map((feature) => (
                          <li key={feature} className="text-sm text-gray-600 flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <div className="text-sm">
                        <span className="font-medium text-gray-900">Setup:</span>
                        <span className="text-gray-600 ml-2">{integration.setup}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Webhook Events</h2>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              VenMail sends real-time webhook events for any action. Connect any platform that supports webhooks 
              to create custom automations.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webhookEvents.map((event) => (
                <div key={event.event} className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{event.event}</h3>
                  <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">Payload:</span> {event.payload}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to integrate?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Start connecting VenMail with your favorite tools today.
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
