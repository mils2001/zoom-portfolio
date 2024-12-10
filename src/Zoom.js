import React, { useState, useEffect } from 'react';
import './Zoom.css';

const API_URL = "http://localhost:3000/portfolio";

function Zoom() {
  const [infoList, setInfoList] = useState([]); // Holds the fetched list
  const [isDetailsPopupVisible, setIsDetailsPopupVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Fetch data from the API
  const fetchInfo = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setInfoList(data); // Assuming `data` is an array
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch info on component mount
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-content">
        <p className="intro-text">Hi, my name is</p>
        <h1 className="main-name">{infoList.name || '[Your Name Here]'}</h1>
        <h2 className="subtitle">I build things for the web.</h2>
        <p className="description">
          {infoList.description || 'I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on creating accessible, user-centered products.'}
        </p>
        <a href="#contact" className="hero-button">Get in Touch</a>
      </div>
      <div className="hero-image">
        <img 
          src='https://i.imgur.com/jFvVx5c.png' 
          alt="Your Picture" 
        />
      </div>
    </div>
  );
}

export default Zoom;
