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
        <TableOfContents items={poems.map((poem) => poem.title)} />

        <div className="Content">
          <div className="ContentPoems">
            <h1 className="ContentPoems__metaTitle">MY POEMS.</h1>
            {poems.map((poem, i) => {
              return (
                <div key={uuidv4()} className="ContentPoems__poem">
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
  },
  MyProgrammingWorks: function () {
    return (
      <>
        <TableOfContents />
        <div className="Content">
          <div className="MyProgrammingWorks">
            <div className="MyProgrammingWorks__item">
              <h1>Oxus Flashcards</h1>
              <a href="https://oxus.netlify.app/" target="_blank">
                Oxus Flashcards{" "}
              </a>
            </div>

            <div className="Content__segregatorLine"></div>
            <div className="MyProgrammingWorks__item">
              <h1>Vimeo Searcher</h1>
            </div>
            <div className="MyProgrammingWorks__item">
              <h1></h1>
            </div>
            <div></div>
          </div>
        </div>
      </>
    );
  },
};
