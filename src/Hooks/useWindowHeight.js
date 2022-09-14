import React, { useState, useEffect } from "react";

export default function useWindowHeight() {
  const [height, setHeight] = useState(0);

  const calcHeight = () => {
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    setHeight(height);
  };

  useEffect(() => {
    calcHeight();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", calcHeight);

    return () => {
      window.removeEventListener("resize", calcHeight);
    };
  }, []);
  return height;
}
