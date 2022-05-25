// /* const nav = document.querySelector('#header nav')
// const toggle = document.querySelectorAll('nav .toggle')

// /* Toggle do menu */
// for (const element of toggle) {
//   element.addEventListener('click', () => {
//     nav.classList.toggle('show')
//   })
// }

// /* Fechar menu ao clicar nos links */
// const links = document.querySelectorAll('#header ul li a')

// for (const link of links) {
//   link.addEventListener('click', () => {
//     nav.classList.remove('show')
//   })
// }

// /* Adicionar sombras ao header quando der scroll */

const header = document.querySelector("#header") as HTMLElement | null;

export function changeHeaderWhenScroll() {
  if (header !== null) {
    const navHeight = header.offsetHeight;
    if (window.scrollY >= navHeight) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  }
}

// /* Swiper - slide */
// /* const swiper = new Swiper('.swiper', {
//   slidesPerView: 1,
//   mousewheel: true,
//   keyboard: true,
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   breakpoints: {
//     767: {
//       slidesPerView: 2,
//       setWrapperSize: true,
//     }
//   }
// }); */

// /* ScrollReveal */
// const scrollReveal = ScrollReveal({
//   origin: 'top',
//   distance: '30px',
//   duration: 700,
//   reset: true
// })

// scrollReveal.reveal(`
//   #home .text, #home .image,
//   #about .image, #about .text,
//   #services header, #services .card,
//   #testimonials header, #testimonials .testimonials,
//   #contact .text, #contact .links,
//   footer .brand, footer .social
// `, { interval: 100 }
// )

// /* Hover in the social links */
// const socialLinks = document.querySelectorAll('footer .social a i')

// for (const link of socialLinks) {
//   link.addEventListener('mouseover', () => {
//     console.log(socialLinks)
//     link.classList.add('hover')
//   })
//   link.addEventListener('mouseout', () => {
//     console.log(socialLinks)
//     link.classList.remove('hover')
//   })
// }

// /* Activate menu on section scroll */
// const sections = document.querySelectorAll('main section[id]')

// function activateMenuAtCurrentSection() {
//   const checkpoint = window.scrollY + (window.innerHeight / 8) * 4

//   for (const section of sections) {
//     const sectionTop = section.offsetTop
//     const sectionHeight = section.offsetHeight
//     const sectionId = section.getAttribute('id')

//     const sectionStart = checkpoint >= sectionTop
//     const sectionEnd = checkpoint <= sectionTop + sectionHeight

//     if (sectionStart && sectionEnd) {
//       document
//         .querySelector(`nav ul li a[href*=${sectionId}]`)
//         .classList.add('active')
//     } else {
//       document
//         .querySelector(`nav ul li a[href*=${sectionId}]`)
//         .classList.remove('active')
//     }
//   }
// }

/* Back to top button */
const backToTopButton = document.querySelector(
  ".back-to-top"
) as HTMLElement | null;

export const backToTop = () => {
  if (backToTopButton !== null) {
    if (window.scrollY >= 550) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  }
};

export function checkFooterTop() {
  const checkpoint = window.scrollY + (window.innerHeight / 8) * 7.5;

  const footer = document.getElementById("footer") as HTMLElement | null;
  if (footer !== null) {
    const footerTop = footer.offsetTop;
    const footerStart = checkpoint > footerTop;

    if (backToTopButton !== null) {
      if (footerStart) {
        backToTopButton.classList.add("color-alt");
      } else {
        backToTopButton.classList.remove("color-alt");
      }
    }
  }
}
