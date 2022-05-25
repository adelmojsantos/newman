import React from 'react';

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <footer className="section" id="footer">
      <div className="container grid">
        <div className="brand">
          <a href="#home" className="logo grid logo-alt">
            <div className="col-a">
              <i className="icon-bearded-man"></i>
            </div>
            <div className="col-b">
              <span>Newman</span>
            </div>
            <div className="col-c">
              Barbershop
            </div>
          </a>
          <p>©2022 Newman Barbershop.</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <div className="social grid">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="icon-instagram"></i></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="icon-facebook"></i></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="icon-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;