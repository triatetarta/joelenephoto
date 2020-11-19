import React, { useState } from 'react';
import './Social.scss';
import { motion } from 'framer-motion';

const socialHover = {
  hover: {
    scale: 1.5,
    transition: {
      duration: 0.3,
    },
  },
};

const Social = () => {
  return (
    <div className='social'>
      <ul>
        <li>
          <a href='https://instagram.com'>
            <motion.button variants={socialHover} whileHover='hover'>
              IG
            </motion.button>
          </a>
        </li>
        <li>
          <a href='https://facebook.com'>
            <motion.button variants={socialHover} whileHover='hover'>
              FB
            </motion.button>
          </a>
        </li>
        <li>
          <a href='https://pinterest.com'>
            <motion.button variants={socialHover} whileHover='hover'>
              PI
            </motion.button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
