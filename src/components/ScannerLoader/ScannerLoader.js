import React from "react";
// animators
import ScannerAnim from "../../Animators/ScannerAnim";

export default function ScannerLoader({ children, active }) {
  return (
    <>
      {active ? (
        <div className="ScannerLoader">
          <h3 className="ScannerLoader__msg">loading...</h3>
          <ScannerAnim />
        </div>
      ) : (
        children
      )}
    </>
  );
}
