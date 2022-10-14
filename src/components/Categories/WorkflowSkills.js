import React from "react";
import TableOfContents from "../TableOfContents/TableOfContents";
import styled from "@emotion/styled";

export default function WorkflowSkills() {
  const P = styled.p`
    margin-top: 0.75rem;
  `;
  return (
    <>
      <TableOfContents items={["Take your time in a hurry"]} />

      <div className="Category">
        <div data-scroll="0" className="Category__item">
          <h1>Take your time in a hurry</h1>
          <P>
            "Fast is fine, but accuracy is everything. In a gun fight... You
            need to take your time in a hurry." - Wyatt Earp
          </P>
          <P>
            Speed management is different from time management. Applying this
            difference is definitely an advantage you want.
          </P>
          <P>
            Working too slow, stagnancy and lack of clarity cripples in. Working
            too quickly, it's spray and pray all over the place. Steadfast
            doesn't work either.
          </P>
          <P>
            All of these items can and do work...sometimes. Other times, they
            lead to miserable stuttering, rushing or ineffective rigidity.
          </P>
          <h2>The problem</h2>
          <P>
            Under time pressure, we want to complete that next task FAST. This
            is rarely a benign desire, we really, really want it FAST. Job
            security, releasing the threat of being late, looking all competent
            and skillful, respect, practical ease, time, money...the line of
            incentives is not short.
          </P>
          <P>
            In fact, it is long enough to completely overpower common sense not
            once or twice, but nearly indefinitely. More so, this need for speed
            is so compelling, it completely conceals itself, too. It becomes the
            unrecognized influence.
          </P>
          <P>
            This is not a desirable influence. Actually, it's a type of a
            hard-to-notice tendency that frequently derails and delays, while
            being seen as pre-requirement to stay on track. It creates illusory
            speed and, simulatenously, decelerates real speed.
          </P>
          <P>
            What is that subtle, derailing tendency, exactly? More importantly,
            what can one practice to become better at spotting it?
          </P>
        </div>

        <div className="Content__segregatorLine"></div>

        <div data-scroll="1" className="Category__item">
          <h1></h1>
        </div>
      </div>
    </>
  );
}
