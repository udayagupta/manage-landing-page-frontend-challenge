import React from "react";
import GetStartedBtn from "../GetStartedBtn";
import "../../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-div-1">
        <div className="hero-div-1-1">
          <h2 className="hero-heading w-3/4">
            Bring everyone together to build better products.
          </h2>
          <p className="hero-sec-p">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <GetStartedBtn className="mt-5 max-w-max get-started-red-btn" />
        </div>
      </div>
      <div className="hero-div-2">
        <img className="ml-auto" src="./images/illustration-intro.svg" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
