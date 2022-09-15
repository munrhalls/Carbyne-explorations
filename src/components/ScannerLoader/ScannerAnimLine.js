import React from "react";

export default function ScannerAnim__line({ highlighted, topPos }) {
  return (
    <div
      style={{ top: `${topPos}px` }}
      className={`ScannerAnim__line ${highlighted ? "--highlighted" : ""}`}
    ></div>
  );
}
