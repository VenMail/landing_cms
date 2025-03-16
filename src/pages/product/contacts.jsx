import Image from "next/image";
import { useState, useRef } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuFileMinus } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";
import ProductHero from "@/components/PageSections/ProductHero";
import FeatureCard from "@/components/PageSections/FeatureCard";
import ProductLayout from "@/components/layout/ProductLayout";
import { FiUserCheck, FiUsers, FiUpload } from "react-icons/fi";
import { LuUserPlus } from "react-icons/lu";
export default function Mail() {
  const features = [
    {
      icon: (
        <FiUserCheck className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Find prospects that match",
      text: "Target ideal companies, get decision-maker contacts, start conversations.",
    },
    {
      icon: (
        <FiUsers className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Track relationships",
      text: "See full history with any contact: emails, meetings, deals, and next steps.",
    },
    {
      icon: <FiUpload className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "Import and sync",
      text: "One click to import contacts from anywhere. Stay synced across your whole team.",
    },
  ];

  const boxes = [
    {
      subheading: "shareable link",
      title: "Find ideal customers instantly",
      description: "Craft emails that resonate, connect, and drive results with Personalise Your Email Tune.",
      image: "/product/contact/feature-1.png",
    },
    {
      subheading: "schedule",
      title: "Never lose track of relationships",
      description: "Let the technology do the heavy lifting so you can focus on what truly matters. ",
      image: "/product/contact/feature-2.png",
    },
    {
      subheading: "secured",
      title: "Find any contact in seconds",
      description:
        "Search by name, company, conversation history, or last interaction",
      image: "/product/contact/feature-3.png",
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<LuUserPlus className="w-8 h-8 md:w-16 md:h-16 text-primary-600" />}
        title={"Your contacts become a sales engine"}
        description={
          " See prospect data alongside every email. Track engagement. Never miss follow-up opportunities."
        }
        image={"/product/contacts.png"}
        button1Text={"Generate Prospects"}
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
