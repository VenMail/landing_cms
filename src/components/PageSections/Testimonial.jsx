import React, { useState, useEffect } from "react";

const Testimonial = () => {
  const testimonials = [
    {
      text: `"Venmail simplifies contact management and meeting scheduling, freeing you to focus on selecting the right customers and closing sales effectively."`,
      author: "Stefan Riuki, Thia",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Manual navigation
  const goToPrevious = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative flex items-start justify-start bg-gray-800 text-white md:h-[800px] overflow-hidden px-7 md:px-36 py-12 md:py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.2) -9.46%, rgba(0, 0, 0, 0.5) 100%)",
          zIndex: 1,
        }}
      >
        <img
          src="/testimonial/testimonial-1.png"
          alt="Testimonial Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Testimonial Content */}
      <div className="relative z-10 max-w-3xl flex flex-col justify-between content-between h-full">
        <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
          Testimonials
        </h3>
        <div>
          <blockquote className="text-md md:text-5xl font-medium md:leading-[56px] mb-5">
            {testimonials[current].text}
          </blockquote>
          <p className="mt-4 text-sm font-medium">
            {testimonials[current].author}
          </p>
        </div>

        <div className="flex space-x-4 mt-6">
          {/* Previous Arrow */}
          <button
            onClick={goToPrevious}
            className="bg-white/30 rounded-full w-8 h-8 md:w-16 md:h-16 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-8 md:h-8 w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Arrow */}
          <button
            onClick={goToNext}
            className="bg-white/30 rounded-full w-8 h-8 md:w-16 md:h-16 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-8 md:h-8 w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
