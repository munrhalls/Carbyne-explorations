import React from "react";
import { useSphere } from "../../Contexts/SphereProvider";
import { poems } from "./../../Data/DataPoems";
import TableOfContents from "../TableOfContents/TableOfContents";
import { v4 as uuidv4 } from "uuid";

export const Content = {
  Welcome: function () {
    return (
      <div className="Content">
        <div className="Welcome">
          <h1>GENEROUS WELCOME!</h1>
          <h1>I AM MUNRHALLS.</h1>
          <h1>THIS IS MY REPOSITORY AND BLOG.</h1>

          <p>Use top-left drifting text-buttons to navigate!</p>
          <p>Currently, two content sections are avilable:</p>
          <ul>
            <li>My poems</li>
            <li>My programming works</li>
          </ul>
          <p>
            To check them out, use the drifting text-buttons in the black
            top-left section. They're the first two.
          </p>
          <p>Hope you enjoy my blog.</p>
          <p>Cheers,</p>
          <p>Munrhalls</p>
        </div>
      </div>
    );
  },
  Poems: function () {
    const content = useSphere();
    return (
      <>
        <TableOfContents items={poems.map((poem) => poem.title)} />

        <div className="Content">
          <div className="Poems">
            <h1 className="Poems__metaTitle">MY POEMS.</h1>
            {poems.map((poem, i) => {
              return (
                <div key={uuidv4()} className="Poems__poem">
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
        <TableOfContents
          items={["Oxus Flashcards", "Carbyne Explorations", "Vimeo Searcher"]}
        />
        <div className="Content">
          <div className="MyProgrammingWorks">
            <div className="MyProgrammingWorks__item">
              <h1>Oxus Flashcards</h1>
              <p>You can view the app here: </p>
              <p>
                <a href="https://oxus.netlify.app/" target="_blank">
                  OXUS FLASHCARDS
                </a>
              </p>
              <p>
                This is a large-scale, real-world web application, complete with
                rich{" "}
                <span className="--bold">
                  design (my design) components, animations, full UI and UX
                  functionality, users and content database, authentication,
                  full mobile responsiveness and a very-wide ranging array of
                  solutions that address pragmatic concerns, such as e.g.
                  minimizing requests to the server, writing custom hooks,
                  finding ways to maximally simplify the data model, component
                  communications and code organization, avoiding pitfalls such
                  as derived state in React state, and so on
                </span>
                ... all revolving around enabling a super simple, no-nonsense,
                easy-to-use electronic version of flashcards.
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
                Nothing else was used in this project. For me, it has been an
                enormously huge project to complete, I had so much to learn in
                order to be able to do even 1/5th of it. It's been extremely
                challenging, given that I've started with nearly 0 React skills
                (especially with the new-for-me hooks), however it was also a
                continuous, colorful, varied, stimulating learning experience,
                on many, many levels that, for me, went quite far beyond just
                coding and learning to code.
              </p>
              <p>
                This project is mostly pure React,CSS (BEM technique) and
                Javascript, and usage of concepts such as utilizing React's
                compositional nature or React context API and so on. It's wholly
                coded in React hooks, in terms of data model, including even
                database communication.
              </p>
              <p>
                It features pragmatically coherent usage of foundational and
                advanced React library concepts usage, very solid fundamentals
                of javascript, problem solving capabilities, code architecture
                skills. It also showcases solid degree of design skills,
                practical resourcefulness, experiential, pragmatic creativity, a
                range of important supplementary skills such as using version
                control system (GIT) or hosting and the ability to integrate all
                of that into a concrete, finished, completed, large-scale,
                real-world programming project.
              </p>
            </div>

            <div className="Content__segregatorLine"></div>

            <div className="MyProgrammingWorks__item">
              <h1>CARBYNE EXPLORATIONS</h1>
              <p>
                That's this very blog, that you're reading right now, Dear
                Reader{" : ) "}I have completed it to its current state in about
                10-12 days of intense training and learning endeavors.
              </p>
              <p>Well, here's the link anyway:</p>
              <p className="--hoverJk">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  href="https://carbyne-explorations.netlify.app/"
                  target="blank"
                >
                  CARBYNE EXPLORATIONS
                </a>

                <span>
                  Kidding {" :) "} That's the web app you're experiencing right
                  now, you're here already!
                </span>
              </p>

              <p>
                Before, I knew absolutely nothing about writing my own{" "}
                <a href="https://en.wikipedia.org/wiki/Scalable_Vector_Graphics">
                  SVG's
                </a>
                . I didn't even intend to, at all, to get into SVG's. I had a
                vision for this app and initially, I thought that it should be
                mostly doable with some resourceful CSS usage.
              </p>
              <p>
                At some point, I was doing so much hacky work with CSS and
                React, just to make some simple graphics, I realized it could
                literally be almost as simple to learn SVG's.
              </p>
              <p>
                It most certainly, in every sense of the word, wasn't as simple
                in any way, shape or form - however, great many styling ways,
                shapes and forms became so much easier for me to write, once I
                began to get a grasp of how to work effectively with SVG's.
              </p>
              <p>
                Every single graphic element in this blog app - Carbyne
                Explorations - has been performed in SVG's, solely by me.{" "}
              </p>
              <p>
                Carbyne Explorations is a name I came up with because I liked
                how it rang, to me, I feel like it resonates with the ideas of
                being a fierce, persistent, curious learner - like carbyne, just
                plowing and plowing and plowing and plowing and plowing and
                plowing, and plowing, and then plowing some more, and then
                plowing after that just to get some plowing done after plowing,
                until whatever's not yet understood, is understood and
                gradually, step by step by step, by another tiny small step,
                taken from the "can't and have absolutely no idea how, none
                whatsoever, zero and it looks like some gigantic mountain" bag,
                into the "can very well and feel comfortable performing that"
                bag.
              </p>
            </div>

            <div className="Content__segregatorLine"></div>

            <div className="MyProgrammingWorks__item">
              <h1>VIMEO SEARCHER</h1>
              <p>You can check the app here:</p>
              <p>
                <a href="https://vimeo-searcher.netlify.app/" target="_blank">
                  VIMEO SEARCHER
                </a>
              </p>
              <p>
                This app just searches{" "}
                <a href="https://vimeo.com/watch" target="_blank">
                  Vimeo
                </a>{" "}
                videos, utilizing Vimeo{" "}
                <a href="https://en.wikipedia.org/wiki/API" target="_blank">
                  API
                </a>
                .
              </p>
              <p>
                Design and everything else in that app, is solely performed by
                me.
              </p>
              <p>
                This is a very simple app. However, it still features addressing
                important pragmatic concerns, such as minimizing requests to the
                server with the use of local storage, and so on.
              </p>
              <p>
                I wanted to utilize youtube API and I did - however, youtube has
                put much of its API behind a paywall, the free API usage options
                are very limited, so I did Vimeo instead. However, Vimeo's API
                is slightly more complicated, so it was good practice {": )"}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  },
  WorkflowSkills: function () {
    return (
      <div className="Content">
        <div className="WorkflowSkills">
          <p>Mood choices</p>
          <p>Music, sound choices</p>
          <p>Approach choices</p>
          <p>How it comes together for some kinda personal rhytm</p>
          <h1>WORKFLOW SKILLS</h1>
        </div>
      </div>
    );
  },
  LearningSkills: function () {
    return (
      <div className="Content">
        <div className="LearningSkills">
          <h1>Learning SKILLS</h1>
        </div>
      </div>
    );
  },
  BookChoices: function () {
    return (
      <div className="Content">
        <div className="BookChoices">
          <h1>Book choices</h1>
        </div>
      </div>
    );
  },
  PracticalMeditation: function () {
    return (
      <div className="Content">
        <div className="PracticalMeditation">
          <h1>PracticalMeditation</h1>
        </div>
      </div>
    );
  },
  SleepWaterFoodExercisingResting: function () {
    return (
      <div className="Content">
        <div className="SleepWaterFoodExercisingResting">
          <h1>SleepWaterFoodExercisingResting</h1>
        </div>
      </div>
    );
  },
  Music: function () {
    return (
      <div className="Content">
        <div className="Music">
          <h1>Music</h1>
        </div>
      </div>
    );
  },
  EffectivenessRecipes: function () {
    return (
      <div className="Content">
        <div className="EffectivenessRecipes">
          <h1>EffectivenessRecipes</h1>
        </div>
      </div>
    );
  },
};
