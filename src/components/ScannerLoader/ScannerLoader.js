import React from "react";
// animators
import ScannerAnim from "../../Animators/ScannerAnim";

export default function ScannerLoader({ children, active }) {
  return (
    <>
      {active ? (
        <div className="ScannerLoader">
          <ScannerAnim />
        </div>
      ) : (
        children
      )}
    </>
  );
}
