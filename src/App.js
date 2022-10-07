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
// style
import "./App.css";
import { ContentManager } from "./components/ContentManager/ContentManager";

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
        <ContentManager.CurrentItem />
      </ScannerLoader>
    </div>
  );
}

export default App;
