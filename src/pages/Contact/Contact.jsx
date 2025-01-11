import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons
import "./contact.css";
import logo from "../../assets/images/HopeLogo.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    club: "",
    message: "",
  });

  const clubs = ["Sports Club", "Music Club", "Art Club", "Coding Club", "Literature Club"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data Submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="main">
    <div className="contact-container">
    <div className="logo-container">
        <img src={logo} alt="HOPE Logo" className="logo" />
      </div>
      <h2>Contact HOPE</h2>
      <p>Have questions or suggestions?</p>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Message */}
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Write your message here"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="button-container">
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </div>
        <div className="footer-socials">
                <div className="social-icons">
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
      </form>
      </div>

      {/* Social Icons */}
      
      </div>
    
  );
};

export default Contact;
