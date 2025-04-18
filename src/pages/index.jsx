import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { RxEnvelopeClosed } from "react-icons/rx";
import { GoCalendar } from "react-icons/go";
import { GoDeviceCameraVideo } from "react-icons/go";
import { LuUserPlus } from "react-icons/lu";
import CompareSlider from "@/components/PageSections/CompareSlider";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Testimonial from "@/components/PageSections/Testimonial";
import { PricingSlider, pricingPlans } from "./pricing";
import VideoPlayer from "@/components/PageSections/VideoPlayer";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("rewrite");
  const buttonRefs = useRef({});
  const [loadingProgress, setLoadingProgress] = useState(0); // For the loading bar
  const intervalRef = useRef(null);
  

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
      title: "Instant Email Summary",
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

  const tabs = Object.keys(tabContent);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    resetLoading();
    buttonRefs.current[tabName]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const resetLoading = () => {
    clearInterval(intervalRef.current);
    setLoadingProgress(0);
    startAutoLoading();
  };

  const startAutoLoading = () => {
    intervalRef.current = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          const currentIndex = tabs.indexOf(activeTab);
          const nextIndex = (currentIndex + 1) % tabs.length;
          setActiveTab(tabs[nextIndex]);
          return 0;
        }
        return prev + 1;
      });
    }, 50); // Adjust speed of loading here
  };

  useEffect(() => {
    startAutoLoading();
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [activeTab]);

  return (
    <section className="bg-white py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="md:col-span-3 flex flex-col md:justify-between">
          <div className="overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar">
            <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 min-w-max lg:min-w-0">
              {Object.entries(tabContent).map(([key, _]) => (
                <div key={key} className="flex flex-col w-full">
                  <button
                    ref={(el) => (buttonRefs.current[key] = el)}
                    className={`whitespace-nowrap text-sm text-left py-4 ${
                      activeTab === key
                        ? " text-primary-600"
                        : "border-transparent text-gray-500"
                    } text-xl font-medium transition-colors`}
                    onClick={() => handleTabClick(key)}
                  >
                    {_.title}
                  </button>
                  {/* Loading bar */}
                  <div className="h-[1px] md:block hidden w-full bg-gray-200">
                    <div
                      className="h-[1px] bg-orange-500 transition-all duration-100"
                      style={{
                        width:
                          activeTab === key ? `${loadingProgress}%` : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden block mt-6 lg:mt-0">
            <img
              src={tabContent[activeTab].image}
              alt={`${activeTab} Dashboard`}
              className="rounded-lg shadow-lg w-full h-auto transition-all duration-300"
            />
          </div>

          <div className="mt-6">
            <p className="text-gray-600  mb-3 text-lg">
              {tabContent[activeTab].description}
            </p>
            <a
              href="#"
              className="block md:inline-flex cursor-pointer items-center justify-center px-4 py-2 text-base font-medium text-center text-white bg-black focus:ring-4 focus:ring-primary-300"
            >
              Signup for Free
            </a>
          </div>
        </div>
        <div className="hidden md:block col-span-9">
          <img
            src={tabContent[activeTab].image}
            alt={`${tabContent[activeTab].title} Dashboard`}
            className="rounded-lg shadow-lg w-full h-auto transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

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
    <DefaultLayout>
      <section className="bg-white ">
        <div className="grid max-w-screen-xl px-4 py-16 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
          <div className="mr-auto place-self-center md:col-span-7 text-center md:text-start">
            <h1 className="max-w-3xl mb-4 text-3xl md:text-7xl font-medium tracking-tight md:leading-[96px] text-black">
            Email that works as hard as you do
            </h1>
            <p className="max-w-lg mb-6 font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            Your inbox with a built-in assistant: Turns emails into meetings, tasks, and leads. Gmail-level polish at half a dollar per user.
            </p>

            <a
              href="https://app.venmail.io"
              className="md:inline-flex block cursor-pointer items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary-600 focus:ring-4 focus:ring-primary-300 "
            >
              Get Started for Free
            </a>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/home/section-1.png" alt="mockup" />
          </div>
        </div>
      </section>
      <section className="bg-white ">
        <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-2xl md:text-3xl tracking-tight font-medium text-gray-900 ">
              Everything lives in your inbox now.
            </h2>
          </div>
          <div className="relative overflow-x-auto">
            <div
              className="absolute top-1/2 left-0 w-[85%] h-1"
              style={{ backgroundColor: "#F9F1EF" }}
            ></div>

            <div className="grid grid-cols-5 gap-2 md:gap-8 relative ">
              <div
                className="h-20 md:h-[150px] w-full rounded-md flex items-center justify-center relative z-10"
                style={{ backgroundColor: "#F9F1EF" }}
              >
                <RxEnvelopeClosed className="w-8 h-8 md:w-16 md:h-16 text-primary-600" />
              </div>

              <div
                className="h-20 md:h-[150px] w-full rounded-md flex items-center justify-center relative z-10"
                style={{ backgroundColor: "#F9F1EF" }}
              >
                <GoCalendar className="w-8 h-8 md:w-16 md:h-16 text-primary-600" />
              </div>

              <div
                className="h-20 md:h-[150px] w-full rounded-md flex items-center justify-center relative z-10"
                style={{ backgroundColor: "#F9F1EF" }}
              >
                <GoDeviceCameraVideo className="w-8 h-8 md:w-16 md:h-16 text-primary-600" />
              </div>

              <div
                className="h-20 md:h-[150px] w-full rounded-md flex items-center justify-center relative z-10"
                style={{ backgroundColor: "#F9F1EF" }}
              >
                <LuUserPlus className="w-8 h-8 md:w-16 md:h-16 text-primary-600" />
              </div>

              <div className="h-20 md:h-[150px] w-full bg-primary-500 rounded-md flex items-center justify-center relative z-10">
                <img src="/logo-icon-white.png" alt="logo-icon-white" className="h-8 w-8 md:w-16 md:h-16" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white ">
        <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-20 lg:px-6">
          <div className="rounded-3xl">
            <VideoPlayer />
          </div>
        </div>
      </section>
      {/*Add video player here */}
      <section className="bg-white  py-8 px-4 max-w-screen-xl lg:py-16 mx-auto lg:px-6">
        <h2 className="text-xl md:text-6xl text-black md:leading-[75px] max-w-4xl">
        Stop managing email. Let it manage itself. Every message automatically turns into the right kind of work.
        </h2>
      </section>
      {/* <section className="bg-white hidden  py-8 px-4 mx-auto max-w-screen-xl lg:py-20 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="md:col-span-3 flex flex-col md:justify-between">
            <div className="overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar">
              <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 min-w-max lg:min-w-0">
                {Object.entries(tabContent).map(([key, _]) => (
                  <button
                    key={key}
                    ref={(el) => (buttonRefs.current[key] = el)}
                    className={`whitespace-nowrap text-sm text-left py-4 lg:border-b-2 ${
                      activeTab === key
                        ? "border-b-2 border-primary-600 text-gray-900 "
                        : "border-transparent text-gray-500"
                    } text-xl font-medium transition-colors`}
                    onClick={() => handleTabClick(key)}
                  >
                    {_.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden block mt-6 lg:mt-0">
              <img
                src={tabContent[activeTab].image}
                alt={`${activeTab} Dashboard`}
                className="rounded-lg shadow-lg w-full h-auto transition-all duration-300"
              />
            </div>

            <div className="mt-6">
              <p className="text-gray-600  mb-3 text-lg">
                {tabContent[activeTab].description}
              </p>
              <a
                href="#"
                className="block md:inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-white bg-black focus:ring-4 focus:ring-primary-300"
              >
                Signup for Free
              </a>
            </div>
          </div>
          <div className="hidden md:block col-span-9">
            <img
              src={tabContent[activeTab].image}
              alt={`${tabContent[activeTab].title} Dashboard`}
              className="rounded-lg shadow-lg w-full h-auto transition-all duration-300"
            />
          </div>
        </div>
      </section> */}
      <TabComponent />
      <Testimonial />
      {/* <section className="bg-white ">
        <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-32 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-2xl md:text-6xl tracking-tight leading-loose font-medium text-gray-900 ">
              40% more productive at 1/10th the cost
            </h2>
          </div>
          <div className="rounded-3xl shadow-md md:h-[750px]">
            <CompareSlider />
          </div>
        </div>
      </section> */}
      <PricingSlider pricingPlans={pricingPlans} hasButton={true} />
    </DefaultLayout>
  );
}
