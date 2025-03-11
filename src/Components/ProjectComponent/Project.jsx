import React from "react";
import "./Project.css";

const Project = ({ photo, title, info, link1, link2 }) => {
    return (
        <section className="project-display" style={{backgroundImage: `url(${photo})`}}>
            <div className="project-name-box">
                <h3>{title}</h3>
            </div>
            <div className="project-details">
                <p>{info}</p>
                <span>
                    <a href={link1}>netlify</a>
                    <a href={link2}>github</a>
                </span>
            </div>


        </section>

    );
}

export default Project;