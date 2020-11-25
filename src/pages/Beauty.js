import React, { useRef } from 'react';
import { beautyGallery } from '../data';
import './Beauty.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  pageAnimation,
  beautyKylie,
  repeatGallery,
  maskReveal2,
  imageReveal2,
} from '../animation';
import Social from '../components/Social';
import ViewMore from '../components/ViewMore';
import BeautyMobile from '../components/BeautyMobile';
import Arrow from '../components/Arrow';

const Beauty = () => {
  const contraintsBeauty = useRef(null);

  return (
    <>
      <motion.div
        ref={contraintsBeauty}
        className='beauty-gallery'
        variants={pageAnimation}
        initial='from'
        animate='to'
        exit='exit'
      >
        <div className='cl-1'>
          <div className='row-1'>
            <ViewMore />
          </div>
          <motion.div className='row-2'>
            <motion.h4 variants={beautyKylie}>JOELENE KYLIE</motion.h4>
            <motion.h4 variants={beautyKylie}>JOELENE KYLIE</motion.h4>
            <motion.h4 variants={beautyKylie}>JOELENE KYLIE</motion.h4>
            <motion.h4 variants={beautyKylie}>JOELENE KYLIE</motion.h4>
            <motion.h4 variants={beautyKylie}>JOELENE KYLIE</motion.h4>
            <motion.h4 variants={beautyKylie}>JOELENE KYLIE</motion.h4>
            <motion.h4 variants={beautyKylie}>JOELENE KYLIE</motion.h4>
            <motion.h4 variants={beautyKylie}>JOELENE KYLIE</motion.h4>
            <motion.h4 variants={beautyKylie}>JOELENE KYLIE</motion.h4>
          </motion.div>
        </div>
        <motion.div className='cl-2'>
          {beautyGallery.map((image) => {
            const { id, url, name } = image;
            return (
              <motion.div
                drag
                dragConstraints={contraintsBeauty}
                className='image-container'
                key={id}
              >
                <motion.div variants={maskReveal2} className='image-mask'>
                  <motion.img variants={imageReveal2} src={url} alt={name} />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
        <div className='cl-3'>
          <motion.div className='row-1'>
            <motion.h4 variants={repeatGallery}>GALLERY GALLERY</motion.h4>
            <motion.h4 variants={repeatGallery}>GALLERY GALLERY</motion.h4>
            <motion.h5 variants={repeatGallery}>GALLERY GALLERY</motion.h5>
            <motion.h5 variants={repeatGallery}>GALLERY GALLERY</motion.h5>
            <motion.h5 variants={repeatGallery}>GALLERY GALLERY</motion.h5>
            <motion.h4 variants={repeatGallery}>GALLERY GALLERY</motion.h4>
            <motion.h4 variants={repeatGallery}>GALLERY GALLERY</motion.h4>
            <motion.h4 variants={repeatGallery}>GALLERY GALLERY</motion.h4>
          </motion.div>
        </div>

        <Social />
      </motion.div>
      <BeautyMobile />
      <div className='hide-arrow'>
        <Link to='/'>
          <Arrow />
        </Link>
      </div>
    </>
  );
};

export default Beauty;
