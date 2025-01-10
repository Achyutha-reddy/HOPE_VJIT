import React from 'react';
import './visionmission.css';

const VisionMission = () => {
  return (
    <div className="vision-mission-container">
      <div className="vision-section">
        <h2 className="section-title">Our Vision</h2>
        <p className="vision-description">
          Our vision is to create a world where every individual has access to equal opportunities,
          health, and education. We strive to empower communities and individuals, enabling them to
          overcome challenges and achieve their full potential.
        </p>
      </div>
      <div className="mission-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="mission-description">
          Our mission is to deliver impactful programs and initiatives that improve the lives of those
          in need. Through education, awareness, and collaborative efforts, we aim to create sustainable
          solutions that foster long-term growth and development.
        </p>
      </div>
    </div>
  );
};

export default VisionMission;
