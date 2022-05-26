import React from 'react';
import { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import foto1 from "../../../assets/photos/1.jpg"
import foto2 from "../../../assets/photos/2.jpg"
import foto3 from "../../../assets/photos/3.jpg"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <header>
          <h2 className="title">Depoimentos de quem já passou por aqui</h2>
        </header>
        {/* <div className="testimonials swiper">
          <div className="swiper-wrapper"> */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={2}
          mousewheel={true}
          navigation
          // scrollbar={{ draggable: true }}
          keyboard={true}
          pagination={{
            clickable: true
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            767: {
              slidesPerView: 2,
              setWrapperSize: true,
            }
          }}
          className="testimonials"
        >
          <SwiperSlide>
            <div className="testimonial swiper-slide">
              <blockquote>
                <p>
                  <span>&ldquo;</span>
                  Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois
                  que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e
                  qualificados.
                </p>
                <cite>
                  <img src={foto1} alt="Foto de Wanderson Souza" />
                  Wanderson Souza
                </cite>
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial swiper-slide">
              <blockquote>
                <p>
                  <span>&ldquo;</span>
                  Minha mãe frequenta o salão há anos e me levou um dia para conhecer. Minha experiência foi incrível,
                  eu
                  continuo fazendo a terapia capilar e isso salvou o meu cabelo. Adoro todos os profissionais do
                  Beautysalon.

                </p>
                <cite>
                  <img src={foto2} alt="Foto de Luan Falcão" />
                  Luan Falcão
                </cite>
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial swiper-slide">
              <blockquote>
                <p>
                  <span>&ldquo;</span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit molestiae ab ipsa, dicta magni ad.
                  Praesentium repudiandae nulla perferendis cumque nostrum commodi odit qui pariatur unde inventore sit,
                  adipisci fugit.
                </p>
                <cite>
                  <img src={foto3} alt="Foto de Francisco Venega" />
                  Francis Venega
                </cite>
              </blockquote>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* </div>
        </div> */}
      </div>
    </section>
  );
}

export default Testimonials;

/*   
slidesPerView: 1,
  mousewheel: true,
  keyboard: true,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    }
  } 
  */