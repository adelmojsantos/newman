import React from 'react';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container grid">
        <div className="text">
          <h2 className="title">Entre em contato com a gente!</h2>
          <p>Entre em contato com a Newman, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
          <a
            href="https://api.whatsapp.com/send?phone=+5516994011515&text=Oi! Gostaria de agendar um horário"
            target="_blank" className="button" rel="noreferrer"
          >
            <i className="icon-whatsapp"></i> Entrar em contato
          </a>
        </div>

        <div className="links">
          <ul className="grid">
            <li><i className="icon-phone"></i> 16 99401-1515</li>
            <li><i className="icon-map-pin"></i> Av. Chico Júlio, 2784</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;