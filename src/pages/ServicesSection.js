import React from "react";
import { motion } from "framer-motion";
import {
  FiGlobe, FiSmartphone, FiInstagram, FiFile,
  FiImage, FiBriefcase, FiCamera, FiVideo, FiEdit
} from "react-icons/fi";
import "../styles/ServicesSection.css";

const ServicesSection = () => {
  const services = [
    { icon: <FiGlobe />, title: "Web Development", description: "Professional website development with modern tech stack..." },
    { icon: <FiSmartphone />, title: "Mobile App Development", description: "Cross-platform mobile applications for iOS and Android..." },
    { icon: <FiInstagram />, title: "Social Media Posts", description: "Engaging social media content for maximum brand visibility..." },
    { icon: <FiFile />, title: "Flyers Design", description: "Eye-catching flyers for events and promotions..." },
    { icon: <FiImage />, title: "Posters Design", description: "High-impact poster designs for effective communication..." },
    { icon: <FiBriefcase />, title: "Brand Identity", description: "Complete branding solutions from logo to style guides..." },
    { icon: <FiCamera />, title: "Logo Design", description: "Unique and memorable logo designs for your brand..." },
    { icon: <FiVideo />, title: "Video Editing", description: "Professional video editing and post-production services..." },
    { icon: <FiEdit />, title: "Photo Editing", description: "High-quality photo retouching and manipulation..." }
  ];

  const handleRequestService = () => {
    document.getElementById("request")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Premium Services
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <div className="card-inner">
                <div className="card-content">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="card-footer">
                  <motion.button 
                    className="service-btn"
                    onClick={handleRequestService}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request Service
                    <span className="btn-arrow">→</span>
                  </motion.button>
                </div>
              </div>
              <div className="card-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
