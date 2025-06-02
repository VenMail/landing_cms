import Image from "next/image";
import { useState, useRef } from "react";
import ProductHero from "@/components/PageSections/ProductHero";
import CompactFeatureCard from "@/components/PageSections/CompactFeatureCard";
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
      text: "Track opens, reads, clicks, and engagement patterns. Get detailed analytics on email performance without privacy concerns.",
    },
    {
      icon: (
        <ShieldCheckIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Email Content Validation",
      text: "Automatically detect duplicate content, grammar issues, broken links, and formatting problems before sending.",
    },
    {
      icon: (
        <ArrowPathIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Smart Follow-up System",
      text: "AI identifies emails needing follow-ups. Automatically generates contextual follow-up content and tracks response patterns.",
    },
    {
      icon: (
        <ChartBarIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Performance Dashboard",
      text: "Monitor delivery rates, engagement metrics, and response times. Optimize your email strategy with actionable insights.",
    },
    {
      icon: (
        <DocumentArrowUpIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Universal Email Import",
      text: "Import from any email service. Support for .zip, .eml, .mbox files and direct IMAP/POP connections.",
    },
    {
      icon: (
        <ServerIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Enterprise Integration",
      text: "Connect with existing email infrastructure. Supports IMAP, POP3, Exchange, and custom email servers.",
    },
  ];

  const boxes = [
    {
      subheading: "Email Performance Analytics",
      title: "Complete email performance visibility",
      description: "Track delivery success, open rates, read rates, and engagement patterns. Identify the best times to send and optimize your email strategy.",
      image: "/sent-panel.png",
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
      subheading: "Flexible Import Options",
      title: "Bring your entire email history",
      description: "Upload email archives in any format or connect directly to your email server. Maintain complete email continuity.",
      image: "/import-options.png",
    },
    {
      subheading: "Direct Server Integration",
      title: "Connect to any email provider",
      description: "Seamlessly integrate with Gmail, Outlook, Exchange, or any IMAP/POP3 email server. Keep your existing email infrastructure.",
      image: "/import-imap-pop.png",
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<CogIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title={"Email automation that actually works"}
        description={
          "Advanced tracking, validation, and follow-up automation that helps you send better emails and never miss important opportunities."
        }
        image={"/product/mail.png"}
        button1Text={"Start Automating"}
        button2Text={"See All Features"}
      />

      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Powerful email automation features
            </h2>
            <p className="text-gray-500 sm:text-xl">
              Everything you need to send professional emails, track engagement, and automate follow-ups
            </p>
          </div>
          <div className="space-y-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="mb-6">{feature.icon}</div>
                <h3 className="mb-4 text-xl font-semibold text-black">{feature.title}</h3>
                <p className="text-gray-400 leading-[26px]">
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
              See it in action
            </h2>
            <p className="text-gray-500 sm:text-xl">
              Real screenshots of our email automation features working behind the scenes
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
    </ProductLayout>
  );
} 