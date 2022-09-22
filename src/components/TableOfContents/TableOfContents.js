import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function TableOfContents({ items }) {
  return (
    <div className="TableOfContents">
      {items?.map((item) => (
        <p key={uuidv4()}>{item}</p>
      ))}
    </div>
  );
}
