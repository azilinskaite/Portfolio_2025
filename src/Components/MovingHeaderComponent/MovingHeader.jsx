import React from "react";
import "./MovingHeaderStyles.css";

const MovingHeader = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        <h3 className="marquee-text">Selected work</h3>
        <h3 aria-hidden="true" className="marquee-text">Selected work</h3>
        <h3 aria-hidden="true" className="marquee-text">Selected work</h3>
        <h3 aria-hidden="true" className="marquee-text">Selected work</h3>
        <h3 aria-hidden="true" className="marquee-text">Selected work</h3>
        <h3 aria-hidden="true" className="marquee-text">Selected work</h3>
      </div>
    </div>
  );
};

export default MovingHeader;
