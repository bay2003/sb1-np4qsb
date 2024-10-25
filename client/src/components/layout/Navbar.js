import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          ПимТех
        </Link>

        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            Главная
          </Link>
          <Link 
            to="/services"
            className={location.pathname === '/services' ? 'active' : ''}
          >
            Услуги
          </Link>
          <Link 
            to="/projects"
            className={location.pathname === '/projects' ? 'active' : ''}
          >
            Проекты
          </Link>
          <Link 
            to="/team"
            className={location.pathname === '/team' ? 'active' : ''}
          >
            Команда
          </Link>
          <Link 
            to="/contact"
            className={`contact-button ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Связаться
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;