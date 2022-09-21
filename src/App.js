// globals
import useWindowHeight from "./Hooks/useWindowHeight";
import useWindowWidth from "./Hooks/useWindowWidth";
// hooks
import useIntroAnim from "./Hooks/useIntroAnim";
// components
import "./App.css";
import Nav from "./components/Nav/Nav";
// stylers
// interactive informers
import ScannerLoader from "./components/ScannerLoader/ScannerLoader";
import { useSphere } from "./Contexts/SphereProvider";
import { SVG } from "./Stylers/SVG/SVG";

function App() {
  const { loading } = useSphere();
  // useIntroAnim();

  return (
    <div
      className="App"
      style={{
        height: `${useWindowHeight()}px`,
        width: `${useWindowWidth()}px`,
      }}
    >
      <ScannerLoader active={loading}>
        <SVG.BGanimStarDots />
        <SVG.BGblanket />
        <SVG.BGCaveLine />
        <SVG.BGCaveLineFill />
        <SVG.BGCircle />
        <SVG.BGCaveSteps />
        <SVG.BGCaveDots />

        <SVG.BGTitleLayerLine />
        <SVG.BGblanketOutline />
        <SVG.BGcontentContainer />
        <Nav />

        <div className="App__title">
          <h1>WELCOME</h1>
          <h1>I AM MUNRHALLS</h1>
          <h1>THIS IS MY REPOSITORY AND BLOG</h1>
        </div>
      </ScannerLoader>
    </div>
  );
}

export default App;
