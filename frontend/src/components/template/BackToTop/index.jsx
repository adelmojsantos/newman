import React, { useEffect } from 'react';


const BackToTop = () => {
  window.addEventListener('scroll', () => {
    const backToTopButton = document.querySelector(
      ".back-to-top"
    );
    if (window.scrollY >= 550) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }

    const checkpoint = window.scrollY + (window.innerHeight / 8) * 7.5;

    const footer = document.getElementById("footer");
    const footerTop = footer.offsetTop;
    const footerStart = checkpoint > footerTop;

    if (footerStart) {
      backToTopButton.classList.add("color-alt");
    } else {
      backToTopButton.classList.remove("color-alt");
    }
  })

  return (
    <a href="#home" className="back-to-top"><i className="icon-arrow-up"></i></a>
  );
}

export default BackToTop;