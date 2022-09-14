import React from "react";
import { v4 as uuid } from "uuid";
import useWindowHeight from "./../../Hooks/useWindowHeight";

export default function NavStylerLines() {
  const vhPixelsNum = useWindowHeight();

  const progressiveVerticalPoints = [...Array(vhPixelsNum).keys()].map(
    (n) => n
  );

  return (
    <>
      {Array(vhPixelsNum)
        .fill(null)
        .map((n, index) => {
          return (
            <div
              className="NavStylerLines"
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
