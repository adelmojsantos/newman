import React from 'react';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <header id="header">
      <nav className="container">
        {/* <a href="#" className="logo">newman<span>barbershop</span>.</a>  */}
        <a href="#home" className="logo">
          <i className="icon-bearded-man"></i>  New<span>man</span> Barbershop
        </a>

        <div className="menu">
          <ul className="grid">
            <li><a className="title" href="#home">Início</a></li>
            <li><a className="title" href="#about">Sobre</a></li>
            <li><a className="title" href="#services">Serviços</a></li>
            {/* <li><a className="title" href="#testimonials">Depoimentos</a></li> */}
            <li><a className="title" href="#contact">Contato</a></li>
          </ul>
        </div>
        <div className="toggle icon-menu"></div>
        <div className="toggle icon-close"></div>
      </nav>
    </header>
  );
}

export default Header;