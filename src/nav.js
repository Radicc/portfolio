import React from "react";
import { useState } from "react";
import "./nav.css";
import "./BurgerMenu.css";

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
    <div>
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
            <img
              className="imgSocial"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
            <p className="socialText">GitHub</p>
          </a>

          <a
            className="social2"
            href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-radi%C4%8D-068044221/"
            target="_blank"
          >
            <img
              className="imgSocial"
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            />
            <p className="socialText">LinkedIn</p>
          </a>

          <a
            className="social3"
            href="https://twitter.com/TomRadi1"
            target="_blank"
          >
            <img
              className="imgSocial"
              src="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png"
            />
            <p className="socialText">Twitter</p>
          </a>

          <a
            className="social4"
            href="https://www.instagram.com/radic.o_o/"
            target="_blank"
          >
            <img
              className="imgSocial"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png"
            />
            <p className="socialText">Instagram</p>
          </a>
        </div>
      </div>

      <div onClick={handleClick} id="nav-icon2" className={Burger}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <a href="#Home">
        <h3 className="Radicc">RADICC</h3>
      </a>
    </div>
  );
}

/*<div className="pushMenu">
      <ul>
        <li src="#">Home</li>
        <li src="#">Portfolio</li>
        <li src="#">Contact</li>
        <li src="#">About me</li>
      </ul>
    </div>
*/
