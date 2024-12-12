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
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Mail",
    href: "/product/mail",
    icon: ChartPieIcon,
  },
  {
    name: "Calendar",
    href: "/product/calendar",
    icon: ChartPieIcon,
  },
  {
    name: "Meetings",
    href: "/product/meeting",
    icon: ChartPieIcon,
  },
  {
    name: "Contacts",
    href: "/product/contacts",
    icon: ChartPieIcon,
  },
];

const resources = [
  {
    name: "Contact us",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Career",
    href: "#",
  },
  {
    name: "Join our community",
    href: "#",
  },
  {
    name: "Terms of use",
    href: "#",
  },
  {
    name: "FAQs",
    href: "#",
  },
  {
    name: "Partner Program",
    href: "#",
  },
  {
    name: "Product Tour",
    href: "#",
  },
  {
    name: "What's New",
    href: "#",
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

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6"
        >
          <div className="flex lg:flex-1 items-center">
            <a href="#" className="p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/logo-text.png" className="h-8 w-auto" />
            </a>
            <div className="hidden lg:flex lg:gap-x-12 ml-10">
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Products
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Solution
              </a>

              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Resources
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
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
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button className="border-[1px] border-black rounded-md px-3 py-1 mr-3">
              Login
            </Button>
            <Button className="bg-primary-600 text-white fw-bold rounded-md px-3 py-2">
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
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="/logo-text.png"
                  className="h-8 w-auto"
                />
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
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      Product
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
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
                      Solutions
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {/* {[...products, ...callsToAction].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))} */}
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
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
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
      
    </>
  );
}
