import React from "react";
import "./PerfumeSection.css";
import noirImg from "../assets/noir.jpg";
import blossomImg from "../assets/blossom.jpg";
import oudImg from "../assets/oud.jpg";
import { FaWhatsapp } from "react-icons/fa";

const perfumes = [
  {
    id: 1,
    name: "Velvéra Noir",
    description: "A bold and mysterious scent for the confident soul.",
    price: 3200,
    image: noirImg,
  },
  {
    id: 2,
    name: "Velvéra Blossom",
    description: "Light, floral notes that bloom with elegance.",
    price: 2800,
    image: blossomImg,
  },
  {
    id: 3,
    name: "Velvéra Oud",
    description: "Luxurious traditional oud with a modern twist.",
    price: 3500,
    image: oudImg,
  },
];

const PerfumeSection = () => {
  return (
    <section id="perfume" className="perfume-section">
      <h2>Our Perfumes</h2>
      <div className="perfume-grid">
        {perfumes.map((perfume) => (
          <div className="perfume-card" key={perfume.id}>
            <img src={perfume.image} alt={perfume.name} />
            <h3>{perfume.name}</h3>
            <p>{perfume.description}</p>
            <p className="price">Rs{perfume.price}</p>
            <a
              href={`https://wa.me/923190112119?text=Hi, I want to buy ${encodeURIComponent(perfume.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="buy-button"
            >
              <FaWhatsapp className="wa-icon" /> Buy
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerfumeSection;
