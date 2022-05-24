import React from 'react';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <section className="section" id="home">
      <div className="container grid">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFyYmVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"
            alt="Homem tendo a barba aparada" />
        </div>
        <div className="text">
          <h2 className="title">Saúde natural para os seus cabelos</h2>
          <p>Um salão exclusivo em Franca, especializado em tratamentos naturais.</p>
          <a href="#contact" className="button">Agendar um horário</a>
        </div>
      </div>
    </section>
  );
}

export default Home;