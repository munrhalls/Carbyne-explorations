import React from "react";
import useWindowHeight from "../../Hooks/useWindowHeight";

export default function StylerPatches() {
  const vh = useWindowHeight();
  const patchesNum = vh / 100;

  const iterations = Array(patchesNum).fill(null);

  return (
    <div className="StylerPatches">
      {iterations.map((patch, index) => {
        return (
          <div
            className="StylerPatches__patch"
            style={{ top: `${patchNum * index}px`, height: `${patchesNum}px` }}
          ></div>
        );
      })}
    </div>
  );
}
