import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiAlertTriangle } from "react-icons/fi";
import "../styles/RequestSection.css";
import { v4 as uuidv4 } from 'uuid';
import jsPDF from 'jspdf';
import logo from '../assets/images/Dp.jpg';
import { database, ref, set } from '../firebase';
import emailjs from '@emailjs/browser';

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
                <span>Failed to submit request. Please try again.</span>
              </>
            ) : (
              <>
                <FiCheckCircle className="notification-icon" />
                <span>Request submitted successfully!</span>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const RequestSection = () => {
  const [formData, setFormData] = useState({
    service: "",
    details: "",
  });
  const [submitting, setSubmitting] = useState(false);
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

  const validateForm = () => {
    if (!formData.service || !formData.details) {
      setIsError(true);
      return false;
    }
    if (formData.details.length < 20) {
      setIsError(true);
      return false;
    }
    return true;
  };

  const generatePDF = (trackingId) => {
    try {
      const doc = new jsPDF();
      
      // Modern receipt design
      doc.setFillColor(255, 255, 255);
      doc.rect(0, 0, 210, 297, 'F');
      
      // Header Section
      doc.setFillColor(76, 175, 80);
      doc.roundedRect(10, 10, 190, 40, 5, 5, 'F');
      
      // Logo
      const img = new Image();
      img.src = logo;
      doc.addImage(img, 'PNG', 15, 15, 30, 30);
      
      // Header Text
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.setTextColor(255, 255, 255);
      doc.text("Newton Designs", 55, 30);
      doc.setFontSize(12);
      doc.text("Digital Design Studio", 55, 36);
      
      // Receipt Content
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
      doc.text(`Tracking ID: ${trackingId}`, 20, 70);
      
      // Divider Line
      doc.setDrawColor(255, 152, 0);
      doc.setLineWidth(0.75);
      doc.line(20, 75, 190, 75);
      
      // Service Details
      const yStart = 85;
      doc.setFontSize(12);
      doc.text(`Service Type:`, 20, yStart);
      doc.setFont("helvetica", "bold");
      doc.text(formData.service, 60, yStart);
      
      doc.setFont("helvetica", "normal");
      doc.text(`Description:`, 20, yStart + 10);
      doc.setFontSize(11);
      doc.text(formData.details, 20, yStart + 16, { maxWidth: 170 });
      
      // Contact Section
      doc.setFillColor(76, 175, 80);
      doc.roundedRect(20, 160, 170, 40, 5, 5, 'F');
      doc.setFontSize(10);
      doc.setTextColor(255, 255, 255);
      doc.text("Contact Information:", 25, 170);
      doc.setFont("helvetica", "bold");
      doc.text("WhatsApp: +254115332870", 25, 177);
      doc.text("Email: mwanginewton239@gmail.com", 25, 184);
      
      // Footer
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.text("Thank you for choosing Newton Designs! Your request is now being processed.", 20, 260);
      doc.text("Use your tracking ID to check progress on our website.", 20, 265);
      
      doc.save(`Service_Receipt.pdf`);
    } catch (error) {
      console.error("PDF Error:", error);
      setIsError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm() || submitting) return;
    
    setSubmitting(true);
    const trackingId = uuidv4();

    try {
      const dbRef = ref(database, `serviceRequests/${trackingId}`);
      await set(dbRef, {
        trackingId,
        ...formData,
        status: 'pending',
        requestDate: new Date().toISOString(),
      });

      generatePDF(trackingId);

      await emailjs.send(
        'service_wlbext2',
        'template_eimr58u',
        {
          ...formData,
          trackingId,
          contact_number: "+254115332870",
        },
        'ehZoWKEVNCxXV8xLN'
      );

      setIsSubmitted(true);
      setFormData({ service: "", details: "" });

    } catch (error) {
      console.error("Submission Error:", error);
      setIsError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.section 
      id="request" 
      className="request-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Notification isSubmitted={isSubmitted} isError={isError} />
      
      <div className="glass-container">
        <h2 className="section-title">Design Service Request</h2>
        <form onSubmit={handleSubmit} className="modern-form">
          <div className="form-group">
            <label className="floating-label">Service Type</label>
            <select 
              name="service" 
              onChange={handleChange} 
              value={formData.service}
              className="neon-select"
              required
            >
              <option value="">Select a service...</option>
              <option value="Social-Media-Design">Social Media Design</option>
              <option value="Mobile-App">Mobile App Development</option>
              <option value="Web-Design">Web Design & Development</option>
              <option value="Video-Editing">Professional Video Editing</option>
              <option value="Branding">Complete Branding Package</option>
              <option value="Print-Materials">Print Materials Design</option>
            </select>
          </div>

          <div className="form-group">
            <label className="floating-label">Project Brief</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              className="glow-input"
              placeholder="Describe your vision, goals, and any specific requirements. Also add your whatsapp number.."
              required
              rows="5"
            ></textarea>
          </div>

          <motion.button 
            type="submit" 
            className="gradient-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={submitting}
          >
            {submitting ? (
              <div className="spinner"></div>
            ) : (
              <>
                Submit Request
                <span className="btn-arrow">→</span>
              </>
            )}
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

export default RequestSection;