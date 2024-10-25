import React from 'react';
import { motion } from 'framer-motion';
import { FaSearchPlus, FaCode, FaCamera, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaSearchPlus />,
    title: 'Сканирование деталей',
    description: 'Высокоточное 3D-сканирование промышленных деталей и компонентов'
  },
  {
    icon: <FaCode />,
    title: 'Реверс-инжиниринг',
    description: 'Воссоздание цифровых моделей по физическим образцам'
  },
  {
    icon: <FaCamera />,
    title: 'Компьютерное зрение',
    description: 'Системы машинного зрения для автоматизации контроля качества'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Безопасность и учет',
    description: 'Интеллектуальные системы мониторинга и контроля доступа'
  },
  {
    icon: <FaChartLine />,
    title: 'Производственный анализ',
    description: 'Аналитика производственных процессов и оптимизация'
  }
];

const ServicesPreview = () => {
  return (
    <section className="services-preview">
      <div className="container">
        <h2 className="section-title">Наши услуги</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;