// globals
import useWindowHeight from "./Hooks/useWindowHeight";
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

function App() {
  const { loading } = useSphere();
  useIntroAnim();

  return (
    <div className="App" style={{ height: `${useWindowHeight()}px` }}>
      <ScannerLoader active={loading}>
        <Nav />
        <StylerLines distanceBetweenLines={0.5} />
        <Content />
      </ScannerLoader>
    </div>
  );
}

export default App;
