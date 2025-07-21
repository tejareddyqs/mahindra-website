import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="container">
      <div className="navbar-logo">
        <img src={logo} alt="" className='logo'/>
      </div>
      <ul className="navbar-links">
        <li><button className='btn'>Home</button></li>
        <li><button className='btn'>Program</button></li>
        <li><button className='btn'>About Us</button></li>
        <li><button className='btn'>Campus</button></li>
        <li><button className='btn'>Testinomials</button></li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
