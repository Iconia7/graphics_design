import React from "react";
import "../styles/Header.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Newton Designs Logo" className="logo-img" height="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/track">Track Progress</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
