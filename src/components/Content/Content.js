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
import Welcome from "./Welcome";

export const Content = {
  DisplayManager: function () {
    const { content } = useGlobContext();

    return (
      <>
        {!content && <Welcome />}
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
