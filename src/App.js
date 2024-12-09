import './App.css';
import React, {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Zoom from './Zoom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
    
      <Navbar />
      <Zoom />
      <Routes>
        <Route path="./components/pages/Home.js"  />
        <Route path="./components/pages/About.js" element={<h1>About Us</h1>} />
        <Route path="./components/pages/Contact.js" element={<h1>Contact Us</h1>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
