import React, { useState, useEffect } from "react";
import useWindowHeight from "../../Hooks/useWindowHeight";
import useInterval from "../../Hooks/useInterval";

export default function ScannerAnim() {
  let [count, setCount] = useState(0);
  const vh = useWindowHeight();

  useInterval(() => {
    setCount(count + 1);
  }, 0.1);

  useEffect(() => {
    if (count * 10 > vh) setCount(0);
  });

  return (
    <div className="ScannerAnim">
      <div
        className="ScannerAnim__line"
        style={{ top: `${count * 10}px` }}
      ></div>
      <div
        className="ScannerAnim__line"
        style={{ top: `${vh - count * 10}px` }}
      ></div>
    </div>
  );
}
