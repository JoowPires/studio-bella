import React, { useState, useRef } from 'react';
import { ClockIcon, MapPinIcon, CalendarIcon } from '../Icons/Icons';
import './Schedule.css';

const scheduleCards = [
  {
    id: 1,
    icon: ClockIcon,
    title: 'Horário de Atendimento',
    type: 'schedule'
  },
  {
    id: 2,
    icon: MapPinIcon,
    title: 'Localização',
    type: 'location'
  },
  {
    id: 3,
    icon: CalendarIcon,
    title: 'Agende Agora',
    type: 'cta'
  }
];

const Schedule = () => {
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
    <section className="schedule" id="horarios">
      <div className="schedule-content container">
        <div className="section-header light">
          <p className="section-tag">Informações</p>
          <h2 className="section-title">Horários e Localização</h2>
          <p className="section-subtitle">
            Encontre-nos e agende seu horário
          </p>
        </div>

        <div
          className="schedule-grid"
          ref={sliderRef}
          onScroll={handleScroll}
        >
          <div className="schedule-card">
            <div className="schedule-card-icon">
              <ClockIcon size={32} />
            </div>
            <h3>Horário de Atendimento</h3>
            <ul className="schedule-times">
              <li>
                <span className="schedule-day">Segunda a Sexta</span>
                <span className="schedule-time">9h às 18h</span>
              </li>
              <li>
                <span className="schedule-day">Sábado</span>
                <span className="schedule-time">9h às 14h</span>
              </li>
              <li>
                <span className="schedule-day">Domingo</span>
                <span className="schedule-time">Fechado</span>
              </li>
            </ul>
          </div>

          <div className="schedule-card">
            <div className="schedule-card-icon">
              <MapPinIcon size={32} />
            </div>
            <h3>Localização</h3>
            <p className="location-address">
              <strong>[cidade]</strong>
              Entre em contato pelo WhatsApp para mais informações sobre nosso endereço.
            </p>
          </div>

          <div className="schedule-card cta-card">
            <div className="schedule-card-icon dark">
              <CalendarIcon size={32} />
            </div>
            <h3>Agende Agora</h3>
            <p>Garanta seu horário de forma rápida e prática.</p>
            <a
              href="https://wa.me/5599999999999"
              className="btn btn-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar
            </a>
          </div>
        </div>

        <div className="schedule-slider-dots">
          {scheduleCards.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${activeSlide === index ? 'active' : ''}`}
              onClick={() => scrollToSlide(index)}
              aria-label={`Ir para card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
