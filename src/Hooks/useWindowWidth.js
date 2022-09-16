import React, { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(0);

  const calcWidth = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    setWidth(width);
  };

  useEffect(() => {
    calcWidth();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", calcWidth);

    return () => {
      window.removeEventListener("resize", calcWidth);
    };
  }, []);

  return width;
}
