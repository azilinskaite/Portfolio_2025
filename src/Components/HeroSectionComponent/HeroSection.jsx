import React from "react";
import "./HeroSectionStyles.css";

const HeroSection = () => {
  return (
    <section className="hero-section" id="about">
      <h1>Hi, I'm Adele <br /> Zilinskaite – front end <br />developer & designer*</h1>
      <p>
      Beginner Front-End developer currently studying at Hyper Island in Stockholm, Sweden. I'm excited about building creative digital projects and enjoy the challenge of problem-solving. With over six years of experience in the fashion design field, I've developed a strong ability to combine technical and creative thinking. Currently, I'm looking forward to opportunities that will allow me to deepen my skills and apply them in real-world projects. I'm eager to explore how my diverse background can contribute to innovative projects!
      </p>
      <hr />
      <div className="bottom-line">
      <ul>
        <li>FIGMA</li>
        <li>CSS</li>
        <li>TAILWIND</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
        <li>GIT</li>
      </ul>
      <a className="email" href="mailto:zilinskaite.adele@gmail.com">
          zilinskaite.adele@gmail.com
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
