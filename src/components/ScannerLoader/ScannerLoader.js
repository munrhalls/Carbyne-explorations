import React from "react";
import StylerLines from "../../Stylers/StylerLines/StylerLines";
// animators
import ScannerAnim from "../../Animators/ScannerAnim";

export default function ScannerLoader({ children, active }) {

  

  return (
    <>
      {active ? (
        <div className="ScannerLoader">
          <StylerLines distanceBetweenLines={0.5} />
          <ScannerAnim />
        </div>
      ) : (
        children
      )}
    </>
  );
}
