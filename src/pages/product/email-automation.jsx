import Image from "next/image";
import { useState, useRef } from "react";
import ProductHero from "@/components/PageSections/ProductHero";
import FeatureCard from "@/components/PageSections/FeatureCard";
import ProductLayout from "@/components/layout/ProductLayout";
import { 
  EyeIcon, 
  ShieldCheckIcon, 
  DocumentArrowUpIcon, 
  ChartBarIcon, 
  ArrowPathIcon, 
  ServerIcon,
  AutomationIcon,
  CogIcon
} from "@heroicons/react/24/outline";

export default function EmailAutomation() {
  const features = [
    {
      icon: (
        <EyeIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Advanced Email Tracking",
      text: "Comprehensive engagement analytics tracking opens, reads, clicks, and response patterns. Privacy-first approach provides actionable insights without compromising deliverability.",
    },
    {
      icon: (
        <ShieldCheckIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Email Content Validation",
      text: "Advanced content validation system detects duplicate content, grammar issues, broken links, and formatting problems before sending to protect your sender reputation.",
    },
    {
      icon: (
        <ArrowPathIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Smart Follow-up System",
      text: "Intelligent follow-up automation identifies non-responsive communications and generates contextual follow-up content based on conversation history and engagement patterns.",
    },
    {
      icon: (
        <ChartBarIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Performance Dashboard",
      text: "Executive dashboard with real-time delivery metrics, engagement analytics, and response time optimization. Data-driven insights for strategic communication planning.",
    },
    {
      icon: (
        <DocumentArrowUpIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Universal Email Import",
      text: "Universal email import supporting all major formats (.zip, .eml, .mbox) and direct IMAP/POP connections for seamless migration from any email provider.",
    },
    {
      icon: (
        <ServerIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Enterprise Integration",
      text: "Enterprise-grade integration with existing email infrastructure including IMAP, POP3, Exchange, and custom email servers with secure authentication protocols.",
    },
  ];

  const boxes = [
    {
      subheading: "Email Performance Analytics",
      title: "Complete email performance visibility",
      description: "Track delivery success, open rates, read rates, and engagement patterns. Identify the best times to send and optimize your email strategy.",
      image: "/sent_metrics.png",
    },
    {
      subheading: "Automated Follow-ups",
      title: "Never miss a follow-up opportunity",
      description: "AI automatically identifies emails that haven't received responses and suggests contextual follow-up content to maximize engagement.",
      image: "/follow_up.png",
    },
    {
      subheading: "Content Validation",
      title: "Catch issues before they hurt your reputation",
      description: "Advanced content analysis detects duplicate text, formatting issues, broken links, and potential deliverability problems before sending.",
      image: "/validator.png",
    },
    {
      subheading: "Seamless Email Tracking",
      title: "Know exactly when emails are read",
      description: "Privacy-first tracking system that provides detailed engagement metrics without compromising recipient privacy or deliverability.",
      image: "/seamless_track.png",
    },
    {
      subheading: "AI-Powered Writing",
      title: "Write better emails with AI assistance",
      description: "AI rewrites help you craft professional emails, improve clarity, and maintain consistent communication style across all messages.",
      image: "/quick-replies-ai.png",
    },
    {
      subheading: "Flexible Import Options",
      title: "Bring your entire email history",
      description: "Upload email archives in any format or connect directly to your email server. Maintain complete email continuity.",
      image: "/import-options.png",
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<CogIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title={"Professional Email Automation Suite"}
        description={
          "Enterprise-grade email automation with advanced tracking, intelligent content validation, and contextual follow-up generation. Never miss critical business opportunities again."
        }
        image={"/home/section-auto-followups.svg"}
        button1Text={"Start Automating"}
        button2Text={"See All Features"}
      />

      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Professional Email Management
            </h2>
            <p className="text-gray-500 sm:text-xl">
              Advanced automation capabilities for professional communication and engagement tracking
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="mb-2 text-xl text-black">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {boxes.map((box, index) => (
              <FeatureCard
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
    </ProductLayout>
  );
}