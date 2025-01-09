import React, { useState } from "react";

const PricingToggle = ({ setPricingPeriod }) => {
  const [activeMode, setActiveMode] = useState("monthly");

  return (
    <div className="flex justify-center items-center space-x-6 mt-10">
      {/* Monthly Option */}
      <button
        className={`font-medium relative ${
          activeMode === "monthly"
            ? "text-red-500"
            : "text-gray-700 hover:text-red-500"
        }`}
        onClick={() => {
          setActiveMode("monthly");
          setPricingPeriod("monthly");
        }}
      >
        Monthly
        {activeMode === "monthly" && (
          <span className="absolute bottom-[-15px] left-0 w-full h-[2px] bg-red-500"></span>
        )}
      </button>

      {/* Yearly Option */}
      <button
        className={`font-medium flex relative ${
          activeMode === "yearly"
            ? "text-red-500"
            : "text-gray-700 hover:text-red-500"
        }`}
        onClick={() => {
          setActiveMode("yearly");
          setPricingPeriod("yearly");
        }}
      >
        Yearly
        {/* Save 20% Badge */}
        <div className="bg-yellow-200 text-gray-800 text-sm font-medium py-1 px-2 rounded-md ml-2">
          Save 20%
        </div>
        {activeMode === "yearly" && (
          <span className="absolute bottom-[-15px] left-0 w-full h-[2px] bg-red-500"></span>
        )}
      </button>
    </div>
  );
};

export default PricingToggle;
