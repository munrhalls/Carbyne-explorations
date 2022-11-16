import React from "react";
import TableOfContents from "../TableOfContents/TableOfContents";
import styled from "@emotion/styled";

export default function WorkflowSkills() {
  const P = styled.p`
    margin-top: 0.75rem;
  `;
  return (
    <>
      <TableOfContents items={["Introduction", "Take your time in a hurry"]} />

      <div className="Category">
        <div data-scroll="0" className="Category__item">
          <h1>Introduction</h1>
          <P>
            Most of what I talk about in here stands on the mental shoulders of
            the ideas taken from the best books I know of, some of which I
            present in the "book choices" section, and then processed by the
            shaping influences of the device called direct experience.
          </P>
          <P>
            When I give it the term "workflow skills", I mean the collection of
            tools and items, married with the ability to train and use them
            well, that make it easier to shape and manage my stream of
            activities in a way that is more aware, more strategic, more
            accurate, direct, synchronized, coherent and relevant to the task at
            hand, as opposed to "just doing it" or falling down the other side
            of theoretic naivety.
          </P>

          <h3>
            The purpose of training and developing real workflow skills is to be
            able to effectively and efficiently solve problems with ineffective
            and inefficient work.{" "}
          </h3>
          <p>
            The most effective and efficient way to solve those problems is to
            avoid and minimize them in the first place, before they even have a
            chance to materialize. To cover the possibilities of bad work
            occurring, essentially.
          </p>
          <p>
            The cause of training and developing accurate workflow skills is the
            painful experience of seeing just how much real results are NOT
            about putting in more effort but instead, how much they ARE about
            putting in the best tools and tools usage that you can.
          </p>
          <h3>
            Workflow skills are items that are used to continously shape the
            stream of activities aimed at a achieving a given goal-state, such
            that the said stream is as close to the shape of optimal
            effectiveness and efficiency ratio, as availably possible in the
            current moment.{" "}
          </h3>
        </div>
        <div data-scroll="1" className="Category__item">
          <h1>Take your time in a hurry</h1>
          <P>
            "Fast is fine, but accuracy is everything. In a gun fight... You
            need to take your time in a hurry." - Wyatt Earp
          </P>
          <P></P>
        </div>

        <div className="Content__segregatorLine"></div>

        <div data-scroll="1" className="Category__item">
          <h1></h1>
        </div>
      </div>
    </>
  );
}
