import Image from "next/image";
import { useState, useRef } from "react";
import ProductHero from "@/components/PageSections/ProductHero";
import CompactFeatureCard from "@/components/PageSections/CompactFeatureCard";
import ProductLayout from "@/components/layout/ProductLayout";
import { 
  ShareIcon, 
  ClockIcon, 
  CalendarIcon, 
  UserGroupIcon,
  CloudIcon,
  BellIcon,
  LinkIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";

export default function Booking() {
  const features = [
    {
      icon: (
        <ShareIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Personal Booking Pages",
      text: "Create beautiful, branded booking pages. Share a single link and let others book meetings based on your availability.",
    },
    {
      icon: (
        <ClockIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Smart Availability Management",
      text: "Set working hours, buffer times, and meeting preferences. Prevent back-to-back meetings and protect focus time.",
    },
    {
      icon: (
        <CloudIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Google Calendar Sync",
      text: "Two-way sync with Google Calendar. All meetings automatically appear in your existing calendar workflow.",
    },
    {
      icon: (
        <UserGroupIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Team Scheduling",
      text: "Coordinate team availability. Round-robin assignments. Find the best meeting times for groups automatically.",
    },
    {
      icon: (
        <BellIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Automated Reminders",
      text: "Email and SMS reminders for attendees. Reduce no-shows with customizable reminder sequences.",
    },
    {
      icon: (
        <ChartBarIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Booking Analytics",
      text: "Track booking patterns, popular time slots, and meeting metrics. Optimize your availability strategy.",
    },
  ];

  const boxes = [
    {
      subheading: "Personal Booking",
      title: "Beautiful booking pages that convert",
      description: "Create professional booking pages with your branding. Set availability preferences, meeting types, and durations. Share one link for all your scheduling needs.",
      image: "/personal_booking.png",
    },
    {
      subheading: "Smart Date Detection",
      title: "AI-powered meeting scheduling",
      description: "Automatically detect dates mentioned in emails and convert them to schedulable events. One-click booking from any email conversation.",
      image: "/date-scheduler.png",
    },
    {
      subheading: "Calendar Integration",
      title: "Import and sync with Google Calendar",
      description: "Seamlessly connect with your existing Google Calendar. All events sync automatically, preventing double bookings and maintaining your current workflow.",
      image: "/scheduling-setup.png",
    },
    {
      subheading: "Meeting Management",
      title: "Streamlined meeting coordination",
      description: "Schedule meetings directly from email requests. Automatic calendar checking prevents conflicts and ensures optimal meeting times.",
      image: "/quick-meeting-scheduler.png",
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<CalendarIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title={"Share your availability, not your calendar"}
        description={
          "Create beautiful booking pages, sync with Google Calendar, and let others schedule meetings automatically. No more email tennis."
        }
        image={"/personal_booking.png"}
        button1Text={"Create Booking Page"}
        button2Text={"See Demo"}
      />

      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Scheduling made simple
            </h2>
            <p className="text-gray-500 sm:text-xl">
              Everything you need to manage meetings, bookings, and availability in one place
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
              Powerful booking features
            </h2>
            <p className="text-gray-500 sm:text-xl">
              See how easy it is to set up professional booking pages and manage your schedule
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
              Ready to streamline your scheduling?
            </h2>
            <p className="text-gray-500 sm:text-xl mb-8">
              Join thousands of professionals who have eliminated back-and-forth scheduling emails
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
} 