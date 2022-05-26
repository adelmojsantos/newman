import React from 'react';

const Courses = () => {
  return (
    <section className="section" id="course">
      <div className="container grid">
        <header>
          <h2 className="title">New Man Academy</h2>
          <p className="subtitle">
            Oportunidade única para se profissionalizar ou aperfeiçoar suas técnicas. Venha conhecer nosso exclusivo <strong>Curso de Barbeiro</strong>
          </p>
        </header>
        <div className="cards grid">
          <div className="card">
            <i className="icon-hair-salon"></i>
            <h3 className="title">ÚLTIMAS VAGAS</h3>
            <h3 className='title'><strong>R$ 999,99</strong></h3>
            <h3>À vista ou em 10x no cartão*</h3>
            <h6>*acréscimo da taxa do cartão</h6><br />
            <p>
              Não perca essa oportunidade! Entre em contato agora mesmo para mais detalhes.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=+5516994011515&text=Oi! Gostaria de mais informações sobre o curso de barbeiro"
              target="_blank" className="button" rel="noreferrer"
            >
              <i className="icon-whatsapp"></i> Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;