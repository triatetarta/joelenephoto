import React, { useState } from 'react';
import './Arrow.scss';
import { motion } from 'framer-motion';

const arrowClick = {
  unclicked: { y: '92%' },
  clicked: { y: '-100%', transition: { duration: 1 } },
};

const Arrow = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <motion.div
      className='arrow-hide'
      initial={{ y: '100%' }}
      animate={{
        y: '0%',
        transition: { duration: 2, delay: 1 },
      }}
    >
      <motion.div
        onClick={() => setClicked(!clicked)}
        className='arrow'
        initial='unclicked'
        exit='clicked'
        animate={clicked && 'clicked'}
        variants={arrowClick}
      >
        <svg
          width='74'
          height='888'
          viewBox='0 0 74 888'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M40.5356 1.46447C38.583 -0.488155 35.4171 -0.488155 33.4645 1.46447L1.6447 33.2843C-0.307923 35.2369 -0.307923 38.4027 1.6447 40.3553C3.59732 42.308 6.76314 42.308 8.71577 40.3553L37 12.0711L65.2843 40.3553C67.2369 42.308 70.4028 42.308 72.3554 40.3553C74.308 38.4027 74.308 35.2369 72.3554 33.2843L40.5356 1.46447ZM42 888L42 5L32 5L32 888L42 888Z'
            fill='black'
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default Arrow;
