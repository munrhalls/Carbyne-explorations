// globals
import useWindowHeight from "./Hooks/useWindowHeight";
import useWindowWidth from "./Hooks/useWindowWidth";
// hooks
import useIntroAnim from "./Hooks/useIntroAnim";
// components
import "./App.css";
import Nav from "./components/Nav/Nav";
// stylers
// interactive informers
import ScannerLoader from "./components/ScannerLoader/ScannerLoader";
import { useSphere } from "./Contexts/SphereProvider";
import { SVG } from "./Stylers/SVG/SVG";

function App() {
  const { loading, content } = useSphere();
  // useIntroAnim();
  console.log(content);
  return (
    <div
      className="App"
      style={{
        height: `${useWindowHeight()}px`,
        width: `${useWindowWidth()}px`,
      }}
      onClick={(e) =>
        console.log(
          e.clientX / e.target.clientWidth,
          "///",
          e.clientY / e.target.clientHeight
        )
      }
    >
      <ScannerLoader active={loading}>
        <SVG.BGanimStarDots />
        <SVG.BGblanket />
        <SVG.BGCaveLine />
        <SVG.BGCaveRavineWhiteLaces />
        <SVG.BGCaveLineFill />
        <SVG.BGCircle />
        <SVG.BGCaveSteps />
        <SVG.BGCaveDots />

        <SVG.BGTitleLayerLine />
        <SVG.BGblanketOutline />
        <SVG.BGcontentContainer />
        <SVG.AppTitle />

        <SVG.BGUpholderConnectorXer />
        <SVG.BGNavigationalAntennae />
        <SVG.BGNavigationalRiver />

        <Nav />
        <div className="App__title">
          {!content && (
            <>
              <h1>WELCOME</h1>
              <h1>I AM MUNRHALLS</h1>
              <h1>THIS IS MY REPOSITORY AND BLOG</h1>
            </>
          )}
        </div>

        {content === "POETRY" && (
          <div className="Content">
            <h1>MY POEMS.</h1>
            {/* refactor */}
            <h1 style={{ fontWeight: "bold", marginTop: "1rem" }}>
              LIQUID AIR ABUSER
            </h1>
            <p>Sober liquids flow through, the veins of airy vastness.</p>
            Winds work a little bit weird, in these channels.
            <p>
              A slight hurricane even, is but another invisibility, presenting
              no difference, same as nothing.
            </p>
            How can you drink, from a bottle like this?
            <p>What good is a bottle, when it's invisible?</p>
            "Scam! There's no bottle, in there...", complains the addict, of
            mirages.
            <p>
              Thirst for something to see. To touch and hear. Smell or taste.
            </p>
            Indicipheribility, my friend, is a bottle of another kind.
            <p>
              It's fluids, light like a feather, yet molten from true meaning,
              are undrinkable.
            </p>
            They do not quench, the thirst of expectation.
            <p>
              Indicipherable liquids, aren't meant and do not, quench fictional
              thirsts.
            </p>
            They quench one and only one, kind of thirst:
            <p>the thirst of all thirsts.</p>
            Even those that exist only, in the realm of possibilities.
            <p>
              It is for this reason, that no pair of quench and thirst, ever
              tried to drink apart, from the one table.
            </p>
            Except, of course, all the fictional stories.
            <p>These do not have any problem, splitting, from the one table.</p>
            There are stories, that are, actually, not fiction.
            <p>There's only one problem, with these, though:</p>
            they exist.
            <p>What drinks fit on the table, when telling such stories?</p>{" "}
            <br></br>
            <h3>Poem by: MUNRHALLS.</h3>
            <br></br>
            <br></br>
          </div>
        )}
      </ScannerLoader>
    </div>
  );
}

export default App;
