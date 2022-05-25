import React from 'react';

const Header = () => {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('#header')
    if (window.scrollY >= header.offsetHeight) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }

    const sections = document.querySelectorAll('main section[id]')
    const checkpoint = window.scrollY + (window.innerHeight / 8) * 4

    for (const section of sections) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')

      const sectionStart = checkpoint >= sectionTop
      const sectionEnd = checkpoint <= sectionTop + sectionHeight

      if (sectionStart && sectionEnd) {
        document
          .querySelector(`nav ul li a[href*=${sectionId}]`)
          .classList.add('active')
      } else {
        document
          .querySelector(`nav ul li a[href*=${sectionId}]`)
          .classList.remove('active')
      }
    }
  })

  function OnOpenMenu() {
    document.querySelector('#header nav').classList.add('show')
  }
  function OnCloseMenu() {
    document.querySelector('#header nav').classList.remove('show')
  }


  return (
    <header id="header">
      <nav className="container">
        {/* <a href="#" className="logo">newman<span>barbershop</span>.</a>  */}
        <a href="#home" className="logo">
          <div className="logo-grid">
            <div className="col-a">
              <i className="icon-bearded-man"></i>
            </div>
            <div className="col-b">
              New Man
            </div>
            <div className="col-c">
              <span>Barbershop</span>
            </div>
          </div>
        </a>

        <div className="menu">
          <ul className="grid">
            <li><a onClick={() => OnCloseMenu()} className="title" href="#home">Início</a></li>
            <li><a onClick={() => OnCloseMenu()} className="title" href="#about">Sobre</a></li>
            <li><a onClick={() => OnCloseMenu()} className="title" href="#services">Serviços</a></li>
            <li><a onClick={() => OnCloseMenu()} className="title" href="#course">New Man Academy</a></li>
            <li><a onClick={() => OnCloseMenu()} className="title" href="#contact">Contato</a></li>
          </ul>
        </div>
        <div className="toggle icon-menu" onClick={() => OnOpenMenu()}></div>
        <div className="toggle icon-close" onClick={() => OnCloseMenu()}></div>
      </nav>
    </header>
  );
}

export default Header;