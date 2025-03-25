import React from "react";
import "./Project.css";

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
              NETLIFY
            </a>
            <a href={link2} target="_blank" rel="noreferrer">
              GITHUB
            </a>
          </span>
          <p className="project-description">{paragraph}</p>
        </div>
    </section>
  );
};

export default Project;
