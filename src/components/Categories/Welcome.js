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
      <Title>At this point...</Title>
      <Subtitle>
        Let us drop some initial welcome footprints, as this is not quite the
        match between your likely expectations and the actual territory you've
        just entered.
      </Subtitle>
      <Subtitle>
        Some people may think this is a safe space. It is, very much so. I mean
        this in the context of this dreamy, space-like atmosphere that seems to
        be the background motive in this place. It also is, in many ways.
      </Subtitle>
      <Title>Be warned, even the paragraph below...</Title>
      <Subtitle>
        Some gentle or not-so gentle vulgarities emerge, sometimes. It is not my
        fault when a vulgarity happens to find a tremendously attractive dance
        partner between itself and the text piece that appears to be in need of
        being written. You will find them, here and there, every now and again.
        Obscene analogies abound around in this yard of spooky-awesome
        explorations. It's almost like they were pulling themselves out of their
        own back on their own, rolling and spiraling over upwards at some
        better-to-not-explain angles, and then streaming down from the nose, to
        live their own inappropriate, text-based life on the internet.
      </Subtitle>
      <Subtitle>
        Part of the reason for this, is that I am a hyper-realistic, extremely
        down-to-earth person in real life, and in my approach in general. I am
        anything but fanciful, when it comes to my way of doing things.
        Obscenities are a part of my humour. I just don't care. You got a
        problem with it, so be it. You don't have a problem with it, so be it. I
        have to inform you, my cares do not touch on that subject in any way.
      </Subtitle>
      <Subtitle>
        My cares, throghout all these texts, also don't really involve a lot of
        care of any kind, about what opinions are being shared - yet, I'm
        sharing explorations that are very real, diligent, thorough, solid even,
        despite the obvious inclination towards taking the creative arc and
        submerging deep into the abstract. In my subjective opinion, anyway. In
        short, remember - for what it's worth, these are just my opinions and
        nothing more.
      </Subtitle>
      <Subtitle></Subtitle>
      <Subtitle>I am Munrhalls. This is my blog. Enjoy.</Subtitle>
    </Welcome>
  );
}
