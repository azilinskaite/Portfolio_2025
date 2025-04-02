import React from "react";
import "./MovingHeaderStyles.css";

const MovingHeader = () => {
  return (
    // <div className="marquee-wrapper">
    //   <div className="marquee-track">
    //     <h3 className="marquee-text">Selected work</h3>
    //     <h3 aria-hidden="true" className="marquee-text">Selected work</h3>
    //     <h3 aria-hidden="true" className="marquee-text">Selected work</h3>
    //     <h3 aria-hidden="true" className="marquee-text">Selected work</h3>
    //     <h3 aria-hidden="true" className="marquee-text">Selected work</h3>
    //     <h3 aria-hidden="true" className="marquee-text">Selected work</h3>
    //     <h3 aria-hidden="true" className="marquee-text">Selected work</h3>
    //   </div>
    // </div>
    <div className="marquee-wrapper">
        <h3 className="text text1">Selected work</h3>
        <h3 aria-hidden="true" className="text text2">Selected work</h3>
        <h3 aria-hidden="true" className="text text3">Selected work</h3>
        <h3 aria-hidden="true" className="text text4">Selected work</h3>
        <h3 aria-hidden="true" className="text text5">Selected work</h3>
        <h3 aria-hidden="true" className="text text6">Selected work</h3>
        <h3 aria-hidden="true" className="text text7">Selected work</h3>
      </div>
  );
};

export default MovingHeader;
