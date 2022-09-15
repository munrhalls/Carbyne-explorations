import React from "react";
import { v4 as uuid } from "uuid";
import useWindowHeight from "../../Hooks/useWindowHeight";

export default function StylerLines({ distanceBetweenLines }) {
  const vhPixelsNum = useWindowHeight();

  const distanceMultiBetweenHorizLines = distanceBetweenLines || 1.5;
  const iterations = vhPixelsNum / distanceMultiBetweenHorizLines;

  const progressiveVerticalPoints = [...Array(iterations).keys()].map(
    (n) => n * distanceMultiBetweenHorizLines
  );

  return (
    <>
      {Array(vhPixelsNum)
        .fill(null)
        .map((n, index) => {
          return (
            <div
              className="StylerLines"
              key={uuid()}
              style={{
                top: `${progressiveVerticalPoints[index]}px`,
                right: `${progressiveVerticalPoints[index] / 10}px`,
              }}
            ></div>
          );
        })}
    </>
  );
}
