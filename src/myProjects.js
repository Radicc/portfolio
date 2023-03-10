import React from "react";
import "./css/App.css";
import "./css/Cv.scss";

import ProjectFuture from "./images/ProjectNow.jpg";
import WallStreetProject from "./images/wallstreetProject.jpg";
import Portfolio from "./images/Portfolio.jpg";

import htmlLogo from "./images/html.png";
import sassLogo from "./images/sass.png";
import cssLogo from "./images/css.png";
import javaScriptLogo from "./images/javascript.png";
import reactLogo from "./images/react.png";
import npmLogo from "./images/npm.png";

export default function MyProjects() {
  return (
    <div id="Projects" className="myProjectsBody">
      <h1 className="projectsText">Projects</h1>
      <div className="projectBox1">
        <img
          className="imgBox1"
          src={WallStreetProject}
          onClick={() =>
            window.open("https://radicc.github.io/Research_Platform/", "_blank")
          }
        ></img>
        <div className="projectContainer2">
          <h2 className="projectContainerTitul">Research Platform</h2>
          <div className="logoes">
            <img src={htmlLogo} />
            <img src={sassLogo} />
            <img src={javaScriptLogo} />
            <img src={reactLogo} />
            <img src={npmLogo} />
          </div>
          <p className="textBox">
            Free investment educative website for people that want to improve
            money management skills. Retirement calculator, API stock news and
            study sections with important investment books, youtube channels and
            websites.
          </p>

          <div className="CVbutton2Container">
            <div
              disabled
              onClick={() =>
                window.open(
                  "https://github.com/Radicc/Research_Platform",
                  "_blank"
                )
              }
              className="Cvbutton2"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Code
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://radicc.github.io/Research_Platform/",
                  "_blank"
                )
              }
              className="Cvbutton2"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              VISIT
            </div>
          </div>
        </div>
      </div>

      <div className="projectBox2">
        <img
          onClick={() =>
            window.open("https://github.com/Radicc/profile", "_blank")
          }
          className="imgBox2"
          src={Portfolio}
          alt="error"
        ></img>
        <div className="projectContainer">
          <h2 className="projectContainerTitul">Portfolio</h2>
          <p className="textBox">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
            turpis in urna lacinia luctus. Phasellus placerat tempor urna nec
            condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Fusce dignissim tempus vestibulum.
            Aenean sed imperdiet ex. Etiam nisi eros, consectetur in venenatis
            nec, congue fermentum augue. Aenean tristique viverra metus, vel
            suscipit diam egestas ut. Nam scelerisque ipsum in lacinia placerat.
            Nullam id posuere massa, sit amet rhoncus nulla. Morbi suscipit urna
            vitae tellus viverra, sed scelerisque odio ultrices.
          </p>
          <div className="logoes">
            <img src={htmlLogo} />
            <img src={cssLogo} />
            <img src={javaScriptLogo} />
            <img src={reactLogo} />
            <img src={npmLogo} />
          </div>
          <div className="CVbutton2Container">
            <div
              disabled
              onClick={() =>
                window.open("https://github.com/Radicc/profile", "_blank")
              }
              className="Cvbutton2"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Code
            </div>
          </div>
        </div>
      </div>

      <div className="projectBox1">
        <img className="imgBox1" src={ProjectFuture}></img>
        <div className="projectContainer">
          <h2 className="projectContainerTitul">ESHOP</h2>
          <p className="textBox">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
            turpis in urna lacinia luctus. Phasellus placerat tempor urna nec
            condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Fusce dignissim tempus vestibulum.
            Aenean sed imperdiet ex. Etiam nisi eros, consectetur in venenatis
            nec, congue fermentum augue. Aenean tristique viverra metus, vel
            suscipit diam egestas ut. Nam scelerisque ipsum in lacinia placerat.
            Nullam id posuere massa, sit amet rhoncus nulla. Morbi suscipit urna
            vitae tellus viverra, sed scelerisque odio ultrices.
          </p>
          <div className="CVbutton2Container">
            <div
              disabled
              onClick={() => window.open("https://github.com/Radicc", "_blank")}
              className="Cvbutton2"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Code
            </div>
            <div className="Cvbutton2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              VISIT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
