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

// import React, { useEffect, useRef, useState } from "react";
// import "./HeaderStyles.css";
// import logo from "../../Assets/Adele-logo.png";

// const Header = () => {
//   const headerRef = useRef(null);
//   const [isInverted, setIsInverted] = useState(false);

//   useEffect(() => {
//     const checkBackground = () => {
//       if (headerRef.current) {
//         const headerRect = headerRef.current.getBoundingClientRect();
//         const headerMiddle = headerRect.top + headerRect.height / 2;
//         const elementAtMiddle = document.elementFromPoint(headerRect.left, headerMiddle);
        
//         if (elementAtMiddle && !headerRef.current.contains(elementAtMiddle)) {
//           const bgColor = window.getComputedStyle(elementAtMiddle).backgroundColor;
//           const brightness = getBrightness(bgColor);
          
//           setIsInverted(brightness <= 128);
//         }
//       }
//     };

//     const getBrightness = (color) => {
//       const rgb = color.match(/\d+/g);
//       return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
//     };

//     window.addEventListener('scroll', checkBackground);
//     window.addEventListener('resize', checkBackground);
//     checkBackground(); // Initial check

//     return () => {
//       window.removeEventListener('scroll', checkBackground);
//       window.removeEventListener('resize', checkBackground);
//     };
//   }, []);

//   return (
//     <header ref={headerRef} className={isInverted ? 'inverted' : ''}>
//       <div className="header-logo">
//         <img src={logo} alt="Adele logo" />
//       </div>
//       <nav className="header-nav">
//         <ul className="header-nav-links">
//           <li>
//             <a href="#about">About,</a>
//           </li>
//           <li>
//             <a href="#work">Work,</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

