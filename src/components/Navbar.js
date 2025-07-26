 import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Velvéra</h1>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;

