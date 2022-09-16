import React from "react";
import useWindowHeight from "../../Hooks/useWindowHeight";
import useWindowWidth from "../../Hooks/useWindowWidth";

export default function Blanket() {
  const height = String(useWindowHeight());
  const width = String(useWindowWidth());
  console.log(width);

  // const svg = (
  //   <svg
  //     className="Blanket"
  //     version="1.1"
  //     width={width}
  //     height={height}
  //     xmlns="http://www.w3.org/2000/svg"
  //     xmlnsXlink="http://www.w3.org/1999/xlink"
  //   >
  //     {/* <rect width="100%" height="100%" fill="blue" />
  //     <circle cx="150" cy="100" r="80" fill="black" />
  //     <text x="150" y="125" fontSize="60" textAnchor="middle" fill="white">
  //       SVG
  //     </text> */}
  //     <path
  //       d={`M ${width}, ${height / 10}
  //       L ${width - 100}, ${height / 10}

  //       `}
  //       fill="none"
  //       stroke="black"
  //       strokeWidth="5"
  //     />
  //   </svg>
  // );

  return (
    <svg
      className="Blanket"
      version="1.1"
      height={String(height)}
      width={String(width)}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {/* <rect width="100%" height="100%" fill="blue" />
  <circle cx="150" cy="100" r="80" fill="black" />
  <text x="150" y="125" fontSize="60" textAnchor="middle" fill="white">
    SVG
  </text> */}
      <path
        d={`M 0 0
        M 0, ${height}
        L 0, 0
        L ${width}, 0
        L ${width}, ${height / 7.25}
    L ${width * 0.6}, ${height / 7}
    L ${width * 0.3}, ${height / 4.5}
    L ${width * 0.25}, ${height / 3.5}
    L ${width * 0.15}, ${height / 2.25}
    L ${width * 0.1}, ${height / 1.25}
    L ${width * 0.07}, ${height / 0.5}
    Z









    `}
        fill="black"
        stroke="black"
        strokeWidth="10"
      />
    </svg>
  );
}
