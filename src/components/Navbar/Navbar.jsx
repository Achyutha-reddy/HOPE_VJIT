import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For routing
import { FaBars, FaTimes } from 'react-icons/fa'; // Mobile menu icons
import './navbar.css'; // Import your CSS styles

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true); // State for dropdown

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsMobile(!isMobile);

  // Close menu after item click
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(false); // Close the mobile menu
    }
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);


  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Replace logo with text */}
        <div className="navbar-logo">
          <span className="navbar-text"></span> {/* Your custom text */}
        </div>

        {/* Desktop Menu */}
        <ul className={`navbar-menu ${isMobile ? 'active' : ''}`}>
        <li className="navbar-item">
            <Link to="/" className="navbar-links">Home</Link>
          </li>
        <li className="navbar-item" onClick={toggleDropdown}>
            <span className="navbar-links">Teams</span>
            {isDropdownOpen && (
              <ul className="dropdown">
                <li><Link to="/teams/hope" className="dropdown-item">HOPE</Link></li>
                <li><Link to="/teams/womenwings" className="dropdown-item">WOMEN WINGS</Link></li>
              </ul>
            )}
          </li>
          <li className="navbar-item" onClick={toggleDropdown}>
            <span className="navbar-links">About</span>
            {isDropdownOpen && (
              <ul className="dropdown">
                <li><Link to="/about/hope" className="dropdown-item">About HOPE</Link></li>
                <li><Link to="/about/womenwings" className="dropdown-item">About WOMEN WINGS</Link></li>
              </ul>
            )}
          </li>
          <li className="navbar-item">
            <Link to="/recruitment" className="navbar-links">Recruitment</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-links">Contact</Link>
          </li>
          {/* <li className="navbar-item" onClick={toggleDropdown}>
            <span className="navbar-links">Donate</span>
            {isDropdownOpen && (
              <ul className="dropdown">
                <li><Link to="/donate/books" className="dropdown-item">Want to donate BOOKS..?</Link></li>
                <li><Link to="/donate/clothes" className="dropdown-item">want to donate Clothes..?</Link></li>
                <li><Link to="/donate/stationary" className="dropdown-item">want to donate Stationary..?</Link></li>
              </ul>
            )}
          </li> */}
          <li className="navbar-item">
            <Link to="/gallery" className="navbar-links">Gallery</Link>
          </li>
          {/* <li className="navbar-item" onClick={toggleDropdown}>
            <span className="navbar-links">Gallery</span>
            {isDropdownOpen && (
              <ul className="dropdown">
                <li><Link to="/gallery/laal" className="dropdown-item">Laal</Link></li>
                <li><Link to="/gallery/shiksha" className="dropdown-item">Shiksha</Link></li>
                <li><Link to="/gallery/connect2earth" className="dropdown-item">Connect2Earth</Link></li>
                <li><Link to="/gallery/rythubandhusamithi" className="dropdown-item">Rythu Bandhu Samithi</Link></li>
              </ul>
            )}
          </li> */}
          
          {/* Dropdown Menu Item */}
          <li className="navbar-item" onClick={toggleDropdown}>
            <span className="navbar-links">Events</span>
            {isDropdownOpen && (
              <ul className="dropdown">
                <li><Link to="/events/upcomming" className="dropdown-item">Upcoming Events</Link></li>
                <li><Link to="/events/past" className="dropdown-item">Past Events</Link></li>
              </ul>
            )}
          </li>
          {/* <li className="navbar-item">
            <Link to="/vissionmission" className="navbar-links">Vission & Mission</Link>
          </li> */}
          {/* <li className="navbar-item" onClick={toggleDropdown}>
            <span className="navbar-links">Projects</span>
            {isDropdownOpen && (
              <ul className="dropdown">
                <li><Link to="/projects/laal" className="dropdown-item">Laal</Link></li>
                <li><Link to="/projects/shiksha" className="dropdown-item">Shiksha</Link></li>
                <li><Link to="/projects/connect2earth" className="dropdown-item">Connect2Earth</Link></li>
                <li><Link to="/projects/rythubandhusamithi" className="dropdown-item">Rythu Bandhu Samithi</Link></li>
              </ul>
            )}
          </li> */}
          <li className="navbar-item">
            <Link to="/projects" className="navbar-links">Projects</Link>
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
