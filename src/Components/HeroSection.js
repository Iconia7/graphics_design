// src/components/HeroSection.jsx
import React, { useEffect } from "react";
import "../styles/HeroSection.css";
import coverImage from "../assets/images/hoodie.png";
import ParticleNetwork from "./ParticleNetwork";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <section className="hero-section">
      <ParticleNetwork />
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="hero-content">
              <h1 className="animate-on-load">
                <span className="gradient-text slide-in">Your Vision,</span> 
                <br />
                <span className="gradient-text-secondary slide-in">Our Expertise</span>
              </h1>
              <p className="lead animate-on-load">
              Unleash limitless possibilities with cutting-edge design and development. 
              Elevate your brand and embark on a journey of innovation with Newton Designs.
              </p>
              <div className="hero-buttons animate-on-load">
                <button 
                  className="btn-primary shine-effect" 
                  onClick={scrollToServices}
                >
                  Explore Our Services
                  <span className="btn-icon">→</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1">
            <div className="hero-image animate-on-load">
              <div className="image-container">
                <img 
                  src={coverImage} 
                  alt="Adventure with Newton Designs" 
                  className="floating-image"
                />
                <div className="gradient-overlay"></div>
                <div className="glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;