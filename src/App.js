import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Zoom from './Zoom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Zoom />} />
          <Route path="./components/pages/Home.js" element={<h1>Home</h1>} />
          <Route path="./components/pages/About.js" element={<h1>About Us</h1>} />
          <Route path="./components/pages/Contact.js" element={<h1>Contact Us</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

