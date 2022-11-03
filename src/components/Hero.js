import React from "react";
import { Link } from "react-router-dom";

import "../styles/Hero.css";
function Hero() {
  return (
    <div className="hero">
      <img src={process.env.PUBLIC_URL + "logo.svg"} className="logo" />
      <div>
        <div className="hero-text-box">
          <h1 className="heading-primary">
            Exquisite dining <br />
            since 1989
          </h1>
          <p className="text hero-description">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
        </div>
        <Link to="/menu">
          <button className="btn btn-transparent">Book a Table </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
