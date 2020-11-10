import React from 'react';
import './About.scss';
import { aboutImages } from '../data';

const About = () => {
  return (
    <div className='about'>
      <div className='back'>B</div>
      <div className='about-images'>
        {aboutImages.map((image) => {
          const { id, url, name } = image;
          return (
            <div className='image-container' key={id}>
              <img src={url} alt={name} />
            </div>
          );
        })}
      </div>
      <div className='about-text'>
        <h1>About</h1>
        <h2>Me</h2>
        <p>
          I am a London based photographer specialising in and editorial
          portrait photography. I have a studio set up in my home in North
          London - Zone 2 - and I gather a professional and friendly styling
          team that help execute the photoshoots to perfection.
          <br />
          <br />I have always had an interest in photography, having studied it
          throughout high school. I started my career as a primary school
          teacher but later followed my passion for photography after moving to
          London from Australia in 2010.
          <br />
          <br />I see my style as soft, simple and feminine but I also love to
          add some edge depending on the brief. My work is all about
          collaboration between my team to create beautiful, captivating
          photographs.
        </p>
      </div>
    </div>
  );
};

export default About;
