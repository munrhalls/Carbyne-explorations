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

function App() {
  const { loading, content } = useSphere();
  useIntroAnim();

  console.log(content);
  const BGNavigationalRiverButtons = [
    "Effectiveness",
    "Music for work",
    "Practical meditation",
    "Best books",
    "Articles",
    "My programming works",
    "My poems",
  ];
  const contentComps = [
    "Effectiveness",
    "Music for work",
    "Practical meditation",
    "Best books",
    "Articles",
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
          <SVG.BGCaveRavineWhiteLaces />
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
          <div className="App__title">
            {!content && (
              <>
                <h1>WELCOME</h1>
                <h1>I AM MUNRHALLS</h1>
                <h1>THIS IS MY REPOSITORY AND BLOG</h1>
              </>
            )}
          </div>

          {BGNavigationalRiverButtons.map((navBtn) => {
            return (
              navBtn?.toUpperCase().trim() === content &&
              (function () {
                return contentComps[
                  BGNavigationalRiverButtons.indexOf(content) - 1
                ];
              })()
            );
          })}
          {content === "MY POEMS" && <Content.Poems />}
          {content === "MY PROGRAMMING WORKS" && <Content.MyProgrammingWorks />}
        </>
      </ScannerLoader>
    </div>
  );
}

export default App;
