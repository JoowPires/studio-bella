import React, { useState, useRef } from 'react';
import { StarIcon } from '../Icons/Icons';
import useWindowSize from '../../hooks/useWindowSize';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    text: 'Ambiente maravilhoso e atendimento impecável! Recomendo de olhos fechados!',
    author: 'Maria Silva',
    role: 'Cliente há 3 anos',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    id: 2,
    text: 'Encontrei o lugar perfeito para meu autocuidado. Super indico!',
    author: 'Ana Costa',
    role: 'Cliente há 2 anos',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    id: 3,
    text: 'Profissionalismo de primeira! A atenção aos detalhes me conquistou desde a primeira visita.',
    author: 'Juliana Santos',
    role: 'Cliente há 1 ano',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&q=80',
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <span className="testimonial-quote">"</span>
      <div className="testimonial-stars">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className="testimonial-text">{testimonial.text}</p>
      <div className="testimonial-author">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.author} 
          className="author-avatar" 
        />
        <div className="author-info">
          <h4>{testimonial.author}</h4>
          <p>{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
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
    <section className="testimonials" id="depoimentos">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Depoimentos</p>
          <h2 className="section-title">O que nossas clientes dizem</h2>
          <p className="section-subtitle">
            A satisfação de quem confia em nosso trabalho
          </p>
        </div>

        <div
          className="testimonials-slider"
          ref={isMobile ? sliderRef : null}
          onScroll={isMobile ? handleScroll : undefined}
        >
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {isMobile && (
          <div className="slider-dots">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${activeSlide === index ? 'active' : ''}`}
                onClick={() => scrollToSlide(index)}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
