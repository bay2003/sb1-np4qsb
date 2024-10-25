import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <motion.section 
      className="cta-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="cta-content">
          <h2>Готовы начать проект?</h2>
          <p>Свяжитесь с нами для консультации и расчета стоимости</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Обсудить проект
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;