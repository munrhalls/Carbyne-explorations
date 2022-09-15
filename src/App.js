// globals
import useWindowHeight from "./Hooks/useWindowHeight";
// app
import "./App.css";
import Nav from "./components/Nav/Nav";
import StylerLines from "./components/Styler/StylerLines";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App" style={{ height: `${useWindowHeight()}px` }}>
      <Nav />
      <StylerLines />
      <Content />
    </div>
  );
}

export default App;
