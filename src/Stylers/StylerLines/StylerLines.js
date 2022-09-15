import React from "react";
import { v4 as uuid } from "uuid";
import useWindowHeight from "../../Hooks/useWindowHeight";

export default function StylerLines({ distanceBetweenLines }) {
  const vhPixelsNum = useWindowHeight();

  const distanceMultiBetweenHorizLines = distanceBetweenLines || 1.5;
  const iterationsFloat = vhPixelsNum / distanceMultiBetweenHorizLines;
  const iterations = Math.floor(iterationsFloat);

  console.log(iterations);

  const progressiveVerticalPointsList = [...Array(iterations).keys()].map(
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
                top: `${progressiveVerticalPointsList[index]}px`,
                right: `${progressiveVerticalPointsList[index] / 10}px`,
              }}
            ></div>
          );
        })}
    </>
  );
}
