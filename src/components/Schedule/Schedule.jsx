import React from 'react';
import { ClockIcon, MapPinIcon, CalendarIcon } from '../Icons/Icons';
import './Schedule.css';

const Schedule = () => {
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

        <div className="schedule-grid">
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
      </div>
    </section>
  );
};

export default Schedule;
