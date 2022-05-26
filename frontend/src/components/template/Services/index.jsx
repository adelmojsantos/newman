import React from 'react';

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container grid">
        <header>
          <h2 className="title">Serviços</h2>
          <p className="subtitle">
            A <strong>NEWMAN BARBERSHOP</strong>, oferece serviços e produtos exclusivos para o publico masculino, seguindo o estilo das clássicas barbearias de antigamente.
          </p>
        </header>
        <div className="cards grid">
          <div className="card">
            <i className="icon-beard"></i>
            <h3 className="title">Barboterapia</h3>
            <p>
              A união de técnicas de relaxamento que hidrata a pele, diminui a irritação, diminui o stress do cliente e o deixa muito mais seguro para os procedimentos com a lâmina.
            </p>
          </div>
          <div className="card">
            <i className="icon-man-hair"></i>
            <h3 className="title">Cortes</h3>
            <p>
              Cortes diferenciados e clássicos para deixar você sempre no estilo <em>NEW MAN</em>.
            </p>
          </div>
          <div className="card">
            <i className="icon-cosmetic"></i>
            <h3 className="title">Tratamentos</h3>
            <p>
              Hidratação, relaxamento, plástica e tratamentos incríveis para o seu cabelo, além de técnicas de coloração e descoloração.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;