import React from "react";
import "./Home.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LETS</h1>
          <h1>GET</h1>
          <h1>MOVING!</h1>
        </div>
        <div className="sub-title">
          <p>Welcome to your Fitness Life</p>
          <p>Reach Your Potential</p>
        </div>
        <div className="buttons">
          <a href="/Classes">
            <button>Look At Our Classes</button>
          </a>
          <a href="/Contact">
            <button>Need Assistance?</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
