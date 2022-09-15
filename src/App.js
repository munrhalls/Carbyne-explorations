// globals
import useWindowHeight from "./Hooks/useWindowHeight";
// app
import "./App.css";
import Nav from "./components/Nav/Nav";
import StylerLines from "./Stylers/StylerLines/StylerLines";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App" style={{ height: `${useWindowHeight()}px` }}>
      <Nav />
      <StylerLines distanceBetweenLines={2} />
      <Content />
    </div>
  );
}

export default App;
