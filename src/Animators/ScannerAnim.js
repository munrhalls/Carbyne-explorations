import React, { useState, useEffect } from "react";
import useWindowHeight from "../Hooks/useWindowHeight";

export default function ScannerAnim() {
  const scannerVerticalPoints = Array(useWindowHeight()).fill();

  console.log(scannerVerticalPoints);
  return (
    <div className="ScannerAnim">
      <div className="ScannerAnim__line"></div>
    </div>
  );
}
