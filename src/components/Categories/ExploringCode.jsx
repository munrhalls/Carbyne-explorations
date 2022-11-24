import React from "react";
import TableOfContents from "../TableOfContents/TableOfContents";

export default function ExploringCode() {
  return (
    <>
      <TableOfContents items={["Practice session, 24.11.2022 - for...of..."]} />

      <div className="Category">
        <div data-scroll="0" className="Category__item">
          <h1>Practice session, 24.11.2022 - for...of...</h1>

          <h3>24.11.2022 ~10 </h3>
          <h3>Codewars Kata kyu8 - 1 - data structures</h3>
          <p style={{ color: "orange" }}>
            Codewars Kata kyu8 - 1 - data structures • takes more than an hour •
            reached a bug, can't quite solve • solution is very hard to find •
            code is hard to check and translate, somehow • theme - makes sense
            but doesn't work
          </p>
          <p style={{ color: "darkorange" }}>
            • unnoticed ommission - checked for 1 argument being undefined, but
            not the other • it didn't occur to me to console.log both arguments
            • it was very, very, very slow process over hours • it took 2+ hours
            to achieve progress point: realizing that it was a syntax error •
            did not solve, way too long • the final solution, looks way
            different than my entire line of thinking • Notice and not judge
            anything: I also forgot about the second part of the problem
            specification along the way
          </p>
          <h3>Harnessing and extracting the fruits:</h3>
          <p style={{ color: "darkblue", background: "#eaeaea", opacity: 0.9 }}>
            Expanding my vocabulary of the screen's ciphers, proficiency with
            the encoded tongue of precision:
          </p>
          <h3>
            The loop of values sourced, items gathered one by one and only from
            a host who embraces being iterated upon...
          </h3>
          <p>The for...of...</p>
          <p>
            A for...of loop operates on the values sourced from an iterable one
            by one in sequential order. Each operation of the loop on a value is
            called an iteration, and the loop is said to iterate over the
            iterable. Each iteration executes statements that may refer to the
            current sequence value.
          </p>
          <h3>Made a quizz for myself:</h3>
          <p>
            `QUIZZ: 1 let str = "zxczxaewqewqqeweqweqw"; 2 let num =
            123534534453; 3 let arr = [1, 2, 3, 4]; 4 let arrMixed = [123, 234,
            3, 1, "z", "zx", "qweqw"];`
          </p>
          <h3>
            Given the above, when you run a sourced value loop, the for...of...
            on it and log the value, what will the Legendary Bug Collector, The
            Great Console Man tell you about it?
          </h3>
          <p>1 result? 2 result? 3 result? 4 result?</p>
          <h3>Let's go deeper:</h3>
          <p>
            ` 5 syntax by hand, for...of... 6 A for...of loop operates on.... 7
            Each operation of the loop on a value is called .... and the loop is
            said to ....
          </p>
          <p>
            8 What's a data structures related use case, the one where I had
            varied input arg 1, and input arg 2 in a function, where I had to
            return the item that was the next in sequence after arg 2, in the
            arg1 sequence, while checking for obvious bounding conditions
            (undefined etc.)? How can that be solved using for...of...? 8 a)
            Explain the concept 8 b) Code by hand
          </p>
          <p>
            9 Syntax: it's A) (for var y of ys) {} or B) for (var y of ys) {} ?
            10 Syntax: for is inside parenthesis or outside?
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
            Can think of it like this: - first, we set up way to handle all
            undefined cases - we'll be able to check and handle all other cases
            by combining the loop and if conditional - we can use guarded clause
            if that'll run only if the for loop doesn't return earlier - we put
            return undefined at the end of the code block - we know we need to
            return the value that is sequenced after the item - we can combine
            loop and conditional variable for COMBINED SET UP - when loop finds
            what it needs to find, we can tell it to modify variable outside of
            loop body - which means the next iteration runs - and that iteration
            - it contains the next value, which is what we're looking for - and
            then and there - we can use the changed variable outside of the loop
            function - and when that variable it's true and only then - we can
            just return that value, as it's the value right after the previous
            value - and the previous value was a match, equal to item - so if we
            return the value from the iteration that is right after that
            iteration that found the match - that'll always be the value we're
            looking for, given the problem specification - we need a loop that
            can iterate over any iterable, not just array - for...of... does
            that - now, in each iteration, we're getting the value - we check it
            against the item - if it is the item
          </p>
          <p>
            1) Understanding what for...of...loop is & what a guarded clause
            (if) statement is, 2) Understanding how a SET UP can be achieved, by
            COMBINING a loop, and a conditional variable 3) Understanding how
            RETURN STATEMENT can COMBINED with the above SET UP, 4) Using these
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
            the tongue you're using) 2. Understanding what for...of... is in
            concept 3. Understanding in general that different pieces of a
            language can be combined together in some useful fashion 4.
            Understanding more specifically that conditional variable based on
            if, can be combined with a loop, in some useful ways 5.
            Understanding how to do it, being well-practiced in combining such
            distinct features of a language, some solid and varied reps,
            deliberate practice and training at specifically just that small
            combination, one at a time 6. Understanding what the problem is, in
            exact terms 7. Being able to look for windows of opportunity in a
            problem, for openings that can be used to accomplish what we want to
            accomplish out of it 8. Combining that ability with the toolset we
            learn, so we can be better and better at finding what we need to
            find because we have internalized the items that can match what we
            seek for 9. Now, that's a lot - with practice, many points become
            fewer, connected points, which ultimately become one chunk of
            learned concepts and internalized training relating to the scope of
            that chunk and its connection to other chunks
          </p>
        </div>
      </div>
    </>
  );
}
