import React from 'react';

import HomePicture from '../../../assets/photos/home-picture.jpg'

const Home = () => {
  return (
    <section className="section" id="home">
      <div className="container grid">
        <div className="image">
          <img
            src={HomePicture}
            alt="Homem tendo a barba aparada" />
        </div>
        <div className="text">
          <h2 className="title">Estilo diferenciado ou clássico</h2>
          <p>A New Man tem profissionais especializados em todos os estilos de cortes. Cabelo e barba alinhados em cortes clássicos e modernos.</p>
          <p>Saiba também sobre o exclusivo curso de barbeiro clicando <a href="#course">aqui</a>.</p>
          <a href="#contact" className="button">Agendar um horário</a>
        </div>
      </div>
    </section>
  );
}

export default Home;