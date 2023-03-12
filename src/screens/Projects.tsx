import "./styles/projects.css";
import { ProjectCard } from "../components/Containers";
import { Project, projects } from "../common/data";
export default function Projects() {
  return (
    <section id="Projects">
      <div className="project_title">
        <h1>Projects</h1>
      </div>
      <div className="project_container">
        {projects.map((props: Project) => (
          <div>pim pim</div>
        ))}
      </div>
    </section>
  );
}
