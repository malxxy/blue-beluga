import React from 'react';
import '/nav.css';

function Navbar() {
  return (
    <nav className="navbar">
        <a className='nameTitle' href='/'>Malia Faith</a>
        <ul>
            <li className='navItem'><a href='Portfolio'>Portfolio</a></li>
            <li className='navItem'><a href='Resume'>Resume</a></li>
            <li className='navItem'><a href='Contact'>Contact</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;