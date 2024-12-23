import Image from "next/image";
import { useState, useRef } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuFileMinus } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";
import ProductHero from "@/components/PageSections/ProductHero";
import FeatureCard from "@/components/PageSections/FeatureCard";
import Pricing from "../PageSections/Pricing";
import FAQs from "../PageSections/FAQs";
import DefaultLayout from "./DefaultLayout";
export default function ProductLayout({ children }) {
  return (
    <DefaultLayout>
      {children}
      <Pricing />
      <FAQs />
    </DefaultLayout>
  );
}
