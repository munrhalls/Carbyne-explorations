import React from "react";
import TableOfContents from "../TableOfContents/TableOfContents";
import { v4 as uuidv4 } from "uuid";

export default function MyProgrammingWorks() {
  return (
    <>
      <TableOfContents
        items={[
          "Oxus Flashcards",
          "Carbyne Explorations",
          "Vimeo Searcher",
          "Web app with ONLY Javascript",
          "Coffee shop website",
          "Snake",
          "Trying out Gatsby, a few blog entries",
        ]}
      />
      <div className="Content">
        <div className="MyProgrammingWorks">
          <div data-scroll="0" className="MyProgrammingWorks__item">
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
                functionality, users and content database, authentication, full
                mobile responsiveness and a very-wide ranging array of solutions
                that address pragmatic concerns, such as e.g. minimizing
                requests to the server, writing custom hooks, finding ways to
                maximally simplify the data model, component communications and
                code organization, avoiding pitfalls such as derived state in
                React state, and so on
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
              <a href="https://en.wikipedia.org/wiki/Firebase" target="_blank">
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
              <a href="https://en.wikipedia.org/wiki/Database" target="_blank">
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
              continuous, colorful, varied, stimulating learning experience, on
              many, many levels that, for me, went quite far beyond just coding
              and learning to code.
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
              advanced React library concepts usage, very solid fundamentals of
              javascript, problem solving capabilities, code architecture
              skills. It also showcases solid degree of design skills, practical
              resourcefulness, experiential, pragmatic creativity, a range of
              important supplementary skills such as using version control
              system (GIT) or hosting and the ability to integrate all of that
              into a concrete, finished, completed, large-scale, real-world
              programming project.
            </p>
          </div>

          <div className="Content__segregatorLine"></div>

          <div data-scroll="1" className="MyProgrammingWorks__item">
            <h1>CARBYNE EXPLORATIONS</h1>
            <p>
              That's this very blog, that you're reading right now, Dear Reader
              {" : ) "}I have completed it to its current state in about 10-12
              days of intense training and learning endeavors.
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
              At some point, I was doing so much hacky work with CSS and React,
              just to make some simple graphics, I realized it could literally
              be almost as simple to learn SVG's.
            </p>
            <p>
              It most certainly, in every sense of the word, wasn't as simple in
              any way, shape or form - however, great many styling ways, shapes
              and forms became so much easier for me to write, once I began to
              get a grasp of how to work effectively with SVG's.
            </p>
            <p>
              Every single graphic element in this blog app - Carbyne
              Explorations - has been performed in SVG's, solely by me.{" "}
            </p>
            <p>
              Carbyne Explorations is a name I came up with because I liked how
              it rang, to me, I feel like it resonates with the ideas of being a
              fierce, persistent, curious learner - like carbyne, just plowing
              and plowing and plowing and plowing and plowing and plowing, and
              plowing, and then plowing some more, and then plowing after that
              just to get some plowing done after plowing, until whatever's not
              yet understood, is understood and gradually, step by step by step,
              by another tiny small step, taken from the "can't and have
              absolutely no idea how, none whatsoever, zero and it looks like
              some gigantic mountain" bag, into the "can very well and feel
              comfortable performing that" bag.
            </p>
          </div>

          <div className="Content__segregatorLine"></div>

          <div data-scroll="2" className="MyProgrammingWorks__item">
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
              Design and everything else in that app, is solely performed by me.
            </p>
            <p>
              This is a very simple app. However, it still features addressing
              important pragmatic concerns, such as minimizing requests to the
              server with the use of local storage, and so on.
            </p>
            <p>
              I wanted to utilize youtube API and I did - however, youtube has
              put much of its API behind a paywall, the free API usage options
              are very limited, so I did Vimeo instead. However, Vimeo's API is
              slightly more complicated, so it was good practice {": )"}
            </p>
          </div>

          <div className="Content__segregatorLine"></div>

          <div data-scroll="3" className="MyProgrammingWorks__item">
            <h1>Web app with ONLY Javascript</h1>
            <p>
              That project was about enabling the user to drag and drop colorful
              tiles, associated with same-colored projects and in that way, to
              see all that matters in a given month at a glance.
            </p>
            <p>
              This project was a huge training undertaking. The idea was to
              write something huge purely with Javascript and absolutely 0 html
              and 0 css. Not even the index file to insert the Javascript into
              the html file.
            </p>
            <p>
              It was a long time ago, about 2-3 years. What I remember most
              vividly, was creating abstractions and means for
              micro-automations, as creating html and css, that's just tons and
              tons and tons, and mega-tons of code lines.
            </p>
            <p>You can check it out here:</p>
            <p>
              <a href="https://month-glancer.netlify.app" target="_blank">
                Monthly clarity at a glance tiles project (training project,
                zero html/css, purely with javascript)
              </a>
            </p>
          </div>

          <div className="Content__segregatorLine"></div>

          <div data-scroll="4" className="MyProgrammingWorks__item">
            <h1>Coffee shop website</h1>
            <p>
              That's from 2016, when I wasn't even programming yet, I wasn't
              even a beginner at that time, however, I was getting my hands
              dirty with code and projects such as this website, these were my
              beginnings when it comes to writing practical things. Most of my
              projects then, they were all about some abstract ridiculous
              obscure coding thing or concept that just happened to really
              interest me.
            </p>
            <p>You can check it out here:</p>
            <p>
              <a href="https://coffee-tabs.netlify.app/" target="_blank">
                Coffee website
              </a>
            </p>
          </div>

          <div className="Content__segregatorLine"></div>

          <div data-scroll="5" className="MyProgrammingWorks__item">
            <h1>Snake</h1>
            <p>
              Simple snake game, from a long time ago. I used to write snake as
              training warm up, getting myself into a coding mood.
            </p>
            <p>You can check it here:</p>

            <p>
              <a href="https://munrhalls.github.io/snake/" target="_blank">
                SNAKE
              </a>
            </p>
          </div>

          <div className="Content__segregatorLine"></div>

          <div data-scroll="6" className="MyProgrammingWorks__item">
            <h1>Trying out Gatsby, a few blog entries</h1>
            <p>
              That's not really a project. It's just setting up Gatsby and
              hardly even that. It has a few unfinished articles at the moment.
              However, it is a near-future stepping stone for me to create a
              framework such as Gatsby, or something similar, entirely on my
              own.
            </p>
            <p>You can check it here:</p>
            <p>
              <a href="https://carbyne-explorer.netlify.app/" target="_blank">
                Blog using Gatsby framework
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
