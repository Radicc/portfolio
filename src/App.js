import "./App.css";
import "./Header.css";
import "./ToolsBar.css";
import "./ProjectsBody.css";

import Slider from "./Slider";
import Nav from "./nav";
import Tooler from "./tooler";
import MyProjects from "./myProjects";
import Footer from "./Footer";
import Programmer from "./images/programmer2.png";
import { useState } from "react";

function App() {
  const [CV, setCV] = useState("CvForm-Footer2None");
  const [Mailos, setMail] = useState("contactBackgroundNone");

  return (
    <div id="Home" className="App">
      <div className="header">
        <Nav setCV={setCV} setMail={setMail} />
      </div>

      <div className="introduction">
        <div className="container">
          <div className="divTomRad">
            <div className="divHi">
              <h2 className="tomRadHi">✌ Hi There! I'm Radicc</h2>
            </div>
            <h1 className="tomRadText">A Frontend developer</h1>
            <h3 className="tomRadUnderText">
              I am a self-taught student of frontend development trying to
              change profession. Experienced in HTML, CSS and JavaScript
              specializing in ReactJS library and implementing CSS-extension
              SASS.
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

      <Footer CV={CV} Mailos={Mailos} setCV={setCV} setMail={setMail} />
    </div>
  );
}
export default App;
