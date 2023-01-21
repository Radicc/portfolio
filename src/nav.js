import React from "react";
import { useState } from "react";

import "./BurgerMenu.css";
import "./Header.css";

import gitHub from "../src/images/GitHub.png";
import linkedIN from "../src/images/linkedIN.png";
import twitter from "../src/images/twitterLogo.png";
import instagram from "../src/images/instagram.png";

export default function Nav(props) {
  const [Active, IsActive] = useState("off");
  const [Style, setStyle] = useState("pushMenuHidden");
  const [Burger, setBurger] = useState("");

  const handleClick3 = () => {
    IsActive("off");
    setStyle("pushMenuHidden");
    setBurger("");
    props.setCV("CvForm-Footer2");
  };
  const handleClick2 = () => {
    IsActive("off");
    setStyle("pushMenuHidden");
    setBurger("");
    props.setMail("contactBackgroundFlex");
  };

  const handleClick = () => {
    if (Active === "off") {
      IsActive("true");
      setStyle("pushMenuDown");
      setBurger("open");
    } else {
      IsActive("off");
      setStyle("pushMenuHidden");
      setBurger("");
    }
  };

  return (
    <div className="headerContainer">
      <div onClick={handleClick} id="nav-icon2" className={Burger}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <a className="Radicc" href="#Home">
        RADICC
      </a>

      <div className={Style}>
        <div className="containerNav">
          <div className="greenBox"></div>
          <ul className="ulNav">
            <li>
              <a onClick={handleClick} href="#Home">
                Home
              </a>
            </li>
            <li>
              <a onClick={handleClick} href="#Projects">
                Portfolio
              </a>
            </li>
            <li>
              <a onClick={handleClick3} href="#cvButt">
                CV
              </a>
            </li>
            <li>
              <a onClick={handleClick2} href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="containerSocial">
          <a
            className="social1"
            href="https://github.com/Radicc"
            target="_blank"
          >
            <img className="imgSocial" src={gitHub} />
            <p className="socialText">GitHub</p>
          </a>

          <a
            className="social2"
            href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-radi%C4%8D-068044221/"
            target="_blank"
          >
            <img className="imgSocial" src={linkedIN} />
            <p className="socialText">LinkedIn</p>
          </a>

          <a
            className="social3"
            href="https://twitter.com/TomRadi1"
            target="_blank"
          >
            <img className="imgSocial" src={twitter} />
            <p className="socialText">Twitter</p>
          </a>

          <a
            className="social4"
            href="https://www.instagram.com/radic.o_o/"
            target="_blank"
          >
            <img className="imgSocial" src={instagram} />
            <p className="socialText">Instagram</p>
          </a>
        </div>
      </div>
    </div>
  );
}
