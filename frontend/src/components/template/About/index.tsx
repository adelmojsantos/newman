import React from 'react';

// import { Container } from './styles';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container grid">
        <div className="image">
          <img
            src="https://media.istockphoto.com/photos/shot-of-a-handsome-young-barber-standing-alone-in-his-salon-picture-id1365608023?b=1&k=20&m=1365608023&s=170667a&w=0&h=hkcbZSXI3AXG-a44bFrjdHFKF-XRwBGUbVx5NSkur3s="
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