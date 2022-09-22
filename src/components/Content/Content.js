import React from "react";
import { useSphere } from "../../Contexts/SphereProvider";
import { poems } from "./../../Data/DataPoems";
import TableOfContents from "../TableOfContents/TableOfContents";
import { v4 as uuidv4 } from "uuid";

export const Content = {
  Poems: function () {
    const content = useSphere();
    return (
      <>
        <TableOfContents />
        <div className="Content">
          <div className="ContentPoems">
            <h1 className="ContentPoems__metaTitle">MY POEMS.</h1>
            {poems.map((poem, i) => {
              return (
                <div className="ContentPoems__poem">
                  {poem}
                  {i !== poems?.length - 1 && (
                    <div className="Content__segregatorLine"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  },
};
