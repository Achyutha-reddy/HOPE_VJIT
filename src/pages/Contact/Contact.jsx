import React, { useState } from 'react';
import './contact.css'; // Assuming styles are defined in Contact.css
// import 'font-awesome/css/font-awesome.min.css'; // Importing FontAwesome

const Contact = () => {
  // React state for managing hover color
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Function to handle mouse enter (hover)
  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or want to connect, follow us on our social media:</p>

      <div className="social-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => handleMouseEnter('facebook')}
          onMouseLeave={handleMouseLeave}
          style={{ color: hoveredIcon === 'facebook' ? '#007bff' : '#333' }}
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => handleMouseEnter('twitter')}
          onMouseLeave={handleMouseLeave}
          style={{ color: hoveredIcon === 'twitter' ? '#007bff' : '#333' }}
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => handleMouseEnter('instagram')}
          onMouseLeave={handleMouseLeave}
          style={{ color: hoveredIcon === 'instagram' ? '#007bff' : '#333' }}
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => handleMouseEnter('linkedin')}
          onMouseLeave={handleMouseLeave}
          style={{ color: hoveredIcon === 'linkedin' ? '#007bff' : '#333' }}
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => handleMouseEnter('youtube')}
          onMouseLeave={handleMouseLeave}
          style={{ color: hoveredIcon === 'youtube' ? '#007bff' : '#333' }}
        >
          <i className="fa fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
