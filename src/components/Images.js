import React from 'react';
import './Images.scss';
import { mainImages } from '../data';
import { motion } from 'framer-motion';
import { imageReveal, maskReveal } from '../animation';

const Images = () => {
  return (
    <motion.div className='main-images'>
      {mainImages.map((image) => {
        const { id, url, name } = image;
        return (
          <motion.div drag className='image-container' key={id}>
            <motion.div variants={maskReveal} className='image-mask'>
              <motion.img variants={imageReveal} src={url} alt={name} />
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Images;
