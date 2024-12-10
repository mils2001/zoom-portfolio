import React, { useState, useEffect } from 'react';
import './Zoom.css';

const API_URL = "http://localhost:3000/portfolio";

function Zoom() {
  const [infoList, setInfoList] = useState([]); // Holds the fetched list
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State for popup visibility
  const [alertMessage, setAlertMessage] = useState('');

  // Fetch data from the API
  const fetchInfo = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setInfoList(data); // Assuming `data` is an array or object
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch info on component mount
  useEffect(() => {
    fetchInfo();
  }, []);

  // Handle popup visibility
  const handlePopup = () => {
    setIsPopupVisible(true);
  };

  // Handle contact form submission
  const handleContactSubmit = () => {
    setIsPopupVisible(false);
    setAlertMessage('Contact has been successfully delivered!');
    alert('Thank you for reaching out my contact details provided above.!'); // Display alert to the user
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <p className="intro-text">Hi, my name is</p>
        <h1 className="main-name">{infoList.name || '[Miles Christian David Wafula]'}</h1>
        <h2 className="subtitle">I build things for the web.</h2>
        <p className="description">
          {infoList.description || 'I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on creating accessible, user-centered products.'}
        </p>
        <button className="hero-button" onClick={handlePopup}>
          Get in Touch
        </button>
      </div>
      <div className="hero-image">
          <img src={infoList.image || 'https://i.imgur.com/jFvVx5c.png'} alt="Hero Image" />
  
      </div>

      {/* Popup for Contact Details */}
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h3>Contact Me</h3>
            <p>Email: Mileschris466@gmail.com</p>
            <p>Phone: +254748778480</p>
            <button className="close-button" onClick={handleContactSubmit}>
               Contact
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Zoom;
