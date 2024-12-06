import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className='container'>
        <nav className='navbar'>
            <div>
            <ul className='nav-links'>
                <li>
                    <Link to='./pages/Home.js'>Home</Link>
                </li>
                <li>
                    <Link to='./pages/About.js' >About</Link>
                </li>
                <li>
                    <Link to='./pages/Contact.js'>Contact</Link>
                </li>
                <li>
                    <Link to='./pages/experiece.js'>Experience</Link>
                </li>
                <li>
                    <Link to='./pages/work.js'>Work</Link>
                </li>
            </ul>
            <div>
                <button className='btn' >RESUME</button>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar