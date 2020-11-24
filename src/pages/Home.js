import React from 'react';
import Images from '../components/Images';
import Social from '../components/Social';

import './Home.scss';

import { motion } from 'framer-motion';
import { pageAnimation, firstName, lastName, letter } from '../animation';
import SocialMob from '../components/SocialMob';

const Home = () => {
  return (
    <motion.div
      className='home'
      variants={pageAnimation}
      initial='from'
      animate='to'
      exit='exit'
    >
      <motion.div className='home-title'>
        <div className='hide'>
          <motion.span variants={firstName}>
            <motion.span variants={letter} className='joelene'>
              J
            </motion.span>
            <motion.span variants={letter} className='joelene'>
              O
            </motion.span>
            <motion.span variants={letter} className='joelene'>
              E
            </motion.span>
            <motion.span variants={letter} className='joelene'>
              L
            </motion.span>
            <motion.span variants={letter} className='joelene'>
              E
            </motion.span>
            <motion.span variants={letter} className='joelene'>
              N
            </motion.span>
            <motion.span variants={letter} className='joelene'>
              E
            </motion.span>
          </motion.span>
        </div>
        <div className='hide'>
          <motion.span className='kylie' variants={lastName}>
            <div className='mt-2'>
              <motion.span variants={letter} className='kylie'>
                K
              </motion.span>
              <motion.span variants={letter} className='kylie'>
                Y
              </motion.span>
              <motion.span variants={letter} className='kylie'>
                L
              </motion.span>
              <motion.span variants={letter} className='kylie'>
                I
              </motion.span>
              <motion.span variants={letter} className='kylie'>
                E
              </motion.span>
            </div>
          </motion.span>
        </div>
      </motion.div>
      <Images />
      <Social />
      <SocialMob />
      <div className='mob-title'>
        <div className='hide'>
          <h5>BEAUTY PHOTOGRAPHER</h5>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
