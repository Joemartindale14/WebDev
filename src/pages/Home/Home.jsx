import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
        <div className="top-section">
        <img src="/landscape_img.webp" alt="Home" loading="lazy"/>
          <div className="title-text">
            <h1>Welcome to Strive Fusion!</h1>
            <h1></h1>
            <p>We can provide the support and space for your success.</p>
            <p>Your fitness journey begins here!</p>
            <div className="buttons">
              <a href="/Memberships">
                <button>Join Now!</button>
              </a>
              <a href="/Contact">
                <button>Need Assistance?</button>
              </a>
            </div>          
          </div>
        </div>
        <hr />
        <div className="information">
          <p>Welcome to Strive Fusion, your premier destination for fitness, health, and community. At Strive Fusion, we believe in pushing boundaries and achieving greatness, both inside and outside the gym. Whether you're just beginning your fitness journey or are an experienced athlete, our state-of-the-art facilities, expert trainers, and supportive environment are here to help you reach your full potential. We offer a variety of classes, personalized training programs, and cutting-edge equipment to ensure you stay motivated, challenged, and empowered every step of the way.
          </p>
          <br/>
          <p>Our mission at Strive Fusion is to create a welcoming space where individuals can come together to achieve their personal fitness goals. We’re more than just a gym – we’re a community of like-minded individuals who encourage each other to thrive. No matter where you are in your fitness journey, we’re here to guide and support you. Join Strive Fusion today and experience the fusion of strength, wellness, and personal growth. Together, we will help you strive for your best self!
          </p>
        </div>
        <hr />
        <div className="page-links">
          <div className="img-item">
            <img src="/link_facilities_img.webp" alt="Facilities" loading="lazy"/>
            <a href="/Facilities" className="button-overlay">
              Facilities
            </a>
          </div>
          <div className="img-item">
            <img src="/link_memberships_img.webp" alt="Memberships" loading="lazy"/>
            <a href="/Memberships" className="button-overlay">
              Memberships
            </a>
          </div>
          <div className="img-item">
            <img src="/link_merchandise_img.webp" alt="Merchandise" loading="lazy"/>
            <a href="/Merchandise" className="button-overlay">
              Merchandise
            </a>
          </div>
          <div className="img-item">
            <img src="/link_classes_img.webp" alt="Classes" loading="lazy"/>
            <a href="/Classes" className="button-overlay">
              Classes
            </a>
          </div>
        </div>
    </section>
    
  );
};

export default Home;
