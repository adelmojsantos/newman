import React from 'react';

// import { Container } from './styles';

const Services: React.FC = () => {
  return (
    <section className="section" id="services">
      <div className="container grid">
        <header>
          <h2 className="title">Serviços</h2>
          <p className="subtitle">
            Com mais de 10 anos no mercado, o <strong>Beautysalon</strong> já conquistou clientes de inúmeros países com
            seus tratamentos exclusivos
            e totalmente naturais
          </p>
        </header>
        <div className="cards grid">
          <div className="card">
            <i className="icon-woman-hair"></i>
            <h3 className="title">Terapia Capilar</h3>
            <p>
              Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e
              finos.
            </p>
          </div>
          <div className="card">
            <i className="icon-trim"></i>
            <h3 className="title">Cortes</h3>
            <p>
              A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes
              diferenciados e
              clássicos.
            </p>
          </div>
          <div className="card">
            <i className="icon-cosmetic"></i>
            <h3 className="title">Tratamentos</h3>
            <p>
              O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo
              de cabelo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;