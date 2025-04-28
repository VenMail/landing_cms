import React from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";

function PrivacyPolicy() {
  return (
    <DefaultLayout>
      <section className="bg-white ">
        <div className="max-w-7xl px-4 mx-auto md:gap-8 xl:gap-0">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-4 text-3xl md:text-7xl text-center font-medium tracking-tight md:leading-[96px] text-black">
              Contact Us
            </h1>
            <p className="text-black text-2xl">
              Our sales and support teams are more than happy to answer your
              questions and discuss our products and integrations. Send us a
              message, and we will get back to you as soon as possible. For
              payment issues, Contact: hello@venmail.com
            </p>
          </div>
          <section className="bg-white py-8 px-4 mx-auto max-w-screen-xl md:py-44 md:px-6">
            <div className="">
              <div className="grid md:grid-cols-12 items-center">
                <div className="md:col-span-6">
                  <img src="/contact.png" alt="mockup" />
                </div>
                <div className="lg:mt-0 md:col-span-6">
                  <form className="max-w-lg mx-auto">
                    <div className="relative z-0 w-full mb-10 group">
                      <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-white  focus:outline-none  peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-black font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#637074] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        First Name
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-10 group">
                      <input
                        type="password"
                        name="floating_password"
                        id="floating_password"
                        className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-white  focus:outline-none  peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_password"
                        className="peer-focus:font-medium absolute text-sm text-black font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#637074] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Last Name
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-10 group">
                      <input
                        type="password"
                        name="repeat_password"
                        id="floating_repeat_password"
                        className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-white  focus:outline-none  peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_repeat_password"
                        className="peer-focus:font-medium absolute text-sm text-black font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#637074] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email Address
                      </label>
                    </div>
                    {/* <div className="relative z-0 w-full mb-10 group">
                      <select name="product" id="">
                        <option></option>
                      </select>
                      <label
                        for="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-black font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#637074] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email address
                      </label>
                    </div> */}
                    <div className="relative z-0 w-full mb-10 group">
                      <input
                        type="password"
                        name="floating_password"
                        id="floating_password"
                        className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-white  focus:outline-none  peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_password"
                        className="peer-focus:font-medium absolute text-sm text-black font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#637074] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Tell us more
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full sm:w-auto px-7 py-4 text-center"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default PrivacyPolicy;
