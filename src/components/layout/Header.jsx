"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Button,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  EnvelopeIcon,
  CalendarIcon,
  VideoCameraIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import NavMenu from "./NavMenu";

const products = [
  {
    name: "Mail",
    description: "Send Professional to emails to anyone instantly",
    href: "/product/mail",
    icon: EnvelopeIcon,
  },
  {
    name: "Calendar",
    description: "Manage and categories your events in one place",
    href: "/product/calendar",
    icon: CalendarIcon,
  },
  {
    name: "Meetings",
    description: "Schedule your meetings automatically",
    href: "/product/meeting",
    icon: VideoCameraIcon,
  },
  {
    name: "Contacts",
    description: "View and manage potential contacts",
    href: "/product/contacts",
    icon: UsersIcon,
  },
];

const solutions = [
  {
    name: "Agencies",
    href: "/solutions/agency",
  },
  {
    name: "Founders",
    href: "/solutions/founders",
  },
  {
    name: "Freelancers",
    href: "/solutions/freelancers",
  },
  {
    name: "Marketing",
    href: "/solutions/marketing",
  },
];

const resources = [
  {
    name: "Contact us",
    href: "/contact-us",
  },
  {
    name: "About",
    href: "/about-us",
  },
  {
    name: "Career",
    href: "/career",
  },
  {
    name: "Terms of Service",
    href: "/resources/terms-of-service",
  },
  {
    name: "FAQs",
    href: "/resources/faqs",
  },
  {
    name: "Partner Program",
    href: "#",
  },
  {
    name: "Product Tour",
    href: "/resources/partner",
  },
  {
    name: "Download Desktop App",
    href: "#",
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header({
  logoVariant,
  bgColor = "#FFF",
  textColor = "black",
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoIsDark = () => {
    return logoVariant === "dark";
  };

  return (
    <header className={`relative z-10 bg-[${bgColor}]`}>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6"
      >
        <div className="flex lg:flex-1 items-center">
          <a href="/" className="p-1.5 cursor-pointer">
            <span className="sr-only">Venmail</span>
            <img
              alt=""
              src={
                logoVariant === "dark" ? "/logo-text.png" : "/logo-white.png"
              }
              className="h-6 md:h-auto w-auto"
            />
          </a>
          <div className="hidden lg:flex lg:gap-x-12 ml-10 pt-2">
            <NavMenu
              trigger={
                <button
                  className={`flex items-center gap-x-1 text-sm/6 font-medium text-${textColor}`}
                >
                  Products
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </button>
              }
            >
              <div className="grid grid-cols-3 gap-8">
                <div>
                  {products.slice(0, 2).map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="flex h-16 w-16 flex-none items-center justify-center rounded-lg bg-primary-100">
                        <item.icon className="h-6 w-6 text-[#1C323B]" />
                      </div>
                      <div className="flex-auto">
                        <span className="block font-semibold text-[#1C323B]">
                          {item.name}
                        </span>
                        <p className="text-[#546E79] text-sm">
                          {item?.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <div>
                  {products.slice(2, 4).map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 cursor-pointer"
                    >
                      <div className="flex h-16 w-16 flex-none items-center justify-center rounded-lg bg-primary-100">
                        <item.icon className="h-6 w-6 text-[#1C323B]" />
                      </div>
                      <div className="flex-auto">
                        <span className="block font-semibold text-[#1C323B]">
                          {item.name}
                        </span>
                        <p className="text-[#546E79] text-sm">
                          {item?.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <div>
                  {products.slice(4, 6).map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 cursor-pointer"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 ">
                        <item.icon className="h-6 w-6 text-gray-600 " />
                      </div>
                      <div className="flex-auto">
                        <span className="block font-semibold text-gray-900">
                          {item.name}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </NavMenu>

            <NavMenu
              trigger={
                <button
                  className={`flex items-center gap-x-1 text-sm/6 font-medium text-${textColor}`}
                >
                  Solutions
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </button>
              }
            >
              <div className="grid grid-cols-3 gap-8">
                {solutions.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="flex-auto">
                        <span className="block font-semibold text-[#1C323B] uppercase">
                          {item.name}
                        </span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </NavMenu>

            <NavMenu
              trigger={
                <button
                  className={`flex items-center gap-x-1 text-sm/6 font-medium text-${textColor}`}
                >
                  Resources
                </button>
              }
            >
              <div className="grid grid-cols-3 gap-8">
                <div>
                  {resources.slice(0, 6).map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 cursor-pointer"
                    >
                      {/* <div className="flex h-16 w-16 flex-none items-center justify-center rounded-lg bg-primary-100">
                        <item.icon className="h-6 w-6 text-[#1C323B]" />
                      </div> */}
                      <div className="flex-auto">
                        <span className="block font-semibold text-[#1C323B]">
                          {item.name}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
                <div>
                  {resources.slice(6).map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 cursor-pointer"
                    >
                      {/* <div className="flex h-16 w-16 flex-none items-center justify-center rounded-lg bg-primary-100">
                        <item.icon className="h-6 w-6 text-[#1C323B]" />
                      </div> */}
                      <div className="flex-auto">
                        <span className="block font-semibold text-[#1C323B]">
                          {item.name}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </NavMenu>

            <a
              href="/pricing"
              className={`text-sm/6 font-medium text-${textColor} hover:border-b-2 hover:border-primary-600 cursor-pointer`}
            >
              Pricing
            </a>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className={`size-7 text-${textColor}`} />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            className={`border-[1px] border-${textColor} text-${textColor} rounded-sm px-3 py-1 mr-3`}
          >
            Login
          </Button>
          <Button className="bg-primary-600 text-white fw-bold rounded-sm px-3 py-2">
            Signup for Free
          </Button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between bg-white">
            <a href="/" className="-m-1.5 p-1.5 cursor-pointer">
              <span className="sr-only">Venmail</span>
              <img alt="" src="/logo-text.png" className="h-6 md:h-auto w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton
                    className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-${textColor} hover:bg-gray-50`}
                  >
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="flex items-center rounded-lg py-2 pl-6 pr-3 text-sm/7 text-gray-900 hover:bg-gray-50 font-medium"
                      >
                        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-primary-100 mr-3">
                          <item.icon className="h-6 w-6 text-[#1C323B]" />
                        </div>
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Solutions
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {solutions.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Resources
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {resources.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/pricing"
                  className="-mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer"
                >
                  Pricing
                </a>
              </div>
              <div className="py-6">
                <Button
                  href="#"
                  className="w-full border-[1px] border-black px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 mb-3"
                >
                  Login
                </Button>
                <Button
                  href="#"
                  className="w-full bg-primary-600 text-white px-3 py-2.5 text-base/7 font-semibold"
                >
                  Sign up for Free
                </Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
