import React from 'react';
import Arrow from '../components/Arrow';
import { beautyGallery } from '../data';
import './Beauty.scss';

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const Beauty = () => {
  return (
    <motion.div
      className='beauty-gallery'
      variants={pageAnimation}
      initial='from'
      animate='to'
      exit='exit'
    >
      <div className='cl-1'>
        <div className='row-1'>
          <div className='hide'>
            <span>VIEW</span>
          </div>
          <div className='hide'>
            <span>MORE</span>
          </div>
          <div className='hide'>
            <span>ON MY</span>
          </div>
          <div className='hide'>
            <span>INSTAGRAM</span>
          </div>
          <div className='hide'>
            <span>PAGE</span>
          </div>
        </div>
        <div className='row-2'>
          <h4>JOELENE KYLIE</h4>
          <h4>JOELENE KYLIE</h4>
          <h4>JOELENE KYLIE</h4>
          <h4>JOELENE KYLIE</h4>
          <h4>JOELENE KYLIE</h4>
          <h4>JOELENE KYLIE</h4>
          <h4>JOELENE KYLIE</h4>
          <h4>JOELENE KYLIE</h4>
          <h4>JOELENE KYLIE</h4>
        </div>
      </div>
      <div className='cl-2'>
        {beautyGallery.map((image) => {
          const { id, url, name } = image;
          return (
            <div className='image-container' key={id}>
              <img src={url} alt={name} />
            </div>
          );
        })}
      </div>
      <div className='cl-3'>
        <div className='row-1'>
          <h4>GALLERY GALLERY</h4>
          <h4>GALLERY GALLERY</h4>
          <h5>GALLERY GALLERY</h5>
          <h5>GALLERY GALLERY</h5>
          <h5>GALLERY GALLERY</h5>
          <h4>GALLERY GALLERY</h4>
          <h4>GALLERY GALLERY</h4>
          <h4>GALLERY GALLERY</h4>
        </div>
      </div>
      <Arrow />
    </motion.div>
  );
};

export default Beauty;
