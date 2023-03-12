import "./styles/experience.css";
import { ExperienceContainer } from "../components/Containers";
import { educationItems, jobsItems } from "../common/data";

export default function Experience() {
  return (
    <section id="Experience">
      <div className="title">
        <h1>Experience</h1>
      </div>
      <div className="exp_container">
        <ExperienceContainer type={0} children={educationItems} />
        <ExperienceContainer type={1} children={jobsItems} />
      </div>
    </section>
  );
}
