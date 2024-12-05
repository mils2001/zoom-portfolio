import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='container'>
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to='/Home'>Home</Link>
                </li>
                <li>
                    <Link to='/About' >About</Link>
                </li>
                <li>
                    <Link to=''>Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar