import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h2>Velvéra</h2>
        <p>Luxury. Identity. Expression.</p>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://wa.me/923190112119" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://tiktok.com/@yourhandle" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
        <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
      <p className="copyright">© 2025 Velvéra. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
