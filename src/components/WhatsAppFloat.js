import React from 'react';
import config from '../config';
import { WhatsAppIcon } from './Icons';
import '../styles/WhatsAppFloat.css';

function WhatsAppFloat() {
  return (
    <div className="whatsapp-float">
      <a 
        href={`https://wa.me/${config.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon size={32} />
      </a>
    </div>
  );
}

export default WhatsAppFloat;
