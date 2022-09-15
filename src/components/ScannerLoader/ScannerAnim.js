import React, { useState, useEffect } from "react";
import useWindowHeight from "../../Hooks/useWindowHeight";
import useInterval from "../../Hooks/useInterval";
import ScannerAnimLinesList from "./ScannerAnimLinesList";
import { v4 as uuid } from "uuid";

export default function ScannerAnim() {
  let [count, setCount] = useState(0);
  const linesNum = Math.floor(useWindowHeight() / 5);

  useInterval(() => {
    setCount(count + 1);
  }, 10);

  useEffect(() => {
    if (count > linesNum) setCount(0);
  });

  return (
    <div className="ScannerAnim">
      <ScannerAnimLinesList linesNum={linesNum} count={count} />
    </div>
  );
}
