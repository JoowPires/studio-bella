import React from 'react';
import config from '../config';
import { StarFilledIcon } from './Icons';
import '../styles/Testimonials.css';

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <span className="testimonial-quote">"</span>
      <div className="testimonial-stars">
        {[...Array(5)].map((_, i) => (
          <StarFilledIcon key={i} />
        ))}
      </div>
      <p className="testimonial-text">{testimonial.text}</p>
      <div className="testimonial-author">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.author} 
          className="author-avatar" 
        />
        <div className="author-info">
          <h4>{testimonial.author}</h4>
          <p>{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="testimonials" id="depoimentos">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Depoimentos</p>
          <h2 className="section-title">O que nossas clientes dizem</h2>
          <p className="section-subtitle">A satisfação de quem confia em nosso trabalho</p>
        </div>
        <div className="testimonials-slider">
          {config.testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
