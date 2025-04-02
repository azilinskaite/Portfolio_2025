import React from "react";
import "./MovingHeaderStyles.css";

const MovingHeader = () => {
  return (
    <div className="marquee-wrapper">
      <h2 className="text text1">Selected work</h2>
      <h2 aria-hidden="true" className="text text2">
        Selected work
      </h2>
      <h2 aria-hidden="true" className="text text3">
        Selected work
      </h2>
      <h2 aria-hidden="true" className="text text4">
        Selected work
      </h2>
      <h2 aria-hidden="true" className="text text5">
        Selected work
      </h2>
      <h2 aria-hidden="true" className="text text6">
        Selected work
      </h2>
      <h2 aria-hidden="true" className="text text7">
        Selected work
      </h2>
    </div>
  );
};

export default MovingHeader;
