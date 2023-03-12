import "./styles/skills.css";

import { SkillsOuterContainer } from "../components/Containers";
import {
  skillsBackend,
  skillsFrontend,
  skillsMobile,
  otherSkills,
} from "../common/data";

export default function Skills() {
  return (
    <section id="Skills">
      <div className="skills_title">
        <h1>Skills</h1>
      </div>

      <div className="skill_container">
        <SkillsOuterContainer title="Back-End" children={skillsBackend} />
        <SkillsOuterContainer title="Front-End" children={skillsFrontend} />
        <SkillsOuterContainer title="Mobile" children={skillsMobile} />
        <SkillsOuterContainer title="Others" children={otherSkills} />
      </div>
    </section>
  );
}
