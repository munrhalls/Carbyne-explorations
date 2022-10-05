import React from "react";
import { poems } from "./../../Data/DataPoems";
import { useGlobContext } from "../../Contexts/GlobProvider";
import TableOfContents from "../TableOfContents/TableOfContents";
import { v4 as uuidV4 } from "uuid";

export default function Poems() {
  const content = useGlobContext();

  return (
    <>
      <TableOfContents items={poems.map((poem) => poem.title)} />

      <div className="Content">
        <div className="Poems">
          <h1 className="Poems__metaTitle">MY POEMS.</h1>
          {poems.map((poem, i) => {
            return (
              <div key={uuidV4()} data-scroll={`${i}`} className="Poems__poem">
                {poem?.content}

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
}
