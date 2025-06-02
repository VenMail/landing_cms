import Image from "next/image";
import { useState, useRef } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuFileMinus } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";
import ProductHero from "@/components/PageSections/ProductHero";
import FeatureCard from "@/components/PageSections/FeatureCard";
import ProductLayout from "@/components/layout/ProductLayout";
import { RxEnvelopeClosed } from "react-icons/rx";
import { EyeIcon, ShieldCheckIcon, DocumentArrowUpIcon, ChartBarIcon, ArrowPathIcon, ServerIcon } from "@heroicons/react/24/outline";

export default function Mail() {
  const features = [
    {
      icon: (
        <HiOutlineBolt className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Write perfect emails instantly",
      text: 'Type "Schedule meeting next week" and watch as your email gets written, calendar gets checked.',
    },
    {
      icon: (
        <EyeIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Seamless email tracking",
      text: "Know when emails are opened, read, and clicked. Track engagement without pixel issues.",
    },
    {
      icon: (
        <ShieldCheckIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Email validator",
      text: "Catch duplicate content, typos, and formatting issues before sending. Ensure professional delivery.",
    },
    {
      icon: (
        <LuFileMinus className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Emails turn into action automatically",
      text: "Email → Action Meetings schedule. Tasks track. Follow-ups set.",
    },
    {
      icon: (
        <ChartBarIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Sent panel management",
      text: "Track delivery rates, open rates, and responses. Manage your email performance dashboard.",
    },
    {
      icon: (
        <ArrowPathIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Automated follow-ups",
      text: "Never miss a follow-up opportunity. Auto-detect when emails need responses.",
    },
    {
      icon: (
        <DocumentArrowUpIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Import from anywhere",
      text: "Upload .zip, .eml, .mbox files or connect via IMAP/POP. Bring your entire email history.",
    },
    {
      icon: <BsListUl className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "Important emails find you",
      text: "Client emails surface first. Deal-related messages get flagged. Urgent requests jump the queue.",
    },
  ];

  const boxes = [
    {
      subheading: "Email Performance",
      title: "Track and optimize your emails",
      description: "Monitor delivery rates, open rates, and engagement. Get insights into your email performance with detailed analytics.",
      image: "/sent-panel.png",
    },
    {
      subheading: "Follow-up Automation",
      title: "Never miss a follow-up",
      description: "Automatically detect emails that need responses. Generate follow-up content and track opportunities for better engagement.",
      image: "/follow_up.png",
    },
    {
      subheading: "Email Validation",
      title: "Catch issues before sending",
      description: "Detect duplicate content, formatting problems, and potential issues. Ensure your emails are professional and error-free.",
      image: "/validator.png",
    },
    {
      subheading: "Seamless Tracking",
      title: "Know when emails are read",
      description: "Track opens, reads, and clicks without complex setup. Get detailed engagement metrics for every email sent.",
      image: "/seamless_track.png",
    },
    {
      subheading: "Import Options",
      title: "Bring your existing emails",
      description: "Upload email files or connect via IMAP/POP. Import your entire email history and continue where you left off.",
      image: "/import-options.png",
    },
    {
      subheading: "IMAP/POP Support",
      title: "Connect your email server",
      description: "Seamlessly connect to any email provider using IMAP or POP protocols. Keep your existing email setup.",
      image: "/import-imap-pop.png",
    },
    {
      subheading: "AI Email Rewrites",
      title: "Emails write themselves",
      description: "Email style matches yours. Responses adapt to context. Perfect tone every time.",
      image: "/product/mail/feature-1.png",
    },
    {
      subheading: "Auto Task Extraction",
      title: "Tasks extract themselves",
      description: "Meeting request? Added to calendar. Action item? Created in tasks. Follow-up needed? Scheduled automatically.",
      image: "/product/mail/feature-2.png",
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<RxEnvelopeClosed className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title={"Process email like you've got a team of assistants"}
        description={
          "Smart task extraction, meeting scheduling, tracking, validation, and automated follow-ups that work quietly in the background."
        }
        image={"/product/mail.png"}
        button1Text={"Get Mail"}
        button2Text={"Compare Pricing"}
      />

      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="mb-2 text-xl text-black">{feature.title}</h3>
                <p className="text-gray-400 ">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white ">
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
