import { useState } from "react";
import "./App.css";
import "./Footer.css";
import "./Header.css";
import Mail from "../src/images/mail.png";
import "./CvButton.scss";
import "./ContactSubmit.scss";

import gitHub from "../src/images/GitHub.png";
import linkedIN from "../src/images/linkedIN.png";
import twitter from "../src/images/twitterLogo.png";
import instagram from "../src/images/instagram.png";
import avatar from "../src/images/avatar.jpg";

export default function Footer(props) {
  //const [show, setShow] = useState("CvForm-Footer2None");
  const [ide, setIde] = useState("cvButt");

  //const [contact, setContact] = useState("contactBackgroundNone");

  const showCv = () => {
    if (props.CV === "CvForm-Footer2None") {
      props.setCV("CvForm-Footer2");
      setTimeout(() => setIde("ide"), 2000);
    } else {
      props.setCV("CvForm-Footer2None");
      setIde("cvButt");
    }
  };

  const showContact = () => {
    if (props.Mailos === "contactBackgroundNone") {
      props.setMail("contactBackgroundFlex");
    } else {
      props.setMail("contactBackgroundNone");
    }
  };

  return (
    <div className="containerFooter">
      <div className="buttonContainer">
        <a id="cvButt" href={"#" + ide} onClick={showCv} className="Cvbutton">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          CV
        </a>
      </div>

      <div id="ide" className={props.CV}>
        <div className="WhitePaper">
          <div className="LeftPaper">
            <img className="CvPicture" src={avatar}></img>
            <div className="Education">
              <h2>Education</h2>
              <p>Secondary School of Electrical Engineering</p>
              <p> Bratislava / Slovakia </p>
              <p> 2016-2020</p>
            </div>
            <div className="CvContact">
              <h3>Phone</h3>
              <p>+421 951 421 115</p>

              <h3>Email</h3>
              <p>tomas.radic00@gmail.com</p>

              <h3>Website</h3>
              <a>https://radicc.github.io/Portfolio/</a>

              <h3>Address</h3>
              <p>Malacky, Slovakia</p>
            </div>
          </div>
          <div className="RightPaper">
            <div className="NameTitul">
              <h1>TOMÁŠ RADIČ</h1>
              <p>SELFTHOUGHT FRONTEND DEVELOPER</p>
            </div>
            <div className="AboutMe">
              <h3 className="titles">ABOUT ME</h3>
              <p>
                I am a self-taught student of frontend development trying to
                change profession. Experienced in HTML, CSS and JavaScript
                specializing in ReactJS library and implementing CSS-extension
                SASS.
              </p>
            </div>
            <div className="AboutMe">
              <h3 className="titles">WORK EXPERIENCE</h3>
              <p>
                My journey is recorded on this website. Each project is designed
                so that I can get a job as a Frontend developer.
              </p>
            </div>
            <div className="AboutMe">
              <h3 className="titles">SOFTWARE SKILL</h3>
              <p>HTML, CSS, SASS, JAVASCRIPT, REACT.JS, GIT</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer1">
        <a
          className="socialFooterContainer1"
          href="https://github.com/Radicc"
          target="_blank"
        >
          <img className="footerSocial" src={gitHub} />
          <p className="footerText">GitHub</p>
        </a>
        <a
          className="socialFooterContainer2"
          href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-radi%C4%8D-068044221/"
          target="_blank"
        >
          <img className="footerSocial" src={linkedIN} />
          <p className="footerText">LinkedIn</p>
        </a>
        <a
          className="socialFooterContainer3"
          href="https://twitter.com/TomRadi1"
          target="_blank"
        >
          <img className="footerSocial" src={twitter} />
          <p className="footerText">Twitter</p>
        </a>
        <a
          className="socialFooterContainer4"
          href="https://www.instagram.com/radic.o_o/"
          target="_blank"
        >
          <img className="footerSocial" src={instagram} />
          <p className="footerText">Instagram</p>
        </a>
      </div>

      <div id="Contact" className="Footer2">
        <a href="#Contact" onClick={showContact}>
          MAIL ME NOW!
        </a>
        <img src={Mail} />
      </div>

      <form
        action="https://formsubmit.co/tomas.radic00@gmail.com"
        method="POST"
        className={props.Mailos}
      >
        <div className="contactContainer">
          <h1>CONTACT ME</h1>
          <input type="hidden" name="_subject" value="New submission!"></input>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            spellCheck="false"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            spellCheck="false"
            required
          />
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            spellCheck="false"
            required
          />
          <textarea
            rows="4"
            id="message"
            name="message"
            placeholder="How can i help you?"
            spellCheck="false"
          ></textarea>
          <div className="CVbutton2Container">
            <button type="submit" className="ContactSubmit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              SUBMIT
            </button>
          </div>
        </div>
      </form>

      <div className="Footer3">
        <p>© Copyright 2022, Tomas Radic All Rights Reserved.</p>
      </div>
    </div>
  );
}
