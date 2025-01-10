import React from "react";
import "./recruitment.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons


// Assuming you have a logo file in the assets folder
import logo from "../../assets/images/HopeLogo.png";

const Recruitment = () => {
  return (
    <div className="main">
      {/* Logo Section */}
      <div className="logo-container">
        <img src={logo} alt="HOPE Logo" className="logo" />
      </div>

      {/* Google Form Link Section */}
      <div className="google-form-link-container">
        <h3 className="google-form-title">Fill Out Our Google Form</h3>
        <p className="google-form-description">
        The form <span>HOPE</span> is no longer accepting responses.
        <br/>
       
        Try contacting the owner of the form if you think that this is a mistake.
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        TO GET UPDATED REGARDING RECRUITMENT PLEASE FOLLOW US ON INSTGRAM..
        <br/>
          Thank you for being a part of the HOPE community!
        </p>
        <a
          href="https://forms.gle/your-google-form-link" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
          className="google-form-link"
        >
          Go to Google Form
        </a>
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
      {/* Contact Form Section */}
      {/* <div className="contact-container">
        <h2>Contact HOPE</h2>
        <p>Have questions or suggestions?</p>
        <form>
          
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

         
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

       
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Write your message here" rows="4" required></textarea>
          </div>

          
          <div className="button-container">
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </div>
        </form>
      </div> */}

      {/* Social Icons */}
      {/* <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div> */}
    </div>
  );
};

export default Recruitment;
