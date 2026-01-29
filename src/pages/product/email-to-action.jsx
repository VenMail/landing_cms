import Image from "next/image";
import { useState, useRef } from "react";
import ProductHero from "@/components/PageSections/ProductHero";
import CompactFeatureCard from "@/components/PageSections/CompactFeatureCard";
import ProductLayout from "@/components/layout/ProductLayout";
import { 
  CursorArrowRaysIcon, 
  CalendarDaysIcon, 
  TagIcon, 
  BoltIcon,
  ClockIcon,
  CheckCircleIcon,
  SparklesIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

export default function EmailToAction() {
  const features = [
    {
      icon: (
        <CalendarDaysIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Clickable Date Magic",
      text: "Any date in an email becomes a clickable meeting scheduler. 'Let's meet next Tuesday' → click Tuesday → meeting scheduled.",
    },
    {
      icon: (
        <CursorArrowRaysIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Highlight → Instant Task",
      text: "Select any text in your email and convert it to a task instantly. Perfect for capturing action items from conversations.",
    },
    {
      icon: (
        <TagIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "AI-Powered Smart Labels",
      text: "Use natural language prompts to automatically organize your emails. 'Star Wars style emails' → AI categorizes accordingly.",
    },
    {
      icon: (
        <BoltIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Instant Action Recognition",
      text: "AI automatically detects action items, deadlines, and follow-ups from email content. Nothing falls through the cracks.",
    },
    {
      icon: (
        <ClockIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Context-Aware Scheduling",
      text: "AI understands meeting context and suggests optimal times based on email content and your availability patterns.",
    },
    {
      icon: (
        <CheckCircleIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Smart Task Prioritization",
      text: "Tasks created from emails are automatically prioritized based on sender importance, urgency keywords, and deadlines.",
    },
  ];

  const boxes = [
    {
      subheading: "Quick Meeting Scheduling",
      title: "Turn dates into meetings instantly",
      description: "AI recognizes dates mentioned in emails and makes them clickable. One click schedules the meeting, checks availability, and sends invitations.",
      image: "/date-scheduler.png",
    },
    {
      subheading: "Effortless Task Creation",
      title: "Highlight text, create tasks",
      description: "Select any text in your email and instantly convert it to a task. Set priority, due dates, and assignments without leaving your inbox.",
      image: "/quick_tasks.png",
    },
    {
      subheading: "Intelligent Organization",
      title: "Smart labels with AI prompts",
      description: "Describe how you want emails categorized using natural language. AI learns your preferences and auto-labels incoming messages.",
      image: "/smart-labels.png",
    },
    {
      subheading: "Fast Email Processing",
      title: "Sort through 75 emails in 5 minutes",
      description: "Power mode helps you process emails at lightning speed. Smart sorting and AI-powered organization tackle your inbox efficiently.",
      image: "/fast_sort.png",
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<SparklesIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title={"From email to action in one click"}
        description={
          "Dates become clickable meetings. Text becomes tasks. Emails get smart labels. Transform your inbox into a productivity powerhouse."
        }
        image={"/quick_tasks.png"}
        button1Text={"Start Automating"}
        button2Text={"See Demo"}
      />

      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Email intelligence that actually works
            </h2>
            <p className="text-gray-500 sm:text-xl">
              Stop manually converting email content into actions. Let AI do the heavy lifting.
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
              See the magic in action
            </h2>
            <p className="text-gray-500 sm:text-xl">
              Watch how seamlessly email content transforms into actionable items
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
              Ready to transform your email workflow?
            </h2>
            <p className="text-gray-500 sm:text-xl mb-8">
              Join thousands of professionals who have eliminated manual email processing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://m.venmail.io/register"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 rounded-lg"
              >
                Start Free Trial
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/product/mail"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg"
              >
                Explore All Features
              </a>
            </div>
          </div>
        </div>
      </section>
    </ProductLayout>
  );
} 