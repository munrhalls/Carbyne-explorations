// globals
import useWindowHeight from "./Hooks/useWindowHeight";
// app
import "./App.css";
import TopMace from "./components/TopMace/TopMace";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App" style={{ height: `${useWindowHeight()}px` }}>
      <TopMace />
      <Content />
    </div>
  );
}

export default App;
