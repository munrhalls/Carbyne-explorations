import React from "react";
import { v4 as uuid } from "uuid";
import useWindowHeight from "./../../Hooks/useWindowHeight";

export default function NavStyler() {
  const vh = useWindowHeight();
  const topDistances = [...Array(vh).keys()].map((n) => (n += 5));

  return (
    <div className="NavStyler">
      {Array(vh)
        .fill(null)
        .map((n, index) => {
          return (
            <div
              className="NavStyler__line"
              key={uuid()}
              style={{ top: `${topDistances[index]}px` }}
            ></div>
          );
        })}
    </div>
  );
}
