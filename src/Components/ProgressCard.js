// src/components/ProgressCard.js
import React from "react";
import "../styles/ProgressCard.css";

const ProgressCard = ({ project, status, completion }) => {
  return (
    <div className="progress-card">
      <h3>{project}</h3>
      <p>Status: {status}</p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${completion}%` }}
        ></div>
      </div>
      <p>{completion}% Complete</p>
    </div>
  );
};

export default ProgressCard;
