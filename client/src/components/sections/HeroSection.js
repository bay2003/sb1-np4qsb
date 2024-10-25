import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <video 
        className="hero-video" 
        autoPlay 
        muted 
        loop
        playsInline
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      
      <div className="hero-content">
        <h1>ПимТех</h1>
        <p>Инновационные решения для промышленности</p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn btn-primary">
            Связаться с нами
          </Link>
          <Link to="/services" className="btn btn-secondary">
            Наши услуги
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;