// globals
import useWindowHeight from "./Hooks/useWindowHeight";
import useWindowWidth from "./Hooks/useWindowWidth";
// hooks
import useIntroAnim from "./Hooks/useIntroAnim";
// components
import "./App.css";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
// stylers
import StylerLines from "./Stylers/StylerLines/StylerLines";
// interactive informers
import ScannerLoader from "./components/ScannerLoader/ScannerLoader";
import { useSphere } from "./Contexts/SphereProvider";
import Blanket from "./Stylers/Blanket/Blanket";

function App() {
  const { loading } = useSphere();
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
        <Blanket />
        <Nav />
        <Content />
      </ScannerLoader>
    </div>
  );
}

export default App;
