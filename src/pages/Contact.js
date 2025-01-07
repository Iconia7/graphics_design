import React, { useState } from "react";
import emailjs from "emailjs-com";  // Import EmailJS
import "../styles/Contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = "service_wlbext2";
    const templateID = "template_qqw0nj8";
    const userID = "ehZoWKEVNCxXV8xLN";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Thank you for reaching out! We'll get back to you soon.");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-us">
      <div className="container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              rows="5"
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
