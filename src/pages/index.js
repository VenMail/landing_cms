import Image from "next/image";
import { useState, useRef } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("rewrite");
  const buttonRefs = useRef({});

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    buttonRefs.current[tabName]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  const tabContent = {
    rewrite: {
      title: "AI Rewrite",
      description:
        "Craft emails that resonate, connect, and drive results with Personalise Your Email Tune.",
      image: "/section-4a.png",
    },
    prospects: {
      title: "Generate Prospects",
      description:
        "Craft emails that resonate, connect, and drive results with Personalise Your Email Tune.",
      image: "/section-4b.png",
    },
    schedule_meetings: {
      title: "Schedule Meetings",
      description:
        "Craft emails that resonate, connect, and drive results with Personalise Your Email Tune.",
      image: "/section-4c.png",
    },
    summary: {
      title: "Instant EmailSummary",
      description:
        "Craft emails that resonate, connect, and drive results with Personalise Your Email Tune.",
      image: "/section-4d.png",
    },
    analytics: {
      title: "Mail Analytics",
      description:
        "Craft emails that resonate, connect, and drive results with Personalise Your Email Tune.",
      image: "/section-4e.png",
    },
    spam: {
      title: "Spam Detection",
      description:
        "Craft emails that resonate, connect, and drive results with Personalise Your Email Tune.",
      image: "/section-4f.png",
    },
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 text-center md:text-start">
            <h1 className="max-w-3xl mb-4 text-3xl md:text-7xl font-medium tracking-tight md:leading-[96px] dark:text-white">
              AI Powered <br /> Email Experience
            </h1> 
            <p className="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Venmail provides small business and enterprise with the tools to
              grow.
            </p>
            <a
              href="#"
              className="md:inline-flex block items-center justify-center px-5 py-3 mb-4 md:mr-3 text-base font-medium text-center text-black border border-black hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Contact sales
            </a>
            <a
              href="#"
              className="md:inline-flex block items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
            </a>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/section-1.png" alt="mockup" />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-2xl md:text-3xl tracking-tight font-medium text-gray-900 dark:text-white">
              Better together. Venmail everything in one.
            </h2>
          </div>
          <div className="relative overflow-x-auto">
            <div
              className="absolute top-1/2 left-0 w-[85%] h-1"
              style={{ backgroundColor: "#F9F1EF" }}
            ></div>

            <div className="grid grid-cols-5 gap-8 relative min-w-max">
              <div
                className="md:h-[180px] w-full rounded-lg shadow-lg flex items-center justify-center relative z-10"
                style={{ backgroundColor: "#F9F1EF" }}
              >
                <svg
                  className="w-16 h-16 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>

              <div
                className="md:h-[180px] w-full rounded-lg shadow-lg flex items-center justify-center relative z-10"
                style={{ backgroundColor: "#F9F1EF" }}
              >
                <svg
                  className="w-16 h-16 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>

              <div
                className="md:h-[180px] w-full rounded-lg shadow-lg flex items-center justify-center relative z-10"
                style={{ backgroundColor: "#F9F1EF" }}
              >
                <svg
                  className="w-16 h-16 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              <div
                className="md:h-[180px] w-full rounded-lg shadow-lg flex items-center justify-center relative z-10"
                style={{ backgroundColor: "#F9F1EF" }}
              >
                <svg
                  className="w-16 h-16 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>

              <div className="md:h-[180px] w-full bg-primary-500 rounded-lg shadow-lg flex items-center justify-center relative z-10">
                <svg
                  className="w-16 h-16 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <h2 className="text-xl md:text-7xl md:leading-[75px]">
          Our software suite empowers both small businesses and enterprises,
          unlocking opportunities and driving growth regardless of challenges
        </h2>
      </section>
      <section className="bg-white dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="md:col-span-3 flex flex-col md:justify-between">
            <div className="overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar">
              <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 min-w-max lg:min-w-0">
                {Object.entries(tabContent).map(([key, _]) => (
                  <button
                    key={key}
                    ref={(el) => buttonRefs.current[key] = el}
                    className={`whitespace-nowrap text-left py-4 lg:border-b-2 ${activeTab === key
                      ? "border-b-2 border-primary-600 text-gray-900 dark:text-white"
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
              <p className="text-gray-600 dark:text-gray-400 mb-3 text-lg">
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
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-2xl md:text-3xl tracking-tight font-medium text-gray-900 dark:text-white">
             Choose a better <span className="text-primary-500">Email Experience</span>
            </h2>
          </div>
          <img className="" src="/section-6.png" />
        </div>
      </section>
      <section className="bg-primary-500 dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 md:py-5 md:px-8 items-center gap-8 md:gap-0">
          <div className="md:col-span-5 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight md:leading-[56px] mb-3 md:mb-5">
              Predict Spam with AI-Powered Insights
            </h2>
            <p className="text-white text-sm md:text-base leading-6">
              Advanced algorithms analyze patterns to identify and filter unwanted messages, keeping your inbox focused and efficient.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="flex md:gap-4 items-center md:justify-end">
              <img src="/section-7a.svg" className="w-1/2 md:w-auto" />
              <img src="/section-7b.svg" className="w-1/2 md:w-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
