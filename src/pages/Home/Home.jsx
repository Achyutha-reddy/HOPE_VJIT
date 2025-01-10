import React from 'react';
import './home.css';  // Import the CSS file

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Make a Difference with Us</h1>
        <p>Join our mission to create a positive change in the world. Together, we can transform lives.</p>
        <a href="#donate" className="btn-donate">Donate Now</a>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="max-w-4xl mx-auto">
          <h2>About Us</h2>
          <p>We are an NGO dedicated to improving the lives of underprivileged communities. We work on various projects ranging from education to healthcare, and environmental sustainability. Your support makes a big difference.</p>
          <a href="#projects" className="btn-learn-more">Learn More</a>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="projects">
        <h2>Our Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="project-card">
            <h3>Education for All</h3>
            <p>Our project provides education to children in remote areas, ensuring every child has access to quality learning.</p>
            <a href="#project-details">Learn More</a>
          </div>
          <div className="project-card">
            <h3>Clean Water Initiative</h3>
            <p>We work on projects to provide safe drinking water to communities facing water scarcity.</p>
            <a href="#project-details">Learn More</a>
          </div>
          <div className="project-card">
            <h3>Health for All</h3>
            <p>Our healthcare initiatives aim to improve the health of underserved populations by providing free medical aid.</p>
            <a href="#project-details">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
