import React from "react";
import { v4 as uuid } from "uuid";

export default function NavStyler() {
  return (
    <div className="NavStyler">
      {Array(5)
        .fill(null)
        .map((n) => {
          return (
            <div className="NavStyler__line" key={uuid()}>
              line
            </div>
          );
        })}
    </div>
  );
}
