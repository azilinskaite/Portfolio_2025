import React from "react";
import "./FooterStyles.css";
import logoDark from "../../Assets/Adele-logo-dark.png";

const Footer = () => {
  return (
    <footer id="contact">
      <h2>Let's get in touch!</h2>
      <hr />
      <div className="contact-links">
        <a href="mailto:zilinskaite.adele@gmail.com">
          zilinskaite.adele@gmail.com
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/adele-zilinskaite-vaskevice-11a988159/"
        >
          linkedin
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/azilinskaite"
        >
          github
        </a>
      </div>
      <div className="copyright-row">
        <span>&#169;2025</span>
        <img src={logoDark} alt="Adele logo" />
      </div>
    </footer>
  );
};

export default Footer;
