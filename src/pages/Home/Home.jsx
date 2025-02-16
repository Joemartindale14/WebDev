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
          <a href="/Contact">
            <button>Need Assistance?</button>
          </a>
        </div>
        <hr />
        <div className="information">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
            content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
            their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have 
            evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          <br/>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
            content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
            their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have 
            evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
        <hr />
        <div className="page-links">
          <div className="img-item">
            <img src="/facilities_img.jpg" alt="Facilities" loading="lazy"/>
            <a href="/Facilities" className="button-overlay">
              Facilities
            </a>
          </div>
          <div className="img-item">
            <img src="/memberships_img.jpg" alt="Memberships" loading="lazy"/>
            <a href="/Memberships" className="button-overlay">
              Memberships
            </a>
          </div>
          <div className="img-item">
            <img src="/merchandise_img.jpg" alt="Merchandise" loading="lazy"/>
            <a href="/Merchandise" className="button-overlay">
              Merchandise
            </a>
          </div>
          <div className="img-item">
            <img src="/classes_img.jpg" alt="Classes" loading="lazy"/>
            <a href="/Classes" className="button-overlay">
              Classes
            </a>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Hero;
