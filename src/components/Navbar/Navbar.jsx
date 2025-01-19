import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // For routing
import { FaBars, FaTimes } from 'react-icons/fa'; // Mobile menu icons
import './navbar.css'; // Import your CSS styles

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsMobile(prevState => !prevState);

  // Close mobile menu after clicking a menu item
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(false); // Close the mobile menu immediately after clicking
    }
  };

  // Detect scroll to hide/show navbar
  const handleScroll = () => {
    if (window.scrollY > 50) {
      document.querySelector('.navbar').classList.add('scrolled');
    } else {
      document.querySelector('.navbar').classList.remove('scrolled');
    }

    // Detect scroll direction to hide or show navbar
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      document.querySelector('.navbar').classList.add('hidden');
    } else {
      // Scrolling up
      document.querySelector('.navbar').classList.remove('hidden');
    }

    setLastScrollY(window.scrollY); // Update the last scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Ensure handleScroll gets the latest scroll position

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Removed logo */}

        {/* Desktop Menu */}
        <ul className={`navbar-menu ${isMobile ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-links" onClick={handleLinkClick}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/teams" className="navbar-links" onClick={handleLinkClick}>Teams</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-links" onClick={handleLinkClick}>About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/recruitment" className="navbar-links" onClick={handleLinkClick}>Recruitment</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-links" onClick={handleLinkClick}>Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/events" className="navbar-links" onClick={handleLinkClick}>Events</Link>
          </li>
          <li className="navbar-item">
            <Link to="/gallery" className="navbar-links" onClick={handleLinkClick}>Gallery</Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects" className="navbar-links" onClick={handleLinkClick}>Projects</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="navbar-mobile-icon" onClick={toggleMenu}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
