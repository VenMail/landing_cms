import Image from "next/image";
import { useState, useRef } from "react";
import { RxEnvelopeClosed } from "react-icons/rx";
import { GoCalendar } from "react-icons/go";
import { GoDeviceCameraVideo } from "react-icons/go";
import { LuUserPlus } from "react-icons/lu";
import CompareSlider from "@/components/PageSections/CompareSlider";
import CustomLayout from "@/components/layout/CustomLayout";
export default function Home() {
  const [activeTab, setActiveTab] = useState("rewrite");
  const buttonRefs = useRef({});

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    buttonRefs.current[tabName]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const tabContent = {
    rewrite: {
      title: "AI Rewrite",
      description: "Write better emails, faster, with AI-powered rewrites.",
      image: "/home/section-4a.png",
    },
    prospects: {
      title: "Generate Prospects",
      description: "Find and connect with the right leads instantly.",
      image: "/home/section-4b.png",
    },
    schedule_meetings: {
      title: "Schedule Meetings",
      description: "Book meetings effortlessly, straight from your inbox.",
      image: "/home/section-4c.png",
    },
    summary: {
      title: "Instant EmailSummary",
      description: "Get the gist of long emails in seconds with AI summaries.",
      image: "/home/section-4d.png",
    },
    analytics: {
      title: "Mail Analytics",
      description: "Track email performance and gain actionable insights.",
      image: "/home/section-4e.png",
    },
    spam: {
      title: "Spam Detection",
      description: "Eliminate spam and phishing with advanced AI filters.",
      image: "/home/section-4f.png",
    },
  };

  return (
    <CustomLayout logoVariant="light" headerColor="#16292F">
      <section className="bg-[#16292F]">
        <div className="grid max-w-screen-xl px-4 mx-auto md:gap-8 xl:gap-0 py-16 md:grid-cols-12">
          <div className="mr-auto place-self-center md:col-span-12 text-center md:text-start">
          <p className="uppercase text-white mb-3">about</p>
            <h1 className="max-w-4xl mb-4 text-4xl md:text-6xl font-medium tracking-tight md:leading-[96px] text-white">
              Building the Backbone of the Email Economy
            </h1>
            <a
              href="/careers"
              className="md:inline-flex block items-center justify-center px-5 py-3 mb-4 md:mr-3 text-base font-medium text-center text-white border border-white"
            >
              Explore Careers
            </a>
            <a
              href="#"
              className="md:inline-flex block items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary-600 focus:ring-4 focus:ring-primary-300 "
            >
              Get started
            </a>
          </div>
          <div className="mt-5 lg:col-span-12 lg:flex">
            <img src="/about-bg.png" alt="mockup" />
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-4 mx-auto max-w-screen-xl md:py-44 md:px-6">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="uppercase text-sm text-black mb-5">our mission</p>
            <h2 className="text-xl font-semibold md:text-5xl text-black md:leading-[56px]">
              Our mission at Venmail is to revolutionize email communication by
              building a robust, seamless infrastructure that empowers
              businesses and individuals to unlock the full potential of the
              email economy.
            </h2>
          </div>
          <div className="lg:mt-0 md:col-span-5 flex justify-end ">
            <img src="/about/mission.svg" alt="mockup" />
          </div>
        </div>
      </section>
      <section className="bg-primary-50">
        <div className="py-20 px-4 mx-auto max-w-screen-xl md:py-44 md:px-6">
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="uppercase text-sm text-black mb-5">our story</p>
              <h2 className="text-xl font-semibold md:text-5xl text-black md:leading-[56px]">
                Our mission at Venmail is to revolutionize email communication
                by building a robust, seamless infrastructure that empowers
                businesses and individuals to unlock the full potential of the
                email economy.
              </h2>
            </div>
            <div className="lg:mt-0 md:col-span-5 flex justify-end ">
              <img src="/about/story.svg" alt="mockup" />
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
