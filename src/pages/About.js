import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiUsers, FiBriefcase } from "react-icons/fi";
import "../styles/About.css";

const About = () => {
  const stats = [
    { icon: <FiAward />, value: "1K+", label: "Projects Delivered" },
    { icon: <FiUsers />, value: "1K+", label: "Satisfied Clients" },
    { icon: <FiBriefcase />, value: "3+", label: "Years Experience" },
  ];

  return (
    <section className="about-section">
      <div className="container">
        <motion.div 
          className="about-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Column */}
          <motion.div 
            className="about-content"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Crafting Digital<br />Excellence
            </motion.h2>

            <motion.div 
              className="about-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="lead">
                At Newton Designs, we blend creativity with technical expertise to deliver 
                transformative digital solutions. Founded in Thika, Kenya, we've grown into 
                a trusted partner for businesses worldwide.
              </p>

              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="stat-card"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="stat-icon">{stat.icon}</div>
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.address 
                className="contact-info"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h4>Our Headquarters</h4>
                <p>Landless, Thika, Kenya</p>
                <p>📞 +254 115 332 870</p>
                <p>✉️ mwanginewton239@gmail.com</p>
              </motion.address>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="about-image"
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-wrapper">
              <div className="gradient-overlay" />
              <img 
                src="https://cdn-icons-png.flaticon.com/512/1995/1995463.png" 
                alt="Creative team" 
                className="team-illustration"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;