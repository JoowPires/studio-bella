import React from 'react';
import config from '../config';
import { ClockIcon, LocationIcon, CalendarIcon } from './Icons';
import '../styles/Schedule.css';

function Schedule() {
  return (
    <section className="schedule" id="horarios">
      <div className="schedule-content container">
        <div className="section-header light">
          <p className="section-tag">Informações</p>
          <h2 className="section-title">Horários e Localização</h2>
          <p className="section-subtitle">Encontre-nos e agende seu horário</p>
        </div>

        <div className="schedule-grid">
          <div className="schedule-card">
            <div className="schedule-card-icon">
              <ClockIcon />
            </div>
            <h3>Horário de Atendimento</h3>
            <ul className="schedule-times">
              {config.schedule.map((item, index) => (
                <li key={index}>
                  <span className="schedule-day">{item.day}</span>
                  <span className="schedule-time">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="schedule-card">
            <div className="schedule-card-icon">
              <LocationIcon />
            </div>
            <h3>Localização</h3>
            <p className="location-address">
              <strong>{config.city}</strong>
              Entre em contato pelo WhatsApp para mais informações sobre nosso endereço.
            </p>
          </div>

          <div className="schedule-card cta-card">
            <div className="schedule-card-icon dark">
              <CalendarIcon />
            </div>
            <h3>Agende Agora</h3>
            <p>Garanta seu horário de forma rápida e prática.</p>
            <a 
              href={`https://wa.me/${config.whatsappNumber}`} 
              className="btn btn-dark" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Agendar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
