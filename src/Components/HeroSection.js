import React from "react";
import "../styles/HeroSection.css";
import coverImage from "../assets/images/hoodie.png";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1>Your Vision, Our Expertise</h1>
            <p className="lead">
              Unleash limitless possibilities with cutting-edge design and development. 
              Elevate your brand and embark on a journey of innovation with Newton Designs.
            </p>
            <button className="btn btn-primary btn-lg mt-3" onClick={scrollToServices}>
              Explore Our Services
            </button>
          </div>
          <div className="col-md-6 text-center">
            <img src={coverImage} alt="Adventure with Newton Designs" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
