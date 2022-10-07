import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useGlobContext } from "../../Contexts/GlobProvider";

export default function TableOfContents({ items }) {
  const { globColor } = useGlobContext();

  useEffect(() => {
    let entries = document.querySelectorAll("[data-scroll]");

    let options = {
      root: document.getElementsByClassName(".ContentMananger")[0],
      rootMargin: "0px",
      threshold: 0.25,
    };

    console.log(entries);

    const io = new IntersectionObserver((entries, options) => {
      entries.forEach((entry) => {
        console.log("OBSERVING!!!");
        if (entry.intersectionRatio > 0) {
          // Add 'active' class if observation target is inside viewport
          console.log("!!!!!!!!!!!!!!!!!");
          entry.target.classList.add("active");
        } else {
          // Remove 'active' class otherwise
          entry.target.classList.remove("active");
        }
      });
    });
    entries.forEach((entry) => {
      io.observe(entry);
    });
    return () => {
      entries.forEach((entry) => {
        io.unobserve(entry);
      });
    };
  }, [items]);

  function scrollTo(i) {
    const item = document.querySelector(`[data-scroll="${i}"]`);
    item.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      style={{ border: `3px solid ${globColor}` }}
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
      <p className="TableOfContents__UIhint">Click to scroll</p>
    </div>
  );
}
