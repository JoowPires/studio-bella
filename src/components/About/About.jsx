import React, { useState, useRef } from 'react';
import { CheckBadgeIcon, HeartIcon, StarIcon, FaceSmileIcon } from '../Icons/Icons';
import useWindowSize from '../../hooks/useWindowSize';
import './About.css';

const features = [
  {
    icon: CheckBadgeIcon,
    title: 'Profissionais Certificados',
    description: 'Equipe altamente qualificada',
  },
  {
    icon: HeartIcon,
    title: 'Atendimento Humanizado',
    description: 'Cuidado personalizado',
  },
  {
    icon: StarIcon,
    title: 'Produtos Premium',
    description: 'Qualidade comprovada',
  },
  {
    icon: FaceSmileIcon,
    title: 'Ambiente Acolhedor',
    description: 'Relaxe e sinta-se em casa',
  },
];

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  const handleScroll = () => {
    if (sliderRef.current && isMobile) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const slideWidth = sliderRef.current.offsetWidth;
      const newActiveSlide = Math.round(scrollLeft / slideWidth);
      setActiveSlide(newActiveSlide);
    }
  };

  const scrollToSlide = (index) => {
    if (sliderRef.current && isMobile) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="about" id="sobre">
      <div className="about-pattern"></div>
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="about-image-main">
              <img
                src="https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=800&q=80"
                alt="Studio Bella"
              />
            </div>
            <div className="about-image-secondary">
              <img
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80"
                alt="Atendimento"
              />
            </div>
            <div className="about-experience">
              <p className="experience-number">8+</p>
              <p className="experience-text">Anos de experiência</p>
            </div>
          </div>

          <div className="about-content">
            <div className="section-header about-header">
              <p className="section-tag">Quem somos</p>
              <h2 className="section-title">Studio Bella Estética</h2>
            </div>

            <p className="about-text">
              Somos um espaço dedicado ao cuidado e bem-estar feminino. Com mais de 8 anos
              de experiência, nos especializamos em tratamentos que valorizam a beleza
              natural de cada cliente.
            </p>

            <p className="about-text">
              Nossa missão é proporcionar uma experiência única de autocuidado, em um
              ambiente acolhedor e com profissionais qualificados.
            </p>

            <div
              className="about-features"
              ref={isMobile ? sliderRef : null}
              onScroll={isMobile ? handleScroll : undefined}
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">
                      <IconComponent size={24} />
                    </div>
                    <div className="feature-text">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {isMobile && (
              <div className="features-slider-dots">
                {features.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${activeSlide === index ? 'active' : ''}`}
                    onClick={() => scrollToSlide(index)}
                    aria-label={`Ir para característica ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
