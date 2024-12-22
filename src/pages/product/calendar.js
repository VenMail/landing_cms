import Image from "next/image";
import { useState, useRef } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuFileMinus } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";
import ProductHero from "@/components/PageSections/ProductHero";
import FeatureCard from "@/components/PageSections/FeatureCard";
import ProductLayout from "@/components/layout/ProductLayout";
import { CalendarIcon, Square3Stack3DIcon, BellIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

export default function Mail() {
  const features = [
    {
      icon: (
        <Square3Stack3DIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Easily manage your schedule",
      text: "Take control of your time manage your schedule with ease.",
    },
    {
      icon: (
        <BellIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Multiple Reminders",
      text: "Stay on top of your tasks set multiple reminders and never miss a beat.",
    },
    {
      icon: <Squares2X2Icon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "Organize your time effectively",
      text: "Organize your time effectively and stay on top of your tasks achieve more and meet your goals with ease.",
    },
  ];

  const boxes = [
    {
      subheading: "Organize meetings",
      title: "Easily view your schedule",
      description: "Craft emails that resonate, connect, and drive results with Personalise Your Email Tune.",
      image: "/product/calendar/feature-1.png",
    },
    {
      subheading: "create events",
      title: "Schedule an event on the calendar.",
      description: "Let the technology do the heavy lifting so you can focus on what truly matters. ",
      image: "/product/calendar/feature-2.png",
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<CalendarIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title={"Personalized Calendar, Stay Organized and On Track"}
        description={
          "Plan your days with ease, stay organized, and keep on track everything you need in one personalized calendar"
        }
        image={"/product/calendar.png"}
        button1Text={"Schedule Event"}
        button2Text={"Compare Pricing"}
      />

      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {features.map((feature) => (
              <div>
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
