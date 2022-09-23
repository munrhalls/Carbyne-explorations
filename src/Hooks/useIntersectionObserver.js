import { useState, useEffect } from "react";
import React from "react";

export default function useIntersectionObserver() {
  function callback() {
    console.log("obs");
  }

  useEffect(() => {
    let options = {
      root: document.getElementsByClassName(".Content")[0],
      rootMargin: "0px",
      threshold: 1.0,
    };

    let observer = new IntersectionObserver(callback, options);
    document.querySelectorAll(".Content > *").forEach((contentEl) => {
      console.log(contentEl);
      observer.observe(contentEl);
    });
  }, []);

  return <div>useIntersectionObserver</div>;
}
