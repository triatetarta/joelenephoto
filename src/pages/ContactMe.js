import React, { useRef } from 'react';
import './ContactMe.scss';
import { contactImages } from '../data';
import { motion } from 'framer-motion';
import {
  pageAnimation,
  aboutText,
  aboutTextContainer,
  maskReveal3,
} from '../animation';
import Arrow from '../components/Arrow';
import { Link } from 'react-router-dom';

const ContactMe = () => {
  const constraintsContact = useRef(null);

  return (
    <>
      <motion.div
        ref={constraintsContact}
        className='contact-me'
        variants={pageAnimation}
        initial='from'
        animate='to'
        exit='exit'
      >
        <motion.div variants={aboutTextContainer} className='contact-details'>
          <div className='col-1'>
            <div className='row'>
              <div className='hide'>
                <motion.h1 variants={aboutText}>CONTACT</motion.h1>
              </div>
            </div>
            <div className='row'>
              <div className='hide'>
                <motion.p variants={aboutText}>
                  <a
                    href='mailto:joelenekylie@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    joelenekylie@gmail.com
                  </a>
                </motion.p>
              </div>
            </div>
            <div className='row'>
              <div className='hide'>
                <motion.p variants={aboutText}>London, UK</motion.p>
              </div>
            </div>
            <div className='row'>
              <div className='hide'>
                <motion.p variants={aboutText}>tel: +44 0771 056 6369</motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className='images-contact'>
          {contactImages.map((image) => {
            const { id, url, name } = image;
            return (
              <motion.div
                drag
                dragConstraints={constraintsContact}
                className='image-container'
                key={id}
              >
                <motion.div variants={maskReveal3} className='image-mask'>
                  <motion.img src={url} alt={name} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <div className='hide-arrow'>
        <Link to='/'>
          <Arrow />
        </Link>
      </div>
    </>
  );
};

export default ContactMe;
