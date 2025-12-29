import React from 'react';
import config from '../config';
import { WhatsAppIcon, SparkleIcon, CheckBadgeIcon, StarIcon } from './Icons';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={config.images.heroBg} alt={config.salonName} />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <SparkleIcon />
            Estética & Bem-estar
          </div>
          <h1 className="hero-title">
            {config.heroTitle} <strong>{config.heroTitleHighlight}</strong> {config.heroTitleEnd}
          </h1>
          <p className="hero-subtitle">{config.heroSubtitle}</p>
          <div className="hero-buttons">
            <a 
              href={`https://wa.me/${config.whatsappNumber}`} 
              className="btn btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Agendar pelo WhatsApp
            </a>
            <a href="#servicos" className="btn btn-secondary">
              Conhecer serviços
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img src={config.images.heroMain} alt="Tratamento estético" />
          </div>
          
          <div className="hero-float-card card-1">
            <div className="float-card-icon">
              <StarIcon />
            </div>
            <p className="float-card-title">Avaliação 5 estrelas</p>
            <p className="float-card-text">+500 clientes satisfeitas</p>
          </div>
          
          <div className="hero-float-card card-2">
            <div className="float-card-icon">
              <CheckBadgeIcon />
            </div>
            <p className="float-card-title">Profissional certificada</p>
            <p className="float-card-text">Qualidade garantida</p>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <p className="stat-number">{config.stats.experience}</p>
              <p className="stat-label">{config.stats.experienceLabel}</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">{config.stats.clients}</p>
              <p className="stat-label">{config.stats.clientsLabel}</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">{config.stats.treatments}</p>
              <p className="stat-label">{config.stats.treatmentsLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
