import React, { useEffect, useState } from "react";
import "../styles/PortfolioSection.css";
import Year from "../assets/images/2025.jpg";
import Afro from "../assets/images/Afro.jpg";
import Designs from "../assets/images/Designs.jpg";
import Hassan from "../assets/images/Hassan.jpg";
import Ladies from "../assets/images/Ladies.jpg";
import Party from "../assets/images/Party.jpg";
import Debate from "../assets/images/Debate.jpg";
import Partnership from "../assets/images/DRICE.jpg";
import Health from "../assets/images/health.jpg";
import Partnerships from "../assets/images/ISADU.jpg";
import Holiday from "../assets/images/June1.jpg";
import Movie from "../assets/images/Movie.jpg";

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.portfolio-item').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openImage = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Our Creative Work</h2>
        <div className="portfolio-grid">
          {[
            { img: Year, title: "New Year Social Media Flyer", category: "Social Media" },
            { img: Afro, title: "Social Media Post Flyer", category: "Marketing" },
            { img: Designs, title: "Advertisement Poster", category: "Advertising" },
            { img: Ladies, title: "Birthday Party Flyer", category: "Events" },
            { img: Hassan, title: "Official Flyer", category: "Corporate" },
            { img: Party, title: "Party Poster", category: "Events" },
            { img: Debate, title: "Debate Poster", category: "Competition" },
            { img: Partnership, title: "Partnership Poster", category: "Events" },
            { img: Health, title: "Health Poster", category: "Health" },
            { img: Partnerships, title: "Partnership Poster", category: "Events" },
            { img: Holiday, title: "Holiday Poster", category: "Events" },
            { img: Movie, title: "Movie Poster", category: "Events" }
          ].map((project, index) => (
            <div className={`portfolio-item card-${index + 1}`} key={index}>
              <div className="card-inner">
                <div className="card-front">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="card-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                  <button 
                    className="view-button" 
                    onClick={() => openImage(project.img)}
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="image-modal" onClick={closeImage}>
            <div className="modal-content">
              <span className="close-button">&times;</span>
              <img src={selectedImage} alt="Full size" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;