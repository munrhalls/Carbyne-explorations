import React from "react";

export default function OneByOne({ children, doStuffFunc }) {
  if (!doStuffFunc) return children;

  return (
    <>
      {children.map((el) => {
        return doStuffFunc(el);
      })}
    </>
  );
}
