import Image from "next/image";
import { useState, useRef } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuFileMinus } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";
import ProductHero from "@/components/PageSections/ProductHero";
import FeatureCard from "@/components/PageSections/FeatureCard";
import Pricing from "../PageSections/Pricing";

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Pricing />
    </>
  );
}
