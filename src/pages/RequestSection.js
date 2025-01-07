import React, { useState } from "react";
import "../styles/RequestSection.css";
import { v4 as uuidv4 } from 'uuid';
import jsPDF from 'jspdf';
import logo from '../assets/images/Dp.jpg';
import { database, ref, set } from '../firebase';
import emailjs from '@emailjs/browser';

const RequestSection = () => {
  const [formData, setFormData] = useState({
    service: "",
    details: "",
  });

  const contactNumber = "+254115332870";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePDF = (trackingId) => {
    const doc = new jsPDF();
    const img = new Image();
    img.src = logo;
    doc.addImage(img, 'PNG', 85, 15, 40, 20);

    doc.setFontSize(24);
    doc.text("Service Request Receipt", 70, 50);
    doc.setFontSize(12);
    doc.text(`Tracking ID: ${trackingId}`, 20, 80);
    doc.text(`Service: ${formData.service}`, 20, 90);
    doc.text(`Details:`, 20, 100);
    doc.text(`${formData.details}`, 20, 110, { maxWidth: 170 });
    doc.text(`Contact: ${contactNumber}`, 20, 130);
    doc.save(`Service_Request_Receipt.pdf`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trackingId = uuidv4();
    
    try {
      await set(ref(database, 'serviceRequests/' + trackingId), {
        trackingId,
        service: formData.service,
        details: formData.details,
        status: 'Pending',
        requestDate: Date.now(),
      });

      generatePDF(trackingId);

      // Sending email using EmailJS
      emailjs.send(
        'service_wlbext2',  // Replace with your EmailJS service ID
        'template_eimr58u',  // Replace with your template ID
        {
          service: formData.service,
          details: formData.details,
          trackingId,
        },
        'ehZoWKEVNCxXV8xLN'  // Replace with your public key from EmailJS
      )
      .then(() => {
        alert("Your request has been submitted! A PDF receipt has been generated.");
      }, (error) => {
        console.error("Failed to send email:", error);
      });
    } catch (error) {
      console.error("Error saving request:", error);
    }
  };

  return (
    <section id="request" className="request-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Request a Service</h2>
        <form onSubmit={handleSubmit} className="request-form">
          <div className="mb-3">
            <label htmlFor="service" className="form-label">Select Service:</label>
            <select name="service" onChange={handleChange} className="form-select" required>
              <option value="">--Choose a service--</option>
              <option value="Social-Media-Post">Social Media Post</option>
              <option value="Mobile-App-Development">Mobile App Development</option>
              <option value="Web-Development">Web Development</option>
              <option value="Video-Editing">Video Editing</option>
              <option value="Flyers">Flyers</option>
              <option value="Posters">Posters</option>
              <option value="Photo-Editing">Photo Editing</option>
              <option value="Brand-Identity">Brand Identity</option>
              <option value="Logo-Design">Logo Design</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="details" className="form-label">Brief Summary (include your WhatsApp contact at the end):</label>
            <textarea
              name="details"
              rows="4"
              onChange={handleChange}
              className="form-control"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit Request</button>
        </form>
      </div>
    </section>
  );
};

export default RequestSection;
