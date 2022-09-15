// globals
import useWindowHeight from "./Hooks/useWindowHeight";
// app
import "./App.css";
import Nav from "./components/Nav/Nav";
import NavStyler from "./components/NavStyler/NavStyler";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App" style={{ height: `${useWindowHeight()}px` }}>
      <Nav />
      <NavStyler />
      <Content />
    </div>
  );
}

export default App;
