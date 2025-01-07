import React from "react";
import "../styles/PortfolioSection.css";
import Year from "../assets/images/2025.jpg";
import Afro from "../assets/images/Afro.jpg";
import Designs from "../assets/images/Designs.jpg";
import Hassan from "../assets/images/Hassan.jpg";
import Ladies from "../assets/images/Ladies.jpg";
import Party from "../assets/images/Party.jpg";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Projects</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={Year} alt="Project 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">New Year Social Media Flyer</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={Afro} alt="Project 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Social Media Post Flyer</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={Designs} alt="Project 3" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Advertisement Poster</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={Ladies} alt="Project 4" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Birthday Party Flyer</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={Hassan} alt="Project 5" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Official Flyer</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={Party} alt="Project 6" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Party Poster</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
