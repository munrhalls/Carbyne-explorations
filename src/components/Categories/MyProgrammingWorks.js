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

      <div className="Category">
        <div data-scroll="0" className="Category__item">
          <h1>Oxus Flashcards</h1>
          <p>You can view the app here: </p>
          <p>
            <a href="https://oxus.netlify.app/" target="_blank">
              OXUS FLASHCARDS
            </a>
          </p>
          <p>
            This was a learning project. I started with zero React skills and
            build a larger, intermediate level web app with practically useful
            functionality, database and user authentication, over the course of
            about 2 months.
          </p>
          <p>
            Code sucks in a lot of ways, obviously but it has some okay points,
            some solid points even. Still does its job, though.
          </p>
          <p>
            Overall architecture, I have no idea. It does what it needs to do.
            It has some okay points.
          </p>
          <p>
            For example, you can take a camera snapshot with your phone and
            immediately add it to a flashcard. You can easily create a
            collection of such photo-based flashcards very easily.
          </p>
          <p>
            You can do so as a registered user, and it's autosaved in the
            database. Photos are saved, within flashcards, on the database - and
            it doesn't require any storage. All utilizing base64.
          </p>
          <p>
            Firebase database, I created a model: user id -> deck ids. That's
            all.
          </p>
          <p>
            Yet, every deck, in a decks list for a given user id, it has all the
            user-created flashcards, including photos. I used base64, turns out
            I can store images within flashcards within a deck, with a deckss
            list, that way, it doesn't exceed the size limit too fast.
          </p>
          <p>
            Most importantly, I minimized requests to the server. User can
            change a 50, a 100 flashcards in all kinds of ways - 0 requests.
          </p>
          <p>
            A request happens only upon saving deck changes. It counts as 1
            document rewrite in a collection, in the database. 1 request, for
            what can easily be 20-50 changes.
          </p>
          <p>
            UX/UI - it's crude in some ways, it has a few okay spots here and
            there. I think the loader's quite alright. Some other extra
            animations are clearly over the top.
          </p>
          <p>
            I asked for feedback about the UI/UX and indeed, it has a lot of
            suboptimal stuff in there. Good lessons.
          </p>
          <p>
            Overall, just good lessons. It was all done by me, including the
            design of everything, from UI/UX to database model for things such
            as managing photo snapshots / flashcard, over many flashcards, over
            many decks, etc.
          </p>
          <p>
            That's why these were good lessons, I had a vision but a lot to
            figure out from nothing.
          </p>

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
          <p>What's up. You're here, now. Cheers.</p>
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

            <span>So you can drag your cursor over it for no reason.</span>
          </p>

          <p>
            Before, I knew absolutely nothing about writing my own{" "}
            <a href="https://en.wikipedia.org/wiki/Scalable_Vector_Graphics">
              SVG's
            </a>
            .
          </p>
          <p>
            At some point, I was doing so much hacky work with CSS and React,
            just to make some simple graphics, I realized it could literally be
            almost as simple to learn SVG's.
          </p>
          <p>
            Carbyne Explorations is a name I came up with because I liked how it
            rang, to me, I feel like it resonates with the ideas of being a
            fierce, persistent, curious learner - like carbyne, just plowing and
            plowing and plowing and plowing and plowing and plowing, and
            plowing, and then plowing some more, and then plowing after that
            just to get some plowing done after plowing, until whatever's not
            yet understood, is understood and gradually, step by step by step,
            by another tiny small step, taken from the "can't and have
            absolutely no idea how, none whatsoever, zero and it looks like some
            gigantic mountain" bag, into the "can very well and feel comfortable
            performing that" bag.
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
            Design and everything else in that app, is solely performed by me.
          </p>
          <p>
            This is a very simple app. However, it still features addressing
            important pragmatic concerns, such as minimizing requests to the
            server with the use of local storage, and so on.
          </p>
          <p>
            I wanted to utilize youtube API and I did - however, youtube has put
            much of its API behind a paywall, the free API usage options are
            very limited, so I did Vimeo instead. However, Vimeo's API is
            slightly more complicated, so it was good practice {": )"}
          </p>
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
            It's mostly a failed project. It's also a failed learning endeavor,
            it was time-inefficient.
          </p>
          <p>
            I am not in the least ashamed of any of my failures, though. There's
            no reason I wouldn't put in here.
          </p>
          <p>
            It's still drag & drop, colorful app that features full-scale
            calendar carousel and dropping color-responsive and size-responsive
            project tiles upon hour columns within a day, in a week, of a given
            month, that's within a carousel of all year's months, that's within
            a carousel of years.
          </p>
          <p>All that and zero html/css files. All html/css inside of JS.</p>
          <p>
            It's a failed project and a very failed learning endeavor but it
            still has some okay points.
          </p>
          <p>
            Most importantly, it taught me a lot about what NOT to do, in terms
            of learning through challenges. I learned about learning.
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

        <div data-scroll="6" className="Category__item">
          <h1>Trying out Gatsby, a few blog entries</h1>
          <p>
            That's not really a project. I just tried out Gatsby and wrote a few
            articles. That's about it.
          </p>
          <p>You can check it here:</p>
          <p>
            <a href="https://carbyne-explorer.netlify.app/" target="_blank">
              Blog using Gatsby framework
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
