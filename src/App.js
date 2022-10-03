import React from "react";
// globals
import { useGlobContext } from "./Contexts/SphereProvider";
// hooks
import useIntroAnim from "./Hooks/useIntroAnim";
import useWindowHeight from "./Hooks/useWindowHeight";
import useWindowWidth from "./Hooks/useWindowWidth";
// components
import ScannerLoader from "./components/ScannerLoader/ScannerLoader";
import { SVG } from "./components/SVG/SVG";
import { Content } from "./components/Content/Content";
import { v4 as uuidV4 } from "uuid";
import "./App.css";

function App() {
  const { loading, content } = useGlobContext();
  useIntroAnim();

  return (
    <div
      className="App"
      style={{
        height: `${useWindowHeight()}px`,
        width: `${useWindowWidth()}px`,
      }}
      // onClick={(e) =>
      //   console.log(
      //     e.clientX / e.target.clientWidth,
      //     "///",
      //     e.clientY / e.target.clientHeight
      //   )
      // }
    >
      <ScannerLoader active={loading}>
        <SVG.CollectedShapesNavbar />
        <Content.DisplayManager />
      </ScannerLoader>
    </div>
  );
}

export default App;
