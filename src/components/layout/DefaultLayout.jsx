import Header from "./Header";
import Footer from "./Footer";
import { Onest } from "next/font/google";
import { useState } from "react";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header logoVariant="dark" />
      <main className="flex-grow py-5">{children}</main>
      <Footer />
    </>
  );
}
