import React from "react";
import { v4 as uuid } from "uuid";
import NavStylerLines from "./NavStylerLines";

export default function NavStyler() {
  return (
    <div className="NavStyler">
      <NavStylerLines />
    </div>
  );
}
