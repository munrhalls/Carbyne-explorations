import React from "react";
import { useGlobContext } from "../../Contexts/GlobProvider";
import Poems from "./Poems";
import MyProgrammingWorks from "./MyProgrammingWorks";
import WorkflowSkills from "./WorkflowSkills";
import LearningSkills from "./LearningSkills";
import SleepWaterFoodExercisingResting from "./SleepWaterFoodExercisingResting";
import BookChoices from "./BookChoices";
import PracticalMeditation from "./PracticalMeditation";
import Music from "./Music";
import EffectivenessRecipes from "./EffectivenessRecipes";

import TableOfContents from "../TableOfContents/TableOfContents";
import { v4 as uuidv4 } from "uuid";

export const Content = {
  Welcome: function () {
    return (
      <div className="Content">
        <div className="Welcome">
          <h1>GENEROUS WELCOME!</h1>
          <h1>I AM MUNRHALLS.</h1>
          <h1>THIS IS MY REPOSITORY AND BLOG.</h1>

          <p>Use top-left drifting text-buttons to navigate!</p>
          <p>Currently, two content sections are avilable:</p>
          <ul>
            <li>My poems</li>
            <li>My programming works</li>
          </ul>
          <p>
            To check them out, use the drifting text-buttons in the black
            top-left section. They're the first two.
          </p>
          <p>Hope you enjoy my blog.</p>
          <p>Cheers,</p>
          <p>Munrhalls</p>
        </div>
      </div>
    );
  },

  DisplayManager: function () {
    const { content } = useGlobContext();

    return (
      <>
        {!content && <Content.Welcome />}
        {content === "MY POEMS" && <Poems />}
        {content === "MY PROGRAMMING WORKS" && <MyProgrammingWorks />}
        {content === "WORKFLOW SKILLS" && <WorkflowSkills />}

        {content === "LEARNING SKILLS" && <LearningSkills />}
        {content === "SLEEPWATERFOOD EXERCISINGRESTING" && (
          <SleepWaterFoodExercisingResting />
        )}
        {content === "BOOK CHOICES" && <BookChoices />}

        {content === "PRACTICAL MEDITATION" && <PracticalMeditation />}
        {content === "MUSIC" && <Music />}
        {content === "EFFECTIVENESS RECIPES" && <EffectivenessRecipes />}
      </>
    );
  },
};
