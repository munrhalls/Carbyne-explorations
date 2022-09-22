import React from "react";
import { useSphere } from "../../Contexts/SphereProvider";

export const Content = {
  Poems: function () {
    const content = useSphere();

    return (
      <div className="Content">
        <div className="ContentPoems">
          <h1 className="ContentPoems__metaTitle">MY POEMS.</h1>

          <div className="ContentPoems__poem">
            <h1 className="ContentPoems__poem__title">LIQUID AIR ABUSER</h1>
            <p>Sober liquids flow through, the veins of airy vastness.</p>
            Winds work a little bit weird, in these channels.
            <p>
              A slight hurricane even, is but another invisibility, presenting
              no difference, same as nothing.
            </p>
            How can you drink, from a bottle like this?
            <p>What good is a bottle, when it's invisible?</p>
            "Scam! There's no bottle, in there...", complains the addict, of
            mirages.
            <p>
              Thirst for something to see. To touch and hear. Smell or taste.
            </p>
            Indicipheribility, my friend, is a bottle of another kind.
            <p>
              It's fluids, light like a feather, yet molten from true meaning,
              are undrinkable.
            </p>
            They do not quench, the thirst of expectation.
            <p>
              Indicipherable liquids, aren't meant and do not, quench fictional
              thirsts.
            </p>
            They quench one and only one, kind of thirst:
            <p>the thirst of all thirsts.</p>
            Even those that exist only, in the realm of possibilities.
            <p>
              It is for this reason, that no pair of quench and thirst, ever
              tried to drink apart, from the one table.
            </p>
            Except, of course, all the fictional stories.
            <p>These do not have any problem, splitting, from the one table.</p>
            There are stories, that are, actually, not fiction.
            <p>There's only one problem, with these, though:</p>
            they exist.
            <p>What drinks fit on the table, when telling such stories?</p>{" "}
            <br></br>
            <h3>Poem by: MUNRHALLS.</h3>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    );
  },
};
