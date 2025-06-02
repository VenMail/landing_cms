import Image from "next/image";
import { useState, useRef } from "react";

export default function CompactFeatureCard({
  index,
  title,
  subheading,
  description,
  image,
  count,
}) {
  return (
    <>
      <div className="bg-[#f9f1ef] flex flex-col">
        <div className="p-6 sm:p-8 md:p-10 flex-1">
          <p
            className={`uppercase text-base font-medium mb-4 ${
              index === 0 ? "text-primary-700" : "text-black"
            }`}
          >
            {subheading}
          </p>
          <h3 className="mb-6 text-2xl md:text-4xl font-medium md:leading-[48px] text-black">
            {title}
          </h3>
          <p className="mb-6 text-gray-500 leading-[24px]">{description}</p>
          <a href="https://m.venmail.io/register" target="_blank" className="text-base font-semibold cursor-pointer text-primary-600">
            Signup for free
          </a>
        </div>
        <div className="overflow-hidden">
          <img
            className="w-full h-48 sm:h-56 md:h-64 object-cover object-top"
            src={image}
            alt={title}
          />
        </div>
      </div>
    </>
  );
} 