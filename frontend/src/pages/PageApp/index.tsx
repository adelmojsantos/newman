import React from 'react';

import About from '../../components/template/About';
import BackToTop from '../../components/template/BackToTop';
import Contact from '../../components/template/Contact';
import Footer from '../../components/template/Footer';
import Header from '../../components/template/Header';
import Home from '../../components/template/Home';
import Services from '../../components/template/Services';
import Testimonials from '../../components/template/Testimonials';
import { backToTop, checkFooterTop } from '../../main';


const PageApp: React.FC = () => {
  /* When scroll */
  window.addEventListener('scroll', () => {
    // changeHeaderWhenScroll();
    // activateMenuAtCurrentSection()
    backToTop();
    checkFooterTop();
  })

  return (
    <>
      <Header />
      <main>
        <Home />
        <div className="divider-1"></div>
        <About />
        <div className="divider-2"></div>
        <Services />
        <div className="divider-1"></div>
        <Testimonials />
        <div className="divider-2"></div>
        <Contact />
        <div className="divider-1"></div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default PageApp;