import React, { useRef } from 'react';
import './About.scss';
import Social from '../components/Social';
import { aboutImages } from '../data';
import { motion } from 'framer-motion';
import {
  pageAnimation,
  imageReveal1,
  maskReveal1,
  aboutText,
  aboutTextContainer,
  fadeIn,
} from '../animation';
import { Link } from 'react-router-dom';
import Arrow from '../components/Arrow';

const About = () => {
  const constraintsAbout = useRef(null);

  return (
    <>
      <motion.div
        ref={constraintsAbout}
        className='about'
        variants={pageAnimation}
        initial='from'
        animate='to'
        exit='exit'
      >
        <motion.div className='about-images'>
          {aboutImages.map((image) => {
            const { id, url, name } = image;
            return (
              <motion.div
                drag
                dragConstraints={constraintsAbout}
                className='image-container'
                key={id}
              >
                <motion.div variants={maskReveal1} className='image-mask'>
                  <motion.img variants={imageReveal1} src={url} alt={name} />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
        <div className='about-text'>
          <motion.h1 variants={fadeIn}>About</motion.h1>

          <motion.h2 variants={fadeIn}>Me</motion.h2>

          <motion.div
            variants={aboutTextContainer}
            className='about-p-container'
          >
            <div className='hide'>
              <motion.p variants={aboutText}>
                I am a London based photographer specialising in and editorial
                portrait photography. I have a studio set up in my home in North
                London - Zone 2 - and I gather a professional and friendly
                styling team that help execute the photoshoots to perfection.
              </motion.p>
            </div>
            <div className='hide'>
              <motion.p variants={aboutText}>
                I have always had an interest in photography, having studied it
                throughout high school. I started my career as a primary school
                teacher but later followed my passion for photography after
                moving to London from Australia in 2010.
              </motion.p>
            </div>
            <div className='hide'>
              <motion.p variants={aboutText}>
                I see my style as soft, simple and feminine but I also love to
                add some edge depending on the brief. My work is all about
                collaboration between my team to create beautiful, captivating
                photographs.
              </motion.p>
            </div>
          </motion.div>
        </div>

        <Social />
      </motion.div>
      <div className='hide-arrow'>
        <Link to='/'>
          <Arrow />
        </Link>
      </div>
    </>
  );
};

export default About;
