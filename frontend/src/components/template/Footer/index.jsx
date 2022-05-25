import React from 'react';

const Footer = () => {
  return (
    <footer className="section" id="footer">
      <div className="container grid">
        <div className="brand">
          <a href="#home" className="logo logo-alt">
            <div className="logo-grid">
              <div className="col-a">
                <i className="icon-bearded-man"></i>
              </div>
              <div className="col-b">
                New Man
              </div>
              <div className="col-c">
                Barbershop
              </div>
            </div>
          </a>
          <p>©2022 New Man Barbershop.</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <div className="social grid">
          <a href="https://instagram.com/paulomilanez.oficial" target="_blank" rel="noreferrer">
            <i className="icon-instagram"></i>
          </a>
          <a href="https://pt-br.facebook.com/newmanbarebarbearia/" target="_blank" rel="noreferrer">
            <i className="icon-facebook"></i>
          </a>
          {/* <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <i className="icon-youtube"></i>
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;