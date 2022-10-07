import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useGlobContext } from "../../Contexts/GlobProvider";
import BtnDot from "./BtnDot";

export default function TableOfContents({ items }) {
  const { globColor } = useGlobContext();

  function scrollTo(i) {
    const item = document.querySelector(`[data-scroll="${i}"]`);
    item.scrollIntoView({ behavior: "smooth" });
  }
  console.log(items);
  return (
    <div className="TableOfContents">
      <div className="TableOfContents__metaTitle">
        <BtnDot />
        <h3 className="TableOfContents__metaTitle__text">Table of Contents</h3>
      </div>

      {/* <ul className="TableOfContents__list">
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
      <p className="TableOfContents__UIhint">Click to scroll</p> */}
    </div>
  );
}
