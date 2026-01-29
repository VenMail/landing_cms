import Image from "next/image";
import { useState, useRef } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuFileMinus } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";
import ProductHero from "@/components/PageSections/ProductHero";
import FeatureCard from "@/components/PageSections/FeatureCard";
import ProductLayout from "@/components/layout/ProductLayout";
import { RxEnvelopeClosed } from "react-icons/rx";
import { EyeIcon, ShieldCheckIcon, DocumentArrowUpIcon, ChartBarIcon, ArrowPathIcon, ServerIcon, CursorArrowRaysIcon, CalendarDaysIcon, TagIcon } from "@heroicons/react/24/outline";

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
        <CalendarDaysIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Dates become clickable",
      text: "Dates in emails automatically turn into clickable meeting schedulers. One click to schedule from any email.",
    },
    {
      icon: (
        <CursorArrowRaysIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Highlight text → instant task",
      text: "Select any text in your email and instantly turn it into a task. Quick task creation has never been easier.",
    },
    {
      icon: (
        <TagIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Smart AI labels",
      text: "AI automatically categorizes emails with smart labels. Use natural language prompts to organize your inbox.",
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
      icon: <BsListUl className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "Important emails find you",
      text: "Client emails surface first. Deal-related messages get flagged. Urgent requests jump the queue.",
    },
  ];

  const boxes = [
    {
      subheading: "Quick Meeting Scheduling",
      title: "Dates in emails become clickable",
      description: "Any date mentioned in an email automatically becomes a clickable meeting scheduler. Schedule meetings instantly without leaving your inbox.",
      image: "/quick-meeting-scheduler.png",
    },
    {
      subheading: "Instant Task Creation",
      title: "Highlight text to create tasks",
      description: "Select any text in your email and instantly convert it to a task. Perfect for capturing action items from conversations.",
      image: "/quick_tasks.png",
    },
    {
      subheading: "AI-Powered Organization",
      title: "Smart labels with natural language",
      description: "Use AI prompts to automatically categorize and label your emails. Organize your inbox with intelligent, context-aware labels.",
      image: "/smart-labels.png",
    },
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
      subheading: "Fast Sort & Organization",
      title: "Sort through 75 emails in 5 minutes",
      description: "Power mode lets you process emails at lightning speed. Smart sorting and AI-powered organization help you tackle your inbox efficiently.",
      image: "/fast_sort.png",
    },
    {
      subheading: "Advanced Date Scheduling",
      title: "Smart date detection and scheduling",
      description: "Automatically detect dates in emails and convert them to schedulable events. Advanced AI ensures no meeting opportunity is missed.",
      image: "/date-scheduler.png",
    },
    {
      subheading: "Professional Dark Mode",
      title: "Work comfortably in any lighting",
      description: "Optimized dark mode interface for reduced eye strain during late-night work sessions. Professional appearance with enhanced readability.",
      image: "/dark_mode2.png",
    },
    {
      subheading: "AI-Powered Dark Mode",
      title: "Smart dark mode with AI integration",
      description: "Advanced dark mode that maintains AI functionality and visual clarity. Perfect for extended work sessions and low-light environments.",
      image: "/dark_mode_ai.png",
    },
    {
      subheading: "Comprehensive Sent Metrics",
      title: "Detailed email performance analytics",
      description: "Track delivery rates, open rates, engagement metrics, and more. Get comprehensive insights into your email communication effectiveness.",
      image: "/sent_metrics.png",
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<RxEnvelopeClosed className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title={"Process email like you've got a team of assistants"}
        description={
          "Smart task extraction, meeting scheduling, tracking, validation, and automated follow-ups. Dates become clickable, text becomes tasks."
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
