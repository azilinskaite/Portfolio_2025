import React from "react";
import "./Project.css";
import projects from "../../Data/projectsData";

const Project = ({ photo, title, paragraph, link1, link2 }) => {
  return (
    <section className="project">
      <div
        className="project-display"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <a
          href={link1}
          className="project-name-box"
          target="_blank"
          rel="noreferrer"
        >
          <h4>{title}</h4>
        </a>
      </div>
      <div className="project-details">
          <span>
            <a href={link1} target="_blank" rel="noreferrer">
              SEE LIVE
            </a>
            <a href={link2} target="_blank" rel="noreferrer">
              SEE CODE
            </a>
          </span>
          <p className="project-description">{paragraph}</p>
        </div>
    </section>
  );
};

function ProjectsList() {
  return (
    <section className="projects-container" id="work">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default ProjectsList;
