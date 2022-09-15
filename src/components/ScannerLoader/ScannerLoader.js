import React from "react";
import StylerLines from "../../Stylers/StylerLines/StylerLines";

export default function ScannerLoader({ children, active }) {
  return (
    <>
      {active ? (
        <div className="ScannerLoader">
          <StylerLines distanceBetweenLines={0.5} />
        </div>
      ) : (
        children
      )}
    </>
  );
}
