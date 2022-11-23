import React from "react";
import styled from "@emotion/styled";

export default function Welcome() {
  const Welcome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-weight: bold;
    padding-bottom: 2rem;
  `;
  const Title = styled.h1`
    margin: 2rem auto 0;
    font-weight: bold;
    text-align: center;
    font-size: 1.75rem;
  `;
  const Subtitle = styled.h2`
    margin-top: 1.5rem;
    font-size: 1.25rem;
    font-weight: normal;
  `;

  return (
    <Welcome>
      <Title> Welcome to Carbyne Explorations!</Title>
      <Subtitle>
        It's called Carbyne because thematically, this is a place where the
        surreal meets practical. Explorations, as the destination is not about
        knowledge or proofs, instead, it is about seeking ways to expand the
        causal skill of acquiring skills.
      </Subtitle>
      <Subtitle>
        These sharings are as forthcoming, as they are subjective. Consider it a
        journey into a dreamspace of different kind.
      </Subtitle>
      <Subtitle>I am Munrhalls. This is my blog. Enjoy.</Subtitle>
    </Welcome>
  );
}
