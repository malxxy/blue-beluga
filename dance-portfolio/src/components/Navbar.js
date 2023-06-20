import React from 'react';

function Navbar() {
  return (
    <nav>
        <a className='nameTitle' href='/'>Malia Faith</a>
        <ul className='navUl'>
            <li className='navItem'><a href='Portfolio'>Portfolio</a></li>
            <li className='navItem'><a href='Resume'>Resume</a></li>
            <li className='navItem'><a href='Contact'>Contact</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;