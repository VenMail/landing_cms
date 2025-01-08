import React, { useEffect, useRef, useState } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export default function CompareSlider(props) {
  const [sliderPosition, setSliderPosition] = useState(50); // 50 is the initial center position (in percentage)
  const sliderRef = useRef(null);
  const isInViewRef = useRef(false); // To track whether the component is in view

  const CustomHandle = (props) => {
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

  const handleScroll = (event) => {
    if (!isInViewRef.current) return; // Do nothing if the component is not in view

    const delta = event.deltaY;

    // If scrolling up, move slider to the right
    if (delta < 0) {
      setSliderPosition((prevPosition) => {
        const newPosition = Math.min(prevPosition + 1, 100); // Ensure it doesn't go beyond 100%
        return newPosition;
      });
    }

    // If scrolling down, move slider to the left
    if (delta > 0) {
      setSliderPosition((prevPosition) => {
        const newPosition = Math.max(prevPosition - 1, 0); // Ensure it doesn't go below 0%
        return newPosition;
      });
    }
  };

  useEffect(() => {
    // IntersectionObserver to detect if the slider is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting; // Set to true when in view
      },
      { threshold: 0.5 } // Trigger when 50% of the slider is in view
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="rounded-3xl shadow-md md:h-[750px]" ref={sliderRef}>
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
        position={sliderPosition} // Bind the slider position to the state
      />
    </div>
  );
}
