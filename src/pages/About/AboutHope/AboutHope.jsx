import React from 'react';
import './abouthope.css';

const AboutHope = () => {
  return (
    <section className="about-hope">
      <div className="container">
        <div className="header">
          <h2>About HOPE</h2>
          <p>Empowering lives through innovative solutions and community engagement.</p>
        </div>

        <div className="content">
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              At HOPE, our mission is to create opportunities, foster sustainable growth, 
              and ensure equal access to resources for underserved communities.
            </p>
          </div>
          <div className="card">
            <h3>Our Vision</h3>
            <p>
              We envision a world where every individual has the tools and support needed 
              to reach their full potential.
            </p>
          </div>
          <div className="card">
            <h3>Our Values</h3>
            <p>
              Guided by compassion, innovation, and collaboration, we strive to make a 
              lasting impact in the lives of those we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHope;
