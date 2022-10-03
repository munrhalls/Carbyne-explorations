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
import "./App.css";

function App() {
  const { loading } = useGlobContext();
  useIntroAnim();

  return (
    <div
      className="App"
      style={{
        height: `${useWindowHeight()}px`,
        width: `${useWindowWidth()}px`,
      }}
    >
      <ScannerLoader active={loading}>
        <SVG.CollectedShapesNavbar />
        <Content.DisplayManager />
      </ScannerLoader>
    </div>
  );
}

export default App;
