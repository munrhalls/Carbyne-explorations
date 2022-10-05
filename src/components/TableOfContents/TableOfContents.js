import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useGlobContext } from "../../Contexts/GlobProvider";

export default function TableOfContents({ items }) {
  const { globColor } = useGlobContext();

  function scrollTo(i) {
    const item = document.querySelector(`[data-scroll="${i}"]`);
    item.scrollIntoView({ behavior: "smooth" });
  }
  console.log(items);
  return (
    <div
      style={{ border: `6px solid ${globColor}` }}
      className="TableOfContents"
    >
      <h3 className="TableOfContents__metaTitle">Table of contents</h3>
      <ul className="TableOfContents__list">
        {items?.map((item, i) => (
          <li
            style={{ color: ` ${globColor}` }}
            onClick={() => scrollTo(i)}
            className="TableOfContents__list__item"
            key={uuidv4()}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
