import React, { Component } from "react";
import "../css/App.css";

import HTMLlogo from "../images/HTML5logo.png";
import CSSlogo from "../images/CSS3logo.png";
import SASSlogo from "../images/SASSlogo.png";
import JSlogo from "../images/JSlogo.png";
import TSlogo from "../images/TSlogo.png";
import REACTlogo from "../images/REACTlogo.png";
import WEBPACKlogo from "../images/WEBPACKlogo.png";
import GITlogo from "../images/GITlogo.png";

export default function Tooler() {
  return (
    <div className="toolsBar">
      <img className="toolsLogo" src={HTMLlogo} />

      <img className="toolsLogo" src={CSSlogo} />

      <img className="toolsLogo" src={SASSlogo} />

      <img className="toolsLogo" src={JSlogo} />

      <img className="toolsLogo" src={REACTlogo} />

      <img className="toolsLogo" src={GITlogo} />
      <div className="div1">
        <img className="toolsLogo2" src={HTMLlogo} />

        <img className="toolsLogo2" src={CSSlogo} />

        <img className="toolsLogo2" src={JSlogo} />
      </div>
      <div className="div2">
        <img className="toolsLogo2" src={REACTlogo} />

        <img className="toolsLogo2" src={SASSlogo} />

        <img className="toolsLogo2" src={GITlogo} />
      </div>
    </div>
  );
}
