import React from "react";
import "./HeaderStyles.css";
import logo from "../../Assets/Adele-logo.png";

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img src={logo} alt="Adele logo" />
      </div>
      <nav className="header-nav">
        <ul className="header-nav-links">
          <li>
            <a href="#about">About,</a>
          </li>
          <li>
            <a href="#work">Work,</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
