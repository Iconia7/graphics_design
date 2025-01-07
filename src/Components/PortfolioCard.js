// src/components/PortfolioCard.js
import React from "react";
import "../styles/PortfolioCard.css";

const PortfolioCard = ({ image, title, description }) => {
  return (
    <div className="portfolio-card">
      <img src={image} alt={title} className="portfolio-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PortfolioCard;
