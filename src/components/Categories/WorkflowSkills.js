import React from "react";
import TableOfContents from "../TableOfContents/TableOfContents";

export default function WorkflowSkills() {
  return (
    <>
      <TableOfContents items={["Take your time in a hurry"]} />

      <div className="Category">
        <div data-scroll="0" className="Category__item">
          <h1>Take your time in a hurry</h1>
          <p>
            "Fast is fine, but accuracy is everything. In a gun fight... You
            need to take your time in a hurry." - Wyatt Earp
          </p>
          <p>
            Speed management is different from time management. Applying this
            difference is definitely an advantage you want.
          </p>
          <p>
            Working too slow, stagnancy and lack of clarity cripples in. Working
            too quickly, it's spray and pray all over the place. Steadfast doesn't work either.
          </p>
          <p>
            All of these items can and do work...sometimes. Other times, they
            lead to miserable stuttering, rushing or ineffective rigidity.
          </p>
          <h2>The problem</h2>
          <p>Under time pressure, we want to complete that next task FAST. This is rarely a benign desire, we really, really want it FAST. Job security, releasing the threat of being late, looking all competent and skillful, respect, practical ease, time, money...the line of incentives is virtually endless.</p>
          <p> </p>
        </div>

        <div className="Content__segregatorLine"></div>

        <div data-scroll="1" className="Category__item">
          <h1></h1>
        </div>
      </div>
    </>
  );
}
