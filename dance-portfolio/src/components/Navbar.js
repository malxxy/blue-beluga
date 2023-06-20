import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <div className='nameTitle'><Link to ='/'>Malia Faith</Link></div>
        <ul className='navUl'>
            <div className='navItem'><Link to='/Portfolio'>Portfolio</Link></div>
            <div className='navItem'><Link to='/Resume'>Resume</Link></div>
            <div className='navItem'><Link to='/Contact'>Contact</Link></div>
        </ul>
    </nav>
  );
}

export default Navbar;