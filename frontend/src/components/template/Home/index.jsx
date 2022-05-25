import React from 'react';

import HomePicture from '../../../assets/photos/home-picture.jpg'

// import { Container } from './styles';

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
          <h2 className="title">Estilo New Man</h2>
          <p>Um local exclusivo em Franca, para todos os estilos de cortes e gostos.</p>
          <p>Saiba também sobre o exclusivo curso de barbeiro clicando <a href="#course">aqui</a>.</p>
          <a href="#contact" className="button">Agendar um horário</a>
        </div>
      </div>
    </section>
  );
}

export default Home;