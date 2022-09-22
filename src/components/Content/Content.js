import React from "react";
import { useSphere } from "../../Contexts/SphereProvider";
import { poems } from "./../../Data/DataPoems";
import TableOfContents from "../TableOfContents/TableOfContents";

export const Content = {
  Poems: function () {
    const content = useSphere();
    return (
      <div className="Content">
        <TableOfContents />
        <div className="ContentPoems">
          <h1 className="ContentPoems__metaTitle">MY POEMS.</h1>
          {poems.map((poem, i) => {
            return (
              <>
                {poem}
                {i !== poems?.length - 1 && (
                  <div className="Content__segregatorLine"></div>
                )}
              </>
            );
          })}
        </div>
      </div>
    );
  },
};
