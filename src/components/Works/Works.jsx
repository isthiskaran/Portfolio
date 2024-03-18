import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Allen from "../../img/allen.png";
import Codesoft from "../../img/codesoft.png";
import Work from "../../img/work.png";

import Codeclause from "../../img/codeclasue.png";
import Faction from "../../img/faction.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
          Internship : Applied industry coding practices to real projects.
            <br />
            College projects :  Refined coding skills through teamwork.
            <br />
            Integrated internship and college work for strong coding foundation.
            <br />
            Achieved adaptability and efficiency in software development.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Allen} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Codesoft} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Work} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Faction} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Codeclause} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
