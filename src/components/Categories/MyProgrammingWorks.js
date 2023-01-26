import React from "react";
import TableOfContents from "../TableOfContents/TableOfContents";
import { v4 as uuidv4 } from "uuid";

export default function MyProgrammingWorks() {
  return (
    <>
      <TableOfContents
        items={[
          "Carbyne Explorations",
          "Oxus Flashcards",
          "Vimeo Searcher",
          "Web app with ONLY Javascript",
          "Coffee shop website",
          "Snake",
          "Trying out Gatsby, a few blog entries",
        ]}
      />

      <div className="Category">
        <div data-scroll="0" className="Category__item">
          <h1>Oxus Flashcards</h1>
          <p>You can view the app here: </p>
          <p>
            <a href="https://oxus.netlify.app/" target="_blank">
              OXUS FLASHCARDS
            </a>
          </p>
          <p>This was a learning project. I started with zero React skills.</p>

          <p>
            The app is written in
            <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">
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
        </div>

        <div className="Content__segregatorLine"></div>

        <div data-scroll="1" className="Category__item">
          <h1>CARBYNE EXPLORATIONS</h1>
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

            <span>You're viewing it right now.</span>
          </p>
          <p>
            Before this project, I knew nothing about writing{" "}
            <a href="https://en.wikipedia.org/wiki/Scalable_Vector_Graphics">
              SVG's
            </a>
            .
          </p>
          <p>
            At some point, I was doing too much hacky work with CSS and React.
            That's why I turned to learning enough of SVG to write what I
            needed.
          </p>
          <p>
            Carbyne Explorations is a name I came up with because I liked how it
            rang. I feel like it resonates with the ideas of being a fierce,
            persistent, curious learner - like carbyne, just pushing through,
            relentlessly, until whatever's not yet understood, is understood.
            All in small, gradual steps, going from "Can't and I don't know what
            I'm looking at" to "Can and I'm competent about it."
          </p>
        </div>

        <div className="Content__segregatorLine"></div>

        <div data-scroll="2" className="Category__item">
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
            This app is nothing. I wanted to utilize youtube API, make a small
            project. No longer feasible. Youtube changed quotas. So I did a
            small vimeo API project. That's about it.
          </p>
          <p>Made a cool loader, though.</p>
        </div>

        <div className="Content__segregatorLine"></div>

        <div data-scroll="3" className="Category__item">
          <h1>
            Web app with ONLY Javascript, zero html/css files (all html/css is
            inside JS)
          </h1>
          <p>You can check it out here:</p>
          <p>
            <a href="https://month-glancer.netlify.app" target="_blank">
              Monthly clarity at a glance tiles project (training project, zero
              html/css, purely with javascript)
            </a>
          </p>
          <p>
            Failed project. Also failed learning endeavor. It was very
            time-inefficient.
          </p>
          <p>
            I am not ashamed of any of my failures. No reason I wouldn't put in
            here.
          </p>
          <p>
            For what it's worth, it's got drag & drop and is a colorful app that
            features calendar carousel and dropping color-responsive and
            size-responsive project tiles upon hour columns within a day, in a
            week, of a given month, that's within a carousel of all year's
            months, that's within a carousel of years.
          </p>
          <p>
            You can have a set of sound ideas but it takes one wrong idea
            unrealized, to make it all into a rotten seed, from out of which
            unrealized nonsense grows and consumes it all into a big pile of
            nonsense justifying nonsense, justifying further nonsense, making it
            all into a giant feat of time-waste.
          </p>
          <p>
            That's exactly what this project has taught me be wary of...wrong
            ideas steal time like nothing else.
          </p>
          <p>
            Projects aren't so much about "great ideas", they're much more about
            succesfully avoiding all "horrendous and wrong ideas" because when
            that is the case, all that's left is ideas that at least work well
            enough. That, by itself, is often surprisngly good for the simple
            reason that it works and is free of bad ideas.
          </p>
        </div>

        <div className="Content__segregatorLine"></div>

        <div data-scroll="4" className="Category__item">
          <h1>Coffee shop website</h1>
          <p>Random coffee web page from 2016. *Very* humble beginnings.</p>
          <p>You can check it out here:</p>
          <p>
            <a href="https://coffee-tabs.netlify.app/" target="_blank">
              Coffee website
            </a>
          </p>
        </div>

        <div className="Content__segregatorLine"></div>

        <div data-scroll="5" className="Category__item">
          <h1>Snake</h1>
          <p>
            Simple snake game, from a long time ago. At first, I wrote a simple
            website for dog food but it looked alright. Then, I did Zed Shaw's
            "Learn Ruby The Hard Way" which confused the heck out of me but I
            completed all exercises. After that I moved to "Headfirst
            Javascript" book. Then, I completed some battleships tutorial
            project. And then, snake was my first "on my own" project. I sank a
            ton of time into it, did it incredibly inefficiently, made a ton of
            errors - but I finished it and learned. That was the first baby step
            towards becoming a web developer.
          </p>
          <p>You can check it here:</p>

          <p>
            <a href="https://munrhalls.github.io/snake/" target="_blank">
              SNAKE
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
