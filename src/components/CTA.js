import React from 'react';
import config from '../config';
import { WhatsAppIcon } from './Icons';
import '../styles/CTA.css';

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Pronta para realçar sua beleza?</h2>
        <p>Agende agora mesmo pelo WhatsApp e comece sua transformação</p>
        <a 
          href={`https://wa.me/${config.whatsappNumber}`} 
          className="btn btn-primary" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

export default CTA;
