import Header from "./Header";
import Footer from "./Footer";
import { Onest } from "next/font/google";
import { useState } from "react";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export default function CustomLayout({ children, logoVariant, headerColor, textColor }) {
  return (
    <>
      <Header logoVariant={logoVariant} bgColor={headerColor} textColor={textColor} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
