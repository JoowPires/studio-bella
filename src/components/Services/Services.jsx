import React, { useState, useRef } from 'react';
import { SparkleIcon, EyeIcon, PaintBrushIcon, HeartIcon, ArrowRightIcon } from '../Icons/Icons';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Limpeza de Pele',
    description: 'Tratamento profundo que remove impurezas e renova a pele, deixando-a radiante.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
    icon: SparkleIcon,
    whatsappMessage: 'Olá! Gostaria de agendar uma limpeza de pele.',
  },
  {
    id: 2,
    title: 'Design de Sobrancelhas',
    description: 'Sobrancelhas perfeitas que harmonizam e valorizam seu olhar.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    icon: EyeIcon,
    whatsappMessage: 'Olá! Gostaria de agendar um design de sobrancelhas.',
  },
  {
    id: 3,
    title: 'Manicure e Pedicure',
    description: 'Unhas impecáveis com acabamento de alta qualidade.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
    icon: PaintBrushIcon,
    whatsappMessage: 'Olá! Gostaria de agendar manicure e pedicure.',
  },
  {
    id: 4,
    title: 'Procedimentos Estéticos',
    description: 'Tratamentos avançados para resultados excepcionais.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
    icon: HeartIcon,
    whatsappMessage: 'Olá! Gostaria de saber mais sobre os procedimentos estéticos.',
  },
];

const ServiceCard = ({ service }) => {
  const IconComponent = service.icon;
  const whatsappUrl = `https://wa.me/5599999999999?text=${encodeURIComponent(service.whatsappMessage)}`;

  return (
    <article className="service-card">
      <div className="service-image">
        <img src={service.image} alt={service.title} />
      </div>
      <div className="service-content">
        <div className="service-icon">
          <IconComponent size={28} />
        </div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <a 
          href={whatsappUrl} 
          className="service-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Agendar
          <ArrowRightIcon />
        </a>
      </div>
    </article>
  );
};

const Services = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const slideWidth = sliderRef.current.offsetWidth;
      const newActiveSlide = Math.round(scrollLeft / slideWidth);
      setActiveSlide(newActiveSlide);
    }
  };

  const scrollToSlide = (index) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="services" id="servicos">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">O que oferecemos</p>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Tratamentos especializados desenvolvidos para realçar sua beleza natural
          </p>
        </div>

        <div
          className="services-grid"
          ref={sliderRef}
          onScroll={handleScroll}
        >
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="slider-dots">
          {servicesData.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${activeSlide === index ? 'active' : ''}`}
              onClick={() => scrollToSlide(index)}
              aria-label={`Ir para serviço ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
