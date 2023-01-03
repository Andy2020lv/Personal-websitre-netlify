import React from "react";
import node from "../images/node.png";
import express from "../images/express.png";
import mongoDB from "../images/mongoDB.png";
import mySQL from "../images/mySQL.png";

export default function SkillBackend() {
  return (
    <div className="skillList">
      <div className="skill">
        <img width={45} height={25} alt="skillsBackEnd" src={node}></img>
        <p>Node JS</p>
      </div>
      <div width={35} height={25} className="skill">
        <img alt="skillsBackEnd" src={express}></img>
        <p>Express</p>
      </div>
      <div className="skill">
        <img width={45} height={25} alt="skillsBackEnd" src={mongoDB}></img>
        <p>MongoDB</p>
      </div>
      <div className="skill">
        <img width={35} height={25} alt="skillsBackEnd" src={mySQL}></img>
        <p>MySQL</p>
      </div>
    </div>
  );
}
