import Image from "next/image";
import { useState, useRef } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuFileMinus } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";
import ProductHero from "@/components/PageSections/ProductHero";
import FeatureCard from "@/components/PageSections/FeatureCard";
import ProductLayout from "@/components/layout/ProductLayout";
import { VideoCameraIcon, ClockIcon, LinkIcon, LockClosedIcon, ShareIcon, CalendarIcon } from "@heroicons/react/24/outline";

export default function Meeting() {
  const features = [
    {
      icon: (
        <ClockIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Email → Meeting",
      text: "'Let's meet next week' becomes a scheduled meeting. Your calendar checked. Time found. Done.",
    },
    {
      icon: (
        <LinkIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "One link does it all",
      text: "Your personal scheduling link learns your preferences. People pick times that work for both.",
    },
    {
      icon: (
        <ShareIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Personal booking pages",
      text: "Beautiful, branded booking pages that reflect your style. Share your availability without sharing your calendar.",
    },
    {
      icon: (
        <CalendarIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Google Calendar sync",
      text: "Two-way sync with your existing calendar. All meetings appear where you expect them.",
    },
    {
      icon: <LockClosedIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "Meetings stay secure",
      text: "Private links. Verified guests. Controlled access. Enterprise-grade security. End-to-end encryption",
    },
  ];

  const boxes = [
    {
      subheading: "Personal Booking",
      title: "Share your booking page",
      description: "Create beautiful booking pages with your branding. Let others schedule meetings based on your availability automatically.",
      image: "/personal_booking.png",
    },
    {
      subheading: "Shareable Link",
      title: "One link books all your meetings",
      description: "Share your scheduling link once, let people pick times that work for both of you.",
      image: "/product/meeting/meeting-feat-1.png",
    },
    {
      subheading: "Schedule",
      title: "Schedule meetings in seconds",
      description: "Pick your times once, booking happens automatically with intelligent conflict detection.",
      image: "/product/meeting/meeting-feat-2.png",
    },
    {
      subheading: "set availability",
      title: "Set your rules, booking handles itself",
      description: "Block off focus time. Set working hours. Define meeting types. Never get double-booked.",
      image: "/product/meeting/meeting-feat-4.png",
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<VideoCameraIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title={"Every meeting moves work forward"}
        description={
          "Auto agendas. Smart summaries. Tracked actions. Beautiful booking pages that make scheduling effortless."
        }
        image={"/product/meetings.png"}
        button1Text={"Schedule Meeting"}
        button2Text={"Compare Pricing"}
      />

      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
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
