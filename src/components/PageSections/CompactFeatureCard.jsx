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
      <div className="glass-card bg-[#f9f1ef] flex flex-col feature-glow">
        <div className="p-8 sm:p-10 md:p-12 flex-1">
          <p
            className={`uppercase text-base font-medium mb-6 ${
              index === 0 ? "text-primary-700" : "text-black"
            }`}
          >
            {subheading}
          </p>
          <h3 className="mb-8 text-2xl md:text-4xl font-medium md:leading-[48px] text-black">
            {title}
          </h3>
          <p className="mb-8 text-gray-500 leading-[28px]">{description}</p>
          <a href="https://m.venmail.io/register" target="_blank" className="text-base font-semibold cursor-pointer text-primary-600">
            Signup for free
          </a>
        </div>
        <div className="cinematic-frame bg-[#f9f1ef] p-6 sm:p-8 md:p-10">
          <div className="cinematic-vignette rounded-lg overflow-hidden">
            <img
              className="w-full rounded-lg shadow-sm"
              src={image}
              alt={title}
            />
          </div>
        </div>
      </div>
    </>
  );
} 