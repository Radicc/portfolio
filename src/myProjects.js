import React from "react";
import "./css/App.css";
import "./css/Cv.scss";

import ProjectFuture from "./images/ProjectNow.jpg";
import WallStreetProject from "./images/wallstreetProject.jpg";

export default function MyProjects() {
  return (
    <div id="Projects" className="myProjectsBody">
      <h1 className="projectsText">Projects</h1>
      <div className="projectBox1">
        <img
          onClick={() =>
            (window.location.href =
              "https://radicc.github.io/Research_Platform/")
          }
          className="imgBox1"
          src={WallStreetProject}
          alt="error"
        ></img>
        <div className="projectContainer">
          <h2 className="projectContainerTitul">Research Platform</h2>
          <p className="textBox">
            Investment educative website with tools like a Retirement calculator
            and study sections with free information about the best investment
            books, youtube channels, and websites. In the future, I am going to
            add StockAnalyzer tool for calculating the fair value of specific
            stock and fundamental information like the Metrics, Income
            Statement, Balance Sheet and Cashflow.
          </p>
          <div className="CVbutton2Container">
            <div
              disabled
              onClick={() =>
                (window.location.href =
                  "https://radicc.github.io/Research_Platform/")
              }
              className="Cvbutton2"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              VISIT NOW!
            </div>
          </div>
        </div>
      </div>

      <div className="projectBox2">
        <img className="imgBox2" src={ProjectFuture}></img>
        <div className="projectContainer2">
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
            <div className="Cvbutton2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              VISIT NOW!
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
            <div className="Cvbutton2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              VISIT NOW!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
