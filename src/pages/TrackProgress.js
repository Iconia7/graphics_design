import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiPackage, FiClock, FiCheckCircle, FiHelpCircle } from "react-icons/fi";
import { database, ref, get } from '../firebase';
import "../styles/TrackProgress.css";

const TrackProgress = () => {
  const [trackingID, setTrackingID] = useState("");
  const [projectData, setProjectData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const defaultStatus = {
    label: "Status Unknown",
    icon: <FiHelpCircle />,
    color: "#666",
    description: "We're currently investigating the status"
  };

  const statusStages = {
    pending: { 
      label: "Pending Review", 
      icon: <FiClock />, 
      color: "#FF9800",
      description: "We've received your request and are reviewing it" 
    },
    progress: { 
      label: "In Development", 
      icon: <FiPackage />, 
      color: "#4CAF50",
      description: "Our team is actively working on your project" 
    },
    review: { 
      label: "Quality Check", 
      icon: <FiSearch />, 
      color: "#FF9800",
      description: "Final quality assurance and client review" 
    },
    completed: { 
      label: "Project Delivered", 
      icon: <FiCheckCircle />, 
      color: "#4CAF50",
      description: "Project successfully completed and delivered" 
    }
  };

  const getStatusConfig = (status) => {
    return statusStages[status] || defaultStatus;
  };

  const handleTrack = async () => {
    if (!trackingID) {
      setError("Please enter your tracking ID");
      return;
    }

    setIsLoading(true);
    setError("");
    setProjectData(null);

    try {
      const dbRef = ref(database, `serviceRequests/${trackingID}`);
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("Firebase data:", data); // Debug log
        setProjectData({
          ...data,
          requestDate: new Date(data.requestDate).toLocaleDateString()
        });
      } else {
        setError("Invalid tracking ID. Please check and try again.");
      }
    } catch (err) {
      console.error("Tracking error:", err);
      setError("Error retrieving project status. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="track-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Your Project
        </motion.h2>

        <motion.div 
          className="track-card"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="track-header">
            <FiPackage className="header-icon" />
            <h3>Enter Your Tracking ID</h3>
            <p>Check the current status of your project</p>
          </div>

          <div className="track-form">
            <motion.div 
              className="input-group"
              whileHover={{ scale: 1.02 }}
            >
              <FiSearch className="input-icon" />
              <input
                type="text"
                placeholder="Paste your tracking ID here"
                value={trackingID}
                onChange={(e) => setTrackingID(e.target.value)}
              />
            </motion.div>

            <motion.button 
              className="gradient-btn"
              onClick={handleTrack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
            >
              {isLoading ? "Searching..." : "Track Project"}
            </motion.button>
          </div>

          {error && (
            <motion.div 
              className="error-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.div>
          )}

          {projectData && (
            <motion.div 
              className="progress-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="status-header">
                <span 
                  className="status-icon" 
                  style={{ color: getStatusConfig(projectData.status).color }}
                >
                  {getStatusConfig(projectData.status).icon}
                </span>
                <h4>{getStatusConfig(projectData.status).label}</h4>
                <p>{getStatusConfig(projectData.status).description}</p>
              </div>
              
              <div className="project-details">
                <div className="detail-item">
                  <span>Service Type:</span>
                  <strong>{projectData.service}</strong>
                </div>
                <div className="detail-item">
                  <span>Request Date:</span>
                  <strong>{projectData.requestDate}</strong>
                </div>
                <div className="detail-item">
                  <span>Tracking ID:</span>
                  <strong>#{projectData.trackingId}</strong>
                </div>
              </div>

              <div className="progress-stages">
                {Object.entries(statusStages).map(([key, stage]) => (
                  <div 
                    key={key}
                    className={`stage ${projectData.status === key ? 'active' : ''}`}
                    style={{ 
                      backgroundColor: projectData.status === key 
                        ? getStatusConfig(key).color 
                        : '#f0f0f0',
                      color: projectData.status === key ? 'white' : '#666'
                    }}
                  >
                    {stage.label}
                  </div>
                ))}
                {!statusStages[projectData.status] && (
                  <div 
                    className="stage"
                    style={{ 
                      backgroundColor: defaultStatus.color,
                      color: 'white'
                    }}
                  >
                    {defaultStatus.label}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TrackProgress;