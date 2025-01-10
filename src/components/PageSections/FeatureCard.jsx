import Image from "next/image";
import { useState, useRef } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuFileMinus } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";
import ProductHero from "@/components/PageSections/ProductHero";

export default function FeatureCard({
  index,
  title,
  subheading,
  description,
  image,
  count,
}) {
  return (
    <>
      <div
        className={`bg-[#f9f1ef] ${
          count === 3 && index === 2
            ? "col-span-full grid grid-cols-1 md:grid-cols-2 gap-8"
            : "flex flex-col"
        }`}
      >
        <div className="p-6 sm:p-8 md:p-10 flex-1">
          <p
            className={`uppercase text-base font-medium mb-4 ${
              index === 0 ? "text-primary-700" : "text-black"
            }`}
          >
            {subheading}
          </p>
          <h3 className="mb-6 text-3xl md:text-5xl font-medium md:leading-[56px] text-black">
            {title}
          </h3>
          <p className="mb-6 text-gray-500  leading-[24px]">{description}</p>
          <a href="#" className="text-base font-semibold cursor-pointer text-primary-600">
            Signup for free
          </a>
        </div>
        <img
          className={`${
            count === 3 && index === 2 ? "w-full mt-auto self-end pt-16" : "w-full mt-auto"
          }`}
          src={image}
          alt={title}
        />
      </div>
    </>
  );
}
