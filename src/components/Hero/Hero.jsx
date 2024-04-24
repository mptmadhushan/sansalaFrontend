import React from "react";
import "./Hero.css";
import imgs2 from "../Assets/2.jpg";

const Hero = () => {
  const imgUrl = "../Assets/2.jpg"; //

  return (
    <div
      style={{
        backgroundImage: `url(${imgs2})`,
        display: "flex",
        repeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
      }}
    >
      <div className="hero-left">
        <h2 style={{ color: "white" }}>New Arrivals</h2>
        <div></div>
        <p style={{ color: "white" }}>collections</p>
        <p style={{ color: "white" }}>for everyone</p>
      </div>
    </div>
  );
};

export default Hero;
