import React from 'react';
import './ContactMe.scss';
import Arrow from '../components/Arrow';
import Social from '../components/Social';
import { contactImages } from '../data';

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ContactMe = () => {
  return (
    <motion.div
      className='contact-me'
      variants={pageAnimation}
      initial='from'
      animate='to'
      exit='exit'
    >
      <div className='contact-details'>
        <div className='col-1'>
          <div className='row'>
            <h1>
              CONT<span>ACT</span>
            </h1>
          </div>
          <div className='row'>
            <p>email:</p>
          </div>
          <div className='row'>
            <p>address:</p>
          </div>
          <div className='row'>
            <p>phone number:</p>
          </div>
        </div>
      </div>

      <div className='images-contact'>
        {contactImages.map((image) => {
          const { id, url, name } = image;
          return (
            <div className='image-container' key={id}>
              <img src={url} alt={name} />
            </div>
          );
        })}
      </div>
      <Arrow />
      <Social />
    </motion.div>
  );
};

export default ContactMe;
