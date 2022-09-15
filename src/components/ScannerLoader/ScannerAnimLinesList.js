import React from "react";
import ScannerAnimLine from "./ScannerAnimLine";
import { v4 as uuid } from "uuid";

export default function ScannerAnimLinesList({ count, linesNum }) {
  return (
    <>
      {Array(linesNum)
        .fill()
        .map((num, index) => {
          console.log("yeah...");
          return (
            <ScannerAnimLine
              key={uuid()}
              topPos={index}
              highlighted={count === index}
            />
          );
        })}
    </>
  );
}
