import React from 'react';

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <footer className="section" id="footer">
      <div className="container grid">
        <div className="brand">
          <a href="#home" className="logo logo-alt">beauty<span>salon</span>.</a>
          <p>©2021 Beautysalon.</p>
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