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
  
    // Add logo
    const img = new Image();
    img.src = logo;
    doc.addImage(img, 'PNG', 10, 10, 30, 30); // Adjust logo size and position
  
    // Header
    doc.setFontSize(18);
    doc.setFont("Helvetica", "bold");
    doc.text("Newton Designs", 50, 25); // Business name
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    doc.text("Service Request Receipt", 50, 35); // Subtitle
    doc.line(10, 40, 200, 40); // Divider line
  
    // Receipt Details
    doc.setFontSize(12);
    doc.setFont("Helvetica", "bold");
    doc.text("Receipt Details", 10, 50);
    doc.setFont("Helvetica", "normal");
  
    // Add details in a bordered box
    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.rect(10, 55, 190, 60); // Outer box
  
    // Inside the box
    doc.text(`Tracking ID: ${trackingId}`, 15, 65);
    doc.text(`Service: ${formData.service}`, 15, 75);
    doc.text("Details:", 15, 85);
    doc.setFont("Helvetica", "italic");
    doc.text(formData.details, 15, 95, { maxWidth: 180 });
  
    // Footer Section
    doc.setFont("Helvetica", "bold");
    doc.text("Contact Information:", 10, 125);
    doc.setFont("Helvetica", "normal");
    doc.text(`Our WhatsApp Number: ${contactNumber}`, 15, 135);
  
    // Footer Notes
    let footerY = 145; // Starting Y-coordinate for the footer notes
    doc.setFont("Helvetica", "normal");
    doc.text("Thank you for choosing Newton Designs!", 10, footerY);
    footerY += 7; // Increment Y-coordinate for the next line
    doc.text("You can track the progress of your request on our website.", 10, footerY);
    footerY += 7; // Increment Y-coordinate for the next line
    doc.text("Copy the tracking ID and paste it into the Track Progress tab.", 10, footerY);
  
    // Save PDF
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
