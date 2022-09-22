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
        <TableOfContents items={["Oxus Flashcards", "Vimeo Searcher"]} />
        <div className="Content">
          <div className="MyProgrammingWorks">
            <div className="MyProgrammingWorks__item">
              <h1>Oxus Flashcards</h1>
              <p>You can view the app here: </p>
              <p>
                <a href="https://oxus.netlify.app/" target="_blank">
                  Oxus Flashcards
                </a>
              </p>
              <p>
                This is a large-scale, real-world web application, complete with
                rich design components, animations, full UI and UX
                functionality, <i>users and content database</i>,
                authentication... all revolving around enabling a super simple,
                no-nonsense, easy-to-use electronic version of flashcards.
              </p>

              <p>
                Everything in this app has been designed, coded and implemented
                solely by me over the course of about 2 months of intense
                learning, training and development.
              </p>

              <p>
                The app is written in
                <a
                  href="https://en.wikipedia.org/wiki/JavaScript"
                  target="_blank"
                >
                  {" "}
                  Javascript {", "}
                </a>
                <a
                  href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
                  target="_blank"
                >
                  React {", "}
                </a>
                <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">
                  CSS {", "}
                </a>
                <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">
                  HTML{" "}
                </a>{" "}
                in terms of front-end technologies, and{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Firebase"
                  target="_blank"
                >
                  Firebase
                </a>{" "}
                for server-side solutions, including{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Authentication"
                  target="_blank"
                >
                  authentication
                </a>{" "}
                and{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Database"
                  target="_blank"
                >
                  database
                </a>
                .
              </p>
              <p>
                Nothing else was used in this project. It's mostly pure React,
                CSS (BEM technique) and Javascript, and usage of concepts such
                as utilizing React's compositional nature or React context API
                and so on. It's wholly coded in React hooks, in terms of data
                model, including even database communication.
              </p>
              <p>
                It features coherent usage of foundational and advanced React
                library concepts usage, very solid fundamentals of javascript,
                problem solving capabilities, code architecture skills. It also
                showcases solid degree of design skills, practical
                resourcefulness, experiential, pragmatic creativity, a range of
                important supplementary skills such as using version control
                system (GIT) or hosting and the ability to integrate all of that
                into a concrete, finished, completed, large-scale, real-world
                programming project.
              </p>
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
