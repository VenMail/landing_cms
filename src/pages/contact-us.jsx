import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";

function ContactUs() {
  const [displayEmail, setDisplayEmail] = useState("");
  const [displayText, setDisplayText] = useState("");
  const originalText = "We are constantly improving our platform to better serve you. If you have any questions or feedback, please don't hesitate to contact us.";
  const emailParts = ['hello', 'venmail', 'io'];

  useEffect(() => {
    // Text animation
    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (currentIndex <= originalText.length) {
        setDisplayText(originalText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 100);

    // Email obfuscation
    setDisplayEmail(`${emailParts[0]}@${emailParts[1]}.${emailParts[2]}`);

    return () => clearInterval(textInterval);
  }, []);

  const handleContactClick = () => {
    window.location.href = `mailto:${emailParts[0]}@${emailParts[1]}.${emailParts[2]}`;
  };

  return (
    <DefaultLayout>
      <section className="bg-black min-h-screen text-white">
        <div className="max-w-7xl px-4 mx-auto relative">
          <div className="max-w-4xl mx-auto pt-20 md:pt-32">
            <h1 className="mb-8 text-4xl md:text-8xl font-bold tracking-tight leading-none bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-80 h-8">
              {displayText}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center py-20 md:py-32">
            <div className="relative">
              <img 
                src="/contact.png" 
                alt="Contact Visual" 
                className="w-full object-cover rounded-lg shadow-2xl"
                style={{ filter: 'brightness(0.8) contrast(1.2)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>

            <div className="space-y-8">
              <button
                onClick={handleContactClick}
                className="group relative px-8 py-4 bg-transparent border border-white/20 rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-2xl font-medium tracking-wider">TALK TO US</span>
                <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>

              <div className="text-sm text-gray-400 font-mono">
                For urgent matters:
                <br />
                <span className="select-all cursor-pointer hover:text-blue-400 transition-colors">
                  {displayEmail}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default ContactUs;