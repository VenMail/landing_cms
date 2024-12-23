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
      title: "Personalise your Email Tune",
      text: "Craft emails that resonate, connect, and drive results with Personalise your Email Tune.",
    },
    {
      icon: (
        <LuFileMinus className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Ready Made Task Powered by AI",
      text: "Let the technology do the heavy lifting so you can focus on what truly matters",
    },
    {
      icon: <BsListUl className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "Stay Ahead, Never Miss a Key Detail",
      text: "Save time, boost productivity, and never miss an important insight again.",
    },
  ];

  const boxes = [
    {
      subheading: "AI Email Rewrites",
      title: "Personalise Your Email Tune",
      description: "Craft emails that resonate, connect, and drive results with Personalise Your Email Tune.",
      image: "/product/mail/feature-1.png",
    },
    {
      subheading: "Auto Task Extraction",
      title: "Ready Made Task Powered by AI",
      description: "Let the technology do the heavy lifting so you can focus on what truly matters. ",
      image: "/product/mail/feature-2.png",
    },
    {
      subheading: "instant ai summaries",
      title: "Stay Ahead, Never Miss a Key Detail",
      description:
        "Save time, boost productivity, and never miss an important insight again. Stay informed with less effort and more clarity.",
      image: "/product/mail/feature-3.png",
    },
    {
      subheading: "spam detection",
      title: "Identify and Prevent Suspicious Activity Before It Happens",
      description:
        "Protect your platform and users from unwanted disruptions with our advanced spam detection system.",
      image: "/product/mail/feature-4.png",
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<RxEnvelopeClosed className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title={"Start leveraging AI automation"}
        description={
          "Our cutting-edge AI-powered email automation tool is designed to save you time and eliminate manual tasks."
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
