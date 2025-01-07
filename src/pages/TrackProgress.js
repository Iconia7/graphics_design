import React, { useState } from "react";
import { getDatabase, ref, get } from "firebase/database"; // Import necessary functions
import "../styles/TrackProgress.css";

const TrackProgress = () => {
  const [trackingID, setTrackingID] = useState(""); // State to store the tracking ID
  const [progress, setProgress] = useState(""); // State to store the progress
  const [error, setError] = useState(""); // State to store errors if tracking ID is invalid

  // Function to fetch tracking details from Firebase
  const handleTrack = async () => {
    if (!trackingID) {
      setError("Please enter a valid Tracking ID.");
      return;
    }

    const dbRef = ref(getDatabase(), 'serviceRequests/' + trackingID); // Create reference to the service request by tracking ID

    try {
      const snapshot = await get(dbRef); // Fetch data from Firebase

      if (snapshot.exists()) {
        const data = snapshot.val(); // Get the data from snapshot
        setProgress(data.status); // Assuming 'status' holds the progress value
        setError(""); // Clear any previous errors
      } else {
        setError("Tracking ID not found. Please check and try again.");
        setProgress(""); // Reset progress if no data found
      }
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
      setProgress(""); // Reset progress in case of error
    }
  };

  return (
    <div className="main-content">
      <section className="track-progress">
        <div className="container">
          <h2>Track Your Project</h2>
          <div className="track-form">
            <input
              type="text"
              placeholder="Enter Tracking ID"
              value={trackingID}
              onChange={(e) => setTrackingID(e.target.value)}
            />
            <button onClick={handleTrack}>Track</button>
          </div>
          {progress && <p className="progress-result">Progress: {progress}</p>}
          {error && <p className="error">{error}</p>}
        </div>
      </section>
    </div>
  );
};

export default TrackProgress;
