import React from 'react';
import css from './About.module.css';

// const path_img = require('img/photo_5433794329010357333_y.jpg');
// const path_img2 = require('img/photo_with.jpg');
const About = () => {
  return (
    <section className={css.about_container}>
      <h2>About Me</h2>
      <div className={css.about_info}>
        {' '}
        <img src={require('img/photo_with.jpg')} alt="My imag" width={250} />
        <div>
          {' '}
          <p className={css.about_text}>Lena Maistrenko</p>
          <p className={css.about_text}>
            I am a junior front-end developer with a passion for creating
            websites and web applications. My skills include HTML, CSS,
            JavaScript, React, and Node.js.
          </p>
          <p className={css.about_text}>
            I love the process of turning ideas into interactive and visually
            appealing digital experiences.
          </p>
          <div className={css.about_wrapper}>
            <h1 className={css.about_title}>
              Let's do something incredibly cool
            </h1>
          </div>
          <a href="https://drive.google.com/file/d/1V7iwNK0CuGIbbedosIqsJfocNpEI3sMV/view?usp=sharing">
            CV
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
