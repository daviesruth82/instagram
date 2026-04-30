import React from "react";
import "../App.css";
import Aside from "../Components/Aside";
import ScrollPage from "../Components/ScrollPage";
import SideBar from "../Components/SideBar";

const LandingPage = () => {
  return (
    <div className="App-container">
      <section className="App-holder">
        <div className="right">
          <Aside />
        </div>
        <div className="side">
          <div className="middle">
            <ScrollPage />
          </div>
          <div className="left">
            <SideBar />
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
