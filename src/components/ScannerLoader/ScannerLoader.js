import React from "react";
import StylerLines from "../../Stylers/StylerLines/StylerLines";
// animators
import OneByOne from "../../Animators/OneByOne";

export default function ScannerLoader({ children, active }) {
  return (
    <>
      {active ? (
        <div className="ScannerLoader">
          <OneByOne>
            <StylerLines distanceBetweenLines={0.5} />
          </OneByOne>
        </div>
      ) : (
        children
      )}
    </>
  );
}
