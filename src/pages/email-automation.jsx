import React from 'react';
import ProductLayout from '@/components/layout/ProductLayout';
import ProductHero from '@/components/PageSections/ProductHero';
import FeatureCard from '@/components/PageSections/FeatureCard';
import CompactFeatureCard from '@/components/PageSections/CompactFeatureCard';
import { 
  CogIcon,
  DocumentArrowUpIcon,
  CreditCardIcon,
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon,
  GlobeAltIcon,
  BellIcon
} from "@heroicons/react/24/outline";

const EmailAutomationPage = () => {
  const features = [
    {
      icon: (
        <DocumentArrowUpIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Document Intelligence",
      text: "Intelligent document processing with 95% accuracy. Extract structured data from PDFs, Word documents, and Excel spreadsheets using advanced AI pattern recognition.",
    },
    {
      icon: (
        <CreditCardIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Payment Automation",
      text: "Complete payment orchestration platform with Stripe integration, automated receipt generation, and enterprise-grade webhook infrastructure.",
    },
    {
      icon: (
        <UserGroupIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "AI Sales Agent",
      text: "AI-powered sales intelligence system analyzing 980,000+ domains to identify high-value prospects and deliver personalized outreach at scale.",
    },
    {
      icon: (
        <SparklesIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "50+ Extraction Patterns",
      text: "Advanced pattern recognition engine supporting 50+ extraction templates for structured data extraction from unstructured documents.",
    },
    {
      icon: (
        <GlobeAltIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Multi-Language Support",
      text: "Multi-language document processing with enterprise-grade accuracy across English, French, and Spanish communications.",
    },
    {
      icon: (
        <BellIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Automated Follow-ups",
      text: "Intelligent follow-up automation that identifies engagement opportunities and generates contextual responses based on communication patterns.",
    },
  ];

  const boxes = [
    {
      subheading: "Document Processing",
      title: "AI-powered document intelligence",
      description: "Extract text, data, and insights from PDFs, Word documents, and Excel spreadsheets automatically. Support for 50+ extraction patterns.",
      image: "/home/section-document-intelligence.svg",
    },
    {
      subheading: "Payment Integration",
      title: "Complete payment automation",
      description: "Stripe integration with automatic receipt generation and third-party webhook support for seamless payment processing.",
      image: "/home/section-payment-automation.svg",
    },
    {
      subheading: "AI Sales Intelligence",
      title: "Prospect discovery at scale",
      description: "Analyze 980,000+ domains to identify prospects, generate personalized messaging, and automate follow-up sequences.",
      image: "/home/section-sdr-ai.svg",
    },
    {
      subheading: "Workflow Automation",
      title: "End-to-end email workflows",
      description: "Transform emails into automated business processes. Handle document processing, payments, and lead generation automatically.",
      image: "/home/section-ai-workflows.svg",
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<CogIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title={"Enterprise AI Workflow Automation"}
        description={
          "Transform your email infrastructure into an intelligent business automation platform. Leverage advanced AI to process documents, automate payments, and generate qualified leads at scale."
        }
        image={"/home/section-ai-workflows.svg"}
        button1Text={"Start Free Trial"}
        button2Text={"Explore Workflows"}
      />

      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Advanced AI Workflow Capabilities
            </h2>
            <p className="text-gray-500 sm:text-xl">
              Enterprise-grade automation for document processing, payment orchestration, and intelligent lead generation
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
              Enterprise AI Infrastructure
            </h2>
            <p className="text-gray-500 sm:text-xl">
              Scalable AI capabilities designed for mission-critical business operations
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
              Transform Your Business Operations
            </h2>
            <p className="text-gray-500 sm:text-xl mb-8">
              Join thousands of enterprises leveraging AI to automate critical business processes and accelerate growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://m.venmail.io/register"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 rounded-lg"
              >
                Start Free Trial
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

export default EmailAutomationPage;
