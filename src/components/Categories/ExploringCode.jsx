import React from "react";
import TableOfContents from "../TableOfContents/TableOfContents";

export default function ExploringCode() {
  return (
    <>
      <TableOfContents items={["Practice session, 24.11.2022 - for...of..."]} />

      <div className="Category">
        <div data-scroll="0" className="Category__item">
          <h1>Practice session, 24.11.2022 - for...of...</h1>
          <h2>
            Guiding principle: depth over breadth - diving deeply into the
            source <br /> of a single failure.
          </h2>
          <h3>24.11.2022 ~10 </h3>
          <h3>Codewars Kata kyu8 - 1 - data structures</h3>
          <p style={{ color: "orange" }}>
            <br />• took me more than an hour <br />• reached a bug, can't quite
            solve
            <br />• solution is very hard to find <br />• code is hard to check
            and translate, somehow <br />• theme - makes sense but doesn't work
          </p>
          <p style={{ color: "#e47600" }}>
            <br />• unnoticed ommission - checked for 1 argument being
            undefined, but not the other <br />• it didn't occur to me to
            console.log both arguments
            <br />• it was very, very, very slow process over hours <br />• it
            took 2+ hours to achieve progress point: realizing that it was a
            syntax error <br />• did not solve, way too long <br />• the final
            solution, looks way different than my entire line of thinking <br />
            • Notice and not judge anything: I also forgot about the second part
            of the problem specification along the way
          </p>
          <p>Turns out, it was a wrong solving direction in the first place.</p>
          <h2>
            Harnessing and extracting <br />
            the lesson fruits.
          </h2>
          <h3 style={{ color: "darkblue" }}>
            1. Expanding my vocabulary of the screen's ciphers, rich proficiency
            with the coded tongue.
            <br /> <br />
            Can't make bricks without clay.
            <br /> <br />
            The "clay" is knowing that <br /> <br />
            a) various aspects and features of a language exist, <br /> <br />
            b) then training and being aware of various useful combinations
            between features, <br /> <br /> c) then, being aware of accumulating
            many disparate combinations into a functional whole.
          </h3>
          <h2>
            Javascript vocab expansion: <br /> concept of for..of...
          </h2>
          <h3>
            The loop of values sourced, items gathered one by one and only from
            a host who embraces being iterated upon...
          </h3>
          <p>
            "A for...of loop operates on the values sourced from an iterable one
            by one in sequential order. Each operation of the loop on a value is
            called an iteration, and the loop is said to iterate over the
            iterable. Each iteration executes statements that may refer to the
            current sequence value.""
          </p>
          <h3>CONCEPT BEHIND IT: </h3>
          <p>
            We've got a collection. So long as that collection is iterable, it
            can be iterated upon, language feature exists that can iterate over
            that, sourcing value from the iterable collection, and providing
            access to it in its body.
          </p>
          <h3>Made a quizz for myself:</h3>
          <h2>Wait why?</h2>
          <h2>
            The point is to have this in my fingertips <br /> and not have to
            think about it <br /> when I try to solve a problem.
          </h2>
          <h3>
            The real benefit is that all those energies are freed from the need
            to worry about blundering, making some basic error, typo and so on -
            it's much easier to code, when what's available at the fingertips,
            isn't always in need of being checked.
          </h3>
          <h3>
            That's equivalent of learning a foreign language - you could
            technically carry a dictionary with you because "you can just check
            it" - but in the conversational reality, that'd be very impractical
            and inefficient.
          </h3>
          <h3>
            When coding, you're having a conversation with the problem at hand.
            You don't want to have to pull out a dictionary every fifth thing
            you're trying to apply.
          </h3>
          <h3>But really, it's not the primary benefit.</h3>
          <h3>
            The true value out of having features of language at your fingertips
            (as well as the true fundamentals - data structures, algorithms), is
            that this is the "clay" - this is possessing a rich library of
            patterns and understandings that are like puzzles, that can be
            form-fitted, re-arranged, checked against the problem in all kinds
            of ways - that's what enables problem solving prowess, assuming it's
            backed up with lots of solid training of doing exactly that.
          </h3>
          <h3>
            It's RICH VOCABULARY AND GRAMMAR UNDERSTANDING, AWARENESS +
            WELL-TRAINED, FLUENT ABILITY OF USING THAT IN A FLEXIBLY RICH
            VARIETY OF WAYS === PROBLEM SOLVING PROWESS.
          </h3>
          <p>
            I'm also trying to engage as many channels, as I can, during
            learning.{" "}
          </p>
          <p>Explaining outloud.</p>
          <p>ELI5 WHY.</p>
          <p>Drawing. Diagrams, links, what with what.</p>
          <p>
            Gestures, vivid, like someone HAD TO UNDERSTAND or we fail a final
            exam.
          </p>
          <p>
            Richly imagining it. Mental palace, loci methods, all kinds of
            stuff, whatever fits.
          </p>
          <p>
            Explaining concept behind it. Going deep. Why of it. What's the use
            of that. When is NOT useful. When to not use it. When to use it.
            What's the point of it vs other stuff.
          </p>
          <p>
            How can I combine it with some other feature. What links of useful
            connection can I come up with. What set ups. What combinations.
          </p>
          <p>That's the point.</p>
          <h3>
            In the case of this specific problem - the key was to realize how
            COMBINING a conditional statement, with for ... of... - given that
            input could be an array, a string, or some other type - can make it
            easier to solve.
          </h3>
          <h3>
            Can combine conditional with such a loop, use conditional to get
            value out of the loop but then, shift another conditional, and now,
            the next iteration is precisely and always, the value right after
            the value provided in the 2nd argument, which is exactly what the
            task was about. Much better than a line of if checks.
          </h3>
          <h2>QUIZZ</h2>
          <p>
            <br /> 1 let str = "zxczxaewqewqqeweqweqw";
            <br /> 2 let num = 123534534453; <br /> 3 let arr = [1, 2, 3, 4];{" "}
            <br /> 4 let arrMixed = [123, 234, 3, 1, "z", "zx", "qweqw"];`
          </p>
          <h3>
            Given the above, when you run a sourced value loop, the for...of...
            on it and log the value, what will the Legendary Bug Collector, The
            Great Console Man tell you about it?
          </h3>
          <p>
            1 result? <br /> 2 result? <br /> 3 result? <br /> 4 result?
          </p>
          <h3>Let's go deeper:</h3>
          <p>
            ` 5 syntax by hand, for...of...
            <br /> 6 A for...of loop operates on.... <br /> 7 Each operation of
            the loop on a value is called .... and the loop is said to ....
          </p>
          <p>
            8 What's a data structures related use case, the one where I had
            varied input arg 1, and input arg 2 in a function, where I had to
            return the item that was the next in sequence after arg 2, in the
            arg1 sequence, while checking for obvious bounding conditions
            (undefined etc.)? How can that be solved using for...of...?
            <br /> 8 a) Explain the concept 8<br /> b) Code by hand
          </p>
          <p>
            9 Syntax: it's
            <br /> A) (for var y of ys) {} or <br /> B) for (var y of ys) {} ?
            <br /> 10 Syntax: for is inside parenthesis or outside?
          </p>
          <p>11 for `DETAIL WHAT1 of WHAT2 `DETAIL</p>
          <p>
            12 When setting up the conditional for next loop value, syntax is?
          </p>
          <p> 13 for of return within for of, returns the function or not? </p>
          <p>
            14 a return statement within for of loop body, what does it do to
            function?{" "}
          </p>
          <p>
            15 does the outside function run after the for of, if a return
            statement executes within for of loop?
          </p>
          <p>
            {" "}
            16 what does break do within for of body? 17 what does continue do
            within for of body?
          </p>
          <h3>
            I also wrote a response on the codewars, helping others to
            understand (hopefully, anyway, that can certainly be a blur to
            somebody):
          </h3>
          <p>
            Can think of it like this: <br /> - first, we set up way to handle
            all undefined cases <br /> - we'll be able to check and handle all
            other cases by combining the loop and if conditional <br /> - we can
            use guarded clause if that'll run only if the for loop doesn't
            return earlier <br />
            <br /> - we put return undefined at the end of the code block <br />{" "}
            - we know we need to return the value that is sequenced after the
            item <br /> - we can combine loop and conditional variable for
            COMBINED SET UP <br /> - when loop finds what it needs to find, we
            can tell it to modify variable outside of loop body <br />
            <br /> - which means the next iteration runs <br /> - and that
            iteration
            <br /> - it contains the next value, which is what we're looking for{" "}
            <br /> - and then and there <br /> - we can use the changed variable
            outside of the loop function <br /> - and when that variable it's
            true and only then <br /> <br /> - we can just return that value, as
            it's the value right after the previous value <br /> - and the
            previous value was a match, equal to item <br /> - so if we return
            the value from the iteration that is right after that iteration that
            found the match <br /> <br /> - that'll always be the value we're
            looking for, given the problem specification <br /> - we need a loop
            that can iterate over any iterable, not just array <br />
            <br /> - for...of... does that <br /> - now, in each iteration,
            we're getting the value <br /> - we check it against the item <br />{" "}
            - if it is the item
          </p>
          <p>
            1) Understanding what for...of...loop is & what a guarded clause
            (if) statement is,
            <br /> 2) Understanding how a SET UP can be achieved, by COMBINING a
            loop, and a conditional variable <br /> 3) Understanding how RETURN
            STATEMENT can COMBINED with the above SET UP, <br /> 4) Using these
            3 understandings to create a LOOP that CHECKS what it needs to
            check, MODIFIES the VARIABLE when it needs to, and USES THE SET UP
            to RETURN when it's time and does NOTHING if no check passes, swhich
            is caught by the last statement, the guarded clause if It's probably
            best to go at these one at a time, and really get each item more
            deeply in a successive progression.
          </p>
          <h3>
            If you didn't know any of this - and never saw the solution before -
            what would make solving it that way a 100x easier, is more or less:
          </h3>

          <p>
            1. Knowing that for...of... exists (study your toolset, study
            knowing a lot of vocabulary and phrasing, study being proficient in
            the tongue you're using) <br /> 2. Understanding what for...of... is
            in concept
            <br /> 3. Understanding in general that different pieces of a
            language can be combined together in some useful fashion <br /> 4.
            Understanding more specifically that conditional variable based on
            if, can be combined with a loop, in some useful ways <br /> 5.
            Understanding how to do it, being well-practiced in combining such
            distinct features of a language, some solid and varied reps,
            deliberate practice and training at specifically just that small
            combination, one at a time
            <br /> 6. Understanding what the problem is, in exact terms <br />{" "}
            7. Being able to look for windows of opportunity in a problem, for
            openings that can be used to accomplish what we want to accomplish
            out of it <br /> 8. Combining that ability with the toolset we
            learn, so we can be better and better at finding what we need to
            find because we have internalized the items that can match what we
            seek for <br /> 9. Now, that's a lot - with practice, many points
            become fewer, connected points, which ultimately become one chunk of
            learned concepts and internalized training relating to the scope of
            that chunk and its connection to other chunks
          </p>
        </div>
      </div>
    </>
  );
}
