import React from 'react';
import { WhatsAppIcon, InstagramIcon } from '../Icons/Icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-logo">
              Studio <span>Bella</span>
            </p>
            <p className="footer-description">
              Dedicados a realçar sua beleza natural com tratamentos exclusivos 
              e atendimento personalizado.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a 
                href="https://wa.me/5599999999999" 
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
              <li><a href="#">Limpeza de Pele</a></li>
              <li><a href="#">Design de Sobrancelhas</a></li>
              <li><a href="#">Manicure e Pedicure</a></li>
              <li><a href="#">Procedimentos</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contato</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="https://wa.me/5599999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">[cidade]</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Studio Bella Estética. Todos os direitos reservados.
          </p>
          <p className="footer-disclaimer">
            Esta página serve para facilitar o contato e o agendamento. 
            Ela não cria clientes novos sozinha.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
