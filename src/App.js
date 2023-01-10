import "./App.css";
import "./nav.css";
import Slider from "./Slider";
import Nav from "./nav";
import Tooler from "./tooler";
import MyProjects from "./myProjects";
import Footer from "./Footer";

import Programmer from "./images/programmer2.png";

function App() {
  return (
    <div id="Home" className="App">
      <div className="header">
        <Nav />
      </div>

      <div className="body">
        <div className="container">
          <div className="divTomRad">
            <div className="divHi">
              <h2 className="tomRadHi">✌ Hi There! I'm Radicc</h2>
            </div>
            <h1 className="tomRadText">A Frontend developer</h1>
            <h3 className="tomRadUnderText">
              I am a selfthouhgt student of frontend developing trying to change
              profession. Experienced in HTML,CSS and JavaScript specializing in
              ReactJS library. Implementing CSS-extansion SASS and
              JavaScript-syntactical superset TypeScript.
            </h3>
          </div>

          <div className="notSliderContainer">
            <img className="notSliderImg" src={Programmer} />
          </div>
        </div>
        <Slider />
      </div>
      <Tooler />
      <MyProjects />

      <Footer />
    </div>
  );
}
export default App;
