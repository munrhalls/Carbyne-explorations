import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function TableOfContents({ items }) {
  return (
    <div className="TableOfContents">
      <h3 className="TableOfContents__metaTitle">TABLE OF CONTENTS</h3>
      <ul className="TableOfContents__list">
        {items?.map((item) => (
          <li className="TableOfContents__list__item" key={uuidv4()}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
