import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Letmekrn@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/isthis.karan?igsh=MTJ4d3I0aGwyMnkzaw==">
          <Insta color="white" size={"3rem"} />
          </a>
          
          <a href="https://www.linkedin.com/in/karan-singh-286151277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/isthiskaran">
          <Gitub color="white" size={"3rem"} />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
