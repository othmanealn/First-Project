import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
 
function NavBar() {
  return (
    <nav className="navbar">
    <button className="lienLogoButton" onClick={()=>window.location.href="/"}>
       <img className='lienLogo' src="espacealouane.png" alt="espace alouane"></img>
      </button>
    <ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/menu"> Menu</a></li>
      <li><a href="/reservation"> Réservation</a></li>
      <li><a href="/gallery"> Gallery</a></li>
      <li><a href="/contact">Contact</a></li>

   </ul>
  </nav>
  );
}

export default NavBar; 