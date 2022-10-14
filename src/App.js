import React from "react";
import useIntroLoadingTime from "./Hooks/useIntroLoadingTime";
import useWindowHeight from "./Hooks/useWindowHeight";
import useWindowWidth from "./Hooks/useWindowWidth";
import { useGlobContext } from "./Contexts/GlobProvider";
import { SVG } from "./components/SVG/SVG";
import { ContentManager } from "./components/ContentManager/ContentManager";
import ScannerLoader from "./components/ScannerLoader/ScannerLoader";
import "./App.css";

function App() {
  const { loading } = useGlobContext();
  useIntroLoadingTime();

  return (
    <div
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
