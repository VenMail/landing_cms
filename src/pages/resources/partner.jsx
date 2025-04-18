import Image from "next/image";
import CustomLayout from "@/components/layout/CustomLayout";
import { FiUpload, FiUsers, FiUserCheck } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi2";
export default function Partner() {
  const features = [
    {
      icon: (
        <FiUserCheck className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Instant Payout",
      text: "Effortlessly generate high-quality prospects connect with the right leads and drive business growth.",
    },
    {
      icon: <FiUsers className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "Manage Subscription",
      text: "Organize and manage your contacts seamlessly stay connected, nurture relationships, and build  network",
    },
    {
      icon: <FiUpload className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />,
      title: "Manage Customers",
      text: "Quickly import your contacts and stay connected—manage relationships efficiently and effortlessly.",
    },
  ];
  return (
    <CustomLayout logoVariant="light" headerColor="#16292F" textColor={"white"}>
      <section className="bg-[#16292F]">
        <div className="grid max-w-screen-xl px-4 py-16 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
          <div className="mr-auto place-self-center md:col-span-6 text-center md:text-start">
            <p className="uppercase text-white mb-3">partner</p>
            <h1 className="max-w-3xl mb-4 text-4xl md:text-6xl font-medium tracking-tight md:leading-[72px] text-white">
              Earn Money as a Venmail Partner
            </h1>
            <p className="max-w-lg mb-5 text-white">
              Say goodbye to the hassle of manual prospecting and let Venmail
              help you focus on what matters{" "}
            </p>
            <a
              href="#"
              className="md:inline-flex block cursor-pointer items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary-600 focus:ring-4 focus:ring-primary-300 "
            >
              Get started
            </a>
          </div>
          <div className="mt-5 lg:col-span-6 lg:flex">
            <img src="/partner/partner.png" alt="mockup" />
          </div>
        </div>
      </section>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {features.map((feature) => (
              <div>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="mb-2 text-xl text-black">{feature.title}</h3>
                <p className="text-[#637074]">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-4 mx-auto max-w-screen-xl md:px-6">
        <div className="grid md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <div className="max-w-md">
              <h2 className="text-4xl font-medium md:text-5xl text-black md:leading-[56px]">
                Receive your payout instantly
              </h2>
              <p className="text-[#637074] text-base my-5">
                Venmail harnesses the power of artificial intelligence to
                streamline your workflows, save valuable time, and maximize
                results.
              </p>
              <a href="https://app.venmail.io" target="_blank" className="text-primary-600 cursor-pointer font-bold flex items-center">Sign up for free <HiArrowRight className="ml-2" /></a>
            </div>
          </div>
          <div className="lg:mt-0 md:col-span-6 flex justify-end ">
            <img src="/partner/partner-1.png" alt="mockup" className="mt-10 md:mt-0"/>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 px-4 mx-auto max-w-screen-xl md:px-6">
        <div className="grid md:grid-cols-12 items-center">
          <div className="lg:mt-0 md:col-span-6 flex order-12 md:order-1">
            <img src="/partner/partner-2.png" alt="mockup" className="mt-10 md:mt-0" />
          </div>
          <div className="md:col-span-6 flex justify-end order-1 md:order-12">
            <div className="max-w-md">
              <h2 className="text-4xl font-medium md:text-5xl text-black md:leading-[56px]">
                Manage customers and subscriptions
              </h2>
              <p className="text-[#637074] text-base my-5">
              Venmail harnesses the power of artificial intelligence to streamline your workflows, save valuable time, and maximize results.
              </p>
              <a href="https://app.venmail.io" target="_blank" className="text-primary-600 cursor-pointer font-bold flex items-center">Sign up for free <HiArrowRight className="ml-2" /></a>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
