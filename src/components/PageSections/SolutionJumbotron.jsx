import React from "react";

function SolutionJumbotron({ subheading, title, text }) {
  return (
    <section className="bg-[#16292F]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20">
        <p className="uppercase text-[#B7BDBF]">{subheading}</p>
        <h1 className="my-5 text-3xl max-w-2xl mx-auto font-medium tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
          {title}
        </h1>
        <p className="mb-8 text-sm md:text-md font-normal text-[#B7BDBF] sm:px-16 lg:px-48 ">
          {text}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="https://m.venmail.io/register"
            target="_blank"
            className="inline-flex cursor-pointer justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-sm bg-primary-600"
          >
            Get started free
          </a>
        </div>
      </div>
    </section>
  );
}

export default SolutionJumbotron;
