import Image from "next/image";
import { useState, useRef } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuFileMinus } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";
import ProductHero from "@/components/PageSections/ProductHero";
import FeatureCard from "@/components/PageSections/FeatureCard";
import ProductLayout from "@/components/layout/ProductLayout";
import { RxEnvelopeClosed } from "react-icons/rx";

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
    {
      subheading: "instant ai summaries",
      title: "Important stuff finds you",
      description:
        "Urgent items surface first. Key details get highlighted. Never miss client messages",
      image: "/product/mail/feature-3.png",
    },
    {
      subheading: "spam detection",
      title: "Never check spam folders again",
      description:
        "Our system learns which emails matter to you and ensures they land in your primary inbox.",
      image: "/product/mail/feature-4.png",
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<RxEnvelopeClosed className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title={"Process email like you've got a team of assistants"}
        description={
          "Smart task extraction, meeting scheduling, and follow-ups that work quietly in the background."
        }
        image={"/product/mail.png"}
        button1Text={"Get Mail"}
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
