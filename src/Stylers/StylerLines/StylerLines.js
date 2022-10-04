// import React, { useState, useEffect, useRef } from "react";
// import { v4 as uuid } from "uuid";
// import useWindowHeight from "../../Hooks/useWindowHeight";

// export default function StylerLines({ distanceBetweenLines, highlightProp }) {
//   const vhPixelsNum = useWindowHeight();

//   // vertical
//   const distanceMultiBetweenHorizLines = distanceBetweenLines || 1.5;
//   const iterationsFloat = vhPixelsNum / distanceMultiBetweenHorizLines;
//   const iterationsNBasedOnViewportHeight = Math.floor(iterationsFloat);

//   const progressiveVerticalPointsListBasedOnViewportHeight = [
//     ...Array(iterationsNBasedOnViewportHeight).keys(),
//   ].map((n) => n * distanceMultiBetweenHorizLines);

//   // horiz

//   return (
//     <>
//       {Array(iterationsNBasedOnViewportHeight)
//         .fill(null)
//         .map((n, index) => {
//           return (
//             <div
//               className="StylerLines"
//               key={uuid()}
//               style={{
//                 top: `${progressiveVerticalPointsListBasedOnViewportHeight[index]}px`,
//                 right: `${progressiveVerticalPointsListBasedOnViewportHeight[index]}px`,
//               }}
//             ></div>
//           );
//         })}
//     </>
//   );
// }
