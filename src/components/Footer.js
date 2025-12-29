import React from 'react';
import config from '../config';
import { InstagramIcon, WhatsAppIcon } from './Icons';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-logo">
              {config.salonName} <span>Bella</span>
            </p>
            <p className="footer-description">
              Dedicados a realçar sua beleza natural com tratamentos exclusivos 
              e atendimento personalizado.
            </p>
            <div className="footer-social">
              <a href={config.social.instagram} className="social-link" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a 
                href={`https://wa.me/${config.whatsappNumber}`} 
                className="social-link" 
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={20} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Navegação</h4>
            <ul className="footer-links">
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#horarios">Horários</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Serviços</h4>
            <ul className="footer-links">
              {config.services.map((service) => (
                <li key={service.id}><a href="#servicos">{service.title}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contato</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href={`https://wa.me/${config.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li><a href={config.social.instagram}>Instagram</a></li>
              <li><a href="#horarios">{config.city}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {config.salonName} {config.salonSubtitle}. 
            Todos os direitos reservados.
          </p>
          <p className="footer-disclaimer">
            Esta página serve para facilitar o contato e o agendamento. 
            Ela não cria clientes novos sozinha.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
