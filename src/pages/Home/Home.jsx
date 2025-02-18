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
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
            content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
            their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have 
            evolved over the years, sometimes by accident, sometimes on purpose.
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
