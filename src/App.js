import React from "react";
// globals
import { useGlobContext } from "./Contexts/GlobProvider";
// hooks
import useIntroLoadingTime from "./Hooks/useIntroLoadingTime";
import useWindowHeight from "./Hooks/useWindowHeight";
import useWindowWidth from "./Hooks/useWindowWidth";
// components
import ScannerLoader from "./components/ScannerLoader/ScannerLoader";
import { SVG } from "./components/SVG/SVG";
import { Content } from "./components/Content/Content";
// style
import "./App.css";

function App() {
  const { loading } = useGlobContext();
  useIntroLoadingTime();

  return (
    <div
      onClick={(e) =>
        console.log(
          e.clientX / window.innerWidth,
          e.clientY / window.innerHeight
        )
      }
      className="App"
      style={{
        height: `${useWindowHeight()}px`,
        width: `${useWindowWidth()}px`,
      }}
    >
      <ScannerLoader active={loading}>
        <SVG.NAVBARFromCollectedShapes />
        <Content.DisplayManager />
      </ScannerLoader>
    </div>
  );
}

export default App;
