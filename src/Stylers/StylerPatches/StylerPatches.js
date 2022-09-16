import React from "react";
import useWindowHeight from "../../Hooks/useWindowHeight";
import { v4 as uuid } from "uuid";

export default function StylerPatches() {
  const vh = useWindowHeight();
  const patchesNum = Math.floor(vh / 100);
  const patchHeight = Math.ceil(vh / patchesNum);

  console.log(patchesNum);
  const iterations = Array(patchesNum).fill(null);

  return (
    <>
      {iterations.map((patch, index) => {
        return (
          <div
            key={uuid()}
            className="StylerPatches__patch"
            style={{
              top: `${patchHeight * index}px`,
              right: `${index === 0 ? "0" : "70%"}`,
              height: `${patchHeight}px`,
            }}
          ></div>
        );
      })}
    </>
  );
}
