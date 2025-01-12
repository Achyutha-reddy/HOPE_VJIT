import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import the CSS file
import hero from '../../assets/images/HopeLogo.png'; // Import the hero image
import heroimage from '../../assets/images/heroimage.jpg';
import projectshiksha from '../../assets/images/projectshiksha.jpg';
import projectraksha from '../../assets/images/projectraksha.jpg';
import connect2earth from '../../assets/images/connect2earth-title.jpg';
import video from '../../assets/videos/herovideo.mp4';
// import video2 from '../../assets/videos/video2.mp4';
// import video3 from '../../assets/videos/video3.mp4';

const Home = () => {
  const videoRefs = [useRef(null), useRef(null), useRef(null)]; // References to each video

  const handleVideoEnd = (index) => {
    if (index < videoRefs.length - 1) {
      videoRefs[index + 1].current.play(); // Play the next video
    } else {
      videoRefs[0].current.play(); // Loop back to the first video
    }
  };

  return (
    <div className="main1">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>bringing HOPE where it’s needed most</h1>
          <p>Join the HOPE to make the world better Every day.</p>
          <Link to="/events" className="btn-donate">UPCOMING EVENTS</Link>
        </div>
        <img src={hero} alt="Hero Image" className="hero-image" />
        <img src={heroimage} alt="Hero Image" className="hero-image1" />
      </section>

      {/* Video Gallery Section */}
      <section className="video-gallery">
        <h2>Our Video Gallery</h2>
        <div className="video-grid">
          <div className="video-card">
            <video
              ref={videoRefs[0]}
              className="gallery-video"
              autoPlay
              muted
              onEnded={() => handleVideoEnd(0)}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>Video Title 1</p>
          </div>
          {/* <div className="video-card">
            <video
              ref={videoRefs[1]}
              className="gallery-video"
              muted
              onEnded={() => handleVideoEnd(1)}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>Video Title 2</p>
          </div>
          <div className="video-card">
            <video
              ref={videoRefs[2]}
              className="gallery-video"
              muted
              onEnded={() => handleVideoEnd(2)}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>Video Title 3</p>
          </div> */}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="projects">
        <h2>OUR PAST PROJECTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="project-card">
            <img src={projectshiksha} alt="project shiksha" className="project-image" />
            <h3>PROJECT <span>SHIKSHA</span></h3>
            <Link to="/projects">Learn More</Link>
          </div>
          <div className="project-card">
            <img src='' alt="project laal" className="project-image" />
            <h3>PROJECT <span className='laal'>LAAL</span></h3>
            <Link to="/projects">Learn More</Link>
          </div>
          <div className="project-card">
            <img src={connect2earth} alt="project earth" className="project-image" />
            <h3>PROJECT <span>CONNECT 2 EARTH</span></h3>
            <Link to="/projects">Learn More</Link>
          </div>
          <div className="project-card">
            <img src={projectraksha} alt="project raksha" className="project-image" />
            <h3>PROJECT <span>RAKSHA</span></h3>
            <Link to="/projects">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
