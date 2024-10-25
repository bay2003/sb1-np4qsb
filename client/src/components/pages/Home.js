import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../sections/HeroSection';
import ServicesPreview from '../sections/ServicesPreview';
import CTASection from '../sections/CTASection';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      
      <motion.section 
        className="about-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h2>О компании ПимТех</h2>
          <p>Мы специализируемся на разработке инновационных решений в области:</p>
          <ul>
            <li>Сканирования деталей</li>
            <li>Реверс-инжиниринга</li>
            <li>Компьютерного зрения</li>
            <li>Безопасности и учета</li>
            <li>Производственного анализа</li>
          </ul>
        </div>
      </motion.section>

      <ServicesPreview />
      <CTASection />
    </div>
  );
};

export default Home;