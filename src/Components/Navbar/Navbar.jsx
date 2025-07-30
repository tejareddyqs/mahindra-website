import React, { useEffect, useState } from 'react';
import logo from '../../assets/Mahindra-University-Logo.svg';
import menu_icon from '../../assets/menu-icon.png';
import './Navbar.css';
import { Link } from 'react-scroll'; 
const Navbar = () => {
  const [sticky, setSticky] = useState(false); //important

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 700 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu,setmobileMenu] = useState(false); 
  const toggleMenu =()=>{
  mobileMenu?setmobileMenu(false):setmobileMenu(true);
  }

  return (
    <nav className={`container  ${sticky ? 'dark-nav' : ''}`}>
      <div className="navbar-logo"><Link to='hero' smooth={true} offset={-250} duration={500} >  <img src={logo} alt="" className='logo' /></Link>
      </div>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li>
          <Link to='hero' smooth={true} offset={-250} duration={500}>Home</Link> 
        </li>
        <li><Link to='program'  smooth={true} offset={-250} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-250} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-250} duration={500}>Testimonials</Link></li> 
        <li><Link to='contact'  smooth={true} offset={-250} duration={500}><button className='btn'>Contact Us</button></Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
