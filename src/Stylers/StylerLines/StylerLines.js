import React from "react";
import { v4 as uuid } from "uuid";
import useWindowHeight from "../../Hooks/useWindowHeight";

export default function StylerLines() {
  const vhPixelsNum = useWindowHeight();

  const progressiveVerticalPoints = [...Array(vhPixelsNum).keys()].map(
    (n) => n * 1.5
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
