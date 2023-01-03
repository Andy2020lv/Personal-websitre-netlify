import React from "react";
import git from "../images/git.png";
import heroku from "../images/heroku.png";

export default function SkillsTools() {
  return (
    <div className="skillList">
      <div className="skill">
        <img width={45} height={25} alt="tools" src={git}></img>
        <p>Git</p>
      </div>
      <div className="skill">
        <img width={45} height={25} alt="tools" src={heroku}></img>
        <p>Heroku</p>
      </div>
    </div>
  );
}
