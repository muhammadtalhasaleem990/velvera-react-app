// Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Velvéra Logo" />
        <p className="slogan">Luxury in Every Drop</p>
      </div>
    </header>
  );
};

export default Header;
