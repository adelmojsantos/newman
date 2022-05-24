import React from 'react';

// import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <section className="section" id="contact">
      <div className="container grid">
        <div className="text">
          <h2 className="title">Entre em contato com a gente!</h2>
          <p>Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
          <a
            href="https://api.whatsapp.com/send?phone=+5516992802928&text=Oi! Gostaria de agendar um horário"
            target="_blank" className="button" rel="noreferrer"
          >
            <i className="icon-whatsapp"></i> Entrar em contato
          </a>
        </div>

        <div className="links">
          <ul className="grid">
            <li><i className="icon-phone"></i> 11 99845-6754</li>
            <li><i className="icon-map-pin"></i> R. Amauri Souza, 346</li>
            <li><i className="icon-mail"></i> contato@beautysalon.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;