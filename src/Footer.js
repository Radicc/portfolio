import { useState } from "react";
import "./App.css";
import "./Footer.css";
import Mail from "../src/images/mail.png";
import "./CvButton.scss";

export default function Footer() {
  const [show, setShow] = useState("CvForm-Footer2None");
  const [ide, setIde] = useState("cvButt");

  const showCv = (e) => {
    if (show === "CvForm-Footer2None") {
      setShow("CvForm-Footer2");
      setTimeout(() => setIde("ide"), 2000);
      // For Chrome, Firefox, IE and Opera
    } else {
      setShow("CvForm-Footer2None");
      setIde("cvButt");
    }
  };

  return (
    <div className="containerFooter">
      <a id="cvButt" href={"#" + ide} onClick={showCv} className="Cvbutton">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        CV
      </a>
      <div id="ide" className={show}>
        <div className="WhitePaper">
          <div className="LeftPaper">
            <img
              className="CvPicture"
              src="https://www.fredericvigier.com/wp-content/uploads/2021/01/directeur-communication-photo-cv.jpg"
            ></img>
            <div className="Education">
              <h2>Education</h2>
              <p>
                High school eletronical enginering Karola Adlera / Bratislava /
                Slovakia / 2016-2020
              </p>
            </div>
            <div className="Reference">
              <h2>Reference</h2>
              <p>2021 - 2022</p>
              <p>Elektrikár</p>
              <p>GAOL Energy Slovakia, s.r.o.</p>
            </div>
            <div className="CvContact">
              <h3>Phone</h3>
              <p>+421 000 000 0000</p>

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
              <h3>ABOUT ME</h3>
              <p>
                I am a selfthouhgt student of frontend developing trying to
                change profession. Experienced in HTML,CSS and JavaScript
                specializing in ReactJS library. Implementing CSS-extansion SASS
                and JavaScript-syntactical superset TypeScript.
              </p>
            </div>
            <div className="AboutMe">
              <h3>WORK EXPERIENCE</h3>
              <p>
                I am a selfthouhgt student of frontend developing trying to
                change profession. Experienced in HTML,CSS and JavaScript
                specializing in ReactJS library. Implementing CSS-extansion SASS
                and JavaScript-syntactical superset TypeScript.
              </p>
            </div>
            <div className="AboutMe">
              <h3>SOFTWARE SKILL</h3>
              <p>
                I am a selfthouhgt student of frontend developing trying to
                change profession. Experienced in HTML,CSS and JavaScript
                specializing in ReactJS library. Implementing CSS-extansion SASS
                and JavaScript-syntactical superset TypeScript.
              </p>
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
          <img
            className="footerSocial"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
          <p className="footerText">GitHub</p>
        </a>
        <a
          className="socialFooterContainer2"
          href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-radi%C4%8D-068044221/"
          target="_blank"
        >
          <img
            className="footerSocial"
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          />
          <p className="footerText">LinkedIn</p>
        </a>
        <a
          className="socialFooterContainer3"
          href="https://twitter.com/TomRadi1"
          target="_blank"
        >
          <img
            className="footerSocial"
            src="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png"
          />
          <p className="footerText">Twitter</p>
        </a>
        <a
          className="socialFooterContainer4"
          href="https://www.instagram.com/radic.o_o/"
          target="_blank"
        >
          <img
            className="footerSocial"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png"
          />
          <p className="footerText">Instagram</p>
        </a>
      </div>

      <div id="Contact" className="Footer2">
        <a>MAIL ME NOW!</a>
        <img src={Mail} />
      </div>

      <div className="Footer3">
        <p>© Copyright 2022, Tomas Radic All Rights Reserved.</p>
      </div>
    </div>
  );
}
