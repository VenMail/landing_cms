import React from 'react';
import ProductLayout from '@/components/layout/ProductLayout';
import ProductHero from '@/components/PageSections/ProductHero';
import FeatureCard from '@/components/PageSections/FeatureCard';
import CompactFeatureCard from '@/components/PageSections/CompactFeatureCard';
import { 
  ShieldCheckIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  ArrowPathIcon,
  ServerIcon,
  EyeIcon,
  BookmarkIcon
} from "@heroicons/react/24/outline";

const VenmailAgentPage = () => {
  const features = [
    {
      icon: (
        <ShieldCheckIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Reputation Intelligence",
      text: "Advanced contact reputation scoring with 95% accuracy. Analyze emails, domains, and social profiles to identify trustworthy communications and potential risks.",
    },
    {
      icon: (
        <MagnifyingGlassIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Multi-Source Search",
      text: "Intelligent search across Google, Bing, DuckDuckGo, and social platforms. Extract contact information from 50+ data sources in real-time.",
    },
    {
      icon: (
        <ClockIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Real-time Verification",
      text: "Instant email validation and phone number verification. Reduce bounce rates by 98% with automated contact data verification.",
    },
    {
      icon: (
        <DocumentTextIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Smart Data Extraction",
      text: "AI-powered extraction of contact details from web pages, documents, and social profiles. Support for 25+ data formats and languages.",
    },
    {
      icon: (
        <GlobeAltIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Global Coverage",
      text: "Worldwide contact intelligence with support for international formats and multi-language name recognition across 150+ countries.",
    },
    {
      icon: (
        <UserGroupIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Social Intelligence",
      text: "Comprehensive social profile analysis across LinkedIn, Twitter, and professional networks to enrich contact data with social context.",
    },
  ];

  const boxes = [
    {
      subheading: "Popup Interface",
      title: "Quick lookup from anywhere",
      description: "Instant access to contact intelligence directly from your browser popup. Search by name, email, domain, or company with smart auto-detection.",
      image: "/venmail-agent/popup-interface.png",
    },
    {
      subheading: "Full Page Dashboard",
      title: "Comprehensive analysis workspace",
      description: "Advanced search interface with history management, bulk operations, and detailed reputation analytics for power users.",
      image: "/venmail-agent/full-dashboard.png",
    },
    {
      subheading: "Search History",
      title: "Persistent query management",
      description: "Automatically save and manage all search queries with export functionality. Review, filter, and export contact intelligence data.",
      image: "/venmail-agent/full-dashboard%20(Custom).png",
    },
    {
      subheading: "Real-time Results",
      title: "Live contact discovery",
      description: "Watch as the extension scours multiple data sources in real-time, aggregating contact information and reputation signals instantly.",
      image: "/venmail-agent/full-dashboard%20(Custom)%20(1).png",
    },
  ];

  const capabilities = [
    {
      icon: <ChartBarIcon className="h-6 w-6 text-primary-600" />,
      title: "Reputation Scoring",
      description: "Advanced algorithm analyzes 50+ signals to generate trustworthiness scores"
    },
    {
      icon: <CogIcon className="h-6 w-6 text-primary-600" />,
      title: "Customizable Settings",
      description: "Fine-tune search sources, cache duration, and data retention policies"
    },
    {
      icon: <ArrowPathIcon className="h-6 w-6 text-primary-600" />,
      title: "Smart Caching",
      description: "Intelligent caching system reduces API calls and improves response times"
    },
    {
      icon: <ServerIcon className="h-6 w-6 text-primary-600" />,
      title: "Background Processing",
      description: "Continuous monitoring and analysis runs silently in the background"
    },
    {
      icon: <EyeIcon className="h-6 w-6 text-primary-600" />,
      title: "Privacy First",
      description: "All processing happens locally with optional cloud sync for history"
    },
    {
      icon: <BookmarkIcon className="h-6 w-6 text-primary-600" />,
      title: "Export & Backup",
      description: "Export search history and results in multiple formats for compliance"
    }
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<ShieldCheckIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title={"Contact Intelligence & Reputation Scoring"}
        description={
          "Transform your browser into a powerful contact intelligence platform. Instantly verify emails, analyze reputation, and extract contact information from across the web with enterprise-grade accuracy."
        }
        image={"/venmail-agent-full.png"}
        button1Text={"Install Extension"}
        button2Text={"View Documentation"}
      />

      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Advanced Contact Intelligence Features
            </h2>
            <p className="text-gray-500 sm:text-xl">
              Enterprise-grade contact verification and reputation analysis for modern business operations
            </p>
          </div>
          <div className="space-y-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="mb-6">{feature.icon}</div>
                <h3 className="mb-4 text-xl font-semibold text-black">{feature.title}</h3>
                <p className="text-gray-600 leading-[26px]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Powerful Interface Options
            </h2>
            <p className="text-gray-500 sm:text-xl">
              Choose between quick popup access or comprehensive full-page analysis
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boxes.map((box, index) => (
              <CompactFeatureCard
                key={index}
                index={index}
                subheading={box.subheading}
                title={box.title}
                description={box.description}
                image={box.image}
                count={boxes.length}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Technical Capabilities
            </h2>
            <p className="text-gray-500 sm:text-xl mb-8">
              Built with performance, privacy, and accuracy in mind
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  {capability.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {capability.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Transform Your Contact Intelligence
            </h2>
            <p className="text-gray-500 sm:text-xl mb-8">
              Join thousands of professionals using Venmail Agent to verify contacts and reduce risk
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chrome.google.com/webstore/detail/venmail-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 rounded-lg"
              >
                Install Extension
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </ProductLayout>
  );
};

export default VenmailAgentPage;
