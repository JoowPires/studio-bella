import React from 'react';
import { WhatsAppIcon } from '../Icons/Icons';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  return (
    <div className="whatsapp-float">
      <a 
        href="https://wa.me/5599999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon size={32} />
      </a>
    </div>
  );
};

export default WhatsAppFloat;
