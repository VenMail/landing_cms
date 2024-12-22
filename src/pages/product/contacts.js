import Image from "next/image";
import { useState, useRef } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuFileMinus } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";
import ProductHero from "@/components/PageSections/ProductHero";
import FeatureCard from "@/components/PageSections/FeatureCard";
import ProductLayout from "@/components/layout/ProductLayout";
import { FiUserCheck, FiUsers, FiUpload } from "react-icons/fi";

export default function Mail() {
  const features = [
    {
      icon: (
        <FiUserCheck className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Generate Prospects",
      text: "Effortlessly generate high-quality prospects connect with the right leads and drive business growth.",
    },
    {
      icon: (
        <FiUsers className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Manage Contacts",
      text: "Organize and manage your contacts seamlessly stay connected, nurture relationships, and build  network",
    },
    {
      icon: <FiUpload className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "Import Contacts",
      text: "Quickly import your contacts and stay connected—manage relationships efficiently and effortlessly.",
    },
  ];

  const boxes = [
    {
      subheading: "shareable link",
      title: "Personalise Your Email Tune",
      description: "Craft emails that resonate, connect, and drive results with Personalise Your Email Tune.",
      image: "/product/contact/feature-1.png",
    },
    {
      subheading: "schedule",
      title: "Automatic sync from everywhere",
      description: "Let the technology do the heavy lifting so you can focus on what truly matters. ",
      image: "/product/contact/feature-2.png",
    },
    {
      subheading: "secured",
      title: "Find your contact instantly",
      description:
        "Save time, boost productivity, and never miss an important insight again. Stay informed with less effort and more clarity.",
      image: "/product/contact/feature-3.png",
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={"CONTACT"}
        title={"Manage Your Contacts Easily and Efficiently"}
        description={
          " Keep your contacts organized and easily accessible stay connected with clients, colleagues, and friends in one convenient place."
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
