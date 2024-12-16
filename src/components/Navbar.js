import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumePopupOpen, setIsResumePopupOpen] = useState(false); // State for controlling the pop-up visibility

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleResumePopup = () => {
    setIsResumePopupOpen(!isResumePopupOpen);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="container-logo">
          <img src="https://i.imgur.com/bpo8Jnv.jpeg" alt="logo" className="logo" />
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <Link to="/">Zoom</Link>
          </li>
          <li>
            <Link to="./pages/Home.js">Home</Link>
          </li>
          <li>
            <Link to="./pages/About.js">About</Link>
          </li>
          <li>
            <Link to="./pages/Contact.js">Contact</Link>
          </li>
          <li>
            <Link to="./pages/experiece.js">Experience</Link>
          </li>
         
        </ul>
        <div className="btn-container">
          <button className="btn" onClick={toggleResumePopup}>RESUME</button>
        </div>
        <button 
          className="hamburger-menu" 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
         
        </button>
      </nav>

      {/* Pop-up Form for Resume */}
      {isResumePopupOpen && (
        <div className="popup-form">
          <div className="popup-content">
            <h2>Contact Information</h2>
            <p>If you would like to get in touch, feel free to contact me via:</p>
            <ul>
              <li>Email: <strong>mileschris466@gmail.com</strong></li>
              <li>Phone: <strong>+254748778480</strong></li>
            </ul>
            <form>
              <label htmlFor="message">Your Message:</label>
              <textarea id="message" rows="4" placeholder="Write your message here..."></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
              <button type="button" className="close-btn" onClick={toggleResumePopup}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
