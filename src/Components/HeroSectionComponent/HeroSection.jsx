import React from "react";
import "./HeroSectionStyles.css";

const HeroSection = () => {
  return (
    <section className="hero-section" id="about">
      <h1>Hi, I'm Adele Zilinskaite - front end developer & designer</h1>
      <p>
      Beginner Front-End developer currently studying at Hyper Island in Stockholm, Sweden. I'm excited about building creative digital projects and enjoy the challenge of problem-solving. With over six years of experience in the fashion design field, I've developed a strong ability to combine technical and creative thinking. Currently, I'm looking forward to opportunities that will allow me to deepen my skills and apply them in real-world projects. I'm eager to explore how my diverse background can contribute to innovative projects in this exciting new chapter.
      </p>
      <hr />
      <ul>
        <li><img src="" alt="" />HTML</li>
        <li><img src="" alt="" />CSS</li>
        <li><img src="" alt="" />JAVASCRIPT</li>
        <li><img src="" alt="" />REACT</li>
        <li><img src="" alt="" />NODE.JS</li>
      </ul>
      <p className="email">zilinskaite.adele@gmail.com</p>
    </section>
  );
};

export default HeroSection;
