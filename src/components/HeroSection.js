import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>Discover Velvéra</h1>
      <p>Luxury perfumes crafted with elegance and passion – for those who want to leave a lasting impression.</p>
      <button onClick={() => window.location.href = '#perfume'}>Explore Now</button>
    </section>
  );
};

export default HeroSection;
