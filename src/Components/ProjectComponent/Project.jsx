import React from "react";
import "./Project.css";

const Project = ({ photo, title, infoPt1, infoPt2, link1, link2 }) => {
  return (
    <section
      className="project-display"
      style={{ backgroundImage: `url(${photo})` }}
    >
      <a href={link1} className="project-name-box" target="_blank" rel="noreferrer">
        <h3>{title}</h3>
      </a>
      <div className="project-details">
        <span>
          <a href={link1} target="_blank" rel="noreferrer">
            netlify
          </a>
          <a href={link2} target="_blank" rel="noreferrer">
            github
          </a>
        </span>
        <p className="paragraph1">{infoPt1}</p>
        <p className="paragraph2">{infoPt2}</p>
      </div>
    </section>
  );
};

export default Project;
