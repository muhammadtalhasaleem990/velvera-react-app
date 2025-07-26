import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PerfumeSection from './components/PerfumeSection';
import Footer from './components/Footer';
import './index.css';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <PerfumeSection />
    

<Reviews />     {/* Place it here */}
      <Footer />
    </div>
  );
}

export default App;
