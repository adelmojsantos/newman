import React from 'react';

import AboutPicture from '../../../assets/photos/about-picture.jpg'

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container grid">
        <div className="image">
          <img
            src={AboutPicture}
            alt="Homem sorrindo apoiado na cadeira de barbeiro" />
        </div>
        <div className="text">
          <h2 className="title">Sobre nós</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit labore ad nesciunt eius vitae, porro corporis
            eum! Est natus explicabo ad autem hic, at, quam rerum, saepe amet inventore nam!
          </p> <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit labore ad nesciunt eius vitae, porro corporis
            eum! Est natus explicabo ad autem hic, at, quam rerum, saepe amet inventore nam!
          </p> <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit labore ad nesciunt eius vitae, porro corporis
            eum! Est natus explicabo ad autem hic, at, quam rerum, saepe amet inventore nam!
          </p> <br />
        </div>
      </div>
    </section>
  );
}

export default About;