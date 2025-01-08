import React from "react";

const cleanPercentage = (percentage) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const Circle = ({ colour, percentage, radius }) => {
  const circ = 2 * Math.PI * radius;
  const strokePct = ((100 - percentage) * circ) / 100;
  return (
    <circle
      r={radius}
      cx={radius + 10}
      cy={radius + 10}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""}
      strokeWidth={radius * 0.15} // Dynamic stroke width based on radius
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    ></circle>
  );
};

const Text = ({ percentage, fontSize, colour }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={`${fontSize}rem`}
      fontWeight={"700"}
      fill={colour}
    >
      {percentage / 10}
    </text>
  );
};

const Pie = ({ percentage, colour, size = 100 }) => {
  const pct = cleanPercentage(percentage);
  const radius = size / 2 - 10; // Adjust radius based on size
  const fontSize = 2; // Adjust font size based on size

  return (
    <svg width={size} height={size}>
      <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
        <Circle colour="lightgrey" radius={radius} />
        <Circle colour={colour} percentage={pct} radius={radius} />
      </g>
      <Text percentage={pct} fontSize={fontSize} colour={colour} />
    </svg>
  );
};

export default Pie;
