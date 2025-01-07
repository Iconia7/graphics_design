import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center text-md-start">
            <p>&copy; {new Date().getFullYear()} Newton Designs. All rights reserved.</p>
          </div>
          <div className="col-md-4 text-center">
            <p>
              <FaMapMarkerAlt /> Landless, Thika, Kenya <br />
              <FaPhoneAlt /> +254 115 332 870
            </p>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <a href="https://facebook.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="mailto:newtondesigns334@gmail.com" className="text-light">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
