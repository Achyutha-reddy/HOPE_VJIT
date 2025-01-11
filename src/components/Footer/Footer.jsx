import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons
import './footer.css'; // Create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>HOPE-Helping Others And Prevading Empathy</h2>
          <p>𝐒𝐎𝐂𝐈𝐀𝐋 𝐖𝐄𝐋𝐅𝐀𝐑𝐄 𝐂𝐋𝐔𝐁 𝐨𝐟 𝐕𝐉𝐈𝐓 𝐛𝐮𝐢𝐥𝐝𝐢𝐧𝐠 𝐇𝐎𝐏𝐄</p>
        </div>
        
        {/* <div className="footer-links">
          <ul>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/donate">DONATE</Link>
            </li>
            <li>
              <Link to="/volunteer">VOLUNTEER</Link>
            </li>
            <li>
              <Link to="/events">EVENTS</Link>
            </li>
          </ul>
        </div> */}

        <div className="footer-socio">
          <h4>Follow Us</h4>
          <div className="socio-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HOPE-Helphing Others and Prevading Others. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
