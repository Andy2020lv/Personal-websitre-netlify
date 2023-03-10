import React from "react";
import js from "../images/js.png";
import ts from "../images/TS.png";
import react from "../images/react.png";
import next from "../images/nextJS.png";
import html5 from "../images/html5.png";
import css from "../images/css.png";

export default function SkillsFrontEnd() {
  return (
    <div className="skillList">
      <div className="skill">
        <img width={45} height={25} alt="skillsFrontEnd" src={js}></img>
        <p>Javascript</p>
      </div>
      <div className="skill">
        <img width={45} height={25} alt="skillsFrontEnd" src={ts}></img>
        <p>Typescript</p>
      </div>
      <div className="skill">
        <img width={45} height={25} alt="skillsFrontEnd" src={react}></img>
        <p>React</p>
      </div>
      <div className="skill">
        <img width={45} height={25} alt="skillsFrontEnd" src={next}></img>
        <p>NextJS</p>
      </div>
      <div className="skill">
        <img width={45} height={25} alt="skillsFrontEnd" src={html5}></img>
        <p>HTML</p>
      </div>
      <div className="skill">
        <img width={45} height={25} alt="skillsFrontEnd" src={css}></img>
        <p>CSS</p>
      </div>
    </div>
  );
}
