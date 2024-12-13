import Image from "next/image";
import { useState, useRef } from "react";
import { RxEnvelopeClosed } from "react-icons/rx";
import { GoCalendar } from "react-icons/go";
import { GoDeviceCameraVideo } from "react-icons/go";
import { LuUserPlus } from "react-icons/lu";

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
      image: "/home/section-4a.png",
    },
    prospects: {
      title: "Generate Prospects",
      description:
        "Craft emails that resonate, connect, and drive results with Personalise Your Email Tune.",
      image: "/home/section-4b.png",
    },
    schedule_meetings: {
      title: "Schedule Meetings",
      description:
        "Craft emails that resonate, connect, and drive results with Personalise Your Email Tune.",
      image: "/home/section-4c.png",
    },
    summary: {
      title: "Instant EmailSummary",
      description:
        "Craft emails that resonate, connect, and drive results with Personalise Your Email Tune.",
      image: "/home/section-4d.png",
    },
    analytics: {
      title: "Mail Analytics",
      description:
        "Craft emails that resonate, connect, and drive results with Personalise Your Email Tune.",
      image: "/home/section-4e.png",
    },
    spam: {
      title: "Spam Detection",
      description:
        "Craft emails that resonate, connect, and drive results with Personalise Your Email Tune.",
      image: "/home/section-4f.png",
    },
  };

  return (
    <>
      <section className="bg-white ">
        <div className="grid max-w-screen-xl px-4 py-16 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
          <div className="mr-auto place-self-center md:col-span-7 text-center md:text-start">
            <h1 className="max-w-3xl mb-4 text-3xl md:text-7xl font-medium tracking-tight md:leading-[96px] text-black">
              AI Powered <br /> Email Experience
            </h1> 
            <p className="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              Venmail provides small business and enterprise with the tools to
              grow.
            </p>
            <a
              href="#"
              className="md:inline-flex block items-center justify-center px-5 py-3 mb-4 md:mr-3 text-base font-medium text-center text-black border border-black hover:bg-gray-100 focus:ring-4 focus:ring-gray-100   "
            >
              Contact sales
            </a>
            <a
              href="#"
              className="md:inline-flex block items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
            >
              Get started
            </a>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/home/section-1.png" alt="mockup" />
          </div>
        </div>
      </section>
      <section className="bg-white ">
        <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-2xl md:text-3xl tracking-tight font-medium text-gray-900 ">
              Better together. Venmail everything in one.
            </h2>
          </div>
          <div className="relative overflow-x-auto">
            <div
              className="absolute top-1/2 left-0 w-[85%] h-1"
              style={{ backgroundColor: "#F9F1EF" }}
            ></div>

            <div className="grid grid-cols-5 gap-2 md:gap-8 relative ">
              <div
                className=" h-12 md:h-[180px] w-full rounded-md flex items-center justify-center relative z-10"
                style={{ backgroundColor: "#F9F1EF" }}
              >
                <RxEnvelopeClosed className="md:w-16 md:h-16 text-primary-600" />
              </div>

              <div
                className=" h-12 md:h-[180px] w-full rounded-md flex items-center justify-center relative z-10"
                style={{ backgroundColor: "#F9F1EF" }}
              >
                <GoCalendar className="md:w-16 md:h-16 text-primary-600" />
              </div>

              <div
                className=" h-12 md:h-[180px] w-full rounded-md flex items-center justify-center relative z-10"
                style={{ backgroundColor: "#F9F1EF" }}
              >
                <GoDeviceCameraVideo className="md:w-16 md:h-16 text-primary-600" />
              </div>

              <div
                className=" h-12 md:h-[180px] w-full rounded-md flex items-center justify-center relative z-10"
                style={{ backgroundColor: "#F9F1EF" }}
              >
                <LuUserPlus className="md:w-16 md:h-16 text-primary-600" />
              </div>

              <div className=" h-12 md:h-[180px] w-full bg-primary-500 rounded-md flex items-center justify-center relative z-10">
                <img src="/logo-icon-white.png" alt="logo-icon-white" className="max-h-8 max-w-8 md:w-16 md:h-16" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white  py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <h2 className="text-xl md:text-7xl text-dark md:leading-[75px]">
          Our software suite empowers both small businesses and enterprises,
          unlocking opportunities and driving growth regardless of challenges
        </h2>
      </section>
      <section className="bg-white  py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="md:col-span-3 flex flex-col md:justify-between">
            <div className="overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar">
              <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 min-w-max lg:min-w-0">
                {Object.entries(tabContent).map(([key, _]) => (
                  <button
                    key={key}
                    ref={(el) => buttonRefs.current[key] = el}
                    className={`whitespace-nowrap text-sm text-left py-4 lg:border-b-2 ${activeTab === key
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
      </section>
      <section className="bg-white ">
        <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-2xl md:text-3xl tracking-tight font-medium text-gray-900 ">
             Choose a better <span className="text-primary-500">Email Experience</span>
            </h2>
          </div>
          <img className="" src="/home/section-6.png" />
        </div>
      </section>
      
    </>
  );
}
