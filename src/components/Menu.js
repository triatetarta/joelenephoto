import React, { useState } from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { menuFade } from '../animation';
import homeVid from '../assets/video/home.mp4';
import aboutVid from '../assets/video/about.mp4';
import beautyVid from '../assets/video/beauty.mp4';
import contactVid from '../assets/video/contact.mp4';

const navRoutes = [
  { id: 0, title: 'home', path: '/', video: homeVid },
  { id: 1, title: 'about', path: '/about', video: aboutVid },
  { id: 2, title: 'beauty', path: '/beauty', video: beautyVid },
  { id: 3, title: 'contact', path: '/contact', video: contactVid },
];

const Menu = () => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: 'home.mp4',
    key: '0',
  });

  return (
    <motion.div
      variants={menuFade}
      initial='from'
      animate='to'
      exit='exit'
      className='hamMenu'
    >
      <div className='container'>
        <div className='nav-list'>
          <ul>
            {navRoutes.map((route) => (
              <motion.li
                key={route.id}
                onHoverStart={() =>
                  setRevealVideo({
                    show: true,
                    video: route.video,
                    key: route.id,
                  })
                }
                onHoverEnd={() =>
                  setRevealVideo({
                    show: false,
                    video: route.video,
                    key: route.id,
                  })
                }
              >
                <Link to={route.path}>
                  <motion.div
                    initial={{ x: -108 }}
                    whileHover={{
                      x: -40,
                      transition: {
                        duration: 0.4,
                        ease: [0.6, 0.05, -0.01, 0.9],
                      },
                    }}
                    className='link'
                  >
                    <span className='arrow-right'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 101 57'
                      >
                        <path
                          d='M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z'
                          fill='#FFF'
                          fillRule='evenodd'
                        ></path>
                      </svg>
                    </span>
                    <button>{route.title}</button>
                  </motion.div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className='nav-videos'>
          <motion.div
            animate={{ width: revealVideo.show ? 0 : '100%' }}
            className='reveal'
          ></motion.div>
          <div className='video'>
            <AnimatePresence initial={false} exitBeforeEnter>
              <motion.video
                key={revealVideo.key}
                src={revealVideo.video}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                autoPlay
                loop
                muted
              ></motion.video>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
