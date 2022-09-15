import React, { useRef, useEffect } from "react";
import useWindowHeight from "../Hooks/useWindowHeight";

export default function ScannerAnim() {
  const scannerVerticalPoints = Array(useWindowHeight()).fill();

  return (
    <div className="ScannerAnim">
      <div className="ScannerAnim__line" style={{ top: `${250}px` }}></div>
    </div>
  );
}
