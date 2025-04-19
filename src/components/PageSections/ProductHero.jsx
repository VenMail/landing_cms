import Image from "next/image";
import { useState, useRef } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuFileMinus } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";

export default function ProductHero({subheading, title, description, button1Text, button1Icon, button2Text, image}) {
  return (
    <section className="bg-white ">
      <div className="grid max-w-screen-xl px-4 py-16 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
        <div className="mr-auto place-self-center md:col-span-6 text-center md:text-start">
          <p className="mb-3 text-sm flex justify-center md:justify-start"><span>{subheading}</span></p>
          <h1 className="max-w-2xl mb-4 text-black text-3xl md:text-6xl font-medium tracking-tight md:leading-[72px]">
            {title}
          </h1>
          <p className="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            {description}
          </p>
          <a
            href="https://app.venmail.io/register"
            target="_blank"
            className="md:inline-flex cursor-pointer block items-center justify-center px-5 py-3 mb-4 md:mr-3 text-base font-medium text-center text-white bg-primary-600 focus:ring-4 focus:ring-primary-30"
          >
            {button1Text}
          </a>
          <a
            href="/pricing"
            className="md:inline-flex cursor-pointer block items-center justify-center px-5 py-3 text-base font-medium text-center text-black border border-black focus:ring-4 focus:ring-gray-100  "
          >
            {button2Text}
          </a>
        </div>
        <div className="lg:mt-0 lg:col-span-6 lg:flex">
          <img src={image} alt="mockup" />
        </div>
      </div>
    </section>
  );
}
