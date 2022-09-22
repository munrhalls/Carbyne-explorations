// globals
import useWindowHeight from "./Hooks/useWindowHeight";
import useWindowWidth from "./Hooks/useWindowWidth";
// hooks
import useIntroAnim from "./Hooks/useIntroAnim";
// components
import "./App.css";
// stylers
// interactive informers
import ScannerLoader from "./components/ScannerLoader/ScannerLoader";
import { useSphere } from "./Contexts/SphereProvider";
import { SVG } from "./Stylers/SVG/SVG";
import { Content } from "./components/Content/Content";
import TableOfContents from "./components/TableOfContents/TableOfContents";

function App() {
  const { loading, content } = useSphere();
  // useIntroAnim();

  console.log(content);

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
              BGNavigationalRiverButtons={[
                "Effectiveness",
                "Music for work",
                "Practical meditation",
                "Best books",
                "Articles",
                "My programming works",
                "My poems",
              ]}
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

          {content && <TableOfContents />}
          {content === "MY POEMS" && <Content.Poems />}
        </>
      </ScannerLoader>
    </div>
  );
}

export default App;
