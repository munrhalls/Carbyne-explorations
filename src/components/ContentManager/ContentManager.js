import React from "react";
import { useGlobContext } from "../../Contexts/GlobProvider";
import Poems from "./../Categories/Poems";
import MyProgrammingWorks from "./../Categories/MyProgrammingWorks";
import WorkflowSkills from "./../Categories/WorkflowSkills";
import LearningSkills from "./../Categories/LearningSkills";
import SleepWaterFoodExercisingResting from "./../Categories/SleepWaterFoodExercisingResting";
import BookChoices from "./../Categories/BookChoices";
import PracticalMeditation from "./../Categories/PracticalMeditation";
import Music from "./../Categories/Music";
import EffectivenessRecipes from "./../Categories/EffectivenessRecipes";
import Welcome from "./../Categories/Welcome";

export const ContentManager = {
  CurrentItem: function () {
    const { content } = useGlobContext();

    return (
      <div className="ContentManager">
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
      </div>
    );
  },
};
