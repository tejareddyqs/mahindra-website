import React,{useEffect,useState} from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const[sticky,setSticky] = useState(false) //important 
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >70 ? setSticky(true):setSticky(false);
    })
  },[] )
  return (
    <nav className={`container  ${sticky?'dark-nav':''}`}>
      <div className="navbar-logo">
        <img src={logo} alt="" className='logo'/>
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testinomials</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
