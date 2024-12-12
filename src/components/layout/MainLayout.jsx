import Header from './Header';
import Footer from './Footer';
import { Onest } from "next/font/google";
import { useState } from "react";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export default function MainLayout({ children }) {
  return (
    <div className={`flex flex-col min-h-screen sm:p-8 ${onest.variable} font-[family-name:var(--font-onest)]`}>
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
} 