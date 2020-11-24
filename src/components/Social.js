import React, { useState } from 'react';
import './Social.scss';
import { motion } from 'framer-motion';

const Social = () => {
  const [revealInsta, setRevealInsta] = useState(false);
  const [revealFace, setRevealFace] = useState(false);
  const [revealPinte, setRevealPinte] = useState(false);

  return (
    <div className='social'>
      <div className='social-container'>
        <motion.div className='social-name'>
          <motion.a
            onHoverStart={() => setRevealInsta(true)}
            onHoverEnd={() => setRevealInsta(false)}
            href='https://instagram.com'
          >
            <h6>in</h6>
            <motion.span>
              stagram
              <motion.div
                animate={{
                  x: revealInsta ? '100%' : '0',
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
                className='reveal'
              ></motion.div>
            </motion.span>
          </motion.a>
        </motion.div>
        <motion.div className='social-name'>
          <motion.a
            onHoverStart={() => setRevealFace(true)}
            onHoverEnd={() => setRevealFace(false)}
            href='https://facebook.com'
          >
            <h6>fa</h6>
            <motion.span>
              cebook
              <motion.div
                animate={{
                  x: revealFace ? '100%' : '0',
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
                className='reveal'
              ></motion.div>
            </motion.span>
          </motion.a>
        </motion.div>
        <motion.div className='social-name'>
          <motion.a
            onHoverStart={() => setRevealPinte(true)}
            onHoverEnd={() => setRevealPinte(false)}
            href='https://facebook.com'
          >
            <h6>pi</h6>
            <motion.span>
              nterest
              <motion.div
                animate={{
                  x: revealPinte ? '100%' : '0',
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
                className='reveal'
              ></motion.div>
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Social;
