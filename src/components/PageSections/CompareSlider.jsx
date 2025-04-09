import React, { useEffect, useRef, useState } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export default function CompareSlider(props) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);
  const isInViewRef = useRef(false);

  const CustomHandle = () => {
    return (
      <div
        style={{
          maxWidth: "24px",
          minWidth: "12px",
          height: "100%",
          backgroundColor: "#000000",
          cursor: "pointer",
        }}
      />
    );
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (!isInViewRef.current) return;

      e.preventDefault(); // Prevent default scroll
      
      const delta = e.deltaY;
      setSliderPosition((prev) => {
        // Moving slider based on scroll direction
        if (delta > 0) {
          // Scrolling down - move left
          if (prev <= 0) {
            isInViewRef.current = false; // Allow scrolling past when at minimum
            return 0;
          }
          return Math.max(prev - 5, 0);
        } else {
          // Scrolling up - move right
          if (prev >= 100) {
            isInViewRef.current = false; // Allow scrolling past when at maximum
            return 100;
          }
          return Math.min(prev + 5, 100);
        }
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
        console.log("Component in view:", entry.isIntersecting); // Debug log
      },
      { threshold: 0.5 }
    );

    const currentSlider = sliderRef.current;
    if (currentSlider) {
      observer.observe(currentSlider);
    }

    // Add wheel event listener with passive: false to allow preventDefault
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      if (currentSlider) {
        observer.unobserve(currentSlider);
      }
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div 
      className="rounded-3xl shadow-md md:h-[750px]" 
      ref={sliderRef}
      style={{ scrollSnapAlign: 'start' }} // Add scroll snapping
    >
      <ReactCompareSlider
        {...props}
        handle={<CustomHandle />}
        itemOne={
          <ReactCompareSliderImage
            src="/slider-1.png"
            alt="Image one"
            style={{
              borderRadius: "12px",
            }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="slider-2.png"
            alt="Image two"
            style={{
              borderRadius: "12px",
            }}
          />
        }
        style={{
          width: "100%",
          height: "100%",
        }}
        position={sliderPosition}
        onPositionChange={(position) => {
          console.log("Slider position:", position); // Debug log
        }}
      />
    </div>
  );
}
