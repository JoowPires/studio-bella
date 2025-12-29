import React from 'react';
import config from '../config';
import { ArrowRightIcon, getServiceIcon } from './Icons';
import '../styles/Services.css';

function ServiceCard({ service, index }) {
  const whatsappLink = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`;

  return (
    <article className="service-card">
      <div className="service-image">
        <img src={service.image} alt={service.title} />
      </div>
      <div className="service-content">
        <div className="service-icon">
          {getServiceIcon(index)}
        </div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <a 
          href={whatsappLink} 
          className="service-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Agendar <ArrowRightIcon />
        </a>
      </div>
    </article>
  );
}

function Services() {
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
        <div className="services-grid">
          {config.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
