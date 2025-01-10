import React from "react";
import "./header.css"; // Import custom styles
import hopeLogo from "../../assets/images/HopeLogo.png"; // Replace with Hope VJIT Logo
// import secondaryLogo from "../../assets/images/work1.jpeg"; // Replace with secondary logo if necessary
import { IoLogoTwitter } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src={hopeLogo}
          alt="Hope VJIT NGO Logo"
          className="header-logo"
        />
        <span className="header-title"><a href="https://www.instagram.com/hopevjit/">HOPE-Helping Others And Prevading Empathy</a></span>
      </div>
      
      {/* <div className="header-center">
        <img
          src={secondaryLogo}
          alt="Secondary Hope VJIT Logo"
          className="header-logo"
        />
      </div> */}
      
      <div className="header-right">
        <span className="follow-text">Follow Us</span>
        <a href="https://twitter.com/hopevjit" target="_blank" rel="noopener noreferrer" className="social-icon">
          <IoLogoTwitter />
        </a>
        <a href="https://www.instagram.com/hopevjit/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <RiInstagramFill />
        </a>
        <a href="https://facebook.com/hopevjit" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook />
        </a>
      </div>
    </header>
  );
};

export default Header;
