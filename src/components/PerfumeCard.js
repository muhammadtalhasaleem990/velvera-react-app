import React from 'react';

const PerfumeSection = () => {
  return (
    <section style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Our Featured Fragrances</h2>
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "2rem", 
        marginTop: "1rem",
        flexWrap: "wrap"
      }}>
        <div style={{ 
          border: "1px solid #ccc", 
          padding: "1rem", 
          borderRadius: "8px", 
          width: "200px" 
        }}>
          <h3>Amber Oud</h3>
          <p>Warm, luxurious, and long-lasting.</p>
        </div>
        <div style={{ 
          border: "1px solid #ccc", 
          padding: "1rem", 
          borderRadius: "8px", 
          width: "200px" 
        }}>
          <h3>Velvet Rose</h3>
          <p>Romantic floral notes with a hint of musk.</p>
        </div>
      </div>
    </section>
  );
};

export default PerfumeSection;
