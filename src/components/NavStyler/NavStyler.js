import React from "react";
import { v4 as uuid } from "uuid";
import useWindowHeight from "./../../Hooks/useWindowHeight";

export default function NavStyler() {
  const vhPixelsNum = useWindowHeight();

  const progressiveVerticalPoints = [...Array(vhPixelsNum).keys()].map(
    (n) => n
  );

  return (
    <div className="NavStyler">
      {Array(vhPixelsNum)
        .fill(null)
        .map((n, index) => {
          return (
            <div
              className="NavStyler__line"
              key={uuid()}
              style={{
                top: `${progressiveVerticalPoints[index]}px`,
                right: `${progressiveVerticalPoints[index] / 10}px`,
              }}
            ></div>
          );
        })}
    </div>
  );
}
