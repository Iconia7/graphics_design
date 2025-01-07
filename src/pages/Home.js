// src/pages/Home.jsx
import React from "react";
import HeroSection from "../Components/HeroSection";
import ServicesSection from "./ServicesSection";
import PortfolioSection from "./PortfolioSection";
import RequestSection from "./RequestSection";
import "../styles/Home.css";


const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <RequestSection />
    </>
  );
};

export default Home;
