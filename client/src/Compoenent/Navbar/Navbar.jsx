import React from 'react';
import './About.css';

import logo from "../../images/logo.png"
const Navbar = () => {
  return (
    <>
     <div>
    
      <nav className="navbar">
        <div className="navbar-container">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#programmes">Programmes</a></li>
            <li><a href="#about"><span>About MTKA</span></a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
          <button className="navbar-button">Contact Us</button>
        </div>
      </nav>

    
      <header className="header-banner">
  <div className="banner-content">
    <h1 className="about">About Us</h1>
    <p className="title">
      Welcome To Okinawa Matsubayashi Shorin Ryu Karate-Do Kubodo Association India
    </p>
    <p className="subtitle">
      Step into our dojo to train in the purest form of Matsubayashi Shorin Ryu karate. Our programs guide you to
      build strength, focus, and self-discipline while embracing the deep cultural heritage of Okinawan martial arts.
    </p>
    <button className="banner-button">Browse our Programmes</button>
  </div>
</header>

    </div>

    
    </>
  
  );
};

export default Navbar;
