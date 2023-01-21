import React, { Component } from "react";
import "./App.css";

import HTMLlogo from "../src/images/HTML5logo.png";
import CSSlogo from "../src/images/CSS3logo.png";
import SASSlogo from "../src/images/SASSlogo.png";
import JSlogo from "../src/images/JSlogo.png";
import TSlogo from "../src/images/TSlogo.png";
import REACTlogo from "../src/images/REACTlogo.png";
import WEBPACKlogo from "../src/images/WEBPACKlogo.png";
import GITlogo from "../src/images/GITlogo.png";

export default function Tooler() {
  return (
    <div className="toolsBar">
      <img className="toolsLogo" src={HTMLlogo} />

      <img className="toolsLogo" src={CSSlogo} />

      <img className="toolsLogo" src={SASSlogo} />

      <img className="toolsLogo" src={JSlogo} />

      <img className="toolsLogo" src={TSlogo} />

      <img className="toolsLogo" src={REACTlogo} />

      <img className="toolsLogo" src={WEBPACKlogo} />

      <img className="toolsLogo" src={GITlogo} />
      <div className="div1">
        <img className="toolsLogo2" src={HTMLlogo} />

        <img className="toolsLogo2" src={CSSlogo} />

        <img className="toolsLogo2" src={SASSlogo} />

        <img className="toolsLogo2" src={JSlogo} />
      </div>
      <div className="div2">
        <img className="toolsLogo2" src={TSlogo} />

        <img className="toolsLogo2" src={REACTlogo} />

        <img className="toolsLogo2" src={WEBPACKlogo} />

        <img className="toolsLogo2" src={GITlogo} />
      </div>
    </div>
  );
}
