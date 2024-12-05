import './App.css';
import React, {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/contact" element={<h1>Contact Us</h1>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
