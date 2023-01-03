import React from "react";
import SkillBackend from "./SkillsBackend";
import SkillsFrontEnd from "./SkillsFrontEnd";
import SkillsTools from "./SkillsTools";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      id="skills"
      className="skills"
    >
      <h1 className="title"> Skills</h1>
      <div className="skills-elements">
        <div className="frontend">
          <h3>Frontend</h3>
          <SkillsFrontEnd />
        </div>
        <div className="tools">
          <h3>Tools</h3>
          <SkillsTools />
        </div>

        <div className="backend">
          <h3>Backend</h3>
          <SkillBackend />
        </div>
      </div>
    </div>
  );
}
