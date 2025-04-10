import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css'; // Make sure to create and import this CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      {/* Aurora background */}
      <div className="aurora-background" />

      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <h4 className="footer-heading">
          Made with <FaHeart className="heart-icon" /> by Akintunde Diekololaoluwa <span className="italic">aka</span> Dev Alex
        </h4>

        <div className="social-icons">
          <a href="https://github.com/Diekodavidd" target="_blank" rel="noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/akintunde-diekolola-a76942252/" target="_blank" rel="noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link">
            <FaTwitter />
          </a>
        </div>

        <p className="footer-copy">&copy; {currentYear} Dev Alex — All Rights Reserved</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
