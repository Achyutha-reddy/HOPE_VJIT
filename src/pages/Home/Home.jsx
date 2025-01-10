import React from 'react';
import { Link } from 'react-router-dom'; // For routing
import './home.css';  // Import the CSS file
import hero from '../../assets/images/HopeLogo.png';  // Import the hero image
import about from '../../assets/images/hopegroup.jpg'
import heroimage from '../../assets/images/heroimage.jpg'
// import shiksha from '../../assets/images/shiksha.jpg'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>bringing HOPE where it’s needed most</h1>
          <p>Join the HOPE to make world better Everyday.</p>
          <Link to="/events/upcomming" className="btn-donate">UPCOMING EVENTS</Link>
        </div>
        {/* Background image for the Hero Section */}
        <img src={hero} alt="Hero Image" className="hero-image" />
        {/* Background video for the Hero Section */}
        {/* <video className="hero-video" autoplay loop muted>
          <img src={heroimage} alt="Hero Image" />
        </video> */}
         <img src={heroimage} alt="Hero Image" className="hero-image1" />
         {/* Background video for the Hero Section */}
      </section>

      {/* About Section */}
      <section className="about">
        <div className="max-w-4xl mx-auto">
          <h2>About Us</h2>
          <p>Helping Others and Pervading Empathy <span>SANDEEP</span> and <span>AAKANSHA</span> started HOPE on 20th July 2022 in Vidya Jyothi Institute of Technology, with a vision of serving humankind with a group of like-minded individuals.</p>
          <Link to="/vissionmission" className="btn-learn-more">Learn More</Link>
        </div>
        {/* Add an image related to your mission */}
        <img src={about} alt="About Us" className="about-image" />
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="projects">
        <h2>Project Shiksha</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="project-card">
            <img src="" alt="Education for All" className="project-image" />
            <h3>Education for All</h3>
            <p>Our project provides education to children in remote areas, ensuring every child has access to quality learning.</p>
            <a href="#project-details">Learn More</a>
          </div>
          <div className="project-card">
            <img src="/path/to/water-image.jpg" alt="Clean Water Initiative" className="project-image" />
            <h3>Clean Water Initiative</h3>
            <p>We work on projects to provide safe drinking water to communities facing water scarcity.</p>
            <a href="#project-details">Learn More</a>
          </div>
          <div className="project-card">
            <img src="/path/to/health-image.jpg" alt="Health for All" className="project-image" />
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
