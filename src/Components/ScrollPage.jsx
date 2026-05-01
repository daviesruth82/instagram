import React from "react";
import "../Styles/Scroll.css";
import ScrollChild from "./ScrollChild";

const ScrollPage = () => {
  return (
    <div className="Scroll-container">
      <div className="Scroll-holder">
        <ScrollChild />
      </div>
    </div>
  );
};

export default ScrollPage;
