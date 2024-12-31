import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function CompareSlider(props) {
  const CustomHandle = (props) => {
    return (
      <div
        style={{
          maxWidth: "24px",
          minWidth: "12px",
          height: "100%",
          backgroundColor: '#000000',
          cursor: "pointer",
        }}
      />
    );
  };

  return (
    <ReactCompareSlider
      {...props}
      handle={<CustomHandle />}
      itemOne={
        <ReactCompareSliderImage
          src="/slider-1.png"
          alt="Image one"
          style={{
            borderRadius: '12px'
          }}
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src="slider-2.png"
          alt="Image two"
          style={{
            borderRadius: '12px'
          }}
        />
      }
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
};
