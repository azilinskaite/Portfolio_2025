import React, { useState } from "react";
import "./HeaderStyles.css";
import logo from "../../Assets/Adele-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <a
        className="header-logo"
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
      >
        <img src={logo} alt="Adele logo" />
      </a>
      <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="header-nav-links">
        <li>
            <a href="#about" onClick={closeMenu}>About,</a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>Work,</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </nav>
      <button className="burger-menu" onClick={toggleMenu}>
        {isMenuOpen ? "x" : "☰"}
      </button>
    </header>
  );
};

export default Header;
