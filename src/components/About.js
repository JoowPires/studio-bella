import React from 'react';
import config from '../config';
import { CheckBadgeIcon, HeartIcon, StarIcon, SmileIcon } from './Icons';
import '../styles/About.css';

const features = [
  { icon: CheckBadgeIcon, title: "Profissionais Certificados", text: "Equipe altamente qualificada" },
  { icon: HeartIcon, title: "Atendimento Humanizado", text: "Cuidado personalizado" },
  { icon: StarIcon, title: "Produtos Premium", text: "Qualidade comprovada" },
  { icon: SmileIcon, title: "Ambiente Acolhedor", text: "Relaxe e sinta-se em casa" }
];

function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-pattern"></div>
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="about-image-main">
              <img src={config.images.aboutMain} alt={config.salonName} />
            </div>
            <div className="about-image-secondary">
              <img src={config.images.aboutSecondary} alt="Atendimento" />
            </div>
            <div className="about-experience">
              <p className="experience-number">{config.stats.experience}</p>
              <p className="experience-text">Anos de experiência</p>
            </div>
          </div>

          <div className="about-content">
            <div className="section-header left">
              <p className="section-tag no-lines">Quem somos</p>
              <h2 className="section-title">{config.salonName} {config.salonSubtitle}</h2>
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

            <div className="about-features">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    <feature.icon size={24} />
                  </div>
                  <div className="feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
