import React from "react";
import { useSphere } from "../../Contexts/SphereProvider";

export const Content = {
  Poems: function () {
    const content = useSphere();

    return <div className="Content">POEMS</div>;
  },
};
