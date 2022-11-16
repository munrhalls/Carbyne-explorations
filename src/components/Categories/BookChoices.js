import React from "react";
import TableOfContents from "../TableOfContents/TableOfContents";

export default function BookChoices() {
  return (
    <>
      <TableOfContents items={["#1Josh Waitzkin, The Art of Learning"]} />

      <div className="Category">
        <div data-scroll="0" className="Category__item">
          <h1>The Art of Learning</h1>
          <h2>by Josh Waitzkin</h2>
          <p>
            “Growth comes at the point of resistance. We learn by pushing
            ourselves and finding what really lies at the outer reaches of our
            abilities.” — Josh Waitzkin
          </p>
          <p>
            Two utterly antithetical forces dance closely together in this book:
            unique self-expression, intense passion, love and on the other side,
            brutal, competetive toughness and confronting reality. The process
            and the hard result. The caring, sensitive patience and the crushing
            rawness of either winning or losing.
          </p>
          <p>
            This book is both artful and raw. It's abstract but simple. It's not
            an academic discourse. It's about how to get your hands dirty but in
            a way that, instead of dirt, aims to gather ever deeper depths of
            your unique potential...while keeping it real and taking on what's
            weak about you with honesty and directness.
          </p>
          <p>
            The author is a world-class martial artist. Two times world champion
            in Tai Chi Push Hands. Jiu-jitsu black belt. Before that, chess
            prodigy, winning U.S. Junior Chess championship two times and being
            heralded as one of the greatest talents in chess, except he quit
            chess in order to win world championships in martial arts.
          </p>
          <p>
            For me personally, this book is #1 reason why I was able to
            accelerate my learning rate in a way that allowed me to grasp web
            dev, enough to secure a job and work for 2 years as a frontend dev.
            Before that, programming wasn't on my radar. At age of 26, I had
            zero background in anything related to programming whatsoever. I
            only did some html/css basics at age of 15 because I was a brood war
            clan co-leader and we had a crude website where we wrote articles. I
            was a{" "}
            <a
              href="https://liquipedia.net/starcraft/StarCraft"
              target="_blank"
            >
              brood war
            </a>{" "}
            maniac - that hardcore, competetive game that becamse South Korea's
            national sport and launched the entire televised{" "}
            <a
              href="https://www.esportsearnings.com/games/152-starcraft-brood-war"
              target="_blank"
            >
              e-sports
            </a>{" "}
            industry.
          </p>
          <p>
            With this book, I saw how I could not just kinda get into
            programming - but how to set about a path that would keep me making
            progress towards creating what virtually no one else can, and it
            remains my vision - regardless of all the pressure, how much and how
            many times I've been thrown off course. The seeds of all that, I've
            found them in this very book. On a closing note, it's a very unique
            book and very interesting read in itself, true to author's overall
            attitude, it goes on like a riveting adventure story. Quite unlike
            any other I've found.
          </p>
        </div>

        <div className="Content__segregatorLine"></div>

        <div data-scroll="1" className="Category__item">
          <h1>Extreme Ownership</h1>
          <h2>by Jocko Willink, Leif Babin</h2>
        </div>
      </div>
    </>
  );
}
