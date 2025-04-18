import React, { useEffect } from 'react';

const ParticleNetwork = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random position and size
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.width = particle.style.height = 
        `${Math.random() * 5 + 2}px`;
      particle.style.animationDelay = `${Math.random() * 15}s`;
      
      document.querySelector('.particle-network').appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => particle.remove(), 15000);
    };

    // Create particles at intervals
    const interval = setInterval(createParticle, 500);
    
    return () => clearInterval(interval);
  }, []);

  return <div className="particle-network" />;
};

export default ParticleNetwork;