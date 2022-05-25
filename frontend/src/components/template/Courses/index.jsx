import React from 'react';

// import { Container } from './styles';

const Courses = () => {
  return (
    <section className="section" id="course">
      <div className="container grid">
        <header>
          <h2 className="title">Curso Barbeiro</h2>
          <p className="subtitle">
            Oportunidade única para se profissionalizar ou aperfeiçoar suas técnicas. Conheça a <strong>New Man Academy</strong>
          </p>
        </header>
        <div className="cards grid">
          <div className="card">
            <i className="icon-hair-salon"></i>
            <h3 className="title">ÚLTIMAS VAGAS</h3>
            <h3><strong>R$ 999,99</strong></h3>
            <p>À vista ou em 10x no cartão</p>
            <p>
              Não perca essa oportunidade! Entre em contato agora mesmo para mais detalhes.
            </p>
            <a href="#contact" className="button">Entrar em contato</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;