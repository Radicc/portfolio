import React from "react";
import "./App.css";
import "./Cv.scss";
import Project from "./project.jpg";
import Project2 from "./project2.jpg";
import ProjectFuture from "./ProjectNow.jpg";

export default function MyProjects() {
  return (
    <div id="Projects" className="myProjectsBody">
      <h1 className="projectsText">Projects</h1>
      <div className="projectBox1">
        <img className="imgBox1" src={ProjectFuture} alt="error"></img>
        <div className="projectContainer">
          <h2>MY PORTFOLIO</h2>
          <p className="textBox1">
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
          <div className="Cvbutton2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            VISIT NOW!
          </div>
        </div>
      </div>

      <div className="projectBox2">
        <img className="imgBox2" src={ProjectFuture}></img>
        <div className="projectContainer2">
          <h2>ESHOP</h2>
          <p className="textBox2">
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

          <div className="Cvbutton2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            VISIT NOW!
          </div>
        </div>
      </div>

      <div className="projectBox1">
        <img className="imgBox1" src={ProjectFuture}></img>
        <div className="projectContainer">
          <h2>ESHOP</h2>
          <p className="textBox1">
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
  );
}
