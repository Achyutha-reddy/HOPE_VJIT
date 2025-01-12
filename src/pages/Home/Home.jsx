import React from 'react';
import { Link } from 'react-router-dom'; // For routing
import './home.css';  // Import the CSS file
import hero from '../../assets/images/HopeLogo.png';  // Import the hero image
import about from '../../assets/images/hopegroup.jpg'
import heroimage from '../../assets/images/heroimage.jpg'
// import shiksha from '../../assets/images/shiksha.jpg'

const Home = () => {
  return (
    <div className='main1'>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>bringing HOPE where it’s needed most</h1>
          <p>Join the HOPE to make world better Everyday.</p>
          <Link to="/events" className="btn-donate">UPCOMING EVENTS</Link>
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
          <Link to="/about" className="btn-learn-more">Learn More</Link>
        </div>
        {/* Add an image related to your mission */}
        <img src={about} alt="About Us" className="about-image" />
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="projects">
        <h2>OUR PAST PROJECTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="project-card">
            <img src="" alt="project shiksha" className="project-image" />
            <h3>PROJECT <span>SHIKSHA</span></h3>
            {/* <p>Lighting up lives and spreading happiness through <span className='project shiksha'>PROJECTSHIKSHA</span></p> */}
            <Link to="/projects">Learn More</Link>
          </div>
          <div className="project-card">
            <img src="/path/to/water-image.jpg" alt="project laal" className="project-image" />
            <h3>PROJECT <span className='laal'>LAAL</span></h3>
            {/* <p>We work on projects to provide safe drinking water to communities facing water scarcity.</p> */}
            <Link to="/projects">Learn More</Link>
          </div>
          <div className="project-card">
            <img src="/path/to/health-image.jpg" alt="project raksha" className="project-image" />
            <h3>PROJECT <span>RAKSHA</span></h3>
            {/* <p>Our healthcare initiatives aim to improve the health of underserved populations by providing free medical aid.</p> */}
            <Link to="/projects">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
