import Image from "next/image";
import { useState, useRef } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuFileMinus } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";
import ProductHero from "@/components/PageSections/ProductHero";
import FeatureCard from "@/components/PageSections/FeatureCard";
import ProductLayout from "@/components/layout/ProductLayout";
import { CalendarIcon, Square3Stack3DIcon, BellIcon, Squares2X2Icon, CloudIcon, ShareIcon, ClockIcon } from "@heroicons/react/24/outline";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function Calendar() {
  const features = [
    {
      icon: (
        <Square3Stack3DIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Smart time blocking",
      text: "Spots conflicts. Blocks focus time. Guards your schedule.",
    },
    {
      icon: (
        <CloudIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Import Google Calendar",
      text: "Seamlessly sync your existing Google Calendar events. All appointments and meetings in one place.",
    },
    {
      icon: (
        <ShareIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Personal booking page",
      text: "Share your availability. Let others book meetings automatically. No more scheduling back-and-forth.",
    },
    {
      icon: (
        <CalendarIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Clickable dates in email",
      text: "Dates mentioned in emails become clickable. One click turns any date into a scheduled meeting.",
    },
    {
      icon: (
        <BellIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Never drop the ball",
      text: "Meeting prep → Follow-ups → Task deadlines All tracked automatically",
    },
    {
      icon: <Squares2X2Icon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "Everyone on the same page",
      text: "See team availability. Find meeting times instantly. Schedule in one click.",
    },
    {
      icon: <ClockIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "Availability management",
      text: "Set working hours. Block focus time. Define meeting preferences. Your schedule, your rules.",
    },
  ];

  const boxes = [
    {
      subheading: "Quick Scheduling",
      title: "Dates in emails become meetings",
      description: "Any date mentioned in an email automatically becomes clickable. Schedule meetings instantly without switching between apps.",
      image: "/quick-meeting-scheduler.png",
    },
    {
      subheading: "Personal Booking",
      title: "Share your booking page",
      description: "Set your availability preferences and let others book meetings with you automatically. No more email tennis.",
      image: "/personal_booking.png",
    },
    {
      subheading: "Organize meetings",
      title: "Meeting request in your inbox?",
      description: "Calendar checks availability and schedules instantly. No more back-and-forth",
      image: "/product/calendar/feature-1.png",
    },
    {
      subheading: "Google Integration",
      title: "Import your Google Calendar",
      description: "Seamlessly bring all your existing events, meetings, and appointments into one unified calendar experience.",
      image: "/scheduling-setup.png",
    },
    {
      subheading: "create events",
      title: "Calendar that prevents problems",
      description: "Spots scheduling conflicts. Warns about tight timing. Shows team availability. Blocks focus time automatically ",
      image: "/product/calendar/feature-2.png",
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<CalendarIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title={"Your calendar works with your inbox now"}
        description={
          "Emails turn into events automatically. Dates become clickable. Import Google Calendar and share your booking page."
        }
        image={"/product/calendar.png"}
        button1Text={"Schedule Event"}
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
