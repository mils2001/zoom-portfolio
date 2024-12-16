
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Zoom from './Zoom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* Define proper paths */}
          <Route path="/" element={<Zoom />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



