import React from "react";
// globals
import { useSphere } from "./Contexts/SphereProvider";
import useWindowHeight from "./Hooks/useWindowHeight";
import useWindowWidth from "./Hooks/useWindowWidth";
// hooks
import useIntroAnim from "./Hooks/useIntroAnim";
// components
import "./App.css";
import ScannerLoader from "./components/ScannerLoader/ScannerLoader";
import { SVG } from "./Stylers/SVG/SVG";
import { Content } from "./components/Content/Content";
import { v4 as uuidV4 } from "uuid";

function App() {
  const { loading, content } = useSphere();
  // useIntroAnim();

  const BGNavigationalRiverButtons = [
    "Effectiveness",
    "Music for work",
    "Practical meditation",
    "Book choices",
    "SleepWaterFood ExercisingResting",
    "Workflow skills",
    "My programming works",
    "My poems",
  ];
  const contentComps = [
    "Effectiveness",
    "Music for work",
    <Content.PracticalMeditation />,
    <Content.BookChoices />,
    <Content.SleepWaterFoodExercisingResting />,
    <Content.WorkflowSkills />,
    <Content.MyProgrammingWorks />,
    <Content.Poems />,
  ];

  return (
    <div
      className="App"
      style={{
        height: `${useWindowHeight()}px`,
        width: `${useWindowWidth()}px`,
      }}
      onClick={(e) =>
        console.log(
          e.clientX / e.target.clientWidth,
          "///",
          e.clientY / e.target.clientHeight
        )
      }
    >
      <ScannerLoader active={loading}>
        <>
          <SVG.BGanimStarDots />
          <SVG.BGblanket />
          <SVG.BGCaveLine />
          <SVG.BGClepsidreBridgeway />
          <SVG.BGCaveLineFill />
          <SVG.BGCircle />
          <SVG.BGCaveSteps />
          <SVG.BGCaveDots />
          <SVG.BGTitleLayerLine />
          <SVG.BGblanketOutline />
          <SVG.BGcontentContainer />
          <SVG.AppTitle />
          <SVG.BGUpholderConnectorXer />
          <SVG.BGNavigationalAntennae />
          <SVG.BGNavigationalRiver>
            <SVG.BGNavigationalRiverButtons
              BGNavigationalRiverButtons={BGNavigationalRiverButtons}
            />
          </SVG.BGNavigationalRiver>
          {!content && <Content.Welcome />}

          {BGNavigationalRiverButtons.map((navBtn) => {
            const navBtnCaps = navBtn?.toUpperCase().trim();
            return (
              <React.Fragment key={uuidV4()}>
                {navBtnCaps === content &&
                  contentComps[
                    BGNavigationalRiverButtons.map((el) =>
                      el.toUpperCase().trim()
                    ).indexOf(content)
                  ]}
              </React.Fragment>
            );
          })}
        </>
      </ScannerLoader>
    </div>
  );
}

export default App;
