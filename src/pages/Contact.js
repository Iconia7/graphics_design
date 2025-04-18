// ContactUs.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { FiUser, FiMail, FiMessageSquare, FiMapPin, FiPhone, FiSend, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";
import "../styles/Contact.css";

const Notification = ({ isSubmitted, isError }) => {
  return (
    <AnimatePresence>
      {(isSubmitted || isError) && (
        <motion.div
          className="notification"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`notification-content ${isError ? 'error' : 'success'}`}>
            {isError ? (
              <>
                <FiAlertTriangle className="notification-icon" />
                <span>Failed to send message. Please try again.</span>
              </>
            ) : (
              <>
                <FiCheckCircle className="notification-icon" />
                <span>Message sent successfully!</span>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isSubmitted || isError) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setIsError(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, isError]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_wlbext2";
    const templateID = "template_qqw0nj8";
    const userID = "ehZoWKEVNCxXV8xLN";

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setIsError(true);
      });
  };

  return (
    <section className="contact-section">
      <Notification isSubmitted={isSubmitted} isError={isError} />
      
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>

        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div 
            className="contact-info"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="info-card"
              whileHover={{ scale: 1.05 }}
            >
              <FiMapPin className="info-icon" />
              <h3>Our Office</h3>
              <p>Landless, Thika, Kenya</p>
            </motion.div>

            <motion.div 
              className="info-card"
              whileHover={{ scale: 1.05 }}
            >
              <FiPhone className="info-icon" />
              <h3>Phone</h3>
              <p>+254 115 332 870</p>
            </motion.div>

            <motion.div 
              className="info-card"
              whileHover={{ scale: 1.05 }}
            >
              <FiMail className="info-icon" />
              <h3>Email</h3>
              <p>mwanginewton239@gmail.com</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="contact-form"
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="input-group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <FiUser className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <div className="input-highlight"></div>
            </motion.div>

            <motion.div 
              className="input-group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <FiMail className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="input-highlight"></div>
            </motion.div>

            <motion.div 
              className="input-group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <FiMessageSquare className="input-icon" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="input-highlight"></div>
            </motion.div>

            <motion.button 
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
              <FiSend className="btn-icon" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;