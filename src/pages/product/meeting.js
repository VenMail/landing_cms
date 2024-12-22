import Image from "next/image";
import { useState, useRef } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuFileMinus } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";
import ProductHero from "@/components/PageSections/ProductHero";
import FeatureCard from "@/components/PageSections/FeatureCard";
import ProductLayout from "@/components/layout/ProductLayout";
import { VideoCameraIcon, ClockIcon, LinkIcon, LockClosedIcon } from "@heroicons/react/24/outline";


export default function Mail() {
  const features = [
    {
      icon: (
        <ClockIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Set Availability",
      text: "Scheduling takes care of the details—focus on what matters most.",
    },
    {
      icon: (
        <LinkIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Shareable Link",
      text: "Let your links do the heavy lifting share effortlessly, and stay connected with ease.",
    },
    {
      icon: <LockClosedIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "Secured Meeting",
      text: "Let security take care of the details enjoy stress-free, protected meetings.",
    },
  ];

  const boxes = [
    {
      subheading: "AI Email Rewrites",
      title: "Share Links, Simplify Access",
      description: "Effortlessly generate and share links to keep everyone connected and on the same page.",
      image: "/product/meeting/meeting-feat-1.png",
    },
    {
      subheading: "Auto Task Extraction",
      title: "Effortless Scheduling Made Easy",
      description: "Streamline your scheduling process and plan meetings quickly and efficiently your way, every time.",
      image: "/product/meeting/meeting-feat-2.png",
    },
    {
      subheading: "instant ai summaries",
      title: "Safeguard Your Inbox, Anytime, Anywheres",
      description:
        "Protect your inbox with reliable security, ensuring peace of mind and easy access anytime, anywhere.",
        image: "/product/meeting/meeting-feat-3.png",
      },
    {
      subheading: "spam detection",
      title: "Control Your Schedule with Ease",
      description:
        "Manage your time efficiently and stay in control set your availability with ease.",
        image: "/product/meeting/meeting-feat-4.png",
      },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<VideoCameraIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title={"Transform Meetings into Results in Record Time"}
        description={
          "Effortless scheduling and collaboration to make every meeting meaningful."
        }
        image={"/product/meetings.png"}
        button1Text={"Schedule Meeting"}
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
