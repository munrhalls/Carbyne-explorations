import React from "react";
import useWindowHeight from "../../Hooks/useWindowHeight";

export default function Blanket() {
  const height = String(useWindowHeight());
  const svg = (
    <svg
      version="1.1"
      width="300"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {/* <rect width="100%" height="100%" fill="blue" />
      <circle cx="150" cy="100" r="80" fill="black" />
      <text x="150" y="125" fontSize="60" textAnchor="middle" fill="white">
        SVG
      </text> */}
      <path
        d={`M0,0 L150, ${height} Q120,0 25,120 T77, 205`}
        fill="none"
        stroke="black"
        strokeWidth="5"
      />
    </svg>
  );

  return svg;
}
